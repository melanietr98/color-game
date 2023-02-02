const shapes = ['circle', 'square', 'triangle'];
const colors = ['red', 'green', 'blue'];

let targetColor = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('target').innerHTML = targetColor;

for (let i = 0; i < 9; i++) {
  let shape = shapes[Math.floor(Math.random() * shapes.length)];
  let color = colors[Math.floor(Math.random() * colors.length)];
  let div = document.createElement('div');
  div.classList.add(shape, color);
  div.addEventListener('click', function() {
    if (this.classList.contains(targetColor)) {
      alert('Correct');
    } else {
      alert('Incorrect');
    }
  });
  document.getElementById('game').appendChild(div);
}
