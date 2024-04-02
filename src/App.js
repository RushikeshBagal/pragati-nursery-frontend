import { CssBaseline } from "@mui/material";
import "./App.css";
import { RouterComponent } from "./routes/index";
import { AppThemeProvider } from "./theme";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [showFooter, setShowFooter] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(true);
  return (
    <div className="main-layout">
      <AppThemeProvider>
        <CssBaseline />
        <Header showIcons={showFooter} setIsCartOpen={setIsCartOpen} />
        <BrowserRouter>
          <RouterComponent
            setShowFooter={setShowFooter}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            isLoginDrawerOpen={isLoginDrawerOpen}
            setIsLoginDrawerOpen={setIsLoginDrawerOpen}
          />
        </BrowserRouter>
        {showFooter && <Footer />}
      </AppThemeProvider>
    </div>
  );
};

export default App;
