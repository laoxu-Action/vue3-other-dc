# 安装

安装分为Hooks和组件,组件可统一注册，可单独引入.

## npm | yarn
````md
npm i vue3-other
````
````md
yarn add vue3-other
````


## 统一注册组件

````js{4}
import { install } from "vue3-other";
import 'vue3-other/style.css'
app.use(install)
````
## 分别引入组件
````js{4}
main.js
import 'vue3-other/style.css'
````
````js{4}
//组件中
import { RightClick } from "vue3-other";
````
## 分别引入hook

```js{4}
import { useToggle } from "vue3-other";
const { value, setLeft, setRight, set, toggle } = useToggle()
```
