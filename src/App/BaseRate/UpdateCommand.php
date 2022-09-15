<?php

declare(strict_types=1);

namespace App\BaseRate;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

final class UpdateCommand extends Command
{
    public const DEFAULT_NAME = 'update-base-rates';

    public function __construct(private readonly BaseRateHistory $history)
    {
        parent::__construct(self::DEFAULT_NAME);
    }

    public function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->history->update();
        $style = new SymfonyStyle($input, $output);
        $style->info('Base rates updated successfully');

        return self::SUCCESS;
    }

    protected function configure(): void
    {
        $this->setDescription('Update rate history by fetching the most recent rates from the Bank of England');
    }
}
