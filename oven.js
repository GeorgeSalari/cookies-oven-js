//Write appropriate functions here for the oven. You may want to consider the following:
//1. A restart button is created when the user clicks the stop button.
//2. Now that you have created a restart button, think of what should happen when the restart button is clicked (refer back to the demo to help you).
//3. If you encountered any bugs in the demo, this is also the place where you can improve the demo's code.
//4. Some functions that you may find useful: getElementById, removeChild, innerHTML, setAttribute, appendChild, insertBefore.

function reset_all(){
  var p = document.getElementById("final-statement");
  p.innerHTML = "";
  cookieStatus = document.getElementById('cookie-status');
  cookieStatus.innerHTML = "";
  stopBtn = document.getElementById('stop-btn');
  stopBtn.disabled = false;
  p_timer = document.getElementById("timer");
  p_timer.innerHTML = "";
  cookieTray = document.getElementById('tray');
  cookieTray.innerHTML = '';
  clearBtn = document.getElementById('clear');
  clearBtn.parentNode.removeChild(clearBtn);
  p = document.getElementById('counter');
  cookieCount = 0;
  p.innerHTML = 'You have placed ' + cookieCount + ' cookie dough onto the tray.';
  restartBtn = document.getElementById('restart-btn');
  restartBtn.parentNode.removeChild(restartBtn);
  timerRunning = false;
  ovenAlreadyRan = false;
  currentTime = -1;
}

function create_restart(){
  var p = document.getElementById("final-statement");
  p.innerHTML = "Here you go!"
  var btn = document.createElement("button");
  btn.id = "restart-btn"
  var t = document.createTextNode("Restart");
  btn.appendChild(t);
  var div = document.getElementById("final-tray-container");
  div.appendChild(btn);
  stopBtn = document.getElementById('stop-btn');
  stopBtn.disabled = true;
  restartBtn = document.getElementById('restart-btn');
  restartBtn.addEventListener("click", reset_all);
}

function oven() {
  stopBtn = document.getElementById('stop-btn');
  stopBtn.addEventListener("click", create_restart);
}

document.addEventListener('DOMContentLoaded', oven);
