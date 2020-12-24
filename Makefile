run: install-dependencies
	bundle exec jekyll serve --trace --baseurl ''


build: install-dependencies
	bundle exec jekyll build

clean:
	rm -rf _site

install-dependencies:
	bundle check || bundle install
	yarn check || yarn install

update:
	bundle update
	yarn upgrade
