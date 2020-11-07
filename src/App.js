import React, { useState } from 'react';

import './App.css';
import backgroundImg from './assets/background.jpg';

import Header from './components/Header';

/**
 *** Conceitos React
 - Componente
 - Propriedade
 - Estado e Imutabilidade
 */

function App() {
    const [projetos, setProjetos] = useState(['Desenvolvimento de App', 'Front end web']);

    // useState retorna um array com 2 posicoes
    // variavel de projetos com seu valor inicial
    // segundo param eh uma funcao para atualizar o valor

    function handleAddProject() {
        setProjetos([...projetos, `Novo projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Projects" />

            <img width={300} src={backgroundImg} />
            <ul>
                {projetos.map(p => <li key={p}>{p}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>AdicionarProjeto</button>
        </>
    );    
}

export default App;