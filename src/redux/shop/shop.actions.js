import ShopActionTypes from './shop.types';

export const updateCollections = (CollectionMap)=>({
    type:ShopActionTypes.UPDATE_COLLECTIONS,
    payload:CollectionMap
})