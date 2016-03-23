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
/* global systemLang */
/* global _ */
/* global can */
/* global storage */
/* global servConn */
/* global systemDictionary:true */
/* global systemDictionary */
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
        "de": "Lade Zustände...",
        "ru": "Загрузка значений..."
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
    "Reset layout":     {"en": "Reset layout",      "de": "Einstellungen löschen",  "ru": "Сбросить настройки"},

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

    "Technikraum":      {"en": "Technical room",    "de": "Technikraum",    "ru": "Комната оборудования"},
    "Büro":             {"en": "Office",            "de": "Büro",           "ru": "Бюро"},
    "Kellerraum":       {"en": "Basement",          "de": "Kellerraum",     "ru": "Подвал"},
    "Vorraum":          {"en": "Vestibule",          "de": "Vorraum",       "ru": "Сени"},
    "Gang EG":          {"en": "Corridor 1st floor", "de": "Gang EG",       "ru": "Коридор 1й этаж"},
    "Aussen EG":        {"en": "Outside 1st floor", "de": "Aussen EG",      "ru": "Снаружи 1й этаж"},
    "Carport":          {"en": "Carport",           "de": "Carport",        "ru": "Навес над машиной"},
    "WC EG":            {"en": "WC 1st floor",      "de": "WC EG",          "ru": "Туалет 1й этаж"},
    "Bad EG":           {"en": "Bath 1st floor",    "de": "Bad EG",         "ru": "Bad 1й этаж"},
    "Schrankraum":      {"en": "Wardrobe",          "de": "Schrankraum",    "ru": "Шкаф"},
    "Bad OG":           {"en": "Bath 2nd floor",    "de": "Bad OG",         "ru": "Ванная 2й этаж"},
    "Kinderzimmer 1":   {"en": "Kid's room 1",      "de": "Kinderzimmer 1", "ru": "Детская 1"},
    "Kinderzimmer 2":   {"en": "Kid's room 2",      "de": "Kinderzimmer 2", "ru": "Детская 2"},
    "Gang OG":          {"en": "Corridor 2nd floor", "de": "Gang OG",       "ru": "Коридор 2й этаж"},
    "WC OG":            {"en": "WC 2nd floor",      "de": "WC OG",          "ru": "Туалет 2й этаж"},
    "Speis":            {"en": "Speis", "de": "Speis", "ru": "Speis"},
    "Terrasse":         {"en": "Terrace",           "de": "Terrasse",       "ru": "Терасса"},
    "Garten":           {"en": "Garden",            "de": "Garten",         "ru": "Сад"},
    "Aussen OG":        {"en": "Outside 2nd floor", "de": "Aussen OG",      "ru": "Снаружи 2й этаж"},
    "Treppe":           {"en": "Stair",             "de": "Treppe",         "ru": "Лестница"},
    "Esszimmer":        {"en": "Eating room",       "de": "Esszimmer",      "ru": "Столовая"},
    "Helligkeitswerte": {"en": "Brightness",        "de": "Helligkeitswerte", "ru": "Яркость"},
    "IPCams":           {"en": "IP Cams",           "de": "IPCams",         "ru": "Веб камеры"},
    "Raffstore":        {"en": "Raffstore", "de": "Raffstore", "ru": "Raffstore"},
    "Klima":            {"en": "Air condition",     "de": "Klima",          "ru": "Кондиционер"},
    "Sicherheit":       {"en": "Alarm",             "de": "Sicherheit",     "ru": "Сигнализация"},
    "Verschluss":       {"en": "Gate",              "de": "Verschluss",     "ru": "Двери"},
    "Energiemanagement": {"en": "Energy management", "de": "Energiemanagement", "ru": "Потребление энергии"},

    "Valve State":      {"en": "Valve State",       "de": "Ventilposition", "ru": "Позиция вентиля"},
    "Level":            {"en": "Level",             "de": "Wert",           "ru": "Положение"},
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
    "Submit":           {"en": "Submit",            "de": "Bestätigen",     "ru": "Подтвердить"},
    "Filling Level":    {"en": "Filling Level",     "de": "Füllniveau ",    "ru": "Уровень заполнения"},
    "Defekt State":     {"en": "Defect",            "de": "Defekt State",   "ru": "Поломка"},
    "UP":               {"en": "up",                "de": "Nach oben",      "ru": "наверх"},
    "DOWN":             {"en": "down",              "de": "nach unten",     "ru": "вниз"},
    "Stop":             {"en": "Stop",              "de": "Stop",           "ru": "Стоп"},
    "Voltage":          {"en": "Voltage",           "de": "Spannung",       "ru": "Напряжение"},
    "Power":            {"en": "Power",             "de": "Power",          "ru": "Мощность"},
    "Frequency":        {"en": "Frequency",         "de": "Frequenz",       "ru": "Частота"},
    "Energy Counter":   {"en": "Energy Counter",    "de": "Energiezähler",  "ru": "Счётчик расхода"},
    "Current":          {"en": "Current",           "de": "Strom",          "ru": "Ток"},
    "Boot":             {"en": "Boot",              "de": "Boot",           "ru": "Boot"},
    "Decision Value":   {"en": "Decision Value",    "de": "Entscheidungswert", "ru": "Порог принятия решения"},
    "UNDEFINED":        {"en": "--",                "de": "--",             "ru": "--"},
    "Air Pressure":     {"en": "Air Pressure",      "de": "Luftdruck",      "ru": "Атмосферное давление"}
};


var mobile = {
    version: "0.0.5",
    requiredServerVersion: '0.0.0',
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
    user:         'admin',
    defaultInvisibleRoles: ['inhibit', 'button', 'action', 'timer'],
    defaultInvisibleNames: ['TIMER_ON', 'RELOCK_DELAY', 'OLD_VALUE', 'STATE_UNCERTAIN', 'DECISION_VALUE', 'ADJUSTING_DATA' , 'ADJUSTING_COMMAND'],

    icons:        {
        'temperature':  'temp_temperature.svg',
        'humidity':     'weather_humidity.svg',
        'setpoint':     'temp_control.svg'
    },


    init: function (id) {
        /*$("#server-disconnect").dialog({
         modal:         true,
         closeOnEscape: false,
         autoOpen:      false,
         dialogClass:   'noTitle',
         width:         400,
         height:        90
         });*/
        var that = this;

        this.conn.namespace   = 'mobile.0';
        this.conn._useStorage = true;
        var url = $.mobile.path.parseUrl(location.href);
        this.editMode = (url.search == '?edit');
        if (this.editMode) {
            this.conn.clearCache();
        } else if (url.search == '?refresh') {
            this.conn.clearCache();
            location.href = './' + location.hash;
        }

        // show edit indicator
        if (this.editMode) $('#edit_indicator').show();

        $('#popupEditName').popup().popup('close');
        $('#name_edit').keyup(function (e) {
            if (e.keyCode == 13) {
                $('#ok_edit').trigger('click');
            }
        });

        $('#ok_edit').click(function (e) {
            e.stopPropagation();
            var id  = $('#name_edit').data('id');
            var val = $('#name_edit').val();

            if (that.objects[id].common) {
                that.objects[id].common.mobile = that.objects[id].common.mobile || {};
                that.objects[id].common.mobile[that.user] = that.objects[id].common.mobile[that.user] || {};
                that.objects[id].common.mobile[that.user].name = val || undefined;
                $('.mobile-widget-title[data-edit-id="' + id + '"]').html(_(val || that.objects[id].common.name || id));
                that.saveSettings(id);
            }

            $('#popupEditName').popup('close');
        });

        $(document).bind('pagebeforechange', function (e, data) {
            if (typeof data.toPage === 'string') {
                var u = $.mobile.path.parseUrl(data.toPage);
                var id = decodeURIComponent(u.hash.toString());
                id = id.substring(1);
                id = decodeURIComponent(id);
                id = id.replace(/&.*$/, '');
                that.renderPage(id);
            }
        });

        // edit mode is off => switch it on
        $('.mobile-noedit').click(function () {
            document.location = "?edit" + document.location.hash.replace('&ui-state=dialog', '');
        });
        $('.mobile-edit').click(function () {
            document.location = "./" + document.location.hash.replace('&ui-state=dialog', '');
        });
        $('#edit_indicator').click(function () {
            that.objects = that.calcChildren();
            document.location = "./" + document.location.hash.replace('&ui-state=dialog', '');
        });
        $('.mobile-reset').click(function () {
            that.resetVisibility(function () {
                document.location = "./" + document.location.hash.replace('&ui-state=dialog', '');
            });
        });
        this.conn.init(null, {
            onConnChange: function (isConnected) {
                if (isConnected) {
                    $('#server-disconnect').popup().popup('close');

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
                            var syncTime = that.conn.getSyncTime();
                            if (typeof(Storage) === 'undefined')  {
                                $('.mobile-refresh').hide();
                                $('.last-synchronised').html(_('not supported'));
                            } else {
                                $('.last-synchronised').html(!syncTime ? _('never') : syncTime.toLocaleDateString() + ' ' + syncTime.toLocaleTimeString());
                            }

                            that.conn.getEnums(!that.refresh, function (err, enums) {
                                that.enums = enums;
                                for (var e in that.enums) {
                                    var parts = e.split('.');
                                    if (parts.length == 2) that.root.push(e);
                                }

                                that.renderRootPages();
                            });
                        });
                    });

                } else {
                    $('#server-disconnect').popup('open');
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
                    obj.children = that.objects[id].children;
                    that.objects[id] = obj;
                } else {
                    if (that.objects[id]) delete that.objects[id];
                }
            },
            onError: function (err) {
                window.alert(_('Cannot execute %s for %s, because of insufficient permissions', err.command, err.arg), _('Insufficient permissions'), 'alert', 600);
            }
        }, true/*edit mode */);
    },

    saveObjects: function (cb) {
        if (this.idsToSave && this.idsToSave.length) {
            var id  = this.idsToSave.pop();
            var that = this;
            this.conn._socket.emit('getObject', id, function (err, obj) {
                obj.common.mobile = that.objects[id].common.mobile;
                if (!err) {
                    that.conn._socket.emit('setObject', id, obj, function (err) {
                        if (!err) {
                            setTimeout(function () {
                                that.saveObjects();
                            }, 0);
                        } else {
                            console.error(err);
                            cb && cb(err, id);
                        }
                    });
                } else {
                    console.error(err);
                    cb && cb(err, id);
                }
            });
        } else {
            cb && cb();
        }
    },

    saveSettings: function (id) {
        this.idsToSave = this.idsToSave || [];
        if (this.saveTimeout) clearTimeout(this.saveTimeout);
        if (this.idsToSave.indexOf(id) === -1) this.idsToSave.push(id);
        var that = this;
        this.saveTimeout = setTimeout(function () {
            that.saveObjects();
        }, 300);
    },

    modifyObjects: function (list, cb) {
        if (!list || !list.length) {
            cb && cb();
            return;
        }
        var id   = list.pop();
        var that = this;
        this.conn._socket.emit('setObject', id, this.objects[id], function (err) {
            if (!err) {
                setTimeout(function () {
                    that.modifyObjects(list, cb);
                }, 0);
            } else {
                console.error(err);
                cb && cb(err, id);
            }
        });
    },

    resetVisibility: function (cb) {
        var modified = [];
        for (var id in this.objects) {
            if (this.objects[id] &&
                this.objects[id].common &&
                this.objects[id].common.mobile &&
                this.objects[id].common.mobile[this.user] &&
                this.objects[id].common.mobile[this.user].visible !== undefined) {
                delete this.objects[id].common.mobile[this.user].visible;

                modified.push(id);
            }
        }
        this.modifyObjects(modified, cb);
    },

    updateState: function (id, force) {
        var that = this;
        $('[data-mobile-id="' + id + '"]').each(function () {
            var _id = $(this).data('mobile-id');
            var val = $(this).val();

            if (that.states[_id].val === undefined || that.states[_id].val === 'undefined') {
                console.warn('No data for "' + _id + '".');
                that.states[_id].val = '';
            }

            if (force || val != that.states[_id].val.toString()) {
                var role   = $(this).data('role');
                var val    = that.states[_id].val;
                var rawVal = that.states[_id].val;

                if ($(this).data('type') === 'range') {
                    $(this).val(val);
                    $(this).slider('refresh');
                } else if (role === 'slider') {
                    $(this).val(val);
                    $(this).slider().slider('refresh');
                } else {
                    if (val === 'true'  || val === true) {
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

                    if (states && ((role !== 'indicator' && role !== 'error') || val)) {
                        // convert JSON
                        if (states[0] === '{') {
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
                        } else if (typeof states === 'object') {
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
                            $(this).show().attr('data-value', rawVal);
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
                    if (unit) unit = '<span class="mobile-value-units">' + unit + '</span>';
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

    renderWidget: function (obj, elem, parentName) {
        switch (obj.type) {
            case 'device':
                this.renderChannel(obj, elem, parentName);
                break;

            case 'channel':
                this.renderChannel(obj, elem, parentName);
                break;

            case 'state':
                this.renderState(obj, elem, parentName);
                break;
            default:
        }
    },

    isDefaultInvisible: function (role, id) {
        if (id) {
            var name = id.split('.').pop();
            if (this.defaultInvisibleNames.indexOf(name) !== -1) return true;
        }

        if (role) {
            for (var w = 0; w < this.defaultInvisibleRoles.length; w++) {
                if (role.indexOf(this.defaultInvisibleRoles[w]) !== -1) return true;
            }
        }

        return false;
    },

    renderGenericState: function (obj, struct) {
        var states    = obj.common.states || '';
        var stateName = obj._id.split('.').pop();

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
            if (this.queueStates.indexOf(obj._id)  == -1) this.queueStates.push(obj._id);
        } else {
            if (this.updateStates.indexOf(obj._id) == -1) this.updateStates.push(obj._id);
        }

        struct.controls = [];
        var on  = 'on';
        var off = 'off';
        var roles = obj.common.role ? obj.common.role.split('.') : [];

        if (roles.indexOf('blind') !== -1 || stateName === 'OPEN' || stateName === 'CLOSE') {
            on  = 'closed';
            off = 'opened';
        }

        // add for blinds and dimmer on/off switch
        if (obj.common.role === 'level.dimmer' || obj.common.role === 'level.blind') {
            struct.controls.push({
                checkbox: true,
                control:
                    '    <select class="mobile-control" data-mobile-id="' + obj._id + '" data-role="slider" data-min="' + (obj.common.min !== undefined ? obj.common.min : 0) + '" data-max="' + (obj.common.max !== undefined ? obj.common.max : 100) + '" >\n' +
                    '        <option value="' + (obj.common.min !== undefined ? obj.common.min : 0)   + '">' + _(off) + '</option>\n' +
                    '        <option value="' + (obj.common.max !== undefined ? obj.common.max : 100) + '">' + _(on)  + '</option>\n' +
                    '    </select>\n'
            });
        }

        // add slider
        if (roles.indexOf('level') !== -1 || (obj.common.write && obj.common.type === 'number' && obj.common.max !== undefined)) {
            struct.controls.push({
                value:   '<div   class="mobile-value ' + (obj.common.unit ? 'mobile-value-with-units' : 'mobile-value-alone') + '" data-role="value" data-mobile-id="' + obj._id + '" data-unit="' + (obj.common.unit || '') + '" data-type="' + obj.common.type + '" data-states=' + "'" + states + "'" + '></div>',
                control: '<input class="mobile-control" type="range"    data-mobile-id="' + obj._id + '" min="' + (obj.common.min !== undefined ? obj.common.min : 0) + '" max="' + (obj.common.max !== undefined ? obj.common.max : 100) + '" />'
            });
        } else
        // add button
        if (roles.indexOf('button') !== -1 || roles.indexOf('action') !== -1) {
            struct.controls.push({
                control:
                    '<input ' +
                    'class="mobile-control" ' +
                    'type="button" ' +
                    'data-mobile-id="' + obj._id + '" ' +
                    'data-role="value" ' +
                    'data-unit="'  + (obj.common.unit || '') + '" ' +
                    'data-states=' + "'" + states + "'" + ' ' +
                    'data-type="'  + obj.common.type + '" ' +
                    'value="'      + struct.title + '"/>'
            });
            // title is on the button
            struct.title = null;
        } else
        // generic types
        // controllable boolean
        if (obj.common.write && obj.common.type === 'boolean') {
            struct.controls.push({
                checkbox: true,
                control:
                    '    <select class="mobile-control" data-mobile-id="' + obj._id + '" data-role="slider" data-min="' + (obj.common.min !== undefined ? obj.common.min : false) + '" data-max="' + (obj.common.max !== undefined ? obj.common.max : true) + '" >\n' +
                    '        <option value="' + (obj.common.min !== undefined ? obj.common.min : false) + '">' + _(off) + '</option>\n' +
                    '        <option value="' + (obj.common.max !== undefined ? obj.common.max : true)  + '">' + _(on)  + '</option>\n' +
                    '    </select>'
            });
        } else
        // controllable number, but as text
        if (obj.common.write && obj.common.type === 'number' && obj.common.max !== undefined) {
            struct.controls.push({
                value:   '<div   class="mobile-value ' + (obj.common.unit ? 'mobile-value-with-units' : 'mobile-value-alone') + '" data-mobile-id="' + obj._id + '" data-role="value" data-unit="' + (obj.common.unit || '') + '" data-type="' + obj.common.type + '" data-states=' + "'" + states + "'" + '></div>',
                control: '<input class="mobile-control" type="range" data-type="' +  obj.common.type + '" data-mobile-id="' + obj._id + '" min="' + (obj.common.min !== undefined ? obj.common.min : 0) + '" max="' + (obj.common.max !== undefined ? obj.common.max : 100) + '"/>'
            });
        } else if (obj.common.write && !states) {
            struct.controls.push({
                value:   '<input class="mobile-value" data-mobile-id="' + obj._id + '" data-role="value" data-type="' + obj.common.type + '" data-states=' + "'" + states + "'" + ' />' + (obj.common.unit ? '<span>' + obj.common.unit + '</span>': ''),
                control: '<input ' +
                    'class="mobile-control" ' +
                    'type="button" '   +
                    'data-mobile-id="' + obj._id + '" ' +
                    'data-type="set" ' +
                    'value="' + _('set') + '"/>'
            });
        } else if (obj.common.write && states) {
            // to do select
            struct.controls.push({
                value:   '<input class="mobile-value" data-mobile-id="' + obj._id + '" data-role="value" data-type="' + obj.common.type + '" data-states=' + "'" + states + "'" + ' />' + (obj.common.unit ? '<span>' + obj.common.unit + '</span>': ''),
                control: '<input ' +
                    'class="mobile-control" ' +
                    'type="button" '   +
                    'data-mobile-id="' + obj._id + '" ' +
                    'data-type="set" ' +
                    'value="' + _('set') + '"/>'
            });
        }else {
            // non controllable value
            struct.controls.push({
                value: '<div ' +
                    'data-mobile-id="' + obj._id + '" ' +
                    'class="mobile-value ' + (obj.common.unit ? 'mobile-value-with-units' : 'mobile-value-alone') + '" ' +
                    'data-role="value" ' +
                    'data-unit="'  + (obj.common.unit || '') + '" ' +
                    'data-states=' + "'" + states + "'" + ' ' +
                    'data-type="'  + obj.common.type + '"></div>'
            });
        }
        return struct;
    },

    prepareElement: function (obj, parentName, struct) {
        var i;
        var id;
        var name = (obj.common.mobile && obj.common.mobile[this.user]) ? obj.common.mobile[this.user].name || obj.common.name || obj._id : obj.common.name || obj._id;

        struct = struct || {};

        // ignore indicators
        if (obj.common.role && obj.common.role.match(/^indicator\.?/)) return '';

        var name;

        if (obj.common.mobile && obj.common.mobile[this.user] && obj.common.mobile[this.user].name) {
            name = obj.common.mobile[this.user].name
        } else {
            name = obj.common.name || obj._id;
            name = decodeURIComponent(name);
            // remove room or function name from device name
            if (parentName) {
                var reg1 = new RegExp ('[-.\/]+' + parentName + '[-.\/]+', 'gi');
                var reg2 = new RegExp ('[-.\/]+' + parentName, 'gi');
                var reg3 = new RegExp (parentName + '[-.\/]+', 'gi');
                var reg4 = new RegExp (parentName, 'gi');
                name = name.replace(reg1, '.');
                name = name.replace(reg2, '');
                name = name.replace(reg3, '');
                name = name.replace(reg4, '');
                name = name.replace(/_/g, ' ');
                name = name.replace(/\./g, ' ');
                try {
                    name = decodeURIComponent(name);
                } catch(err) {
                    console.error('Cannot decode: ' + name + '(' + err + ')');
                }
                var words = name.split(/\s+/);
                for (var w = words.length - 1; w >= 0; w--) {
                    if (!words[w]) {
                        words.splice(w, 1);
                        continue;
                    }
                    words[w] = words[w][0].toUpperCase() + words[w].substring(1).toLowerCase();
                }
                name = words.join(' ');
            }
        }

        // try to translate the state anme
        if (obj.type === 'state') name = _(name);

        struct.title = name;

        if (obj.common.icon) {
            var adapter = obj._id.split('.').shift();
            struct.icon = '/adapter/' + adapter + '/' + obj.common.icon;
        }

        if (obj.children && obj.children.length) {
            //html += '</div>';
            struct.children = {};
            for (i = 0; i < obj.children.length; i++) {
                id = obj.children[i];
                if (!this.editMode && this.objects[id].common.mobile &&
                    this.objects[id].common.mobile[this.user] &&
                    this.objects[id].common.mobile[this.user].visible === false) continue;

                if (this.objects[id] && this.objects[id].type === 'state') {
                    struct.children[id] = struct.children[id] || {};
                    struct.children[id].parent = obj._id;
                    this.prepareElement(this.objects[id], obj.common.name || obj._id, struct.children[id]);

                    if (!struct.children[id].controls && !struct.children[id].children) delete struct.children[id];
                }
            }

            // Check if any child is visible
            var anyChild = false;
            for (var c in struct.children) {
                if (struct.children.hasOwnProperty(c)) {
                    anyChild = true;
                    break;
                }
            }
            if (!anyChild) delete struct.children;
        } else if (this.editMode || !obj.common.mobile || !obj.common.mobile[this.user] || obj.common.mobile[this.user].visible !== false) {
            // do not show some buttons by default
            if (!this.editMode &&
                (!obj.common.mobile || !obj.common.mobile[this.user] || obj.common.mobile[this.user].visible === undefined) &&
                this.isDefaultInvisible(obj.common.role, obj._id)) {
                // ignore it if not explicit enabled
            } else {
                this.renderGenericState(obj, struct);
            }
        }

        return struct;
    },

    renderIndicators: function (obj, $elem, originId) {
        var id;
        // try to find some in device itself
        var parent = obj._id.split('.');
        parent.pop();
        parent = parent.join('.');
        if (this.objects[parent] && this.objects[parent].type == 'device') {
            this.renderIndicators(this.objects[parent], $elem, originId);
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
                                // do not render WORKING and DIRECTION for other channels than origin
                                if ((this.objects[id].common.role === 'indicator.working' || this.objects[id].common.role === 'indicator.direction') && originId !== id.substring(0, originId.length)) {
                                    continue;
                                }

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
                                var name = (this.objects[id].common.name || id).split('.').pop().replace(/_/g, ' ');
                                var _id = id.replace(/\./g, '-');
                                var text = '<a href="#' + _id + '" ' +
                                    'style="display: none" ' +
                                    'data-mobile-id="' + id + '" ' +
                                    'data-p="' + _id + '-p" ' +
                                    'data-states=' + "'" + states + "'" + ' ' +
                                    'name="' + name + '" ' +
                                    'data-rel="popup" ' +
                                    'data-type="' + this.objects[id].common.type + '" ' +
                                    'data-role="indicator" ' +
                                    'class="mobile-widget-a mobile-value mobile-' + this.objects[id].common.role.replace(/\./g, '-') + '" ' +
                                    'data-transition="pop"></a>' +
                                    '<div data-history="false" data-role="popup" id="' + _id +'" style="background: gray">' +
                                    '<p id="' + _id + '-p"></p></div>';

                                $indicators.append(text);
                            }
                            if (this.objects[id].children && this.objects[id].children.length) {
                                this.renderIndicators(this.objects[id], $elem, originId);
                            }
                        }
                    }
                }
            }
        }
    },

    _renderSingleSubState: function (control, parent, id) {
        var html = '';
        html += '<' + (this.editMode ? 'li' : 'div') + ' style="width: 100%" class="' + (control.id ? 'mobile-visibility' : '') + '" ' + (control.id ? ' data-edit-id="' + control.id + '"' : '') + '><table class="mobile-widget-table">';
        html += '<tr>\n';

        if (control.checkbox && !control.value) {
            html += '  <td class="mobile-widget-table-begin">' + (control.control || '') + '</td>\n';
            html += '  <td class="mobile-widget-title mobile-widget-title-normal" data-edit-id="' + id + '">'       + (parent.title    || '') + '</td>\n';
            // show title only one time
            parent.title = null;
        } else {

            if (parent.title && control.control) {
                html += '<td class="mobile-widget-table-begin">' + (control.value.replace('mobile-value ', 'mobile-value mobile-value-big ')   || '') + '</td>\n';
                html += '<td class="mobile-widget-table-control">';
                html += '  <table class="mobile-widget-table">';
                html += '    <tr><td><div class="mobile-widget-title mobile-widget-title-small" data-edit-id="' + id + '">' + parent.title + '</div></td></tr>\n';
                html += '    <tr><td><div>' + control.control + '</div></td></tr>\n';
                html += '  </table>';
                html += '</td>';
                parent.title = null;
            } else if (parent.title && !control.control) {
                html += '  <td class="mobile-widget-table-begin">' + (control.value   || '') + '</td>\n';
                html += '  <td class="mobile-widget-table-control">';
                html += '      <div class="mobile-widget-title mobile-widget-title-normal" data-edit-id="' + id + '">' + parent.title + '</div>\n';
                html += '  </td>';
                parent.title = null;
            } else {
                // just control
                html += '  <td class="mobile-widget-table-begin">'   + (control.value   || '') + '</td>\n';
                html += '  <td class="mobile-widget-table-control">' + (control.control || '') + '</td>\n';
            }
        }
        html += '</tr>\n';
        html += '</table></' + (this.editMode ? 'li' : 'div') + '>\n';
        return html;
    },

    _renderCombinedSubState : function (control, parent, state) {
        // used only in non edit mode
        var html = '';
        html += '<div><table class="mobile-widget-table mobile-widget-b"><tr>\n';
        html += '   <td class="mobile-widget-table-begin">' + (control.value || '') + (control.control || '') + '</td>\n';
        html += '   <td style="position: relative">';
        html += parent.title  ? '<div class="mobile-value-group-title">' + parent.title  + '</div>\n' : '';
        html += state && state.title ? '<div class="mobile-value-small-title">' + state.title + '</div>\n' : '';
        html += '</td><td class="mobile-widget-table-icon">';
        html += parent.icon  ? '<img class="mobile-widget-icon mobile-widget-icon-floating" src="'   + parent.icon  + '" />' : '';
        html += '</td></tr></table></div>\n';
        return html;
    },

    renderChannel: function (obj, $elem, parentName) {
        var _mobile = obj.common && obj.common.mobile ? obj.common.mobile[this.user] : null;
        if (!this.editMode && _mobile && _mobile.visible === false) return;

        var struct = this.prepareElement(obj, parentName);

        if (!struct.controls && !struct.children) return;

        var html = '<li class="mobile-widget" data-edit-id="' + obj._id + '">\n';

        // show channel description
        html += '<div class="mobile-widget-a mobile-visibility" title="' + (obj.common.role || '') +'" data-edit-id="' + obj._id + '">\n';

        var count = 0;
        var order;
        var firstChild;
        for (var child in struct.children) {
            if (!firstChild) firstChild = child;
            count++;
        }

        var c;
        order = _mobile.order || [];
        if (struct.children) {
            for (child in struct.children) {
                if (order.indexOf(child) === -1) order.push(child);
            }
            for (c = order.length - 1; c >= 0; c--) {
                if (!struct.children[order[c]]) order.splice(c, 1);
            }
        } else {
            order = [];
        }


        // do not show title if only one child
        if (count < 2 && !this.editMode) {
            //struct.title = '';
        }

        // if only one child and not slider
        if (!this.editMode && count == 1 && (struct.children[firstChild].controls[0].checkbox || !struct.children[firstChild].controls[0].control)) {
            // Show all in one line
            // control | text | icon
            struct.children[firstChild].controls[0].id = firstChild; // enable visibility
            html += this._renderCombinedSubState(struct.children[firstChild].controls[0], struct, struct.children[child].controls.length == 1 ? struct.children[firstChild]: null);

            for (c = 1; c < struct.children[child].controls.length; c++) {
                struct.children[child].controls[c].id = child; // enable visibility
                html += this._renderSingleSubState(struct.children[child].controls[c], struct.children[child], child);
            }
        } else {
            // place title
            html += struct.icon  ? '<img class="mobile-widget-icon" src="'   + struct.icon  + '"/>' : '';
            html += struct.title ? '<div class="mobile-widget-title mobile-value-group-title" data-edit-id="' + obj._id + '">' + struct.title + '</div>\n' : '';

            html += '<' + (this.editMode ? 'ul' : 'div') + ' class="mobile-widget-b" title="' + (obj.common.role || '') +'" style="padding: 0" data-edit-id="' + obj._id + '">\n';

            // try to build states
            for (var or = 0; or < order.length; or++) {
                child = order[or];
                if (!struct.children[child].controls) continue;
                for (c = 0; c < struct.children[child].controls.length; c++) {
                    struct.children[child].controls[c].id = child; // enable visibility
                    html += this._renderSingleSubState(struct.children[child].controls[c], struct.children[child], child);
                }
            }
            html += '</' + (this.editMode ? 'ul' : 'div') + '>\n';
        }

        html += '</div>\n';
        html += '</li>\n';


        var $channel = $(html);
        $elem.append($channel);

        if ($elem.hasClass('ui-listview')) {
            $elem.listview('refresh');
        }

        if (!this.editMode) this.renderIndicators(obj, $channel, obj._id);
    },

    renderState: function (obj, $elem, parentName) {
        if (!this.editMode && obj.common && obj.common.mobile && obj.common.mobile[this.user] && obj.common.mobile[this.user].visible === false) return;
        var struct = this.prepareElement(obj, parentName);

        if (!struct.controls) return;

        var html = '<li class="mobile-widget" data-edit-id="' + obj._id + '">\n';
        // show State description
        html += '<div class="mobile-widget-a mobile-visibility" title="' + (obj.common.role || '') +'" data-edit-id="' + obj._id + '">\n';

        var c;
        if (!this.editMode && (struct.controls[0].checkbox || !struct.controls[0].control)) {
            // Show all in one line
            // control | text | icon
            html += this._renderCombinedSubState(struct.controls[0], struct);

            for (c = 1; c < struct.controls.length; c++) {
                html += this._renderSingleSubState(struct.controls[c], struct, obj._id);
            }
        } else {
            // place title
            html += struct.icon  ? '<img class="mobile-widget-icon" src="'   + struct.icon  + '"/>'       : '';
            html += struct.title ? '<div class="mobile-value-group-title">' + struct.title + '</div>\n' : '';

            html += '<div class="mobile-widget-b">\n';

            // try to build state
            for (c = 0; c < struct.controls.length; c++) {
                html += this._renderSingleSubState(struct.controls[c], struct, obj._id);
            }
            html += '</div>\n';
        }


        html += '</div>\n';
        html += '</li>\n';

        $elem.append(html);

        if ($elem.hasClass('ui-listview')) $elem.listview('refresh');
    },

    renderEditButtons: function () {
        if (this.editMode) {
            var that = this;
            $(document).on('pageshow', function (event) {
                // render root pages
                $('.mobile-visibility-root').each(function () {
                    if (!$(this).is(':visible')) return;
                    if ($(this).parent().find('.mobile-edit-enum').length) return;

                    var id = $(this).data('edit-id');
                    var href = $(this).attr('href');
                    that.objects[id].common.mobile            = that.objects[id].common.mobile || {};
                    that.objects[id].common.mobile[that.user] = that.objects[id].common.mobile[that.user] || {};
                    var mobile = that.objects[id].common.mobile[that.user];

                    // everything is visible by default
                    if (mobile.visible === undefined) {
                        mobile.visible = !that.isDefaultInvisible(that.objects[id].common.role, id);
                        that.saveSettings(id);
                    }

                    var $overlay  = $('<div data-href="' + href + '" class="mobile-edit-enum ' + (!mobile.visible ? 'mobile-invisible' : '') + '" ></div>'); //style="top: ' + pos.top + 'px; height: ' + h + 'px; width: ' + w + 'px; left: ' + pos.left + 'px"
                    var $checkbox = $('<div data-edit-id="' + (id || '') + '" class="mobile-enum-visibility">' + (mobile.visible ? '&#10003;' : '') + '</div>');
                    var $name     = $('<a   data-edit-id="' + (id || '') + '" class="mobile-edit-name ui-btn ui-shadow ui-corner-all ui-icon-edit ui-btn-icon-notext ui-btn-inline"></a>');
                    //var $sort     = $('<a class="mobile-edit-sort ui-btn ui-icon-bars ui-btn-icon-notext ui-btn-inline" style="opacity: 0.6;"></a>');

                    $overlay.append($checkbox);
                    $overlay.append($name);
                    //$overlay.append($sort);
                    $(this).parent().prepend($overlay);

                    $overlay.click(onForward);
                    $checkbox.click(onEnumVisibility);
                    $name.click(onEditName);
                });

                // render second menu
                $('.mobile-visibility-subroot').each(function () {
                    if (!$(this).is(':visible')) return;
                    if ($(this).parent().find('.mobile-edit-subenum').length) return;

                    var id = $(this).data('edit-id');
                    var href = $(this).attr('href');
                    that.objects[id].common.mobile            = that.objects[id].common.mobile || {};
                    that.objects[id].common.mobile[that.user] = that.objects[id].common.mobile[that.user] || {};
                    var mobile = that.objects[id].common.mobile[that.user];

                    // everything is visible by default
                    if (mobile.visible === undefined) {
                        mobile.visible = !that.isDefaultInvisible(that.objects[id].common.role, id);
                        that.saveSettings(id);
                    }

                    var $overlay  = $('<div data-href="' + href + '" class="mobile-edit-subenum ' + (!mobile.visible ? 'mobile-invisible' : '') + '"></div>');
                    var $checkbox = $('<div style="margin-right: 3em;" data-edit-id="' + (id || '') + '" class="mobile-enum-visibility">' + (mobile.visible ? '&#10003;' : '') + '</div>');
                    var $name     = $('<a   data-edit-id="' + (id || '') + '" class="mobile-edit-name ui-btn ui-shadow ui-corner-all ui-icon-edit ui-btn-icon-notext ui-btn-inline" ></a>');
                    var $sort     = $('<a class="mobile-edit-sort ui-btn ui-icon-bars ui-btn-icon-notext ui-btn-inline" style="opacity: 0.6;"></a>');

                    $overlay.append($checkbox);
                    $overlay.append($name);
                    $overlay.append($sort);
                    $(this).parent().prepend($overlay);

                    $overlay.click(onForward);
                    $checkbox.click(onEnumVisibility);
                    $name.click(onEditName);
                });

                // render elements
                $('.mobile-visibility').each(function () {
                    if (!$(this).is(':visible')) return;
                    var id  = $(this).data('edit-id');

                    if ($(this).data('processed')) return;
                    $(this).data('processed', true);

                    var $elem;
                    that.objects[id].common.mobile            = that.objects[id].common.mobile || {};
                    that.objects[id].common.mobile[that.user] = that.objects[id].common.mobile[that.user] || {};
                    var mobile = that.objects[id].common.mobile[that.user];

                    // button is invisible by default
                    if (mobile.visible === undefined) {
                        mobile.visible = !that.isDefaultInvisible(that.objects[id].common.role, id);
                        that.saveSettings(id);
                    }

                    var $overlay  = $('<div class="mobile-edit-element mobile-edit-' + that.objects[id].type + ' ' + (!mobile.visible ? 'mobile-invisible' : '') + '"></div>'); //style="top: ' + pos.top + 'px; height: ' + h + 'px"
                    var $checkbox = $('<div data-edit-id="' + (id || '') + '" class="mobile-enum-visibility" ' + (that.objects[id].type !== 'state' ? ' style="margin: 0"' : '') + '>' + (mobile.visible ? '&#10003;' : '') + '</div>');
                    var $name     = $('<a   data-edit-id="' + (id || '') + '" class="mobile-edit-name ui-btn ui-shadow ui-corner-all ui-icon-edit ui-btn-icon-notext ui-btn-inline"' + (that.objects[id].type !== 'state' ? ' style="margin-right: 1.6em; margin-top: 0"' : '') + '></a>');
                    var $sort     = $('<a class="mobile-edit-sort ui-btn ui-icon-bars ui-btn-icon-notext ui-btn-inline" style="opacity: 0.6;' + (that.objects[id].type !== 'state' ? ' margin-right: 1.6em; margin-top: 0' : '') + '"></a>');

                    $overlay.append($checkbox);
                    $overlay.append($name);
                    $overlay.append($sort);
                    $(this).prepend($overlay);

                    $checkbox.click(onStateVisibility);
                    $name.click(onEditName);
                });

                // detect channels, that have all states hidden
                that.detectAllHiddenStates();

                $('ul').each(function () {
                    var $ul = $(this);
                    var $li = $ul.find('> li');
                    if (!$ul.data('edit-id')) {
                        $li.find('.mobile-edit-sort').remove();
                        return;
                    }

                    if ($li.length > 1) {
                        $ul.sortable();
                        $ul.disableSelection().bind('sortstop', function(event, ui) {
                            // get order
                            var $li = $(this).find('> li');
                            var order = [];
                            var rootId = $(this).data('edit-id');
                            $li.each(function () {
                                var id = $(this).data('edit-id');
                                order.push(id);
                            });
                            that.objects[rootId].common.mobile = that.objects[rootId].common.mobile || {};
                            that.objects[rootId].common.mobile[that.user] = that.objects[rootId].common.mobile[that.user] || {};
                            that.objects[rootId].common.mobile[that.user].order = order;
                            that.saveSettings(rootId);
                            //$(this).listview('refresh');
                        });
                    } else {
                        $li.find('.mobile-edit-sort:first').remove();
                    }
                });
            });
        }
    },

    renderRootPages: function () {
        // http://demos.jquerymobile.com/1.2.1/docs/toolbars/docs-navbar.html
        var grid;
        var count = 0;
        var name;
        var common;
        for (var i = 0; i < this.root.length; i++) {
            common = this.objects[this.root[i]] ? this.objects[this.root[i]].common : null;

            // hide if invisible
            if (!this.editMode && common && common.mobile && common.mobile[this.user] && common.mobile[this.user].visible === false) continue;

            count++;
        }

        switch (count) {
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

        for (i = 0; i < this.root.length; i++) {
            var navbar = '';
            var rCommon = this.objects[this.root[i]] ? this.objects[this.root[i]].common : null;
            if (!this.editMode && rCommon && rCommon.mobile && rCommon.mobile[this.user] && rCommon.mobile[this.user].visible === false) continue;


            // build footer (root menu)
            for (var j = 0; j < this.root.length; j++) {
                common = this.objects[this.root[j]] ? this.objects[this.root[j]].common : null;

                // hide if invisible
                if (!this.editMode && common && common.mobile && common.mobile[this.user] && common.mobile[this.user].visible === false) continue;

                name = common.mobile && common.mobile[this.user] ? common.mobile[this.user].name || common.name || this.root[j] : common.name || this.root[j];

                navbar += '<li style="position: relative"><a class="' + (i === j ? 'ui-btn-active ui-state-persist' : '') + ' mobile-visibility-root mobile-widget-title" data-edit-id="' + this.root[j] + '" data-icon="';
                if (this.root[j] == 'enum.rooms') {
                    navbar += 'home';
                } else if (this.root[j] == 'enum.functions') {
                    navbar += 'gear';
                } else {
                    navbar += 'star';
                }
                navbar += '" href="#' + this.root[j].replace(/\./g, '*') + '">' + _(name) + '</a></li>\n';
            }
    
            var menu = '';
            // build footer (root menu)
            var order = (rCommon.mobile && rCommon.mobile[this.user]) ? rCommon.mobile && rCommon.mobile[this.user].order || [] : [];

            // check if still actual
            for (var k = order.length - 1; k >= 0; k--) {
                var _id = order[k];
                if (_id.substring(0, this.root[i].length + 1) !== this.root[i] + '.') {
                    order.splice(k, 1);
                }
            }
            // fill all missing ids into order
            for (var id in this.enums) {
                var _id = this.enums[id]._id;
                if (_id.substring(0, this.root[i].length + 1) == this.root[i] + '.') {
                    if (order.indexOf(_id) === -1) order.push(_id);
                }
            }


            // build content
            for (var k = 0; k < order.length; k++) {
                var _id = order[k];
                common = this.objects[_id] ? this.objects[_id].common : null;

                // hide if invisible
                if (!this.editMode && common && common.mobile && common.mobile[this.user] && common.mobile[this.user].visible === false) continue;

                name = common.mobile && common.mobile[this.user] ? common.mobile[this.user].name || common.name || _id : common.name || _id;

                menu += '<li data-edit-id="' + _id + '"><a href="#' + encodeURIComponent(_id.replace(/\./g, '*')) + '" class="mobile-visibility-subroot mobile-widget-title"" data-edit-id="' + _id + '">' + _(name) + '</a></li>';
            }

            name = rCommon.mobile && rCommon.mobile[this.user] ? rCommon.mobile[this.user].name || rCommon.name || this.root[i] : rCommon.name || this.root[i];

            var page =
                '<div id="' + this.root[i].replace(/\./g, '*') + '" data-role="page" class="responsive-grid" data-theme="b">' +
                // header
                '    <div data-role="header" data-position="fixed" data-id="f2" data-theme="b" data-fullscreen="false">' +
                '         <h1><span class="mobile-prefix"></span><span>' + _(name) + '</span></h1>' +
                '         <a href="#info" data-rel="page" data-role="button" data-inline="true" data-icon="info" data-iconpos="notext" class="mobile-info ui-btn-right"></a>' +
                '    </div>' +
                // content
                '    <div data-role="content" data-theme="c">' +
                '       <ul id="menu_' + this.root[i].replace(/\./g, '*') + '" data-role="listview" data-inset="true" class="mobile-sortable" data-edit-id="' + this.root[i] + '">' +
                menu +
                '      </ul>' +
                '    </div>' +
                // footer
                '    <div data-position="fixed" data-tap-toggle="false" data-role="footer" data-id="f1" data-theme="b">' +
                '        <div data-role="navbar" data-grid="' + grid + '">' +
                '            <ul>' + navbar + '</ul>' +
                '        </div>' +
                '    </div>' +
                '</div>';
    
            $('body').append(page);
        }
    
        var url = $.mobile.path.parseUrl(location.href);

        // this is a bug. If use all together something goes wrong and string will not be decoded
        var pageId = decodeURIComponent(url.hash.toString());
        pageId = pageId.substring(1);
        pageId = decodeURIComponent(pageId);
        pageId = pageId.replace(/&.*$/, '');
        this.renderPage(pageId || this.root[0].replace(/\./g, '*'));
    
        $.mobile.initializePage();
        $.mobile.navigate((!url.hash || url.hash == '#') ? '#' + this.root[0].replace(/\./g, '*') : url.hash);

        // manage enumerations
        this.renderEditButtons();
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
            $('div[id="' + id + '"]').trigger('create');
            return;
        }

        var name;
        var parentId;
        var parentName = id.split('*');
        id = id.replace(/\*/g, '.');
        parentName.pop();
        parentName = parentName.join('.');
        var common = this.enums[id] ? this.enums[id].common : null;

        if (this.enums[parentName]) {
            if (!common) debugger;

            parentId   = parentName;
            parentName = (this.enums[parentId].common.mobile && this.enums[parentId].common.mobile[this.user]) ? this.enums[parentId].common.mobile[this.user].name || this.enums[parentId].common.name : this.enums[parentId].common.name;
            name       = (common && common.mobile && common.mobile[this.user]) ? common.mobile[this.user].name || common.name || id : common.name || id;
        } else {
            parentId   = '';
            name       = '';
        }

        // header
        var page =
            '<div id="' + id.replace(/\./g, '*') + '" data-role="page" class="responsive-grid" data-theme="b">' +
            '    <div data-role="header" data-position="" data-id="f2" data-theme="b" data-fullscreen="false">' +
            '        <a href="#' + encodeURIComponent(parentId.replace(/\./g, '*')) + '" data-role="button" data-icon="arrow-l">' + _(parentName) + '</a>' +
            '        <h1><span class="mobile-prefix"></span>' + _(name) + '</h1>' +
            '        <a href="#info" data-rel="page" data-role="button" data-inline="true" data-icon="info" data-iconpos="notext" class="mobile-info ui-btn-right"></a>' +
            '    </div>';
            // content
            page +=
                '    <div data-role="content" data-theme="c">' +
                '        <ul data-edit-id="' + id + '" data-role="listview" data-inset="true" class="mobile-sortable">' +
                '        </ul>' +
                '    </div>';
            page += '</div>';
    
        $('body').append(page);

        var members = this.enums[id].common.members;
        var $ul = $('div[id="' + id.replace(/\./g, '*') + '"] ul');

        $ul.listview();

        if (members) {
            var that = this;
            var order = (this.enums[id].common.mobile && this.enums[id].common.mobile[this.user]) ? this.enums[id].common.mobile[this.user].order || [] : members;
            // check if all members are still in order
            for (var i = 0; i < members.length; i++) {
                if (order.indexOf(members[i]) === -1) order.push(members[i]);
            }
            // check if all orders are still in memebrs
            for (var i = order.length - 1; i >= 0; i--) {
                if (members.indexOf(order[i]) === -1) {
                    order.splice(i, 1);
                }
            }
            for (var i = 0; i < order.length; i++) {
                var children = this.objects[order[i]] ? this.objects[order[i]].children : undefined;
                this.conn.getObject(order[i], !this.refresh, function (err, obj) {
                    if (err) console.error(err);

                    if (obj) {
                        obj.children = children;
                        that.objects[obj._id] = obj;
                        that.renderWidget(obj, $ul, that.enums[id].common.name);
                    }
                });
            }
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
            if ($(this).attr('type') === 'button') {
                if ($(this).data('type') === 'set') {
                    if (id) that.conn.setState(id, $('.mobile-value[data-mobile-id="' + id + '"]').val() || '');
                } else {
                    if (id) that.conn.setState(id, true);
                }
            } else {
                var val = $(this).val();
                if (id && that.states[id].val.toString() != val) {
                    if ($(this).data('type') === 'number') {
                        val = parseFloat(val);
                    }

                    that.conn.setState(id, val);
                }
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
        }, 500);
    },

    detectHiddenStates: function (id) {
        var $elem = $('.mobile-checkbox-visibility[data-edit-id="' + id + '"]');

        if (this.objects[id] &&
            this.objects[id].common &&
            this.objects[id].common.mobile &&
            this.objects[id].common.mobile[this.user] &&
            this.objects[id].common.mobile[this.user].visible) {
            var isAllInvisible = true;

            if (!this.objects[id].children) {
                console.error(id);
                return;
            }

            for (var i = 0; i < this.objects[id].children.length; i++) {
                var cid = this.objects[id].children[i];
                if (this.objects[cid] &&
                    this.objects[cid].common &&
                    this.objects[cid].common.mobile &&
                    this.objects[cid].common.mobile[this.user] &&
                    this.objects[cid].common.mobile[this.user].visible) {
                    isAllInvisible = false;
                    break;
                }
            }
            if (isAllInvisible) {
                $elem.prop('checked', false);
                this.objects[id].common.mobile[this.user].visible = false;
                $elem.parent().addClass('mobile-invisible');
                this.saveSettings(id);
            }
        }
        if (this.objects[id] &&
            this.objects[id].common &&
            this.objects[id].common.mobile &&
            this.objects[id].common.mobile[this.user] &&
            !this.objects[id].common.mobile[this.user].visible) {
            $elem.parent().parent().find('.mobile-edit-state').hide();
        }
    },

    detectAllHiddenStates: function () {
        var that = this;
        $('.mobile-edit-channel').each(function () {
            var id = $(this).find('div').data('edit-id');
            that.detectHiddenStates(id, $(this));
        });
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
                        if (objs[ids[i]].children.indexOf(ids[j]) === -1) {
                            objs[ids[i]].children.push(ids[j]);
                        }
                    }
                    j++;
                }
            }
        }
        return objs;
    }
};
function onEditName(e) {
    e.stopPropagation();
    var that = mobile;
    var id = $(this).data('edit-id');
    //$(this).parent().append('<input type="text" style="width: 100%" value="' + that.objects[id].common.name + '"/>');
    var name;
    if (that.objects[id].common.mobile && that.objects[id].common.mobile[that.user] && that.objects[id].common.mobile[that.user].name) {
        name = that.objects[id].common.mobile[that.user].name;
    } else {
        name = that.objects[id].common.name;
    }
    $('#name_edit').val(name).data('id', id);

    $('#popupEditName').popup('open');
    setTimeout(function () {
        $('#name_edit').focus();
    }, 200);
}

function onStateVisibility(e) {
    e.stopPropagation();
    var that = mobile;
    var id = $(this).data('edit-id');
    var checked = $(this).html();
    checked = !checked;
    $(this).html(checked ? '&#10003;' : '');

    if (!id || !that.objects[id]) {
        console.error('Cannot find object ' + id);
        return;
    }

    if (that.objects[id].common && that.objects[id].common.mobile && that.objects[id].common.mobile[that.user] && that.objects[id].common.mobile[that.user].visible !== checked) {
        that.objects[id].common.mobile[that.user].visible = checked;
        that.saveSettings(id);
    }
    if (that.objects[id].common && that.objects[id].common.mobile && that.objects[id].common.mobile[that.user] && that.objects[id].common.mobile[that.user].visible) {
        $(this).parent().removeClass('mobile-invisible');
        var $states;
        if ($(this).parent().hasClass('mobile-edit-channel')) {
            $states = $(this).parent().parent().find('.mobile-edit-state').show();
        }
        // at least one state of the channel must be visible
        if ($states && $states.length) {
            var oneVisible = false;
            $states.each(function () {
                var $input = $(this).find('div');
                var cid = $input.data('edit-id');
                if (that.objects[cid].common.mobile[that.user].visible) {
                    oneVisible = true;
                    return false;
                }
            });

            if (!oneVisible) {
                $states = $($states[0]);
                var $input = $states.find('div');
                var cid = $input.data('edit-id');
                if (!that.objects[cid].common.mobile[that.user].visible) {
                    // show only one element of channel
                    that.objects[cid].common.mobile[that.user].visible = true;
                    that.saveSettings(cid);
                    $input.html('&#10003;');
                    $states.removeClass('mobile-invisible');
                }
            }
        }
    } else {
        $(this).parent().addClass('mobile-invisible');
        if ($(this).parent().hasClass('mobile-edit-channel')) {
            $(this).parent().parent().find('.mobile-edit-state').hide();
        }
        // try to find some in device itself
        var parent = id.split('.');
        parent.pop();
        parent = parent.join('.');
        if (that.objects[parent]) that.detectHiddenStates(parent);
    }
}

function onSubEnumVisibility(e) {
    var that = mobile;
    e.stopPropagation();
    var id = $(this).data('edit-id');
    var checked = $(this).html();
    checked = !checked;
    $(this).html(checked ? '&#10003;' : '');

    if (that.objects[id].common.mobile[that.user].visible !== checked) {
        that.objects[id].common.mobile[that.user].visible = checked;
        that.saveSettings(id);
    }
    if (that.objects[id].common.mobile[that.user].visible) {
        $(this).parent().removeClass('mobile-invisible');
    } else {
        $(this).parent().addClass('mobile-invisible');
    }
}

function onEnumVisibility(e) {
    var that = mobile;
    e.stopPropagation();
    var id = $(this).data('edit-id');
    var checked = $(this).html();
    checked = !checked;
    $(this).html(checked ? '&#10003;' : '');

    if (that.objects[id].common.mobile[that.user].visible !== checked) {
        that.objects[id].common.mobile[that.user].visible = checked;
        that.saveSettings(id);
    }
    if (that.objects[id].common.mobile[that.user].visible) {
        $(this).parent().removeClass('mobile-invisible');
    } else {
        $(this).parent().addClass('mobile-invisible');
    }
}

function onForward(e) {
    var href = $(this).data('href');
    document.location.href = href;
    e.stopPropagation();
}

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
