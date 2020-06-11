import React from 'react'
import {CollectionOverviewContainer} from './collection-overview.styles'
import  CollectionPreview  from '../collection-preview/collection-preview.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors'


const CollectionsOverview = ({ collections }) => (
    <CollectionOverviewContainer >
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
  
  const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview  // this selector converts the map into the array format we expect.
  });
  
  export default connect(mapStateToProps)(CollectionsOverview);