function create(optIndex, selectId) {
    let optName = "";
    let opt = undefined;
    if (optIndex === 0) {
        optName = "Group";
        opt = new Options(optName, null, prompt("Введите название группы"));
        refreshData(0)
    }
    if (optIndex === 2) {
        optName = "Room";
        opt = new Options(optName, null, prompt("Введите номер кабинета"));
    }
    if (optIndex === 3) {
        optName = "Subject";
        opt = new Options(optName, null, prompt("Введите название предмета"));
    }
    if (optIndex === 4) {
        optName = "Teacher";
        opt = new TeacherOption(optName, null, prompt("Введите Имя преподавателя"), prompt("Введите Отчество преподавателя"), prompt("Введите фамилию преподавателя"), undefined);
    }
    if (optIndex === 5) {
        opt = new Lesson(null, day, group, lessonNumInput.value, subGroupNumInput.value, subject, teacher, room);
    }
    opt.addOpt();
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
