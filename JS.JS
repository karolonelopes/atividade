// function somar() {
//     let n1 = Number(window.prompt('digite um número:'))
//     let n2 = Number(window.prompt('digite outro número:'))
//     // let n3 = Number(window.prompt('digite outro número:'))
//     // let n4 = Number(window.prompt('digite outro número:'))
    

//     let res= document.querySelector('section#res')
//     res.innerHTML= `<span>  A soma entre ${n1} e ${n2}
//     é igual a ${n1 + n2} </span>`
// }
// function menos() {
//     let n1 = Number(window.prompt('digite um número:'))
//     let n2 = Number(window.prompt('digite outro número:'))

//     let res= document.querySelector('section#res')
//     res.innerHTML= `<span> menos entre ${n1} e ${n2}
//     é igual a ${n1 - n2} </span>`
// }
// function dividir() {
//     let n1 = Number(window.prompt('digite um número:'))
//     let n2 = Number(window.prompt('digite outro número:'))

//     let res= document.querySelector('section#res')
//     res.innerHTML= `<span> dividir entre ${n1} e ${n2}
//     é igual a ${n1 / n2} </span>`
// }
// function multiplicar () {
//     let n1 = Number(window.prompt('digite um número:'))
//     let n2 = Number(window.prompt('digite outro número:'))

//     let res= document.querySelector('section#res')
//     res.innerHTML= `<span> multiplicar entre ${n1} e ${n2}
//     é igual a ${n1 . n2} </span>`
// }
function media() {
    let nome = window.prompt("qual o seu Nome?")
    let n1 = Number(window.prompt('Digite a primeira nota:'))
    let n2 = Number(window.prompt('Digite a outra primeira nota'))
    
    med = (n1 + n2) / 2

    let msg
    
    if(med >=5) {
        msg = 'Aprovado'               
    }else{
        msg = 'Reprovado'
    }

    let res = document.getElementById('situacao')
    res.innerHTML = `olá, ${nome}! sua média foi ${med}!`
    res.innerHTML = `<p> A mensagem que temos é:
    <h1 style="color: red">${msg}</h1></p>` 


    let res = document.getElemenById('situacao')
    res.innerHTML = `olá,${nome}! Sua média foi ${med}!`
}

