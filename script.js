const advice = document.getElementById('advice');
const title = document.getElementById('title');
const btn = document.getElementById('btn');

btn.addEventListener('click', getAdvice);

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('advice').innerHTML = `"${data.slip.advice}"`;
      document.getElementById('title').innerHTML = `ADVICE # ${data.slip.id}`;
    })
    .catch((err) => console.log(err));
}
