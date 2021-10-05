all: run

build:
	docker build -t primeng-test .

run: build
	docker run --rm -it \
	--name primeng-test \
	-p 4200:4200 \
	-v `pwd`:/app \
	-v /app/node_modules \
	primeng-test $(c)

develop:
	make run c="npm run start"

test:
	make run c="npm run test"
