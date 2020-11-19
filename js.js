const data = new Date('2022, January, 01').getTime();


function timer() {
    const agora = new Date().getTime();
    const gap = data - agora;

    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    const d = Math.floor(gap / (dias))
    const h = Math.floor((gap % (dias)) / (horas))
    const m = Math.floor((gap % (horas)) / (minutos))
    const s = Math.floor((gap % (minutos)) / (segundos))

    document.querySelectorAll('.cronometro div')[0].innerText = d;
    document.querySelectorAll('.cronometro div')[1].innerText = h;
    document.querySelectorAll('.cronometro div')[2].innerText = m;

    if (s < 10) {
        document.querySelectorAll('.cronometro div')[3].innerText = '0'+s;
    } else {
        document.querySelectorAll('.cronometro div')[3].innerText = s;
    }



}

timer();

setInterval(() => {
    timer()
}, 1000)

