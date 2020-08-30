import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { ApplicationState, createRootReducer } from "./reducers";
import { rootSaga } from "./sagas/index"


const sagaMiddleware = createSagaMiddleware();
export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  const store = createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}


