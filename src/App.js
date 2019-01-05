import React, { Component } from 'react';

//Components
import Layout from './hoc/Layout/Layout';
import AppContainer from './container/AppContainer/AppContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <AppContainer/>
        </Layout> 
      </div>
    );
  }
}

export default App;
