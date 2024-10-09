import Header from "./components/Header";
import Counter from "./components/Counter";
import Main from "./components/Main";

function App() {
  return (
    <div className="text-center">
      <Header title={`Sample React App`} />
      <Main>
        <Counter />
      </Main>
    </div>
  );
}

export default App;
