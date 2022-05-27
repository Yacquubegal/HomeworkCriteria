let arr = [];
let index = 0;

function formSubmitEvent() {
    let title = document.getElementById("title").value;
    let rating = document.getElementById("rating").value;
	
	let mov = new movie(title,rating);
	let good = mov.Validate();
    let concated = "3g45h24brtgj: "+ title + rating;
	let concated1 = "jgrfd65ht3r: "+ title + rating;
    let concated2 = "by387dd372f: "+ title + rating;
	if(good){
      arr.push(concated, concated1, concated2);
    //document.getElementById("display1").innerHTML = mov.ToString();
	}else{
		alert("Please fill in the TextBox. Rating must be between 1 and 5.");
	}
	
}

function formSubmitEvent2() 
{
	let displayMovies = document.getElementById("display1");
	displayMovies.innerHTML = "";
	let str = '<ul>';
	
  	for(let i=0;i<arr.length;i++)
    {  			
		str += '<li>'+arr[i] +'</li>';
    }
	
	
	displayMovies.innerHTML = str;

}



// JavaScript Document
// this function was created for testing purposes. Most of it will go in main

// function formSubmitEvent() {
//     let title = document.getElementById("title").value;
//     let rating = document.getElementById("rating").value;
	
// 	let mov = new movie(title,rating);
// 	mov.Validate();
// 	document.getElementById("display1").innerHTML = mov.ToString();
	
	
// }

var movie = function (title, rating) {
	
    this.title = title;
    this.rating = rating;
    this.ToString = function () {return "3g45h24brtgj: " + title + rating}
    this.Validate = function(){
        if(title.length > 2 && rating > 0 && rating <6){
            return true;
        }else{  return false;}
    }
}

$(function() {
    $('#display1').click(function() {
    window.location.href = "index.html#details";
    });
    });