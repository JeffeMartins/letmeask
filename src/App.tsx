import { BrowserRouter, Route } from "react-router-dom";

import { NewRoom } from "./pages/newRoom";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
