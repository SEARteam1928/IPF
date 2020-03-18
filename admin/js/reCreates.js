function clearSelect(selectName) {
    selectName.innerHTML = ""
}
function refreshData(selectId) {
    getOptionsList(selectId);
    updateTimetableList("Расписание на сегодня: ");
}
