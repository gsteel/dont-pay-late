<?php

declare(strict_types=1);

namespace App\BaseRate;

use App\Exception\BadMethodCall;
use ArrayIterator;
use Countable;
use DateTimeImmutable;
use DateTimeInterface;
use IteratorAggregate;
use JsonSerializable;
use Traversable;

use function array_reverse;
use function array_slice;
use function count;
use function reset;
use function usort;

/**
 * @implements IteratorAggregate<array-key, RateChange>
 */
final class ChangeList implements IteratorAggregate, Countable, JsonSerializable
{
    /** @param list<RateChange> $rates */
    private function __construct(private readonly array $rates)
    {
    }

    /** @param list<RateChange> $rates */
    public static function fromArray(array $rates): self
    {
        // Sort in date order ascending
        usort($rates, static fn (RateChange $a, RateChange $b) => $a->date <=> $b->date);

        $last = null;
        $changes = [];
        foreach ($rates as $rate) {
            if ($last instanceof RateChange && $last->rate === $rate->rate) {
                continue;
            }

            $changes[] = $rate;
            $last = $rate;
        }

        return new self($changes);
    }

    public function findChangeOnOrPreceding(DateTimeInterface $date): ?RateChange
    {
        foreach (array_reverse($this->rates) as $rate) {
            if ($rate->date > $date) {
                continue;
            }

            return $rate;
        }

        return null;
    }

    /** @return Traversable<array-key, RateChange> */
    public function getIterator(): Traversable
    {
        return new ArrayIterator($this->rates);
    }

    public function count(): int
    {
        return count($this->rates);
    }

    /** @return list<RateChange> */
    public function jsonSerialize(): array
    {
        return $this->rates;
    }

    /** @param list<array{date:string, rate:float}> $data */
    public static function fromJsonArray(array $data): self
    {
        $rates = [];
        foreach ($data as $datum) {
            $rates[] = RateChange::fromArray($datum);
        }

        return self::fromArray($rates);
    }

    public function first(): ?RateChange
    {
        $array = array_slice($this->rates, 0, 1);
        $first = reset($array);

        return $first instanceof RateChange ? $first : null;
    }

    public function earliestDate(): DateTimeImmutable
    {
        $first = $this->first();
        if (! $first) {
            throw new BadMethodCall('The earliest date cannot be retrieved from an empty list');
        }

        return $first->date;
    }
}
