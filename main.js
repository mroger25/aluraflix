let urlCapaMusicaLista = [
  "https://i.ytimg.com/vi/5NV6Rdv1a3I/hq720.jpg",
  "https://i.ytimg.com/vi/nlcIKh6sBtc/hq720.jpg",
  "https://i.ytimg.com/vi/IcrbM1l_BoI/hq720.jpg",
];

let tituloCapaMusicaLista = [
  "Daft Punk - Get Lucky ft. Pharrell Williams, Nile Rodgers",
  "Lorde - Royals",
  "Avicii - Wake Me Up",
];

let urlCapaMusicaListaTamanho = urlCapaMusicaLista.length;
for (let i = 0; i < urlCapaMusicaListaTamanho; i++) {
  // elementos
  const imgElement = document.createElement("img");
  const divElement = document.getElementsByClassName("crop")[i];
  // atributos
  const titleVideo = tituloCapaMusicaLista[i];
  const srcVideo = urlCapaMusicaLista[i];

  // configurando atributos
  imgElement.setAttribute("src", srcVideo);
  imgElement.setAttribute("title", titleVideo);

  // adicionando elemento
  divElement.appendChild(imgElement);
}
