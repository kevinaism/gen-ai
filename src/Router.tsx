import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainMenuLayout from "./components/menu/MainMenuLayout";
import Dashboard from "./pages/Dashboard";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainMenuLayout />}>
            <Route path="*" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
