# challengers-golf

夜須Challengers（夜須高原ゴルフ 出欠管理）PWA ラッパー。

このリポジトリはアプリ本体ではなく、Google Apps Script で動くアプリを
全画面 iframe で包んで **PWA化（ホーム画面追加・アイコン）** し、
Google の「ユーザーが作成」バナーを消すための薄いラッパーです。

- アプリ本体: Google Apps Script（別管理）
- 公開: GitHub Pages
- 機密情報なし（公開済みの /exec URL のみを参照）

## ファイル
| ファイル | 役割 |
|---|---|
| `index.html` | 全画面 iframe ＋ PWA メタ ＋ SW登録 |
| `manifest.json` | PWA マニフェスト |
| `sw.js` | インストール可能化＋殻のオフライン対応 |
| `icon-192.png` / `icon-512.png` | PWA アイコン |
| `apple-touch-icon.png` | iOS ホーム画面アイコン |
| `favicon.ico` / `favicon-32.png` | タブ favicon |
