const registro_cpf = 'https://raw.githubusercontent.com/TavinV/registro-cpfs/main/dados.json'

const nome = document.getElementById('nome')
const altura = document.getElementById('altura')
const idade = document.getElementById('idade')
const peso = document.getElementById('peso')
const posicao = document.getElementById('posicao')

const historico = document.getElementById('historico')

const botao_buscar = document.getElementById('botao-buscar')
const barra_busca = document.getElementById('barra-busca')

var cpfs_registrados = []

// Carregando os cpf's que foram registrados

fetch(registro_cpf).then(resposta => resposta.json()).then(dados =>{
    cpfs_registrados = dados
    console.log("✅ Dados carregados com sucesso")
    console.log(cpfs_registrados)
})

function procurar_cpf(cpf_para_buscar){
    cpf_para_buscar = cpf_para_buscar.replace(/[^\d]/g, '') // Removendo os . e -
    
    resposta = false

    cpfs_registrados.time_volei.forEach(jogador => {
        cpf_jogador = jogador.cpf.replace(/[^\d]/g, '')

        if (cpf_para_buscar == cpf_jogador){
            resposta = jogador
        }
    });

    return resposta
}

function registrar_historico(texto){
    const template = document.createElement("template")
    template.innerHTML = `<li>${texto}</li>`
    historico.append(template.content.firstElementChild)
   
}

botao_buscar.addEventListener('click', ()=>{
    valor_buscar = barra_busca.value.trim()
    registrar_historico(valor_buscar)
    
    resposta = procurar_cpf(valor_buscar)

    if (resposta) {
        nome.innerText = resposta.nome
        altura.innerText = resposta.altura
        idade.innerText = resposta.idade
        peso.innerText = resposta.peso
        posicao.innerText = resposta.posicao
    } else {
        nome.innerText = '--'
        altura.innerText = '--'
        idade.innerText = '--'
        peso.innerText = '--'
        posicao.innerText = '--'
    }
})