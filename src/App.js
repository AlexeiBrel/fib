import Header from "./components/header/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home/home";
import pizza from "./pages/pizza/pizza";
import dessert from "./pages/dessert/dessert";
import drinks from "./pages/drinks/drinks";
import combo from "./pages/combo/combo";
import contacts from "./pages/contacts/contacts";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route path='/pizza' component={pizza}/>
          <Route path='/dessert' component={dessert}/>
          <Route path='/drinks' component={drinks}/>
          <Route path='/combo' component={combo}/>
          <Route path='/contacts' component={contacts}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
