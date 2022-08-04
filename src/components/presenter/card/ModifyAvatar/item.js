import React from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart'
import { Stack, Flex, Center } from '@chakra-ui/react'
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import Avatar from 'zero-element-boot/lib/components/presenter/Avatar'
import Round from 'zero-element-boot/lib/components/layout/Round';
import ItemTitleBold from 'zero-element-boot-plugin-theme/lib/components/text/ItemTitleBold';
import ItemTitle from 'zero-element-boot-plugin-theme/lib/components/text/ItemTitle';
import Container from 'zero-element-boot/lib/components/container/Container'
import RouterItem from '@/components/presenter/card/RouterItem'
import ContainerInactiveTitle from 'zero-element-boot-plugin-theme/lib/components/text/ContainerInactiveTitle'

/**
 * 
 * @param {title} title 标题、名字
 * @param {subtitle} subtitle 副标题
 * @param {avatar} avatar 头像
 * 
 */


export default function index(props) {

    const { title = '名字', content = '', icon,onnextClick  } = props
function ChangeAvatar(){
    console.log('aa')
}


    return (
        <CssCart borderBottom='1px #f5f5f5 solid' minHeight='40px' padding='4px 10px' >
            <Container>
                <Flexbox align='start-with-last-end' direction='row' >
                    <ItemTitleBold>
                        {title}
                    </ItemTitleBold>

                    {icon? (
                        <Flex>
                           
                            <Center h='60px' w='100%' bg='' onClick={() => ChangeAvatar()} >
                                <img src={icon} width='36px' height='36px' />
                            </Center>
                            <Center h='100%' w='22px' bg='' >
                                <img src='http://static.smallsaas.cn/house/2022/svg/Router/enter.svg' width='12px' height='16px' />
                            </Center>
                        </Flex>
                    ) : (
                        <Flex>
                        <ContainerInactiveTitle>
                            {content}
                        </ContainerInactiveTitle>
                        <Center h='100%' w='' bg='' >
                                <img src='http://static.smallsaas.cn/house/2022/svg/Router/enter.svg' width='12px' height='16px' />
                        </Center>
                    </Flex>
                        )}

                </Flexbox>
            </Container>
        </CssCart>

    )

}
