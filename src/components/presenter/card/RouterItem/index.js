import React from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart'
import { Flex } from '@chakra-ui/react'
import useQuery from 'zero-element-boot/lib/components/hooks/useQuery'
import { history } from 'umi';

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



    const queryData = useQuery(props.navigation)
    console.log('queryData === ', queryData)

    const path = () => {
        history.push(queryData)
    }

    const onnextClick = navigation ? path : null

    return (
        <CssCart backgroundColor='#f7f9fa' height='38px' width='100%' margin='2px 0 0 0 '>
            <Flex>
                <Flex w='100%'>
                    <div style={{ width: '30px', height: '30px', margin: '4px' }} >
                        <img src={icon} width='20px' height='20px' />
                    </div>
                    <div style={{ fontSize: '18px', lineHeight: '35px' }} >
                        {title}
                    </div>
                </Flex>
                <div style={{ width: '40px', height: '40px', margin: '4px 0' }} onClick={onnextClick}>
                    <img src={nextIcon} width='20px' height='20px' />
                </div>
            </Flex>
        </CssCart>

    )


}
