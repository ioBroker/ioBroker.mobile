var mobile =    {};
var enums =     {};
var objects =   {};
var root =      [];



$(document).ready(function () {

    mobile.socket = io.connect();

    mobile.socket.on('connect', function () {
        //$('#server-disconnect').popup('close');
        console.log('socket.io connect');
    });

    getEnums(true, renderRootPages);

});

function getEnums(server, callback) {
    if (!server) enums = storage.get('enums');
    if (!enums || server) {
        mobile.socket.emit('getObjectView', 'system', 'enum', {}, function (err, res) {
            if (!err && res.rows) {


                for (var i = 0; i < res.rows.length; i++) {
                    var obj = res.rows[i].value;
                    if (!obj.parent) {
                        root.push(obj._id);
                    }

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

function renderRootPages() {
    console.log('renderRootPages');

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
        getObject(members[i], function (obj) {
            $('div[id="' + id + '"] ul').append('<li>' + renderObject(obj) + '</li>').listview('refresh');
        });
    }


}

function getObject(id, callback) {
    if (objects[id]) {
        callback(objects[id]);
    } else {
        mobile.socket.emit('getObject', id, function (err, res) {
            // TODO Error handling
            objects[id] = res;
            callback(res);
        });
    }
}

function renderObject(obj) {
    return obj._id;
}

$(document).bind("pagebeforechange", function(e, data) {
    if (typeof data.toPage === 'string') {
        var u = $.mobile.path.parseUrl(data.toPage);
        var id = u.hash.slice(1);
        renderPage(id);
    }
});

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
