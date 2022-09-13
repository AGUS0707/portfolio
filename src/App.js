import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/About/About";


function App() {
  return (
    <BrowserRouter>
        <Switch>

            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
