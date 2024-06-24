<script setup>
import StatusList from "./status-list.vue";
import StatusListPagination from "./status-list-pagination.vue";

</script>

<template>
    <div class="status-container">
        <el-card>
            <template #header>
                <div class="card-header">
                    <span>Status</span>
                </div>
            </template>

            <StatusList></StatusList>
            <StatusListPagination></StatusListPagination>
        </el-card>
    </div>
</template>

<style scoped>

</style>