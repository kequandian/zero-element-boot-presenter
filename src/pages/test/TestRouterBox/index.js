
import React from 'react';
import RouterBox from '@/components/presenter/card/RouterBox';
import RouterDetail from '@/components/presenter/card/RouterDetail';
import Settings from '@/components/presenter/card/Settings';

export default function index(props) {



    // const data = [
    //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/invite.svg", "toggle":true,"title": "我的邀请", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
    //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/ThreeLevelAgent.svg","toggle":true ,"title": "三级代理", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
    //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/SetUp.svg", "value":"12", "title": "设置", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
    //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/SetUp.svg", "value":"12", "title": "设置","percentage":'76', "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
 
    // ]
    const data = [
        { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/SetUp.svg", "value":"12", "title": "设置", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
        { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/SetUp.svg", "value":"12", "title": "设置","text":"34324","percentage":'76', "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
 
    ]

    return (
        <>
                    <RouterDetail items={data} />
                    {/* <Settings items={data2} /> */}
                    </>
    )
}