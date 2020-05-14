import React from 'react';
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,imageUrl,size,history,match,linkUrl}) =>{
  // console.log('match',match.path,linkUrl)
  // console.log('history',history)
    return(<div className={`${size} menu-item`}
    onClick={()=>history.push(`${match.path}${linkUrl}`)}
    >
        <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
        
            <div className='content'>
                <h1 className='title'>{title.toString().toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>)

    };
    


export default withRouter(MenuItem);