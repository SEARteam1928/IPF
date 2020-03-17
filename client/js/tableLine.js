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
