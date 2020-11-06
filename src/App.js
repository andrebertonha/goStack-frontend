import React from 'react';

import Header from './components/Header';

/**
 *** Conceitos React
 - Componente
 - Propriedade
 - Estado

 */

function App() {
    return (
        <>
            <Header title="Testando">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>;
            <Header title="Desestruturação">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Login</li>
                </ul>
            </Header>;
        </>        
    );    
}

export default App;