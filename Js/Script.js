const key = "a440a32866e8098a47a9687b6d396a45";

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML =  dados.name;
    document.querySelector(".C").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".tempo-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
    document.querySelector(".img-previsao").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

}


async function buscarCidade(cidade) {
    
    const dados = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    colocarDadosNaTela(dados);
}

function acionarBusca() {
    const cidade = document.querySelector(".busca").value;
    buscarCidade(cidade);
}