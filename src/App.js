import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  let pageSize = 7;
  let country = "in";
  let api= `58378d9b6d3b40eab23100859988dbc5`
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/">
            <News progress={setProgress} api={api} key="general" title="NewsMonkey - Today's Top Headlines" pagS={pageSize} country={country} category="general" />
          </Route>
          <Route exact path="/technology">
            <News progress={setProgress} api={api} key="technology" title="NewsMonkey - Technology Top Headlines" pagS={pageSize} country={country} category="technology" />
          </Route>
          <Route exact path="/entertainment">
            <News progress={setProgress} api={api} key="entertainment" title="NewsMonkey - Entertainment Top Headlines" pagS={pageSize} country={country} category="entertainment" />
          </Route>
          <Route exact path="/health">
            <News progress={setProgress} api={api} key="health" title="NewsMonkey - Health Top Headlines" pagS={pageSize} country={country} category="health" />
          </Route>
          <Route exact path="/science">
            <News progress={setProgress} api={api} key="science" title="NewsMonkey - Science Top Headlines" pagS={pageSize} country={country} category="science" />
          </Route>
          <Route exact path="/sports">
            <News progress={setProgress} api={api} key="sports" title="NewsMonkey - Sports Top Headlines" pagS={pageSize} country={country} category="sports" />
          </Route>
          <Route exact path="/business">
            <News progress={setProgress} api={api} key="business" title="NewsMonkey - Business Top Headlines" pagS={pageSize} country={country} category="business" />
          </Route>
        </Switch>
      </Router>
    </div>
  )

}

export default App



