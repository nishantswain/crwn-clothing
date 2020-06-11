import React from 'react';
import {CollectionItemContainer,AddButton,BackgroundImage,CollectionFooterContainer,NameContainer,PriceContainer} from './collection-item.styles';
import {connect} from 'react-redux';

import {addItemToCart} from '../../redux/cart/cart.actions'

const CollectionItem =({item,addItemToCart})=>{

const {name,imageUrl,price}=item;
    return(
        <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItemToCart(item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
    )
}

const mapDispatchToProps= dispatch =>({
    addItemToCart:item=> dispatch(addItemToCart(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);