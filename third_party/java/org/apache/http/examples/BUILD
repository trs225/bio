licenses(["permissive"])

package(default_visibility = ["//visibility:public"])

java_library(
  name = "lib",
  srcs = glob(["*.java"]),
  deps = ["//third_party:apache_httpcore"],
  data = ["//:html"]
)

java_binary(
  name = "server",
  runtime_deps = [":lib"],
  main_class = "org.apache.http.examples.ElementalHttpServer",
)
