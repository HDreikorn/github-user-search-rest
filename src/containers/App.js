import "./App.css";
import SearchContainer from "./searchContainer";

function App() {
  return (
    <div className="App">
      <section className="App h-screen w-full flex justify-center p-4 bg-gradient-to-r from-green-400 to-blue-500">
        <SearchContainer />
      </section>
    </div>
  );
}

export default App;
