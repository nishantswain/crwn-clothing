import React from 'react';
import {CollectionContainer,CollectionTitle,CollectionItemsContainer} from './collection-page.styles'
import {connect} from 'react-redux'
import {selectCollectionByParam} from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'


// the conatiners are jsx styled components.

const CollectionPage = ({ collection,match }) => {
    const { title, items } = collection;
    console.log(match)
    return (
      <CollectionContainer className='collection-page'> 
        <CollectionTitle className='title'>{title}</CollectionTitle>
        <CollectionItemsContainer className='items'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </CollectionItemsContainer>
      </CollectionContainer>
    );
  };

const mapStateToProps = (state,ownProps)=>(
{
    collection:selectCollectionByParam(ownProps.match.params.collectionId)(state) // here we are passing a parameter to the 
                                                                                  //selector so that it selects the req collection  accordingly.
})

export default connect(mapStateToProps,null)(CollectionPage);


 /* over here we shall retrive the collection mentioned in url from STORE using a special kind of selector and advanced routing
        1.got the url param via props.match.param.collectionId 
        2.now its time to pass the url param to the special selector and retrive data accordingly */