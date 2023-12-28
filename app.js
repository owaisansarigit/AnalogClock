
function clock(){
    let h = document.getElementById('hr');
    let m = document.getElementById('mn');
    let s = document.getElementById('ss');
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let ss = date.getSeconds();
    h.style.transform = `rotate(${30 * hr + mn /2}deg) ` 
    m.style.transform = `rotate(${6*mn}deg)` 
    s.style.transform = `rotate(${ss*6}deg)` 
    

    if(hr <= 12){
        let a = document.getElementById('in1').value = hr;
    }else{
        hr =hr - 12;
        // console.log(hr);
        let a = document.getElementById('in1').value = hr;
    }
    
}
setInterval(clock,1000)

