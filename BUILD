package(default_visibility = ["//visibility:public"])

filegroup(
  name = "html",
  srcs = ["index.html"],
)

filegroup(
  name = "site",
  data = [
   ":html",
   "//javascript:bio",
   "//resume",
  ],
)
