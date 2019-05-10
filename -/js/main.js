// head {
var __nodeId__ = "plugins_balloon__main";
var __nodeNs__ = "plugins_balloon";
// }

(function (__nodeNs__, __nodeId__) {
    $.widget(__nodeNs__ + "." + __nodeId__, {
        options: {},

        _create: function () {
            this.bind();
        },

        _setOption: function (key, value) {
            $.Widget.prototype._setOption.apply(this, arguments);
        },

        hidden: true,

        bind: function () {
            var widget = this;

            var classname = widget.options.pluginOptions.classname;

            widget.element.rebind("click", function (e) {
                if (widget.hidden) {
                    widget.show();
                } else {
                    widget.hide();
                }

                e.stopPropagation();
            });

            $("body").rebind("click." + __nodeId__ + "." + classname, function () {
                widget.hide();
            });
        },

        hide: function () {
            var widget = this;

            widget.element.hideBalloon();
            widget.hidden = true;
        },

        initialized: false,

        contentAppended: false,

        show: function () {
            var widget = this;

            var classname = widget.options.pluginOptions.classname;

            if (widget.initialized) {
                $("." + classname).show();
            } else {
                if (!widget.initialized) {
                    widget.element.showBalloon(widget.options.pluginOptions);

                    widget.initialized = true;
                }

                if (!widget.contentAppended) {
                    var contentSelector = widget.options.contentSelector;
                    if (contentSelector) {
                        var $balloon = $("." + classname);

                        $(contentSelector).appendTo($balloon).show();

                        $balloon.rebind("click." + __nodeId__ + "." + classname, function (e) {
                            e.stopPropagation();
                        });
                    }

                    widget.contentAppended = true;
                }
            }

            widget.hidden = false;
        }
    });
})
(__nodeNs__, __nodeId__);
