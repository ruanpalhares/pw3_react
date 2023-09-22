import React from 'react'
import './ListaFragmentos.css'

const ListaFragmentos = ({ motos }) => {

  return (
    <>
      <table className="lf-table">
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>KM</th>
          <th>Usado</th>
          <th>Ano</th>
        </tr>
        {motos.map((itemMoto) => {
          return(
          <tr key={itemMoto.id} style={
            itemMoto.id % 2 === 0 ?
            {backgroundColor: "#ccc"} :
            null
          }>
            <td>{itemMoto.marca}</td>
            <td>{itemMoto.modelo}</td>
            <td>{itemMoto.km}</td>
            <td>{itemMoto.usado ? "Sim" : "Não"}</td>
            <td>{itemMoto.ano}</td>
          </tr>
          )
        })}
      </table>
    </>
  )
}

export default ListaFragmentos