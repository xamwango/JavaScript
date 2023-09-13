const colorSelector = document.querySelector("#colorSelector");
const hexvalue = document.querySelector("#hexValue");
const rgb = document.querySelector("#rgb");

colorSelector.addEventListener("input", (event) => {
  hexValue.textContent = `Hex value = ${event.target.value}`;
  const hex = event.target.value;
  hexNumbers = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  const red = hexNumbers[hex[1]] * 16 + hexNumbers[hex[2]];
  const green = hexNumbers[hex[3]] * 16 + hexNumbers[hex[4]];
  const blue = hexNumbers[hex[5]] * 16 + hexNumbers[hex[6]];
  rgb.textContent = `RGB value rgb(${red}, ${green}, ${blue})`;
});
