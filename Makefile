config:
	cp .env.sample .env; \
	mkdir -p qbittorrent/config/qBittorrent; cp qbittorrent/qBittorrent.conf qbittorrent/config/qBittorrent

clean:
	rm -rf qbittorrent/config
