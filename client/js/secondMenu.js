function updateGroups() {
    $.ajax({
        url: "http://timetable.kcpt-1.ru/api/v3/viewAllOptionsForTimetable",
        type: "get",
        dataType: "json",
        data: {},
        success(data) {
            console.log(data);
            groupSelect.innerHTML = "";
            if(isTeacher===false){
                appendInView(data.groups, 'input', groupSelect, group);
                updateInfo(data.groups)
            } else {
                appendInView(data.teachers, 'input', groupSelect, teacher);
                updateInfo(data.teachers);
            }
        },
        error(header, textError) {
            console.log(header.status, header.statusText);
            alert("ААА ПАНИКА ПАНИКАААААА");
        }

    });
}

function appendInView(arr, createdElement, appendIn, selectDayOrGroups) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        let element = document.createElement(createdElement);

        if(isTeacher=== false) {
            element.setAttribute("value", arr[i].name);
        } else {
            element.setAttribute("value", arr[i].full_name);
        }
        element.setAttribute("onclick", "selectGroup(" + arr[i].id + ")");
        element.setAttribute("type", "button");
        element.dataset["id"] = arr[i].id;
        if (arr[i].id.toString() === selectDayOrGroups) {
            element.setAttribute("selected", "selected")
        }
        if (arr[i].id.toString() === selectDayOrGroups) {
            element.setAttribute("selected", "selected")
        }
        list.push(element);
    }
    appendIn.append(...list);
}
