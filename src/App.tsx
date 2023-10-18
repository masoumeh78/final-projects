import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Default from './pages/Default';
import TodoApp from "./pages/TodoApp";
import NoteApp from "./pages/NoteApp";
import ExchangeApp from "./pages/ExchangeApp";
import WeatherApp from "./pages/WeatherApp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Default />} />
            <Route path="/Todo-App" element={<TodoApp />} />
            <Route path="/Note-App" element={<NoteApp />} />
            <Route path="/Exchange-App" element={<ExchangeApp />} />
            <Route path="/Weather-App" element={<WeatherApp/>}  />
            {/* <Route element ={<h1>404 :( </h1>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
