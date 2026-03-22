# stackfox.dev

This repository is the public-facing StackFox site.

It is separate from the core platform monorepo and is intended for:

- the landing page
- docs content
- public brand and marketing assets

It is not the dashboard app.

## Purpose

`stackfox.dev` owns the public web presence for StackFox. Any call to action that should send a user into the product points to the dashboard URL through an environment variable.

## Environment

Create a local `.env` with:

```env
VITE_STACKFOX_DASHBOARD_URL=http://localhost:3442
```

This value is used for landing-page CTA links that send users into the dashboard.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
npm run test
```

## Railway deployment

This repo uses root-level config-as-code in `railway.json`.

That file forces Railway to treat the site as a Nitro-backed app instead of a static `dist` deploy:

- `buildCommand`: `npm run build`
- `startCommand`: `npm run start`
- `healthcheckPath`: `/`

### Deploy steps

1. Import this repository as its own Railway service.
2. Keep the Railway config file at the repo root: `/railway.json`.
3. Set `VITE_STACKFOX_DASHBOARD_URL` to the public dashboard URL.
4. Deploy and bind the production domain after the healthcheck passes.

### Manual production deploys from GitHub Actions

If you want to stop Railway from deploying every commit, use `.github/workflows/deploy-production.yml` as the production deploy entrypoint for this repo.

Required GitHub repository secret:

- `RAILWAY_TOKEN`: a Railway project token scoped to the production environment for the `stackfox.dev` Railway project

Required GitHub repository variables:

- `RAILWAY_PROD_PROJECT_ID`: the Railway project ID for `stackfox.dev`
- `RAILWAY_PROD_ENVIRONMENT`: the Railway environment name, usually `production`
- `RAILWAY_PROD_SERVICE`: the Railway service ID or exact service name for the site

Recommended GitHub environment:

- `production-site`

## Contributing

Contributions to the StackFox site are welcome! If you have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License, other than the content in the `assets` directory, which is licensed under CC-BY-4.0. See [MIT LICENSE](LICENSE) and [CC-BY-4.0 LICENSE](assets/LICENSE) for more details.
