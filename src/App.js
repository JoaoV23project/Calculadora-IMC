import logo from './logo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width='100px'></img>
        <h1>Calcular IMC</h1>
        <label>Informe seu nome:</label>
        <input type='text' placeholder='Nome...' id='nome'></input>
        <label>Selecione seu gênero:</label>
        <select id='genero'>
          <option value='null'>Null</option>
          <option value='Masculino'>Masculino</option>
          <option value='Feminino'>Feminino</option>
        </select>
        <label>Informe o seu peso:</label>
        <input type='text' placeholder='Peso (KG)...' id='peso'></input>
        <label>Informe a sua altura:</label>
        <input type='text' placeholder='Altura (M)...' id='altura'></input>
        <input type='button' value="Calcular" onClick={Calcular}></input>
        <p id='nomeIndicado'></p>
        <p id='imcIndicado'></p>
        <p id='condicao'></p>
        <p id='diferenca'></p>
      </header>
    </div>
  );
}
function Calcular(){
  let nome = document.getElementById('nome').value;
  let genero = document.getElementById('genero').value;
  let peso = parseFloat(document.getElementById('peso').value);
  let altura = parseFloat(document.getElementById('altura').value);
  let imc = peso / (altura * altura);
  let condicao;
  let diferenca = `${nome} está no peso ideal`;
  switch(genero){
    case 'Masculino':
      if (imc < 20.7){
        condicao = "abaixo do peso";
        diferenca = `${nome} precisa ganhar ${((20.7 - imc) * altura * altura).toFixed(2)} Kg`
      }
      else if (imc >= 20.7 && imc < 26.4){
        condicao = 'no peso normal';
      }
      else if (imc >= 26.4 && imc < 27.8){
        condicao = "marginalmente acima do peso";
        diferenca = `${nome} precisa perder ${((imc - 26.4) * altura * altura).toFixed(2)} Kg`
      }
      else if (imc >= 27.8 && imc <= 31.1){
        condicao = "acima do peso ideal";
        diferenca = `${nome} precisa perder ${((imc - 26.4) * altura * altura).toFixed(2)} Kg`
      }
      else{
        condicao = "obeso";
        diferenca = `${nome} precisa perder ${((imc - 26.4) * altura * altura).toFixed(2)} Kg`
      }
      break;
      case 'Feminino':
      if (imc < 19.1){
        condicao = "abaixo do peso";
        diferenca = `${nome} precisa ganhar ${((20.7 - imc) * altura * altura).toFixed(2)} Kg`
      }
      if (imc >= 19.1 && imc < 25.8){
        condicao = 'no peso normal';
      }
      if (imc >= 25.8 && imc < 27.3){
        condicao = "marginalmente acima do peso";
        diferenca = `${nome} precisa perder ${((imc - 26.4) * altura * altura).toFixed(2)} Kg`
      }
      if (imc >= 27.3 && imc <= 32.3){
        condicao = "acima do peso ideal";
        diferenca = `${nome} precisa perder ${((imc - 26.4) * altura * altura).toFixed(2)} Kg`
      }
      if (imc > 32.3){
        condicao = "obesa";
        diferenca = `${nome} precisa perder ${((imc - 26.4) * altura * altura).toFixed(2)} Kg`
      }
        break;
    default:
      break;
  }
  return (
  <div className='App'>
    {document.getElementById('nomeIndicado').textContent = `Nome: ${nome}`}
    {document.getElementById('imcIndicado').textContent = `IMC: ${imc.toFixed(2)}`}
    {document.getElementById('condicao').textContent = `Condição: ${condicao}`}
    {document.getElementById('diferenca').textContent = `${diferenca}`}
  </div>
  );
}
export default App;