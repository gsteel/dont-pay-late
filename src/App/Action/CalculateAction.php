<?php
namespace App\Action;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\JsonResponse;
use Netglue\Money\BoeRateService;
use DateTime;
use DateInterval;

class CalculateAction
{

    /**
	 * Fixed fees as defined by the legislation
	 * @var array
	 */
	private $fixedFees = array(
		array(
			'minValue' => 0.01,
			'maxValue' => 999.99,
			'amount' => 40.0,
		),
		array(
			'minValue' => 1000,
			'maxValue' => 9999.99,
			'amount' => 70.0,
		),
		array(
			'minValue' => 10000,
			'maxValue' => NULL,
			'amount' => 100.0,
		),
	);

    /**
     * @var BoeRateService
     */
    private $rates;

    /**
     * @param BoeRateService $rates
     */
    public function __construct(BoeRateService $rates)
    {
        $this->rates = $rates;
    }

    /**
     * @param  Request  $request
     * @param  Response $response
     * @param  callable $next
     * @return HtmlResponse
     */
    public function __invoke(Request $request, Response $response, callable $next = null) : JsonResponse
    {
        if ($request->getMethod() !== 'POST') {
            return $this->error(405, 'Method not allowed');
        }

        $data = $request->getParsedBody();

        if (!$this->validatePayload($data, $message)) {
            return $this->error(400, $message);
        }

        if (!$this->isOverdue($data['date'], $data['terms'])) {
            return $this->error(400, 'So it looks like your invoice isn’t overdue yet…');
        }

        try {
            $calc = $this->calculate($data['date'], $data['terms'], $data['amount']);
        } catch(\OutOfRangeException $e) {
            return $this->error(400, 'Sorry, but interest rate history only goes back to around 1975');
        }
        $calc['error'] = false;
        $calc['code'] = 200;
        $calc['message'] = 'OK';

        return new JsonResponse($calc, 200);
    }

    private function validatePayload(array &$data, string &$message = null)
    {
        if (!isset($data['date'])) {
            $message = 'Please send a date in the format Y-m-d';
            return false;
        }
        $date = DateTime::createFromFormat('Y-m-d', $data['date']);

        if ($date > new DateTime) {
            $message = 'You should really set a date in the past';
            return false;
        }

        $data['date'] = $date;

        if (!isset($data['terms'])) {
            $data['terms'] = 0;
        }

        if (!is_numeric($data['terms'])) {
            $message = 'Invoice terms should be a number. For example, 30 to indicate terms of 30 days';
            return false;
        }

        $data['terms'] = (int) $data['terms'];

        if (!isset($data['amount']) || empty($data['amount'])) {
            $message = 'You really should provide an amount. I can’t really handle invoices for zero money…';
            return false;
        }

        if (!is_numeric($data['amount'])) {
            $message = 'The invoice amount should be a number such as 123.45';
            return false;
        }

        $data['amount'] = (float) $data['amount'];

        return true;
    }

    private function error(int $code, string $message = null, array $extra = null)
    {
        $view = [
            'error'   => true,
            'code'    => $code,
            'message' => $message,
        ];
        return new JsonResponse($view, $code);
    }

    public function isOverdue(DateTime $date, int $days) : bool
    {
        $interval      = new DateInterval(sprintf('P%dD', $days));
        $due           = (clone $date)->add($interval);
        $diff          = (new DateTime)->diff($due);
        $overdue       = $diff->days;
        if (new DateTime < $due || $overdue < 1) {
            return false;
        }
        return true;
    }

    public function calculate(DateTime $date, int $days, float $amount) : array
    {
        $interval      = new DateInterval(sprintf('P%dD', $days));
        $due           = (clone $date)->add($interval);
        $refDate       = $due;
        if ($due > $this->rates->lastDate()) {
            $refDate = null;
        }
        $diff          = (new DateTime)->diff($due);
        $overdue       = $diff->days;
        $baseRate      = $this->rates->getRate($refDate);
        $calcRate      = 8.0 + $baseRate;
        $dailyRate     = ($calcRate / 365);
        $dailyInterest = ($amount / 100) * $dailyRate;
        $interest      = round(($dailyInterest * $overdue), 2, PHP_ROUND_HALF_UP);
        $recoveryFee   = 0.0;

        foreach (array_reverse($this->fixedFees) as $fee) {
            if ($amount >= $fee['minValue']) {
                $recoveryFee = $fee['amount'];
                break;
            }
        }

        $fee           = $interest + $recoveryFee;
        $total         = $amount + $fee;

        return [
            'invoiceDate'         => $date->format('Y-m-d'),
            'terms'               => $days,
            'dueDate'             => $due->format('Y-m-d'),
            'daysOverdue'         => $overdue,
            'baseRate'            => $baseRate,
            'interestRate'        => $calcRate,
            'dailyInterestAmount' => round($dailyInterest, 4, PHP_ROUND_HALF_UP),
            'recoveryFee'         => $recoveryFee,
            'interestAmount'      => $interest,
            'totalFee'            => $fee,
            'totalDue'            => $total,
        ];
    }
}
