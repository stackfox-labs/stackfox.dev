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

## Contributing

Contributions to the StackFox site are welcome! If you have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License, other than the content in the `assets` directory, which is licensed under CC-BY-4.0. See [MIT LICENSE](LICENSE) and [CC-BY-4.0 LICENSE](assets/LICENSE) for more details.
