import React from 'react';
import './collection-page.style.scss'
import {connect} from 'react-redux'
import {selectCollectionByParam} from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'




const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };

const mapStateToProps = (state,ownProps)=>(
{
    collection:selectCollectionByParam(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps,null)(CollectionPage);


 /* over here we shall retrive the collection mentioned in url from STORE using a special kind of selector and advanced routing
        1.got the url param via props.match.param.collectionId 
        2.now its time to pass the url param to the special selector and retrive data accordingly */