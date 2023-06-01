let semenas = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
let mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']



function dat(params) {
    
    let semanas = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
    let mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']



    let datas = new Date()
    var horas = datas.getHours() 
    var minutos = datas.getMinutes()
    var diasem = datas.getDay()
    var dia = datas.getDate()
    var mes1 = datas.getMonth()
    var ano = datas.getFullYear()
    let n1 = `Hoje é ${semanas[diasem]} dia ${dia}, de ${mes[mes1]} de ${ano}`
    let hor = `São exatamente ${horas} e ${minutos} minutos!`
    let res = document.getElementById('res')
    res.innerText = n1 
    let res2 = document.getElementById('res2')
    res2.innerText = hor
    
}
function mostrarbotao() {
    var res = document.getElementById('res')
    var botao1 = document.getElementById('jan')
    botao1.style.display = "block"
}

function jane() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/Jan.png'
    res.innerHTML = ''
    res.appendChild(foto)
}
function feve() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = ''
    res.innerHTML = ''
    res.appendChild(foto)
}
function marc() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = ''
    res.innerHTML = ''
    res.appendChild(foto)
}
function abri() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/'
    res.innerHTML = ''
    res.appendChild(foto)
}
function maio() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/'
    res.innerHTML = ''
    res.appendChild(foto)
}
function junh() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/'
    res.innerHTML = ''
    res.appendChild(foto)
}
function julh() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/'
    res.innerHTML = ''
    res.appendChild(foto)
}
function agos() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/'
    res.innerHTML = ''
    res.appendChild(foto)
}
function sete() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/'
    res.innerHTML = ''
    res.appendChild(foto)
}
function outr() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/'
    res.innerHTML = ''
    res.appendChild(foto)
}
function nove() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/'
    res.innerHTML = ''
    res.appendChild(foto)
}
function deze() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/'
    res.innerHTML = ''
    res.appendChild(foto)
}