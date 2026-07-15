# Invogen Marketing

Marketing site for [invogen.in](https://invogen.in) — Next.js App Router with **static export**, served by nginx in Docker.

Product app stays on `app.invogen.in` (separate repo/port). This site is proxied from the main domain to `127.0.0.1:3080`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Static export

`next.config.ts` sets `output: "export"`. Production build writes static files to `out/`:

```bash
npm run build
```

## Docker (VPS)

Builds the Next export inside Docker, then serves `out/` with nginx on port 80 inside the container.

```bash
docker compose up -d --build
curl -I http://127.0.0.1:3080
```

Compose binds **`127.0.0.1:3080:80`** only (host nginx proxies public traffic). Do not use port 3000 — that is for the Invogen app.

### Host nginx (main domain → marketing)

On the VPS, `invogen.in` / `www.invogen.in` should proxy to `http://127.0.0.1:3080`. Keep `app.invogen.in` → `127.0.0.1:3000` unchanged.

If SSL is not issued yet:

```bash
sudo certbot --nginx -d invogen.in -d www.invogen.in
```

## GitHub Actions deploy

On push to `main`, [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) SSHs to the VPS and runs:

```bash
cd $VPS_DEPLOY_PATH
git fetch origin main
git reset --hard origin/main
docker compose up -d --build
```

Required GitHub secrets (marketing-only path — do not reuse the Invogen app path):

| Secret | Purpose |
|--------|---------|
| `VPS_HOST` | Server hostname/IP |
| `VPS_USER` | SSH user |
| `VPS_SSH_KEY` | Private key |
| `VPS_DEPLOY_PATH` | Absolute path to this repo on the VPS |

## What not to mix

| Do | Don't |
|----|--------|
| Separate marketing repo / compose project | Put marketing inside the Invogen MERN repo |
| Bind marketing to `:3080` | Bind marketing to `:3000` |
| Proxy `invogen.in` → `:3080` | Point `invogen.in` at the Invogen app |
