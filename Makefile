.PHONY: all clean
all: static.html

clean:
	rm -f static.html

static.html: index.html js/index.js css/index.css
	python2 deploy.py index.html js/index.js css/index.css > static.html
