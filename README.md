# frontend-template
個人で利用しているフロントエンド開発環境です。

## Feature
- [x] タスクランナ- (gulp)
- [x] HTMLモジュール (EJS)
- [x] JSモジュールバンドラー (Webpack)
    - [x] babel-loader
    - [x] eslint-loader
    - [x] style-loader
    - [x] css-loader
    - [x] sass-loader
    - [x] postcss-loader
    - [x] prettier
    - [ ] webpack-glsl-loader
- [x] CSSのベンダープレフィックス付与自動化 (autoprefixer)
- [x] CSSの圧縮 (csswring)
- [x] ライブリロード (browser-sync)
- [ ] SVGスプライト生成
- [ ] HTMLinter
- [ ] SassLinter

## Usage

### Install
```
$npm i
```

### Start Tasks
```
$npm run start
```

### Build By Development Mode
```
$npm run dev
```

### Build By Production Mode
```
$npm run prod
```