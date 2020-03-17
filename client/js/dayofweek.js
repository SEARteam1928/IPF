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