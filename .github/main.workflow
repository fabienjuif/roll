workflow "New workflow" {
  on = "push"
  resolves = ["quality"]
}

action "dependencies" {
  uses = "docker://node:latest"
  runs = "yarn"
}

action "quality" {
  uses = "docker://node:latest"
  runs = "yarn"
  args = "ci"
  needs = ["dependencies"]
}
