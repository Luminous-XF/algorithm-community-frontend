<script setup>
import ProblemList from "./problem-list.vue";
import ProblemListPagination from "@/views/problem-set/problem-list-pagination.vue";

</script>

<template>
    <div class="problem-set-container">
        <el-card class="problem-set-container-card">
            <template #header>
                <div class="card-header">
                    <span>Problem Set</span>
                </div>
            </template>

            <ProblemList></ProblemList>

            <ProblemListPagination></ProblemListPagination>
        </el-card>
    </div>
</template>

<style scoped>

</style>

<style>


</style>