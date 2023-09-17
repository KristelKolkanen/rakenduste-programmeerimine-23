import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          KRISTEL
        </h1>
        <div className="questions">
        <ul>
          <li>Kuidas React töötab?</li> 
          <li>Millest alustada uue rakenduse loomisel?</li> 
          <li>Javascripti parimad omadused?</li> 
        </ul>
        </div>
        <div className="CTA-div">
          <button className="CTAbtn">
            GET MONEY
          </button>
        </div>
      </header>
      <div className="container">
      <form action="">
        <div className="row">
          <div className="col-25">
        <label htmlFor="">Nimi</label>
          </div>
          <div className="col-75">
        <input type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
        <label htmlFor="">Email</label>
          </div>
          <div className="col-75">
        <input type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
        <label htmlFor="">Sõnum</label>
          </div>
          <div className="col-75">
        <textarea type="text"></textarea>
          </div>
        </div>
        <div className="row">
        <button type="submit">Saada</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default App;
