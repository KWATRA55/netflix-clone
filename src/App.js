import Row from './Row';
import './App.css';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';



function App() {
  return (
    <div className="app">
      {/*navbar*/}
      <Nav />
      {/*banner*/}
      <Banner />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOrignal} />
      <Row title="Comedy Shows" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Best Movies" fetchUrl={requests.fetchBest} />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular} />
      <Row title="Popular TV" fetchUrl={requests.fetchPopularTv} />

      <Footer />
    </div>

    
  );
}

export default App;
