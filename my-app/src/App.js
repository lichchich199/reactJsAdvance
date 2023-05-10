import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './views/Login';

const Home = () => <h1>Home</h1>;
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
