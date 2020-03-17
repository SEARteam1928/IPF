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

function innerChanges() {
    allTable.innerHTML = "";
    allTable.innerHTML = " <iframe src=\"https://docs.google.com/document/d/e/2PACX-1vS2ehAErYyAWY-cm247Pt4oT2YVAkEMwiYXhFu0pxGexUne1PTWNiWS0ktvlglRQqNpLtolGzJjIlvc/pub\" class='changesFrame'>\n" +
        " </iframe>"
}
