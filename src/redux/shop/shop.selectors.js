import {createSelector} from 'reselect'

const MAP_URL_TO_ID ={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

const selectShop = state => state.shop;

const selectCollections = createSelector(
    [selectShop],
    shop=>shop.collections
)
const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections=>collections?Object.keys(collections).map(key=>collections[key]):[] //here we map over the array of collections keys, this returns us a new
                                                                     // array , where every element of the array is the value in collection at the  
                                                                     // key we have mentioned.
)
const selectCollectionByParam = urlParam =>createSelector(
    [selectCollections],
    collections=>
    (collections?collections[urlParam]:null)

)

export {selectCollections,selectCollectionByParam,selectCollectionForPreview}