import "./components/Layout";
import {useNavigate,Link,Routes,Route} from "react-router-dom";
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import LinkPage from './components/LinkPage';
import Unauthorized from './components/Unauthorized';
import Editor from './components/Editor';
import Home from './components/Home';
import Lounge from './components/Lounge';
import Missing from './components/Missing';
import RequireAuth from './components/RequireAuth';
import Admin from './components/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes  */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes  */}
        <Route path="/" element={<Home />} />
        <Route path="lounge" element={<Lounge />} />
        <Route path="editor" element={<Editor />} />
        <Route path="admin" element={<Admin />} />

        {/* catch all errors */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
