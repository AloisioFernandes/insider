# Previsão do Tempo
Projeto realizado durante o Evento React Native Insider 10/03/2021 - 13/03/2021 por Sujeito Programador. O aplicativo é utilizado para realizar a previsão do tempo de acordo com a localização do usuário. Ao abrir o aplicativo, será pedida autorização para obter a localização do usuário. Se o usuário permitir, o aplicativo fará uma requisição utilizando a api da [HG Weather](https://console.hgbrasil.com/documentation/weather). Assim que os dados são recebidos, o aplicativo exibirá informações como: clima e temperatura média atual, velocidade do vento, horários em que o sol nasce e se põe, umidade do ar e previsões de temperaturas máximas e mínimas para os próximos 10 dias. O usuário também pode pesquisar o clima de outras cidades. São permitidas 10 pesquisas por dia. 

# Splash Screen e Tela Inicial
<p align="center">
  <img align="center" src="../github/Tempo Splash.png" alt="Tempo Splash" width="275" border="0">
  <img align="center" src="../github/Tempo Home Day.png" alt="Tempo Home Day" width="275" border="0">
  <img align="center" src="../github/Tempo Home Night.png" alt="Tempo Home Night" width="275" border="0">
</p>

# Tela de Pesquisa
<p align="center">
  <img align="center" src="../github/Tempo Search.png" alt="Tempo Search" width="275" border="0">
  <img align="center" src="../github/Tempo Result.png" alt="Tempo Result" width="275" border="0">
  <img align="center" src="../github/Tempo Error.png" alt="Tempo Error" width="275" border="0">
</p>

# Menu Drawer
<p align="center">
  <img align="center" src="../github/Tempo Drawer.png" alt="Tempo Drawer" width="275" border="0">
</p>

# Funcionalidades
 - Previsão do tempo
 - Busca de previsão por cidade

# Utilizar projeto
## Requisitos
    Instalar o Git
    https://git-scm.com/downloads

    Instalar o NodeJs
    https://nodejs.org/en/

    Instalar o Expo
    https://docs.expo.io/get-started/installation/
# Primeiro passo - baixar o projeto
Faça download do repositório acima ou use o seguinte comando na pasta onde deseja baixar o projeto:
 - git clone https://github.com/AloisioFernandes/insider.git

## Segundo passo - instalar dependências
Digite o seguinte comando dentro da pasta tempo através do terminal:
 - npm install

## Terceiro passo - iniciar projeto
Ainda na pasta tempo, digite o seguinte comando no terminal:
 - expo start

Ao executar esse comando, uma página abrirá no seu navegador web. Utilize o aplicativo do expo para abrir o app através do QRCode da página.
# Principais Tecnologias
 - [ReactNative](https://reactnative.dev/)
 - [Expo](https://docs.expo.io/)
 - [Axios](https://github.com/axios/axios)