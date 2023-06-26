import {useRoutes} from "react-router-dom";
import {router} from "@/router";
import initApp from "@/core/init.js";
import {useState} from "react";

function App() {
  const [init, setInit] = useState(false)
  initApp().then(r => setInit(true));
  let element = useRoutes(router);
  return (
    <div className="app">
      {init ? element : <div className="w-screen h-screen flex flex-row justify-center items-center">
        <h1 className="text-5xl font-bold">Initializing...</h1>
      </div>}
    </div>
  );
}

export default App;
