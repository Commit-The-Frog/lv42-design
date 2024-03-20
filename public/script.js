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
var missingModal = document.getElementById("missing-modal");
var loginModal = document.getElementById("login-modal");
var searchModal = document.getElementById("search-modal");
var sidebar = document.getElementById("sidebar-menu");

function showModal(modal) {
	if (modal === "cancelModal")
		cancelModal.style.display = "flex";
	else if (modal === "missingModal")
		missingModal.style.display = "flex";
	else if (modal === "searchModal")
		searchModal.style.display = "flex";
	else if (modal === "loginModal")
		loginModal.style.display = "flex";
}

function closeModal(modal) {
	if (modal === "cancelModal")
		cancelModal.style.display = "none";
	else if (modal === "missingModal")
		missingModal.style.display = "none";
	else if (modal === "loginModal")
		loginModal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == cancelModal)
		cancelModal.style.display = "none";
	else if (event.target == missingModal)
		missingModal.style.display = "none";
	else if (event.target == searchModal)
		searchModal.style.display = "none";
	else if (event.target == loginModal)
		loginModal.style.display = "none";
	// else if (sidebar.classList[1] === "open" && event.target != sidebar) {
	// 	console.log(sidebar.classList[1]);
	// 	closeMenu();
	// }
}

function openMenu() {
	sidebar.classList.add("open");
}

function closeMenu() {
	sidebar.className = "sidebar-menu";
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
		t.querySelector(".time-wrap").querySelector("p").innerHTML = "13:00~14:00";
		t.querySelector(".comment-wrap").querySelector("p").innerHTML = "예약하기";
	} else {
		t.className = "sub-content-wrapper";
		t.querySelector(".sub-content").className = "sub-content";
		t.querySelector(".time-wrap").querySelector("p").innerHTML = "~";
		t.querySelector(".comment-wrap").querySelector("p").innerHTML = "원하는 시간대 슬롯을 선택하세요";
	}
}

function previousDate() {
	var cur = document.querySelector(".list.now");
	var prev = cur.previousElementSibling;
	var week = document.querySelector("#week p");

	if (!prev)
		return;
	if ((parseInt(week.innerHTML.charAt(5)) - 1) == 0)
		return;
	week.innerHTML = "WEEK " + (parseInt(week.innerHTML.charAt(5)) - 1);
	cur.className = "list";
	prev.classList.add("now");
}

function nextDate() {
	var cur = document.querySelector(".list.now");
	var next = cur.nextElementSibling;
	var week = document.querySelector("#week p");

	if (!next)
		return;
	week.innerHTML = "WEEK " + (parseInt(week.innerHTML.charAt(5)) + 1);
	cur.className = "list";
	next.classList.add("now");
}