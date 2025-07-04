import { Toaster } from "./components/ui/toaster"
import { Home } from "./pages/home"
import { NotFound } from "./pages/notFound"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  
  return (
    <>
    <Toaster /> 
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
