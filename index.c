#include <napi-macros.h>
#include <node_api.h>
#include <usb.h>

#ifndef _WIN32
#include <sys/ioctl.h>
#include <linux/hid.h>
#include <linux/hidraw.h>
#endif

// taken from 'linux/hidraw.h' and 'linux/hid.h'
#ifdef _WIN32

// ioctl
#define HIDIOCGRDESCSIZE 0
#define HIDIOCGRDESC 0
#define HIDIOCGRAWINFO 0

// hidraw
#define HIDRAW_FIRST_MINOR 0
#define HIDRAW_MAX_DEVICES 0
#define HIDRAW_BUFFER_SIZE 0

// hid
#define HID_REQ_GET_REPORT 0
#define HID_REQ_GET_IDLE 0
#define HID_REQ_GET_PROTOCOL 0
#define HID_REQ_SET_REPORT 0
#define HID_REQ_SET_IDLE 0
#define HID_REQ_SET_PROTOCOL 0
#define HID_DT_HID 0
#define HID_DT_REPORT 0
#define HID_DT_PHYSICAL 0

#define HID_MAX_DESCRIPTOR_SIZE 0
#endif

#define IDENTITY(n) n

#define EXPORT_CONSTANT(name) ({              \
  napi_value name##_value;                    \
                                              \
  napi_create_int64(                          \
    env,                                      \
    name,                                     \
    &name##_value);                           \
                                              \
  NAPI_STATUS_THROWS(napi_set_named_property( \
    env,                                      \
    exports,                                  \
    IDENTITY(#name),                          \
    name##_value                              \
  ));                                         \
})

NAPI_INIT() {
#ifndef _WIN32
  // ioctl
  EXPORT_CONSTANT(HIDIOCGRDESCSIZE);
  EXPORT_CONSTANT(HIDIOCGRAWINFO);
  EXPORT_CONSTANT(HIDIOCGRDESC);

  // hidraw
  EXPORT_CONSTANT(HIDRAW_FIRST_MINOR);
  EXPORT_CONSTANT(HIDRAW_MAX_DEVICES);

  // hid
  EXPORT_CONSTANT(HID_REQ_GET_REPORT);
  EXPORT_CONSTANT(HID_REQ_GET_IDLE);
  EXPORT_CONSTANT(HID_REQ_GET_PROTOCOL);
  EXPORT_CONSTANT(HID_REQ_SET_REPORT);
  EXPORT_CONSTANT(HID_REQ_SET_IDLE);
  EXPORT_CONSTANT(HID_REQ_SET_PROTOCOL);
  EXPORT_CONSTANT(HID_DT_HID);
  EXPORT_CONSTANT(HID_DT_REPORT);
  EXPORT_CONSTANT(HID_DT_PHYSICAL);
  EXPORT_CONSTANT(HID_MAX_DESCRIPTOR_SIZE);
#endif
}
