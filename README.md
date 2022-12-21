# 豊田高等専門学校　吹奏楽部　公式サイト

## 構成
- [Next.js](https://nextjs.org/)(SSG)
    - `create-next-app`より
    - `next export`で静的サイトを生成する
- [Micro CMS](https://microcms.io)
    - APIで記事を呼び出す


## Getting Started

First, run the development server:

```sh
npm run dev
```

## Setup 

You must install `Firebase CLI`
```sh
npm install -g firebase-tools
firebase login
```

## Deploy on Firebase

```sh
npm run build
firebase deploy
```
