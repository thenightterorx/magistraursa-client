
person=1;

displayCookie();
function writeCookie(array){
    jsonarray=JSON.stringify(array);
    const d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = "value" + "=" + jsonarray + ";" + expires + ";path=/";
    document.cookie=";"
}

function getCookie(){
    let name = "value" + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        jsonarray=c.substring(name.length, c.length);
        return JSON.parse(jsonarray);
      }
    }
    return "";

}

function shuffleCookie() {
    array=getCookie();
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    writeCookie(array);
  }

  function displayCookie(){
    array=getCookie();
    //document.getElementById("1").innerHTML = "Nw text!";

    for (i=1;i<=array.length;i++){
        document.getElementById(String(i)).innerHTML = array[i][0]+array[i][1];
    }
  }

  function displayprev(){
    firstname=document.getElementById("firstname").value;
    lastname=document.getElementById("lasname").value;
    editCookie(person-1,);
    displayCookie();
    if(person==1){
        person=36;
    }else{
        person--;
    }
  }

  function displaynext(){
    firstname=document.getElementById("firstname").value;
    lastname=document.getElementById("lasname").value;
    editCookie(person-1,firstname,lastname);
    displayCookie();
    if(person==36){
        person=1;
    }else{
        person++;
    }
  }



  function editCookie(index,firstname,lastname){
    array=getCookie();
    array[index][0]=firstname;
    array[index][1]=lastname;
    writeCookie(array);

  }