function somar(){

    let nome = window.document.getElementById('nome').value

    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.getElementById('txtn2')
    let tn3 = window.document.getElementById('txtn3')
    let res = window.document.getElementById('res')
 

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let n3 = Number(tn3.value)
    let s = (n1 + n2 + n3)/3
    res.innerHTML = s

    if(s >= 6){
        res.innerHTML = `Aprovado ${nome}! Sua nota é: ${s.toFixed(1)}`
    }
    else{
        res.innerHTML = `SeFodeu ${nome}! Sua nota é: ${s.toFixed(1)}`
    }
}

