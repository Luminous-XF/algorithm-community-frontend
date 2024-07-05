<script setup>
import {ref, reactive} from 'vue';
import '@/assets/css/problem.css';

// AceEditorPreview
import {MdPreview} from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import '@/assets/css/md-editor/md-editor-preview.css'

// AceEditor
import {VAceEditor} from 'vue3-ace-editor';

// Load the language definition file used below
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-csharp';

// Load the theme definition file used below
import 'ace-builds/src-noconflict/theme-chrome';

const id = 'preview-only';

/**
 * 题目描述
 */
const description = ref('The world is made up of $10$ kinds of people, those who understand binary and those who do not. These different kinds of people do not always get along so well. Bob might ask for a $10000$ ounce coffee (meaning binary) and Alice might make misinterpret his request as being in decimal and give him a $10011100010000$ ounce coffee (binary). After Sue explains that this much coffee costs $100$ dollars (decimal), Bob might assume he only has to pay $4$ dollars (interpreting the price as being in binary). In response to these differences that are difficult to resolve, these two groups have divided the world into two regions, the binary-friendly zones and the decimal-friendly zones. They have even published a map like the following to help people keep up with where the areas are (they have used ones and zeros so nobody would have trouble reading it).\n' +
    '\n' +
    '<center>\n' +
    '    1111100000</br>\n' +
    '\t1111000000</br>\n' +
    '\t1110000011</br>\n' +
    '\t0111100111</br>\n' +
    '\t0011111111</br>\n' +
    '</center>\n' +
    '\n' +
    'Users of binary have to stay in the zones marked with a zero. Users of decimal have to stay in the zones marked with a one. You have to figure out if it is possible for either type of person to get between various locations of interest. People can move north, south, east or west, but cannot move diagonally.\n' +
    '\n');

// const description = ref('每一本正式出版的图书都有一个ISBN号码与之对应，ISBN码包括9位数字、1位识别码和3位分隔符， 其规定格式如“x-xxx-xxxxx-x”，其中符号“-”就是分隔符（键盘上的减号），最后一位是识别码，例如0-670-82162-4就是一个 标准的ISBN码。ISBN码的首位数字表示书籍的出版语言，例如0代表英语；第一个分隔符“-”之后的三位数字代表出版社，例如670代 表维京出版社；第二个分隔符后的五位数字代表该书在该出版社的编号；最后一位为识别码。\n' +
//     '\n' +
//     '识别码的计算方法如下：\n' +
//     '首位数字乘以1 加上次位数字乘以2……以此类推，用所得的结果mod 11，所得的余数即为识别码，如果余数为10，则识别码为大写字母X。例如ISBN号 码0-670-82162-4中的识别码4是这样得到的：对067082162这9个数字，从左至右，分别乘以1，2，...,9,再求和，即0×1+6×2+ ……+2×9=158，然后取158 mod 11的结果4作为识别码。\n' +
//     '\n' +
//     ' 你的任务是编写程序判断输入的ISBN号码中识别码是否正确，如果正确，则 仅输出“Right”；如果错 误，则输出你认为是正确的ISBN号码。');

/**
 * 输入描述
 */
const input = ref('Input starts with a line containing two positive integers, $1~\\leq~r~\\leq~1000$ and $1~\\leq~c~\\leq~1000$. The next $r$ input lines give the contents of the map, each line containing exactly $c$ characters (which are all chosen from $0$ or $1$).\n' +
    '\n' +
    'The next line has an integer $0~\\leq~n~\\leq~1000$. The following $n$ lines each contain one query, given as four integers: $r_{1}$, $c_{1}$ and $r_{2}$, $c_{2}$. These two pairs indicate two locations on the map, and their limits are $1~\\leq~r_{1}$, $r_{2}~\\leq~r$ and $1~\\leq~c_{1}$, $c_{2}~\\leq~c$.');

/**
 * 输出描述
 */
const output = ref('For each query, output *binary* if a binary user can start from location $r_{1}$, $c_{1}$ and move to location $r_{2}$, $c_{2}$. Output *decimal* if a decimal user can move between the two locations. Otherwise, output *neither*.\n' +
    '\n');

/**
 * 样例列表
 */
const sampleTestList = ref([
    {
        id: 1, input: '1 4\n' +
            '1100\n' +
            '2\n' +
            '1 1 1 4\n' +
            '1 1 1 1\n', output: 'neither\n' +
            'decimal\n'
    },
    {
        id: 2, input: '10 20\n' +
            '11111111111111111111\n' +
            '11000000000000000101\n' +
            '11111111111111110000\n' +
            '11111111111111110000\n' +
            '11000000000000000111\n' +
            '00011111111111111111\n' +
            '00111111111111111111\n' +
            '10000000000000001111\n' +
            '11111111111111111111\n' +
            '11111111111111111111\n' +
            '3\n' +
            '2 3 8 16\n' +
            '8 1 7 3\n' +
            '1 1 10 20\n', output: 'binary\n' +
            'decimal\n' +
            'neither\n'
    },
]);

/**
 * 样例复制按钮事件
 */
const clickToCopy = (text) => {
    navigator.clipboard.writeText(text);
};


/**
 * 代码编辑器
 */

// const content = ref(JSON.stringify({ message: 'Hello Ace' }));
const content = ref('#include <bits/stdc++.h>\n' +
    'using namespace std;\n' +
    '\n' +
    '\n' +
    'int main() {\n' +
    '\n' +
    '\n' +
    '    return 0;\n' +
    '}\n');

// const langInfo = ref({id: 2, lang: 'c_cpp', label: 'C++'});

const langSelectList = [
    {
        id: 1,
        lang: 'c_cpp',
        label: 'C',
    },
    {
        id: 2,
        lang: 'c_cpp',
        label: 'C++',
    },
    {
        id: 3,
        lang: 'java',
        label: 'Java',
    },
    {
        id: 4,
        lang: 'python',
        label: 'Python',
    },
    {
        id: 5,
        lang: 'golang',
        label: 'Golang',
    },
];

/**
 * 表单
 */
const form = ref({
    langInfo: {
        id: 2,
        lang: 'c_cpp',
        label: 'C++',
    },
    code: '',
});

const onSubmit = () => {

    console.log('onSubmit');
    console.log(form);
}

</script>


<template>
    <div class="problem-container">
        <el-card>
            <template #header>
                <div class="card-header">
                    <span>A - 10 Kinds of People</span>
                </div>
            </template>

            <!--      问题描述面板        -->
            <div class="problem-description">
                <MdPreview :editorId="id" :modelValue="description"/>
            </div>

            <!--      输入描述面板        -->
            <div class="problem-input">
                <h3>Input</h3>
                <MdPreview :editorId="id" :modelValue="input"/>
            </div>

            <!--      输出描述面板        -->
            <div class="problem-output">
                <h3>Output</h3>
                <MdPreview :editorId="id" :modelValue="output"/>
            </div>

            <!--      样例面板        -->
            <div class="problem-sample-test-list">
                <div class="problem-sample-test" v-for="sampleTest in sampleTestList">
                    <div class="problem-sample-test-input">
                        <h3>Sample Input {{ sampleTest.id }}</h3>
                        <div class="pre-container">
                            <pre>{{ sampleTest.input }}</pre>
                            <el-popover
                                placement="bottom"
                                :width="165"
                                trigger="click"
                                content="Copied to clipboard!"
                                :auto-close="400"
                            >
                                <template #reference>
                                    <el-button @click="clickToCopy(sampleTest.input)" class="copy-button">copy
                                    </el-button>
                                </template>
                            </el-popover>
                        </div>
                    </div>

                    <div class="problem-sample-test-output">
                        <h3>Sample Output {{ sampleTest.id }}</h3>
                        <div class="pre-container">
                            <pre>{{ sampleTest.output }}</pre>
                            <el-popover
                                placement="bottom"
                                :width="165"
                                trigger="click"
                                content="Copied to clipboard!"
                                :auto-close="300"
                            >
                                <template #reference>
                                    <el-button @click="clickToCopy(sampleTest.input)" class="copy-button">copy
                                    </el-button>
                                </template>
                            </el-popover>
                        </div>
                    </div>


                </div>
            </div>

            <!--      代码编辑器        -->
            <div class="problem-code-editor">
                <el-form
                    :model="form                                                                                                               ">
                    <div class="code-editor-header">
                        <h3>Source Code</h3>
                        <el-select
                            class="code-editor-lang-selector"
                            v-model="form.langInfo"
                            value-key="id"
                            :placeholder="form.langInfo.label"
                        >
                            <el-option
                                v-for="item in langSelectList"
                                :key="item.id"
                                :label="item.label"
                                :value="item"
                            />
                        </el-select>
                    </div>

                    <v-ace-editor
                        v-model:value="form.code"
                        :lang="form.langInfo.lang"
                        theme="chrome"
                    />
                    <el-button
                        class="problem-submit-button"
                        @click="onSubmit"
                    >
                        Submit
                    </el-button>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
/* 自定义 copy 按钮指针悬浮样式 */
.problem-container /deep/ .pre-container button:hover {
    background: transparent;
    color: var(--global-light-theme-main-color);
    //transform: scale(1.1);
}

/* 自定义 copy 按钮指针点击样式 */
.problem-container /deep/ .pre-container button:active {
    background: transparent;
    color: var(--global-light-theme-main-color);
    transform: scale(0.9);
}

/* 代码选择器边框 */
.problem-container /deep/ .el-select  {
    border: 1px solid var(--global-light-theme-main-color);
    border-radius: 5px;
}

/* 取消代码选择器阴影 */
.problem-container /deep/ .el-select__wrapper  {
    box-shadow: 0 0 0;
}

</style>


<style>
/* 自定义代码选择器下拉菜单中选项选中样式 */
.el-scrollbar .el-select-dropdown__item.is-selected {
    color: var(--global-light-theme-main-color);
}

/* 自定义代码选择器下拉菜单中选项样式 */
.el-scrollbar .el-select-dropdown__item {
    caret-color: transparent;
}
</style>