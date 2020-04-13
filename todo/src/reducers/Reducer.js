import React from "react";

export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: Math.floor(Math.random() * Math.floor(10000))
}]

export const Reducer = (state, action) => {
    switch(action.type){
        case "ADD_TASK":
            state.push({
                item: action.payload,
                completed: false,
                id: Math.floor(Math.random() * Math.floor(10000))
            });
            for(let i = 0; i < state.length - 1; i++){
                if(state[i].item === state[i+1].item){
                    state.splice(i+1, 1)
                }
            }
        case "TOGGLE_TASK":
            return state.map(item => {
                if(action.payload === item.id){
                    return{
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
                })
        case "CLEAR_COMPLETE":
            return state.filter(item => ! item.completed);

        default:
            return state;
    }

}

