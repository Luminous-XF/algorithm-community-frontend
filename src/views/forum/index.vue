<script setup>
import '@/assets/css/forum.css';
import PostCardList from "@/views/forum/post-card-list.vue";
import PostListPagination from "@/views/forum/post-list-pagination.vue";

</script>

<template>
    <div class="forum-container">
        <el-card class="forum-container-card">
            <template #header>
                <div class="card-header">
                    <span>Forum</span>
                </div>
            </template>

            <PostCardList></PostCardList>

            <PostListPagination></PostListPagination>
        </el-card>
    </div>
</template>

<style scoped>

</style>