import banner3 from '../assets/img/5.png'
import { useState } from "react"

const AppTamanhoImagem = () => {
    const imgPadrao = {
        w: 600,
        h: 240
    }

    const [largura, setLargura] = useState(imgPadrao.w)
    const [altura, setAltura] = useState(imgPadrao.h)

    return(
        <div>
            <img src={banner3} alt="Banner de promoções 3" width={largura} height={altura} />
            <div>
                <span>Largura: {largura}</span> || <span>Altura: {altura}</span>
            </div>
            <div>
            <button onClick={() => setLargura(largura+10)}>Alargar</button> || <button onClick={() => setLargura(largura-10)}>Estreitar</button>
            <button onClick={() => setAltura(altura+10)}>Ampliar</button> || <button onClick={() => setAltura(altura-10)}>Reduzir</button>
            </div>
        </div>
    )
}

export default AppTamanhoImagem