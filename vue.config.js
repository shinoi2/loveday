module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    // If you are using less-loader@5 please spread the lessOptions to options directly
                    modifyVars: {
                        // 这里就是样式变量的名称以及对应的值，可以按照上面提供的官方文档进行配置
                        'primary-color': '#f7629e',
                        'link-color': '#41B883',
                        'border-color-base': '#fdd8e7',
                    },
                    javascriptEnabled: true
                }
            }
        }
    }
}