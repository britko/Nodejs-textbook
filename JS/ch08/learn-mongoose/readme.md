## ๐ issue

### Mongoose ์ฐ๊ฒฐ ์๋ฌ

`schemas/index.js`

```js
mongoose.connect('mongodb://root:1234@localhost:27017/admin', {
    dbName: 'nodejs',
    useNewUrlParser: true,
    useCreateIndex: true,
}, (error) => {
    if (error) {
        console.log('๋ชฝ๊ณ ๋๋น ์ฐ๊ฒฐ ์๋ฌ', error)
    } else {
        console.log('๋ชฝ๊ณ ๋๋น ์ฐ๊ฒฐ ์ฑ๊ณต')
    }
})
```

Mongoose ๋ฒ์ ์ด 6.0 ์ด์์ด๋ฉด

```js
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: ture,
useFindAndModify: false,
```
์์ ๊ฐ๋ค์ด default ์ด๊ธฐ ๋๋ฌธ์ MongoParseError: options usecreateindex, usefindandmodify are not supported ์๋ฌ๊ฐ ๋ฐ์

### ํด๊ฒฐ
๋ฐ๋ผ์, `mongoos.connect`์ ํด๋น ๊ฐ๋ค์ ์ญ์ ํ๊ฑฐ๋ ์ฃผ์์ฒ๋ฆฌ ํด์ผํ๋ค.

[stack overflow ์ฐธ๊ณ ](https://stackoverflow.com/questions/68958221/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported)