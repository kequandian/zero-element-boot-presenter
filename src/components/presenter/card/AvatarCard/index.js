import React from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart'
import {Stack } from '@chakra-ui/react'
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import Avatar from 'zero-element-boot/lib/components/presenter/Avatar'
import Round from 'zero-element-boot/lib/components/layout/Round';

/**
 * 
 * @param {title} title 标题、名字
 * @param {subtitle} subtitle 副标题
 * @param {avatar} avatar 头像
 * 
 */
export default function index(props) {

    const { children, title, subtitle, avatar } = props

    return React.Children.map(children, child => {
        return (
            <CssCart width='100%' height='' backgroundColor='transparent' padding='10px'>
                <Round direction='row' align='start-with-last-end' >
                    <Flexbox justify='center' direction='row' align='center' >
                        <Stack>
                            <Avatar size='60px' url={avatar} />
                        </Stack>
                        <Stack>
                            <div style={{ fontSize: '14px', color: '#333333', fontWeight: 'bold' }} >
                                {title}
                            </div>
                            <div style={{ fontSize: '14px', color: '#4b5c6b' }}>
                                {subtitle}
                            </div>
                        </Stack>
                    </Flexbox>

                    <div>
                        {child}
                    </div>
                </Round>
            </CssCart>
        )

    })
}
