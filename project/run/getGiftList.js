const Mock = require('mockjs');
const { Random } = Mock;
function makeIns(ctx) {
    const pageNum = parseInt(ctx.query.pageNum)
    const pageSize = parseInt(ctx.query.pageSize)
    const presentType = parseInt(ctx.query.presentType) // 0:文档 1:视频 2:实物
    const fitGrade = ctx.query.fitGrade
    const hasChanged = parseInt(ctx.query.hasChanged)
    const sort = parseInt(ctx.query.hasChanged)

    const fileT = ['doc', 'pdf']
    const cU = ['','http://img0.imgtn.bdimg.com/it/u=608315566,3329790194&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541592714295&di=d963beee89d1879fb553080527bd17cf&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fcd%2Fpics%2Fhv1%2F192%2F182%2F2247%2F146157777.png']

    const gS = ['一年级','二年级','三年级','四年级','五年级','六年级','初一','初二','初三','高一','高二','高三']

    const totalNum = 36
    let pageCount = Math.ceil(totalNum / pageSize)
    let startIndex = (pageNum - 1) * pageSize
    let endIndex  = pageNum * pageSize
    endIndex = endIndex - 1 > totalNum ? totalNum + 1 : endIndex

    let list = []
    for (let i = 0; i < totalNum; i++) {
        let fileType = presentType === 2 ? '' : presentType === 1 ? 'mp4' : fileT[Random.integer(0,1)]
        let gradeIndex
        if (fitGrade) {
            if (fitGrade instanceof Array) {
                gradeIndex = fitGrade[(i+1)%(fitGrade.length)]
            } else {
                gradeIndex = fitGrade
            }
        } else {
            gradeIndex = Random.integer(0,11)
        }
        let gift = {
            id: 0,
            name: (presentType === 2 ? '' : '【' + gS[gradeIndex] +'】')+ Random.ctitle(12,20) + '.' + fileType,
            type: presentType,
            coverPicUrl: cU[presentType],
            fileType: fileType,
            price: Random.integer(5,100),
            postage: Random.integer(0,1),
            originalPrice: Random.integer(5,30)
        }
        list.push(gift)
    }



    ctx.body = {
        code: '200',
        msg: 'success',
        pageCount: pageCount,
        data: list.slice(startIndex, endIndex)
    };
}
module.exports = makeIns;
