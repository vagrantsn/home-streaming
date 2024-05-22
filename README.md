# 🍿 MSPH - Media Streaming for People in a Hurry

Want a quick solution to start streaming media under your network with *Arrs services setup? Got you covered!

This repo provides pre-configured docker containers for:
- [Plex](https://www.plex.tv/) - Media streaming
- [Sonarr](https://sonarr.tv) - TV shows indexer and releases monitor
- [Radarr](https://radarr.video/) - Movies indexer and monitor
- [Prowlarr](https://prowlarr.com/) - Manager for Torrent and Usenet indexers that keeps them in sync with the *Arr services
- [Transmission](https://transmissionbt.com/) - Torrent client

All powered by the awesome work from [Linuxserver](https://www.linuxserver.io/) on their Docker images. All you need to do is create a config file for your passwords and choose your preferred indexers on Prowlarr.

## Requirements

- Node
- Docker & Docker Compose

## Getting Started

1. Create a `config.yml` file under the root folder. There is a sample config at [config.sample.yml](./config.sample.yml) you can use to get started
2. Create a `.env` file that will be used to store the needed environment variables. There is a sample file at [.env.sample](./.env.sample)
3. You will need a claim token for running Plex for the first time. Head to https://plex.tv/claim to generate a token, and store it as `PLEX_CLAIM` environment variable under `.env` file
2. Install the dependencies with `npm install`
3. Start the services with `npm start`
4. Access Prowlarr at `http://localhost:9696` and configure your preferred indexers
5. Enjoy!
