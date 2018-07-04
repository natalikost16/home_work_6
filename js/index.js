let n = parseFloat(prompt('Enter number'));

    let fibArr = [1,1];
    for (let i = 1; i <= n; i++) {
    fibArr.push(fibArr[fibArr.length - 1]    + fibArr[fibArr.length - 2]);
    }
   let result = fibArr;
   alert(result); 
   