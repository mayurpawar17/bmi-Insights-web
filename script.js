function calculateBMI() {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const result = document.getElementById("result");
  const status = document.getElementById("status");
  const blue = document.getElementById("blue");
  const red = document.getElementById("red");
  const yellow = document.getElementById("yellow");
  const green = document.getElementById("green");

  // Get values from input fields
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Validation

  if (!height && !weight) {
    status.textContent = "Please enter your height and Weight.";
    status.style.color = "black";
    return;
  }
  if (isNaN(height) || (height <=0 || height>300)) {
    status.textContent = "Please enter a valid height.";
    status.style.color = "black";

    return;
  } else if (isNaN(weight) || (weight <=0 || weight>300)) {
    status.textContent = "Please enter a valid weight.";
    status.style.color = "black";

    return;
  }

  // Convert height from cm to meters
  const heightInMeters = height / 100;

  // Calculate BMI
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  // Display result with BMI category
  result.style.color = "black";
  if (bmi < 18.5) {

    result.textContent = `BMI: ${bmi}`;
    status.textContent = `Underweight`;
    blue.style.color = "blue";
    green.style.color = "white";
    yellow.style.color = "white";
    red.style.color = "white";
    status.style.color = "blue";
    result.style.color = "blue";
    status.style.fontWeight = "bold";

  } else if (bmi >= 18.5 && bmi < 24.9) {

    result.textContent = `BMI: ${bmi}`;
    status.textContent = `Healthy`;
    green.style.color = "green";
    blue.style.color = "white";
    yellow.style.color = "white";
    red.style.color = "white";
    status.style.color = "green";
    result.style.color = "green";
    status.style.fontWeight = "bold";

  } else if (bmi >= 25 && bmi < 29.9) {

    result.textContent = `BMI: ${bmi}`;
    status.textContent = `Overweight`;
    yellow.style.color = "yellow";
    red.style.color = "white";
    blue.style.color = "white";
    green.style.color = "white";
    status.style.color = "yellow";
    result.style.color = "yellow";
    status.style.fontWeight = "bold";

  } else {
    result.textContent = `BMI: ${bmi}`;
    status.textContent = `Obese`;
    red.style.color = "red";
    blue.style.color = "white";
    green.style.color = "white";
    yellow.style.color = "white";
    status.style.color = "red";
    result.style.color = "red";
    status.style.fontWeight = "bold";
  }
}

function resetCalculator() {

    const blue = document.getElementById("blue");
  const red = document.getElementById("red");
  const yellow = document.getElementById("yellow");
  const green = document.getElementById("green");
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result").textContent = "0.0";

  document.getElementById("status").textContent =
    "Please enter your height and Weight.";

  document.getElementById("result").style.color = "black";
  document.getElementById("status").style.color = "black";
  document.getElementById("text-red").style.color = "black";
  document.getElementById("text-blue").style.color = "black";
  document.getElementById("text-green").style.color = "black";
  document.getElementById("text-yellow").style.color = "black";
}
