var states = [{ id: 1, name: "Andhra Pradesh", select: false, isVisible: true },
{ id: 2, name: "Arunachal Pradesh", select: false, isVisible: true },
{ id: 3, name: "Assam", select: false, isVisible: true },
{ id: 4, name: "Bihar", select: false, isVisible: true },
{ id: 5, name: "Rajasthan", select: false, isVisible: true },
{ id: 6, name: "Tamilnadu", select: false, isVisible: true },
{ id: 7, name: "Maharastra", select: true, isVisible: false },
{ id: 8, name: "Kerala", select: true, isVisible: false }];
window.onload = function () {
    arrDisplay(states);
}
function arrDisplay(states) {
    for (var i = 0; i < states.length; i++) {
        var li = document.createElement("li"),
            btn = document.createElement("button");
        if (states[i].select == false && states[i].isVisible == true) {
            li.className = "list-group-item";
            li.textContent = states[i].id + ". " + states[i].name;
            btn.className = "btn btn-sm btn-success"; btn.id = i, li.id = "li" + i;
            btn.textContent = "add";
            btn.onclick = function () {
                addFn(states, this.id);
            }
            document.getElementById("allStates").appendChild(li);
            // div.appendChild(li);
            li.appendChild(btn);
        }
        else {
            li.className = "list-group-item";
            li.textContent = states[i].id + ". " + states[i].name;
            btn.className = "btn btn-sm btn-danger"; btn.id = i;
            btn.textContent = "delete";
            btn.onclick = function () {
                deleteFn(states, this.id);
            }
            document.getElementById("selectedStates").appendChild(li);
            // div.appendChild(li);
            li.appendChild(btn);
        }
    }
}
var addFn = function (arrState, id) {

    arrState[id].select = true;
    arrState[id].isVisible = false;

    if (arrState[id].isVisible == false) {
        document.getElementById("selectedStates").innerHTML = "";
        arrDisplay(arrState);
        document.getElementById("allStates").innerHTML = "";
    }
    else {
        document.getElementById("selectedStates").innerHTML = "";
        document.getElementById("allStates").innerHTML = "";
        arrDisplay(arrState);
    }
}
function deleteFn(arrState, id) {
    document.getElementById("allStates").innerHTML = "";
    arrState[id].select = false;
    arrState[id].isVisible = true;
    document.getElementById("selectedStates").innerHTML = "";
    arrDisplay(arrState);
}

function search() {
    var searchedElement = document.getElementById("search").value.toUpperCase();
    //var li = document.createElement("li");
    document.getElementById("selectedStates").innerHTML = "";
    document.getElementById("allStates").innerHTML = "";
    arrDisplay(states);
    for (var i = 0; i < states.length; i++) {
        if (states[i].select == false) {
            if (states[i].name.toUpperCase().indexOf(searchedElement) > -1) {
                if (states[i].isVisible == true) {
                    document.getElementById("li" + i).hidden = false;
                }

            }
            else {
                document.getElementById("li" + i).hidden = true;
            }
        }

    }
}

function submit() {
    var submitStates = [];
    for (var i = 0; i < states.length; i++) {
        if (states[i].select == true) {
            submitStates.push(states[i].name);
        }
    }
    if (submitStates.length == 0) {
        document.write("no states selected");
    }
    else {
        document.write(submitStates);
    }
}