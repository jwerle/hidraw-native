hidraw-native
=============

N-API native node module to export constants from `linux/hidraw.h` (and
`linux/hid.h`).

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

* `HIDRAW_REPORT_DESCRIPTOR_BYTES` (`sizeof(struct hidraw_report_descriptor)`)
* `HIDRAW_DEVINFO_BYTES` (`sizeof(struct hidraw_devinfo)`)

_**From `linux/hidraw.h`:**_

* `HIDIOCGRDESCSIZE`
* `HIDIOCGRAWINFO`
* `HIDIOCGRDESC`
* `HIDRAW_FIRST_MINOR`
* `HIDRAW_MAX_DEVICES`

_**From `linux/hid.h`:**_

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
