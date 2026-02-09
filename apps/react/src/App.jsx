import "./App.css";
import { Button } from "@repo/ui";

const onClick = () => {
    alert("I'm a shared component!");
}

function App() {
  return <Button label="Click me in React vite" variant="success" onClick={onClick} />;
}

export default App;
