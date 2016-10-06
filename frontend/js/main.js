
/**
 * Site Wide jQuery Plugin
 */

/* global FastClick, ga, Pikaday, moment, Mustache */

$.fn.extend({
    animateCss: function (animationName, onEnd) {
        'use strict';
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            var me = $(this);
            me.removeClass('animated ' + animationName);
            if ('function' === typeof onEnd) {
                onEnd();
            }
        });
    }
});

;(function($, window, document, undefined) {
    'use strict';
    /**
	 * The name of this plugin
	 * @var string
	 */
	var pluginName = 'netglueSiteWide';

    /**
	 * Default Options for new instances
	 * @var object
	 */
	var defaults = {
        externalLinkNewWindow: true
	};

	/**
	 * Constructor
	 * @param element This is the element that plugin is running on
	 * @param object options Options specific to this instance
	 * @return void
	 */
	function Plugin(element, options) {
		this.domNode = element;
		this.element = $(element);
		// The first param, if bool specifies 'deep' copy. False by default. i.e. merge all child props that are objects too
		this.options = $.extend(true, {}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	/**
	 * Init
	 * @return void
	 */
	Plugin.prototype.init = function() {
		// Do Initialisation
		$('html').addClass('js-ready');
		$('html').removeClass('no-js');
		this.vendorInit();
		this.clickTracking();
		this.externalLinks();
        this.initOffCanvas();
        this.initDesktopNavScroll();
        this.initDatePickers();
        this.initCalculator();
	};

	/**
	 * Vendor plugin initialisation
	 * @return float
	 */
	Plugin.prototype.vendorInit = function() {
		FastClick.attach(document.body);
	};

	/**
	 * Other Methods
	 */

	// ...

	Plugin.prototype.initCalculator = function()
	{
	    var form = $('form.calculator');
	    var plugin = this;

	    // Load the result template
	    this.resultTemplate = $('.calculator-success-template')[0].outerHTML;
	    // Load the error template
	    this.errorTemplate = $('.calculator-error-template')[0].outerHTML;

	    $('.mustache-template').remove();

	    form.submit(function(e) {
	        e.preventDefault();
	        $.post('/calculate', form.serialize(), function(data) {
	            plugin.updateCalculation(data);
	        }).fail(function(xhr) {
	            plugin.updateCalculation($.parseJSON(xhr.responseText));
	        });
	    });
	};

	Plugin.prototype.updateCalculation = function(data)
	{
        var ui;
        if (data.error === true) {
            ui = $(Mustache.render(this.errorTemplate, data));
        } else {
            ui = $(Mustache.render(this.resultTemplate, data));
        }
        var button = $('form.calculator').find('button');
        button.attr('disabled', true);
        $('body').append(ui);

        var close = function() {
            ui.animateCss('rollOut', function() {
                ui.remove();
                button.attr('disabled', false);
            });
        }

        ui.css('display', 'block');

        // Close when close button is clicked
        ui.find('.close').click(function(e) {
            e.preventDefault();
            close();
            return false;
        });

        // Close with escape key
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                close();
            }
        });

        ui.animateCss('rollIn');
	};


    Plugin.prototype.initDatePickers = function()
    {
        if (this.hasDateInput()) {
            return;
        }
        var picker = new Pikaday({
            field: document.getElementById('input-date'),
            firstDay: 1,
            maxDate: new Date(),
            format: 'YYYY-MM-DD',
            onSelect: function() {
                //var date = document.createTextNode(this.getMoment().format('Do MMMM YYYY') + ' ');
                //document.getElementById('selected').appendChild(date);
            }
        });
        picker.setMoment(moment());
    };

    /**
     * Whether the browser supports the date input
     *
     * @return bool
     */
    Plugin.prototype.hasDateInput = function()
	{
	    var input = document.createElement('input');
	    input.type = 'date';
	    return input.type === 'date';
	};

    Plugin.prototype.initOffCanvas = function()
    {
        var plugin = this;
        $('.open-nav').click(function(e) {
            e.preventDefault();
            plugin.toggleNav();
            return false;
        });
    };

    Plugin.prototype.toggleNav = function()
    {
        if (this.isNavOpen()) {
            return this.closeNav();
        }
        return this.openNav();
    }

    Plugin.prototype.isNavOpen = function()
    {
        return $('body').hasClass('nav-open');
    }

    Plugin.prototype.openNav = function()
    {
        $('body').addClass('nav-open');
        $('.site-header').removeClass('compact');
    };

    Plugin.prototype.closeNav = function()
    {
        $('body').removeClass('nav-open');
    }

    /**
     * Scroll listener for desktop naviation
     */
    Plugin.prototype.initDesktopNavScroll = function()
    {
        var element = $('body');
        var header = $('.site-header');
        var t = header.outerHeight();
        var plugin = this;
        var lastScroll = window.pageYOffset || document.documentElement.scrollTop;
        window.addEventListener("scroll", function() {
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > t && !plugin.isNavOpen()) {
                header.addClass('compact');
            } else {
                header.removeClass('compact');
            }
            if (st > lastScroll) {
                // downscroll code
                if (!element.hasClass('scroll-down')) {
                    element.addClass('scroll-down');
                }
                if (element.hasClass('scroll-up')) {
                    element.removeClass('scroll-up');
                }
            } else {
                // upscroll code
                if (element.hasClass('scroll-down')) {
                    element.removeClass('scroll-down');
                }
                if (!element.hasClass('scroll-up')) {
                    element.addClass('scroll-up');
                }
            }
            lastScroll = st;
        }, false);
    };

    /**
     * Tracking various clicks as GA events
     */
    Plugin.prototype.clickTracking = function()
    {
        if(typeof(ga) === 'function') {
            $('a[href^="mailto:"]').click(function() {
                ga('send', 'event', 'Link', 'click', 'Clicked mailto: Link');
            });
            $('a[href^="tel:"]').click(function() {
                ga('send', 'event', 'Link', 'click', 'Clicked tel: Link');
            });
            $('a[href^="https://www.facebook.com"]').click(function() {
                ga('send', 'event', 'Link', 'click', 'Visited Facebook');
            });
            $('a[href*="twitter.com"]').click(function() {
                ga('send', 'event', 'Link', 'click', 'Visited Twitter');
            });
            $('a[href^="https://plus.google.com"]').click(function() {
                ga('send', 'event', 'Link', 'click', 'Visited Google+');
            });
        }
    };

    /**
	 * Decide whether we should add the target="_blank" attribute to external links
	 * @return void
	 */
	Plugin.prototype.externalLinks = function() {
	    if(this.options.externalLinkNewWindow === true) {
	        $("a").filter(function() {
                return this.hostname && this.hostname !== window.location.hostname;
            }).each(function () {
                $(this).attr('target', "_blank");
            });
	    }
	};


	/**
	 * Add plugin as a closure to jQuery
	 * Create a new instance of the plugin for each element
	 * @param object options
	 * @return jQuery for chaining
	 */
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if(!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);

$(function() {
    'use strict';
    $('body').netglueSiteWide();
});
