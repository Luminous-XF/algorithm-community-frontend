import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/common-layout',  // 布局页
        name: 'common-layout',
        component: () => import('../components/common-layout/index.vue'),
        children: [
            {
                path: '/home',  // 首页,
                name: 'Home',
                component: () => import('../views/home/index.vue')
            },
            {
                path: '/problem-set',  // 题集页,
                name: 'ProblemSet',
                component: () => import('../views/problem-set/index.vue')
            },
            {
                path: '/video',  // 视频页,
                name: 'video',
                component: () => import('../views/video/index.vue')
            },
            {
                path: '/status',  // 提交信息页,
                name: 'status',
                component: () => import('../views/status/index.vue')
            },
            {
                path: '/rating',  // 排行榜页,
                name: 'rating',
                component: () => import('../views/rating/index.vue')
            },
            {
                path: '/contests',  // 比赛页,
                name: 'contests',
                component: () => import('../views/contests/index.vue')
            },
            {
                path: '/forum',  // 帖子页,
                name: 'forum',
                component: () => import('../views/forum/index.vue')
            },
            {
                path: '/faq',  // F.A.Q,
                name: 'faq',
                component: () => import('../views/faq/index.vue')
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('../views/login/index.vue')
            },
            {
                path: '/problem',
                name: 'problem',
                component: () => import('../views/problem/index.vue')
            },
            {
                path: '/submission',
                name: 'submission',
                component: () => import('../views/submission/index.vue')
            },
        ]
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router