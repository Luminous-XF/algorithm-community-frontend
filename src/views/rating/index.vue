<script setup>
import RatingList from "./rating-list.vue";
import RatingPagination from "./rating-pagination.vue";
import '@/assets/css/rating.css';

</script>

<template>
    <div class="rating-container">
        <el-card class="rating-container-card">
            <template #header>
                <div class="card-header">
                    <span>Rating</span>
                </div>
            </template>

            <RatingList></RatingList>
            <RatingPagination></RatingPagination>
        </el-card>
    </div>
</template>

<style scoped>

</style>