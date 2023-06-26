import {useRoutes} from "react-router-dom";
import router from "@/router";

function App() {
  let element = useRoutes(router);
  return (
    <div className="container">
      {element}
    </div>
  );
}

export default App;
