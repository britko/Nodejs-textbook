## 🛠issue

### Mongoose 연결 에러

`schemas/index.js`

```js
mongoose.connect('mongodb://root:1234@localhost:27017/admin', {
    dbName: 'nodejs',
    useNewUrlParser: true,
    useCreateIndex: true,
}, (error) => {
    if (error) {
        console.log('몽고디비 연결 에러', error)
    } else {
        console.log('몽고디비 연결 성공')
    }
})
```

Mongoose 버전이 6.0 이상이면

```js
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: ture,
useFindAndModify: false,
```
위의 값들이 default 이기 때문에 MongoParseError: options usecreateindex, usefindandmodify are not supported 에러가 발생

### 해결
따라서, `mongoos.connect`의 해당 값들을 삭제하거나 주석처리 해야한다.
