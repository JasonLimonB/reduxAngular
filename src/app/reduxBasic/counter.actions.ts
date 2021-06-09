import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] increment');
export const decrement = createAction('[Counter] decrement');

export const times = createAction(
    '[Counter] times',
    props<{num: number}>()
);

export const dividedby = createAction(
    '[Counter] dividedby',
    props<{num: number}>()
);

export const reset = createAction('[Counter] reset');