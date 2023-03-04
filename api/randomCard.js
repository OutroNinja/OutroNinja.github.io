const imageLinks = [
    "link1.jpg",
    "link2.jpg",
    "link3.jpg",
    "link4.jpg",
    "link5.jpg"
  ];
  
  // função para obter um número aleatório entre 0 e o tamanho da tabela de links de imagem
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  
  // função para obter um link de imagem aleatório da tabela de links de imagem e retorná-lo como uma resposta JSON
  function getRandomImageLink() {
    const randomNumber = getRandomNumber(imageLinks.length);
    const randomImageLink = imageLinks[randomNumber];
    const jsonResponse = { link: randomImageLink };
    return jsonResponse;
  }
  
  // função para exibir o link de imagem aleatório na página como uma resposta JSON
  function displayRandomImage() {
    const randomImageLinkElement = document.getElementById("randomImageLink");
    const jsonResponse = getRandomImageLink();
    randomImageLinkElement.textContent = JSON.stringify(jsonResponse);
  }
  
  // exibir o link de imagem aleatório na página quando ela for carregada
  window.onload = function() {
    displayRandomImage();
  };
  