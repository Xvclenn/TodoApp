import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminList } from "./components/List";
import { Header } from "./components/Header";

import { Todos } from "./components/Todos";
import { AdminFace } from "./components/AdminFace";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/admin" element={<AdminFace />} />
                    <Route path="/admin/todo" element={<Todos />} />
                    <Route path="/admin/list" element={<AdminList />} />
                </Routes>
            </BrowserRouter>

            {/* <div>
                <Header />
                <Todos />
                <AdminList />
            </div> */}
        </>
    );
}

export default App;
