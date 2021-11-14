// initiates page with correct start
async function pageInit(){
    //skaper startsiden
    fetch("./text/intro/start.html")
        .then(response => response.text())
        .then(text => document.getElementById("main").innerHTML = text)
        .catch(rejected => console.error(rejected));
    //skaper infoL
    fetch("./text/intro/infoL.html")
        .then(response => response.text())
        .then(text => document.getElementById("infoL").innerHTML = text)
        .catch(rejected => console.error(rejected));
    //skaper infoL
    fetch("./begreper/infoR.html")
        .then(response => response.text())
        .then(text => document.getElementById("infoR").innerHTML = text)
        .catch(rejected => console.error(rejected));
}
// siden blir lastet inn
pageInit();

// changes topic
function changeTopic(topicId, topicPath) {
    // change content to new content from file
    fetch("./text/" + topicPath + "/start.html")
        .then(response => response.text())
        .then(text => document.getElementById("main").innerHTML = text)
        .catch(rejected => console.error(rejected));
    // change left menu
    fetch("./text/" + topicPath + "/infoL.html")
        .then(response => response.text())
        .then(text => document.getElementById("infoL").innerHTML = text)
        .catch(rejected => console.error(rejected));
    // change active topbar element
    document.getElementsByClassName("active")[0].className = " ";
    document.getElementById("p" + topicId).className = "active";
}
// changes text
function changeText(contentPath) {
    // change text
    fetch(contentPath)
        .then(response => response.text())
        .then(text => document.getElementById("main").innerHTML = text)
        .catch(rejected => console.error(rejected));
}