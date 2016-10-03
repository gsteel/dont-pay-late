<?php

namespace AppTest\Action;

use App\Action\HomePageAction;
use App\Action\HomePageFactory;
use Interop\Container\ContainerInterface;
use Zend\Expressive\Router\RouterInterface;
use Zend\Expressive\Template\TemplateRendererInterface;
use TestSuiteBootstrap;

class HomePageFactoryTest extends \PHPUnit_Framework_TestCase
{
    /** @var ContainerInterface */
    protected $container;

    protected function setUp()
    {
        $this->container = TestSuiteBootstrap::getContainer();
    }

    public function testFactoryWithTemplate()
    {
        $homePage = $this->container->get(HomePageAction::class);

        $this->assertTrue($homePage instanceof HomePageAction);
    }
}
