<?php

declare(strict_types=1);

namespace App\BaseRate;

use App\Util\Assert;
use DateTimeImmutable;
use DateTimeInterface;
use JsonSerializable;

final class RateChange implements JsonSerializable
{
    public function __construct(
        public readonly DateTimeImmutable $date,
        public readonly float $rate
    ) {
    }

    /** @return array{date: string, rate: float} */
    public function jsonSerialize(): array
    {
        return [
            'date' => $this->date->format(DateTimeInterface::ATOM),
            'rate' => $this->rate,
        ];
    }

    /** @param array{date: string, rate: float} $data */
    public static function fromArray(array $data): self
    {
        $date = DateTimeImmutable::createFromFormat(DateTimeInterface::ATOM, $data['date']);
        Assert::isInstanceOf($date, DateTimeImmutable::class);

        return new self($date, $data['rate']);
    }
}
