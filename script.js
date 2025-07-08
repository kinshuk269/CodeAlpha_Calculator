const display = document.getElementById('display');

function appendValue(value) {
  if (display.textContent === '0' || display.textContent === 'Error') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function deleteLast() {
  if (display.textContent.length === 1 || display.textContent === 'Error') {
    display.textContent = '0';
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
}

function square() {
  try {
    const value = eval(display.textContent);
    display.textContent = value * value;
  } catch {
    display.textContent = 'Error';
  }
}

function squareRoot() {
  try {
    const value = eval(display.textContent);
    display.textContent = Math.sqrt(value);
  } catch {
    display.textContent = 'Error';
  }
}

function calculate() {
  try {
    const expression = display.textContent.replace(/÷/g, '/').replace(/×/g, '*');
    const result = eval(expression);
    display.textContent = result;
  } catch {
    display.textContent = 'Error';
  }
}
