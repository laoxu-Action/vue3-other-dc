---
outline: deep
---

# useSelectable

配合element plus中的table 记录勾选,可点击表格的行进行勾选

### 传入参数
| 参数 | 说明 | 类型 |
|-------|-------|-------|
| options | 配置文件 | - |

options
| 参数 | 说明 | 类型 |
|-------|-------|-------|
| defaultList | 默认选中的行的,可不传 | any[] / undefined |
| tableRef | 表格的ref,传这个可以绑定row-click实现点击表格行后选中多选框 | `Ref<any>` |


```js{4}
Options:{
	defaultList?:默认勾选,可不传
	tableRef:表格的ref,传这个可以绑定row-click实现点击表格行后选中多选框
}
```
### 返回参数
```js{4}
selectList:所有被选中的行
handleSelectionChange:当选择项发生变化时会触发该事件
rowClick:点击某一行,可以控制点击后选中多选框
```

### 示例
```html
  <el-table
    ref="multipleTableRef"
    :data="tableData"
    row-key="id"
    @selection-change="handleSelectionChange"
    @row-click="rowClick"
>
<!-- reserve-selection 必须设置,不然翻页后,selection-change返回空数组,无法缓存 -->
    <el-table-column type="selection" :reserve-selection="true"/>
</el-table>
```
```js
const multipleTableRef=ref(null)
const { selectList, handleSelectionChange, rowClick } = useSelectable({
  tableRef:multipleTableRef
});
```
