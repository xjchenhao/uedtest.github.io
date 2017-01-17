window.onload = function () {
    //--------------------------------------------------------【判断设备修改样式】
    var userAgent = navigator.userAgent,
        regMobileDevice = /(phone|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;

    if (!userAgent.match(regMobileDevice)) {
        document.getElementsByTagName('body')[0].classList.remove('mobile');
    }

    //--------------------------------------------------------【隐藏加载动画】
    document.getElementById('pageLoading').classList.add('js_hide');

    //--------------------------------------------------------【专业技能】

    echarts.init(document.getElementById('professionalCharts')).setOption({
        radar: [
            {
                indicator: [
                    {text: '前端架构', max: 100},
                    {text: '设计模式', max: 100},
                    {text: '代码规范', max: 100},
                    {text: '切图能力', max: 100},
                    {text: '服务端知识', max: 100},
                    {text: '产品意识', max: 100}
                ],
                shape: 'circle',
                center: ['50%', '50%']
            }
        ],
        series: [
            {
                name: '专业',
                type: 'radar',
                itemStyle: {
                    normal: {
                        color: '#80afcc'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#80afcc'
                        }
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#61a0a8'
                    }
                },
                areaStyle: {
                    normal: {
                        color: 'rgba(165, 200, 222,1)'
                    }
                },
                data: [
                    {
                        value: [95, 85, 95, 90, 80, 98],
                        name: 'my',
                        label: {
                            normal: {
                                show: true,
                                formatter: function (params) {
                                    return params.value;
                                }
                            }
                        }
                    }
                ]
            }
        ]
    });
    echarts.init(document.getElementById('skillCharts')).setOption(
        {
            radar: [
                {
                    indicator: [
                        {text: 'HTML', max: 100},
                        {text: 'CSS', max: 100},
                        {text: 'javaScript', max: 100},
                        {text: 'node', max: 100},
                        {text: '移动端开发', max: 100},
                        {text: '构建工具', max: 100},
                        {text: '前端框架', max: 100}
                    ],
                    center: ['50%', '50%']
                }
            ],
            series: [
                {
                    name: '技能',
                    type: 'radar',
                    itemStyle: {
                        normal: {
                            color: '#80afcc'
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#80afcc'
                            }
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: '#61a0a8'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: 'rgba(165, 200, 222,1)'
                        }
                    },
                    data: [
                        {
                            value: [90, 95, 85, 72, 90, 85, 88],
                            name: 'my',
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return params.value;
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        });
};