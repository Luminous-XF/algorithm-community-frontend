<script setup>
import {ref} from "vue";

const problemInfoList = ref([
    {problemId: 10001, problemTitle: 'ABC String', problemJudgeResult: 0},
    {problemId: 10002, problemTitle: 'Balanced Tree Path', problemJudgeResult: 1},
    {problemId: 10003, problemTitle: 'Cramming for Finals', problemJudgeResult: 1},
    {problemId: 10004, problemTitle: 'Ordered Problem Set', problemJudgeResult: 0},
    {problemId: 10005, problemTitle: 'Eccentric Excursion', problemJudgeResult: 2},
    {problemId: 10006, problemTitle: 'ABC String', problemJudgeResult: 0},
    {problemId: 10007, problemTitle: 'Balanced Tree Path', problemJudgeResult: 1},
    {problemId: 10008, problemTitle: 'Cramming for Finals', problemJudgeResult: 1},
    {problemId: 10009, problemTitle: 'Ordered Problem Set', problemJudgeResult: 0},
    {problemId: 10010, problemTitle: 'Eccentric Excursion', problemJudgeResult: 2},

])

function addClassForCardByProblemJudgeResult(problemJudgeResult) {
    switch (problemJudgeResult) {
        case 0:
            return 'problem-item';
        case 1:
            return 'problem-item problem-item problem-judge-result-accept';
        case 2:
            return 'problem-item problem-judge-result-wrong';
        default:
            return 'problem-item';
    }
}
</script>

<template>
    <div class="problem-list">
        <ul>
            <li v-for="problem in problemInfoList" :key="problem.problemId">
                <el-card
                    :class="addClassForCardByProblemJudgeResult(problem.problemJudgeResult)">
                    <div class="problem-item-info">
                        <div class="problem-id">
                            <span>{{ problem.problemId }}</span>
                        </div>
                        <div class="problem-title">
                            <span>{{ problem.problemTitle }}</span>
                        </div>
                    </div>
                </el-card>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>