.PHONY: sonarr radarr plex

build_env:
	cp .env.sample .env

up:
	make build_env && docker-compose up -d

radarr:
	make build_env && docker-compose up -d radarr

sonarr:
	make build_env && docker-compose up -d sonarr

plex:
	make build_env && docker-compose up -d plex

transfer:
	make sonarr && make radarr

stream:
	make plex

down:
	docker-compose down
