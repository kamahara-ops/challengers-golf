# CLAUDE.md

このリポジトリは PWA の殻（GitHub Pages 配信）のみ。アプリ本体（イベント出欠管理・
掲示板などの全機能）のコードは **kamahara-ops/yawu-golf-portal** にあり、
main への push で GitHub Actions が GAS へ自動デプロイする。

- アプリの機能改修・不具合調査を頼まれたら、yawu-golf-portal をセッションに追加して作業する
  （このリポジトリを触るのはアイコン・マニフェスト・iframe URL の変更時のみ）
- index.html の iframe URL のデプロイID（AKfycbzxnsht…）が本番。
  yawu-golf-portal の deploy.yml が同じIDを更新していることを 2026-07-31 に照合済み
- 詳細な引き継ぎメモ（本番構成・開発ルール・変更履歴・旧環境の罠）は
  yawu-golf-portal の CLAUDE.md を参照
