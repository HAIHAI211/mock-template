function makeIns(ctx) {
    const list = [
        {
            prdName: '木桌子',
            price: '50'
        },
        {
            prdName: '铁桌子',
            price: '150'
        },
        {
            prdName: '老板椅',
            price: '250'
        }
    ]
    ctx.body = {
        code: '666',
        msg: 'success',
        prdList: list
    };
}
module.exports = makeIns;