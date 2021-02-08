import { createStore, applyMiddleware, Store, Middleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducer/mainReducer'

const middlewares: Middleware[] = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store 