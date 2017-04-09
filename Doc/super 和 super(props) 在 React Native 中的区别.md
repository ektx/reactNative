# super 和 super(props) 在 React Native 中的区别

当你想在 constructor 中使用 this.props 时

```javascript
export default class WelcomeView extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    
    console.log(this.props)
    // -> {icon: 'home', ...}
  }
}
```

没有使用时:

```javascript
export default class WelcomeView extends Component {
  // 初始化模拟数据
  constructor(props) {
    super();
    
    console.log(this.props)
    // -> undefined
    
    // props 仍然可以访问
    console.log(props)
    // -> {icon: 'home', ...}
  }
  
  render() {
    console.log(this.props)
    // -> {icon: 'home', ...}
  }
}
```

## 参考

[What's the difference between “super()” and “super(props)” in React when using es6 classes?](http://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e)

