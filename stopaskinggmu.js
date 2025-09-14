if (document.title == "Information Release") {
	// Select "Do not ask me again"
	document.getElementById("_shib_idp_globalConsent").click();

	// Click "Accept" button
	document.getElementsByName("_eventId_proceed")[0].click();
}
