// Chrome uses `chrome.` instead of `browser.` for everything
// Thanks to @sakgoyal for the fix
var browser = browser || chrome;

// Retrieve settings from browser storage and set default values
let gettingItem = browser.storage.sync.get({
	enCanvasLogin: true,
	enOutlookLogin: true,
	enDuoDevice: true,
	duoDeviceSelection: "isMyDevice"
});
gettingItem.then(onGot);

// The .get function is asynchronous, so the body of the extension must be in this function
function onGot(settings) {
	// The page that asks you to log into Canvas
	if (settings.enCanvasLogin && document.title == "Canvas Login") {
		// Redirect to the actual login page
		// Equivalent to clicking "Log Into Canvas"
		location.replace("https://canvas.gmu.edu/login/saml")
	}


	// Outlook inbox
	if (settings.enOutlookLogin) {
		// This button only appears when the page has been open for a while, so we set up an event listener to check whenever the tab is switched to
		document.addEventListener("visibilitychange", function () {
			if (!document.hidden && document.title.includes("Mail - ")) {

				// Look for a <button> containing the text "Sign in" and click it
				// All the names and IDs appear to be randomly-generated, so I'm hesitant to use the other method
				for (const button of document.querySelectorAll("button")) {
					if (button.textContent.trim() == "Sign in") {
						button.click()
					}
				}

			}
		}, false);
	}


	// Duo device page
	if (settings.enDuoDevice && document.title == "Duo Security") {
		// The buttons we're looking for aren't there when the page is loaded
		// This waits until the buttons are added to the DOM
		// Code largely coppied from https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver
		const observer = new MutationObserver((records, observer) => {
			for (const record of records) {
				for (const addedNode of record.addedNodes) {
					if (addedNode.className == "flex-value-one") {

						// Click one of the two buttons based on the extension's settings
						if (settings.duoDeviceSelection == "isMyDevice") {
							document.getElementById("trust-browser-button").click();
						} else if (settings.duoDeviceSelection == "notMyDevice") {
							document.getElementById("dont-trust-browser-button").click();
						}
					}
				}
			}
		});
		// Required to make the above work
		observer.observe(document.body, {
			subtree: true,
			childList: true
		});
	}
}
