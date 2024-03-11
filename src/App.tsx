//Componente React
import './App.css'
function App() {
  let nome = "Anna <3"
  let sobrenome = "Eleutério"
  return (
    <div>
      <h1 className="nome">Nome: {nome}</h1>
      <p className="sobrenome">{sobrenome}</p>
    </div>
   
  )//Retorna JSX - JavaScript XML
}

export default App