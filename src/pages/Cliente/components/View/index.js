import React, { useState, useEffect }from "react";
import api from "../../../../services/api";
import "./style.css";

function Cliente() {
    const [clientes, setClientes] = useState([]);
  
    useEffect(() => {
      async function loadClientes() {
        const response = await api.get('/clientes');
  
        setClientes(response.data);
      }
  
      loadClientes();
    }, []);

return (

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
                    <td><i href="#" className='fas fa-eye' alt="Visualizar"></i></td>
                </tr>
                ))}      
            </tbody>
            </table>
        </div>
    </div>

  );
}

export default Cliente;