import { createStore ,compose ,applyMiddleware} from 'redux'
// import { AsyncStorage } from 'react-native';
import reducers from './reducers/index'
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

// import { autoRehydrate } from 'redux-persist'
// export default createStore(
//   reducers,
//   undefined,
//   compose(applyMiddleware(ReduxThunk))
// );


export default function configureStore () {
    const enhancer = compose(
       applyMiddleware(
            thunk
        )
      )
  const store = createStore(reducers,enhancer)

  // if (module.hot) {
  //   module.hot.accept(() => {
  //     const nextRootReducer = require('./index').default
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }
  return store
}