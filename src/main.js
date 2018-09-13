const $ = require('jquery');
const bootstrap = require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

calcTime = () => {
  const best = parseInt($('#best').val());
  const most = parseInt($('#most').val());
  const worst = parseInt($('#worst').val());
  const ans = ((best + most * 4 + worst) / 6);
  $('#ans').html(ans);
}
