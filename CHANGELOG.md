# Changelog

## [0.2.0] - 2025-09-28

### Changed

- Replaced Plex with Jellyfin as the media streaming server
- Updated all container images to use latest tags for better maintainability
- Added `restart: always` policy to all containers for improved reliability
- Removed explicit DNS settings (8.8.8.8) from containers

### Fixed

- Fixed Radarr root folder path (changed from `/media/tvshows/` to `/media/movies/`)
- Added proper media folder setup script with correct permissions

### Added

- New media folder structure setup script (`setup.sh`)
- Enhanced troubleshooting documentation
  - Added section about PUID & PGID configuration
  - Removed outdated Plex-specific troubleshooting

### Documentation

- Updated README.md with Jellyfin information and URLs
- Updated project description and keywords
- Added new troubleshooting section for media folder permissions

[0.2.0]: https://github.com/vagrantsn/home-streaming/releases/tag/v0.2.0
