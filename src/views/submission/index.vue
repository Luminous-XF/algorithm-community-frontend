<script setup>
import {ref} from "vue";
import Submission from "@/views/submission/submission.vue";
import TestcaseList from "@/views/submission/testcase-list.vue";
import CodePreview from "@/views/submission/code-preview.vue";
import '@/assets/css/submission.css';

const submissionId = ref(13875569);

</script>

<template>
    <div class="submission-container">
        <el-card class="submission-container-card">
            <template #header>
                <div class="card-header">
                    <span>Submission {{ submissionId }}</span>
                </div>
            </template>

            <Submission></Submission>

            <TestcaseList></TestcaseList>

            <CodePreview></CodePreview>
        </el-card>
    </div>
</template>

<style scoped>

</style>