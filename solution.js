function pyramid(n){
  let result = "";
  let k = "\n  ";
  for (let i = 2*(n-1)+1; i > 0; i = i-2){
    let m = i;
    while(m > 0){
      result += "* ";
      m--;
    }
    result += k;
    k += "  ";
  }
  console.log(result);
}

//pyramid(11);