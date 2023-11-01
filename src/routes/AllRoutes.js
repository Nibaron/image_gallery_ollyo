import { Routes, Route} from "react-router-dom";
import {Home, PageNotFound} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
              <Route path="/" element={ <Home title="Movie MagNet"/> } />
              <Route path="*" element={ <PageNotFound title="Page Not Found"/> } />
        </Routes>
    </div>
  )
}