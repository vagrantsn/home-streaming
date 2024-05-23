# 🍿 Home Streaming Done Quick

Want a quick solution to start streaming movies and TV shows under your network with *Arrs services? Got you covered!

This repo provides pre-configured docker containers for:
- [Plex](https://www.plex.tv/) - Media streaming
- [Sonarr](https://sonarr.tv) - TV shows indexer and releases monitor
- [Radarr](https://radarr.video/) - Movies indexer and monitor
- [Prowlarr](https://prowlarr.com/) - Manager for Torrent and Usenet indexers that keeps them in sync with the *Arr services
- [Transmission](https://transmissionbt.com/) - Torrent client

All powered by the awesome work from [Linuxserver](https://www.linuxserver.io/) on their Docker images. All you need to do is create a config file for your passwords and choose your preferred indexers on Prowlarr.

### Requirements

- Node
- Docker & Docker Compose

### Getting Started

1. Create a `config.yml` file under the root folder. There is a sample config at [config.sample.yml](./config.sample.yml) you can use to get started
2. Create a `.env` file that will be used to store the needed environment variables. There is a sample file at [.env.sample](./.env.sample)
environment variable under `.env` file
3. Install the dependencies with `npm install`
4. Start the services with `npm start`
5. Enjoy!

You will need to configure your preferred indexers on Prowlarr, instructions available [here](https://wiki.servarr.com/prowlarr/indexers)

By default the services are available at:

| Service      | URL                    |
|--------------|------------------------|
| Sonarr       | http://localhost:8989  |
| Radarr       | http://localhost:7878  |
| Prowlarr     | http://localhost:9696  |
| Transmission | http://localhost:9091  |
| Plex         | http://localhost:32400 |

### Troubleshooting

- **I can't access the Plex Web UI**

  If you are using Windows or MacOS, you will need to manually specify each port for the Plex container as Docker's Host network mode is only supported on Linux. The ports Plex uses can be found [here](https://support.plex.tv/articles/201543147-what-network-ports-do-i-need-to-allow-through-my-firewall/). After the changes, your plex container on `docker-compose.yml` file should be something similar to this:

  ```diff
  services:
    plex:
  -   network_mode: host
  +   ports:
  +     - 8324:8324
  +     - 32400:32400
  +     - 32469:32469
  +     - 1900:1900/udp
  +     - 32410:32410/udp
  +     - 32412:32412/udp
  +     - 32413:32413/udp
  +     - 32414:32414/udp
  ```

  But be aware this may lead to some issues when trying to connect to Plex from other devices like your Smart TV. Host network is the recommended mode.
