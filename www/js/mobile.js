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
        'en': 'In edit mode you can add, delete or modify the extensions. Additionally the elements can be sorted or styled.',
        'de': 'Im Edit-Modus können Erweiterungen hinzugefügt, bearbeitet und gelöscht werden, außerdem können per Drag&Drop Elemente umsortiert und Bilder hochgeladen werden.',
        'ru': 'В режиме изменений можно добавить, изменить или удалить объекты, кроме того можно перетаскивая изменить порядок элементов, а также загрузить иконки.'
    },
    "Loading data values...": {
        "en": "Loading data values...",
        "de": "Loading data values...",
        "ru": "Loading data values..."
    },
    "Rooms":            {"en": "Rooms",             "de": "Räume",          "ru": "Комнаты"},
    "Favorites":        {"en": "Favorites",         "de": "Favorites",      "ru": "Favorites"},
    "Functions":        {"en": "Functions",         "de": "Funktionen",     "ru": "Функции"},
    "off":              {"en": "off",               "de": "aus",            "ru": "выкл"},
    "on":               {"en": "on",                "de": "an",             "ru": "вкл"},
    "CLOSED":           {"en": "closed",            "de": "zu",             "ru": "закрыто"},
    "closed":           {"en": "closed",            "de": "zu",             "ru": "закр."},
    "opened":           {"en": "opened",            "de": "auf",            "ru": "откр."},
    "OPEN":             {"en": "open",              "de": "auf",            "ru": "открыто"},
    "open":             {"en": "open",              "de": "auf",            "ru": "открыто"},
    "TILTED":           {"en": "tilted",            "de": "gekippt",        "ru": "приоткрыто"},
    "tilted":           {"en": "tilted",            "de": "gekippt",        "ru": "приоткрыто"},
    "false":            {"en": "false",             "de": "nein",           "ru": "нет"},
    "true":             {"en": "true",              "de": "ja",             "ru": "да"},
    "No connection to server": {
        "en": "No connection to server",
        "de": "No connection to server",
        "ru": "Нет соединения с сервером"
    },
    "Edit mode":        {"en": "Edit mode",         "de": "Edit-Modus",     "ru": "Реж. изменений"},
    "Info":             {"en": "Info",              "de": "Info",           "ru": "Инфо"},
    "License: ":        {"en": "License: ",         "de": "Lizenz: ",       "ru": "Лицензия: "},
    "Refresh":          {"en": "Refresh",           "de": "Auktualisieren", "ru": "Обновить"},
    "Last synchronized: ": {
        "en": "Last synchronized: ",
        "de": "Letze Synchronisierung: ",
        "ru": "Последняя синхронизация: "},
    "Edit-Mode":        {"en": "Edit-Mode",         "de": "Edit-Modus",     "ru": "Реж. изменений"},
    "Finish Edit-Mode": {"en": "Finish Edit-Mode",  "de": "Edit-Modus beenden", "ru": "Завершить изменения"},
    "Documentation":    {"en": "Documentation",     "de": "Dokumentation",  "ru": "Документация"},

    "Wohnzimmer":       {"en": "Living room",       "de": "Wohnzimmer",     "ru": "Гостинная"},
    "Küche":            {"en": "Kitchen",           "de": "Küche",          "ru": "Кухня"},
    "Schlafzimmer":     {"en": "Sleeping room",     "de": "Schlafzimmer",   "ru": "Спальня"},
    "Kinderzimmer":     {"en": "Kids room",         "de": "Kinderzimmer",   "ru": "Детская"},
    "Kabinet":          {"en": "Cabinet",           "de": "Kabinet",        "ru": "Кабинет"},
    "Bad":              {"en": "Bath",              "de": "Bad",            "ru": "Ванная"},
    "Balkon":           {"en": "Balcony",           "de": "Balkon",         "ru": "Балкон"},
    "Gäste WC":         {"en": "Guest WC",          "de": "Gäste WC",       "ru": "Гостевой туалет"},
    "Flur":             {"en": "Hall",              "de": "Flur",           "ru": "Коридор"},
    "Admin Favorites":  {"en": "Admin Favorites",   "de": "Admin Favorites", "ru": "Admin Favorites"},
    "Licht":            {"en": "Light",             "de": "Licht",          "ru": "Свет"},
    "Heizung":          {"en": "Heting",            "de": "Heizung",        "ru": "Отопление"},
    "Rolladen":         {"en": "Shutter",           "de": "Rolladen",       "ru": "Жалюзи"},
    "Wetter":           {"en": "Weather",           "de": "Wetter",         "ru": "Погода"},
    "Umwelt":           {"en": "Environment",       "de": "Umwelt",         "ru": "Окружающая среда"},
    "Taster":           {"en": "Button",            "de": "Taster",         "ru": "Кнопка"},
    "Zentrale":         {"en": "Central unit",      "de": "Zentrale",       "ru": "Центральное устройство"},
    "Fenster":          {"en": "Window",            "de": "Fenster",        "ru": "Окно"},
    "Aktor":            {"en": "Actor",             "de": "Aktor",          "ru": "Выключатель"},
    "Beleuchtung":      {"en": "Lighting",          "de": "Beleuchtung",    "ru": "Подсветка"},

    "Valve State":      {"en": "Valve State",       "de": "Ventilposition", "ru": "Позиция вентиля"},
    "Level":            {"en": "Level",             "de": "Wert",           "ru": "Уровень"},
    "Press Long":       {"en": "Press long",        "de": "Lang drucken",   "ru": "Длинное нажатие"},
    "Press Short":      {"en": "Press short",       "de": "Kurz drucken",   "ru": "Короткое нажатие"},
    "Press Cont":       {"en": "Press continuous",  "de": "Kontinuerlich",  "ru": "Продолжительное нажатие"},
    "Press Long Release": {"en": "Press long release", "de": "Press Long Release", "ru": "Прекратить длинное нажатие"},
    "State":            {"en": "State",             "de": "Zustand",        "ru": "Состояние"},
    "Adjusting Command": {"en": "Adjusting Command", "de": "Justier-Kommando", "ru": "Команда настойки"},
    "Adjusting Data":   {"en": "Adjusting Data",    "de": "Justierungsdaten", "ru": "Данные для настойки"},
    "Setpoint":         {"en": "Setpoint",          "de": "Sollwert",       "ru": "Заданное значение"},
    "Humidity":         {"en": "Humidity",          "de": "Luftfeuchtigkeit", "ru": "Влажность"},
    "Temperature":      {"en": "Temperature",       "de": "Temperatur",     "ru": "Температура"},
    "Inhibit":          {"en": "Inhibit",           "de": "Sperrung",       "ru": "Заперто"},
    "Open":             {"en": "Open",              "de": "Aufmachen",      "ru": "Открыть"},
    "Relock Delay":     {"en": "Relock Delay",      "de": "Relock Verzögerung", "ru": "Задержка закрытия"},
    "State Uncertain":  {"en": "State Uncertain",   "de": "Unbekannter Zustand", "ru": "Неизвестное состояние"},
    "Brightness":       {"en": "Brightness",        "de": "Helligkeit",     "ru": "Яркость"},
    "On Time":          {"en": "On Time",           "de": "Auf-Zeit",       "ru": "Время вкл."},
    "Submit":           {"en": "Submit",             "de": "Bestätigen",    "ru": "Подтвердить"}
};


var mobile = {
    version: "0.0.5",
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
    updateStates: [],
    ids:          [],

    icons:        {
        'temperature':  'temp_temperature.svg',
        'humidity':     'weather_humidity.svg',
        'setpoint':     'temp_control.svg'
    },

    updateState: function (id, force) {
        var that = this;
        $('[data-mobile-id="' + id + '"]').each(function () {
            var _id = $(this).data('mobile-id');
            var val = $(this).val();

            if (that.states[_id].val === undefined) {
                console.warn('No data for "' + _id + '".');
                that.states[_id].val = '';
            }

            if (force || val != that.states[_id].val.toString()) {

                var role = $(this).data('role');
                if ($(this).data('type') == 'range') {
                    $(this).val(that.states[_id].val.toString());
                    $(this).slider('refresh');
                } else if (role == 'slider') {
                    $(this).val(that.states[_id].val.toString());
                    $(this).slider().slider('refresh');
                } else {
                    var val    = that.states[_id].val;
                    var rawVal = that.states[_id].val;
                    if (val === 'true' || val === true) {
                        rawVal = true;
                        val = _('true');
                    } else
                    if (val === 'false' || val === false) {
                        rawVal = false;
                        val = _('false');
                    } else
                    if (parseFloat(val).toString() == val.toString()) {
                        val = parseFloat(val);
                        rawVal = val;
                    }

                    var states = $(this).data('states');

                    if (states && ((role != 'indicator' && role != 'error') || val)) {
                        // convert JSON
                        if (states[0] == '{') {
                            try {
                                var values = JSON.parse(states);
                                if (values[val] === undefined) {
                                    rawVal = val;
                                    val    = val;
                                } else {
                                    rawVal = values[val];
                                    val    = _(values[val]);
                                }
                            } catch (ex) {
                                console.error('Cannot parse states for ' + id);
                            }
                        } else if (typeof states == 'object') {
                            if (states[val] === undefined) {
                                rawVal = val;
                                val    = val;
                            } else {
                                rawVal = states[val];
                                val    = _(states[val]);
                            }
                        }
                    }


                    if (role == 'indicator' || role == 'error') {
                        if (!rawVal) {
                            $(this).hide();
                        } else {
                            $(this).show();
                        }

                        if (role == 'error') {
                            if (rawVal) {
                                $(this).addClass('mobile-error');
                            } else {
                                $(this).removeClass('mobile-error');
                            }
                        }
                    }
                    var unit = $(this).data('unit') || '';
                    if (unit) unit = ' ' + unit;
                    if ($(this).data('title')) {
                        $(this).attr('title', $(this).attr('name') + ' - ' + val + unit);
                    } else {
                        var id = $(this).data('p');
                        if (id) {
                            if (typeof rawVal === 'boolean') {
                                $('#' + id).html($(this).attr('name'));
                            } else {
                                $('#' + id).html($(this).attr('name') + ' - ' + val + unit);
                            }
                        } else {
                            $(this).html(val + unit);
                        }
                    }
                }
            }
        });
    },

    renderWidget: function (obj, elem, group) {
        switch (obj.type) {
            case 'device':
                this.renderDevice(obj, elem, group);
                break;

            case 'channel':
                this.renderChannel(obj, elem, group);
                break;

            case 'state':
                this.renderState(obj, elem, group);
                break;
            default:
        }
    },

    renderElement: function (obj, group, direct) {
        var html = '';
        var i;
        var id;
        var name = obj.common.name || obj._id;

        // ignore indicators
        if (obj.common.role && obj.common.role.match(/^indicator\.?/)) return '';

        // remove room or function name from device name
        if (group) {
            var reg1 = new RegExp ('[-.\/]+' + group + '[-.\/]+', 'gi');
            var reg2 = new RegExp ('[-.\/]+' + group, 'gi');
            var reg3 = new RegExp (group + '[-.\/]+', 'gi');
            var reg4 = new RegExp (group, 'gi');
            name = name.replace(reg1, '.');
            name = name.replace(reg2, '');
            name = name.replace(reg3, '');
            name = name.replace(reg4, '');
            name = name.replace(/_/g, ' ');
            name = name.replace(/\./g, ' ');
            var words = name.split(' ');
            for (var w = 0; w < words.length; w++) {
                words[w] = words[w][0].toUpperCase() + words[w].substring(1).toLowerCase();
            }
            name = words.join(' ');
        }

        if (obj.type === 'state') {
            name = _(name);
        }
        if (obj.common.icon) {
            var adapter = obj._id.split('.').shift();
            html += '<div class="mobile-widget-a" title="' + (obj.common.role || '') +'">' +
                '<img class="mobile-widget-icon" src="/adapter/' + adapter + '/' + obj.common.icon + '" style="height: 32px"/>' +
                '<div class="' + (obj.type == 'channel' ? 'mobile-title' : '') + '">' + name + '</div>';
        } else {
            html += '<div class="mobile-widget-a ' + (obj.type == 'channel' ? 'mobile-title' : '') + '"  title="' + (obj.common.role || '') +'">' + name;
        }

        switch (obj.common.role) {
            case 'dimmer':
                html += '</div>';
                if (obj.children) {
                    for (i = 0; i < obj.children.length; i++) {
                        id = obj.children[i];

                        if (this.objects[id] && this.objects[id].common && this.objects[id].common.role === 'level.dimmer') {
                            if (!this.states[id]) {
                                // read states
                                if (this.queueStates.indexOf(id) == -1) this.queueStates.push(id);
                            } else {
                                if (this.updateStates.indexOf(id) == -1) this.updateStates.push(id);
                            }

                            html += '<div class="mobile-widget-b"><select class="mobile-control" data-mobile-id="' + id + '" data-role="slider">' +
                                '<option value="' + this.objects[id].common.min + '">' + _('off') + '</option>' +
                                '<option value="' + this.objects[id].common.max + '">' + _('on')  + '</option>' +
                                '</select></div>';
                            html += '<div class="mobile-widget-c">' +
                                '<input class="mobile-control" type="range" data-mobile-id="' + id +
                                '" min="' + this.objects[id].common.min + '" max="' + this.objects[id].common.max + '"/></div>';

                        }
                    }
                }
                break;

            case 'blind':
                html += '</div>';
                if (obj.children) {
                    for (i = 0; i < obj.children.length; i++) {
                        id = obj.children[i];

                        if (this.objects[id] && this.objects[id].common && this.objects[id].common.role === 'level.blind') {
                            if (!this.states[id]) {
                                // read states
                                if (this.queueStates.indexOf(id) == -1) this.queueStates.push(id);
                            } else {
                                if (this.updateStates.indexOf(id) == -1) this.updateStates.push(id);
                            }

                            html += '<div class="mobile-widget-b">\n' +
                                '    <select class="mobile-control" data-mobile-id="' + id + '" data-role="slider" data-min="' + this.objects[id].common.min + '" data-max="' + this.objects[id].common.max + '" >\n' +
                                '        <option value="' + this.objects[id].common.min + '">' + _('closed') + '</option>\n' +
                                '        <option value="' + this.objects[id].common.max + '">' + _('opened') + '</option>\n' +
                                '    </select>\n' +
                                '</div>\n';


                            html += '<div class="mobile-widget-c">\n' +
                                '   <input class="mobile-control" type="range" data-highlight="true" data-mobile-id="' + id +
                                '" min="' + this.objects[id].common.min + '" max="' + this.objects[id].common.max + '" />\n</div>';
                        }
                    }
                }
                break;

            case 'switch':
                html += '</div>';
                if (obj.children) {
                    for (i = 0; i < obj.children.length; i++) {
                        id = obj.children[i];

                        if (this.objects[id] && this.objects[id].common) {
                            if (this.objects[id].common.role === 'state') {
                                if (!this.states[id]) {
                                    // read states
                                    if (this.queueStates.indexOf(id) == -1)  this.queueStates.push(id);
                                } else {
                                    if (this.updateStates.indexOf(id) == -1) this.updateStates.push(id);
                                }

                                html += '<div class="mobile-widget-b">\n' +
                                    '    <select class="mobile-control" data-mobile-id="' + id + '" data-role="slider" >\n' +
                                    '        <option value="false">' + _('off') + '</option>\n' +
                                    '        <option value="true" >' + _('on') + '</option>\n' +
                                    '    </select>\n' +
                                    '</div>\n';
                            }
                        }
                    }
                }

                break;

            default:
                if (obj.children && obj.children.length) {
                    html += '</div>';
                    for (i = 0; i < obj.children.length; i++) {
                        id = obj.children[i];

                        if (this.objects[id] && this.objects[id].type === 'state') {
                            html += this.renderElement(this.objects[id], obj.common.name || obj._id);
                        }
                    }
                } else {
                    if (direct) html += '</div><div class="mobile-widget-c">';

                    var states = obj.common.states || '';
                    if (states) {
                        if (typeof states == 'object') {
                            states = JSON.stringify(states);
                        } else if (typeof states == 'string' && states[0] != '{') {
                            var values = states.split(';');
                            states = {};
                            for (var v = 0; v < values.length; v++) {
                                var parts = values.split(':');
                                states[parts[0]] = parts[1];
                            }
                            states = JSON.stringify(states);
                        }
                    }

                    if (!this.states[obj._id]) {
                        // read states
                        if (this.queueStates.indexOf(obj._id) == -1) this.queueStates.push(obj._id);
                    } else {
                        if (this.updateStates.indexOf(obj.id) == -1) this.updateStates.push(obj._id);
                    }


                    if (obj.common.role && obj.common.role.indexOf('level') != -1) {
                        html += '<div data-mobile-id="' + obj._id + '" class="mobile-value" data-role="value" data-unit="' + (obj.common.unit || '') + '" data-type="' + obj.common.type + '" ></div>';
                        html += '<input class="mobile-control" type="range" data-mobile-id="' + obj._id + '" min="' + obj.common.min + '" max="' + obj.common.max + '" />';
                    } else
                    if (obj.common.role && obj.common.role.indexOf('button') != -1) {
                        if (!direct) html = '';
                        html += '<input type="button" data-mobile-id="' + obj._id + '" class="mobile-value" data-role="value" data-unit="' + (obj.common.unit || '') + '" data-states=' + "'" + states + "'" + ' data-type="' + obj.common.type + '" value="' + name + '"/>';
                    } else {
                        if (obj.common.write && obj.common.type == 'boolean') {
                            html += '<div class="mobile-widget-b">\n' +
                                '    <select class="mobile-control" data-mobile-id="' + obj._id + '" data-role="slider" >\n' +
                                '        <option value="false">' + _('off') + '</option>\n' +
                                '        <option value="true" >' + _('on') + '</option>\n' +
                                '    </select>\n' +
                                '</div>\n';
                        } else if (obj.common.write && obj.common.type == 'number' && obj.common.max !== undefined) {
                            html += ' - <span data-mobile-id="' + obj._id + '" ' +
                                'data-type="' + obj.common.type + '" ' +
                                'data-unit="' + (obj.common.unit || '') + '" ' +
                                'data-states=' + "'" + states + "'" + '></span>' +
                                '<div class="mobile-widget-c">\n' +
                                '   <input class="mobile-control" type="range" data-highlight="true" data-mobile-id="' + obj._id +
                                '" min="' + (obj.common.min || 0) + '" max="' + obj.common.max + '" />\n</div>';

                        } else {
                            html += '<div data-mobile-id="' + obj._id + '" class="mobile-value" data-role="value" data-unit="' + (obj.common.unit || '') + '" data-states=' + "'" + states + "'" + ' data-type="' + obj.common.type + '"></div>';
                        }
                    }

                    if (!direct) html += '</div></div>';
                }
                break;

        }
        return html;
    },

    renderIndicators: function (obj, $elem) {
        var id;
        // try to find some in device itself
        var parent = obj._id.split('.');
        parent.pop();
        parent = parent.join('.');
        if (this.objects[parent] && this.objects[parent].type == 'device') {
            this.renderIndicators(this.objects[parent], $elem);
        } else {
            var checked = $elem.data('indicators') || [];
            if (checked.indexOf(obj._id) == -1) {
                var $indicators = $elem.find('.mobile-indicators');
                if (!$indicators.length) {
                    $elem.append('<div class="mobile-indicators"></div>');
                    $indicators = $elem.find('.mobile-indicators');
                }

                checked.push(obj._id);
                $elem.data('indicators', checked);

                if (obj.children) {
                    for (var i = 0; i < obj.children.length; i++) {
                        id = obj.children[i];

                        if (this.objects[id] && this.objects[id].common) {
                            if (this.objects[id].common.role && this.objects[id].common.role.match(/^indicator\.?/)) {
                                if (!this.states[id]) {
                                    // read states
                                    if (this.queueStates.indexOf(id) == -1) this.queueStates.push(id);
                                } else {
                                    if (this.updateStates.indexOf(id) == -1) this.updateStates.push(id);
                                }
                                var states = this.objects[id].common.states || '';
                                if (states) {
                                    if (typeof states == 'object') {
                                        states = JSON.stringify(states);
                                    } else if (typeof states == 'string' && states[0] != '{') {
                                        var values = states.split(';');
                                        states = {};
                                        for (var v = 0; v < values.length; v++) {
                                            var parts = values.split(':');
                                            states[parts[0]] = parts[1];
                                        }
                                        states = JSON.stringify(states);
                                    }
                                }
                                var _id = id.replace(/\./g, '-');
                                var text = '<a href="#' + _id + '" ' +
                                    'data-mobile-id="' + id + '" ' +
                                    'data-p="' + _id + '-p" ' +
                                    'data-states=' + "'" + states + "'" + ' ' +
                                    'name="' + (this.objects[id].common.name || id) + '" ' +
                                    'data-rel="popup" ' +
                                    'data-type="' + this.objects[id].common.type + '" ' +
                                    'data-role="indicator" ' +
                                    'class="mobile-widget-a mobile-value mobile-' + this.objects[id].common.role.replace(/\./g, '-') + '" ' +
                                    'data-transition="pop"></a>' +
                                    '<div data-role="popup" id="' + _id +'">' +
                                    '<p id="' + _id + '-p"></p></div>';

                                $indicators.append(text);
                            }
                            if (this.objects[id].children && this.objects[id].children.length) {
                                this.renderIndicators(this.objects[id], $elem);
                            }
                        }
                    }
                }
            }
        }
    },

    renderChannel: function (obj, $elem, group) {
        var $channel = $('<li class="mobile-widget">' + this.renderElement(obj, group) + '</li>');
        $elem.append($channel);

        if ($elem.hasClass('ui-listview')) {
            $elem.listview('refresh');
        }
        this.renderIndicators(obj, $channel);
    },

    renderType: function (id, state, group) {
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
            text +=  ' <b>' + this.objects[id].common.unit + '</b>';
        }
        return text;
    },

    renderState: function (obj, $elem, group) {
        $elem.append('<li class="mobile-widget">' + this.renderElement(obj, group, true) + '</li>');

        if ($elem.hasClass('ui-listview')) {
            $elem.listview('refresh');
        }
    },
    
    renderDevice: function (obj, $elem, group) {
        var $device = $('<li>' + this.renderElement(obj, group) + '</li>');
        $elem.append($device).listview('refresh');
        this.renderIndicators(obj, $device);
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
                navbar += '" href="#' + this.root[j] + '">' + _(this.enums[this.root[j]].common.name) + '</a></li>\n';
            }
    
            var menu = '';
    
            for (var id in this.enums) {
                if (this.enums[id]._id.substring(0, this.root[i].length + 1) == this.root[i] + '.') {
                    menu += '<li><a href="#' + encodeURIComponent(id) + '">' + _(this.enums[id].common.name) + '</a></li>';
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
            parentId   = parentName;
            parentName = this.enums[parentId].common.name;
            name       = this.enums[id].common.name;
        } else {
            parentId = '';
            name = '';
        }
    
        var page =
            '<div id="' + id + '" data-role="page" class="responsive-grid" data-theme="b">' +
            '    <div data-role="header" data-position="fixed" data-id="f2" data-theme="b">' +
            '        <a href="#' + encodeURIComponent(parentId) + '" data-role="button" data-icon="arrow-l">' + _(parentName) + '</a>' +
            '        <h1><span class="mobile-prefix"></span>' + _(name) + '</h1>' +
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
                    this.renderWidget(obj, $ul, this.enums[id].common.name);
                }

            }.bind(this));
        }

        if (this.updateStates.length) {
            for (var i = 0; i < this.updateStates.length; i++) {
                this.updateState(this.updateStates[id], true);
            }

            this.updateStates = [];
        }

        // read states
        var that = this;
        if (this.queueStates.length) {
            this.conn.getStates(this.queueStates, function (err, states) {
                for (var id in states) {
                    that.states[id] = states[id];
                    that.updateState(id, true);
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
    calcChildren: function (objs) {
        var ids = [];
        for (var ob in objs) {
            ids.push(ob);
        }
        ids.sort();
        for (var i = 0; i < ids.length; i++) {
            if (objs[ids[i]].type == 'device' || objs[ids[i]].type == 'channel') {
                var parts = ids[i].split('.');
                var j = i + 1;
                var len = ids[i].length;
                while (j < ids.length && ids[j].substring(0, len) === ids[i]) {
                    var ps = ids[j].split('.');
                    if (ps.length == parts.length + 1) {
                        objs[ids[i]].children =  objs[ids[i]].children || [];
                        objs[ids[i]].children.push(ids[j]);
                    }
                    j++;
                }
            }
        }
        return objs;
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

        $(document).bind("pagebeforechange", function (e, data) {
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

                    // Get Server language
                    that.conn.getObjects(!that.refresh, function (err, objects) {
                        that.conn.getConfig(!that.refresh, function (err, config) {
                            systemLang      = config.language || systemLang;
                            that.language   = systemLang;
                            that.dateFormat = config.dateFormat;
                            translateAll();
                            if (that.isFirstTime) {
                                // Init edit dialog
                                that.isFirstTime = false;
                            }


                            that.objects = that.calcChildren(objects);

                            // find for every object the children

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
                    });

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
    window.addEventListener('load', function (e) {
        window.applicationCache.addEventListener('updateready', function (e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                try {
                    window.applicationCache.swapCache();
                } catch (ex) {
                    console.error(ex);
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
