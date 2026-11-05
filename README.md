# blog_cdn

## CLI

Install the dependencies and register the local command once:

```powershell
npm install
npm link
```

From this directory, run:

```powershell
manager
```

Choose `1` to create a draft or `2` to publish one. Publishing uses the existing
draft selector and requires the GitHub settings in `.env`.

All CLI scripts are included in the shared submodule at `scripts/shared`.
Install its dependencies after cloning with:

```powershell
cd scripts/shared
npm install
```
