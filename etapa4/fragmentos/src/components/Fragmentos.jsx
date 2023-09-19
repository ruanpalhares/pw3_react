import React from 'react'
import ListaFragmentos from './ListaFragmentos'

const Fragmentos = ({marca, km, modelo, usado}) => {
  const motos = [{id:1 ,marca: "Honda", modelo: "XRE 300", km: 12000, usado: true, ano: 2023}
                ,{id:2 ,marca: "Yamaha", modelo: "Viragro 750", km: 80000, usado: true, ano: 2005}
                ,{id:3 ,marca: "Kawazaki", modelo: "Ninja 1000", km: 12000, usado: true, ano: 2021}
                ,{id:4 ,marca: "BMW", modelo: "GS 1200", km: 24000, usado: true, ano: 2020}
                ,{id:5 ,marca: "Harley Davidson", modelo: "FatBoy 1500", km: 0, usado: false, ano: 2023}]

  return (
    <>
    <div>
        <h2>Componente de Props</h2>
        <h3>Carro ordenado: </h3>
        <table>
            <tr>
                <th>Marca</th>
                <th>KM</th>
                <th>Modelo</th>
                <th>Usado</th>
            </tr>
            <tr>
                <td>{marca}</td>
                <td>{km}</td>
                <td>{modelo}</td>
                <td>{usado ? "Sim" : "Não"}</td>
            </tr>
        </table>
    </div>
    <div>
      <ListaFragmentos listaMotos={motos}/>
    </div>
    </>
  )
}

export default Fragmentos