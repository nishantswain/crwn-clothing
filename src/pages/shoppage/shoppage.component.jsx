import React from 'react';
// import './shoppage.style.scss'
// import {connect} from 'react-redux'
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions'
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection-page.component';
// import SHOP_DATA from '../../redux/shop/shop.data'
import {firestore,covertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component{

state={
        loading:false
};

unsubscribeFromSnapshot=null;

componentDidMount(){

        const {updateCollections}=this.props

const collectionRef= firestore.collection('collection')

        // collectionRef.onSnapshot(async snapshot=>{
        //         const collectionsMap=covertCollectionsSnapshotToMap(snapshot)
        //         console.log(collectionsMap);
        //         updateCollections(collectionsMap);
        //         this.setState({loading:false});
        //         console.log('LOADING IS FALSE');
        // });

        collectionRef.get().then(snapshot=>{
          const collectionsMap=covertCollectionsSnapshotToMap(snapshot)
          console.log(collectionsMap);
          updateCollections(collectionsMap);
          this.setState({loading:false});
          console.log('LOADING IS FALSE');
        });


}
     
                // console.log(match)
                render() {
                        const { match } = this.props;
                        const { loading } = this.state;
                        return (
                          <div className='shop-page'>
                            <Route
                              exact
                              path={`${match.path}`}
                              render={props => (
                                <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
                              )}
                            />
                            <Route
                              path={`${match.path}/:collectionId`}
                              render={props => (
                                <CollectionPageWithSpinner isLoading={loading} {...props} />
                              )}
                            />
                          </div>
                        );
                      }
}

// The route component for CollectionPage is dynamic, 
//as in the collectionPage the collectionId param is passed 
//and  CollectionPage's props.match.params has this value , 
//this collectionId property is read by the selector and the selector retrives 
//the required collection from store 

const mapDispatchToProps = dispatch => ({
        updateCollections: collectionsMap=>dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)

//operations can be performed on match.path
//and match.url gives us the value