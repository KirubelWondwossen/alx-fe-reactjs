import Header from './Header'; // prettier-ignore
import MainContent from './MainContent'; // prettier-ignore
import Footer from './Footer'; // prettier-ignore
import UserProfile from './UserProfile'; // prettier-ignore

import "./App.css";

function App() {
  return (
    <>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
