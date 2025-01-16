# TODO APP  
## created by Shinji

## 意識及び工夫した点
- ディレクトリ構造
- API関数周りの容易化
- UIコンポーネント
- Pritter、ESLintの使用

## ディレクトリ構造

src/  
├─ pages/ # URLに対応するComponent  
├─ features/ # 機能に依存するComponentやHook  
├─ components/ # 機能に依存しないComponent  
├─ hooks/ # 機能に依存しないHook  
├─ functions/ # 機能に依存しない関数  
├─ types/ # 機能に依存しない型定義  


## API関数周りの容易化

/src/lib/apiClient　より

post関数  
get関数  
put関数  
delete関数  
postWithAuth関数  
getWithAuth関数  
putWithAuth関数  
deleteWith関数  

上記のように、認証トークンが必要なものとそうでないものを一目でわかるように設計。

## UIコンポーネント

UIは統一感があってなんぼ。
あらかじめ、UIのスタイルを定義しておくことにより、いちいち各オブジェクトごとにスタイリングをあてる手間が減る。  
さらにライブラリを使うことで、私自身よりセンスのあるデザインが容易に使用できる。

## Pritter,ESLintの使用

PrettierとESLintを使用することで、コードのフォーマットと品質を自動的に維持し、一貫性が向上。  
これにより、チーム開発における生産性が高まり、コードレビューの時間を削減できる。


