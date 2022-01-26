(()=>{
  // 定义一个接口
  interface Irole {
    job:string
    level:string
  }
  // 定义一个类
  class role {
    job:string
    level:string

    // 定义一个构造函数
    constructor (job:string,level:string) {
      this.job = job
      this.level = level
    }
  }
  // 定义一个函数
  function charactor (chara:Irole) {
    return chara.job + chara.level
  }

  const gameRole = new role('black mage','80')
  console.log(charactor(gameRole));
  

  // ts也可以使用js中的类，本质上ts中的类就是js中函数的语法糖
})()