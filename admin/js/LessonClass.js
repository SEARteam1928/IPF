class Lesson {
    constructor(id, day, group, numLesson, subGroup, subject, teacher, room) {
        this.id = id;
        this.day = day;
        this.group = group;
        this.numLesson = numLesson;
        this.subGroup = subGroup;
        this.subject = subject;
        this.teacher = teacher;
        this.room = room;
    }

    clearAllData() {
        this.id = null;
        this.day = null;
        this.group = null;
        this.numLesson = null;
        this.subGroup = null;
        this.subject = null;
        this.teacher = null;
        this.room = null;
    }

    addOpt() {
        $.ajax({
            url: "http://timetable.kcpt-1.ru/api/v3/addLessonInTimetable",
            type: "post",
            dataType: "json",
            data: {
                day: this.day,
                group: this.group,
                numLesson: this.numLesson,
                subgroup: this.subGroup,
                subject: this.subject,
                teacher: this.teacher,
                room: this.room
            },
            success(data) {
                console.log(" added!");
                updateTimetableList("");
            },
            error(header, textError) {
                console.log(header.status, header.statusText);
                alert(textError);
            }
        });
    }

    editOpt() {
        $.ajax({
            url: "http://timetable.kcpt-1.ru/api/v3/editLessonInTimetable",
            type: "post",
            dataType: "json",
            data: {
                id: this.id,
                day: this.day,
                group: this.group,
                numLesson: this.numLesson,
                subgroup: this.subGroup,
                subject: this.subject,
                teacher: this.teacher,
                room: this.room
            },
            success(data) {
                console.log(" added!");
                updateTimetableList("");
            },
            error(header, textError) {
                console.log(header.status, header.statusText);
                alert(textError);
            }
        });
    }

    delOpt() {
        $.ajax({
            url: "http://timetable.kcpt-1.ru/api/v3/removeLessonInTimetable",
            type: "post",
            dataType: "json",
            data: {
                id: this.id
            },
            success(data) {
                console.log(" Deleted!");
                updateTimetableList("");
            },
            error(header, textError) {
                console.log(header.status, header.statusText);
                alert(textError);
            }
        });
    }
}
