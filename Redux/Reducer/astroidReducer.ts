import * as types from "../Actions/constants";
import { Astroid, AstroidAction } from "../../Types/types";

const initialState: Astroid = {
  astroid: {
    name: "",
    is_potentially_hazardous_asteroid: "",
    nasa_jpl_url: "",
  }
}


export default (state = initialState, action: AstroidAction) => {
  switch (action.type) {
    case types.SET_ASTROID:
      return {
        ...state,
        astroid: action.payload,
      };
    default: return state
  }
  
}