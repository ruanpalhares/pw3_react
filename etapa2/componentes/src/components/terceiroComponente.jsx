const terceiroComponente = () => {
    const professor = {
        nome: "Vitao",
        curso: "DS",
        formacao: "Engenharia de Software",
        titular: true
    }
    return(
        <>
            <p>
                <h3>Terceiro Componente</h3>
                <strong>Nome: </strong>{professor.nome} <br />
                <strong>Curso: </strong>{professor.curso} <br />
                <strong>Formação: </strong>{professor.formacao} <br />
                <strong>Titular: </strong>{professor.titular}
            </p>
        </>
    );
}

export default terceiroComponente;