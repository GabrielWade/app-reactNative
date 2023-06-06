# ⚛️ React Native: Meu primeiro app

Este projeto foi realizado com base no meu aprendizado na disciplina de Desenvolvimento Android - Construindo seu Primeiro Aplicativo, durante o meu curso na faculdade.

## 📱 Projeto

Este projeto tem como objetivo principal fornecer aos usuários um aplicativo onde eles possam escanear o código de barras de um produto específico e receber informações sobre a forma correta de descartá-lo. Ao abrir o aplicativo, os usuários terão a opção de escanear o código de barras do produto usando a câmera do seu dispositivo. Após a leitura bem-sucedida, o aplicativo exibirá uma tela com as instruções de descarte adequadas para aquele produto em particular. Essas informações podem incluir orientações sobre a reciclagem, descarte em lixo comum ou encaminhamento para pontos de coleta especializados. O objetivo final é promover a conscientização ambiental e ajudar os usuários a tomarem decisões mais sustentáveis em relação ao descarte de produtos.
<img src="./assets/barcode1.png" width="350" />
<img src="./assets/barcode2.png" width="350" />
Devido à minha falta de conhecimento em API e banco de dados, atualmente o aplicativo suporta apenas a leitura dos seguintes códigos de barras:
<img src="./assets/app1.png" width="350" />
<img src="./assets/app2.png" width="350" />
<img src="./assets/app3.png" width="350" />
## 🧑‍💻 Técnicas e Tecnologias

As técnicas e tecnologias utilizadas no projeto são:

- `Expo`: tecnologia para simplificar o ambiente de desenvolvimento
- `Componentes React Native`: componentes já existentes básicos da tecnologia para compor a tela
  - `Text`: componente para exibir textos
  - `View`: container para blocos de componentes
  - `ScrollView`: container para blocos de componentes com barra de rolagem
  - `Image`: componente para exibir imagens
  - `TouchableOpacity`: componente para criar áreas clicáveis
- `Componentes customizados`: criação e utilização de componentes customizados
- `Suporte a telas`: não permitir que conteúdos estejam sob a *StatusBar* (barra superior nativa) ou barra de gestos do iPhone
- `Expo Google Fonts`: suporte a fontes do google via Expo
- `StyleSheet`: estilização básica de componentes
- `Dimensions`: captura de dados das dimenções da tela
- `Expo BarCodeScanner`: coletar permissões do usuário e ler bar code

## 📲 Executando o projeto

### ✔️ Pré-requisitos

Para conseguir seguir este README e rodar o projeto você pode precisar dos seguintes itens:
- Git para clonar o projeto e acessar as branches. Você pode instalar [aqui](https://git-scm.com/downloads);
- Node para podermos rodar `expo` e `npm`. Você pode instala-lo [aqui](https://nodejs.org/en/);
- Um celular Android ou iOS com o aplicativo Expo instalado, ou então algum simulador Android ou iOS no computador;

Se quiser testar as instalações, rodar os comandos abaixo separadamente deve mostrar as respectivas versões.

```
git --version
node --version
npm --version
```

Então com o `npm` instalado podemos instalar o `expo` e checar a versão:
```
npm install --global expo-cli
expo --version
```

### 🐙 Clonando o projeto

Para ter acesso aos arquivos do projeto você pode clonar usando o seguinte comando:

```
git clone https://github.com/GabrielWade/app-reactNative.git
```

### ▶️ Rodando o Projeto

Agora que já tem a pasta do projeto na sua máquina, dentro dela instale as dependências:
```
npm install
```

Então podemos rodar o projeto:
```
npm start
```

Uma guia no navegador irá abrir, geralmente [neste endereço](http://localhost:19002/).
Caso estiver com o celular, **escaneie o QR code com o aplicativo do Expo** ou a câmera.
Se seu celular estiver em outra rede diferente do computador, troque a "CONNECTION" para "Tunnel", que o app será transmitido via internet.
Se tiver um simulador, clique na opção do sistema operacional do seu simulador no menu esquerdo.

Pronto, agora o app você deve ver o app rodando.
