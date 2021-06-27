import React from 'react';
import { GridList, GridListTile,GridListTileBar} from '@material-ui/core';
import { Link} from 'react-router-dom';

const ImageGallary = (props) =>{
    return(
        <div>
            <GridList cellHeight={200} cols={4}>
                {props.photos.map(img =>(
                
                    <GridListTile key={img.id}>
                    <img src={img.urls.regular} alt={img.alt_description}/>
                    <Link to={{
                        pathname:'/image/${img.id}',
                        state:{img}
                    }}><GridListTileBar title={img.description} subtitle={img.user.name}/></Link>
                </GridListTile>
            
                    
                ))}
            </GridList>
        </div>
    )
};

export default ImageGallary;