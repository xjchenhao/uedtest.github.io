fis.set('project.ignore', ['.bowerrc', '/libs']);

fis.set('new date', Date.now());

fis
    .match('*', {
        deploy: fis.plugin('local-deliver', {
            to: '/Users/chenhao/工程/我的项目/xjchenhao.github.io'
        })
    })
    .match('/app/views/master/pages/(*.html)', {
        release: '$1'
    })
    .match('/app/style/master/(**.*)', {
        release: 'style/$1'
    })
    .match('/app/script/master/(**.*)', {
        release: 'script/$1'
    })
    .match('/app/image/master/(**.*)', {
        release: 'image/$1'
    })
    .match('/app/image/common/(**.*)', {
        release: 'image/$1'
    })
    .match('{/app/views/master/includes/**.*,/app/style/common/**.*}', {
        release: false
    })

    // style
    .match('**.styl', {
        parser: fis.plugin('stylus', {
            sourcemap: true
        }),
        rExt: '.css'
    })
    .match('{**/qst/*.*,/app/style/master/*.css,/app/style/master/*.css.map,/app/style/common/*.css,/app/style/common/*.css.map}', {
        release: false
    });