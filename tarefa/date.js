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
    let hor = `São exatamente ${horas} horas e ${minutos} minutos!`
    let res = document.getElementById('res')
    res.innerText = n1 
    let res2 = document.getElementById('res2')
    res2.innerText = hor
    
}
function mostrarbotao() {

    var botao1 = document.getElementById('jan')
    botao1.style.display = "block"
    var botao2 = document.getElementById('fev')
    botao2.style.display = "block"
    var botao2 = document.getElementById('mar')
    botao2.style.display = "block"
    var botao2 = document.getElementById('abr')
    botao2.style.display = "block"
    var botao2 = document.getElementById('mai')
    botao2.style.display = "block"
    var botao2 = document.getElementById('jun')
    botao2.style.display = "block"
    var botao2 = document.getElementById('jul')
    botao2.style.display = "block"
    var botao2 = document.getElementById('ago')
    botao2.style.display = "block"
    var botao2 = document.getElementById('set')
    botao2.style.display = "block"
    var botao2 = document.getElementById('out')
    botao2.style.display = "block"
    var botao2 = document.getElementById('nov')
    botao2.style.display = "block"
    var botao2 = document.getElementById('dez')
    botao2.style.display = "block"
}


function jane() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/fotos/Jan.png'
    res.innerHTML = ''
    res.appendChild(foto)
    var secao = document.getElementById('s2')
    secao.style.background = 'red'
}
function feve() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/fotos/fev.png'
    res.innerHTML = ''
    res.appendChild(foto)
    var secao = document.getElementById('s2')
    secao.style.background = 'blue'
}
function marc() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/fotos/mar.png'
    res.innerHTML = ''
    res.appendChild(foto)
    var secao = document.getElementById('s2')
    secao.style.background = 'yellow'
}
function abri() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/fotos/abr.png'
    res.innerHTML = ''
    res.appendChild(foto)
    var secao = document.getElementById('s2')
    secao.style.background = 'purple'
}
function maio() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/fotos/mai.png'
    res.innerHTML = ''
    res.appendChild(foto)
    var secao = document.getElementById('s2')
    secao.style.background = 'orange'
}
function junh() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/fotos/jun.png'
    res.innerHTML = ''
    res.appendChild(foto)
    var secao = document.getElementById('s2')
    secao.style.background = 'pink'
}
function julh() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/fotos/jul.png'
    res.innerHTML = ''
    res.appendChild(foto)
    var secao = document.getElementById('s2')
    secao.style.background = 'black'
}
function agos() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/fotos/ago.png'
    res.innerHTML = ''
    res.appendChild(foto)
    var secao = document.getElementById('s2')
    secao.style.background = 'gray'
}
function sete() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/fotos/set.png'
    res.innerHTML = ''
    res.appendChild(foto)
    var secao = document.getElementById('s2')
    secao.style.background = 'salmon'
}
function outr() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/fotos/out.png'
    res.innerHTML = ''
    res.appendChild(foto)
    var secao = document.getElementById('s2')
    secao.style.background = 'beige'
}
function nove() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/fotos/nov.png'
    res.innerHTML = ''
    res.appendChild(foto)
    var secao = document.getElementById('s2')
    secao.style.background = 'turquoise'
}
function deze() {
    var res = document.getElementById('res5')
    let foto = document.createElement('img')
    foto.src = '/tarefa/fotos/dez.png'
    res.innerHTML = ''
    res.appendChild(foto)
    var secao = document.getElementById('s2')
    secao.style.background = 'crimson'
}