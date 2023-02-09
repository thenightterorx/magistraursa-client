document.getElementById("1").innerHTML = "Nw text!";
document.getElementById("2").innerHTML = "Nw text!";
document.getElementById("3").innerHTML = "Nw text!";

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