import Todo from "./components/Todo";
// import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <div className="col">
        <h1 className="text-center">My ToDos</h1>
        <Todo text="Learn React" />
        <Todo text="Learn Electron" />
        <Todo text="Create App" />
      </div>
      
      {/* <Modal /> */}
      <Backdrop />
    </div>
  );
}

export default App;
