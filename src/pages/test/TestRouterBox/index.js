
import React from 'react';
import RouterBox from '@/components/presenter/card/RouterBox';
import Router from '@/components/presenter/card/Router';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart'
import { Flex, Center, Stack } from '@chakra-ui/react'
import useQuery from 'zero-element-boot/lib/components/hooks/useQuery'
import { history } from 'umi';
import ItemTitleBold from 'zero-element-boot-plugin-theme/lib/components/text/ItemTitleBold';

export default function index(props) {



    const data = [
        { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/invite.svg", "title": "我的邀请", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
        { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/ThreeLevelAgent.svg", "title": "三级代理", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
        { "value":"23", "title": "历史", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
        { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/SetUp.svg", "value":"12", "title": "设置", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
    ]

    return (
                    <RouterBox items={data} />
    )
}