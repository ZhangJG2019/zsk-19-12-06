/* eslint-disable no-unreachable */
<template>
  <div class="login v2">
    <div class="wrapper">
      <div class="dialog dialog-shadow" style="display: table-cell; margin-top: -362px;">
        <div class="registered">
          <img
            src="../../../static/images/insertLogo.png"
            alt
            style="margin:20px auto;display:table-cell;"
          />
          <h3>精准用药知识库</h3>
          <h4>Precise Medicine Knowledge Base</h4>
          <div class="content_center" style="margin-top:40px;padding-bottom: 20px;">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="loginFormRules"
              ref="ruleForm"
              label-width="50px"
              class="demo-ruleForm"
            >
              <el-form-item prop="mobile">
                <el-input
                  clearable
                  class="inputMsg"
                  prefix-icon="el-icon-mobile"
                  v-model="ruleForm.mobile"
                  placeholder="请输入手机号"
                ></el-input>
              </el-form-item>
              <!-- <el-form-item prop="verifyCode">
                <el-input
                  clearable
                  prefix-icon="iconfont icon-yanzhengma"
                  class="smsMsg"
                  v-model="ruleForm.verifyCode"
                  style="width: 63%;border-right: none; border-radius: 5px 0 0 5px;"
                  placeholder="请输入验证码"
                  :maxlength="6"
                ></el-input>
                <el-button
                  class="smsMsg"
                  type="primary"
                  @click="sendcode"
                  :disabled="disabled"
                  v-if="disabled == false"
                  style="margin-left:15px"
                >发送验证码</el-button>
                <el-button
                  class="smsMsg"
                  type="button"
                  @click="sendcode"
                  :disabled="disabled"
                  v-if="disabled == true"
                >{{ btntxt }}</el-button>
              </el-form-item>-->
              <el-form-item prop="verifyCode">
                <el-input
                  clearable
                  prefix-icon="iconfont icon-yanzhengma"
                  class="smsMsg"
                  v-model="ruleForm.verifyCode"
                  style="width: 65%;border-right: none; border-radius: 5px 0 0 5px;"
                  placeholder="请输入验证码"
                  :maxlength="6"
                ></el-input>
                <el-button
                  class="smsMsg_btn"
                  style="margin-left: -4px;  border-radius: 0 5px 5px 0;"
                  @click="sendcode"
                  :disabled="disabled"
                  v-if="disabled == false"
                >发送验证码</el-button>
                <el-button
                  style="margin-left: -4px;  border-radius: 0 5px 5px 0;"
                  class="smsMsg_btn"
                  @click="sendcode"
                  :disabled="disabled"
                  v-if="disabled == true"
                >{{ btntxt }}</el-button>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  type="password"
                  clearable
                  class="inputMsg"
                  prefix-icon="el-icon-lock"
                  v-model="ruleForm.password"
                  autocomplete="off"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password2">
                <el-input
                  type="password"
                  prefix-icon="el-icon-lock"
                  clearable
                  class="inputMsg"
                  v-model="ruleForm.password2"
                  autocomplete="off"
                  placeholder="请确认密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="uppwd('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
            <el-divider style="padding:20px 0;">
              <a
                style="background-color:#f0f0f0;padding:0;"
                href="http://47.105.75.254:9100/cas?service=http://47.105.75.254:8080/jump"
              >直接登录</a>
              <!-- <a
                style="background-color:#f0f0f0;padding:0;"
                href="http://47.105.75.254:9100/cas?service=http://47.105.75.254:8080/jump"
              >首页</a>-->
            </el-divider>
            <!-- <div class="border" style="margin-bottom: 10px;"></div> 
            <ul class="common-form pr">
              <li
                style="text-align: center;line-height: 48px;margin-bottom: 0;font-size: 12px;color: #999;"
              >
                <span>如果您已拥有 三济生物 账号，则可在此</span>
                <a href="javascript:;" style="margin: 0 5px" @click="toLogin">登陆</a>
              </li>
            </ul>-->
          </div>
        </div>
      </div>
      <div class="border" style="text-align:center;width: 100%;">
        <p class="links" style="height:30px;">
          <a target="_blank" href="http://www.3gbio.com.cn/html/about/intro/">
            <span>关于公司</span>
          </a>
          <a href="####">
            <span>|</span>
          </a>
          <a target="_blank" href="http://www.3gbio.com.cn/html/privacy/">
            <span>隐私条款</span>
          </a>
          <a href="####">
            <span>|</span>
          </a>
          <a target="_blank" href="http://www.3gbio.com.cn/html/Legal-Notices/">
            <span>法律声明</span>
          </a>
          <a href="####">
            <span>|</span>
          </a>
          <a target="_blank" href="http://www.3gbio.com.cn/html/mail/">
            <span>企业邮箱</span>
          </a>
          <a href="####">
            <span>|</span>
          </a>
          <a target="_blank" href="https://www.cnzz.com/stat/website.php?web_id=4698979">
            <span>站长统计</span>
          </a>
        </p>
        <el-divider></el-divider>
        <p class="copyright" style="height:30px;">
          <a
            target="_blank"
            href="http://www.miibeian.gov.cn/"
            style="color:#8e8e8e;"
          >湘ICP备18007563号-1</a>
          <span style="color:#8e8e8e;">长沙三济生物科技有限公司 copyright 2012 © 版权所有</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import YFooter from "/common/footer";
import YButton from "/components/YButton";
import { resetpwd } from "/api/index.js";
import "element-ui";
// import $ from 'jquery'
import axios from "axios";
// import qs from 'qs'
export default {
  data() {
    return {
      disabled: false,
      time: 0,
      input: "",
      btntxt: "重新发送",
      // 注册页面字段
      ruleForm: {
        mobile: "",
        password2: "",
        password: "",
        verifyCode: ""
      },
      // 校验规则
      loginFormRules: {
        password2: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        password: [
          {
            // validator: validatePass,
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        verifyCode: [
          { required: true, message: "请输入手机验证码", trigger: "blur" }
        ]
      },
      formLabelWidth: "1px"
    };
  },
  methods: {
    // 手机验证发送验证码
    sendcode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      var url = "/front/verifyCode/" + this.ruleForm.mobile;
      if (this.ruleForm.mobile === "") {
        this.$message({
          message: "手机号不能为空",
          center: true
        });
        return;
      } else if (!reg.test(this.ruleForm.mobile)) {
        this.$message({
          message: "请输入正确的手机号",
          center: true
        });
        return;
      } else {
        axios({
          method: "get",
          url: url
        }).then(res => {
          // this.phonedata = res.data
          // console.log(res)
          this.$message({
            message: "发送成功",
            type: "success",
            center: true
          });
          this.time = 60;
          this.disabled = true;
          this.timer();
        });
      }
    },
    // 60S倒计时
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },
    // 提交重置密码表单 1
    uppwd(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.ruleForm.password2 === this.ruleForm.password) {
            let data = new FormData();
            data.append("password", this.ruleForm.password);
            data.append("mobile", this.ruleForm.mobile);
            data.append("verifyCode", this.ruleForm.verifyCode);
            resetpwd(data)
              .then(res => {
                // console.log('RES=1' + res)
                if (res.status === 2) {
                  this.$message({
                    message: res.message,
                    type: "success"
                  });
                  return this.$router.push({
                    path: "/login"
                  });
                } else {
                  // console.log('RES=其他' + res)
                  this.$message.error(res.message);
                  this.ruleForm.verifyCode = "";
                  return this.$router.push({
                    path: "/register"
                  });
                }
              })
              .catch(res => {
                // console.log(222)
                this.$message({
                  message: res.message,
                  type: "error"
                });
              });
          } else {
            this.$message({
              message: "两次输入的密码不相同!",
              type: "error"
            });
            this.ruleForm.password2 = null;
            return false;
          }
        } else {
          // console.log(333)
          this.$message({
            message: "请补全信息",
            type: "error"
          });
          return false;
        }
      });
    },
    // 提交重置密码表单 2
    // 重置按钮
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 跳转到登录页
    toLogin() {
      this.$router.push({
        path: "/login"
      });
    }
  },
  components: {
    YFooter,
    YButton
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" >
// 底部footer样式（1）
.border {
  position: absolute;
  bottom: 0;
  // top: 50%;
  // left: 50%;
  // margin-left: -225px;
  .el-divider--horizontal {
    margin: 10px 0 !important;
  }
}
.links a {
  color: #8e8e8e;
}
// 底部footer样式（2）
.el-divider--horizontal {
  margin: 30px 0 !important;
}
.content_center .el-divider__text {
  padding: 0 5px;
  background-color: #f0f0f0;
  font-size: 16px;
}
.content_center .el-divider--horizontal {
  margin: 50px 0;
}
.smsMsg input.el-input__inner {
  border-right: none;
  border-radius: 5px 0 0 5px;
}
.smsMsg_btn button {
  margin-left: -4px;
  border-radius: 0 5px 5px 0;
}
* {
  box-sizing: content-box;
}
.el-form-item__content,
.inputMsg el-input {
  margin-right: 50px !important;
}
.el-form-item {
  margin: 25px 0 10px 0;
}
.el-form-item__content {
  text-align: center;
}
.inputMsg1 {
  margin-right: 100px !important;
}
.login {
  overflow-x: hidden;
  overflow-y: hidden;
  .input {
    height: 50px;
    display: flex;
    align-items: center;
    input {
      font-size: 16px;
      width: 100%;
      height: 100%;
      padding: 10px 15px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
  }
  .wrapper {
    background: url(/static/images/bg_9b9dcb65ff.png) repeat;
    background-size: 100px;
    min-height: 800px;
    min-width: 630px;
  }
}

.v2 .dialog {
  width: 450px;
  border: 1px solid #dadada;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  margin-left: -225px;
  position: absolute;
  .title {
    background: linear-gradient(#fff, #f5f5f5);
    height: auto;
    overflow: visible;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    position: relative;
    // background-image: url(/static/images/smartisan_4ada7fecea.png);
    background-image: url(/static/images/smartisan_4ada7fecea.jpg);
    background-size: 140px;
    background-position: top center;
    background-repeat: no-repeat;
    // height: 92px;
    margin: 23px 0 50px;
    padding: 75px 0 0;
    box-shadow: none;
    h4 {
      padding: 0;
      text-align: center;
      color: #666;
      border-bottom: 1px solid #dcdcdc;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      font-weight: 700;
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      margin: 0;
      padding: 0;
      border-bottom: 0;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      line-height: 1em;
      height: auto;
      color: #333;
      font-weight: 400;
    }
  }
  .content {
    padding: 0 40px 22px;
    height: auto;
    .common-form {
      li {
        clear: both;
        margin-bottom: 15px;
        position: relative;
      }
    }
  }
}

.dialog-shadow,
.v2 .bbs .dialog-shadow,
.v2 .dialog-shadow {
  -webkit-box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
    0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04),
    0 10px 20px -10px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
    0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04),
    0 10px 20px -10px rgba(0, 0, 0, 0.04);
  box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
    0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04),
    0 10px 20px -10px rgba(0, 0, 0, 0.04);
}

@media screen and (min-width: 737px),
  screen and (-webkit-max-device-pixel-ratio: 1.9) and (max-width: 736px) and (min-device-width: 737px) {
  .wrapper {
    background: url(/static/images/con-bg_04f25dbf8e.jpg) repeat-x;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .dialog {
    background: url(/static/images/dialog-gray-bg.png) #fff bottom repeat-x;
    border-radius: 12px;
    display: none;
    margin: -163px 0 0 -218px;
    width: 436px;
    position: fixed;
    left: 50%;
    top: 50%;
  }
  .dialog .title h4 {
    border-bottom: #d1d1d1 solid 1px;
    box-shadow: 0 2px 6px #d1d1d1;
    color: #666;
    font-size: 20px;
    height: 61px;
    line-height: 61px;
    padding: 0 0 0 35px;
  }
  .common-form li {
    clear: both;
    margin-bottom: 15px;
    position: relative;
  }
  .auto-login {
    position: absolute;
    top: 0px;
    left: 2px;
    color: #999;
  }

  .other {
    margin: 20px 5px 0 0;
    width: auto;
    color: #bbb;
    font-size: 12px;
    cursor: default;
    color: #999;
  }
  .footer {
    display: flex;
    flex-direction: row;
  }
  .agree {
    margin-bottom: 30px;
    color: #999;
  }
}

.registered {
  h3 {
    padding: 0;
    text-align: center;
    color: #000;
    // border-bottom: 1px solid #dcdcdc;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-weight: 700;
    font-size: 40px;
    // height: 60px;
    // line-height: 60px;
  }
  h4 {
    padding: 0;
    text-align: center;
    color: #666;
    // border-bottom: 1px solid #dcdcdc;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-weight: 700;
    font-size: 16px;
  }
}

#wait {
  text-align: left;
  color: #999;
  margin: 0;
}
</style>
