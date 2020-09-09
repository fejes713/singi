import Singi from "./singi";

/** @jsx Singi.createElement */
function Counter() {
  const [state, setState] = Singi.useState(1);
  return <h1 on-Click={() => setState((c) => c + 1)}>Count: {state}</h1>;
}

const app = <Counter />;

const container = document.getElementById("root");
Singi.render(app, container);
