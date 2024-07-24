<script setup>
import {ref} from 'vue'
import axios from "axios";
import {useRouter} from "vue-router";


const router = useRouter();

const checkUsername = (rule, value, callback) => {
    if (value === '' || value === undefined || value === null) {
        return callback(new Error('Please input the username!'))
    }

    if (value.length < 3 || value.length > 16) {
        return callback(new Error('Username length should be between 3-16 characters.'))
    }

    const regEx = /^[a-zA-Z0-9_-]+$/
    if (!regEx.test(value)) {
        return callback(new Error('Username can only consist of characters from \'0\'-\'9\', \'a\'-\'z\', \'A\'-\'Z\', \'-\' and \'_\'!'))
    }

    return callback()
}

const checkPassword = (rule, value, callback) => {
    if (value === '' || value === undefined || value === null) {
        return callback(new Error('Please input the password!'))
    }

    if (value.length < 8 || value.length > 16) {
        return callback(new Error('Password length should be between 8-16 characters.'))
    }

    const regEx = /[a-zA-Z\d!@#$%^&*(),.?":{}|<>]+$/
    if (!regEx.test(value)) {
        return callback(new Error('Password can only consist of digits, letters, and special symbols.'))
    }

    return callback()
}

const rules = ref({
    username: [{validator: checkUsername}],
    password: [{validator: checkPassword}],
})

const loginFormRef = ref()

const loginForm = ref({
    username: '',
    password: '',
})

// 刷新 Access Token
const getNewToken = () => {
    const refreshToken = ref('');
    if (localStorage.getItem('refreshToken') !== null) {
        refreshToken.value = localStorage.getItem('refreshToken');
    }

    return axios.get('/api/v1/tokens/refresh-token', {
        headers: {
            'Content-Type': 'application/json',
            'refreshToken': refreshToken.value,
        }
    });
}

// 请求拦截器
axios.interceptors.request.use((config) => {
    // 从 localStorage 获取 Access Token
    const token = ref('')
    if (localStorage.getItem('accessToken') !== null) {
        token.value = localStorage.getItem('accessToken')
    }
    // 将 Access Token 加入请求头
    config.headers['Authorization'] = token.value;

    return config;
}, (error) => {
    // 请求出现异常, 拒绝请求
    return Promise.reject(error)
});

// 响应拦截器
axios.interceptors.response.use(async (rsp) => {
    // 判断: 401 的状态码, 自动续期
    if (rsp.data.code === 401) {
        // 自动续期
        const res = await getNewToken();
        if (res.data.code === 201) {
            // 重新请求
            rsp = await axios.request(rsp.config)
        }
    }
    return rsp;
}, (error) => {
    // 响应出错, 拒绝响应
    return Promise.reject(error);
})

// 提交登录表单
const submitLoginForm = async (form) => {
    if (!form) {
        return
    }

    await form.validate((valid) => {
        if (valid) {
            let data = loginForm.value
            axios.post('/api/v1/tokens/username-password', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                const data = response.data.data
                localStorage.setItem('accessToken', data['accessToken'])
                localStorage.setItem('refreshToken', data['refreshToken'])
                console.log(response.data)
                router.push('/home');
            }).catch(
                error => {
                    console.log(error)
                }
            )
        } else {
            console.log("Error")
        }
    })
}
</script>

<template>
    <el-form
        class="login-form"
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="auto"
        label-position="top"
    >
        <el-form-item label="Username" prop="username">
            <el-input
                v-model="loginForm.username"
                placeholder=""
            />
        </el-form-item>

        <el-form-item label="Password" prop="password">
            <el-input
                v-model="loginForm.password"
                placeholder=""
                type="password"/>
        </el-form-item>

        <el-form-item>
            <el-button
                type="primary"
                @click="submitLoginForm(loginFormRef)">Login
            </el-button>
        </el-form-item>
    </el-form>
</template>

<style scoped>

</style>

<style>

.login-form label {
    color: var(--global-light-theme-main-color);
    font-weight: bold;
    font-size: 16px;
}

.login-form .el-input__wrapper {
    box-shadow: inset 0 0 0 1px var(--global-light-theme-main-color, var(--global-light-theme-main-color));
}

.login-form input {
    color: var(--global-light-theme-main-color);
    caret-color: black;
}

.login-form button {
    margin-top: 14px;
    width: 100px;
    background: transparent;
    color: var(--global-light-theme-main-color);
    border-color: var(--global-light-theme-main-color);
}

.login-form button:hover {
    background: transparent;
    color: var(--global-light-theme-main-color);
    border-color: var(--global-light-theme-main-color);
    border: 2px solid var(--global-light-theme-main-color);
    font-weight: bold;
}

.login-form .el-form-item.is-required:not(.is-no-asterisk).asterisk-left > .el-form-item__label:before {
    content: none;
}

.login-form .el-input.is-disabled .el-input__wrapper {
    background: none;
    box-shadow: inset 0 0 0 1px var(--global-light-theme-main-color, var(--global-light-theme-main-color));
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
}
</style>