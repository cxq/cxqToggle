/**
 * Author: Xiu qiang CHU
 * Date: 17/06/2012
 * Description : Toggle
 */

(function($) {
    $.fn.cxqToggle = function(options) {
        var options = $.extend({
            defaultOpen : '', //string
            oneToggle : true, //boolean
            duration: 700, //number (milliseconds)
            effect: 'show', //string (show, slide, fade)
            activeClass:'active', //string
            clickElm : 'toggleHead',//string
            headClass : 'toggleHead',//string
            bodyClass : 'toggleBody'//string
        }, options);
        var _this = this;
        var toggle = $(this);

        if (options.defaultOpen != "") {
            var openToggleDefault = $(toggle.get(options.defaultOpen));
            openToggle(openToggleDefault.find('.' + options.headClass));
        }

        bindEvents();

        function bindEvents() {
            toggle.find('.' + options.clickElm).on('click', function() {
                var head = $(this).closest('.' + options.headClass);

                if (head.hasClass(options.activeClass))
                    closeToggle(head)
                else
                    openToggle(head);
            })
        }

        function openToggle(head) {
            if (options.oneToggle) {
                closeToggle(toggle.find('.' + options.headClass))
            }

            head.addClass('active');
            setEffect(head, false);
        }

        function closeToggle(head) {
            head.removeClass('active');
            setEffect(head, true);
        }

        function setEffect(head, isToggleOpen) {
            if (isToggleOpen === false) {
                switch (options.effect) {
                    case 'show' :
                        head.next('.' + options.bodyClass).show();
                    case 'fade':
                        head.next('.' + options.bodyClass).fadeIn(options.duration);
                    case 'slide':
                        head.next('.' + options.bodyClass).slideDown(options.duration);
                }
            } else {
                switch (options.effect) {
                    case 'show' :
                        head.next('.' + options.bodyClass).hide();
                    case 'fade':
                        head.next('.' + options.bodyClass).fadeOut(options.duration);
                    case 'slide':
                        head.next('.' + options.bodyClass).slideUp(options.duration);
                }
            }
        }

        return this;
    };

})(jQuery);