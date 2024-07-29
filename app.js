function cheArm() {
    var inputNum = document.getElementById('num');
    var number = parseFloat(inputNum.value);
    var gNum = number.toString();
    var output = document.getElementById('result');
    if (output) {
        if (gNum.length === 3) {
            var d1 = parseFloat(gNum.charAt(0));
            var d2 = parseFloat(gNum.charAt(1));
            var d3 = parseFloat(gNum.charAt(2));
            var ArmstNum = d1 * d1 * d1 + d2 * d2 * d2 + d3 * d3 * d3;
            if (ArmstNum == number) {
                output.innerText = "".concat(number, " is An Armstrong number");
            }
            else {
                output.innerText = "".concat(number, " is not an Armstrong number");
            }
        }
        else if (gNum.length !== 3) {
            output.innerText = "Please Enter a three digit number";
        }
    }
}
window.cheArm = cheArm;
