/* eslint-disable jsx-a11y/anchor-is-valid */
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ListaClientes(props) {
    const estilo = `collection-item active purple accent-2${props.tema}`
        useEffect(() => { 
                M.AutoInit()
        }, [])

    return (

    <div className="containerCli nomeCli ">

        <h2>Listagem de Clientes</h2>

        <div className="input-field col s12 opcoes">
        <select>
        <option value="" disabled>Listar clientes por genero</option>
            <option value="1">Todos</option>
            <option value="2">Masculino</option>
            <option value="3">Feminino</option>
            <option value="4">Não Informado</option>
        </select>
    </div>


        <div className="collection home">
        <Link to ={'/Cliente'} className="collection-item pointer">Érick Awata</Link>
                    <Link to ={'/Cliente'} className="collection-item pointer">Mariana Ribeiro</Link>
                    <Link to ={'/Cliente'} className="collection-item pointer">Pedro Kajiya</Link>
                    <Link to ={'/Cliente'} className="collection-item pointer">Ryan Seiji</Link>
                    <Link to ={'/Cliente'} className="collection-item pointer">Mateus Madeira</Link>
                    <Link to ={'/Cliente'} className="collection-item pointer">Enzo Sidney</Link>
                    <Link to ={'/Cliente'} className="collection-item pointer">Maria Eduarda</Link>
                    <Link to ={'/Cliente'} className="collection-item pointer">Abner Douglas</Link>
                    <Link to ={'/Cliente'} className="collection-item pointer">Bruno Silvério</Link>
                    <Link to ={'/Cliente'} className="collection-item pointer">Sandro Pimentel</Link>
                    <Link to ={'/Cliente'} className="collection-item pointer">Julia Gonzalez</Link>
        </div>
    </div>
    )
}