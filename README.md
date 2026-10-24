# withani.net
Static web files for withani.net. Everything public lives in `www/`.

## Hosting
Served by nginx from the [`vps-infra`](https://github.com/dykno/vps-infra) project, which mounts this repo at `/srv/withani.net` and uses `www/` as the web root.

## Deploying
On the VPS:

```bash
cd ~/sites/www/withani.net && git pull
```

Changes are live immediately; no restart needed.
