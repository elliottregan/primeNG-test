ifneq (,$(wildcard ./.env))
    include .env
    export
endif


all: run

build-env:
	docker build \
	--build-arg FONTAWESOME_NPM_AUTH_TOKEN=${FONTAWESOME_NPM_AUTH_TOKEN} \
	-t primeng-test .

run: build-env
	docker run \
	--env-file=./.env \
	--rm -it \
	--name primeng-test \
	-p 4200:4200 \
	-v `pwd`:/app \
	-v /app/node_modules \
	primeng-test $(c)

build:
	make run c="npm run build"

develop:
	make run c="npm run start"

analyze:
	make run c="npm run start:analyze"

test:
	make run c="npm run test"
