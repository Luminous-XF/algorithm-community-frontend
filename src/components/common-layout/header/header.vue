<script setup>
import HeaderMenu from './header-menu.vue'
</script>

<template>
    <div class="header-container">
        <HeaderMenu></HeaderMenu>
    </div>
</template>

<style scoped>
/* 自定义 Menu 中 item 指针悬浮时样式 */
.header-container /deep/ .el-menu--horizontal > .el-menu-item:hover {
    background-color: #F8F9FA;
}

/* 自定义 Menu 中最后一个 Profile 或 GetStarted 按钮指针悬浮样式 */
.header-container /deep/ .el-menu--horizontal > .el-menu-item.header-menu-get-started:hover {
    background-color: transparent;
}

.header-container /deep/ .el-menu--horizontal > .el-menu-item.header-menu-profile:hover {
    background-color: transparent;
}

/* 自定义 Menu 中最后一个 Profile 或 GetStarted 选中时样式 */
.header-container /deep/ .el-menu--horizontal > .el-menu-item.header-menu-get-started.is-active {
    background-color: transparent;
}

/* 自定义 Menu 中 item 选中时的样式 */
.header-container /deep/ .el-menu--horizontal > .el-menu-item.is-active {
    background-color: transparent;
    border-bottom-color: var(--global-light-theme-main-color);
}

.header-container /deep/ .el-menu--horizontal > .el-menu-item {
    border-bottom-color: transparent;
}

/* 自定义 Menu 中字体选中时样式 */
.header-container /deep/ .el-menu--horizontal > .el-menu-item span {
    color: var(--global-light-theme-main-color);
}

/* 自定义 Menu 中字体选中时样式 */
.header-container /deep/ .el-menu--horizontal > .el-menu-item.is-active span {
    color: var(--global-light-theme-main-color);
    font-weight: bold;
}

.header-container /deep/ .el-menu-item .header-profile .el-dropdown:hover {
    background-color: transparent;
    border: 0 transparent;
}


.header-container /deep/ .el-menu--horizontal.el-menu {
    border-bottom: 0;
}

</style>
