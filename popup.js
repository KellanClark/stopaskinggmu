// There's a lot of JS features in here that I've never heard of
// I'll try to be liberal with comments and explain all of them

var browser = browser || chrome; // Fix for Chrome

async function saveOptions(e) {
	// Tells the browser that this event is being entirely handled by our code
	e.preventDefault();

	// Takes a bunch of key-value pairs and stores/updates their value in browser storage
	// storage.sync is like local storage except it gets synced with other instances of the browser, meaning settings can be shared across devices
	await browser.storage.sync.set({
		enCanvasLogin: document.querySelector("#enCanvasLogin").checked,
		enOutlookLogin: document.querySelector("#enOutlookLogin").checked,
		enDuoDevice: document.querySelector("#enDuoDevice").checked,
		duoDeviceSelection: document.querySelector('input[name="duoDeviceSelection"]:checked').value
	});
}

async function restoreOptions() {
	// Read all the keys in storage.sync and give them default values if they're unset
	let res = await browser.storage.sync.get({
		enCanvasLogin: true,
		enOutlookLogin: true,
		enDuoDevice: true,
		duoDeviceSelection: "isMyDevice"
	});

	// Sets the checkbox to the value of enCanvasLogin in storage
	document.querySelector("#enCanvasLogin").checked = res.enCanvasLogin;

	document.querySelector("#enOutlookLogin").checked = res.enOutlookLogin;

	document.querySelector("#enDuoDevice").checked = res.enDuoDevice;
	// Sets the radio button whos value matches duoDeviceSelection
	// I can't find a "real" way to do this, so take my crappy attempt at JS
	document.getElementsByName("duoDeviceSelection").forEach((button, i) => {
		button.checked = button.value == res.duoDeviceSelection;
	});
}

// Calls saveOptions when the Save Options button is pressed
document.querySelector("form").addEventListener("submit", saveOptions);
// Calls restoreOptions when the popup is opened
document.addEventListener('DOMContentLoaded', restoreOptions);
