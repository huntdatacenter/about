# About HUNT Cloud

Make sure to have `node==24` installed

## Setup development environment

```bash
mamba create -n node24 -c conda-forge -y "python==3.13.*" "nodejs==24.*" "yarn"

mamba activate node24

yarn dlx @yarnpkg/sdks vscode
```

## Running

```bash
mamba activate node24
```

Install dependencies:

```bash
yarn install
```

Run dev locally:

```bash
yarn dev
```

## Testing

Run tests:

```bash
yarn test
```
