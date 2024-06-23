<script setup>
import {
    User,
    UploadWeb,
    Book,
    Mail,
    PeopleSafe,
    Logout,
} from '@icon-park/vue-next'
</script>

<template>
    <div class="header-profile">
                <el-dropdown>
                    <div class="header-profile-item">
                        <el-avatar :size="30" src="/src/assets/image/avatar/avatar-1.jpg"></el-avatar>
                        <p>Luminous</p>
                    </div>

                    <template #dropdown>
                        <el-dropdown-menu class="header-profile-dropdown">
                            <el-dropdown-item class="header-profile-dropdown-item">
                                <User theme="outline" size="20" class="header-menu-icon"/>
                                <span>Profile Settings</span>
                            </el-dropdown-item>

                            <hr>

                            <el-dropdown-item class="header-profile-dropdown-item">
                                <UploadWeb theme="outline" size="20" class="header-menu-icon"/>
                                <span>My Submissions</span>
                            </el-dropdown-item>

                            <hr>

                            <el-dropdown-item class="header-profile-dropdown-item">
                                <Book theme="outline" size="20" class="header-menu-icon"/>
                                <span>My Blogs</span>
                            </el-dropdown-item>

                            <hr>

                            <el-dropdown-item class="header-profile-dropdown-item">
                                <Mail theme="outline" size="20" class="header-menu-icon"/>
                                <span>Message</span>
                            </el-dropdown-item>

                            <hr>

                            <el-dropdown-item class="header-profile-dropdown-item">
                                <PeopleSafe theme="outline" size="20" class="header-menu-icon"/>
                                <span>Administration</span>
                            </el-dropdown-item>

                            <hr>

                            <el-dropdown-item @click="$router.push('/login')" class="header-profile-dropdown-item">
                                <Logout theme="outline" size="20" class="header-menu-icon"/>
                                <span>Logout</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
    </div>
</template>

<style scoped>
hr {
    height: 0;
    border-top: 1px solid #CED4DA;
    border-right: 0;
    border-bottom: 0;
    border-left: 0;
    margin-left: 10px;
    margin-right: 10px;
}
</style>