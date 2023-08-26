import terceiroComponente from "./terceiroComponente";
const elSegundoCompono = () => {
    const aluno = {
        nome: "Doggo",
        profissao: "Escravo",
        idade: "20",
        casado: false
    };
    return (
        <>
            <p>
                <h3>Aluno</h3>
                <strong>Nome: </strong>{aluno.nome} <br />
                <strong>Profissao: </strong>{aluno.profissao} <br />
                <strong>Idade: </strong>{aluno.idade} <br />
                <strong>Casado: </strong>{aluno.casado} <br />
            </p>
            <p>
                <terceiroComponente/>
            </p>
        </>
    );
}

export default elSegundoCompono;