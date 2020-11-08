import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

/**
 *** Conceitos React
 - Componente
 - Propriedade
 - Estado e Imutabilidade
 - useEffect disparar funcoes assim que o componente for exibido em tela
 */

function App() {
    const [projetos, setProjetos] = useState([]);

    // useState retorna um array com 2 posicoes
    // variavel de projetos com seu valor inicial
    // segundo param eh uma funcao para atualizar o valor

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjetos(response.data);
        });
    }, []);

    function handleAddProject() {
        setProjetos([...projetos, `Novo projeto ${Date.now()}`]);
    }

    return (
        <>        
            <Header title="Projects" />
            <ul>
                {
                    projetos.map(p => {                            
                            <li key={p.id}>{p.title}</li>
                        })
                }
            </ul>
            <button type="button" onClick={handleAddProject}>AdicionarProjeto</button>
        </>
    );    
}

export default App;