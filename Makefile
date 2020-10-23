.PHONY: all install transpile package

include Makefile.envs

all: build transpile package

install:
	npm install uglify-es -g
	pip install transpile strip-hints

build:
	bin/create-build
	bin/apply-patches

transpile:
	bin/run-transpile

package:
	bin/create-package

dev: build
	bin/create-orig

patches:
	bin/create-patches

clean:
	rm -rf ${BUILD_DIR} ${ORIG_DIR} ${TRANSPILE_DIR}
