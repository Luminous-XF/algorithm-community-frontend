<script setup>
import {ref, reactive} from "vue";
import {useRouter} from "vue-router";
import '@/assets/css/login.css';

const form = reactive({
    username: '',
    password: '',
    verificationCode: '',
})

let activeName = ref('login');

const router = useRouter();

function onSubmitForLogin() {
    router.push('/home');
}

function onSubmitForRegister() {
    history.go(0);
    router.push('/login');
    activeName = 'login';
}

</script>

<template>
    <div class="login-container">
        <el-card>
            <el-form
                label-width="auto"
                :model="form"
            >
                <div class="login-image">
                    <img src="@/assets/image/background/login/login-image.png" alt="">
                </div>

                <div class="login-item">
                    <el-tabs v-model="activeName" class="demo-tabs">
                        <el-tab-pane label="Login" name="login">
                            <span class="input-title">Username</span>
                            <el-input v-model="form.username" placeholder=""/>

                            <span class="input-title">Password</span>
                            <el-input v-model="form.password" placeholder="" type="password"/>

                            <el-button type="primary" @click="onSubmitForLogin">Login</el-button>
                        </el-tab-pane>

                        <el-tab-pane label="Register" name="register">
                            <span class="input-title">Username</span>
                            <el-input v-model="form.username" placeholder=""/>
                            <span class="input-title">Password</span>
                            <el-input v-model="form.password" placeholder="" type="password"/>
                            <span class="input-title">Verification code</span>
                            <div class="verification-code-item">
                                <el-input v-model="form.verificationCode" placeholder=""/>
                                <el-link type="primary">Verification code</el-link>
                            </div>
                            <el-button type="primary" @click="onSubmitForRegister">Register</el-button>
                        </el-tab-pane>
                    </el-tabs>
                </div>

            </el-form>
        </el-card>
    </div>
</template>

<style scoped>

</style>