## Usage

```bash
$ npm install arr-to-enum
```

```javascript
import arrToEnum from 'arr-to-enum'
```

```js
import arrToEnum from 'arr-to-enum'
const status = [
    {
        name: 'n1',
        value: 1
    },
    {
        name: 'n2',
        value: 2
    }
]

const enumObj = arrToEnum(status)

console.info(enumObj['n1'] === 1) // true
console.info(enumObj['1'] === 'n1') // true
```

## 比如在用`element-ui` Table组件时，进行`formatter`

```html
<el-table-column label="用户类型" align="center" prop="userTypes" width="200" :formatter="formatUserType"/>

formatUserType(row) {
  // 第二个参数为cacheKey,可以在Table列表循环中快速取出换成的enum对象
  // 第三个参数可以自定义数组中的key
  // 第四个参数可以自定义数组中的value
  return arrToEnum(this.userTypes, 'userTypes', 'name', 'type')[row.subType]
}
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, bobby169
