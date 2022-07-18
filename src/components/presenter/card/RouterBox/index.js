import React from 'react';
import Gridbox from 'zero-element-boot/lib/components/layout/Gridbox';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Flex, Center } from '@chakra-ui/react'
import Container from 'zero-element-boot/lib/components/container/Container'
import RouterBoxItem from '../RouterBoxItem';

/**
 * 
 * @param {data} items 数据
 * 
 */
export default function index(props) {

    const { items } = props


    return (

        <CssCart boxShadow='0 2px 8px rgba(0, 0, 0, 0.15) ' backgroundColor='#ffffff' padding='10px' margin='8px' borderRadius='8px' width=''>
            <Center>
                <Container>
                   
                    {
                        items && items.map((item, i) => (
                            <Gridbox columns='4'>
                                <RouterBoxItem  {...item} key={i} />
                            </Gridbox>
                        )
                        )
                    }
                </Container>
            </Center>
        </CssCart>


    )



}