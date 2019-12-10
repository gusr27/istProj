var json = JSON.parse(json);

function showHref(){

   if(window.location.href === "http://127.0.0.1:49550/assets/project.html?military"){
     // document.title=json.title;
       document.title=  json.military.title;
       
   }else{
       alert("went wrong");
   }
}
function changeTheme() {
    if(document.getElementById("themeChanger").style.color == "black"){
document.body.style.backgroundColor = "gray";
   document.body.style.color = "pink";
   document.getElementById("themeChanger").style.color = "white";
    }else{
        document.body.style.backgroundColor = "white";
    document.body.style.color = "purple";
        document.getElementById("themeChanger").style.color = "black";
    }
    
}

function alertUser(){
    var nameVal = document.getElementById('contactName').value;
    alert('Thanks ' + nameVal +"! Your message was sent!");
}

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}