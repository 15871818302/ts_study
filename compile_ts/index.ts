(() => {
  // 在形参后面加上类型注解之后，只能传递对应类型的参数，否则在ts里面会报错，但是能进行js文件的编译
  function job (str:string) {
    return str
  }
  const text = 'black mage'
  // const text = [1,2,3]
  console.log(job(text));
  
})()