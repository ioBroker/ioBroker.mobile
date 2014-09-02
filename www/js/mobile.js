var mobile = {};
var enums = {
    root: [],
    children: {}
};

$(document).ready(function () {

    mobile.socket = io.connect();

    mobile.socket.on('connect', function () {
        //$('#server-disconnect').popup('close');
        console.log('socket.io connect');
    });

    getEnums(null, function () {
        console.log('getEnums', enums);

        var grid;
        switch (enums.root.length) {
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

        for (var i = 0; i < enums.root.length; i++) {

            var navbar = '';

            for (var j = 0; j < enums.root.length; j++) {
                navbar += '<li><a class="' + (i === j ? 'ui-btn-active ui-state-persist' : '') + '" data-icon="star" href="#' + enums.root[j]._id + '">' + enums.root[j].common.name + '</a></li>\n';
            }

            var menu = '';

            for (var id in enums.children) {
                if (enums.children[id].parent === enums.root[i]._id) {
                    menu += '<li><a href="#' + id + '">' + enums.children[id].common.name + '</a></li>';
                }

            }

            var page = '<div id="' + enums.root[i]._id + '" data-role="page" class="responsive-grid" data-theme="b">' +
                '<div data-role="header" data-position="fixed" data-id="f2" data-theme="b">' +
                '<h1><span class="mobile-prefix"></span>' + enums.root[i].common.name + '</h1>' +
                '<a href="#info" data-rel="dialog" data-role="button" data-inline="true" data-icon="info" data-iconpos="notext" class="mobile-info ui-btn-right"></a>' +
                '</div>' +
                '<div data-role="content" data-theme="c">' +
                '<ul id="menu_' + enums.root[i]._id + '" data-role="listview" data-inset="true" class="mobile-sortable">' +
                menu +
                '</ul>' +
                '</div>' +
                '<div data-position="fixed" data-tap-toggle="false" data-role="footer" data-id="f1" data-theme="b">' +
                '<div class="mobile-navbar" data-role="navbar" data-grid="' + grid + '">' +
                '<ul>' + navbar + '</ul></div></div></div>';

            $('body').append(page);



        }

        $.mobile.initializePage();
    });

});

function getEnums(server, callback) {
    if (!server) enums = storage.get('enums');
    if (!enums || server) {
        mobile.socket.emit('getObjectView', 'system', 'enum', {}, function (err, res) {
            if (!err && res.rows) {


                for (var i = 0; i < res.rows.length; i++) {
                    var obj = res.rows[i].value;
                    if (!obj.parent) {
                        enums.root.push(obj);
                    } else {
                        enums.children[obj._id] = obj;
                    }
                }

                storage.set('enums', enums);
                callback();
            }
        });
    } else {
        callback();
    }
}

function renderPage(id) {
    console.log('renderPage', id);

    var page = '<div id="' + id + '" data-role="page" class="responsive-grid" data-theme="b">' +
        '<div data-role="header" data-position="fixed" data-id="f2" data-theme="b">' +
        '<a href="#' + '" data-role="button" data-icon="arrow-l">' + id.split('.')[1] + '</a>' +
        '<h1><span class="mobile-prefix"></span>' + id + '</h1>' +
        '<a href="#info" data-rel="dialog" data-role="button" data-inline="true" data-icon="info" data-iconpos="notext" class="mobile-info ui-btn-right"></a>' +
        '</div>' +
        '<div data-role="content" data-theme="c">' +
        '<ul id="" data-role="listview" data-inset="true" class="mobile-sortable">' +
        '</ul>' +
        '</div>' +
        '</div>';


    $('body').append(page);
}

function renderMenu(id) {

}

function renderMenuItem(id) {


    return '<li class="" data-hm-id="' + id + '"><a href="#page_' + id + '">' +
        '<img src="">' +
        '<h2>name</h2>' +
        '<p>desc</p>' +
        '</a></li>';

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
