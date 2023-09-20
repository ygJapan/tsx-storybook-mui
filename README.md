# Command
```shell
# Start Storybook
yarn storybook
```

# commit rule

## 機能の追加や作成
```
feat: 〇〇の追加
```

## 修正関連
```
fix: 〇〇のタイポを修正
```

## 初期設定関連
```
init: 〇〇のインストール
```

### 参考
https://www.conventionalcommits.org/ja/v1.0.0/

# Gitについて

## ブランチルール
命名規則： `テーマ/コンポーネントや何をするか-(少し詳しく書く場合)-担当者名`
\n例)
```
feat/Button-create-ugo
fix/Button-props-onigiri
init/eslint-ugo
```

## Command
### ローカルのmasterブランチにリモートのmasterブランチを落とす際の手順
```
// １，masterブランチに移動する
git checkout master

// ２，リモートのmasterブランチをpullしてくる
git pull origin master
```

### 作業中のブランチにマスターの状態を取り込むコマンド
```
// １，作業中ブランチに移動する
git checkout 作業中ブランチ名

// ローカルのmasterを作業中ブランチにマージ(結合)する
git merge master
```


# VScode拡張機能
## Prettier ESLint
```
名前: Prettier ESLint
ID: rvest.vs-code-prettier-eslint
説明: A Visual Studio Extension to format JavaScript and Typescript code using prettier-eslint package
バージョン: 5.1.0
パブリッシャー: Rebecca Vest
VS Marketplace リンク: https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint
```

<p align="center">
  <a href="https://www.chromatic.com/">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
  </a>
</p>

<h1 align="center">
  Chromatic's Intro to Storybook React template
</h1>

This template ships with the main React and Storybook configuration files you'll need to get up and running fast.

## 🚅 Quick start

1.  **Create the application.**

    Use [degit](https://github.com/Rich-Harris/degit) to get this template.

    ```shell
    # Clone the template
    npx degit chromaui/intro-storybook-react-template taskbox
    ```

1.  **Install the dependencies.**

    Navigate into your new site’s directory and install the necessary dependencies.

    ```shell
    # Navigate to the directory
    cd taskbox/

    # Install the dependencies
    yarn
    ```

1.  **Open the source code and start editing!**

    Open the `taskbox` directory in your code editor of choice and building your first component!

1.  **Browse your stories!**

    Run `yarn storybook` to see your component's stories at `http://localhost:6006`

## 🔎 What's inside?

A quick look at the top-level files and directories included with this template.

    .
    ├── .storybook
    ├── node_modules
    ├── public
    ├── src
    ├── .gitignore
    ├── .index.html
    ├── LICENSE
    ├── package.json
    ├── yarn.lock
    ├── vite.config.js
    └── README.md

1.  **`.storybook`**: This directory contains Storybook's [configuration](https://storybook.js.org/docs/react/configure/overview) files.

2.  **`node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages).

3.  **`public`**: This directory will contain the development and production build of the site.

4.  **`src`**: This directory will contain all of the code related to what you will see on your application.

5.  **`.gitignore`**: This file tells git which files it should not track or maintain during the development process of your project.

6.  **`.index.html`**: This is the HTML page that is served when generating a development or production build.

7.  **`LICENSE`**: The template is licensed under the MIT licence.

8.  **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.

9.  **`yarn.lock`**: This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(Do not change it manually).**

10. **`vite.config.js`**: This is the configuration file for [Vite](https://vitejs.dev/), a build tool that aims to provide a faster and leaner development experience for modern web projects.

11. **`README.md`**: A text file containing useful reference information about the project.

## Contribute

If you encounter an issue with the template, we encourage you to open an issue in this template's repository.

## Learning Storybook

1. Read our introductory tutorial at [Learn Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/).
2. Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
3. See our official documentation at [Storybook](https://storybook.js.org/).
