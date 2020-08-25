import { debouce } from './utils.js';
import backTop from "components/content/backtop/backTop"
import { POP, SELL, NEW } from "./const";
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
            refresh: null
        }
    },
    mounted() {
        this.refresh = debouce(this.$refs.scroll.refresh, 50) //给创建页面 刷新防抖函数  注意传入的是一个函数没括号
        this.itemImgListener = () => {
            this.refresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImgListener)

    },
}


export const backTopMixin = {
    components: {
        backTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)

        }, //点击回顶部
        listenShowBackTop(position) {
            this.isShowBackTop = (-position.y) > 1000
        }
    },
}

export const tabControlMixin = {
    data: function() {
        return {
            currentType: POP
        }
    },
    methods: {
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = POP
                    break
                case 1:
                    this.currentType = NEW
                    break
                case 2:
                    this.currentType = SELL
                    break
            }

        }
    }
}