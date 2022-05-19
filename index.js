// start by creating data so we don't have to type it in each time
let movieArray = [];

// define a constructor to create movie objects
let MovieObject = function (pTitle, pYear, pGenre, pMan, pWoman, pURL) {
    this.Title = pTitle;
    this.Year = pYear;
    this.ID = Math.random().toString(16).slice(5)  // tiny chance could get duplicates!
    this.Genre = pGenre;  // action  comedy  drama  horrow scifi  musical  western
    this.Man = pMan;
    this.Woman = pWoman;
    this.URL = pURL;
}


movieArray.push(new MovieObject("Superman Returns", 2006, "Action/Adventure", "Brandon Routh", "Kate Bosworth", "https://www.youtube.com/watch?v=bRqAUqAFhNw"));
movieArray.push(new MovieObject("Spider-Man", 2002, "Action/Fantasy", "Tobey Maguire", "Kirsten Dunst", "https://www.youtube.com/watch?v=TYMMOjBUPMM"));
movieArray.push(new MovieObject("Teen Wolf", 1985, "Comedy/Fantasy", "Michael J. Fox", "Susan Ursitti", "https://www.youtube.com/watch?v=6Sao1dXr9qI"));
movieArray.push(new MovieObject("The Dark Knight", 2008, "Action/Adventure", "Christian Bale", "Maggie Gyllenhaal", "https://www.youtube.com/watch?v=EXeTwQWrcwY"));
console.log(movieArray);


let selectedGenre = "not selected";

document.addEventListener("DOMContentLoaded", function () {

    createList();

// add button events ************************************************************************
    
    document.getElementById("buttonAdd").addEventListener("click", function () {
        movieArray.push(new MovieObject(document.getElementById("title").value, document.getElementById("year").value,
            selectedGenre, document.getElementById("man").value, document.getElementById("woman").value));
        document.location.href = "index.html#ListAll";
        // also add the URL value
    });
    
    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
        document.getElementById("man").value = "";
        document.getElementById("woman").value = "";
        document.getElementById("URL").value = "";
    });

    $(document).bind("change", "#select-genre", function (event, ui) {
        selectedGenre = $('#select-genre').val();
    });


    document.getElementById("buttonSortTitle").addEventListener("click", function () {
        movieArray.sort(dynamicSort("Title"));
        createList();
        document.location.href = "index.html#ListAll";
    });

    document.getElementById("buttonSortGenre").addEventListener("click", function () {
        movieArray.sort(dynamicSort("Genre"));
        createList();
        document.location.href = "index.html#ListAll";
    });
// end of add button events ************************************************************************

  

    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#ListAll", function (event) {   // have to use jQuery 
        createList();
    });


    // need one for our details page to fill in the info based on the passed in ID
    $(document).on("pagebeforeshow", "#details", function (event) {   
        let MovieID = localStorage.getItem('parm');  // get the unique key back from the storage dictionairy
        document.getElementById("thatMovieID").innerHTML = MovieID;
    });
 
// end of page before show code *************************************************************************

});  
// end of wait until document has loaded event  *************************************************************************

function createList() {
    // clear prior data
    var theList = document.getElementById("myul");
    theList.innerHTML = "";

 

    movieArray.forEach(function (element, i) {   // use handy array forEach method
        var myLi = document.createElement('li');
        myLi.classList.add('oneMovie');
        myLi.innerHTML =  element.ID + ":  " + element.Title + "  " + element.Genre;

        // use the html5 "data-parm" to store the ID of this particular movie object 
        // that we are currently building an li for so that I can later know which movie this li came from
        myLi.setAttribute("data-parm", element.ID);

        theList.appendChild(myLi);
    });

    var liList = document.getElementsByClassName("oneMovie");
    let newMoviewArray = Array.from(liList);

    newMoviewArray.forEach(function (element,i) {     
        element.addEventListener('click', function () {     
            
            var parm = this.getAttribute("data-parm");  // data-parm has this movie object's ID value
            // now save THIS ID value in the localStorage "dictionairy"
            localStorage.setItem('parm', parm);
            document.location.href = "index.html#details";
        });
    });
  
};
  

function dynamicSort(property) {
  
 
    return function (a, b) {
            return a[property].localeCompare(b[property]);
    }
}
