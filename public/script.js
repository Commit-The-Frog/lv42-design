window.onload = function() {
	var pageType = document.querySelector(".header");
	if (pageType.id === "main-page") {
		document.getElementById("xbox-slot-list").className += " slot-list-active";
		document.getElementById("xbox-tab").className = "tab-active";
	} else if (pageType.id === "user-page") {
		document.getElementById("status-tab").className = "tab-active";
		document.getElementById("status-slot-list").className += " slot-list-active";
	}
};

function changeTab(tabId) {
	const contentTabs = document.querySelectorAll(".tab-active");
	for(var i=0; i<contentTabs.length; i++) {
		contentTabs[i].className = "tab";
	}
	const contentLists = document.querySelectorAll(".slot-list-active");
	for (var i=0; i<contentLists.length; i++) {
		contentLists[i].className = "slot-list";
	}
	document.getElementById(tabId + "-tab").className = "tab-active";
	document.getElementById(tabId + "-slot-list").className += " slot-list-active";
}

var cancelModal = document.getElementById("cancel-modal");
var reservationModal = document.getElementById("reservation-modal");
var missingModal = document.getElementById("missing-modal");
var searchModal = document.getElementById("search-modal");
var mainMenu = document.getElementById("sidebar-menu-main");

function showModal(modal) {
	if (modal === "cancelModal")
		cancelModal.style.display = "block";
	else if (modal === "reservationModal")
		reservationModal.style.display = "block";
	else if (modal === "missingModal")
		missingModal.style.display = "block";
	else if (modal === "searchModal")
		searchModal.style.display = "block";
}

function closeModal(modal) {
	if (modal === "cancelModal")
		cancelModal.style.display = "none";
	else if (modal === "missingModal")
		missingModal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == cancelModal)
		cancelModal.style.display = "none";
	else if (event.target == reservationModal)
		reservationModal.style.display = "none";
	else if (event.target == missingModal)
		missingModal.style.display = "none";
	else if (event.target == searchModal)
		searchModal.style.display = "none";
}

function openMenu() {
	mainMenu.style.display = "block";
}

function closeMenu() {
	mainMenu.style.display = "none";
}

function setSelected(event) {
	var t = event.target;
	var curTab = document.querySelector(".tab-active");
	if (t.className === "slot-time" || t.className === "slot-value")
		t = event.target.parentNode.parentNode;
	else if (t.className === "slot-wrapper" || t.className === "shadow")
		t = event.target.parentNode;
	if (t.className.substring(0, 13) === "slot selected") {
		t.className = "slot";
		t.querySelector(".slot-value").innerHTML = "-";
	}
	else  {
		t.className = "slot selected-" + curTab.id.slice(0, -4);
		t.querySelector(".slot-value").innerHTML = 'SELECTED';
	}
}

function setFinished() {
	var t = document.getElementById("sub");
	var curTab = document.querySelector(".tab-active");
	if (t.className === "sub-content-wrapper") {
		t.className = "sub-content-wrapper finished-" + curTab.id.slice(0, -4);
		t.querySelector(".sub-content").className = "sub-content finished-" + curTab.id.slice(0, -4);
	} else {
		t.className = "sub-content-wrapper";
		t.querySelector(".sub-content").className = "sub-content";
	}
}
