import './assets/bootstrap/css/bootstrap.min.css';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import Header from './Component/Header';
import ContentContainer from './Component/ContentContainer';
import EventVideos from './Component/EventVideos';
import CommunityMembership from './Component/CommunityMembership';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ContentContainer />
      <EventVideos />
      <CommunityMembership />
      
      <Footer />
    </div>
  );
}

export default App;
