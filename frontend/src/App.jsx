import "./styles/global.css";
import "./styles/colors.css";
import "./styles/fonts.css";
import "./styles/tooltip.css";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Loader } from "./components/Loader/Loader.jsx";



function Layout() {
    const location = useLocation();
    const hideLayout = [].includes(location.pathname);

    return (
        <div className="main-div">
            {!hideLayout && <Header />}
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            {!hideLayout && <Footer />}
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Loader />
            <Layout />
        </Router>
    );
}
