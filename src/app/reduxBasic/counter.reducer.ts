import { createReducer, on } from "@ngrx/store";
import { decrement, dividedby, increment, reset, times } from "./counter.actions";


// export function counterReducer( state: number = 10, action: Action ){
//     switch( action.type ){
//         case increment.type:
//             return state + 1;
//         case decrement.type:
//             return state - 1;
//         default:
//             return state;
//     }
// }

export const initialState = 20;

const _countereducer = createReducer( initialState,
    on( increment,  (state) => state + 1 ),
    on( decrement,  (state) => state - 1 ),
    on( times,      (state, {num})=> state * num),
    on( dividedby,  (state, {num})=>state / num ),
    on( reset,      ()=> initialState )
);

export function counterReducer( state: any, action: any ){
    return _countereducer(state, action);
}