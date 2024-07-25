let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


let btne = document.getElementById('btne');

window.onscroll = function(){
    if(scrollY >= 400){
        btne.style.display = 'block';
    }else{
        btne.style.display = 'none';
    }
}

btne.onclick = function(){
    scroll({
        top : 0,
        left : 0,
        behavior : "smooth",
    });
}
