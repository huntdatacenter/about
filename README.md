# About HUNT Cloud

Make sure to have `node==20` installed

## Setup development environment

```bash
mamba create -n node20 -c conda-forge -y "python==3.12.*" "nodejs==20.*" "yarn"

mamba activate node20

yarn dlx @yarnpkg/sdks vscode
```

## Running

```bash
mamba activate node20
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
