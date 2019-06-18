const hidraw = require('./')
const test = require('tape')

test('constants', (t) => {
  const constants = {
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
      t.ok(hidraw[k] >= 0, `Constant '${k}' is unsigned integer`)
      constants[k] = hidraw[k]
    }
  }

  for (const k in constants) {
    t.ok(constants[k] >= 0, `Constant '${k}' visited`)
  }

  t.end()
})
