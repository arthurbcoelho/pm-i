import { useState } from 'react';

const Calculadora = () => {
    let [numberOne, setNumberOne] = useState('');
    let [numberTwo, setNumberTwo] = useState('');
    let [operacao, setOperacao] = useState('');
    let [resultado, setResultado] = useState('');

    const handleRealizarOperacao = () => {
        let res = 0;
        let num1 = parseInt(numberOne);
        let num2 = parseInt(numberTwo);

        if (operacao === 'soma') {
            res = num1 + num2;
        } else if (operacao === 'subtracao') {
            res = num1 - num2;
        } else if (operacao === 'multiplicacao') {
            res = num1 * num2;
        } else if (operacao === 'divisao') {
            res = num1 / num2;
        }

        setResultado(res);
    }

    const handleClear = () => {
        setNumberOne('');
        setNumberTwo('');
        setOperacao('');
        setResultado('');
    }

    const handleNumberOne = (event) => {
        setNumberOne(event.target.value);
    }

    const handleNumberTwo = (event) => {
        setNumberTwo(event.target.value);
    }

    const handleSetOperacao = (event) => {
        setOperacao(event.target.value);
    }

    return (
        <>
            <h1>Calculadora</h1>
            <input type="number" value={numberOne} onChange={handleNumberOne} placeholder="Num 1" />
            <input type="number" value={numberTwo} onChange={handleNumberTwo} placeholder="Num 2" />

            <div>
                <label>
                    <input type="radio" name="operacao" value="soma" checked={operacao === 'soma'} 
                        onChange={handleSetOperacao} 
                    />
                    Somar
                </label>
                <label>
                    <input type="radio" name="operacao" value="subtracao" checked={operacao === 'subtracao'} 
                        onChange={handleSetOperacao} 
                    />
                    Subtrair
                </label>
                <label>
                    <input type="radio" name="operacao" value="multiplicacao" checked={operacao === 'multiplicacao'} 
                        onChange={handleSetOperacao} 
                    />
                    Multiplicar
                </label>
                <label>
                    <input type="radio" name="operacao" value="divisao" 
                        checked={operacao === 'divisao'} 
                        onChange={handleSetOperacao} 
                    />
                    Dividir
                </label>
            </div>

            <button onClick={handleRealizarOperacao}>Calcular</button>
            <button onClick={handleClear}>Limpar</button>

            {resultado && <p>Resultado = {resultado}</p>}
        </>
    );
}

export default Calculadora;