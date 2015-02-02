all: xpi

xpi:
	zip ownpage-firefox.xpi install.rdf chrome.manifest chrome/content/ownpage.js chrome/content/ownpage.xul
