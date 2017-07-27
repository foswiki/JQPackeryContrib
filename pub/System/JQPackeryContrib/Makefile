FOSWIKI_ROOT?=~/foswiki/core
TARGET=pkg.js 

PKG_SOURCE=packery.uncompressed.js packery.init.uncompressed.js

-include $(FOSWIKI_ROOT)/pub/System/JQueryPlugin/Makefile.include

clean:
	rm -f $(TARGET) *.gz

git:
	git clone https://github.com/metafizzy/packery.git $@

ifneq (,$(wildcard git))
packery.uncompressed.js: git/dist/packery.pkgd.js
	cp $^ $@
endif

pkg.uncompressed.js: $(PKG_SOURCE)
	cat $^ > $@
