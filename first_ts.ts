(() => {
  function sayHi (str:string) {
    return str
  }
  let text = 'white mage'
  console.log(sayHi(text));
  // ts不能直接进行输出，需要编译成js文件才能进行输出,编译的指令是tsc 文件名，这样就可以输出一个同名的ts文件
  // ts中也可以书写js代码
})()