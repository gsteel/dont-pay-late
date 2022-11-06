<?php

declare(strict_types=1);

namespace AppTest\Integration\InputFilter;

use App\BaseRate\BaseRateHistory;
use App\Exception\BadMethodCall;
use App\InputFilter\CalculationRequestInputFilter;
use AppTest\Integration\Framework\TestCase;
use DateInterval;
use Laminas\InputFilter\InputFilterPluginManager;
use Laminas\Validator\GreaterThan;

use function sprintf;

class CalculationRequestInputFilterTest extends TestCase
{
    private CalculationRequestInputFilter $filter;

    protected function setUp(): void
    {
        parent::setUp();
        $container = $this->getContainer();
        $filters = $container->get(InputFilterPluginManager::class);
        $this->filter = $filters->get(CalculationRequestInputFilter::class);
    }

    /** @return list<array{0: string}> */
    public function requireFieldsProvider(): array
    {
        return [
            ['dueDate'],
            ['termsInDays'],
            ['amount'],
        ];
    }

    /** @dataProvider requireFieldsProvider */
    public function testRequiredFields(string $fieldName): void
    {
        $this->filter->setData([]);
        self::assertFalse($this->filter->isValid());
        $messages = $this->filter->getMessages();
        self::assertArrayHasKey($fieldName, $messages);
    }

    public function testEmptyValuesWillBeConvertedToNulls(): void
    {
        $this->filter->setData([]);
        self::assertFalse($this->filter->isValid());
        $values = $this->filter->getValues();
        self::assertEquals([
            'dueDate' => null,
            'termsInDays' => null,
            'amount' => null,
        ], $values);
    }

    public function testValidPayload(): void
    {
        $this->filter->setData([
            'dueDate' => '2020-01-01',
            'termsInDays' => '30',
            'amount' => '123.45',
        ]);
        self::assertTrue($this->filter->isValid());
        self::assertEquals([
            'dueDate' => '2020-01-01',
            'termsInDays' => 30,
            'amount' => 123.45,
        ], $this->filter->getValues());
    }

    public function testADatePriorToTheEarliestDateOnRecordWillCauseValidationFailure(): void
    {
        $container = $this->getContainer();
        $list = $container->get(BaseRateHistory::class)->get();
        $earliestDate = $list->earliestDate();
        $date = $earliestDate->sub(new DateInterval('P7D'));

        $this->filter->setData([
            'dueDate' => $date->format('Y-m-d'),
            'termsInDays' => '30',
            'amount' => '123.45',
        ]);

        self::assertFalse($this->filter->isValid());
        $messages = $this->filter->getMessages();
        self::assertArrayHasKey('dueDate', $messages);
        $value = $messages['dueDate'];
        self::assertArrayHasKey(GreaterThan::NOT_GREATER_INCLUSIVE, $value);
        $expect = sprintf(
            'The earliest date that a base rate can be found is %s but the date you have entered is prior to this date',
            $earliestDate->format('jS F Y'),
        );
        self::assertEquals($expect, $value[GreaterThan::NOT_GREATER_INCLUSIVE]);
    }

    public function testRetrievingDataSetWithInvalidInputIsExceptional(): void
    {
        $this->filter->setData([]);
        $this->expectException(BadMethodCall::class);
        $this->filter->getValidValues();
    }

    public function testValidPayloadYieldsExpectedValues(): void
    {
        $this->filter->setData([
            'dueDate' => '2020-01-01',
            'termsInDays' => '30',
            'amount' => '123.45',
        ]);
        self::assertEquals([
            'dueDate' => '2020-01-01',
            'termsInDays' => 30,
            'amount' => 123.45,
        ], $this->filter->getValidValues());
    }
}
