import React, { PureComponent } from "react";

import Layout from "../hoc/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";

class App extends PureComponent {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
