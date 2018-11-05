export type Reducer<S> = <A extends Action>(state: S, action: A) => S;

export interface ReducersMapObject {
  [key: string]: Reducer<any>;
}

export interface Action {
  type: any;
}

export function combineReducers<S>(reducers: ReducersMapObject): Reducer<S>;

export interface Dispatch<S> {
  <A extends Action>(action: A): A;
}

export interface Unsubscribe {
  (): void;
}

export interface Store<S> {
  dispatch: Dispatch<S>;

  getState(): S;

  subscribe(listener: () => void): Unsubscribe;

  replaceReducer(nextReducer: Reducer<S>): void;
}
