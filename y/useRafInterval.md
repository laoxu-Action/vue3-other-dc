---
outline: deep
---

# useRafInterval

模仿setInterval,页面隐藏或最小化时,定时器不执行

### 传入参数
| 参数 | 说明 | 类型 |
|-------|-------|-------|
| callBack | 需要循环的回调函数 | () => void |
| delay | 时间间隔 | number |
| options | 配置文件 | - |

options
| 参数 | 说明 | 类型 |
|-------|-------|-------|
| immediate | 是否第一次执行 | boolean |

```js{4}
callBack:需要循环的回调函数
delay?: 时间间隔
options?:{
 	immediate:是否第一次执行
}
```
### 返回参数
```js{4}
clear:清除定时器函数
action:{
    id:定时器ID,
    type:定时器类型(在不支持requestAnimationFrame的环境为setInterval)
}
```
### 示例
```js{4}
const { clear, action } = useRafInterval(
  () => {},
  1000,
  { immediate: true }
);
//清除定时器
clear()
```
