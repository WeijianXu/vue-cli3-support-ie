import Vue from 'vue';
import {
  // 布局组件，
  Layout, Header, Sider, Content, Footer,
  // 图标、图徽等
  Avatar,
  // 按钮
  Button, ButtonGroup,
  // 面包屑
  Breadcrumb, BreadcrumbItem,
  // 卡片与栅格布局等
  Card, Row, Col,
  // 下拉菜单
  Dropdown, DropdownItem, DropdownMenu,
  // 表单与icon
  Icon,
  // 菜单
  Menu, MenuGroup, MenuItem, Submenu,
  // 消息提示
  Message, Tooltip,
  // 表格
  Table, Tabs, TabPane, Tag,
  Page,
  // 加载相关
  Scroll,
} from 'view-design';

// view-UI
import '../theme/custom-view.less';

// inject plugins/compoments，使用官网推荐方式，不加前缀 i-，大写形式
const components = {
  // Affix,
  // Alert,
  // Anchor,
  // AnchorLink,
  // AutoComplete,
  Avatar,
  // BackTop,
  // Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  // Carousel,
  // CarouselItem: Carousel.Item,
  // Cascader,
  // Cell,
  // CellGroup: Cell.Group,
  // Checkbox,
  // CheckboxGroup: Checkbox.Group,
  Col,
  // Collapse,
  // ColorPicker,
  Content,
  // DatePicker,
  // Divider,
  // Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Footer,
  // Form,
  // FormItem: Form.Item,
  Header,
  Icon,
  // Input,
  // InputNumber,
  Scroll,
  Sider,
  // Split,
  Submenu,
  Layout,
  // List,
  // ListItem: List.Item,
  // ListItemMeta: List.Item.Meta,
  // LoadingBar,
  Menu,
  MenuGroup,
  MenuItem,
  Message,
  // Modal,
  // Notice,
  // Option,
  // OptionGroup,
  Page,
  // Panel: Collapse.Panel,
  // Poptip,
  // Progress,
  // Radio,
  // RadioGroup: Radio.Group,
  // Rate,
  Row,
  // Select,
  // Slider,
  // Spin,
  // Step: Steps.Step,
  // Steps,
  Table,
  Tabs,
  TabPane,
  Tag,
  // Time,
  // Timeline,
  // TimelineItem: Timeline.Item,
  // TimePicker,
  Tooltip,
  // Transfer,
  // Tree,
  // Upload,
};

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});

// 全局配置 iview ，参考 https://www.iviewui.com/docs/guide/global
Vue.prototype.$IVIEW = Object.assign(Vue.prototype.$IVIEW || {}, {
  size: 'default', // 所有带有 size 属性的组件的尺寸 large
  // transfer: '',
  // capture: '',
  select: {
    arrow: '',
    customArrow: '',
    arrowSize: '',
  },
  // cell: {
  //   arrow: '',
  //   customArrow: '',
  //   arrowSize: '',
  // },
  menu: {
    // arrow: '',
    // customArrow: '',
    // arrowSize: '',
  },
  // tree: {
  //   arrow: '',
  //   customArrow: '',
  //   arrowSize: '',
  // },
  // cascader: {
  //   arrow: '',
  //   customArrow: '',
  //   arrowSize: '',
  //   itemArrow: '',
  //   customItemArrow: '',
  //   itemArrowSize: '',
  // },
  // colorPicker: {
  //   arrow: '',
  //   customArrow: '',
  //   arrowSize: '',
  // },
  // datePicker: {
  //   icon: '',
  //   customIcon: '',
  //   iconSize: '',
  // },
  // timePicker: {
  //   icon: '',
  //   customIcon: '',
  //   iconSize: '',
  // },
  // tabs: {
  //   closeIcon: '',
  //   customCloseIcon: '',
  //   closeIconSize: '',
  // },
  // modal: {
  //   maskClosable: '',
  // },
});

// Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$Message = Message;
// Vue.prototype.$Modal = Modal;
// Vue.prototype.$Notice = Notice;
// Vue.prototype.$Spin = Spin;
