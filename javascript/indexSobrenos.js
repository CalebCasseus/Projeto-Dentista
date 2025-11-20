let indiceSlide = 0;
mostrarSlides();

function mostrarSlides()
{
    let contador;
    let slides = document.getElementsByClassName("slides");
    let pontos = document.getElementsByClassName("pontos");
    for (contador = 0; contador < slides.length; contador++) {
        slides[contador].style.display = "none";
    }
    indiceSlide++;
    if (indiceSlide > slides.length) { indiceSlide = 1 }
    for (contador = 0; contador < pontos.length; contador++) {
        pontos[contador].className = pontos[contador].className.replace(" ativo", "");
    }
    slides[indiceSlide - 1].style.display = "block";
    pontos[indiceSlide - 1].className += " ativo";
    setTimeout(mostrarSlides, 3000); // Muda a imagem a cada 3 segundos
}