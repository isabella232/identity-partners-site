run: install-dependencies
	npm run webapp

clean:
	rm -rf _site

test: build
	bundle exec rspec spec

build: install-dependencies
	bundle exec jekyll build

install-dependencies: bundle npm

npm:
	npm ci

bundle:
	bundle check || bundle install
