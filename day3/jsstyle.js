 function js_style(){
      para.style.fontSize = "20pt";
      para.style.fontFamily = "arial";
      para.style.color = "blue";
      //para.style.text-align = right;
}

function getFormInfo(){

     var firstName = document.querySelector('input[name=fname]').value;
     var lastName = document.querySelector('input[name=lname]').value;

     console.log(firstName);
     console.log(lastName);

}

function firstButtonArgue() {
     document.getElementById('changeable').innerHTML = "I'm right!";
}

function secondButtonArgue(){
     document.getElementById('changeable').innerHTML = "No, I'm right!";
}

function whyYouHere(){
     //document.getElementById('mousey')
     alert("Hey! I told you not to hover over me!");
}

function sphereVolumeCalc(){
     var radius = document.querySelector('input[name=radius]').value;
     var volume = 4/3 * radius * radius * radius * Math.PI;
     document.getElementById('result').innerHTML = volume;
}
