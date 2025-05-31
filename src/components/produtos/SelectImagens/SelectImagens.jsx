import { useState } from 'react';
import { useParams } from 'react-router-dom';
import estilos from './SelectImagens.module.css';

import { vetCatalogo } from '../../../data/products';
import { TfiClose } from "react-icons/tfi";
import PaginaNaoEncontrada from '../../../pages/NaoEncontrada/NaoEncontrada';


function SelectImagem({ imagens }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const { id, modelo, marca } = useParams();
  const [imagemSelecionada, setImagemSelecionada] = useState(0);

  const item = vetCatalogo.find(p =>
    p.id === id &&
    p.modelo.toLowerCase() === modelo &&
    p.marca.toLowerCase() === marca
  ); if (!item) return <PaginaNaoEncontrada />;

  return (
    <>
      <div className={estilos.imagensContainer}>
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
          <img src={imagens[imagemSelecionada]} alt="Imagem principal do produto" onClick={() => setMostrarModal(true)} />
        </div>
      </div>
      {
        mostrarModal && (
          <div className={estilos.modalOverlay} onClick={() => setMostrarModal(false)}>
            <div className={estilos.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={estilos.modalGaleria}>

                <img className={estilos.modalImagem} src={imagens[imagemSelecionada]} alt={item.nome} />
              </div>
            </div>
            <button className={estilos.botaoFechar} onClick={() => setMostrarModal(false)}><TfiClose /></button>
          </div>
        )
      }
    </>
  );
}

export default SelectImagem;