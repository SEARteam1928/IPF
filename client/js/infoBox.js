function updateInfo(groups) {
    infoBox.innerHTML = "";

    if(isTeacher===false){


        for (let i = 0; i < groups.length; i++) {
            if (groups[i].id.toString() === group) {
                let infoGroup = document.createElement("div");
                infoGroup.innerHTML = "<div id='infoGroup' class='infoGroup'>" + groups[i].name.toString() + "</div>";
                infoBox.append(infoGroup);
            }
            if (groups[i].id === group) {
                let infoGroup = document.createElement("div");
                infoGroup.innerHTML = "<div id='infoGroup' class='infoGroup'>" + groups[i].name.toString() + "</div>";
                infoBox.append(infoGroup);
            }
        }
    } else {
        for (let i = 0; i < groups.length; i++) {
            if (groups[i].id.toString() === teacher) {
                let infoGroup = document.createElement("div");
                infoGroup.innerHTML = "<div id='infoGroup' class='infoGroup'>" + groups[i].full_name.toString() + "</div>";
                infoBox.append(infoGroup);
            }
            if (groups[i].id === teacher) {
                let infoGroup = document.createElement("div");
                infoGroup.innerHTML = "<div id='infoGroup' class='infoGroup'>" + groups[i].full_name.toString() + "</div>";
                infoBox.append(infoGroup);
            }
        }
    }
}
