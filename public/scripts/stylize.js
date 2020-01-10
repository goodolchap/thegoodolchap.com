// lightMode/darkMode test
/*function toggleTheme() {
    var body = document.querySelector("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
*/
// Project Tabs
function openProject(evt, project) {
    const i, tabcontent, tablinks;
    // get elements with class="tabcontent", hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }
    // remove active class from class
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // document.getElementById(project).style.display = "flex";
    document.getElementById(project).setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center;");
    evt.currentTarget.className += " active";
}
