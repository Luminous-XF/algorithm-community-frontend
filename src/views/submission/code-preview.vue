<script setup>
import {ref} from 'vue'

// AceEditorPreview
import {MdPreview} from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import '@/assets/css/md-editor/md-editor-preview.css'

const id = 'preview-only';

const code = ref('```c++\n' +
    '//\n' +
    '// Created by Luminous on 2021/10/14.\n' +
    '//\n' +
    '\n' +
    '#include <bits/stdc++.h>\n' +
    'using namespace std;\n' +
    '\n' +
    '\n' +
    '#define endl "\\n"\n' +
    'const int MAX_N = (int) 1e3 + 10;\n' +
    '\n' +
    'const int dx[] = {1, 0, -1, 0};\n' +
    'const int dy[] = {0, 1, 0, -1};\n' +
    '\n' +
    'char G[MAX_N][MAX_N];\n' +
    'bool vis[MAX_N][MAX_N];\n' +
    'int fa[(int) 2e6 + 10], ranks[(int) 2e6 + 10];\n' +
    '\n' +
    'int find(int x) {\n' +
    '    return fa[x] == x ? x : (fa[x] = find(fa[x]));\n' +
    '}\n' +
    '\n' +
    'void unite(int x, int y) {\n' +
    '    x = find(x);\n' +
    '    y = find(y);\n' +
    '\n' +
    '    if (x == y) return ;\n' +
    '\n' +
    '    if (ranks[x] < ranks[y]) {\n' +
    '        fa[x] = y;\n' +
    '    } else {\n' +
    '        fa[y] = x;\n' +
    '        if (ranks[x] == ranks[y]) {\n' +
    '            ranks[x]++;\n' +
    '        }\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'bool same(int x, int y) {\n' +
    '    return find(x) == find(y);\n' +
    '}\n' +
    '\n' +
    'void init() {\n' +
    '    for (int i = 0; i < (2e6) + 10; i++) {\n' +
    '        fa[i] = i;\n' +
    '        ranks[i] = 1;\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'void dfs(int r, int c, int x, int y, char ch) {\n' +
    '    vis[x][y] = true;\n' +
    '\n' +
    '    for (int i = 0; i < 4; i++) {\n' +
    '        int nx = x + dx[i];\n' +
    '        int ny = y + dy[i];\n' +
    '\n' +
    '        if (nx >= 0 && nx < r\n' +
    '            && ny >= 0 && ny < c\n' +
    '            && G[nx][ny] == ch\n' +
    '            && !vis[nx][ny]) {\n' +
    '            unite(x * 1000 + y, nx * 1000 + ny);\n' +
    '            dfs(r, c, nx, ny, ch);\n' +
    '        }\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '\n' +
    'void solve() {\n' +
    '    int r, c;\n' +
    '    cin >> r >> c;\n' +
    '\n' +
    '    init();\n' +
    '\n' +
    '    for (int i = 0; i < r; i++) {\n' +
    '        cin >> G[i];\n' +
    '    }\n' +
    '\n' +
    '    for (int i = 0; i < r; i++) {\n' +
    '        for (int j = 0; j < c; j++) {\n' +
    '            if (!vis[i][j]) {\n' +
    '                dfs(r, c, i, j, G[i][j]);\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    int n;\n' +
    '    cin >> n;\n' +
    '    while (n-- > 0) {\n' +
    '        int r1, c1, r2, c2;\n' +
    '        cin >> r1 >> c1 >> r2 >> c2;\n' +
    '        r1--, c1--, r2--, c2--;\n' +
    '\n' +
    '        if (same(r1 * 1000 + c1, r2 * 1000 + c2)) {\n' +
    '            if (G[r1][c1] == \'1\') {\n' +
    '                cout << "decimal" << endl;\n' +
    '            } else {\n' +
    '                cout << "binary" << endl;\n' +
    '            }\n' +
    '        } else {\n' +
    '            cout << "neither" << endl;\n' +
    '        }\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'int main() {\n' +
    '\n' +
    '    ios::sync_with_stdio(false);\n' +
    '    cin.tie(nullptr);\n' +
    '    cout.tie(nullptr);\n' +
    '\n' +
    '    solve();\n' +
    '\n' +
    '    return 0;\n' +
    '}\n' +
    '```\n' +
    '\n');
</script>

<template>
    <div class="code-preview-container">
        <h3 class="code-preview-title">Source Code</h3>
        <MdPreview
            :editorId="id"
            :codeFoldable=false
            :modelValue="code"/>
    </div>
</template>

<style scoped>

</style>

<style>

</style>