<template>
  <header>

  </header>
</template>

<script>
    export default {
      data: function () {
        return {

        }
      },

      mounted: function () {
        qshObject.newheader({
          mount:this.$el,
          name:"地址管理",
          fixed:false,
          rightItems: [
            {
              icon: 'gengduodiandian',
              hasActive: true,
              items: [
                {
                  name: '主页',
                  icon: 'baojifuben2',
                  handler: function(){
                    location.href = qsh_page_urls.home;
                  }
                },
                {
                  name: '我的企商',
                  icon: 'huiyuan',
                  handler: function(){
                    location.href = qsh_page_urls.uCenter;
                  }
                }
              ]
            }
          ]
        })
      }
    }
</script>
