## Issue

Changes to a dependency in `package.json` should not affect apps that do not use it.

We have two apps:
- `car-store`
- `bike-store`

Only `car-store` depends on the `cowsay` NPM lib. 

Run: 

```shell
nx print-affected --target=build --select=tasks.target.project --base=HEAD
```

You'll see no project printed.

If you downgrade the version of `cowsay: 1.4.0` in `package.json`, and then run:

```shell
nx print-affected --target=build --select=tasks.target.project --base=HEAD
```

You'll then see both projects printed. But we'd only expect `car-store` to be printed.

