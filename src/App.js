import './App.css';
import Header from './container/Header';
import Auth from './container/Auth';
import {userContextProvider} from "./context/userContext";

function App() {
  return (
    <div className="ui container">
      <userContextProvider >
      <Header />
      <Auth />
      </userContextProvider>
  
    </div>
  );
}

export default App;
