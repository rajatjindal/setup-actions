# GitHub Action: rajatjindal/setup-actions/tinygo

The `rajatjindal/setup-actions/tinygo` Action sets up the `tinygo` CLI in your GitHub Actions workflow by adding the binary to `PATH`.

## Setting up `tinygo` 

1.) Create a GitHub Actions Workflow file (e.g.: `.github/workflows/tinygo.yml`):

```yaml
name: tinygo

on:
  - push

jobs:
  bindle:
    runs-on: ubuntu-latest
    name: Setup tinygo
    steps:
      - name: Setup `tinygo`
        uses: rajatjindal/setup-actions/tinygo@v0.0.1
        id: setup
        with:
          version: "v0.26.0"

      - name: Run `tinygo version`
        id: info
        run: "tinygo --version"
```

### Inputs

This section contains a list of all inputs that may be set for this Action.

- `version` - (required) The version of `tinygo` to install. Supports [semver](https://www.npmjs.com/package/semver) versioning. Defaults to `v0.25.0`.

### Outputs

This section contains a list of all outputs that can be consumed from this Action.

- `version` -  The version of `tinygo` that was installed.

