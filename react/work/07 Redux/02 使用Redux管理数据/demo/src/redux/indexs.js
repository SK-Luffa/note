import { createStore } from "redux"

function reducer(store, action) {

    switch (action.type) {
        case "ncrease":
            return store + 1;
        case "reduce":
            return store - 1;
        default:
            return store
    }
}

const Stores=createStore(reducer,10);

const action = { type:"ncrease"}
console.log(Stores.getState());
Stores.dispatch(action)
console.log(Stores.getState());
