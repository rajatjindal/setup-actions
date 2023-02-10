# GitHub Action: rajatjindal/setup-actions/hippo

The `rajatjindal/setup-actions/hippo` Action sets up the `Hippo.Web` server in your GitHub Actions workflow by adding the binary to `PATH`.

## Setting up `hippo` 

1.) Create a GitHub Actions Workflow file (e.g.: `.github/workflows/hippo.yml`):

```yaml
name: hippo

on:
  - push

jobs:
  hippo:
    runs-on: ubuntu-latest
    name: Setup hippo
    steps:
      - name: Setup `hippo`
        uses: rajatjindal/setup-actions/hippo@v0.0.1
        id: setup
        with:
          version: "v0.19.0"

```

### Inputs

This section contains a list of all inputs that may be set for this Action.

- `version` - (required) The version of `hippo` to install. Supports [semver](https://www.npmjs.com/package/semver) versioning. Defaults to `v0.8.0`.

### Outputs

This section contains a list of all outputs that can be consumed from this Action.

- `version` -  The version of `hippo` that was installed.

