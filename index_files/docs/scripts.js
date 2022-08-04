let hr;
document.onclick = () => {
    clearInterval(hr);
    document.querySelector("#messageBliker").style.opacity = "0";
    let count = 0;
    hr = setInterval(() => {
        if(count > 4){
            setTimeout(() => {
                document.querySelector("#messageBliker").style.opacity = "1";
            }, 300);
            clearInterval(hr);
        }
        if(count%2 == 0){
            document.querySelector("#messageBliker").style.opacity = "0";
        }
        else {
            document.querySelector("#messageBliker").style.opacity = "1";
        }
        count++;
    }, 300);
}