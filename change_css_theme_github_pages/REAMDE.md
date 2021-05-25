# Overview
[デモサイト](https://160294w.github.io/to_save_button_event_for_localstorage/)
でのみ実行される拡張機能

# Function
- ページ起動時にbodyのbackground-colorを赤に変える
- ページ内のボタンでlocalStorageを保存して、そのデータをレンダリングする
  - 削除したらちゃんと消えることも確認する

# Usage
chrome://extensions から「パッケージ化されてない拡張機能」を選んで置くだけ。

# 学び
- Chromeの拡張機能の作り方
  - 想像よりも簡易に作れるのが感想
  - 最低でもmanifest.jsonとjsがあれば作れる
  - バックグラウンドで動かし続けるのと、一度きりしか動かないやつの2つがある
- localStorageにexpire機能がないのでちょっと辛い
  - jsで別にコントロールしてあげないといけない
