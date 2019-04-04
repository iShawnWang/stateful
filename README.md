# StatefulComponent

Bring State Machine to React Component



# FSM

Since State Machine is sexy, and especially semantic for express STATE of Component



# Usage



```javascript
import * as React from 'react';
import StatefulComponent, {
  ViewState,
  IStatefulComponentProps,
  IStatefulComponentState,
} from 'stateful';

interface AppProps extends IStatefulComponentProps {}

interface AppState extends IStatefulComponentState {}

class App extends StatefulComponent<ViewState, AppProps, AppState> {
  componentDidMount() {
    setTimeout(() => {
      this.setViewState(ViewState.LOADING);
    }, 3000);
  }

  render() {
    const { viewState } = this.state;
    return <div className="App">{viewState}</div>;
  }
}

export default App;

```

