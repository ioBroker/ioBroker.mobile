/**
 *  ioBroker.mobile
 *  https://github.com/ioBroker/ioBroker.mobile
 *
 *  Copyright (c) 2015 bluefox https://github.com/GermanBluefox
 *  MIT
 *
 */

/* jshint browser:true */
/* global document */
/* global console */
/* global session */
/* global window */
/* global location */
/* global setTimeout */
/* global clearTimeout */
/* global io */
/* global systemLang:true */
/* global _ */
/* global can */
/* global storage */
/* global servConn */
/* global systemDictionary:true */
/* global $ */
/* global translateAll */
/* global jQuery */
/* global document */
/* jshint -W097 */// jshint strict:false
"use strict";

systemDictionary = {
    'Views': {'en': 'Views', 'de': 'Views', 'ru': 'Страницы'},
    'edit description': {
        'en': 'Im Edit-Modus können Erweiterungen hinzugefügt, bearbeitet und gelöscht werden, außerdem können per Drag&Drop Elemente umsortiert und Bilder hochgeladen werden.',
        'de': 'Im Edit-Modus können Erweiterungen hinzugefügt, bearbeitet und gelöscht werden, außerdem können per Drag&Drop Elemente umsortiert und Bilder hochgeladen werden.',
        'ru': 'Im Edit-Modus können Erweiterungen hinzugefügt, bearbeitet und gelöscht werden, außerdem können per Drag&Drop Elemente umsortiert und Bilder hochgeladen werden.'
    }
};


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
    editMode:     false,
    queueStates:  [],

    updateState: function (id) {
        var that = this;
        $('[data-mobile-id="' + id + '"]').each(function () {
            var _id = $(this).data('mobile-id');
            var val = $(this).val();
            if (val != that.states[_id].val.toString()) {
                $(this).val(that.states[_id].val.toString());

                if ($(this).data('type') == 'range') {
                    $(this).slider('refresh');
                } else  if ($(this).data('role') == 'slider') {
                    $(this).slider('refresh');
                }
            }
        });
    },

    renderWidget: function (obj, elem) {
        switch (obj.type) {
            case 'device':
                this.renderDevice(obj, elem);
                break;

            case 'channel':
                this.renderChannel(obj, elem);
                break;

            case 'state':
                this.renderState(obj, elem);
                break;
            default:
        }
    },

    renderElement: function (obj) {
        var html = '';

        html += '<div class="mobile-widget-a">' + obj.common.name || obj._id + '</div>';

        var tid = obj._id.replace(/\./g, '_');

        switch (obj.common.role) {
            case 'dimmer':
                for (var i = 0; i < obj.children.length; i++) {
                    var id = obj.children[i];

                    if (this.objects[id] && this.objects[id].common && this.objects[id].common.role === 'level.dimmer') {
                        html += '<div class="mobile-widget-b"><select class="mobile-control" id="switch_' + tid + '" data-mobile-id="' + id + '" name="switch_' + tid + '" data-role="slider">' +
                            '<option value="' + this.objects[id].common.min + '">' + _('off') + '</option>' +
                            '<option value="' + this.objects[id].common.max + '"' + (this.states[id].val > this.objects[id].common.min ? ' selected' : '') + '>' + _('on') + '</option>' +
                            '</select></div>';
                        html += '<div class="mobile-widget-c">' +
                            '<input class="mobile-control" id="slider_' + tid + '" type="range" data-mobile-id="' + id +
                            '" name="slider_' + tid + '" min="' + thisobjects[id].common.min + '" max="' + this.objects[id].common.max + '" value="' + this.states[id].val + '"/></div>';

                    }
                }
                break;

            case 'blind':
                for (var i = 0; i < obj.children.length; i++) {
                    var id = obj.children[i];

                    if (this.objects[id] && this.objects[id].common && this.objects[id].common.role === 'level.blind') {
                        var val;
                        if (!this.states[id]) {
                            // read states
                            this.queueStates.push(id);
                            val = 0;
                        } else {
                            val = this.states[id].val;
                        }

                        html += '<div class="mobile-widget-b">\n' +
                            '    <select class="mobile-control" id="switch_' + tid + '" data-mobile-id="' + id + '" name="switch_' + tid + '" data-role="slider" data-min="' + this.objects[id].common.min + '" data-max="' + this.objects[id].common.max + '" >\n' +
                            '        <option value="' + this.objects[id].common.min + '">' + _('closed') + '</option>\n' +
                            '        <option value="' + this.objects[id].common.max + '"' + (val > this.objects[id].common.min ? ' selected' : '') + '>' + _('opened') + '</option>\n' +
                            '    </select>\n' +
                            '</div>\n';


                        html += '<div class="mobile-widget-c">\n' +
                            '   <input class="mobile-control" id="slider_' + tid + '" type="range" data-highlight="true" data-mobile-id="' + id +
                            '" name="slider_' + tid + '" min="' + this.objects[id].common.min + '" max="' + this.objects[id].common.max + '" value="' + val + '"/>\n</div>';
                    }
                }
                break;

            case 'switch':
                for (var i = 0; i < obj.children.length; i++) {
                    var id = obj.children[i];

                    if (this.objects[id] && this.objects[id].common && this.objects[id].common.role === 'state') {
                        var val;
                        if (!this.states[id]) {
                            // read states
                            this.queueStates.push(id);
                            val = 0;
                        } else {
                            val = this.states[id].val;
                        }
                        if (val === 'false') val = false;
                        if (val === '0') val = false;


                        html += '<div class="mobile-widget-b">\n' +
                            '    <select class="mobile-control" id="switch_' + tid + '" data-mobile-id="' + id + '" name="switch_' + tid + '" data-role="slider" >\n' +
                            '        <option value="false">' + _('off') + '</option>\n' +
                            '        <option value="true"' + (val ? ' selected' : '') + '>' + _('on') + '</option>\n' +
                            '    </select>\n' +
                            '</div>\n';
                    }
                }
                break;

        }
        return html;
    },

    renderChannel: function (obj, $elem) {
        $elem.append('<li class="mobile-widget">' + this.renderElement(obj) + '</li>');

        if ($elem.hasClass('ui-listview')) {
            $elem.listview('refresh');
        }
    },

    renderType: function (id, state) {
        var text = '';
        var obj = this.objects[id];

        switch (obj.common.type) {
            case 'number':
                text = parseFloat(state.val);
                break;

            case 'string':
                text = state.val;
                break;

            case 'boolean':
                text = _((!!state.val).toString());
                break;

            case 'array':
            case 'object':
            case 'mixed':
                if (typeof state.val === 'object') {
                    text = JSON.stringify(state.val);
                } else {
                    text = state.val;
                }
                break;
        }
        if (obj.common.unit) {
            text +=  '<b>' + this.objects[id].common.unit + '</b>';
        }
        return text;
    },

    renderState: function (obj, elem) {
        var html = '';
        html += '<div class="mobile-widget-a">';
        html += '<h2>' + (obj.common.name || obj._id) + '</h2>';

        switch (obj.common.role) {
            case 'text':
                html += '<p><strong>' + _(obj.common.type) + '</strong>: <span id="' + obj._id + '" class="mobile-value" data-type="' + obj.common.type + '"></span>';
                break;

            default:
                html += '<p><strong>' + _(obj.common.type) + '</strong>: <span id="' + obj._id + '" class="mobile-value" data-type="' + obj.common.type + '"></span>';
                break;
        }
        html += '</div>';

        elem.append('<li>' + html + '</li>').listview('refresh');
        this.conn.getStates([obj._id], function (err, states) {
            for (var id in states) {
                var $span = $('.mobile-value[id="' + obj._id + '"]');

                $span.html(this.renderType(id, states[id]));
            }
        }.bind(this));
    },
    
    renderDevice: function (obj, elem) {
        elem.append('<li>' + this.renderElement(obj) + '</li>').listview('refresh');
    },
    
    renderRootPages: function () {
        // http://demos.jquerymobile.com/1.2.1/docs/toolbars/docs-navbar.html
        var grid;
        switch (this.root.length) {
            case 1:
                grid = '0';
                break;
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
    
        for (var i = 0; i < this.root.length; i++) {
    
            var navbar = '';
    
            for (var j = 0; j < this.root.length; j++) {
                navbar += '<li><a class="' + (i === j ? 'ui-btn-active ui-state-persist' : '') + '"  data-icon="';
                if (this.root[j] == 'enum.rooms') {
                    navbar += 'home';
                } else if (this.root[j] == 'enum.functions') {
                    navbar += 'gear';
                } else {
                    navbar +=  'star';
                }
                navbar += '" href="#' + this.root[j] + '">' + this.enums[this.root[j]].common.name + '</a></li>\n';
            }
    
            var menu = '';
    
            for (var id in this.enums) {
                if (this.enums[id]._id.substring(0, this.root[i].length + 1) == this.root[i] + '.') {
                    menu += '<li><a href="#' + encodeURIComponent(id) + '">' + this.enums[id].common.name + '</a></li>';
                }
            }
    
            var page =
                '<div id="' + this.root[i] + '" data-role="page" class="responsive-grid" data-theme="b">' +
                '    <div data-role="header" data-position="fixed" data-id="f2" data-theme="b">' +
                '         <h1><span class="mobile-prefix"></span>' + _(this.enums[this.root[i]].common.name) + '</h1>' +
                '         <a href="#info" data-rel="page" data-role="button" data-inline="true" data-icon="info" data-iconpos="notext" class="mobile-info ui-btn-right"></a>' +
                '    </div>' +
                '    <div data-role="content" data-theme="c">' +
                '       <ul id="menu_' + this.root[i] + '" data-role="listview" data-inset="true" class="mobile-sortable">' +
                menu +
                '      </ul>' +
                '    </div>' +
                '    <div data-position="fixed" data-tap-toggle="false" data-role="footer" data-id="f1" data-theme="b">' +
                '        <div data-role="navbar" data-grid="' + grid + '">' +
                '            <ul>' + navbar + '</ul>' +
                '        </div>' +
                '    </div>' +
                '</div>';
    
            $('body').append(page);
        }
    
        var url = $.mobile.path.parseUrl(location.href);
        var pageId = decodeURIComponent(url.hash).slice(1);
        pageId = pageId.replace(/&.*$/, '');
        this.renderPage(pageId || this.root[0]);
    
        $.mobile.initializePage();
        $.mobile.navigate((!url.hash || url.hash == '#') ? '#' + this.root[0] : url.hash);
    },

    renderInfoPage: function () {
        if (this.editMode) {
            $('.mobile-noedit').hide();
            $('.mobile-edit').show();
            $('.mobile-refresh').hide();
        } else {
            $('.mobile-noedit').show();
            $('.mobile-edit').hide();
            $('.mobile-refresh').show();
        }
        $('#info').show();
    },

    renderPage: function (id) {
        if (!id) {
            console.log('no id given');
            return;
        }
        if (id == 'info') {
            return this.renderInfoPage();
        } else {
            $('#info').hide();
        }
        if ($('div[id="' + id + '"]').html()) {
            console.log(id + ' already rendered');
            return;
        }

        var name;
        var parentId;
        var parentName = id.split('.');
        parentName.pop();
        parentName = parentName.join('.');
    
        if (this.enums[parentName]) {
            parentId = parentName;
            parentName = this.enums[parentId].common.name;
            name = this.enums[id].common.name;
        } else {
            parentId = '';
            name = '';
        }
    
        var page =
            '<div id="' + id + '" data-role="page" class="responsive-grid" data-theme="b">' +
            '    <div data-role="header" data-position="fixed" data-id="f2" data-theme="b">' +
            '        <a href="#' + encodeURIComponent(parentId) + '" data-role="button" data-icon="arrow-l">' + parentName + '</a>' +
            '        <h1><span class="mobile-prefix"></span>' + name + '</h1>' +
            '        <a href="#info" data-rel="dialog" data-role="button" data-inline="true" data-icon="info" data-iconpos="notext" class="mobile-info ui-btn-right"></a>' +
            '    </div>';

            page +=
                '    <div data-role="content" data-theme="c">' +
                '        <ul data-role="listview" data-inset="true" class="mobile-sortable">' +
                '        </ul>' +
                '    </div>';
            page += '</div>';
    
        $('body').append(page);

        var members = this.enums[id].common.members;
        var $ul = $('div[id="' + id + '"] ul');

        $ul.listview();

        for (var i = 0; i < members.length; i++) {
            this.conn.getObject(members[i], !this.refresh, function (err, obj) {
                if (err) console.error(err);

                if (obj) {
                    this.objects[obj._id] = obj;
                    this.renderWidget(obj, $ul);
                }

            }.bind(this));
        }

        // read states
        var that = this;
        if (this.queueStates.length) {
            this.conn.getStates(this.queueStates, function (err, states) {
                for (var id in states) {
                    that.states[id] = states[id];
                    that.updateState(id);
                }

                that.queueStates = [];
            });
        }

        // on change
        $('.mobile-control').unbind('click').click(function (e) {
            var id  = $(this).data('mobile-id');
            var val = $(this).val();
            if (id && that.states[id].val.toString() != val) {
                that.conn.setState(id, val);
            }
        });
        setTimeout(function () {
            $('.mobile-control').on('slidestop stop', function () {
                var id  = $(this).data('mobile-id');
                if (id) {
                    that.states[id].val  = $(this).val();
                    that.states[id].ack  = false;
                    that.states[id].time = (new Date()).getTime();
                    that.conn.setState(id, that.states[id].val);
                }
            });
        }, 100);

    },

    compareVersion: function (instVersion, availVersion) {
        var instVersionArr = instVersion.replace(/beta/, '.').split('.');
        var availVersionArr = availVersion.replace(/beta/, '.').split('.');

        var updateAvailable = false;

        for (var k = 0; k < 3; k++) {
            instVersionArr[k] = parseInt(instVersionArr[k], 10);
            if (isNaN(instVersionArr[k])) instVersionArr[k] = -1;
            availVersionArr[k] = parseInt(availVersionArr[k], 10);
            if (isNaN(availVersionArr[k])) availVersionArr[k] = -1;
        }

        if (availVersionArr[0] > instVersionArr[0]) {
            updateAvailable = true;
        } else if (availVersionArr[0] == instVersionArr[0]) {
            if (availVersionArr[1] > instVersionArr[1]) {
                updateAvailable = true;
            } else if (availVersionArr[1] == instVersionArr[1]) {
                if (availVersionArr[2] > instVersionArr[2]) {
                    updateAvailable = true;
                }
            }
        }
        return updateAvailable;
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

        this.conn.namespace   = 'mobile.0';
        this.conn._useStorage = true;
        var url = $.mobile.path.parseUrl(location.href);
        this.editMode = (url.search == "?edit");
        if (this.editMode) {
            this.conn.clearCache();
        } else if (url.search == "?refresh") {
            this.conn.clearCache();
            location.href = './' + location.hash;
        }

        // show edit indicator
        if (this.editMode) $('#edit_indicator').show();

        $(document).bind("pagebeforechange", function(e, data) {
            if (typeof data.toPage === 'string') {
                var u = $.mobile.path.parseUrl(data.toPage);
                var id = decodeURIComponent(u.hash).slice(1);
                that.renderPage(id);
            }
        });

        this.conn.init(null, {
            onConnChange: function (isConnected) {
                if (isConnected) {
                    $("#server-disconnect").dialog("close");

                    if (that.isFirstTime) {
                        that.conn.getVersion(function (version) {
                            if (version) {
                                $('#mobile-version').html(version);
                                if (that.compareVersion(version, that.requiredServerVersion)) {
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
                    that.conn.getConfig(!that.refresh, function (err, config) {
                        systemLang      = config.language || systemLang;
                        that.language   = systemLang;
                        that.dateFormat = config.dateFormat;
                        translateAll();
                        if (that.isFirstTime) {
                            // Init edit dialog
                            that.isFirstTime = false;
                        }
                    });

                    that.conn.getObjects(!that.refresh, function (err, objects) {
                        that.objects = objects;
                        // show last sync time
                        var syncTime = this.conn.getSyncTime();
                        if (typeof(Storage) === 'undefined')  {
                            $('.mobile-refresh').hide();
                            $('.last-synchronised').html(_('not supported'));
                        } else {
                            $('.last-synchronised').html(!syncTime ? _('never') : syncTime.toLocaleDateString() + ' ' + syncTime.toLocaleTimeString());
                        }

                        this.conn.getEnums(!this.refresh, function (err, enums) {
                            this.enums = enums;
                            for (var e in this.enums) {
                                var parts = e.split('.');
                                if (parts.length == 2) this.root.push(e);
                            }

                            this.renderRootPages();

                        }.bind(this));
                    }.bind(that));
                } else {
                    $("#server-disconnect").dialog("open");
                }
            },
            onRefresh: function () {
                window.location.reload();
            },
            onUpdate: function (id, state) {
                setTimeout(function () {
                    that.states[id] = state;
                    that.updateState(id);
                }, 0);
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
