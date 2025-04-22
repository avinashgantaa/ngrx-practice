import { counterReducer } from "./counter/counter.reducer";
import { counterinterface } from "./model";
import { postReducer } from "./posts/posts.reducer";

export interface appstate{
    counter:counterinterface
}

export const appreducer={
    counter:counterReducer,
    posts:postReducer
}