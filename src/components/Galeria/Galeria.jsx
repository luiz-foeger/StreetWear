import { useState } from 'react';
import estilos from './Galeria.module.css';

function GaleriaProduto({ imagens }) {
  const [imagemSelecionada, setImagemSelecionada] = useState(0);

  return (
    <div className={estilos.galeriaContainer}>
      <div className={estilos.thumbnails}>
        {imagens.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Miniatura ${index}`}
            onClick={() => setImagemSelecionada(index)}
            className={`${estilos.thumb} ${imagemSelecionada === index ? estilos.thumbSelecionada : ''}`}
          />
        ))}
      </div>

      <div className={estilos.imagemPrincipal}>
        <img src={imagens[imagemSelecionada]} alt="Imagem principal do produto" />
      </div>
    </div>
  );
}

export default GaleriaProduto;