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

// time

function timeAgo(date) {
    let seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor (interval) + " tahun lalu";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor (interval) + " bulan lalu";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor (interval) + " hari lalu";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor (interval) + " jam lalu";
    interval = seconds / 60;
    if (interval > 1) return Math.floor (interval) + " menit lalu";
    return Math.floor(seconds) + " detik lalu";
}

document.getElementById('ch1').innerHTML = timeAgo('2022-08-31 18:44:00');
document.getElementById('ch2').innerHTML = timeAgo('2022-08-31 18:44:00');
document.getElementById('ch3').innerHTML = timeAgo('2022-08-31 18:44:00');
document.getElementById('ch4').innerHTML = timeAgo('2022-08-31 18:44:00');
document.getElementById('ch5').innerHTML = timeAgo('2022-08-31 18:44:00');
