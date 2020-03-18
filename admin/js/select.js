function selectGroup(opt) {
    localStorage.setItem("group", opt.value);
    group = opt.value;
    updateTimetableList("Расписание на ");
}

function selectRoom(opt) {
    room = opt.value;
    updateTimetableList("Расписание на ");
}

function selectSubject(opt) {
    subject = opt.value;
    updateTimetableList("Расписание на ");
}

function selectTeacher(opt) {
    teacher = opt.value;
    updateTimetableList("Расписание на ");
}

function selectDay(opt) {
    day = opt.value;
    updateTimetableList("Расписание на ");
}

