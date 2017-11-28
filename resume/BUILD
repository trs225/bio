package(default_visibility = ["//visibility:public"])

genrule(
  name = "resume",
  srcs = ["resume.tex"],
  outs = ["resume.pdf"],
  cmd = "pdflatex resume/resume.tex > /dev/null && cp resume.pdf $@",
)
