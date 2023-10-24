function calcular(){
    let num = Number (window.prompt('digite um número:'))
    let res = document.querySelector('section#result')
    res.innerHTML = '<p> O número a ser analisando aqui será o<strong>${num}</strong></p>'
    res.innerHTML+= '<p>O seu valor absoluto é ${Math.trunc(num)}</p>'
    res.innerHTML+= '<p> o valor inteiro mais proximo é ${Math.round(num)}</p>'
    res.innerHTML+= '<p>A sua raiz quadrada é ${Math.sqrt(num)}</p>'
    res.innerHTML+= '<p>A sua raiz cúbica é ${Math.cbrt(num)}</p>'
    res.innerHTML+= '<p>O valor de $ {(num , 2)} <sup> 2</sup> ${Math.pow(num)}</p>'
    res.innerHTML+= '<p>O valor de $ {(num , 3)} <sup> 2</sup> ${Math.pow(num)}</p>'
}


let contador=0
let res = document.querySelector('section#result')

function contar(){
    contador ++
    res.innerHTML = '<p> contagem: ${ contador}</p>'
}
function zerar(){
    contador = 0
    res.innerHTML = null
} 

function calculo(){
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    document.querySelector('#result'). innerHTML =
    `a soma de <mark> ${a} + ${b} </mark> divido por 
    ${c} é ingual a: ${( a + b)/c}`
}
 