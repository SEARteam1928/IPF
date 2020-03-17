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
