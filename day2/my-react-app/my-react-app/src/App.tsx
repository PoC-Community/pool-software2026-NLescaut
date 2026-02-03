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

function App() {
  const [value, setValue] =useState("ok")
  let count = 0

  return (
    <>
      <div>
          <Main />
          <Card> hello</Card>
          <Card/>  
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
