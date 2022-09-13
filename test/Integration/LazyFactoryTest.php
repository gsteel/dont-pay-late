<?php

declare(strict_types=1);

namespace AppTest\Integration;

use App\Util\Assert;
use AppTest\Integration\Framework\TestCase;
use Generator;
use Laminas;
use Laminas\Filter\FilterPluginManager;
use Laminas\Form\FormElementManager;
use Laminas\InputFilter\InputFilterPluginManager;
use Laminas\Validator\ValidatorPluginManager;
use Laminas\View\HelperPluginManager;
use Psr\Container\ContainerInterface;

use function array_keys;
use function array_merge;
use function assert;
use function in_array;
use function sprintf;

class LazyFactoryTest extends TestCase
{
    /** @var array<array-key, class-string|string> */
    protected static array $servicesToIgnore = [
        'FormAnnotationBuilder',
        'FormAttributeBuilder',
        Laminas\Form\Annotation\AnnotationBuilder::class,
        Laminas\Form\Annotation\AttributeBuilder::class,
    ];

    /**
     * @param array<string, array<string, mixed>> $config
     *
     * @return array<string>
     */
    private function mergeFactoriesAndAliasesFor(array $config, string $key): array
    {
        $services = $config[$key] ?? [];
        $factories = $services['factories'] ?? [];
        Assert::isArray($factories);
        $aliases = $services['aliases'] ?? [];
        Assert::isArray($aliases);

        $values = array_merge(
            array_keys($factories),
            array_keys($aliases),
        );

        Assert::allString($values);

        return $values;
    }

    /** @return Generator<string, array{0: ContainerInterface, 1: string}> */
    public function serviceProvider(): Generator
    {
        $container = TestCase::getContainer();
        /** @psalm-var array<string, array<string, mixed>> $config */
        $config = $container->get('config');
        $i = 0;

        foreach ($this->mergeFactoriesAndAliasesFor($config, 'dependencies') as $name) {
            yield sprintf('Service [%d]: %s', ++$i, $name) => [$container, $name];
        }

        $viewHelperPluginManager = $container->get(HelperPluginManager::class);
        assert($viewHelperPluginManager instanceof ContainerInterface);
        foreach ($this->mergeFactoriesAndAliasesFor($config, 'view_helpers') as $name) {
            yield sprintf('View Helper: %s', $name) => [$viewHelperPluginManager, $name];
        }

        $formPluginManager = $container->get(FormElementManager::class);
        assert($formPluginManager instanceof ContainerInterface);
        foreach ($this->mergeFactoriesAndAliasesFor($config, 'form_elements') as $name) {
            yield sprintf('Form Element: %s', $name) => [$formPluginManager, $name];
        }

        $filterPluginManager = $container->get(FilterPluginManager::class);
        assert($filterPluginManager instanceof ContainerInterface);
        foreach ($this->mergeFactoriesAndAliasesFor($config, 'filters') as $name) {
            yield sprintf('Filter: %s', $name) => [$filterPluginManager, $name];
        }

        $inputPluginManager = $container->get(InputFilterPluginManager::class);
        assert($inputPluginManager instanceof ContainerInterface);
        foreach ($this->mergeFactoriesAndAliasesFor($config, 'input_filters') as $name) {
            yield sprintf('Input Filters: %s', $name) => [$inputPluginManager, $name];
        }

        $validatorPluginManager = $container->get(ValidatorPluginManager::class);
        assert($validatorPluginManager instanceof ContainerInterface);
        foreach ($this->mergeFactoriesAndAliasesFor($config, 'validators') as $name) {
            yield sprintf('Validators: %s', $name) => [$validatorPluginManager, $name];
        }
    }

    /** @dataProvider serviceProvider */
    public function testServiceCanBeRetrieved(ContainerInterface $container, string $name): void
    {
        if (in_array($name, self::$servicesToIgnore, true)) {
            $this->expectNotToPerformAssertions();

            return;
        }

        self::assertTrue($container->has($name));
        $container->get($name);
    }
}
