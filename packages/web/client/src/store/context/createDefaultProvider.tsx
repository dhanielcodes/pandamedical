import React, {
  Dispatch,
  Reducer,
  ReducerAction,
  ReducerState,
  useReducer,
} from 'react';

type DispatchAction<T extends Reducer<any, any>, S> = (
  a: Dispatch<ReducerAction<T>>,
) => S;

export default <
  T extends Reducer<S, any>,
  A extends DispatchAction<T, ReturnType<A> & { init?: () => Promise<void> }>,
  S
>(
  reducer: T,
  actions: A,
  defaultValue: ReducerState<T>,
) => {
  type ContextType = ReturnType<A> & {
    state: ReducerState<T>;
  };

  const Context = React.createContext<ContextType>(
    (undefined as any) as ContextType,
  );

  const Provider = ({
    children,
    state,
    newActions,
  }: {
    children: any;
    state: ReducerState<T> | null;
    newActions: any;
  }) => {
    const [initialState, dispatch] = useReducer(reducer, defaultValue);
    const bindingActions = actions(dispatch);

    return (
      <Context.Provider
        value={{
          state: { ...initialState, ...state },
          ...{ ...bindingActions, ...newActions },
        }}
      >
        {children}
      </Context.Provider>
    );
  };

  return {
    Context,
    Provider,
  };
};
