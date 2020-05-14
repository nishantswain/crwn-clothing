import React from 'react'
import './shoppage.style.scss'
// import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection-page.component'
// import SHOP_DATA from '../../redux/shop/shop.data'

const ShopPage =({match})=>(<div>

         <Route exact path={`${match.path}`}component={CollectionOverview} />
         <Route exact path={`${match.path}/:collectionId`}component={CollectionPage} />
         

        </div>)




export default ShopPage

//operations can be performed on match.path
//and match.url gives us the value