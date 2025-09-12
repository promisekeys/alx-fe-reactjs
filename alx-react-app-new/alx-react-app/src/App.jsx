import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Promise Keys" age={25} bio="I love coding and teaching piano." />
      <Footer />
    </div>
  );
}

export default App;



