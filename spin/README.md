# GitHub Action: rajatjindal/setup-actions/spin

The `rajatjindal/setup-actions/spin` Action sets up the `spin` CLI in your GitHub Actions workflow by adding the binary to `PATH`.

## Setting up `spin` 

1.) Create a GitHub Actions Workflow file (e.g.: `.github/workflows/spin.yml`):

```yaml
name: spin

on:
  - push

jobs:
  spin:
    runs-on: ubuntu-latest
    name: Setup spin
    steps:
      - name: Setup `spin`
        uses: rajatjindal/setup-actions/spin@main
        id: setup
        with:
          version: "v0.8.0"

      - name: Run `spin version`
        id: info
        run: "spin --version"
```

### Inputs

This section contains a list of all inputs that may be set for this Action.

- `version` - (required) The version of `spin` to install. Supports [semver](https://www.npmjs.com/package/semver) versioning. Defaults to `v0.8.0`.

### Outputs

This section contains a list of all outputs that can be consumed from this Action.

- `version` -  The version of `spin` that was installed.

