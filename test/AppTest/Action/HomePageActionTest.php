<?php

namespace AppTest\Action;

use App\Action\HomePageAction;
use Zend\Diactoros\Response;
use Zend\Diactoros\ServerRequest;
use Zend\Expressive\Template\TemplateRendererInterface;
use TestSuiteBootstrap;

class HomePageActionTest extends \PHPUnit_Framework_TestCase
{
    /** @var TemplateRendererInterface */
    protected $renderer;

    protected function setUp()
    {
        $container = TestSuiteBootstrap::getContainer();
        $this->renderer = $container->get(TemplateRendererInterface::class);
    }

    public function testResponse()
    {
        $homePage = new HomePageAction($this->renderer);
        $response = $homePage(new ServerRequest, new Response);

        $this->assertTrue($response instanceof Response);
    }
}
