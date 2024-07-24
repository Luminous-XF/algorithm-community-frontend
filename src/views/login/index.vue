<script setup>
import {ref, reactive} from "vue";
import '@/assets/css/login.css';
import Login from "@/views/login/login.vue";
import Register from "@/views/login/register.vue";


let activeName = ref('login');

</script>

<template>
    <div class="login-container">
        <el-card>
                <div class="login-image">
                    <img src="@/assets/image/background/login/login-image.png" alt="">
                </div>

                <div class="login-item">
                    <el-tabs v-model="activeName" class="demo-tabs">
                        <el-tab-pane label="Login" name="login">
                            <Login></Login>
                        </el-tab-pane>

                        <el-tab-pane label="Register" name="register">
                            <Register></Register>
                        </el-tab-pane>
                    </el-tabs>
                </div>
        </el-card>
    </div>
</template>

<style scoped>

</style>

<style>

</style>