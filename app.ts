function cheArm(){
  const inputNum = document.getElementById('num') as HTMLInputElement;
  const number = parseFloat(inputNum.value);
  let gNum = number.toString();
  const output = document.getElementById('result');
  if(output){
    if( gNum.length === 3){
      let d1 = parseFloat(gNum.charAt(0));
      let d2 = parseFloat(gNum.charAt(1));
      let d3 = parseFloat(gNum.charAt(2));
      let ArmstNum = d1*d1*d1 + d2*d2*d2 + d3*d3*d3;
      if(ArmstNum == number){
        output.innerText = `${number} is An Armstrong number`;
      }else{
        output.innerText = `${number} is not an Armstrong number`;
      }
    }else if(gNum.length !== 3){
      output.innerText = `Please Enter a three digit number`
    }
  }
}
(window as any).cheArm = cheArm;

