var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/homeList', function (req, res, next) {
    let result = [
        {
            type: "VIDEO",
            id: 3028080,
            title: "Whisper 完整版",
            description: "请求本地测试接口返回的数据"
        }
    ];
    res.send(JSON.stringify(result));
});

module.exports = router;
