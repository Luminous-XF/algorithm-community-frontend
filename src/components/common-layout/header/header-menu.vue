<script setup>
import {ref} from "vue";
import HeaderProfile from './header-profile.vue'
import HeaderGetStarted from "./header-get-started.vue";
import {
    Home,
    Book,
    VideoTwo,
    Data,
    Ranking,
    Trophy,
    Message,
    Help,
} from '@icon-park/vue-next'

const useMenus = ref([
    {name: 'Home', url: '/home'},
    {name: 'Problems', url: '/problem-set'},
    {name: 'Video', url: '/video'},
    {name: 'Status', url: '/status'},
    {name: 'Rating', url: '/rating'},
    {name: 'Contests', url: '/contests'},
    {name: 'Forum', url: '/forum'},
    {name: 'F.A.Q', url: '/faq'},
])

</script>

<template>
    <div>
        <el-menu
            :default-active="$route.push"
            class="el-menu-demo"
            mode="horizontal" router
        >
            <el-menu-item index="/home">
                <Home theme="outline" size="20" class="header-menu-icon"/>
                <span>Home</span>
            </el-menu-item>

            <el-menu-item index="/problem-set">
                <Book theme="outline" size="20" class="header-menu-icon"/>
                <span>Problems</span>
            </el-menu-item>

            <el-menu-item index="/video">
                <VideoTwo theme="outline" size="20" class="header-menu-icon"/>
                <span>Video</span>
            </el-menu-item>

            <el-menu-item index="/status">
                <Data theme="outline" size="20" class="header-menu-icon" value=""/>
                <span>Status</span>
            </el-menu-item>

            <el-menu-item index="/rating">
                <Ranking theme="outline" size="20" class="header-menu-icon"/>
                <span>Rating</span>
            </el-menu-item>

            <el-menu-item index="/contests">
                <Trophy theme="outline" size="20" class="header-menu-icon"/>
                <span>Contests</span>
            </el-menu-item>

            <el-menu-item index="/forum">
                <Message theme="outline" size="20" class="header-menu-icon"/>
                <span>Forum</span>
            </el-menu-item>

            <el-menu-item index="/faq">
                <Help theme="outline" size="20" class="header-menu-icon"/>
                <span>F.A.Q</span>
            </el-menu-item>


            <el-menu-item class="header-menu-profile">
                <HeaderProfile></HeaderProfile>
            </el-menu-item>

<!--            <el-menu-item class="header-menu-get-started">-->
<!--                <HeaderGetStarted></HeaderGetStarted>-->
<!--            </el-menu-item>-->
        </el-menu>
    </div>
</template>

<style scoped>

</style>

<style>
.header-profile-dropdown .header-profile-dropdown-item:hover {
    background-color: var(--global-font-title-hover-dolor);
    color: var(--global-font-title-color);
}
</style>