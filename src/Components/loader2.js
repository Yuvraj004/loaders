import React,{useState} from 'react'
import MyThree from './Three';
function Loader2() {
    const [loading, setLoading] = useState(false);
    const [quote, setQuote] = useState({});
  
    const getRandomQuote = () => {
      setLoading(true);
      fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setQuote(data);
        });
    };
    return (
      <div className="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/loader2">Loader 2</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        {loading ? (
          <div className="container">
              <MyThree/>
          </div>
        ) : (
          <div className="main-content">
            <h1>Hello World!</h1>
            <p>
              This is a demo Project to show how to add animated loading with
              React.
            </p>
            <div className="buttons">
              <button className="btn">
                <a href="/">Read Article</a>
              </button>
              <button className="btn get-quote" onClick={getRandomQuote}>
                Generate Quote
              </button>
            </div>
            <div className="quote-section">
              <blockquote className="quote">{quote.content}</blockquote>-{' '}
              <span className="author">{quote.author}</span>
            </div>
          </div>
        )}
      </div>
    )
}

export default Loader2