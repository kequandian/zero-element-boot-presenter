import React from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart'
import { Flex } from '@chakra-ui/react'
import useQuery from 'zero-element-boot/lib/components/hooks/useQuery'
import { history } from 'umi';
import ItemTitle from '@/components/text/ItemTitle';

/**
 * 
 * @param {icon} icon 图片
 * @param {title} title 标题
 * @param {navigation} navigation 外部链接
 * @param {nextIcon} nextIcon "下一个"指示图标
 * 
 */

export default function index(props) {

    const { icon = '', title = '', navigation, nextIcon = '' } = props

    console.log('props === ', props)


    const queryData = useQuery(props.navigation)
    console.log('queryData === ', queryData)

    const path = () => {
        history.push(queryData)
    }

    const onnextClick = navigation ? path : null

    return (
        <CssCart backgroundColor='#f7f9fa' height='30px' width='100%' padding='' margin='2px 0 0 0 ' >
            <Flex>
                <Flex w='100%'>
                    <div style={{ width: '20px', margin: '0 6px' }} >
                        <img src={icon} width='16px' height='16px' />
                    </div>
                    <ItemTitle>
                        {title}
                    </ItemTitle>
                </Flex>
                <div style={{ width: '20px', height: '', margin: ' 0' }} onClick={onnextClick}>
                    <img src={nextIcon} width='16px' height='16px' />
                </div>
            </Flex>
        </CssCart>

    )


}
