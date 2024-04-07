import "./index.css"





const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src="https://cdn.dribbble.com/userupload/5966432/file/original-03c1fe57f7907074905632cbf187f058.png?resize=400x0"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}




const App = () => {
  return (
    <div className="app">
      <Header/>
    </div>
  )
}

export default App