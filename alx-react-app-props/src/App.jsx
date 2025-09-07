import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Alice", age: 25, bio: "Loves hiking and photography" };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <Header />
        <WelcomeMessage />
        <MainContent />
        <UserProfile /> {}
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
