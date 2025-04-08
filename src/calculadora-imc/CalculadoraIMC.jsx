import { useState } from 'react';

const CalculadoraIMC = () => {
    let [peso, setPeso] = useState('');
    let [altura, setAltura] = useState('');
    let [resultado, setResultado] = useState('');

    const handleClear = () => {
        setPeso('');
        setAltura('');
        setResultado('');
    }

    const handlePeso = (event) => {
        setPeso(event.target.value);
    }

    const handleAltura = (event) => {
        setAltura(event.target.value);
    }

    const handleCalcularIMC = (event) => {
        let imc = peso / (altura * altura);
        let result = '';

        if (imc < 16) {
            result = 'Magreza grave';
        } else if (imc < 17) {
            result = 'Magreza moderada';
        } else if (imc < 18.5) {
            result = 'Magreza leve';
        } else if (imc < 25) {
            result = 'Saudável';
        } else if (imc < 30) {
            result = 'Sobrepeso';
        } else if (imc < 35) {
            result = 'Obesidade Grau I';
        } else if (imc < 40) {
            result = 'Obesidade grau II (severa)';
        } else {
            result = 'Obesidade Grau III (mórbida)';
        } 

        setResultado(result);
    }

    return (
        <>
            <h1>Calculadora IMC</h1>
            <input type="number" value={peso} onChange={handlePeso} placeholder="Peso" />
            <input type="number" value={altura} onChange={handleAltura} placeholder="Altura" />

            <button onClick={handleCalcularIMC}>Calcular</button>
            <button onClick={handleClear}>Limpar</button>

            {resultado && <p>{resultado}</p>}
        </>
    );
}

export default CalculadoraIMC;