<?php

declare(strict_types=1);

namespace App\BaseRate;

use DateTimeImmutable;

interface ClientContract
{
    public function minimumDate(): DateTimeImmutable;

    public function fetchAll(): ChangeList;
}
