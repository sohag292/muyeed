function calculate() {
    // get input values
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);
    const input3 = parseFloat(document.getElementById("input3").value);
  
    // perform calculations and set output values
    const output1 = (input1*6)*(input2*8)
    const output2 = input1*6
    const output3 = input2*8
    const output4 = input1*3.5
    const output5 = input2*0.02
    // display output values
    document.getElementById("output1").textContent = output1;
    document.getElementById("output2").textContent = output2;
    document.getElementById("output3").textContent = output3;
    document.getElementById("output4").textContent = output4 +"V";
    document.getElementById("output5").textContent = output5 +"A";

    // document.getElementById("input1").value = " ";
    // document.getElementById("input2").value = " ";
    // document.getElementById("input3").value = " ";
    // document.getElementById("input4").value = " ";
    // document.getElementById("input5").value = " ";
    
  }
  