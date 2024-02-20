# About HUNT Cloud

Make sure to have `node==20` installed

## Setup development environment

```bash
mamba create -n node20 -c conda-forge -y "python==3.12.*" "nodejs==20.*" "yarn"

mamba activate node20
```

## Running

Install dependencies:

```bash
yarn install --immutable
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
