import 'materialize-css/dist/css/materialize.min.css';
import "../produtos/cadastroProduto.css";
import { useEffect, useState } from 'react';
import M from 'materialize-css';
import { Link, Navigate, useParams } from 'react-router-dom';

export default function RealizarPedido(){

    useEffect(() => { 
        M.AutoInit()
    }, [])

    return(
        <div className="containerPed">

            <h2>Listagem Geral dos Pedidos</h2>

            <div className="collection home">
                <Link to ={'/Pedido'} className="collection-item pointer">Pedido1</Link>
                <Link to ={'/Pedido'} className="collection-item pointer">Pedido2</Link>
                <Link to ={'/Pedido'} className="collection-item pointer">Pedido3</Link>
                <Link to ={'/Pedido'} className="collection-item pointer">Pedido4</Link>
            </div>

        </div>
    )}