let isTeacher = localStorage.getItem("isTeacher");
if(isTeacher === null){
    if(isTeacher === undefined){
        isTeacher = false;
    }
    isTeacher = false;
}
let teacher = localStorage.getItem("teacher");
if(teacher === null){
    if(teacher === undefined){
        teacher = 1;
    }
    teacher = 1;
}
let group = localStorage.getItem("group");
if (group === null) {
    if(group === undefined){
        group = 1;
    }
    group = 1;
}
let date = new Date();
var day = date.getDay();
if (day === 0) {
    day = 7;
}


const timeLessonMnFr = ["", "08:15\n 09:00", " 09:00\n 09:45", "10:00\n10:45", "10:45\n11:30", "12:00\n12:45", "12:45\n13:30", "14:00\n14:45", "14:45\n15:30", "15:45\n16:30", "16:30\n17:15", "17:25\n18:10", "18:10\n18:55"];

const timeLessonSt = ["", " 8:15\n 9:00", " 9:00\n 9:45", " 9:50\n10:35", "10:35\n11:20", "11:50\n12:35", "12:35\n13:20", "13:30\n14:15", "14:15\n15:00", "15:10\n15:55", "15:55\n16:40", "16:45\n17:30", "17:30\n18:15"];
