<template>
<div class="index-page">
  <el-container>

    <el-container>
      <!-- 左侧菜单 -->
      <el-aside width="200px">
        <div class="m-aside">
          <el-menu @select="menuSelect" default-active="1-1">
            <!-- 楼盘管理 -->
            <el-submenu index="1">
              <template slot="title">
                <span>数据管理</span>
              </template>
              <el-menu-item index="1-1"><i class="el-icon-office-building"></i>轮播图</el-menu-item>
              <!-- <el-menu-item index="1-2"><i class="el-icon-house"></i>二手房</el-menu-item> -->
              <!-- <el-menu-item index="1-3"><i class="el-icon-user-solid"></i>名片</el-menu-item> -->
              <!-- <el-menu-item index="1-4"><i class="el-icon-map-location"></i>区域</el-menu-item> -->
              <!-- <el-menu-item index="1-5"><i class="el-icon-search"></i>搜索关键字</el-menu-item>
              <el-menu-item index="1-6"><i class="el-icon-user"></i>用户行为</el-menu-item>
              <el-menu-item index="1-7"><i class="el-icon-view"></i>预约看房</el-menu-item>
              <el-menu-item index="1-8"><i class="el-icon-shopping-bag-1"></i>推荐有礼</el-menu-item>
              <el-menu-item index="1-9"><i class="el-icon-lock"></i>修改密码</el-menu-item>
              <el-menu-item index="1-10"><i class="el-icon-setting"></i>系统配置</el-menu-item> -->
            </el-submenu>
          </el-menu>
          <div class="bottom-action">
            <el-button size="mini" type="danger" @click="handleLogout">登出</el-button>
          </div>
        </div>
      </el-aside>

      <!-- 右侧内容 -->
      <el-main>
        <router-view class="m-router-view" name="default"/>
        <router-view class="m-router-view" name="subject"/>
      </el-main>
    </el-container>
  </el-container>

</div>

</template>

<script>
const menuTable = {
  '1-1': { name: 'Page1' },
  '1-2': { name: 'Page2' },
  '1-3': { name: 'Page3' },
  '1-4': { name: 'Page4' },
  '1-5': { name: 'SearchKeyList' },
  '1-6': { name: 'UserActionList' },
  '1-7': { name: 'SubscribeLookHouseList' },
  '1-8': { name: 'RecommendClientList' },
  '1-9': { name: 'UpdatePassword' },
  '1-10': { name: 'Setup' }
}

export default {
  methods: {
    menuSelect (index) {
      if (index in menuTable) {
        if (menuTable[index].name != this.$route.name) {
          this.$router.push(menuTable[index])
        }
      }
    },
    handleLogout () {
      this.$store.action.logout()
      this.$router.push({name: 'Login'})
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.index-page {

  .el-container {
    height: 100%;

    .el-aside {
      .m-aside {
        display: flex;
        flex-direction: column;
        background: #ffffff;
        height: 100%;
        .el-menu {
          flex: 1;
        }
        .bottom-action {
          text-align: center;
          border-right: #eeeeee solid 1px;
          padding-bottom: 20px;
        }
      }
    }

    .el-main {
      position: relative;
      background: #ffffff;

      $margin: 30px;
      .m-router-view {
        position: absolute;
        left: $margin;
        top: $margin;
        right: $margin;
        bottom: $margin;
        z-index: 100;
        background: #ffffff;
        overflow-y: auto;
      }
    }
  }
}
</style>