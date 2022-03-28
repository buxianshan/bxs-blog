export default ({router}) => {
    // 路由切换事件处理
    router.beforeEach((to, from, next) => {
        // console.log(`切换路由 from ${from.fullPath} to ${to.fullPath}`)
        // 触发百度的pv统计
        if (typeof _hmt != 'undefined' && window.location.hostname !== 'localhost') {
            if (to.path) {
                _hmt.push(['_trackPageview', to.fullPath]);
            }
        }

        // continue
        next();
    })

    // temporary fix for https://github.com/vuejs/vuepress/issues/2428
    if(typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
        router.onReady(() => {
            const { app } = router;
            app.$once("hook:mounted", () => {
                setTimeout(() => {
                    const { hash } = document.location;
                    if (hash.length > 1) {
                        const id = decodeURIComponent(hash.substring(1));
                        const element = document.getElementById(id);
                        if (element) element.scrollIntoView();
                    }
                }, 100);
            });
        });
    }
};