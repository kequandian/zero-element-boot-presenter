import React from 'react';
import RouterItem from '@/components/presenter/card/RouterItem';


/**
 * 
 * @param {data} data 数据
 * 
 */
export default function index(props) {

    const { data } = props
    console.log(data, ' == data')

    // const data = [
    //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/invite.svg", "title": "我的邀请", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
    //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/ThreeLevelAgent.svg", "title": "三级代理", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
    //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/secondaryAgent.svg", "title": "二级代理", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
    //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/report.svg", "title": "结算报表", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
    //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/history.svg", "title": "历史", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
    //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/SetUp.svg", "title": "设置", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
    // ]

    const item0 = data[0]
    const item1 = data[1]
    const item2 = data[2]
    const item3 = data[3]
    const item4 = data[4]
    const item5 = data[5]

    return (
        <>
            <RouterItem icon={item0.icon} title={item0.title} navigation={item0.navigation} nextIcon={item0.nextIcon} />
            <RouterItem icon={item1.icon} title={item1.title} navigation={item1.navigation} nextIcon={item1.nextIcon} />
            <RouterItem icon={item2.icon} title={item2.title} navigation={item2.navigation} nextIcon={item2.nextIcon} />
            <RouterItem icon={item3.icon} title={item3.title} navigation={item3.navigation} nextIcon={item3.nextIcon} />
            <RouterItem icon={item4.icon} title={item4.title} navigation={item4.navigation} nextIcon={item4.nextIcon} />
            <RouterItem icon={item5.icon} title={item5.title} navigation={item5.navigation} nextIcon={item5.nextIcon} />

        </>

    )
}