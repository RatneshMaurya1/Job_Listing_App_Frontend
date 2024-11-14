import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./Context/AuthContext";
import CreateJob from "./pages/CreateJob/CreateJob";


const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateJob/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster />
      </AuthProvider>
    </>
  );
}

export default App;
