const inputFile = document.querySelector('#picture__input');
const pictureImage = document.querySelector('.picture__image');
const linkText = document.querySelector('#link')
var btnPublicar = document.getElementById('publicar')
var botaoCriarCartao = document.getElementById('criarCartao')

var btnHome = document.getElementById("home")
var btnArtigos = document.getElementById("artigos")
var btnDocumentos = document.getElementById("documentos")
var btnSlides = document.getElementById("slides")
var btnExercicios = document.getElementById("exercicios")

let imagemURL;
let tipoDeDocumento; 

document.getElementById('picture__input').addEventListener('change', function (event) {
    const file = event.target.files[0]; 

    if (file) {
        const objectURL = URL.createObjectURL(file); 
        imagemURL = objectURL; 
    }
});





var div = document.getElementById("abaPublicar").hidden;
btnPublicar.addEventListener("click", function(){
    var div = document.getElementById("abaPublicar").hidden;
    console.log(div)

    if (div === true) {
        
        document.getElementById("abaPublicar").hidden = false
        ocultarElementos("cards", "abaArtigo", "abaDocumentos", "abaSlides", "abaExercicios");
    }
});



btnHome.addEventListener("click", function(){
    document.getElementById("cards").hidden = false;
    ocultarElementos("abaPublicar", "abaArtigo", "abaDocumentos", "abaSlides", "abaExercicios");
})

btnArtigos.addEventListener("click", function(){
    document.getElementById("abaArtigo").hidden = false
    ocultarElementos("abaPublicar", "cards", "abaDocumentos", "abaSlides", "abaExercicios");
    coletarEAdicionarElementos("adicionaArtigo",'Artigo')

})

btnDocumentos.addEventListener("click", function(){
    document.getElementById("abaDocumentos").hidden = false
    ocultarElementos("abaPublicar", "cards", "abaArtigo", "abaSlides", "abaExercicios");
    coletarEAdicionarElementos("adicionaDocumento","Documento")
})

btnSlides.addEventListener("click", function(){
    document.getElementById("abaSlides").hidden = false
    ocultarElementos("abaPublicar", "cards", "abaArtigo", "abaDocumentos", "abaExercicios");
    coletarEAdicionarElementos("adicionaSlide","Slide")
})

btnExercicios.addEventListener("click", function(){
    document.getElementById("abaExercicios").hidden = false
    ocultarElementos("abaPublicar", "cards", "abaArtigo", "abaDocumentos", "abaSlides");
    coletarEAdicionarElementos("adicionaExercicio","Exercício")
})

const ativar=(elemento)=>{
    let itens=document.getElementsByClassName("select")
    for(i=0;i<itens.length;i++){
        itens[i].classList.remove("active");
    }
    elemento.classList.add("active")
}

const ativarAba=(elemento)=>{
    let itens=document.getElementsByClassName("aba")
    for(i=0;i<itens.length;i++){
        itens[i].classList.remove("active");
    }
    elemento.classList.add("active")
}

function ocultarElementos(...elementIds) {
  elementIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.hidden = true;
    }
  });
}


document.getElementById("selectArtigo").addEventListener("click",function(){
    tipoDeDocumento = 'Artigo'

})

document.getElementById("selectDocumento").addEventListener("click",function(){
    tipoDeDocumento = 'Documento'
})

document.getElementById("selectSlide").addEventListener("click",function(){
    tipoDeDocumento = 'Slide'
})

document.getElementById("selectExercicio").addEventListener("click",function(){
    tipoDeDocumento = 'Exercício'
})

inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();
    
        reader.addEventListener("load", function (e) {
          const readerTarget = e.target;
    
          const img = document.createElement("img");
          img.src = readerTarget.result;
          img.classList.add("picture__img");
    
          pictureImage.innerHTML = "";
          pictureImage.appendChild(img);
        });
    
        reader.readAsDataURL(file);
      } else {
        pictureImage.innerHTML = pictureImageTxt;
      }
    });


    function criarCardComLink(titulo, imagemSrc, paragrafo, link) {
        
        var cardDiv = document.createElement('div');
        cardDiv.className = 'card mb-3';
      
        
        var img = document.createElement('img');
        img.src = imagemSrc;
        img.className = 'card-img-top';
        img.alt = '...';
        img.style = 'height:20vh; object-fit: cover;';
      
        
        var cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';
      
        
        var cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = titulo;
      
        
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = paragrafo;
      
        
        var buttonDiv = document.createElement('div');
        buttonDiv.className = 'd-grid gap-2 d-md-flex justify-content-md-end';
      
        
        var downloadButton = document.createElement('button');
        downloadButton.className = 'btn btn-dark me-md-2';
      
        
        var linkElement = document.createElement('a');
        linkElement.target = "_blank"
        linkElement.className = "nav-link"
        linkElement.href = link;
        linkElement.textContent = 'Download';
      
        
        downloadButton.appendChild(linkElement);
      
        
        buttonDiv.appendChild(downloadButton);
      
        
        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);
        cardBodyDiv.appendChild(buttonDiv);
      
        
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);
      
       
        return cardDiv;
      }


    

      function criarCartao() {
        var titulo = document.getElementById('titulo').value;
        var paragrafo = tipoDeDocumento;
        var link = document.getElementById('link').value; 

        if (titulo =="" || paragrafo == "" || link ==""){
            document.getElementById('alert_publication').hidden = false;
            return false
        }else{
            document.getElementById('alert_publication').hidden = true;
        }
      
        var cardElement = criarCardComLink(titulo, imagemURL, paragrafo, link);
        var container = document.getElementById('cards');
        container.appendChild(cardElement);

        document.getElementById('titulo').value = "";
        document.getElementById('link').value = "";
        return true
      }
      
      
      var botaoCriarCartao = document.getElementById('criarCartao');
      botaoCriarCartao.addEventListener('click',  function(){
        result = criarCartao();

        if (result){
            document.getElementById("abaPublicar").hidden = true;
            document.getElementById("cards").hidden = false;
            
        }
    } );




  


    function coletarEAdicionarElementos(aba,topico) {
            
            const destino = document.getElementById(aba);

            const filhosDestino = destino.children;
            for (let i = filhosDestino.length - 1; i >= 0; i--) {
                if (!filhosDestino[i].classList.contains('dropdown')) {
                    destino.removeChild(filhosDestino[i]);
                }
            }

           
            const divsArtigo = document.querySelectorAll('.card.mb-3');

            divsArtigo.forEach(div => {
                
                const paragrafos = div.querySelectorAll('p');
                let contemArtigo = false;

                paragrafos.forEach(paragrafo => {
                    if (paragrafo.textContent.includes(topico)) {
                        contemArtigo = true;
                    }
                });

                if (contemArtigo) {
                    
                    const divClonada = div.cloneNode(true);

                    
                    destino.appendChild(divClonada);
                }
            });
        }
  