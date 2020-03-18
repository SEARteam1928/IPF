class TeacherOption {
    constructor(optName, id, firstName, middleName, lastName, fullName) {
        this.id = id;
        this.optName = optName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = fullName;
    }

    clearAllData() {
        this.id = null;
        this.firstName = null;
        this.middleName = null;
        this.lastName = null;
        this.fullName = null;
    }

    addOpt() {
        $.ajax({
            url: "http://timetable.kcpt-1.ru/api/v3/addOptions" + this.optName,
            type: "post",
            dataType: "json",
            data: {
                firstName: this.firstName,
                middleName: this.middleName,
                lastName: this.lastName,
                fullName: this.fullName
            },
            success(data) {
                document.getElementById("clock").innerHTML = "Добавлено!";
                console.log(" added!");
                refreshData(4)
            },
            error(header, textError) {
                console.log(header.status, header.statusText);
                alert(textError);
            }
        });
    }

    editOpt() {
        $.ajax({
            url: "http://timetable.kcpt-1.ru/api/v3/editOptions" + this.optName,
            type: "post",
            dataType: "json",
            data: {
                oldId: this.id,
                firstName: this.firstName,
                middleName: this.middleName,
                lastName: this.lastName,
                fullName: this.fullName
            },
            success(data) {
                document.getElementById("clock").innerHTML = "Отредактировано!";
                console.log(" edited!");
                refreshData(4)
            },
            error(header, textError) {
                console.log(header.status, header.statusText);
                alert(textError);
            }
        });
    }

    delOpt() {
        $.ajax({
            url: "http://timetable.kcpt-1.ru/api/v3/removeOptions" + this.optName,
            type: "post",
            dataType: "json",
            data: {
                id: this.id
            },
            success(data) {
                document.getElementById("clock").innerHTML = "Удалено!";
                console.log(" deleted!");
                refreshData(4)
            },
            error(header, textError) {
                console.log(header.status, header.statusText);
                alert(textError);
            }
        });
    }
}
