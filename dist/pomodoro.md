---
title:  Pomodoro Timer
layout: project
subdomain: pomodoro
screenshot: pomodoro
github: https://github.com/jmcharter/pomodoro_timer
---

In this project I used html and simple vanilla JavaScript to create a "Pomodoro Clock". An initial work and break time are set when the page is loaded, which can be adjusted. Once start is clicked the clock will tick
down until it reaches zero, and then make an alarm noise to alert the user it's time for a break. At this point the timer will run for the shorter break duration and then revert back to the longer work duration.

An interesting challenge during this project was correctly displaying the time in minutes and seconds. The 
JavaScript code is all in seconds, so it was not completely intuitive. The main issue was with the seconds having a leading zero for single digits. I solved this problem by making use of the ternary operator, as so:


    clockFace.textContent = mins + ":" + (secs > 9 ? secs : '0' + secs);