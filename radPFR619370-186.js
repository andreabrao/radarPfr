const codRadar = ("radPFR619370-186")
//On 1 off 0
const statusRadar = "1"
console.log(codRadar)


const rodoviaBR = ("BR-186")
const sentido = ("Curitiba/Guaratuba PR")
const codMulta = Math.random().toString(36).slice(3)

//••• VELOCIDADE PERMITIDA •••//
const velocidadePermitida = 60

//••• VELOCIDADE ALCANÇADA •••//
const velocidadeAlcancada = (Math.floor(Math.random() * 230))
const placaVeicular =  Math.random().toString(36).slice(4)
const ruidoDoVeiculo = (Math.floor(Math.random() * 100))

if(statusRadar  == 0) {
  console.log("Radar desativado")
  }else {
    if(velocidadeAlcancada > velocidadePermitida) {
  const pontos = Math.floor((velocidadeAlcancada - 60) / 5)
  console.log(`A velocidade do veículo de placa ${placaVeicular} foi de ${velocidadeAlcancada}km/h num trecho de ${velocidadePermitida}km/h`)
  console.log(`O veículo com placa ${placaVeicular} foi multado com ${pontos} pontos na carteira pôr ter ultrapassado a velocidade máxima permitida de ${velocidadePermitida}km/h na ${rodoviaBR} sentido ${sentido}, recomendamos resolver a questão da multa com o setor de visualizações da PFR códMulta:${codMulta}`)
  if(pontos >= 12) {
    console.log("Carteira Suspensa")
  }
}else {
  console.log(`A velocidade do veículo de placa ${placaVeicular} foi de ${velocidadeAlcancada}km/h num trecho de ${velocidadePermitida}km/h está dentro do permitido`)
}

//MULTA PÔR RUÍDOS R$195,23 E CINCO PONTOS NA CARTEIRA//
const ruidoVeicularPermitido = "70"
if(ruidoDoVeiculo > ruidoVeicularPermitido) {
  console.log(`O veículo de placa ${placaVeicular} foi multado em R$195,25 e 5 pontos na carteira pôr ter ultrapassado os ${ruidoVeicularPermitido}db o veículo emitiu um ruído de ${ruidoDoVeiculo}db, recomendamos resolver a questão da multa com o setor de visualizações da PFR códMulta:${codMulta}`)
}else {
  console.log(`O veículo de placa ${placaVeicular} obteve ${ruidoDoVeiculo}db, o máximo é ${ruidoVeicularPermitido}db na ${rodoviaBR} sentido ${sentido} está dentro do permitido`)
}
  }