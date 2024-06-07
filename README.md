# README

Hotwire demo app

Key takeaways:
* Keep `format: :turbo_stream` lined up at every step (url helpers and view
  filenames if you are not specifying the format in the controller)
* Use `connect()` function in a Stimulus controller paired with `data: {
  controller: :controller_name }` in the view to run functions on frame updates
