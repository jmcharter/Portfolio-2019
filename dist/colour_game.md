---
title:  Hex Colour Guessing Gaming
layout: project
subdomain: rgbgame
screenshot: hexgame
github: https://github.com/jmcharter/rgbGuessingGame
---


This is an update of a project I completed years ago. At the time I followed a tutorial from Colt Steele, but this updated version has been made from scratch. I've made sure to keep all of the original functionality, but using more modern ES6 paradigms, such as the use of `let` and `const` over `var`, and the use of arrow functions.

The game itself is simple. I made use only of vanilla JavaScript to generate random hex colours and change the background colour of the divs to match them. One of these is then assigned as the "chosen colour". You can guess which squared matches the displayed chosen colour, and if successful the game will finish and all squares (and the head background) will change to match that colour.

I've implemented two modes, easy and hard mode, as well as the ability to regenerate the colours or reset mid game.
