config:
	cp .env.sample .env; \
	mkdir -p qbittorrent/config/qBittorrent; cp qbittorrent/qBittorrent.conf qbittorrent/config/qBittorrent; \
	mkdir -p prowlarr/config; cp prowlarr/config.xml prowlarr/config/config.xml

clean:
	rm -rf qbittorrent/config; \
	rm -rf prowlarr/config
