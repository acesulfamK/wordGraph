# I have trouble to combine React and D3.js.
## このソフトの仕様
一番上の記入欄から単語を登録できる。
上から2番目の記入欄から単語間のリンクを登録できる(右から順に「好きなリンク名前」「リンクが出る単語の配列番号」「リンクが入る単語の配列番号」を記入)。
すると、Words Listの所に登録した単語が、Links Listのところに登録したリンクが表示される。
登録した単語とリンクはグラフとして表示される。

## うまくいっていないところ

Body.jsにおいて、dataオブジェクトはリストとして表示されたり、追加欄によって追加されるデータであり、これらのコンポーネントの中では正常に働きます。data2オブジェクトは、グラフに表示されるデータを持っており、このコンポーネントの中で正常に働きます。私のしたいことは、このdataとdata2オブジェクトを同一のものにしたいです。つまり、追加欄によって追加した単語がリストやグラフに反映されるようにしたいです。

しかし、単にdata2オブジェクトを消して、Body.js内のdata2の部分をdataに変えただけではうまくいきませんでした。具体的に述べると、リロード直後はグラフもリストも正常に表示されますが、追加欄から新たな単語やリンクを追加するためにAddボタンを押すと、画面が真っ白になり反応しなくなります。

## 考えられる原因

data2オブジェクトを消して、dataオブジェクトだけで追加欄、リスト、グラフの全体の単語を管理するようにすると、<GraphChart>コンポーネントが表示されたあと、dataオブジェクトにグラフ内での座標などのデータが追加されてしまっていることがわかりました。つまり、<GraphChart>内で、<Body>コンポーネントのstateであるdataオブジェクトにアクセスされているようです。そこで、値渡しをしてから代入などをしましたがうまくいきませんでした。

## 行いたい改善

Body.js内のdataオブジェクトにはテストデータにあるように、ノードの表す単語、リンクの名前、リンクの出所、リンクの行先、だけの情報を持たせて、グラフ上におけるノードやリンクの座標といった描画の際に必要になる情報は<GraphChart>コンポーネント内で管理したい。

## 参考にしたサイト

D3.jsをReact内で使う
https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app

D3.jsによるグラフの表示
https://wizardace.com/d3-forcesimulation-simple/

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Reference
Environment
https://zenn.dev/toromo/scraps/d036a4657dc8f2


