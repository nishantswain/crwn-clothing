import React from 'react';
import {MenuItemContainer,BackgroundImageContainer,ContentContainer,ContentTitle,ContentSubtitle} from './menu-item.styles'
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,imageUrl,size,history,match,linkUrl}) =>{
  // console.log('match',match.path,linkUrl)
  // console.log('history',history)
    return(
    <MenuItemContainer size={size}
    onClick={()=>history.push(`${match.path}${linkUrl}`)}
    >
        <BackgroundImageContainer
                className='background-image'
              imageUrl={imageUrl}
              />
        
            <ContentContainer >
                <ContentTitle className='title'>{title.toString().toUpperCase()}</ContentTitle>
                <ContentSubtitle className='subtitle'>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        
        </MenuItemContainer>)

    };
    


export default withRouter(MenuItem);