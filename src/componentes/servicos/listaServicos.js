import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../servicos/cadastroServicos.css'
import { useEffect } from 'react';
import M from 'materialize-css'
import { Link } from "react-router-dom";


export default function ListaServicos(props){
    let estilo = `collection-item active purple accent-2 ${props.tema}`

    useEffect(() => { 
        M.AutoInit()
    }, [])

        return (
            <div className="containerServ">
                <h2>Listagem dos Serviços</h2>
                <div className="collection home">
                    <Link to = {'/Servico'} className="collection-item">Serviços 1</Link>
                    <Link to = {'/Servico'} className="collection-item">Serviços 2</Link>
                    <Link to = {'/Servico'} className="collection-item">Serviços 3</Link>
                    <Link to = {'/Servico'} className="collection-item">Serviços 4</Link>
                </div>
            </div>
        )
}