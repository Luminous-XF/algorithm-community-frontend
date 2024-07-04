<script setup>
import {ref} from 'vue'
import {
    Round,
    CheckOne,
    CloseOne,
} from '@icon-park/vue-next'

const testcaseInfo = ref({
    totalCount: 10,
    acceptCount: 5,
    wrongTestcaseNum: 6,
});
</script>

<template>
    <div class="testcase-list-container">
        <div class="testcase-list">
            <div
                class="testcase-icon"
                v-for="i in testcaseInfo.totalCount"
                style="height: 26px; width: 26px; margin: 1px">

                <!--       待测试         -->
                <CheckOne
                    v-if="i <= testcaseInfo.acceptCount"
                    theme="multi-color" size="21"
                    :fill="['#000000' ,'#ffffff' ,'#689F38' ,'#ffffff']"
                    :strokeWidth="2" strokeLinejoin="miter"
                />

                <!--       已通过         -->
                <Round
                    v-if="i > testcaseInfo.acceptCount && i !== testcaseInfo.wrongTestcaseNum" t
                    heme="outline" size="21" fill="#000000"
                    :strokeWidth="2" strokeLinejoin="miter"
                />

                <!--       未通过         -->
                <CloseOne
                    v-if="i === testcaseInfo.wrongTestcaseNum"
                    theme="multi-color" size="21"
                    :fill="['#000000' ,'#ffffff' ,'#F44336' ,'#ffffff']"
                    :strokeWidth="2" strokeLinejoin="miter"
                />
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>