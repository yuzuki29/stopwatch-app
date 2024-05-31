"use strict";
/********************************************
 
**********************************************/
const timebox = document.getElementById("timebox");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const stopButton = document.getElementById("stop");
/********************************************
 
**********************************************/
startButton.addEventListener("click", clickStart);
stopButton.addEventListener("click", clickStop);
resetButton.addEventListener("click", clickReset);
/********************************************
 
**********************************************/
let startTime = 0;
let stopTime = 0;
let timeoutID = 0;
/********************************************
 
**********************************************/
function clickStart(event) {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    startTime = Date.now();
    displayTime();
}
function clickStop(event) {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    clearTimeout(timeoutID);
    stopTime += Date.now() - startTime;
}
function clickReset(event) {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    timebox.textContent = "00:00:00";
    stopTime = 0;
}
// 時間を表示する関数
function displayTime() {
    const currentTime = new Date(Date.now() - startTime + stopTime);
    const h = String(currentTime.getHours() - 9).padStart(2, "0");
    const m = String(currentTime.getMinutes()).padStart(2, "0");
    const s = String(currentTime.getSeconds()).padStart(2, "0");
    timebox.textContent = `${h}:${m}:${s}`;
    timeoutID = setTimeout(displayTime, 10);
}
