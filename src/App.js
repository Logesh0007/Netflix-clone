import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Detail from './Detail'

function App() {
  return (
    <div className="app">
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
