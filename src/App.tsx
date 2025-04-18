import ComponentFactory from "./utils/ComponentFactory";

const buttonConfig = {};

const App = () => {
  return <div>{ComponentFactory()}</div>;
};

export default App;
