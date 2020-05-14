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
    collections=>Object.keys(collections).map(key=>collections[key])
)
const selectCollectionByParam = urlParam =>createSelector(
    [selectCollections],
    collections=>
    collections[urlParam]

)

export {selectCollections,selectCollectionByParam,selectCollectionForPreview}