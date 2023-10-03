function submeter() {
    let campoA = document.getElementById('campoA')
    let campoB = document.getElementById('campoB')
    let meuForm = document.getElementById('meuForm')
    let res = document.getElementById('res')

    const valorA = parseFloat(campoA.value)
    const valorB = parseFloat(campoB.value)

    if (isNaN(valorA) || isNaN(valorB)) {
        res.innerHTML = 'Por favor, insira valores numéricos em ambos os campos.'
    } else if (valorB > valorA) {
        res.innerHTML = 'Formulário válido! B é maior que A.'
    } else {
        res.innerHTML ='Formulário inválido. B deve ser maior que A.'
    }
    
}