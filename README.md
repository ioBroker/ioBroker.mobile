![Logo](admin/mobile.png)
# ioBroker.mobile
=================

[![NPM version](http://img.shields.io/npm/v/iobroker.mobile.svg)](https://www.npmjs.com/package/iobroker.mobile)
[![Downloads](https://img.shields.io/npm/dm/iobroker.mobile.svg)](https://www.npmjs.com/package/iobroker.mobile)

[![NPM](https://nodei.co/npm/iobroker.mobile.png?downloads=true)](https://nodei.co/npm/iobroker.mobile/)

jQuery Mobile based user interface. 

![Screen](img/screen.png)

## Usage
To use mobile UI you need to create the logical structure in admin.

### Supported types

- Sliders:

![Slider](img/widget-slider.png)

    - role = "level.dimmer"
    - role = "level.blind" 
    - role consists "level", common.type is "number", common.write is "true" and common.max is defined
    - common.type = "number", common.write is "true" and common.max is defined

- Buttons (must be explicit set to visible via edit mode):

![Slider](img/widget-button.png)

    - role consists "button"
    - role consists "action"
    
    Buttons are invisible by default. They just writes "true" if pressed.

- Switch: 

![Slider](img/widget-switch.png)

    - common.type = "boolean", common.write is "true"

- Set with input field:

    - common.type = "number", common.max is undefined, common.write is "true", common.states is undefined

- Set with states:

    - common.type = "number", common.max is undefined, common.write is "true", common.states is defined

- Show boolean value:

![Slider](img/widget-value-boolean.png)

    - common.write is "false" and common.type is "boolean"

- Show value:

![Slider](img/widget-value-number.png)
    - common.write is "false" and common.type is not "boolean"

You can define the icon for state if writes into common.icon some path, e.g. "/vis.0/main/img/icon.png"

ToDO:
- edit of Icon
- show some widgets with more icons
- tablet view
- show 0% - 100% or (closed window/opened window) by blinds

## Changlog
#### 0.4.6 (2016-09-03)
* (bluefox) support of custom images

#### 0.4.5 (2016-07-01)
* (bluefox) fix open first page

#### 0.4.4 (2016-06-24)
* (bluefox) reload if problems occur

#### 0.4.3 (2016-06-24)
* (bluefox) just check invalid objects

#### 0.4.2 (2016-06-14)
* (bluefox) update version number

#### 0.4.1 (2016-05-12)
* (bluefox) fix control of logical states

#### 0.4.0
* (bluefox) add theme switcher

#### 0.3.0
* (bluefox) fix problem with room names with spaces
* (bluefox) implement side panel

#### 0.2.2
* (bluefox) fix locations in edit mode
* (bluefox) enable visibility of indicators

#### 0.2.1
* (bluefox) fix some errors

#### 0.2.0
* (bluefox) sorting and edit name

#### 0.1.1
* (bluefox) fix errors for some devices

#### 0.1.0
* (bluefox) edit of visibility

#### 0.0.4
* (bluefox) first version. No edit possible.

## License
The MIT License (MIT)

Copyright (c) 2015-2016 bluefox<dogafox@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
