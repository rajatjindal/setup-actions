# GitHub Action: rajatjindal/setup-actions/bindle

The `rajatjindal/setup-actions/bindle` Action sets up the `bindle` CLI in your GitHub Actions workflow by adding the binary to `PATH`.

## Setting up `bindle` 

1.) Create a GitHub Actions Workflow file (e.g.: `.github/workflows/bindle.yml`):

```yaml
name: bindle

on:
  - push

jobs:
  bindle:
    runs-on: ubuntu-latest
    name: Setup bindle
    steps:
      - name: Setup `bindle`
        uses: rajatjindal/setup-actions/bindle@v0.0.1
        id: setup
        with:
          version: "v0.8.0"

      - name: Run `bindle version`
        id: info
        run: "bindle-server --version"
```

### Inputs

This section contains a list of all inputs that may be set for this Action.

- `version` - (required) The version of `bindle` to install. Supports [semver](https://www.npmjs.com/package/semver) versioning. Defaults to `v0.8.0`.

### Outputs

This section contains a list of all outputs that can be consumed from this Action.

- `version` -  The version of `bindle` that was installed.

