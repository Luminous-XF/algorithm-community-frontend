<script setup>
import {ref} from "vue";
import LoaderOne from "@/components/dynamic-icon/loader-one.vue";
import LoaderTwo from "@/components/dynamic-icon/loader-two.vue";
import {
    Correct,
    Error,
} from '@icon-park/vue-next'


const submissionList = ref([
    {id: 12345678, time: '2024-06-24 05:24:33', user: 'Luminous', problem: 'ABC String', judgement: 0, judgementTag: 'Pending', language: 'C++', runTime: '1234 ms', memory: '255700 kb'},
]);

function addClassForSubmissionItemJudgement(judgement) {
    switch (judgement) {
        case 0:
            return 'submission-item-judgement-pending';
        case 1:
            return 'submission-item-judgement-time-limit-judging';
        case 2:
            return 'submission-item-judgement-accept';
        case 3:
            return 'submission-item-judgement-wrong-ans';
        case 4:
            return 'submission-item-judgement-runtime-error';
        case 5:
            return 'submission-item-judgement-time-limit-exceeded';
    }
}

</script>

<template>
    <div class="submission">
        <el-table class="submission-table" :data="submissionList">
<!--            <el-table-column prop="id" label="#" width="100" align="center">-->
<!--                <template #default="scope">-->
<!--                    <span>{{ scope.row.id }}</span>-->
<!--                </template>-->
<!--            </el-table-column>-->
            <el-table-column prop="time" label="Time" width="115">
                <template #default="scope">
                    <span>{{ scope.row.time }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="user" label="User" width="180">
                <template #default="scope">
                    <span>{{ scope.row.user }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="problem" label="Problem" width="240">
                <template #default="scope">
                    <span>{{ scope.row.problem }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="judgement" label="Judgement" width="180">
                <template #default="scope">
                    <div :class="addClassForSubmissionItemJudgement(scope.row.judgement)" style="align-items: center; display: flex">
                        <LoaderTwo v-if="scope.row.judgement === 0" class="submission-item-judgement-icon"/>
                        <LoaderOne v-if="scope.row.judgement === 1" class="submission-item-judgement-icon"></LoaderOne>
                        <Correct v-if="scope.row.judgement === 2" class="submission-item-judgement-icon" theme="filled" size="14" :strokeWidth="1"/>
                        <Error v-if="scope.row.judgement === 3" class="submission-item-judgement-icon" theme="filled" size="14" :strokeWidth="1"/>
                        <Error v-if="scope.row.judgement === 4" class="submission-item-judgement-icon" theme="filled" size="14" :strokeWidth="1"/>
                        <Error v-if="scope.row.judgement === 5" class="submission-item-judgement-icon" theme="filled" size="14" :strokeWidth="1"/>
                        <span>{{ scope.row.judgementTag }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="language" label="Language" width="105">
                <template #default="scope">
                    <span>{{ scope.row.language }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="runTime" label="RunTime" width="100">
                <template #default="scope">
                    <span>{{ scope.row.runTime }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="memory" label="Memory" width="120">
                <template #default="scope">
                    <span>{{ scope.row.memory }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style scoped>

</style>