import * as React from 'react';

export const enum ViewState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  RENDER = 'RENDER',
  EMPTY = 'EMPTY',
  ERROR = 'ERROR',
}

interface IStatefulComponentProps<T extends ViewState = ViewState> {
  viewState?: T;
}

interface IStatefulComponentState<T extends ViewState = ViewState> {
  viewState: T;
}

class StatefulComponent<
  T extends ViewState = ViewState,
  P extends IStatefulComponentProps = IStatefulComponentProps<T>,
  S extends IStatefulComponentState = IStatefulComponentState<T>
> extends React.Component<P, S> {
  public state = {
    viewState: ViewState.IDLE,
  };

  public setViewState = (viewState: T) => {
    this.setState({
      viewState: viewState,
    });
  };
}

export default StatefulComponent;
