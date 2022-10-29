// list
    function btn(params){
    let serial = document.getElementById('serialmanga');
    let web = document.getElementById('webmanga');
    if(params == 'serial'){
        web.style.display = 'none';
        serial.style.display = 'block';
    }
    else{
        web.style.display = 'block';
        serial.style.display = 'none';
    }
    
}

// mode
const toggle = document.getElementById('mode');
const main = document.getElementById('main');
const chapter = document.getElementById('chapter');
const logo = document.getElementById('logo');
let tema = localStorage.getItem('tema');

const modeGelap = () => {
    document.body.classList.add('body2');
    main.classList.add('main2');
    chapter.classList.add('chapter2');
    logo.style.filter = 'invert(85%)';
    localStorage.setItem('tema', 'gelap');
};

const modeCerah = () => {
    document.body.classList.remove('body2')
    main.classList.remove('main2');
    chapter.classList.remove('chapter2');
    logo.style.filter = 'invert(0%)';
    localStorage.setItem('tema', 'cerah')
};

if(tema === 'gelap'){
    modeGelap();
}

toggle.addEventListener("click", (e) =>{
    tema = localStorage.getItem('tema');
    if (tema === 'cerah'){
        modeGelap();
    } else{
        modeCerah();
    }
});

