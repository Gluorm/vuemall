import { debouce } from './utils.js';

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        const refresh = debouce(this.$refs.scroll.refresh, 50) //给创建页面 刷新防抖函数  注意传入的是一个函数没括号
        this.itemImgListener = () => {
            refresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImgListener)
        console.log('混入');
    },
}