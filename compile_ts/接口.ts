(()=>{
  // interface就是接口
  // ts中的interface相当于是对函数形参的一种限制和定义，一旦把函数的形参定义成interface里面的数据类型，那么传过来的参数就要和interface里面保持一致
  interface Irole {
    job:string
    level:number
  }

  function role (role:Irole) {
    return `${role.job} + ${role.level}`
  }

  const charactor = {
    job: 'white mage',
    level: 80
  }

  console.log(role(charactor));
  
})()