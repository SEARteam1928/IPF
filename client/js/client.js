function updateTimetableList(timetableOn) {
    if (isTeacher === false) {
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
                if (data.timetable.length === 0) {
                    allTable.innerHTML = "<div class='nolessondiv'>НЕТ ЗАНЯТИЙ!</div>";
                }
                for (let i = 0; i < data.timetable.length; i++) {
                    createTableLine(data, i);
                }
            },
            error(header, textError) {
                console.log(header.status, header.statusText, textError.toString());
                alert("ААА ПАНИКА ПАНИКАААААА");
            }

        });
    } else {
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
                if (data.timetable.length === 0) {
                    allTable.innerHTML = "<div class='nolessondiv'>НЕТ ЗАНЯТИЙ!</div>";
                }
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



