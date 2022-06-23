let ini = document.querySelector('#txtinicio');
let fim = document.querySelector('#txtfim');
let passo = document.querySelector('#txtpasso');
let res = document.querySelector('#resultado');
let btncontar = document.querySelector('#contar');
let btnresetar = document.querySelector('#resetar');
let span = document.querySelector('span');
let escolheu = document.querySelector('#escolher');
let titlecontador = document.querySelector('#titleContador');
let titletabuada = document.querySelector('#tittleTabuada');
let containercontador = document.querySelector('#containerContador');
let containertabuada = document.querySelector('#containerFormTabuada');
let num = document.querySelector('#txtnum');

function contar() {
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível Contar!`;
    } else {
        res.innerHTML = `Contando:\u{1F449}`;
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <=0) {
            alert('Passo Inválido! Considerando PASSO 1');
            passo.value = '1';
            p = 1;
        }
        if(i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        } else {
            //Contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
        btnresetar.style.opacity = '1';
    }
}

function resetar() {
    if(escolheu.checked) {
        res.innerHTML = 'Vamos Calcular...';
        num.value = '';
        btnresetar.style.opacity = '0';
    }else {
        res.innerHTML = 'Preparando a contagem...';
        ini.value = '';
        fim.value = '';
        passo.value = '';
        btnresetar.style.opacity = '0';
    }
}

function escolher() {
    if(escolheu.checked) {
        document.body.style.backgroundColor = '#3d6dff';
        titlecontador.style.opacity = 0.5;
        titletabuada.style.opacity = 1;
        containertabuada.style.display = 'flex';
        containertabuada.style.opacity = '1';
        containercontador.style.display = 'none';
        containercontador.style.opacity = '0';
        btncontar.style.display = 'none';
        res.style.width = '40%';
        res.innerHTML = `Vamos Calcular...`;
    }else {
        document.body.style.backgroundColor = '#0daf9a';
        titlecontador.style.opacity = 1;
        titletabuada.style.opacity = 0.5;
        containertabuada.style.display = 'none';
        containertabuada.style.opacity = '0';
        containercontador.style.display = 'flex';
        containercontador.style.opacity = '1';
        btncontar.style.display = 'block';
        res.style.width = '80%';
        res.innerHTML = 'Preparando a contagem...';
    }
}

function tabuada() {
    if(num.value.length == 0 ) {
        alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        let c = 1;
        res.innerHTML = `A tabuada de ${n} é: \n`;
        while(c<=10) {
            res.innerHTML += `${n} x ${c} = ${n*c} \n`;
            c++;
        }
        btnresetar.style.opacity = '1';
    }
}