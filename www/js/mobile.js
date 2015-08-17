"use strict";

var mobile = {
    version: "0.0.2",
    requiredServerVersion: "0.0.0",
    enums:        {},
    objects:      {},
    states:       {},
    root:         [],
    refresh:      false,
    isFirstTime:  true,
    conn:         servConn,
    renderWidget: function (obj, server, elem) {
        switch (obj.type) {
            case 'device':
                renderDevice(obj, server, elem);
                break;
            case 'channel':
                renderChannel(obj, server, elem);
                break;
            case 'state':
                renderState(obj, server, elem);
                break;
            default:
        }
    },

    renderChannel: function (obj, server, $elem) {
        var html = '';
        html += '<div class="mobile-widget-a">' + obj.common.name + '</div>';
    
        // get children
        var children = [];
        for (var i = 0; i < obj.children.length; i++) {
            children.push(obj.children[i]);
        }
    
        function queue() {
            if (children.length > 0) {
                var child = children.pop();
                getObject(child, server, function () {
                    queue();
                });
            } else {
                console.log('got all children!');
                render();
            }
        }
        queue();
    
        function render() {
            switch (obj.common.role) {
                case 'light.dimmer':
                    for (var i = 0; i < obj.children.length; i++) {
                        var id = obj.children[i];
                        console.log(objects[id].common.role);
                        if (objects[id].common.role === 'level.dimmer') {
                            html += '<div class="mobile-widget-b"><select id="switch_' + obj._id + '" data-mobile-id="' + id + '" name="switch_' + obj._id + '" data-role="slider">' +
                                '<option value="' + objects[id].common.min + '">Aus</option>' +
                                '<option value="' + objects[id].common.max + '"' + (states[id].val > objects[id].common.min ? ' selected' : '') + '>An</option>' +
                                '</select></div>';
                            html += '<div class="mobile-widget-c">' +
                                '<input id="slider_' + obj._id + '" type="range" data-mobile-id="' + id +
                                '" name="slider_' + obj._id + '" min="' + objects[id].common.min + '" max="' + objects[id].common.max + '" value="' + states[id].val + '"/></div>';
    
                        }
                    }
                    break;
    
            }
            $elem.append('<li class="mobile-widget">' + html + '</li>');
    
            if ($elem.hasClass('ui-listview')) {
                $elem.listview('refresh');
                $elem.find('[data-role="slider"], input[type="range"]').slider();
            }
        }
    },

    renderState: function (obj, server, elem) {
        var html = '';
        html += '<div class="mobile-widget-a">' + obj.common.name + '</div>';
        elem.append('<li>' + html + '</li>').listview('refresh');
    },
    
    renderDevice: function (obj, server, elem) {
        var html = '';
        html += '<div class="mobile-widget-a">' + obj.common.name + '</div>';
        elem.append('<li>' + html + '</li>').listview('refresh');
    },
    
    renderRootPages: function () {
        // http://demos.jquerymobile.com/1.2.1/docs/toolbars/docs-navbar.html
        var grid;
        switch (root.length) {
            case 2:
                grid = 'a';
                break;
            case 3:
                grid = 'b';
                break;
            case 4:
                grid = 'c';
                break;
            case 5:
                grid = 'd';
                break;
            default:
        }
    
        for (var i = 0; i < root.length; i++) {
    
            var navbar = '';
    
            for (var j = 0; j < root.length; j++) {
                navbar += '<li><a class="' + (i === j ? 'ui-btn-active ui-state-persist' : '') + '" data-icon="star" href="#' + root[j] + '">' + enums[root[j]].common.name + '</a></li>\n';
            }
    
            var menu = '';
    
            for (var id in enums) {
                if (enums[id].parent === root[i]) {
                    menu += '<li><a href="#' + id + '">' + enums[id].common.name + '</a></li>';
                }
            }
    
            var page = '<div id="' + root[i] + '" data-role="page" class="responsive-grid" data-theme="b">' +
                '<div data-role="header" data-position="fixed" data-id="f2" data-theme="b">' +
                '<h1><span class="mobile-prefix"></span>' + enums[root[i]].common.name + '</h1>' +
                '<a href="#info" data-rel="dialog" data-role="button" data-inline="true" data-icon="info" data-iconpos="notext" class="mobile-info ui-btn-right"></a>' +
                '</div>' +
                '<div data-role="content" data-theme="c">' +
                '<ul id="menu_' + root[i] + '" data-role="listview" data-inset="true" class="mobile-sortable">' +
                menu +
                '</ul>' +
                '</div>' +
                '<div data-position="fixed" data-tap-toggle="false" data-role="footer" data-id="f1" data-theme="b">' +
                '<div class="mobile-navbar" data-role="navbar" data-grid="' + grid + '">' +
                '<ul>' + navbar + '</ul></div></div></div>';
    
            $('body').append(page);
    
        }
    
        var url = $.mobile.path.parseUrl(location.href);
        renderPage(url.hash.slice(1));
    
        $.mobile.initializePage();
    
    },

    renderPage: function (id) {
        if (!id) {
            console.log('no id given');
            return;
        }
        if ($('div[id="' + id + '"]').html()) {
            console.log(id + ' already rendered');
            return;
        }
    
        var name;
        var parentId;
        var parentName;
    
        if (enums[id].parent) {
            parentId = enums[id].parent;
            parentName = enums[parentId].common.name;
            name = enums[id].common.name;
        } else {
            parentId = '';
            name = '';
        }
    
        var page = '<div id="' + id + '" data-role="page" class="responsive-grid" data-theme="b">' +
            '<div data-role="header" data-position="fixed" data-id="f2" data-theme="b">' +
            '<a href="#' + parentId + '" data-role="button" data-icon="arrow-l">' + parentName + '</a>' +
            '<h1><span class="mobile-prefix"></span>' + name + '</h1>' +
            '<a href="#info" data-rel="dialog" data-role="button" data-inline="true" data-icon="info" data-iconpos="notext" class="mobile-info ui-btn-right"></a>' +
            '</div>' +
            '<div data-role="content" data-theme="c">' +
            '<ul id="" data-role="listview" data-inset="true" class="mobile-sortable">' +
            '</ul>' +
            '</div>' +
            '</div>';
    
        $('body').append(page);
    
        var members = enums[id].common.members;
        for (var i = 0; i < members.length; i++) {
            getObject(members[i], refresh, function (obj) {
                renderWidget(obj, refresh, $('div[id="' + id + '"] ul'));
            });
        }    
    },

    init: function (id) {
        $("#server-disconnect").dialog({
            modal:         true,
            closeOnEscape: false,
            autoOpen:      false,
            dialogClass:   'noTitle',
            width:         400,
            height:        90
        });
        var that = this;

        this.conn.namespace = 'mobile.0';

        this.conn.init(null, {
            onConnChange: function (isConnected) {

                if (isConnected) {
                    $("#server-disconnect").dialog("close");

                    if (that.isFirstTime) {
                        that.conn.getVersion(function (version) {
                            if (version) {
                                if (compareVersion(version, that.requiredServerVersion)) {
                                    window.alert(_('Warning: requires Server version %s - found Server version %s - please update Server.', that.requiredServerVersion, version));
                                }
                            }
                            //else {
                            // Possible not authenticated, wait for request from server
                            //}
                        });

                        console.log(_('Loading data values...'));
                    }

                    // first of all try to load views
                    /*that.loadRemote(function () {
                     // Read all states from server
                     that.conn.getStates(that.editMode ? null : that.IDs, function (error, data) {
                     if (error) {
                     window.alert(error);
                     }
                     if (data) {
                     for (var id in data) {
                     var obj = data[id];

                     try {
                     if (that.editMode) {
                     that.states[id + '.val'] = obj.val;
                     that.states[id + '.ts'] = obj.ts;
                     that.states[id + '.ack'] = obj.ack;
                     that.states[id + '.lc'] = obj.lc;
                     } else {
                     var o = {};
                     o[id + '.val'] = obj.val;
                     o[id + '.ts'] = obj.ts;
                     o[id + '.ack'] = obj.ack;
                     o[id + '.lc'] = obj.lc;
                     that.states.attr(o);
                     }
                     } catch (e) {
                     that.conn.logError('Error: can\'t create states object for ' + id + '(' + e + ')');
                     }

                     if (!that.editMode && that.bindings[id]) {
                     for (var i = 0; i < that.bindings[id].length; i++) {
                     that.views[that.bindings[id][i].view].widgets[that.bindings[id][i].widget][that.bindings[id][i].type][that.bindings[id][i].attr] = that.formatBinding(that.bindings[id][i].format);
                     }
                     }
                     }
                     }

                     if (error) {
                     console.log("Possibly not authenticated, wait for request from server");
                     // Possibly not authenticated, wait for request from server
                     } else {
                     // Get Server language
                     that.conn.getConfig(function (err, config) {
                     systemLang = config.language || systemLang;
                     that.language = systemLang;
                     that.dateFormat = config.dateFormat;
                     translateAll();
                     if (that.isFirstTime) {
                     // Init edit dialog
                     if (that.editMode && that.editInit) that.editInit();
                     that.isFirstTime = false;
                     that.init();
                     }
                     });

                     // If metaIndex required, load it
                     if (that.editMode) {
                     // socket.io
                     if (that.isFirstTime) that.showWaitScreen(true, _('Loading data objects...'), null, 20);

                     // Read all data objects from server
                     that.conn.getObjects(function (err, data) {
                     that.objects = data;
                     // Detect if objects are loaded
                     for (var ob in data) {
                     that.objectSelector = true;
                     break;
                     }
                     });
                     }

                     if (that.isFirstTime) {
                     setTimeout(function () {
                     if (that.isFirstTime) {
                     // Init edit dialog
                     if (that.editMode && that.editInit) that.editInit();
                     that.isFirstTime = false;
                     that.init();
                     }
                     }, 1000);
                     }
                     }
                     });
                     });*/

                    // Get Server language
                    that.conn.getConfig(function (err, config) {
                        systemLang      = config.language || systemLang;
                        that.language   = systemLang;
                        that.dateFormat = config.dateFormat;
                        translateAll();
                        if (that.isFirstTime) {
                            // Init edit dialog
                            that.isFirstTime = false;
                        }
                    });

                    that.conn.getEnums(true, function (err, enums) {
                        that.enums = enums;

                    });
                } else {
                    //console.log((new Date()) + " socket.io disconnect");
                    $("#server-disconnect").dialog("open");
                }
            },
            onRefresh: function () {
                window.location.reload();
            },
            onUpdate: function (id, state) {
                _setTimeout(function (id, state) {
                    if (that.editMode) {
                        that.states[id + '.val'] = state.val;
                        that.states[id + '.ts'] = state.ts;
                        that.states[id + '.ack'] = state.ack;
                        that.states[id + '.lc'] = state.lc;
                    } else {
                        var o = {};
                        // Check new model
                        o[id + '.val'] = state.val;
                        o[id + '.ts'] = state.ts;
                        o[id + '.ack'] = state.ack;
                        o[id + '.lc'] = state.lc;
                        try {
                            that.states.attr(o);
                        } catch (e) {
                            that.conn.logError('Error: can\'t create states object for ' + id + '(' + e + ')');
                        }
                    }
                }, 0, id, state);
            },
            onObjectChange: function (id, obj) {
                if (!that.objects || !that.editMode) return;
                if (obj) {
                    that.objects[id] = obj;
                } else {
                    if (that.objects[id]) delete that.objects[id];
                }
            },
            onError: function (err) {
                window.alert(_('Cannot execute %s for %s, because of insufficient permissions', err.command, err.arg), _('Insufficient permissions'), 'alert', 600);
            }
        }, true/*edit mode */);
    }
};

if ('applicationCache' in window) {
    window.addEventListener('load', function(e) {
        window.applicationCache.addEventListener('updateready', function(e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                try {
                    window.applicationCache.swapCache();
                } catch (e) {
                    console.error(e);
                }
                window.location.reload();
            }
        }, false);
    }, false);
}

// Start of initialisation: main ()
(function ($) {
    $(document).ready(function () {
        mobile.init();
    });
})(jQuery);
