import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
// import Coinpage from "./pages/Coinpage/Coinpage";
import { LinearProgress, makeStyles } from "@material-ui/core";
import NotFound from "./pages/404NotFound/NotFound";
import Alert from "./components/Alert/Alert";
import { lazy, Suspense } from "react";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"))
const Coinpage = lazy(() => import ("./pages/Coinpage/Coinpage"))

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "#ffff",
      minHeight: "100vh",
    },
  }))

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Suspense fallback={<LinearProgress style={{backgroundColor: "gold"}} />}>
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/coins/:id" component={Coinpage} exact />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </div>
      <Alert/>  
    </BrowserRouter>
  );
}

export default App;
