<script setup>
import {ref, nextTick} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
import change from "@icon-park/vue-next/lib/icons/Change.js";

const canEditRegisterInfo = ref(false);

const verifyCodeButtonText = ref('Verification code')

const usernameErrorMsg = ref('');

const passwordErrorMsg = ref('');

const emailErrorMsg = ref('');

const verifyErrorMsg = ref('');

const registerFormRef = ref();

const registerForm = ref({
    username: '',
    password: '',
    email: '',
    verifyCode: '',
    requestID: '',
})

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

const checkEmail = (rule, value, callback) => {
    if (value === '' || value === undefined || value === null) {
        return callback(new Error('Please input the email!'))
    }

    if (value.length < 6 || value.length > 256) {
        return callback(new Error('Invalid email address!'))
    }

    const regEx = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!regEx.test(value)) {
        return callback(new Error('Invalid email address!'))
    }

    return callback()
}

const checkVerifyCode = (value) => {
    console.log(value)
    if (value === '' || value === undefined || value === null) {
        verifyErrorMsg.value = '';
        nextTick(() => {
            verifyErrorMsg.value = 'Please input the username!';
        })
        return false
    }

    if (value.length !== 6) {
        verifyErrorMsg.value = '';
        nextTick(() => {
            verifyErrorMsg.value = 'Illegal verification code!';
        })
        return false
    }

    const regEx = /^[a-zA-Z0-9]+$/
    if (!regEx.test(value)) {
        verifyErrorMsg.value = '';
        nextTick(() => {
            verifyErrorMsg.value = 'Illegal verification code!';
        })
        return false
    }

    return true
}

const checkVerifyCodeIgnore = (rule, value, callback) => {
    return callback()
}

const rules = ref({
    username: [{validator: checkUsername}],
    password: [{validator: checkPassword}],
    email: [{validator: checkEmail}],
    verifyCode: [{validator: checkVerifyCodeIgnore}],
})

const submitVerifyForm = async (form) => {
    if (!form) {
        return
    }

    const time = ref(60)

    await form.validate((valid) => {
        if (valid) {
            canEditRegisterInfo.value = true;
            let data = registerForm.value;
            axios.post('/api/v1/users/verify-code/using-email', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                // 设置获取验证码按钮禁用时间
                const timer = ref(setInterval(function () {
                    if (time.value === 0) {
                        clearInterval(timer.value);
                        canEditRegisterInfo.value = false;
                        verifyCodeButtonText.value = 'Verification code';
                    } else {
                        verifyCodeButtonText.value = time.value + ' s';
                        time.value--;
                    }
                }, 1000));

                data = response.data.data
                registerForm.value.requestID = data['requestID'];
            }).catch(
                error => {
                    canEditRegisterInfo.value = false;

                    data = error.response.data;
                    if (data['code'] === 400001002) {
                        usernameErrorMsg.value = '';
                        nextTick(() => {
                            usernameErrorMsg.value = data['msg']
                        })
                    } else if (data['code'] === 400001003) {
                        emailErrorMsg.value = ''
                        nextTick(() => {
                            emailErrorMsg.value = data['msg']
                        })
                    } else {
                        usernameErrorMsg.value = ''
                        passwordErrorMsg.value = ''
                        emailErrorMsg.value = ''
                        nextTick(() => {
                            usernameErrorMsg.value = data['msg']
                            passwordErrorMsg.value = data['msg']
                            emailErrorMsg.value = data['msg']
                        })
                    }
                }
            )
        } else {
            canEditRegisterInfo.value = false;
            console.log("Error")
        }
    })
}

const submitRegisterForm = async (form) => {
    if (!form) {
        return
    }

    if (!checkVerifyCode(registerForm.value.verifyCode)) {
        return
    }

    await form.validate((valid) => {
        if (valid) {
            canEditRegisterInfo.value = true;
            let data = registerForm.value;
            axios.post('/api/v1/users/register', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                data = response.data.data
                console.log("msg", data['msg'])
                history.go(0);
                router.push('/login');
            }).catch(
                error => {
                    data = error.response.data;
                    const errCode = data['code']
                    if (errCode === 400001002) {
                        usernameErrorMsg.value = '';
                        nextTick(() => {
                            usernameErrorMsg.value = data['msg']
                        })
                    } else if (errCode === 400001003) {
                        emailErrorMsg.value = ''
                        nextTick(() => {
                            emailErrorMsg.value = data['msg']
                        })
                    } else if (errCode === 400000001) {
                        usernameErrorMsg.value = ''
                        passwordErrorMsg.value = ''
                        emailErrorMsg.value = ''
                        nextTick(() => {
                            usernameErrorMsg.value = data['msg']
                            passwordErrorMsg.value = data['msg']
                            emailErrorMsg.value = data['msg']
                        })
                    } else {
                        verifyErrorMsg.value = ''
                        nextTick(() => {
                            verifyErrorMsg.value = data['msg']
                        })
                    }
                }
            )
        } else {
            canEditRegisterInfo.value = false;
            console.log("Error")
        }
    })
}

</script>

<template>
    <el-form
        class="register-form"
        ref="registerFormRef"
        :model="registerForm"
        :rules="rules"
        label-width="auto"
        label-position="top"
    >
        <el-form-item label="Username" prop="username" :error="usernameErrorMsg">
            <el-input
                v-model="registerForm.username"
                placeholder=""
                :disabled="canEditRegisterInfo"
            />
        </el-form-item>

        <el-form-item label="Password" prop="password" :error="passwordErrorMsg">
            <el-input
                v-model="registerForm.password"
                type="password"
                show-password
                placeholder=""
                :disabled="canEditRegisterInfo"
            />
        </el-form-item>

        <el-form-item label="Email" prop="email" :error="emailErrorMsg">
            <el-input
                v-model="registerForm.email"
                placeholder=""
                :disabled="canEditRegisterInfo"
            />
        </el-form-item>

        <el-form-item class="verification-code-item" label="Verification code" prop="verifyCode" :error="verifyErrorMsg">
            <el-input v-model="registerForm.verifyCode" :on-change="clearValidate" placeholder=""/>
            <el-link
                type="primary"
                @click="submitVerifyForm(registerFormRef)"
                :disabled="canEditRegisterInfo"
                v-text="verifyCodeButtonText"
            ></el-link>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitRegisterForm(registerFormRef)">Register</el-button>
        </el-form-item>
    </el-form>
</template>

<style scoped>

</style>

<style>
.register-form label {
    color: var(--global-light-theme-main-color);
    font-weight: bold;
    font-size: 16px;
}

.register-form .el-input__wrapper {
    box-shadow: inset 0 0 0 1px var(--global-light-theme-main-color, var(--global-light-theme-main-color));
}

.register-form input {
    color: var(--global-light-theme-main-color);
    caret-color: black;
}

.register-form button {
    margin-top: 14px;
    width: 100px;
    background: transparent;
    color: var(--global-light-theme-main-color);
    border-color: var(--global-light-theme-main-color);
}

.register-form button:hover {
    background: transparent;
    color: var(--global-light-theme-main-color);
    border-color: var(--global-light-theme-main-color);
    border: 2px solid var(--global-light-theme-main-color);
    font-weight: bold;
}

.register-form .verification-code-item {
    position: relative;
}

.register-form .verification-code-item .el-link {
    position: absolute;
    right: 10px;
    font-size: 12px;
    color: var(--global-light-theme-main-color);
}

.register-form .verification-code-item .el-link:hover {
    font-weight: bold;
}

.register-form .verification-code-item .el-link::after {
    content: none;
}

.register-form .el-form-item.is-required:not(.is-no-asterisk).asterisk-left > .el-form-item__label:before {
    content: none;
}

.register-form .el-input.is-disabled .el-input__wrapper {
    background: none;
    box-shadow: inset 0 0 0 1px var(--global-light-theme-main-color, var(--global-light-theme-main-color));
}

.register-form input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
}
</style>