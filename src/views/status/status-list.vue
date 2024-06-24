<script setup>
import {ref} from "vue";
import LoaderOne from "@/components/dynamic-icon/loader-one.vue";
import LoaderTwo from "@/components/dynamic-icon/loader-two.vue";

import {
    Correct,
    Error,
    Rotation,
} from '@icon-park/vue-next'


const statusList = ref([
    {id: 12345678, time: '2024-06-24 05:24:33', user: 'Luminous', problem: 'ABC String', judgement: 0, judgementTag: 'Pending', language: 'C++', runTime: '1234 ms', memory: '255700 kb'},
    {id: 12345678, time: '2024-06-24 05:24:33', user: 'Luminous', problem: 'ABC String', judgement: 0, judgementTag: 'Pending', language: 'C++', runTime: '1234 ms', memory: '255700 kb'},
    {id: 12345678, time: '2024-06-24 05:24:33', user: 'Luminous', problem: 'ABC String', judgement: 1, judgementTag: 'Judging', language: 'Java', runTime: '1234 ms', memory: '255700 kb'},
    {id: 12345678, time: '2024-06-24 05:24:33', user: 'Luminous', problem: 'ABC String', judgement: 1, judgementTag: 'Judging', language: 'Python', runTime: '1234 ms', memory: '255700 kb'},
    {id: 12345678, time: '2024-06-24 05:24:33', user: 'Luminous', problem: 'ABC String', judgement: 2, judgementTag: 'Accept', language: 'C', runTime: '1234 ms', memory: '255700 kb'},
    {id: 12345678, time: '2024-06-24 05:24:33', user: 'Luminous', problem: 'ABC String', judgement: 3, judgementTag: 'Wrong Answer', language: 'C++', runTime: '1234 ms', memory: '255700 kb'},
    {id: 12345678, time: '2024-06-24 05:24:33', user: 'Luminous', problem: 'ABC String', judgement: 2, judgementTag: 'Accept', language: 'Python', runTime: '1234 ms', memory: '255700 kb'},
    {id: 12345678, time: '2024-06-24 05:24:33', user: 'Luminous', problem: 'ABC String', judgement: 5, judgementTag: 'Time Limit Exceeded', language: 'Java', runTime: '1234 ms', memory: '255700 kb'},
    {id: 12345678, time: '2024-06-24 05:24:33', user: 'Luminous', problem: 'ABC String', judgement: 4, judgementTag: 'Runtime Error', language: 'Golang', runTime: '1234 ms', memory: '255700 kb'},
    {id: 12345678, time: '2024-06-24 05:24:33', user: 'Luminous', problem: 'ABC String', judgement: 2, judgementTag: 'Accept', language: 'C++', runTime: '1234 ms', memory: '255700 kb'},
]);

function addClassForStatusItemJudgement(judgement) {
    switch (judgement) {
        case 0:
            return 'status-item-judgement-pending';
        case 1:
            return 'status-item-judgement-time-limit-judging';
        case 2:
            return 'status-item-judgement-accept';
        case 3:
            return 'status-item-judgement-wrong-ans';
        case 4:
            return 'status-item-judgement-runtime-error';
        case 5:
            return 'status-item-judgement-time-limit-exceeded';
    }
}

</script>

<template>
    <div class="status-list">
        <el-table class="status-table" :data="statusList">
            <el-table-column prop="id" label="#" width="100">
                <template #default="scope">
                        <span>{{ scope.row.id }}</span>
                </template>
            </el-table-column>
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
                    <div :class="addClassForStatusItemJudgement(scope.row.judgement)" style="align-items: center; display: flex">
                        <LoaderTwo v-if="scope.row.judgement === 0" class="status-item-judgement-icon"/>
                        <LoaderOne v-if="scope.row.judgement === 1" class="status-item-judgement-icon"></LoaderOne>
                        <Correct v-if="scope.row.judgement === 2" class="status-item-judgement-icon" theme="filled" size="14" :strokeWidth="1"/>
                        <Error v-if="scope.row.judgement === 3" class="status-item-judgement-icon" theme="filled" size="14" :strokeWidth="1"/>
                        <Error v-if="scope.row.judgement === 4" class="status-item-judgement-icon" theme="filled" size="14" :strokeWidth="1"/>
                        <Error v-if="scope.row.judgement === 5" class="status-item-judgement-icon" theme="filled" size="14" :strokeWidth="1"/>
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