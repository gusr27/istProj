


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