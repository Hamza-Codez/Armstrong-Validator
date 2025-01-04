function cheArm() {
    var inputNum = parseFloat(document.getElementById('num').value);
    var gNum = inputNum.toString();
    var output = document.getElementById('result');
    if (output) {
        if (gNum.length === 3) {
            var _a = gNum.split('').map(function (n) { return parseFloat(n); }), d1 = _a[0], d2 = _a[1], d3 = _a[2];
            var isArmstNum = Math.pow(d1, 3) + Math.pow(d2, 3) + Math.pow(d3, 3) === inputNum;
            output.innerText = isArmstNum
                ? "".concat(inputNum, " is An Armstrong number") : "".concat(inputNum, " is not an Armstrong number");
        }
        else {
            output.innerText = "Please Enter a three digit number";
        }
    }
}
window.cheArm = cheArm;
