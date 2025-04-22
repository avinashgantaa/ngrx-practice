import { createReducer } from "@ngrx/store";
import { postinitialstate } from "./posts.state";
const _postReducer=createReducer(postinitialstate)
export function postReducer(state:any,action:any){
    return _postReducer(state,action)
}