import React, {FunctionComponent} from 'react';
import PokemonList from "./pages/pokemon-list";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import PokemonDetail from "./pages/pokemon-detail";
import pageNotFound from "./pages/page-not-found";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonAdd from "./pages/pokemon-add";

const App: FunctionComponent = () => {

    return (
        <Router>
            <div>
                {/*Barre de navigation*/}
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">Pokédex</Link>
                    </div>
                </nav>
                {/*Les routes*/}
                <Switch>
                    <Route exact path="/" component={PokemonList}/>
                    <Route exact path="/pokemons" component={PokemonList}/>
                    <Route exact path="/pokemon/add" component={PokemonAdd}/>
                    <Route exact path="/pokemons/edit/:id" component={PokemonEdit}/>
                    <Route path="/pokemons/:id" component={PokemonDetail}/>
                    <Route component={pageNotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;