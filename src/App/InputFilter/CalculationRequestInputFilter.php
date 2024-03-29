<?php

declare(strict_types=1);

namespace App\InputFilter;

use App\Exception\BadMethodCall;
use DateTimeImmutable;
use Laminas\Filter\StringTrim;
use Laminas\Filter\ToFloat;
use Laminas\Filter\ToInt;
use Laminas\Filter\ToNull;
use Laminas\InputFilter\InputFilter;
use Laminas\Validator\Between;
use Laminas\Validator\Date;
use Laminas\Validator\GreaterThan;
use Laminas\Validator\NotEmpty;

use function sprintf;

/**
 * @psalm-type ValidPayload = array{
 *     dueDate: non-empty-string,
 *     termsInDays: int<0, 365>,
 *     amount: float,
 * }
 * @extends InputFilter<ValidPayload>
 */
final class CalculationRequestInputFilter extends InputFilter
{
    public function __construct(private readonly DateTimeImmutable $minimumDate)
    {
    }

    public function init(): void
    {
        $dateError = 'Please provide a due date in YYYY-MM-DD format';
        $tooOld = sprintf(
            'The earliest date that a base rate can be found is %s but the date you have entered is prior to this date',
            $this->minimumDate->format('jS F Y'),
        );

        $this->add([
            'name' => 'dueDate',
            'required' => true,
            'filters' => [
                'trim' => ['name' => StringTrim::class],
                'toNull' => ['name' => ToNull::class],
            ],
            'validators' => [
                'notEmpty' => [
                    'name' => NotEmpty::class,
                    'options' => [
                        'messages' => [
                            NotEmpty::IS_EMPTY => 'A value is required for the due date of the invoice',
                        ],
                    ],
                    'break_chain_on_failure' => true,
                ],
                'isDate' => [
                    'name' => Date::class,
                    'options' => [
                        'format' => 'Y-m-d',
                        'strict' => false,
                        'messages' => [
                            Date::FALSEFORMAT => $dateError,
                            Date::INVALID_DATE => $dateError,
                        ],
                    ],
                    'break_chain_on_failure' => true,
                ],
                'after' => [
                    'name' => GreaterThan::class,
                    'options' => [
                        'min' => $this->minimumDate->format('Y-m-d'),
                        'inclusive' => true,
                        'messages' => [
                            GreaterThan::NOT_GREATER => $tooOld,
                            GreaterThan::NOT_GREATER_INCLUSIVE => $tooOld,
                        ],
                    ],
                ],
            ],
        ]);

        $this->add([
            'name' => 'termsInDays',
            'required' => true,
            'filters' => [
                'toNull' => [
                    'name' => ToNull::class,
                    'options' => [
                        'type' => ToNull::TYPE_ALL & ~(ToNull::TYPE_ZERO_STRING | ToNull::TYPE_INTEGER),
                    ],
                ],
                'toInt' => [
                    'name' => ToInt::class,
                ],
            ],
            'validators' => [
                'notEmpty' => [
                    'name' => NotEmpty::class,
                    'options' => [
                        'messages' => [
                            NotEmpty::IS_EMPTY => 'A value is required for terms of payment in days. Zero is an '
                                . 'acceptable value if invoices are payable by return.',
                        ],
                        'type' => NotEmpty::ALL & ~(NotEmpty::ZERO | NotEmpty::INTEGER),
                    ],
                    'break_chain_on_failure' => true,
                ],
                'reasonableTerms' => [
                    'name' => Between::class,
                    'options' => [
                        'min' => 0,
                        'max' => 365,
                        'inclusive' => true,
                        'messages' => [
                            Between::NOT_BETWEEN => 'Terms must be between zero and 365 days. If your terms are more '
                                . 'than a year then it’s no wonder you haven’t been paid!',
                        ],
                    ],
                ],
            ],
        ]);

        $this->add([
            'name' => 'amount',
            'required' => true,
            'filters' => [
                'toNull' => ['name' => ToNull::class],
                'toFloat' => ['name' => ToFloat::class],
            ],
            'validators' => [
                'notEmpty' => [
                    'name' => NotEmpty::class,
                    'options' => [
                        'messages' => [
                            NotEmpty::IS_EMPTY => 'A value is required for the amount of the invoice',
                        ],
                    ],
                    'break_chain_on_failure' => true,
                ],
                'positive' => [
                    'name' => GreaterThan::class,
                    'options' => [
                        'min' => 0,
                        'inclusive' => false,
                        'messages' => [
                            GreaterThan::NOT_GREATER => 'The invoice amount must be greater than zero',
                        ],
                    ],
                ],
            ],
        ]);
    }

    /** @psalm-return ValidPayload */
    public function getValidValues(): array
    {
        if (! $this->isValid()) {
            throw new BadMethodCall('Payload is not valid');
        }

        return $this->getValues();
    }
}
