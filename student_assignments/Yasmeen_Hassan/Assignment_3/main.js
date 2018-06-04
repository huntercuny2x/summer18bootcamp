function clickleft(){
    alert("I'm rightO");
}
function clickright(){
    alert("nu uh, I R WRITE!")

}
//sends an alert when you hove an item with this function attatched
function hover(){
    alert("EY GETTA OUTTA HERE, YOU meddling kids!");
}
//calculate volume of a sphere
function getVolume(){
    var radius = document.getElementById('radius').value
    document.getElementById("volume").textContent = "The volume is " + ((radius*radius*radius) * (4/3) * (3.14));
}
