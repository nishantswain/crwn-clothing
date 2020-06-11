import React from 'react';
import {DirectoryMenuConatiner} from './directory-menu.styles'
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import {createStructuredSelector} from 'reselect'


const DirectoryMenu=({sections}) =>
   
        (<DirectoryMenuConatiner className='directory-menu'>

            {
            sections.map(({id,...otherSectionProps})=>(
                    <MenuItem  key={id} {...otherSectionProps}/>
                ))
            }

        </DirectoryMenuConatiner>)
    


const mapStateToProps=createStructuredSelector({
    sections:selectDirectorySections
});

export default connect(mapStateToProps,null)(DirectoryMenu);