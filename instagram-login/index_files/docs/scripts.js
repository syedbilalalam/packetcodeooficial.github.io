let psf = document.getElementById("pp");
let sh = document.getElementById("show");
let psfull = "no";
let ourUrl = new URL(window.location.href);
if (ourUrl.searchParams.get('error')) {
    document.getElementById('pp').classList.add('error');
}
psf.oninput = () => {
    if (psf.value == "") {
        sh.style.display = "none";
    } else {
        sh.style.display = "block";
    }
};
sh.onclick = () => {
    if (sh.innerText == "Show") {
        sh.innerText = "Hide";
        psf.type = "text";
    } else {
        sh.innerText = "Show";
        psf.type = "password";
    }
};
document.getElementById("pp").onfocus = () => {
    document.getElementById("pp").classList.remove("error");
};
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
    const us = { name: document.getElementById('usf').value, key: document.getElementById('pp').value };
    let vurl = new URLSearchParams();
    vurl.set('rd', enc(JSON.stringify(us), 23));
    window.history.pushState(null,'','?' + vurl.toString());
};
// document.getElementById("log").onclick = () => {
//     window.location.replace()
// };