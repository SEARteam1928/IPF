function updateTimetableList(timetableOn) {
    $.ajax({
        url: "http://timetable.kcpt-1.ru/api/v3/viewTimetable",
        type: "get",
        dataType: "json",
        data: {
            "group": group,
            "day": day
        },
        success(data) {
            console.log(data);

            allTable.innerHTML = "";
            let groupNameDiv = document.createElement("div");
            let dayOfWeek = document.createElement("div");

            groupNameDiv.setAttribute("class", "groupName");
            dayOfWeek.setAttribute("class", "dayOfWeek");

            if (data.timetable[0] !== undefined) {
                groupNameDiv.append(data.timetable[0].groupname);
                dayOfWeek.append(data.timetable[0].dayOfWeek);
            } else {
                groupNameDiv.append("Нет занятий!");
            }
            for (let i = 0; i < data.timetable.length; i++) {
                createTableLine(data, i);
            }
        },
        error(header, textError) {
            console.log(header.status, header.statusText);
            alert("ААА ПАНИКА ПАНИКАААААА");
        }

    });
}