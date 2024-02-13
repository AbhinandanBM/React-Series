// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["Bengaluru", "Mandya", "Mysore", "Bidadi", "Ramanagara"];

  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisibility && (
        <Alert
          children=" A simple primary alert—check it out!"
          onClose={() => setAlertVisibility(false)}
        />
      )}
      <Button
        children="My Button"
        color="secondary"
        onPress={() => setAlertVisibility(true)}
      />
    </>
  );
}

export default App;
