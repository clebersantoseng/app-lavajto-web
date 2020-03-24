import React, { useState, useEffect }from "react";
import { Link } from "react-router-dom";
import api from "../../../../services/api";

import "./style.css";

function Cliente() {
    const [clientes, setClientes] = useState([]);
  
    useEffect(() => {
      async function loadClientes() {
        const response = await api.get('/clientes');
  
        console.log(response.data)
        setClientes(response.data);
      }
  
      loadClientes();
    }, []);

return (

    <div className="container-view">
        <div className="container" id="table">
        <div className="" responsive="sm">          
            <table className="table responsive table-hover">
            <thead>
                <tr className="table">
                <th className="hide">#</th>
                <th>Nome</th>
                <th className="hide">CPF</th>
                <th>Whatsapp</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map(pessoa => (
                <tr key={pessoa.id}>
                    <td className="hide">{pessoa.id}</td>
                    <td>{pessoa.name}</td>
                    <td className="hide">{pessoa.cpf}</td>
                    <td><a href={`https://api.whatsapp.com/send?phone=55${pessoa.whatsapp};`} target='_blank' without rel="noopener noreferrer" >{pessoa.whatsapp}</a></td>
                    <td><Link to={`/viewCliente/${pessoa.id}`}><i href="#" className='fas fa-eye' alt="Visualizar"></i></Link></td>
                </tr>
                ))}      
            </tbody>
            </table>
        </div>
        </div>
        <div className="rodape">
            <hr></hr>
            <p>Copyright©2020, CsCódigos Company. </p>
            <p>Todos os direitos reservados.</p>
            <p><i className="fab fa-whatsapp"> <a href="https://api.whatsapp.com/send?phone=5562996121210">+5562 99612-1210</a></i></p>
        </div>
    </div>
    

  );
}

export default Cliente;