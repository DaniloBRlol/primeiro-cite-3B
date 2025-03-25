DocumentTimeline.addEventListener('DOMContentLoaded',function () {                     
const aumentaFonteBotao = document.getElemenByid ('aumentar fonte');
const diminuirFonteBotao = document.getElemenByid ('diminuir fonte');

let tamanhoAtualFonte = 1;
aumentaFonteBotao.addEventListener('click',function () {
      tamanhoAtualFonte+= 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

});


diminuirFonteBotao.addEventListener('click',function () {
      tamanhoAtualFonte+= 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
});

})