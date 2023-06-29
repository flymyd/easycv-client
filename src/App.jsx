import {useRoutes} from "react-router-dom";
import {router} from "@/router";
import initApp from "@/core/init.js";
import {useEffect, useState} from "react";

function App() {
  const [init, setInit] = useState(false)
  initApp().then(r => setInit(true));
  let element = useRoutes(router);
  useEffect(() => {
    document.body.setAttribute('theme-mode', 'dark');
  }, [])
  return (
    <div className="app" onContextMenu={(e)=>e.preventDefault()}>
      {init ? element : <div className="w-screen h-screen flex flex-row justify-center items-center">
        <h1 className="text-5xl font-bold">Initializing...</h1>
      </div>}
    </div>
  );
}

export default App;
