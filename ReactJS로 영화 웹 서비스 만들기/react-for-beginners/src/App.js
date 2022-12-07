// import { useState, useEffect } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail";

// // Coin Tracker
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);
//   return <div>
//     <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
//     {loading ? <strong>Loading...</strong> : (
//       <select>
//         {coins.map((coin) => (
//           <option>
//             {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
//           </option>
//         ))}
//       </select>
//     )}
//   </div>;
// }
// // ~Coin Tracker

function App() {
    return <Router>
        <Switch>
            <Route path="/movie/:id">
                <Detail />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
}

export default App;