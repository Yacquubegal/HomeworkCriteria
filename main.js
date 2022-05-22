let noteArray = [];

let selectedType = "not selected";
let selectedData = "selected";
// define a constructor to create note objects
let NoteObject = function (pData, PType) {
    this.data = pData;
    this.type = PType;

}
noteArray.push(new NoteObject("29vnt79nvej: Hi, My name is yacquub; this is my first note ("));
console.log(noteArray);




$(".ui-input-text").on("click", function(e) {
});

document.addEventListener("DOMContentLoaded", function (event)  {

    document.getElementById("buttonAdd").addEventListener("click", function (event) {

        noteArray.push(new NoteObject(document.getElementById("Note").value, selectedType));
        console.log(noteArray);
        document.getElementById("note").value = "";
    });


    // page before show codes **********************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {
        createList();
    });
});
$(document).bind("change", "#select-data", function (event, ui) {
    selectedData = $('#select-data').val();
});


document.addEventListener("DOMContentLoaded", function () {

    createList();

    function createList() {

    //clear prior data
    var myul = document.getElementById("myList");
    myul.innerHTML = '';

    noteArray.forEach(function(element,) {    // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.data + ":  " + element.type;
        myul.appendChild(li);
    });
};


    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = $('#select-type').val();
    });


    $(document).on("pagebeforeshow", "#list", function (event) {
        createList();
    });
});

$(document).bind("change", "#select-data", function (event, ui) {
    selectedData = $('#select-data').val();
});


// need one for our details page to fill in the info based on the passed in ID
    $(document).on("pagebeforeshow", "#list", function (event) {   
        let MovieID = localStorage.getItem('parm');  // get the unique key back from the storage dictionairy
        document.getElementById("myList").innerHTML = MovieID;
    });
 
// end of page before show code *************************************************************************


// end of wait until document has loaded event  *************************************************************************

function createList() {
    // clear prior data
    var theList = document.getElementById("myList");
    theList.innerHTML = "";

 

    noteArray.forEach(function (element, i) {   // use handy array forEach method
        var myLi = document.createElement('li');
        myLi.classList.add('oneNote');
        myLi.innerHTML =  element.ID + ":  " + element.data + "  " + element.type;
        // use the html5 "data-parm" to store the ID of this particular movie object 
        // that we are currently building an li for so that I can later know which movie this li came from
        myLi.setAttribute("data-parm", element.ID);

        theList.appendChild(myLi);
    });

    var liList = document.getElementsByClassName("oneNote");
    let newNoteArray = Array.from(liList);

    newNoteArray.forEach(function (element,i) {     
        element.addEventListener('click', function () {     
            
            var parm = this.getAttribute("data-parm");  // data-parm has this movie object's ID value
            // now save THIS ID value in the localStorage "dictionairy"
            localStorage.setItem('parm', parm);
        });
    });
  
};
  

function dynamicSort(property) {
  
 
    return function (a, b) {
            return a[property].localeCompare(b[property]);
    }
}











