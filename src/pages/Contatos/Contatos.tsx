import "./Contato.css"
import React from "react";

export const Contatos = () => {
    return (
        <div>
           <h1>Seja um fã patrocinador</h1>
            <form className="form">
                
                <fieldset>
                    <legend>Informações sobre você</legend>
                    <label>Telefone:</label>
                    <input type="text" placeholder="+00 00000-0000" />
                    <br></br>
                    <label>CPF:</label>
                    <input type="text" placeholder="123.456.789-09." />
                    <br></br>
                    <label>RG:</label>
                    <input type="text" placeholder="12.345.678-09" />
                    <br></br>
                    <label>E-mail:</label>
                    <input type="text" placeholder="user@gmail.com" />
                </fieldset>
            </form>
        </div>
    );
}