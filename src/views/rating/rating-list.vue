<script setup>
import {ref} from "vue";
import {
    Trophy,
} from '@icon-park/vue-next'

const ratingList = ref([
    {rank: 1, user: 'Luminous', avatarUrl: '/src/assets/image/avatar/avatar-1.jpg', solved: 519, rate: '73.6%', personalSignature: 'Why sleep long, when forever rest after death！'},
    {rank: 2, user: 'Luminous', avatarUrl: '/src/assets/image/avatar/avatar-1.jpg', solved: 519, rate: '73.6%', personalSignature: 'Why sleep long, when forever rest after death！'},
    {rank: 3, user: 'Luminous', avatarUrl: '/src/assets/image/avatar/avatar-1.jpg', solved: 519, rate: '73.6%', personalSignature: 'Why sleep long, when forever rest after death！'},
    {rank: 4, user: 'Luminous', avatarUrl: '/src/assets/image/avatar/avatar-1.jpg', solved: 519, rate: '73.6%', personalSignature: 'Why sleep long, when forever rest after death！'},
    {rank: 5, user: 'Luminous', avatarUrl: '/src/assets/image/avatar/avatar-1.jpg', solved: 519, rate: '73.6%', personalSignature: 'Why sleep long, when forever rest after death！'},
]);
</script>

<template>
    <div class="rating-list">
        <el-table class="rating-table" :data="ratingList">
            <el-table-column prop="rank" label="Rank" width="100" align="center">
                <template #default="scope">
                    <div class="rating-list-item-rank">
                        <Trophy v-if="scope.row.rank === 1" theme="filled" size="24" fill="#FFEB3B" :strokeWidth="1"/>
                        <Trophy v-if="scope.row.rank === 2" theme="filled" size="24" fill="#BDBDBD" :strokeWidth="1"/>
                        <Trophy v-if="scope.row.rank === 3" theme="filled" size="24" fill="#FFB300" :strokeWidth="1"/>
                        <span v-if="scope.row.rank > 3">{{ scope.row.rank }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="user" label="User" width="240">
                <template #default="scope">
                    <div class="rating-list-item-userinfo">
                        <el-avatar :size="30" :src="scope.row.avatarUrl"></el-avatar>
                        <span>{{ scope.row.user }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="solved" label="Solved" width="100">
                <template #default="scope">
                    <span>{{ scope.row.solved }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="rate" label="Rate" width="100">
                <template #default="scope">
                    <span>{{ scope.row.rate }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="personalSignature" label="Personal Signature" width="">
                <template #default="scope">
                    <span>{{ scope.row.personalSignature }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style scoped>

</style>