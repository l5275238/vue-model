<template>
    <footer></footer>
</template>
<script type="text/ecmascript-6">
    export default{
        mounted(){
//            var items = ["index","cart","chepin","service","user"];//这句没有也没有什么影响好像
            qshObject.newFooter($("footer"),"user");
        }
    }
</script>