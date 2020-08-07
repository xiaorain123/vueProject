<template>
    <div class="tabbarWrap">
        <div class="wrap">
              <Item v-for='(item,index) in tabbarList' :key="index" :txt="item.txt" :page="item.page">
                   <img :src="item.normalImg" alt="" slot="normalImage">
                   <img :src="item.activeImg" alt="" slot="activeImage">
              </Item>
        </div>
    </div>
</template>
<script>
import Item from "./Item"
export default {
    components:{
        Item
    },data () {
        return {
            selected:"",
            tabbarList:[{
              txt:"首页",
              page:"",
              normalImg:require('.././assets/tabbar/xiaolian.png'),
              activeImg:require('.././assets/tabbar/xiaolian_a.png')
            },{
              txt:"微资讯",
              page:"consultation",
              normalImg:require('.././assets/tabbar/pifu.png'),
              activeImg:require('.././assets/tabbar/pifu_a.png')
            },{
                txt: '个人中心',
                page: 'person',
                normalImg: require('.././assets/tabbar/shezhi.png'),
                activeImg: require('.././assets/tabbar/shezhi_a.png')
            },{
                txt: '设置',
                page: 'setup',
                normalImg: require('.././assets/tabbar/wode.png'),
                activeImg: require('.././assets/tabbar/wode_a.png')
            }]
        }
    }
}
</script>
<style scoped>
 .tabbarWrap{
     width: 100%;
     position: fixed;
     bottom: 0px;
     left: 0px;
     padding-bottom: 5px;
     background: floralwhite;
 }
 .wrap{
     background: #fefefe;
     width: 100%;
     display: flex;
     justify-content: space-around;
     align-items: center;
     border-top: 1px solid grey;

 }

</style>