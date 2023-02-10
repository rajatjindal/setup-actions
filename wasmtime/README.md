# GitHub Action: rajatjindal/setup-actions/wasmtime

The `rajatjindal/setup-actions/wasmtime` Action sets up the `wasmtime` CLI in your GitHub Actions workflow by adding the binary to `PATH`.

## Setting up `wasmtime` 

1.) Create a GitHub Actions Workflow file (e.g.: `.github/workflows/wasmtime.yml`):

```yaml
name: wasmtime

on:
  - push

jobs:
  wasmtime:
    runs-on: ubuntu-latest
    name: Setup wasmtime
    steps:
      - name: Setup `wasmtime`
        uses: rajatjindal/setup-actions/wasmtime@v0.0.1
        id: setup
        with:
          version: "v0.36.0"

      - name: Run `wasmtime version`
        id: info
        run: "wasmtime --version"
```

### Inputs

This section contains a list of all inputs that may be set for this Action.

- `version` - (required) The version of `wasmtime` to install. Supports [semver](https://www.npmjs.com/package/semver) versioning. Defaults to `v0.36.0`.

### Outputs

This section contains a list of all outputs that can be consumed from this Action.

- `version` -  The version of `wasmtime` that was installed.

