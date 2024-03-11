import './Element.css'
import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';

export default function Element(props) {

    let { id } = useParams();

    return(
        <div className='element'>
            <h3>{props.searchFilter[id].name}</h3>
            <h4>{props.searchFilter[id].type}</h4>
            <img src={props.searchFilter[id].card_images[0].image_url} alt="" />
            <h4>{props.searchFilter[id].desc}</h4>
    </div>
    )
}