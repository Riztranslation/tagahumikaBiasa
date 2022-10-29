        const toggle = document.getElementById('mode');
        const logo = document.getElementById('logo');
        const navlogo = document.getElementById('navlogo');
        let tema = localStorage.getItem('tema');
    
        const modeGelap = () => {
            document.body.classList.add('body2');
            logo.style.filter = 'invert(85%)';
            navlogo.style.filter = 'invert(85%)';
            localStorage.setItem('tema', 'gelap');
        };
        
        const modeCerah = () => {
            document.body.classList.remove('body2')
            navlogo.style.filter = 'invert(0%)';
            logo.style.filter = 'invert(0%)';
            localStorage.setItem('tema', 'cerah')
        };
    
        if (tema === 'gelap') {
            modeGelap();
        }
    
        toggle.addEventListener("click", (e) => {
            tema = localStorage.getItem('tema');
            if (tema === 'cerah') {
                modeGelap();
            } else {
                modeCerah();
            }
        });