const hidraw = require('./')
const test = require('tape')
const os = require('os')

const PLATFORM = os.platform()
const LINUX = 'linux'

test('constants', (t) => {
  const constants = {
    HIDRAW_REPORT_DESCRIPTOR_BYTES: -1,
    HIDRAW_DEVINFO_BYTES: -1,
    HIDIOCGRDESCSIZE: -1,
    HIDIOCGRAWINFO: -1,
    HIDIOCGRDESC: -1,
    HIDRAW_FIRST_MINOR: -1,
    HIDRAW_MAX_DEVICES: -1,
    HID_REQ_GET_REPORT: -1,
    HID_REQ_GET_IDLE: -1,
    HID_REQ_GET_PROTOCOL: -1,
    HID_REQ_SET_REPORT: -1,
    HID_REQ_SET_IDLE: -1,
    HID_REQ_SET_PROTOCOL: -1,
    HID_DT_HID: -1,
    HID_DT_REPORT: -1,
    HID_DT_PHYSICAL: -1,
    HID_MAX_DESCRIPTOR_SIZE: -1,
  }

  for (const k in hidraw) {
    if (k in constants) {
      if (LINUX === PLATFORM) {
        t.ok(hidraw[k] >= 0, `Constant '${k}' is unsigned integer`)
      } else {
        t.ok(0 === hidraw[k], `Constant '${k}' is 0`)
      }

      constants[k] = hidraw[k]
    }
  }

  if (LINUX === PLATFORM) {
    t.ok(hidraw.HIDRAW_REPORT_DESCRIPTOR_BYTES > 0,
      'HIDRAW_REPORT_DESCRIPTOR_BYTES')

    t.ok(hidraw.HIDRAW_DEVINFO_BYTES > 0,
      'HIDRAW_DEVINFO_BYTES')
  }

  for (const k in constants) {
    t.ok(constants[k] >= 0, `Constant '${k}' visited`)
  }

  t.end()
})
