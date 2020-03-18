function deleteLesson(id) {
    let lesson = new Lesson(id, null, null, null, null, null, null, null);
    lesson.delOpt()
}
function del(optIndex, selectId) {
    let optName = "";
    let opt = undefined;
    if (optIndex === 0) {
        optName = "Group";
        opt = new Options(optName, group, null);
    }
    if (optIndex === 2) {
        optName = "Room";
        opt = new Options(optName, room, null);
    }
    if (optIndex === 3) {
        optName = "Subject";
        opt = new Options(optName, subject, null);
    }
    if (optIndex === 4) {
        optName = "Teacher";
        opt = new TeacherOption(optName, teacher, null, null, null, null);
    }
    if (optIndex === 5) {
        opt = new Lesson(lessonIdInput.value, null, null, null, null, null, null, null);
    }
    opt.delOpt();
    opt.clearAllData();
    if (optIndex === 0) {
        refreshData(0)
    }
    if (optIndex === 2) {
        refreshData(2)
    }
    if (optIndex === 3) {
        refreshData(3)
    }
    if (optIndex === 4) {
        refreshData(4)
    }
    if (optIndex === 5) {
        updateTimetableList("")
    }
}
