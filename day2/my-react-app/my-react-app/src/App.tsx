 import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Main(){

  return(
    <header>

      <p>
        hello
      </p>
    </header>
  )
}

function Button({ onClick }: { onClick: Function }){

  return(
    <button onClick={onClick}>
      Cliquez-moi
    </button>
  )

}

function Card({ children}) {
  return (
    <div className="carde">
      {children}

    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count +1)}>
        ADD
      </button>
      <button onClick={() => setCount(count -1)}>
       SUP 
      </button>
      <button onClick ={() => setCount(0)}>
        RESET
      </button>
    </div>
  )
}

function Text(){
  const[text, setText] = useState('');
  
  function handleClear(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div>
      <h2>Controlled Component Demo</h2>
      <input 
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder =" tapez quelque chose..."
      />
      <div>
        <strong>Nombre de caractères</strong> {text.length}
      </div>
      <button onClick={handleClear}>
        sup
      </button>
    </div>
  )
}

function App() {
  const [value, setValue] =useState("ok")
  let count = 0

  return (
    <>
      <div>
          <Main />
          <Card> hello</Card> 
          <Counter/>
          <Text/>
        <Button onClick={() => alert("ok")}/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => count += 1}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {value}
      <button onClick={() => setValue("")}>kkk</button>
    </>
  )
}

export default App
