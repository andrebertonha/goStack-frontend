import React from 'react';

import Header from './components/Header';

/**
 *** Conceitos React
 - Componente
 - Propriedade
 - Estado e Imutabilidade

 */

function App() {
    const projetos = ['Desenvolvimento de App', 'Front end web']

    return (
        <>
            <Header title="Projects" />

            <ul>
                {projetos.map(p => <li key={p}>{p}</li>)}
            </ul>
        </>
    );    
}

export default App;