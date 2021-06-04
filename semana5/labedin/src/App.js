import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImgCard from './img/sidney.jpg';
import CardPequeno from './components/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImgCard}
          nome="Sidney Souza" 
          descricao="Oi, eu sou Sidney estudante da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div> 
      <div className="page-section-container">
        <h2> Contato </h2>
         <CardPequeno
          email="Email:sdy.souza@"
        />
         <CardPequeno
          endereco="Endereço: rua Arara 440"
        />

      </div>

     <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImgCard}
          nome="Logística" 
          descricao="Formado em Logística !" 
        />
        
        <CardGrande 
          imagem={ImgCard}
          nome="Americanas.com" 
          descricao="Operador Logístico." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
