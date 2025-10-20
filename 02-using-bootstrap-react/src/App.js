import "./App.css";
import Header from "./components/header";
import MainSection from "./components/main";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
