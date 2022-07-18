import React from 'react';
import RouterBox from './config';
import Presenter from '@/components/presenter/card/RouterBox';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import Gridbox from 'zero-element-boot/lib/components/layout/Gridbox';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import PageModuleContainer from 'zero-element-boot-plugin-theme/lib/components/Container/PageModuleContainer';
import { Flex, Center } from '@chakra-ui/react'
import Container from 'zero-element-boot/lib/components/container/Container'

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
                    <Flex columns={4} direction=''>
                        <RouterBox items={items} />
                    </Flex>
                </Container>
            </Center>
        </CssCart>


    )



}