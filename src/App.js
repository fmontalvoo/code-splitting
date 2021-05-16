import React, { useState, Suspense } from 'react';
import './App.css';

// Import dinamico que retorna una promesa con el componente solicitado.
const Componente = React.lazy(() => import('./Componente'));

// Obteniendo componentes bajo demanda.

function App() {

  const [showComponent, setState] = useState(false)

  const handleShowComponent = (evt) => setState(true);

  return (
    <div>
      {/* El componente `Componente` se descargara y mostrara unicamente al presionar
          el boton mostrar. Por lo tanto el archivo javascript del que depende el componente
          no sera descargado en el navegador hasta que este sea solicitados.
      */}
      <button onClick={handleShowComponent}>Mostrar componente</button>
      <br />
      <br />
      {
        showComponent
        &&
        /*
         Suspense se encarga de mostrar nuestro componente cuando este
         se termina de descargar. El prop fallback mostrara un componente
         mientras el otro componente se descarga.
        */
        <Suspense fallback={<p>Cargando...</p>}><Componente /></Suspense>
      }
    </div>
  );
}

export default App;
