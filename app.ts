function cheArm(){
  const inputNum = parseFloat((document.getElementById('num') as HTMLInputElement).value);
  let gNum = inputNum.toString();
  const output = document.getElementById('result');
  if(output){
    if (gNum.length === 3){
      let [d1, d2, d3] = gNum.split('').map(n => parseFloat(n));
      const isArmstNum = d1**3 + d2**3 + d3**3 === inputNum;
      output.innerText = isArmstNum
       ? `${inputNum} is An Armstrong number` : `${inputNum} is not an Armstrong number`;
    }else{
      output.innerText = `Please Enter a three digit number`
    }
  } 
}
(window as any).cheArm = cheArm;

