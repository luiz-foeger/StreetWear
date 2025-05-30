import estilos from './Loading.module.css';

function Loading() {
  return (
    <div className={estilos.loaderContainer}>
      <div className={estilos.loader}></div>
    </div>
  );
}

export default Loading;
