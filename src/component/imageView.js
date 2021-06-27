import React from 'react';

const ImageView = (props) =>{
    const {urls, alt_description}= props.location.state.img
    console.log(props.location.state.img)
    return(
        <div>
            <img src={urls.regular} alt={alt_description}/>
        </div>
    )
}

export default ImageView