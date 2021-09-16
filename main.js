let urlCapaMusicaLista = [
  "https://i.ytimg.com/vi/5NV6Rdv1a3I/mqdefault.jpg",
  "https://i.ytimg.com/vi/nlcIKh6sBtc/maxresdefault.jpg",
  "https://i.ytimg.com/vi/IcrbM1l_BoI/maxresdefault.jpg",
  "https://i.ytimg.com/vi/JRfuAukYTKg/hqdefault.jpg",
];

let tituloCapaMusicaLista = [
  "Daft Punk - Get Lucky ft. Pharrell Williams, Nile Rodgers",
  "Lorde - Royals",
  "Avicii - Wake Me Up",
  "David Guetta - Titanium ft. Sia",
];

let urlCapaMusicaListaTamanho = urlCapaMusicaLista.length;
for (let i = 0; i < urlCapaMusicaListaTamanho; i++) {
  // atributos
  const titleCapaMusica = tituloCapaMusicaLista[i];
  const srcCapaMusica = urlCapaMusicaLista[i];
  const idCapaMusica = "img" + i;
  const classCapaMusica = "crop";

  // criando o elemento img
  const imgElement = document.createElement("IMG");
  const divImagem = document.createElement("DIV");
  // adicionando atributos no elemento criado
  divImagem.setAttribute("class", classCapaMusica);
  divImagem.setAttribute("id", idCapaMusica);
  imgElement.setAttribute("src", srcCapaMusica);
  imgElement.setAttribute("title", titleCapaMusica);
  imgElement.setAttribute("alt", titleCapaMusica);

  // selecionando o elemento (id="catalogo") que receberá o elemento criado
  const imagens = document.getElementById("imagens");
  // inserindo o elemento criado dentro do elemento selecionado
  divImagem.appendChild(imgElement);
  imagens.appendChild(divImagem);
}
