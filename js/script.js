'use strict';
const calcTime = () => {
  const best = Number(document.getElementById('best').value);
  const most = Number(document.getElementById('most').value);
  const worst = Number(document.getElementById('worst').value);
  const ans = Number((best + most * 4 + worst) / 6);
  document.getElementById('ans').innerHTML = ans;
}
