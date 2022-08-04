let elems = document.getElementsByClassName("katinp");
let foucs = "no";
let newfinp = [];
let newspan = [];
let newdiv = [];
let newsp = [];
window.onkeypress = () => { }
for (let index = 0; index < elems.length; index++) {
    elems[index].style.height = elems[index].getAttribute("height") + "px";
    elems[index].style.width = elems[index].getAttribute("width") + "px";
    elems[index].style.backgroundColor = elems[index].getAttribute("bcl");
    elems[index].style.display = "flex";
    elems[index].style.alignItems = "center";
    console.log(elems[index].bcl);
    elems[index].style.padding = "2px";
    newfinp[index] = document.createElement("input");
    newfinp[index].type = "text";
    elems[index].append(newfinp[index]);
    newfinp[index].style.display = "none";
    newspan[index] = document.createElement("span");
    elems[index].style.color = elems[index].getAttribute("cl");
    elems[index].append(newspan[index]);
    newdiv[index] = document.createElement("div");
    newdiv[index].style.backgroundColor = elems[index].getAttribute("cl");
    newdiv[index].style.height = (elems[index].getAttribute("height") - 20) + "px";
    newdiv[index].style.width = "2px";
    elems[index].append(newdiv[index]);

    newspan[index].innerText += "a";
    elems[index].onclick = () => {
        if (foucs == "no") {
            foucs = "yes"
            newfinp[index].focus();
            window.onkeydown = (e) => {
                if (e.key == "Control" || e.key == "Alt" || e.key == "Backspace" || e.key == "Meta" || e.key == "Enter" || e.key.length > 1) {
                    if(e.key == "Backspace"){
                        newspan[index].innerText = newspan[index].innerText.slice(0 , -1);
                    }
                }
                else {
                    if(e.key == " "){

                        newspan[index].innerHTML += "<span style=\"font-size: 5px;\"> </span>";
                    }
                    else{
                        newspan[index].innerHTML += e.key;
                    }
                }
                console.log(e);
            }
        }
    }
}