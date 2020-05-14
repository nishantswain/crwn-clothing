import React from 'react'
import './collection-preview.style.scss'
import CollectionItem from '../collection-item/collection-item.component'


const CollectionPreview =(props)=>{

    const {title,items}=props;
        return(

                <div className='collection-preview'>
                    <h1 className='title'>{title.toString().toUpperCase()}</h1>
                    <div className='preview'>
                    {
                        items.filter((item,idx)=>idx<4).map(item=>(
                        <CollectionItem key={item.id} item={item}/>
                        ))
                    }
                    </div>
                    
                </div>

)

}

export default CollectionPreview;