# GitHub Action: setup-spin

The `rajatjindal/setup-spin` Action sets up the `spin` CLI in your GitHub Actions workflow by adding the binary to `PATH`.

## Usage

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
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup `spin`
        uses: rajatjindal/setup-spin@v1
        id: setup
        with:
          version: "v0.8.0"

      - name: Run `spin version`
        id: info
        run: "spin --version"
```

## Inputs

This section contains a list of all inputs that may be set for this Action.

- `version` - (required) The version of `spin` to install. Supports [semver](https://www.npmjs.com/package/semver) versioning. Defaults to `v0.8.0`.

## Outputs

This section contains a list of all outputs that can be consumed from this Action.

- `version` -  The version of `spin` that was installed.

## Author Information

The original code of this repository is based on

- [endocrimes/setup-nomad](https://github.com/endocrimes/setup-nomad)
- [engineerd/configurator](https://github.com/engineerd/configurator)

# setup-actions
