build_env:
	cp .env.sample .env

up:
	make build_env && docker-compose up -d

down:
	docker-compose down
