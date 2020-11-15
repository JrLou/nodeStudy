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
            id: 111111111,
            title: "Whisper 完整版",
            description: "VIXX LR",
            posterPic: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1074161066,1117678408&fm=26&gp=0.jpg",
            thumbnailPic:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1074161066,1117678408&fm=26&gp=0.jpg",
            url:"",
            hdUrl:"",
            uhdUrl:"",
            videoSize:0,
            hdVideoSize:0,
            uhdVideoSize:0,
            status:200,
            traceUrl:"",
            clickUrl:"",
        },
        {
            type: "VIDEO",
            id: 22222222,
            title: "Whisper 完整版2",
            description: "VIXX LR",
            posterPic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1829479616,1415632571&fm=26&gp=0.jpg",
            thumbnailPic:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1829479616,1415632571&fm=26&gp=0.jpg",
            url:"",
            hdUrl:"",
            uhdUrl:"",
            videoSize:0,
            hdVideoSize:0,
            uhdVideoSize:0,
            status:200,
            traceUrl:"",
            clickUrl:"",
        },
        {
            type: "VIDEO",
            id: 33333333,
            title: "Whisper 完整版3",
            description: "VIXX LR",
            posterPic: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3778366614,2116071730&fm=26&gp=0.jpg",
            thumbnailPic:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3778366614,2116071730&fm=26&gp=0.jpg",
            url:"",
            hdUrl:"",
            uhdUrl:"",
            videoSize:0,
            hdVideoSize:0,
            uhdVideoSize:0,
            status:200,
            traceUrl:"",
            clickUrl:"",
        }
    ];
    res.send(JSON.stringify(result));
});

module.exports = router;
