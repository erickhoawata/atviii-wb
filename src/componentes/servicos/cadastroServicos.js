import 'materialize-css/dist/css/materialize.min.css'
import '../servicos/cadastroServicos.css'

export default function CadastroServicos(){
        return (
            <div className="containerServ">
                <div className="row ">
                <h4>Cadastro de Serviço</h4>
                    <form className="col s12 formServ">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="nomeServ" type="text" className="validate" />
                                <label htmlFor="nomeServ">Nome do Serviços</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="descricaoServ" type="text" className="validate" />
                                <label htmlFor="descricaoServ">Descrição do serviço</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="valorServ" type="text" className="validate" />
                                <label htmlFor="valorServ">Valor do Serviço</label>
                            </div>                                                    
                        </div>
                                                                            
                        <div className="row">
                            <div className="col s12 center">
                            <button className="btn waves-effect waves-light purple accent-2" type="submit" >Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
}