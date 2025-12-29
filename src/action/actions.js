import { INCREMENT, DECREMENT } from './types';

export const increaseCounter = () => {

    return {

        type: INCREMENT, //name
        payload: {like: 'buymilk', name: 'huynh'}
    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};