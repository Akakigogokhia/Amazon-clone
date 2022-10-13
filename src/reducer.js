export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => {
    let value = 0;
    basket.map(item => {
        if (item.isChecked)
            value += item.price * item.option
    })
    return value;
}
    

const reducer = (state, action) => {
    
    switch(action.type){
        case 'ADD_TO_BASKET':
            let isInBasket=false;
            state.basket.map(item => {
                if(item.id === action.item.id){
                    isInBasket=true;
                }
            })
            if (!isInBasket){
                return {
                    ...state,
                    basket: [...state.basket, action.item],
                };
            }else {
                alert("This product is already in the basket");
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1);
            }else {
                console.warn(
                    `Can't remove product (id: ${action.id})`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_CHECKBOX':
            let basketFixed = [...state.basket]
            const findIndex = basketFixed.findIndex(
                item => item.id===action.id&&item.isChecked===action.isChecked
            )
            
            if (findIndex >= 0){
                basketFixed[findIndex].isChecked = !action.isChecked
            }
        
            return {
                ...state,
                basket: basketFixed
            }
        case 'SELECT':
            let changedBasket = [...state.basket]
            changedBasket.map(item => {
                if(item.id===action.id){
                    item.option = action.option
                }
            })
            
            return {
                ...state,
                basket: changedBasket
            }


        default:
            return state;
    }
};

export default reducer;