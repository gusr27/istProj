

var json = JSON.parse(json);

//this loads the json data into the project page
function showHref(){
 var value = window.location.href.split('?')[1];
  
   
        document.title=  json[value].title;
       document.getElementById("projectTitle").innerHTML = json[value].title;
       document.getElementById("completion").innerHTML = json[value].completion;
       document.getElementById("description").innerHTML = json[value].description;
        document.getElementById("link").href = json[value].link;
        document.getElementById("use").innerHTML = json[value].uses;     
}    
function changeTheme() {
    if(document.getElementById("themeChanger").style.color == "black"){
document.body.style.backgroundColor = "white";
   document.body.style.color = "pink";
   document.getElementById("themeChanger").style.color = "white";
    }else{
        document.body.style.backgroundColor = "#282828";
    document.body.style.color = "inherit";
        document.getElementById("themeChanger").style.color = "black";
    }
    
}
//uses alert to make sure the user reads something and selects okay
function alertUser(){
    var nameVal = document.getElementById('contactName').value;
    alert('Thanks ' + nameVal +"! Your message was sent!");
}
//simple form validation
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}