import { CssBaseline } from "@mui/material";
import "./App.css";
import { RouterComponent } from "./routes/index";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import { AppThemeProvider } from "./theme";

const App = () => {
  return (
    <div className="main-layout">
      <AppThemeProvider>
        <CssBaseline />
        <Header />
        <RouterComponent />
        <Footer />
      </AppThemeProvider>
    </div>
  );
};

export default App;
