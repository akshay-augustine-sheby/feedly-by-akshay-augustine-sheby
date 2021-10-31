import './App.css';
import Header2 from './Header/Header2';
import Routes from './Routes';
import { Button, Tooltip } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import LandingPage, { FunContext } from "./Landing page/LandingPage";
import { Copy,Filter,Notification,Search } from "@bigbinary/neeto-icons";
import { useHistory } from 'react-router';
import ErrorBoundary from "./ErrorBoundary"

function App() {
  const history = useHistory();
  return (
    <div className="App">  
      <Routes />
    </div>
    
  );
}

export default App;
