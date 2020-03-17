function clock() {
    var date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();


    var day = new Date();
    var weekday = new Array(7);
    weekday[0] = "Воскресенье";
    weekday[1] = "Понедельник";
    weekday[2] = "Вторник";
    weekday[3] = "Среда";
    weekday[4] = "Четверг";
    weekday[5] = "Пятница";
    weekday[6] = "Суббота";

    var mounth = new Array(12);
    mounth[0] = "янв.";
    mounth[1] = "фев.";
    mounth[2] = "мар.";
    mounth[3] = "апр.";
    mounth[4] = "май.";
    mounth[5] = "июн.";
    mounth[6] = "июл.";
    mounth[7] = "авг.";
    mounth[8] = "сен.";
    mounth[9] = "окт.";
    mounth[10] = "ноя.";
    mounth[11] = "дек.";

    document.getElementById("time").innerHTML = hours + ':' + minutes + ":" + seconds;
    document.getElementById("weekday").innerHTML = weekday[day.getDay()];
    document.getElementById("date").innerHTML = day.getDate() + " " + mounth[day.getMonth()] + " " + day.getFullYear();
}

setInterval(clock, 1000);

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

function updateGroups() {
    $.ajax({
        url: "http://timetable.kcpt-1.ru/api/v3/viewAllOptionsForTimetable",
        type: "get",
        dataType: "json",
        data: {},
        success(data) {
            console.log(data);
            groupSelect.innerHTML = "";
            if(isTeacher===false){
                appendInView(data.groups, 'input', groupSelect, group);
                updateInfo(data.groups)
            } else {
                appendInView(data.teachers, 'input', groupSelect, teacher);
                updateInfo(data.teachers);
            }
        },
        error(header, textError) {
            console.log(header.status, header.statusText);
            alert("ААА ПАНИКА ПАНИКАААААА");
        }

    });
}

function getOptionsList() {
    $.ajax({
        url: "http://timetable.kcpt-1.ru/api/v3/viewAllOptionsForTimetable",
        type: "get",
        dataType: "json",
        data: {},
        success(data) {
            console.log(data);
            if(isTeacher===false) {
                appendInView(data.groups, 'input', groupSelect, group);
                appendDayOfWeek(data.dayOfWeek, 'div', daySelect, day);
                updateInfo(data.groups)
            } else {
                appendInView(data.teachers, 'input', groupSelect, teacher);
                appendDayOfWeek(data.dayOfWeek, 'div', daySelect, day);
                updateInfo(data.teachers)
            }
        },
        error(header, textError) {
            console.log(header.status, header.statusText);
            alert("ААА ПАНИКА ПАНИКАААААА");
        }

    });
}

function updateInfo(groups) {
    infoBox.innerHTML = "";

    if(isTeacher===false){


    for (let i = 0; i < groups.length; i++) {
        if (groups[i].id.toString() === group) {
            let infoGroup = document.createElement("div");
            infoGroup.innerHTML = "<div id='infoGroup' class='infoGroup'>" + groups[i].name.toString() + "</div>";
            infoBox.append(infoGroup);
        }
        if (groups[i].id === group) {
            let infoGroup = document.createElement("div");
            infoGroup.innerHTML = "<div id='infoGroup' class='infoGroup'>" + groups[i].name.toString() + "</div>";
            infoBox.append(infoGroup);
        }
    }
    } else {
        for (let i = 0; i < groups.length; i++) {
            if (groups[i].id.toString() === teacher) {
                let infoGroup = document.createElement("div");
                infoGroup.innerHTML = "<div id='infoGroup' class='infoGroup'>" + groups[i].full_name.toString() + "</div>";
                infoBox.append(infoGroup);
            }
            if (groups[i].id === teacher) {
                let infoGroup = document.createElement("div");
                infoGroup.innerHTML = "<div id='infoGroup' class='infoGroup'>" + groups[i].full_name.toString() + "</div>";
                infoBox.append(infoGroup);
            }
        }
    }
}

function updateDays() {
    $.ajax({
        url: "http://timetable.kcpt-1.ru/api/v3/viewAllOptionsForTimetable",
        type: "get",
        dataType: "json",
        data: {},
        success(data) {
            console.log(data);
            daySelect.innerHTML = "";
            appendDayOfWeek(data.dayOfWeek, 'div', daySelect, day);
        },
        error(header, textError) {
            console.log(header.status, header.statusText);
            alert("ААА ПАНИКА ПАНИКАААААА");
        }

    });
}

function appendInView(arr, createdElement, appendIn, selectDayOrGroups) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        let element = document.createElement(createdElement);

        if(isTeacher=== false) {
            element.setAttribute("value", arr[i].name);
        } else {
            element.setAttribute("value", arr[i].full_name);
        }
        element.setAttribute("onclick", "selectGroup(" + arr[i].id + ")");
        element.setAttribute("type", "button");
        element.dataset["id"] = arr[i].id;
        if (arr[i].id.toString() === selectDayOrGroups) {
            element.setAttribute("selected", "selected")
        }
        if (arr[i].id.toString() === selectDayOrGroups) {
            element.setAttribute("selected", "selected")
        }
        list.push(element);
    }
    appendIn.append(...list);
}

function appendDayOfWeek(arr, createdElement, appendIn, selectDayOrGroups) {
    let listDays = [];
    for (let i = 0; i < arr.length; i++) {
        let element = document.createElement(createdElement);
        element.innerHTML = "<input value=\"" + arr[i].short_name + "\" onclick=\"selectDay(" + arr[i].id + ")\" type=\"button\">";
        if (arr[i].id !== selectDayOrGroups) {
            element.innerHTML = "<input class='dayOfWeekNotSelected' value=\"" + arr[i].short_name + "\" onclick=\"selectDay(" + arr[i].id + ")\" type=\"button\">";
        }
        if (arr[i].id === selectDayOrGroups) {
            element.innerHTML = "<input class='dayOfWeekSelected' value=\"" + arr[i].short_name + "\" onclick=\"selectDay(" + arr[i].id + ")\" type=\"button\">";
        }
        listDays.push(element);
    }
    appendIn.append(...listDays);
}

function updateTimetableList(timetableOn) {
    if(isTeacher === false){
        $.ajax({
            url: "http://timetable.kcpt-1.ru/api/v3/viewTimetable",
            type: "get",
            dataType: "json",
            data: {
                "day": day,
                "group": group,
            },
            success(data) {
                console.log(data);
                allTable.innerHTML = "";
                for (let i = 0; i < data.timetable.length; i++) {
                    createTableLine(data, i);
                }
            },
            error(header, textError) {
                console.log(header.status, header.statusText, textError.toString());
                alert("ААА ПАНИКА ПАНИКАААААА");
            }

        });
    }
    else {
        $.ajax({
            url: "http://timetable.kcpt-1.ru/api/v3/viewTimetable",
            type: "get",
            dataType: "json",
            data: {
                "isTeacher": isTeacher,
                "day": day,
                "group": group,
                "teacher": teacher
            },
            success(data) {
                console.log(data);
                allTable.innerHTML = "";
                for (let i = 0; i < data.timetable.length; i++) {
                    createTableLine(data, i);
                }
            },
            error(header, textError) {
                console.log(header.status, header.statusText, textError.toString());
                alert("ААА ПАНИКА ПАНИКАААААА");
            }

        });
    }

}



function innerChanges() {
    allTable.innerHTML = "";
    allTable.innerHTML = " <iframe src=\"https://docs.google.com/document/d/e/2PACX-1vS2ehAErYyAWY-cm247Pt4oT2YVAkEMwiYXhFu0pxGexUne1PTWNiWS0ktvlglRQqNpLtolGzJjIlvc/pub\" class='changesFrame'>\n" +
        " </iframe>"
}

function studentOn() {
    isTeacher = false;
    localStorage.setItem("isTeacher", isTeacher);
    updateTimetableList("Расписание на ");
    updateGroups();
}

function teacherOn() {
    isTeacher = true;
    localStorage.setItem("isTeacher", isTeacher);
    updateTimetableList("Расписание на ");
    updateGroups();
}

function lessonTimeOn() {
    alert("lessonTime")
}

function createTableLine(data, numSubject) {
    if(isTeacher===false) {
        let dive = document.createElement('div');

        dive.setAttribute("class", "tableLine");
        let startStr = "<br>"
            + "<div class='numLesson lessonBlock'>"
            + data.timetable[numSubject].numLesson
            + "</div>"
            + "<div class='subject lessonBlock'>"
            + data.timetable[numSubject].subject
            + " </div>"
            +
            "<div class='teacher lessonBlock'>"
            + "<img src=\"src/baseline_person_black_48.png\" alt=\"person\" class=\"teacher_ico_img\">"
            +
            "<div>"
            + data.timetable[numSubject].teacher
            + "</div>"
            + "</div>"
            +
            "<div class='room lessonBlock'>"
            + "<img src=\"src/baseline_room_black_48.png\" alt=\"person\" class=\"room_ico_img\">"
            +
            "<div>"
            + data.timetable[numSubject].room
            + "</div>"
            + "</div>"
            + "<div class='timeLesson lessonBlock'>"
            + "<img src=\"src/timeIco48.png\" alt=\"person\" class=\"time_ico_img\">";
        let subgroupStartStr = "<br>"
            + "<div class='numLesson lessonBlock'>"
            + data.timetable[numSubject].numLesson
            + "</div>"
            + "<div class='subject lessonBlock'>"
            + data.timetable[numSubject].subgroup + ". " + data.timetable[numSubject].subject
            + " </div>"
            +
            "<div class='teacher lessonBlock'>"
            + "<img src=\"src/baseline_person_black_48.png\" alt=\"person\" class=\"teacher_ico_img\">"
            +
            "<div>"
            + data.timetable[numSubject].teacher
            + "</div>"
            + "</div>"
            +
            "<div class='room lessonBlock'>"
            + "<img src=\"src/baseline_room_black_48.png\" alt=\"person\" class=\"room_ico_img\">"
            +
            "<div>"
            + data.timetable[numSubject].room
            + "</div>"
            + "</div>"
            + "<div class='timeLesson lessonBlock'>"
            + "<img src=\"src/timeIco48.png\" alt=\"person\" class=\"time_ico_img\">";
        if (data.timetable[numSubject].subgroup === 0 || data.timetable[numSubject].subgroup === "0") {
            if (day === "6") {
                dive.innerHTML =
                    startStr
                    + timeLessonSt[data.timetable[numSubject].numLesson]
                    + "</div>"
                    + "<br>";
            } else {
                dive.innerHTML = startStr
                    + timeLessonMnFr[data.timetable[numSubject].numLesson]
                    + "</div>"
                    + "<br>";
            }
        }
        if (data.timetable[numSubject].subgroup === 1 || data.timetable[numSubject].subgroup === "1") {
            if (day === "6") {
                dive.innerHTML = subgroupStartStr
                    + "<div class='timeLesson'>" + timeLessonSt[data.timetable[numSubject].numLesson] + "</div>"
                    + "<br>";
            } else {
                dive.innerHTML = subgroupStartStr
                    + "<div class='timeLesson'>" + timeLessonMnFr[data.timetable[numSubject].numLesson] + "</div>"
                    + "<br>";
            }
        }
        if (data.timetable[numSubject].subgroup === 2 || data.timetable[numSubject].subgroup === "2") {
            if (day === "6") {
                dive.innerHTML = subgroupStartStr
                    + "<div class='timeLesson'>" + timeLessonSt[data.timetable[numSubject].numLesson] + "</div>"
                    + "<br>";
            } else {
                dive.innerHTML = subgroupStartStr
                    + "<div class='timeLesson'>" + timeLessonMnFr[data.timetable[numSubject].numLesson] + "</div>"
                    + "<br>";
            }
        }
        allTable.append(dive);
    }
    else {
        let dive = document.createElement('div');

        dive.setAttribute("class", "tableLine");
        let startStr = "<br>"
            + "<div class='numLesson lessonBlock'>"
            + data.timetable[numSubject].numLesson
            + "</div>"
            + "<div class='subject lessonBlock'>"
            + data.timetable[numSubject].subject
            + " </div>"
            +
            "<div class='teacher lessonBlock'>"
            + "<img src=\"src/baseline_person_black_48.png\" alt=\"person\" class=\"teacher_ico_img\">"
            +
            "<div>"
            + data.timetable[numSubject].groupname
            + "</div>"
            + "</div>"
            +
            "<div class='room lessonBlock'>"
            + "<img src=\"src/baseline_room_black_48.png\" alt=\"person\" class=\"room_ico_img\">"
            +
            "<div>"
            + data.timetable[numSubject].room
            + "</div>"
            + "</div>"
            + "<div class='timeLesson lessonBlock'>"
            + "<img src=\"src/timeIco48.png\" alt=\"person\" class=\"time_ico_img\">";
        let subgroupStartStr = "<br>"
            + "<div class='numLesson lessonBlock'>"
            + data.timetable[numSubject].numLesson
            + "</div>"
            + "<div class='subject lessonBlock'>"
            + data.timetable[numSubject].subgroup + ". " + data.timetable[numSubject].subject
            + " </div>"
            +
            "<div class='teacher lessonBlock'>"
            + "<img src=\"src/baseline_person_black_48.png\" alt=\"person\" class=\"teacher_ico_img\">"
            +
            "<div>"
            + data.timetable[numSubject].groupname
            + "</div>"
            + "</div>"
            +
            "<div class='room lessonBlock'>"
            + "<img src=\"src/baseline_room_black_48.png\" alt=\"person\" class=\"room_ico_img\">"
            +
            "<div>"
            + data.timetable[numSubject].room
            + "</div>"
            + "</div>"
            + "<div class='timeLesson lessonBlock'>"
            + "<img src=\"src/timeIco48.png\" alt=\"person\" class=\"time_ico_img\">";
        if (data.timetable[numSubject].subgroup === 0 || data.timetable[numSubject].subgroup === "0") {
            if (day === "6") {
                dive.innerHTML =
                    startStr
                    + timeLessonSt[data.timetable[numSubject].numLesson]
                    + "</div>"
                    + "<br>";
            } else {
                dive.innerHTML = startStr
                    + timeLessonMnFr[data.timetable[numSubject].numLesson]
                    + "</div>"
                    + "<br>";
            }
        }
        if (data.timetable[numSubject].subgroup === 1 || data.timetable[numSubject].subgroup === "1") {
            if (day === "6") {
                dive.innerHTML = subgroupStartStr
                    + "<div class='timeLesson'>" + timeLessonSt[data.timetable[numSubject].numLesson] + "</div>"
                    + "<br>";
            } else {
                dive.innerHTML = subgroupStartStr
                    + "<div class='timeLesson'>" + timeLessonMnFr[data.timetable[numSubject].numLesson] + "</div>"
                    + "<br>";
            }
        }
        if (data.timetable[numSubject].subgroup === 2 || data.timetable[numSubject].subgroup === "2") {
            if (day === "6") {
                dive.innerHTML = subgroupStartStr
                    + "<div class='timeLesson'>" + timeLessonSt[data.timetable[numSubject].numLesson] + "</div>"
                    + "<br>";
            } else {
                dive.innerHTML = subgroupStartStr
                    + "<div class='timeLesson'>" + timeLessonMnFr[data.timetable[numSubject].numLesson] + "</div>"
                    + "<br>";
            }
        }
        allTable.append(dive);
    }
}

function selectGroup(opt) {
    if(isTeacher === false){
        localStorage.setItem("group", opt);
        group = opt;
    } else {
        localStorage.setItem("teacher", opt);
        teacher = opt;
    }
    updateTimetableList("Расписание на ");
    updateGroups();
}

function selectDay(opt) {
    day = opt;
    updateTimetableList("Расписание на ");
    updateDays()
}

getOptionsList();
updateTimetableList("Расписание на сегодня: ");
selectDay(day);
updateGroups();

clock();

/*window.addEventListener("resize", function () {
    checkScreenSize.innerHTML = innerWidth + "x" + innerHeight;
}, false);*/
/*
"  2| \nперемена 15 минут\n\n 3|  4| \nперемена 30 минут\n\n 5| 6|
\n\nперемена 30 минут\n\n 7|  8| \nперемена 15 минут\n\n 9| 10|
\n\nперемена 10 минут\n\n11| 17:25 - 18:10\n12| 18:10 - 18:55\n\n"

"Cуббота\n\n\n 1|2| \n\nперемена 5 минут\n\n3|4| \n\nперемена 30 минут\n\n
5| 6| \n\nперемена 10 минут\n\n 7|  8| \n\nперемена 10 минут\n\n
9| 10| \nперемена 5 минут\n\n11| \n12|\n\n"
*/
