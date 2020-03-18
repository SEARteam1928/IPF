class Options {
    constructor(optName, id, name, selectId) {
        this.id = id;
        this.name = name;
        this.optName = optName;
        this.selectId = selectId;
    }

    clearAllData() {
        this.id = null;
        this.name = null;
    }

    addOpt() {
        $.ajax({
            url: "http://timetable.kcpt-1.ru/api/v3/addOptions" + this.optName,
            type: "post",
            dataType: "json",
            data: {
                name: this.name,
                shortName: ""
            },
            success(data) {
                document.getElementById("clock").innerHTML = "Добавлено!";
                console.log(" added!");
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
                name: this.name,
                shortName: ""
            },
            success(data) {
                document.getElementById("clock").innerHTML = "Отредактировано!";
                console.log(" edited!");
            },
            error(header, textError) {
                console.log(header.status, header.statusText);
                alert(textError);
            }
        });
    }

}
