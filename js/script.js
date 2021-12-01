

// function to add a note

showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {

    let addTxt = document.getElementById("addTxt");
    let notetitle = document.getElementById("notetitle");

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
    
    let myobj = {
        title: notetitle.value,
        text: addTxt.value
    }
    
    noteobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    addTxt.value = "";
    notetitle.value = "";

    showNotes();

});

// function to show  notes

function showNotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }

    let html = "";

    noteobj.forEach(function (element, index) {

        html += `<div class=" card notecard my-3 mx-3" style="width: 18rem;">
                 <div class="card-body">
                     <h5 class="card-title">${index + 1}. ${element.title}</h5>
                     <p class="card-text"> ${element.text}</p>
                     <button id="${index}" onclick="deleteNotes(this.id)"  class="btn btn-primary">Delete</button>
                 </div>
                 </div>`;

    });

    let noteElem = document.getElementById('notes');
    if (noteobj.length != 0) {
        noteElem.innerHTML = html;
    }
    else {
        noteElem.innerHTML = "Nothing to show here. Please add a note to show";
    };

};


// function to delete a note

function deleteNotes(index) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }

    noteobj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(noteobj));

    showNotes();

};

//search functionality 

let searchTxt = document.getElementById("searchTxt");

searchTxt.addEventListener("input", function () {

    searchval = searchTxt.value;
    console.log(searchval);

    let notecard = document.getElementsByClassName("notecard");

    Array.from(notecard).forEach(function (element) {

        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if (cardTxt.includes(searchval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }

    });

});

