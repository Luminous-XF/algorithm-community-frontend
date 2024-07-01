<script setup>
import {ref} from "vue";
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
// import '@/assets/css/typo/typo.css';

const id = 'preview-only';
const description = ref('The world is made up of \n' +
    ' kinds of people, those who understand binary and those who do not. These different kinds of people do not always get along so well. Bob might ask for a \n' +
    ' ounce coffee (meaning binary) and Alice might make misinterpret his request as being in decimal and give him a \n' +
    ' ounce coffee (binary). After Sue explains that this much coffee costs \n' +
    ' dollars (decimal), Bob might assume he only has to pay \n' +
    ' dollars (interpreting the price as being in binary). In response to these differences that are difficult to resolve, these two groups have divided the world into two regions, the binary-friendly zones and the decimal-friendly zones. They have even published a map like the following to help people keep up with where the areas are (they have used ones and zeros so nobody would have trouble reading it).\n' +
    '\n' +
    '1111100000\n' +
    '1111000000\n' +
    '1110000011\n' +
    '0111100111\n' +
    '0011111111\n' +
    'Users of binary have to stay in the zones marked with a zero. Users of decimal have to stay in the zones marked with a one. You have to figure out if it is possible for either type of person to get between various locations of interest. People can move north, south, east or west, but cannot move diagonally.');
const input = ref('Input starts with a line containing two positive integers, 1≤𝑟≤1000 and 1≤𝑐≤1000. The next 𝑟 input lines give the contents of the map, each line containing exactly 𝑐 characters (which are all chosen from 0 or 1).\n' +
    '\n' +
    'The next line has an integer 0≤𝑛≤1000. The following 𝑛 lines each contain one query, given as four integers: 𝑟1,𝑐1 and 𝑟2,𝑐2. These two pairs indicate two locations on the map, and their limits are 1≤𝑟1,𝑟2≤𝑟 and 1≤𝑐1,𝑐2≤𝑐.');
const output = ref('For each query, output `binary` if a binary user can start from location 𝑟1,𝑐1 and move to location 𝑟2,𝑐2. Output `decimal` if a decimal user can move between the two locations. Otherwise, output `neither`.');

const sampleTestList = ref([
    {id: 1, input: '1 4\n' +
            '1100\n' +
            '2\n' +
            '1 1 1 4\n' +
            '1 1 1 1\n', output: 'neither\n' +
            'decimal\n'},
    {id: 2, input: '10 20\n' +
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
            'neither\n'},
]);

const clickToCopy = (text) => {
    navigator.clipboard.writeText(text);
};
</script>

<template>
    <div class="problem-container">
        <el-card>
            <template #header>
                <div class="card-header">
                    <span>A - 10 Kinds of People</span>
                </div>
            </template>


            <div class="problem-description" style="min-height: 32px">
                <MdPreview :editorId="id" :modelValue="description"/>
            </div>

            <div class="problem-input" style="min-height: 32px">
                <h3>Input</h3>
                <MdPreview :editorId="id" :modelValue="input"/>
            </div>

            <div class="problem-output" style="min-height: 32px">
                <h3>Output</h3>
                <MdPreview :editorId="id" :modelValue="output"/>
            </div>

            <div class="problem-sample-test-list">
                <div class="problem-sample-test" v-for="sampleTest in sampleTestList">
                    <div class="problem-sample-test-input">
                        <h3>Sample Input {{ sampleTest.id }}</h3>
                        <div class="pre-container">
                            <pre>{{ sampleTest.input }}</pre>
                            <el-button @click="clickToCopy(sampleTest.input)" class="copy-button">copy</el-button>
                        </div>
                    </div>

                    <div class="problem-sample-test-input">
                        <h3>Sample Output {{ sampleTest.id }}</h3>
                        <div class="pre-container">
                            <pre>{{ sampleTest.output }}</pre>
                            <el-button @click="clickToCopy(sampleTest.output)" class="copy-button">copy</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
/* 自定义 copy 按钮指针悬浮样式 */
.problem-container /deep/ .pre-container button:hover {
    background: transparent;
    color: var(--global-light-theme-main-color);
    transform: scale(1.1);
}
</style>
