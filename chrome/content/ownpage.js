var ownpage = {
	url : "http://ricain.github.io/ownpage/",
	init: function () {
		gBrowser.removeEventListener("NewTab", BrowserOpenTab, false);
		window.BrowserOpenTab = ownpage.open;
		gBrowser.addEventListener("NewTab", ownpage.open, false);
	},
	open: function (aEvent) {
		var newtab = gBrowser.addTab(ownpage.url);
		gBrowser.selectedTab = newtab;
		if (gURLBar) setTimeout(function() {
			gBrowser.userTypedValue = "";
			gURLBar.select();
		}, 0);
		if (aEvent) aEvent.stopPropagation();
		return newtab;
	}
};

window.addEventListener("load",ownpage.init,false);
