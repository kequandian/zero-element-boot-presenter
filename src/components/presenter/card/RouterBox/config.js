import React from 'react';
import RouterBoxItem from '../RouterBoxItem';

export default function index(props) {

    const { items } = props
    // console.log(items, ' == items')


    return items && items.map((item, i) => (

                    <RouterBoxItem  {...item} key={i} />
                
    )

    )



}