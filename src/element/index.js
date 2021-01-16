import Vue from 'vue'
import {
  Container, Header, Aside, Main,
  Row, Col,
  Button, Input, Switch, Slider, Upload, DatePicker, Image, Checkbox, Select, Option, Loading,
  Menu, Submenu, MenuItem,
  Table, TableColumn,
  Form, FormItem,
  Message, MessageBox
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style.css'

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)

Vue.use(Row)
Vue.use(Col)

Vue.use(Button)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Slider)
Vue.use(Upload)
Vue.use(DatePicker)
Vue.use(Image)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Option)
Vue.use(Loading)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

Vue.use(Table)
Vue.use(TableColumn)

Vue.use(Form)
Vue.use(FormItem)

Vue.prototype.$message = Message
Vue.prototype.$messageBox = MessageBox
