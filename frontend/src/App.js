import './App.css';
import Main from './components/main'
import { ToastContainer, Flip } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Main />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </div>
    

  );
}

export default App;


