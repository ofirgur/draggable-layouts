import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

//import monitorReducersEnhancer from './enhancers/monitorReducers'
//import loggerMiddleware from './middleware/logger'
import rootReducer from './rootReducer';

export default preloadedState => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [/**loggerMiddleware,*/...getDefaultMiddleware()],
    preloadedState,
    //enhancers: [monitorReducersEnhancer]
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer))
  }

  return store
};

/**
 
  Simplifying Store Setup with configureStore#

  configureStore helps with those issues by:
    * Having an options object with "named" parameters, which can be easier to read.
    * Letting you provide arrays of middleware and enhancers you want to add to the store, and calling applyMiddleware and compose for you automatically
    * Enabling the Redux DevTools Extension automatically
    
  In addition, configureStore adds some middleware by default, each with a specific goal:
    * redux-thunk is the most commonly used middleware for working with both synchronous and async logic outside of components
    * In development, middleware that check for common mistakes like mutating the state or using non-serializable values.
  
  This means the store setup code itself is a bit shorter and easier to read, and also that you get good default behavior out of the box.

  The simplest way to use it is to just pass the root reducer function as a parameter named reducer:
  ***
  import { configureStore } from '@reduxjs/toolkit'
  import rootReducer from './reducers'

  const store = configureStore({
    reducer: rootReducer
  })

  export default store
  ***

  You can also pass an object full of "slice reducers", and configureStore will call combineReducers for you:
  ***
  import usersReducer from './usersReducer'
  import postsReducer from './postsReducer'

  const store = configureStore({
    reducer: {
      users: usersReducer,
      posts: postsReducer
    }
  })  
  ***

  */
