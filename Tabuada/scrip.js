function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
if (num.value.length == 0) {                               // Vazio
    window.alert('Digite um numero valido')
} else {
   let n = Number(num.value)                            // convertendo string em numero
   let c = 1                                           // Contador de um em um...
   tab.innerHTML = ''                                 // Aqui limpa a tela antes de fazer outro.
   while (c <= 10) {
       let item = document.createElement('option')      // criamos a variavel "item" para trabalhar com o option
       item.text = `${n} x ${c} = ${n*c}`              // Parte de dentro do option
       item.value = `tab${c}`                         // Parte para ver a seleção
       tab.appendChild(item)                          // "appendChild" Adicionar um elemento filho
       c++                                            // Conta sempre somado por ele mesmo 
   }
}
    
}