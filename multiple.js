function multipleArray(n) {
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

multipleArray(10);