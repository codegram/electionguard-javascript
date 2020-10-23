.PHONY: all install transpile

include Makefile.envs

all: build transpile

install:
	pip install transpile strip-hints

build:
	./create-build
	./apply-patches

transpile:
	./run-transpile

dev: build
	./create-orig

patches:
	./create-patches

clean:
	rm -rf ${BUILD_DIR} ${ORIG_DIR} ${TRANSPILE_DIR}
