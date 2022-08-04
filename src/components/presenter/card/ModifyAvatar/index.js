import React from 'react';
import Gridbox from 'zero-element-boot/lib/components/layout/Gridbox';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Flex, Center ,Stack} from '@chakra-ui/react'
import Container from 'zero-element-boot/lib/components/container/Container'
import Item from './item';

/**
 * 修改个人信息的item容器
 * 
 * @param {data} items 数据
 * 
 */
export default function index(props) {

    const { items,columns='1' } = props


    return (

        <CssCart  backgroundColor='#ffffff' padding='4px' margin='' borderRadius='8px' width='100%'>
                <Stack spacing='0' >
                    {
                        items && items.map((item, i) => (
                                <Item  {...item} key={i} />
                        )
                        )
                    }
                </Stack>
        </CssCart>


    )



}