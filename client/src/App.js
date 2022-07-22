import './App.css';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import EditPage from './views/EditPage';
import CreatePage2 from './views/CreatePage2';
import EditPage2 from './views/EditPage2';

function App() {
  return (
    <div className="container mt-5">
      <h1>Coding Dojo Garage Sale</h1>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/items/new" element={<CreatePage/>}/>
        {/* <Route path="/items/new" element={<CreatePage2/>}/> */}
        <Route path="/items/:id" element={<DetailsPage/>}/>
        <Route path="/items/edit/:id" element={<EditPage/>}/>
        {/* <Route path="/items/edit/:id" element={<EditPage2/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
