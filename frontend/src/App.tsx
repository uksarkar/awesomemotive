import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Error404 from "./pages/errors/Error404";
import Home from "./pages/home";
import ViewPost from "./pages/post/ViewPost";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="/posts/:id" element={<ViewPost></ViewPost>}></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
