let topicBtn = document.getElementById("0");

alert(topicBtn.innerHTML);

topicBtn.addEventListener('click', () => {
    import("./modules/alarm.js").then((module) => {
        module.alarm("button pressed");
        if (topicBtn === document.querySelector(".active")) {
            module.alarm("this is the active button");
        }
    })
});