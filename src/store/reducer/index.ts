import { combineReducers } from "redux";
import { CustomerReducer } from "./customer";

const rootReducer = combineReducers({
  customer: CustomerReducer,
});
export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
