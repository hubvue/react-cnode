function _ (){}
_.newReplyTime = function(replyTime) {
    let [Y,M,D] = replyTime.split("T")[0].split("-");
    let [h,m,s] = replyTime.split('T')[1].split('.')[0].split(":");
    let targetTime = new Date(`${Y}-${M}-${D} ${h}:${m}:${s}`);
    let nowTime = new Date();
    let time = nowTime - targetTime;
    if(time < 60000) {
        return "1分钟内";
    }
    let numm = Math.floor(time/600000);
    if(numm < 60) {
        return `${numm}分钟内`;
    }
    let numh = Math.floor(time/3600000);
    if(numh < 24){
        return `${numh}小时内`;
    }
    let numD = Math.floor(time/86400000);
    if(numD < 30){
        return `${numD}天内`
    }
    return "1年内";
}
_.cateChange = function (type){
    if(type === 'share'){
        return "分享"
    }
    if(type==="ask"){
        return "问答";
    }
    if(type ==="job"){
        return "招聘";
    }
}

export default _;