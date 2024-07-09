<script setup>
import {ref} from 'vue'

import {
    Calendar,
    ThumbsUp,
    PreviewOpen,
    Comment,
} from '@icon-park/vue-next'

const postCardList = ref([
    {
        title: 'LeetCode题解-1439',
        excerpt: 'LeetCode题解-1439. 有序矩阵中的第 k 个最小数组和，暴力，优先队列，查找第 k 小数对LeetCode题解-1439. 有序矩阵中的第 k 个最小数组和，暴力，优先队列，查找第 k 小数对LeetCode题解-1439. 有序矩阵中的第 k 个最小数组和，暴力，优先队列，查找第 k 小数对LeetCode题解-1439. 有序矩阵中的第 k 个最小数组和，暴力，优先队列，查找第 k 小数对LeetCode题解-1439. 有序矩阵中的第 k 个最小数组和，暴力，优先队列，查找第 k 小数对LeetCode题解-1439. 有序矩阵中的第 k 个最小数组和，暴力，优先队列，查找第 k 小数对',
        headerImageUrl: 'https://picsum.photos/id/1/300/200',
        createDate: '2023-07-10',
        likes: 100,
        comments: 82,
        views: 100,
    },
    {
        title: 'LeetCode题解-2455-可被三整除的偶数的平均值',
        excerpt: 'LeetCode题解-2455. 可被三整除的偶数的平均值，水题',
        headerImageUrl: 'https://picsum.photos/id/2/300/200',
        createDate: '2023-07-10',
        likes: 10,
        comments: 82,
        views: 32 ,
    },
    {
        title: 'LeetCode题解-2451-差值数组不同的字符串',
        excerpt: 'LeetCode题解-2451. 差值数组不同的字符串，枚举',
        headerImageUrl: 'https://picsum.photos/id/3/300/200',
        createDate: '2023-05-25',
        likes: 10,
        comments: 82,
        views: 32 ,
    },
    {
        title: 'LeetCode题解-1439',
        excerpt: 'LeetCode题解-1439. 有序矩阵中的第 k 个最小数组和，暴力，优先队列，查找第 k 小数对',
        headerImageUrl: 'https://picsum.photos/id/1/300/200',
        createDate: '2023-07-10',
        likes: 100,
        comments: 82,
        views: 100,
    },
    {
        title: 'LeetCode题解-2455-可被三整除的偶数的平均值',
        excerpt: 'LeetCode题解-2455. 可被三整除的偶数的平均值，水题',
        headerImageUrl: 'https://picsum.photos/id/2/300/200',
        createDate: '2023-07-10',
        likes: 10,
        comments: 82,
        views: 32 ,
    },
    {
        title: 'LeetCode题解-2451-差值数组不同的字符串',
        excerpt: 'LeetCode题解-2451. 差值数组不同的字符串，枚举',
        headerImageUrl: 'https://picsum.photos/id/3/300/200',
        createDate: '2023-05-25',
        likes: 10,
        comments: 82,
        views: 32 ,
    },
])
</script>

<template>
    <div class="post-card-list">
        <ul>
            <li v-for="postCard in postCardList">
                <el-card class="post-card-item border-1px">
                    <el-image
                        class="post-card-header-image"
                        :src="postCard.headerImageUrl"
                    />

                    <div class="post-card-content">
                        <div class="post-card-title">
                            <span>{{ postCard.title }}</span>
                        </div>

                        <div class="post-card-excerpt">
                            <el-text line-clamp="4">{{ postCard.excerpt }}</el-text>
                        </div>

                        <div class="post-card-info">
                            <div class="post-info-create-date">
                                <Calendar theme="outline" size="16" fill="#000000" :strokeWidth="2" strokeLinejoin="miter"/>
                                <span>{{ postCard.createDate }}</span>
                            </div>

                            <div>
                                <ThumbsUp theme="outline" size="16" fill="#E53935" :strokeWidth="2" strokeLinejoin="miter"/>
                                <span>{{ postCard.likes }}</span>
                            </div>

                            <div>
                                <Comment theme="outline" size="16" fill="#000000" :strokeWidth="2" strokeLinejoin="miter"/>
                                <span>{{ postCard.comments }}</span>
                            </div>

                            <div>
                                <PreviewOpen theme="outline" size="16" fill="#000000" :strokeWidth="2" strokeLinejoin="miter"/>
                                <span>{{ postCard.views }}</span>
                            </div>
                        </div>
                    </div>
                </el-card>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>