<script setup>
import Header from './header/header.vue'
</script>

<template>
    <div class="common-layout-container">
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>

            <el-main class="main-container">
                <router-view></router-view>
            </el-main>

<!--            <el-footer>Footer</el-footer>-->
        </el-container>
    </div>
</template>

<style scoped>

</style>

<style>

</style>