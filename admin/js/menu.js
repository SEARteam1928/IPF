function appendInView(arr, createdElement, appendIn, selectDayOrGroups, teacherOrNot) {
    let list = [];
    let element1 = document.createElement(createdElement);
    element1.setAttribute("value", "Выберите");
    element1.innerHTML = "Выберите";
    element1.setAttribute("selected", "selected");

    list.push(element1);
    for (let i = 0; i < arr.length; i++) {
        let element = document.createElement(createdElement);
        if (teacherOrNot === 0) {
            element.append(arr[i].name);
        }
        if (teacherOrNot === 1) {
            element.append(arr[i].full_name);
        }
        element.setAttribute("value", arr[i].id);
        element.dataset["id"] = arr[i].id;
        list.push(element);
    }
    appendIn.append(...list);
}
