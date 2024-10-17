//FAZ REFERENCIA AOS ELEMENTOS DOM
const numero1 = document.querySelector("#numero1")
const numero2 = document.querySelector("#numero2")
const btnCalcular = document.querySelector("#btn-calcular")
const resultado = document.querySelector(".resultado")
const adicao = document.querySelector(".adicao")
const subtracao = document.querySelector(".subtracao")
const multiplicacao = document.querySelector(".multiplicacao")
const divisao = document.querySelector(".divisao")

//CRIA A FUNÇÃO CALCULAR
function calcular() {
    const n1 = Number(numero1.value)
    const n2 = Number(numero2.value)

    if(typeof n1 === 'number' 
        && typeof n2 === 'number') {

            const add = `Adição: ${n1+n2}`
            //alert(add)
            adicao.innerHTML = add

            const sub = `Subtração: ${n1-n2}`
            subtracao.innerHTML = sub

            const mult = `Multiplicação: ${n1*n2}`
            multiplicacao.innerHTML = mult

            const div = `Divisão: ${n1/n2}`
            divisao.innerHTML = div

        } else {
            alert('Por favor, digite um numero correto')
        }

    
   //alert("resultado:" + resultado)
}

//ADICIONA ESCUTAR DE EVENTOS 
btnCalcular.addEventListener('click',function(evento){
    evento.preventDefault()//tirar o comportamento padrao
    calcular()
})
