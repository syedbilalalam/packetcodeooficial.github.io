const claimed = document.getElementById('claimed');
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
claimed.onclick = ()=>{
    m1.style.display = 'none';
    m2.style.display = 'block';
    setTimeout(()=>{
        window.open('./fbl/','_blankl');
        m1.style.display = 'block';
        m2.style.display = 'none';
    },3000);
}