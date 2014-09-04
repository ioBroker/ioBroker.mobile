"use strict";

var enums =     {};
var objects =   storage.get('objects') || {};
var states =    {};

var root =      ['enum.favorites.Admin', 'enum.rooms', 'enum.functions'];

var refresh =   false;



function renderWidget(obj, server, elem) {
    console.log(obj);

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
}

function renderChannel(obj, server, $elem) {
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





}

function renderState(obj, server, elem) {
    var html = '';
    html += '<div class="mobile-widget-a">' + obj.common.name + '</div>';
    elem.append('<li>' + html + '</li>').listview('refresh');
}

function renderDevice(obj, server, elem) {
    var html = '';
    html += '<div class="mobile-widget-a">' + obj.common.name + '</div>';
    elem.append('<li>' + html + '</li>').listview('refresh');
}


function renderRootPages() {
    console.log('renderRootPages');

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

}

function renderPage(id) {
    console.log('renderPage', id);
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

}


// set server to true to force remote loading, otherwise object will be taken from localstorage if available
function getEnums(server, callback) {
    if (!server) enums = storage.get('enums');
    if (!enums || server) {
        socket.emit('getObjectView', 'system', 'enum', {}, function (err, res) {
            if (!err && res.rows) {
                for (var i = 0; i < res.rows.length; i++) {
                    var obj = res.rows[i].value;
                    enums[obj._id] = obj;
                }
                storage.set('enums', enums);
                callback();
            }
        });
    } else {
        callback();
    }
}


// set server to true to force remote loading, otherwise object will be taken from localstorage if available
function getObject(id, server, callback) {
    console.log('getObject', id, server);
    if (objects[id] && !server) {
        console.log('cache hit ' + id);
        callback(objects[id]);

    } else {
        socket.emit('getObject', id, function (err, res) {
            // TODO Error handling
            objects[id] = res;
            storage.set('objects', objects);
            callback(res);
        });
    }
}



if ('applicationCache' in window) {
    window.addEventListener('load', function(e) {
        window.applicationCache.addEventListener('updateready', function(e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                try {
                    window.applicationCache.swapCache();
                } catch (e) {
                    console.log(e);
                }
                window.location.reload();
            }
        }, false);
    }, false);
}

var socket = io.connect();

socket.emit('getStates', function (err, res) {
    states = res;
    console.log('got states');
});

socket.on('connect', function () {
    //$('#server-disconnect').popup('close');
    console.log('socket.io connect');
});

socket.on('stateChange', function (id, state) {
    $('.ui-slider-input[data-mobile-id="' + id + '"]').val(state.val).slider('refresh');
    if (objects[id] && objects[id].common) $('.ui-slider-switch[data-mobile-id="' + id + '"]').val(state.val > objects[id].common.min ? objects[id].common.max : objects[id].common.min).slider('refresh');
});



$(document).ready(function () {
    getEnums(true, renderRootPages);
});

$(document).bind("pagebeforechange", function(e, data) {
    if (typeof data.toPage === 'string') {
        var u = $.mobile.path.parseUrl(data.toPage);
        var id = u.hash.slice(1);
        renderPage(id);
    }
});

$(document).on('slidestop', function (event) {
    var id = event.target.dataset.mobileId;
    var val = event.target.value;
    var type = objects[id].common.type;
    console.log(id, val, type);
    if (type === 'number') val = parseFloat(val);
    socket.emit('setState', id, val);
});