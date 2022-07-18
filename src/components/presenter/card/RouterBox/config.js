import React from 'react';
import RouterBoxItem from '../RouterBoxItem';
import Presenter from '@/components/presenter/card/RouterBox';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import Container from 'zero-element-boot/lib/components/container/Container';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import PageModuleContainer from 'zero-element-boot-plugin-theme/lib/components/Container/PageModuleContainer';
import { Flex,Center } from '@chakra-ui/react'

/**
 * 
 * @param {data} items 数据
 * 
 */
export default function index(props) {

    const { items } = props
    console.log(items, ' == items')


    return items && items.map((item, i) => (

                    <RouterBoxItem  {...item} key={i} />
                
    )

    )



}