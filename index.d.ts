declare module 'stateful' {
  export enum ViewState {
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    RENDER = 'RENDER',
    EMPTY = 'EMPTY',
    ERROR = 'ERROR',
  }

  export interface IStatefulComponentProps<T extends ViewState = ViewState> {
    viewState?: T;
  }

  export interface IStatefulComponentState<T extends ViewState = ViewState> {
    viewState: T;
  }

  export default class StatefulComponent<
    T extends ViewState = ViewState,
    P extends IStatefulComponentProps = IStatefulComponentProps<T>,
    S extends IStatefulComponentState = IStatefulComponentState<T>
  > extends React.Component<P, S> {
    public state: S;
    public setViewState: (viewState: T) => void;
  }
}
