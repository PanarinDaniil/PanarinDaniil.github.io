(function ($) {

    var settings = {
        showCloseBtn: true,
        closeOverlayClick: true,
        resetContentOnClose: true,
        hideOnNewOpen: true,
        usejQValidate: true,
        _hideOverlay: true,
        closeBtn: '.popup-close',
        overlay: '#overlay',
        overlayClass: '.layout',
        class: '.pop-up',
        contentClass: '.popup-content',
        titleClass: '.popup-title',
        popupLink: '.popup-link',
        showEffect: 'fadeIn',
        hideEffect: 'fadeOut',
        showSpeed: 500,
        hideSpeed: 300
    };
    var hiddenCalled = false;
    var resetContent = [];
    var methods = {
        init: function (options) {
            options = options || {};
            opts = $.extend(settings, options);

            links = $(opts.popupLink);


            ids = [];
            $.each(links, function () {
                id = $(this).attr('href');
                ids.push(id)
                $(this).attr('applied', '1');
                rid = id;

                window.setTimeout(function () {
                    resetContent.push({id: rid, content: $(id).find(opts.contentClass).html()});
                }, 100)


                $(this).bind('click', function () {
                    return methods.show.apply(this, arguments);
                })

            });
            console.log(resetContent);
        },
        initialize: function (options) {
            //console.log(this);
            return this.each(function () {
                var $this = $(this),
                        data = $this.data('smallPopup'),
                        smallPopup = $('<div />', {
                            text: $this.attr('title')
                        });
                if (!data) {
                    $(this).data('smallPopup', {
                        target: $this,
                        smallPopup: smallPopup
                    });
                }
            });
        },
        close: function () {
            return this.each(function () {
                var $this = $(this),
                        data = $this.data('smallPopup');
                $(window).unbind('.smallPopup');
                data.smallPopup.remove();
                $this.removeData('smallPopup');
            });
        },
        adaptive: function () {
        },
        show: function (options) {
            //alert('asd');


            options = options || {};
            _opts = {};
            var _callback = function () {
            };


//            console.log(arguments);
//            return false;
            $.each(arguments, function () {
                if (typeof (this) == 'function') {
                    _callback = this;
                }
                if (typeof (this) == 'object') {
                    _opts = this;
                }
            });
            opts = $.extend(settings, _opts);
            if (opts.hideOnNewOpen) {
                $.smallPopup('hide', {_hideOverlay: false});
            }

            if (!opts.showCloseBtn) {
                $(opts.closeBtn).hide();
            } else {
                $(opts.closeBtn).show();
            }



            windowPopup = (p = $(this).is('a' + opts.popupLink) ? $(this).attr('href') : opts.popup) ? p : this;
            windowId = $(windowPopup).attr('id');

            className = opts.class.replace('.', '');
            if (!$(windowPopup).hasClass(className)) {
                $(windowPopup).addClass(className);
            }

            //console.log(opts, '__ARGS__');
            if (!opts.showCloseBtn) {
                $(opts.closeBtn).hide();
            } else {
                $(opts.closeBtn).show();
                $(windowPopup).on('click', opts.closeBtn, function () {
                    methods.hide.apply(windowPopup);
                })
            }


            hiddenCalled = false;
            overlay = opts.overlay.replace('#', '');
            overlayClass = opts.overlayClass.replace('.', '');
            $('#' + overlay).remove();
            var overlayObj = $('<div id="' + overlay + '" class="' + overlayClass + '"></div>');
            $(overlayObj).appendTo("body");

            if (opts.closeOverlayClick) {
                $(overlayObj).not(opts.contentClass).bind('click', function () {
                    //alert('asdasd');
                    //console.log($(windowPopup).not(opts.contentClass));
                    methods.hide.apply(windowPopup);
                })
            }



            $(windowPopup).css('left', $(window).width() / 2 - $(windowPopup).width() / 2);
            if ($(windowPopup).innerHeight() < $(window).height()) {
                $(windowPopup).css({'top': $(window).height() / 2 - $(windowPopup).innerHeight() / 2, 'position': 'fixed'});
            }
            else {
                $(windowPopup).css({'top': $(window).scrollTop(), 'position': 'absolute'});
            }
            $(window).resize(function () {
                $(windowPopup).css('left', $(window).width() / 2 - $(windowPopup).width() / 2);
                if ($(windowPopup).innerHeight() < $(window).height()) {
                    $(windowPopup).css({'top': $(window).height() / 2 - $(windowPopup).innerHeight() / 2, 'position': 'fixed'});
                }
                else {
                    $(windowPopup).css({'top': $(window).scrollTop(), 'position': 'absolute'});
                }
            });
            console.log(_callback, '_CB');
            switch (opts.showEffect) {
                case 'fadeIn':
                    $(windowPopup).fadeIn(opts.showSpeed).promise().done(function () {
                        _callback.apply(this, arguments);
                    });
                    break;
                case 'show':
                    $(windowPopup).show().promise().done(function () {
                        _callback.apply(this, arguments);
                    });
                    break;
                default:
                    $(windowPopup).fadeIn(opts.showSpeed).promise().done(function () {
                        _callback.apply(this, arguments);
                    });
                    break;
            }

            if (opts.usejQValidate) {
                window.setTimeout(function () {
                    $(windowPopup).find('form').each(function () {
                        $(this).bind('submit', function () {
                            $(this).validate();
                            return $(this).valid();
                        });

                    });
                }, 100)

                return false;
            }

            return false;

        },
        call: function (id, options) {
            options = options || {};
            options.popup = id;
            opts = $.extend(settings, options);
            console.log(opts, '_opts');
            return methods.show.apply(this, opts);
        },
        hide: function (options) {
            //console.log(resetContent);
            options = options || {};
            _opts = {};
            callback = function () {
            };
            $.each(arguments, function () {
                if (typeof (this) == 'function') {
                    callback = this;
                }
                if (typeof (this) == 'object') {
                    _opts = this;
                }
            });
            opts = $.extend(settings, options);
            //console.log(opts);
            if (opts.id) {
                windowPopup = opts.id;
            } else {
                windowPopup = opts.class;
            }

            overlayObj = $('#overlay');

            switch (opts.hideEffect) {
                case 'fadeOut':
                    if (!hiddenCalled) {
                        $(windowPopup).fadeOut(opts.hideSpeed).promise().done(function () {
                            if (opts._hideOverlay)
                                $(opts.overlay).fadeOut(opts.hideSpeed);
                            callback.apply(this, arguments);
                        });
                    }
                    break;
                case 'hide':
                    if (!hiddenCalled) {
                        methods.hide.apply(this, arguments);

                        $(windowPopup).hide().promise().done(function () {
                            $(opts.overlay).fadeOut(opts.hideSpeed);
                            callback.apply(this, arguments);
                        });
                    }
                    break;
                default:
                    if (!hiddenCalled) {
                        methods.hide.apply(this, arguments);

                        $(windowPopup).fadeOut(opts.hideSpeed).promise().done(function () {
                            $(opts.overlay).fadeOut(opts.hideSpeed);
                            callback.apply(this, arguments);
                        });
                    }
                    break;
            }

            hiddenCalled = true;
            $(opts.overlay).remove();
            //console.log(window.resetContent)
            if (opts.resetContentOnClose) {
                window.setTimeout(function () {
                    content = '';
                    $.each(resetContent, function (k, v) {
                        id = '#' + $(windowPopup).attr('id');
                        if (v.id == id) {
                            //console.log(v.content);
                            $(windowPopup).find(opts.contentClass).html(v.content);
                            return false;
                        }
                    })

                }, 100);
            }
            return false;
        },
        update: function (content, callback) {
            windowPopup = this;

            if (callback && typeof (callback) == 'function') {
                $(windowPopup).find(opts.contentClass).html(content).promise().done(function () {
                    callback.apply(this, arguments);
                });
            } else {
                $(windowPopup).find(opts.contentClass).html(content)
            }
        },
        updateBySelector: function (selector, content, callback) {
            windowPopup = this;
            if (callback) {
                $(windowPopup).find(opts.contentClass).find(selector).html(content).promise().done(function () {
                    callback.apply(this, arguments);
                });
            } else {
                $(windowPopup).find(opts.contentClass).find(selector).html(content);
            }
        }
    };
    $.fn.smallPopup = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.initialize.apply(this, arguments);
        } else {
            $.error('Метод с именем ' + method + ' не существует для jQuery.smallPopup');
        }

    };
    jQuery.smallPopup = function (method) {
        //alert("sdasd");
        switch (arguments.length) {
            case 1:
                if (arguments[0].indexOf('#') == 0) {
                    return $.fn.smallPopup('call', arguments[0]);
                } else {
                    if (methods[method]) {
                        console.log(arguments);
                        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
                    } else {
                        $.error('Неверный идентификатор popup-окна:  ' + arguments[0]);
                    }
                    return false;
                }
                break;
            case 2:
                console.log(arguments);
                if (typeof arguments[1] == 'object' || typeof (arguments[1]) == 'function') {
                    if (arguments[0].indexOf('#') === 0) {
                        return $.fn.smallPopup('call', arguments[0], arguments[1]);
                    } else {
                        if (methods[method]) {
                            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
                        } else {
                            $.error('Неверный идентификатор popup-окна:  ' + arguments[0]);
                        }
                    }
                }
                break;
        }


//        return false;

    }
})(jQuery);