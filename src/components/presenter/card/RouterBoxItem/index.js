import React from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart'
import { Flex, Center, Stack } from '@chakra-ui/react'
import useQuery from 'zero-element-boot/lib/components/hooks/useQuery'
import { history } from 'umi';
import ItemTitleBold from 'zero-element-boot-plugin-theme/lib/components/text/ItemTitleBold';

/**
 * 
 * @param {icon} icon 图片
 * @param {title} title 标题
 * @param {navigation} navigation 外部链接
 * 
 */

export default function index(props) {

    const { icon = '', title = '', navigation  } = props

    // console.log('props === ', props)


    const queryData = useQuery(props.navigation)
    // console.log('queryData === ', queryData)

    const path = () => {
        history.push(queryData)
    }

    const onnextClick = navigation ? path : null

    return (
            <CssCart backgroundColor='#ffffff'margin=' 8px  ' width='70px' >
                <Stack padding='13px 2px' >
                    <Center h='60px' w='100%' bg='' >
                        <img src={icon} width='36px' height='36px' onClick={onnextClick} />
                    </Center>

                    <Center h='' w='100%' bg='' >
                    <ItemTitleBold>
                        {title}
                    </ItemTitleBold>
                    </Center>
                   
                </Stack>
            </CssCart>

    )


}
