window.onload = function() {
	document.getElementById("status-tab").className = "content-tab-active";
	document.getElementById("status-content").className += " content-list-active";
};

function changeTab(tabId) {
	const contentTabs = document.querySelectorAll(".content-tab-active");
	for(var i=0; i<contentTabs.length; i++) {
		contentTabs[i].className = "content-tab";
	}
	const contentLists = document.querySelectorAll(".content-lists");
	for (var i=0; i<contentLists.length; i++) {
		contentLists[i].className = "content-lists";
	}
	document.getElementById(tabId + "-tab").className = "content-tab-active";
	document.getElementById(tabId + "-content").className += " content-list-active";
}

// 놔두자
var cancelModal = document.getElementById("cancelModal");
var reservationModal = document.getElementById("reservationModal");
var missingModal = document.getElementById("missingModal");

function showModal(modal) {
	if (modal === "cancelModal")
		cancelModal.style.display = "block";
	else if (modal === "reservationModal")
		reservationModal.style.display = "block";
	else if (modal === "missingModal")
		missingModal.style.display = "block";
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
}
