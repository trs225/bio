package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_binary", "closure_js_library")

closure_js_binary(
  name = "bio",
  compilation_level = "ADVANCED",
  deps = [
    ":main",
  ],
)

closure_js_library(
  name = "main",
  language = "ECMASCRIPT6",
  srcs = ["main.js"],
  deps = [
    ":interfaces",
    ":services",
  ],
)

closure_js_library(
  name = "services",
  language = "ECMASCRIPT6",
  srcs = [
    "display_service.js",
    "footprint_service.js",
    "location_service.js",
  ],
  deps = [
    ":interfaces",
  ],
)

closure_js_library(
  name = "interfaces",
  language = "ECMASCRIPT6",
  srcs = [
    "components.js",
    "initializable.js",
  ],  
)
