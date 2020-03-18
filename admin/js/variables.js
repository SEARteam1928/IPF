var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
};
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


let group = localStorage.getItem("group");
if (group === null) {
    group = 1;
}
let room = null;
if (room === null) {
    room = "1";
}
let subject = null;
if (subject === null) {
    subject = 1;
}
let teacher = null;
if (teacher === null) {
    teacher = 1;
}
let date = new Date();
let day = date.getDay();
if (day === 0) {
    day = 1;
}

const timeLessonMnFr = ["", " 08:15\n\ 09:00", "09:00\n09:45", "10:00\n10:45", "10:45\n11:30", "12:00\n12:45", "12:45\n13:30", "14:00\n14:45", "14:45\n15:30", "15:45\n16:30", "16:30\n17:15", "17:25\n18:10", "18:10\n18:55"];
const timeLessonSt = ["", "08:15\n09:00", "09:00\n09:45", "09:50\n10:35", "10:35\n11:20", "11:50\n12:35", "12:35\n13:20", "13:30\n14:15", "14:15\n15:00", "15:10\n15:55", "15:55\n16:40", "16:45\n17:30", "17:30\n18:15"];
