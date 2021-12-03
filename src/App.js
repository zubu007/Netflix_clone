import Row from "./Row";
import requests from "./Request";
import Banner from "./Banner";
import './index.css'
import Navbar from "./Navbar";

function App() {
  

  // api-key: 8188407215ca1ba1a684dac026314b7a
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending" fetchURL={requests.fetchTrending}/>
      <Row title="Action movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Comedy movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
      
    </div>
  );
}


export default App;
