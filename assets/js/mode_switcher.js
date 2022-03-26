// this checks whether system dark mode is set
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
// this checks for session storage telling to override the system preferences
let theme = sessionStorage.getItem('theme');

let themeToggle = document.getElementById("theme-toggle");

if (themeToggle != null) {
	if (systemInitiatedDark.matches) {
		themeToggle.innerHTML = "Light Mode";
	} else {
		themeToggle.innerHTML = "Dark Mode";
	}
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
   	document.getElementById("theme-toggle").innerHTML = "Light Mode";
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);

function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		themeToggle.innerHTML = "Dark Mode";
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		themeToggle.innerHTML = "Light Mode";
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		themeToggle.innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		themeToggle.innerHTML = "Light Mode";
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	themeToggle.innerHTML = "Light Mode";
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	themeToggle.innerHTML = "Dark Mode";
}
