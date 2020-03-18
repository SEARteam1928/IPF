function getOptionsList(selectId) {
    $.ajax({
        url: "http://timetable.kcpt-1.ru/api/v3/viewAllOptionsForTimetable",
        type: "get",
        dataType: "json",
        data: {},
        success(data) {
            console.log(data);

            let selectDayOrGroup = [group, day, room, subject, teacher];
            let selector = [groupSelect, daySelect, roomSelect, subjectSelect, teacherSelect];
            if (selectId === 4) {
                clearSelect(selector[4]);
                appendInView(data.teachers, 'option', selector[selectId], selectDayOrGroup[selectId], 1);
            }
            if (selectId === 0) {
                clearSelect(selector[0]);
                appendInView(data.groups, 'option', selector[0], selectDayOrGroup[0], 0);
            }
            if (selectId === 1) {
                clearSelect(selector[1]);
                appendInView(data.dayOfWeek, 'option', selector[1], selectDayOrGroup[1], 0);
            }
            if (selectId === 2) {
                clearSelect(selector[2]);
                appendInView(data.rooms, 'option', selector[2], selectDayOrGroup[2], 0);
            }
            if (selectId === 3) {
                clearSelect(selector[3]);
                appendInView(data.subject, 'option', selector[3], selectDayOrGroup[3], 0);
            }
        },
        error(header, textError) {
            console.log(header.status, header.statusText);
            alert("ААА ПАНИКА ПАНИКАААААА");
        }

    });
}
