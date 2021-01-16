<template>
  <div class="login-page">

    <!-- 窗口 -->
    <div class="login-window">
      <form @submit.prevent="onSubmit">
        <el-row class="title">
          <el-col class="text-center h1">汇成财商管理后台</el-col>
        </el-row>

        <!-- 用户名 -->
        <el-row class="line-row">
          <el-col :offset="4" :span="16"><el-input v-model="username" placeholder="用户名"></el-input></el-col>
        </el-row>

        <!-- 密码 -->
        <el-row class="line-row">
          <el-col :offset="4" :span="16"><el-input v-model="password" placeholder="密码" type="password"></el-input></el-col>
        </el-row>

        <!-- 验证码 -->
        <el-row class="line-row">
          <el-col :offset="4" :span="16">
            <el-input v-model="code" placeholder="验证码" class="small-input"></el-input>
            <sidentify :identifyCode="identifyCode" @click="refreshCode"></sidentify>
          </el-col>
        </el-row>

        <!-- 登录按钮 -->
        <el-row>
          <el-col class="text-center">
            <el-button type="primary" :loading="submitting" native-type="submit">登录</el-button>
          </el-col>
        </el-row>
      </form>
    </div>


  </div>
</template>

<script>
import Sidentify from '@/components/Sidentify.vue'
export default {
  data () {
    return {
      username: '',
      password: '',
      code: '',
      identifyCodes: '1234567890',
      identifyCode: '',
      submitting: false
    }
  },
  components: {
    Sidentify
  },
  mounted(){
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    //验证码
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode () {
      this.code = ''
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
      console.log(this.identifyCode)
    },
    onSubmit () {
      if (!this.username || !this.password || !this.code) {
        this.$message.error('请把内容输入完整')
        return
      }
      if (this.identifyCode !== this.code) {
        this.code = ''
        this.refreshCode()
        this.$message.error('验证码错误')
        return
      }
      this.submitting = true
      // this.$store.action.login(this.username, this.password).then(() => {
      //   this.$store.action.getBaseData().then(() => {
      //     this.$message.success('登录成功')
      //     this.$router.push({ name: 'Index' })
      //   })
      // }, error => {
      //   this.$message.error(error)
      //   this.submitting = false
      //   this.refreshCode()
      // })
	      this.$message.success('登录成功')
	      this.$router.push({ name: 'Index' })
    }
  }
}
</script>

<style lang="scss">
.login-page {
  position: relative;

  .login-window {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    border-radius: 12px;
    border: solid 1px #999999;
    padding: 50px 0;

    .title {
      margin-bottom: 35px;
    }

    .line-row {
      position: relative;
      margin-bottom: 35px;
    }
  }
}
</style>