hidraw-native
=============

N-API native node module to export constants from `linux/hidraw.h`

## Installation

```sh
$ npm install hidraw-native
```

## Usage

```js
const { HIDIOCGRDESCSIZE } = require('hidraw-native')
```

## API

The following constants are exported:

_**From `hidraw.h`:**_

* `HIDIOCGRDESCSIZE`
* `HIDIOCGRAWINFO`
* `HIDIOCGRDESC`
* `HIDRAW_FIRST_MINOR`
* `HIDRAW_MAX_DEVICES`

_**From `hid.h`:**_

* `HID_REQ_GET_REPORT`
* `HID_REQ_GET_IDLE`
* `HID_REQ_GET_PROTOCOL`
* `HID_REQ_SET_REPORT`
* `HID_REQ_SET_IDLE`
* `HID_REQ_SET_PROTOCOL`
* `HID_DT_HID`
* `HID_DT_REPORT`
* `HID_DT_PHYSICAL`
* `HID_MAX_DESCRIPTOR_SIZE`

## License

MIT
