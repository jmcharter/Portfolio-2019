---
title:  React Weather App
layout: project
subdomain: weather
screenshot: weather
github: https://github.com/jmcharter/ReactWeather
---


For this project, I made use of React and two APIs to create an interactive weather application that allows a user to view weather and time for a searched location.

The first API is [Open Weather Map](https://openweathermap.org/). The search box component passes it's content into the API query, which then returns the data as a JSON object. On hitting the return key, it will then display this data below.

There is also a clock component which get's the current time and updates the tick every second. This makes use of the momentJS library, to provide local time for the searched location and the date (including day, month, year and week)

The third and final component is for temperature. This component simply queries Open Weather Map for the appropriate weather icon and displays it under the queried temperature.

Another API I've made use of is [Unsplash](https://unsplash.com/developers). When a search is made the Unsplash API is queried, using the searched location and the resulting weather condition, to return an appropriate image which is then set to be the background.

