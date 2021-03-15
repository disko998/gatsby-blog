---
title: Context API for State Management in React
date: 2021-01-12T13:00:07+0000
description: "Use Context API to manage your react app, without learning complex Redux / Mobx structures."
tags: [react, javascript, context API]
readTime: 2 min
thumbnail: ./react-context.jpeg
---

During the process of developing React applications, I’ve had times when I had to decide if I should use Redux or the fairly new hook (available from React’s version 16.3) called Context API for managing state in my application. For the most part, I have used Redux, but I feel Context API is a little less daunting to me. Anyway, I tend to use Context API where ever I can and that's small to medium size apps, but for large scale apps you should go with redux or mobx.

In this blog I'll show you how to setup Context API similar to redux, without any additional libraries or concepts. If you already familiar with React, witch I assume, there won't be any learning curve for you.

## Table of Contents

- [Overview on Redux](#redux)
- [Overview on Context API](#contextapi)
- [Context API Example](#example)

<a name="redux"></a>

# Overview on Redux

Redux is base on 3 key concepts that you need to understand:

- **_State:_** A state is where all the logic of your application lies. Basically, the state describes how your application works, and the UI is rendered based on the state. So instead of keeping your states in multiple component then you'll have hard time sharing it with others, what you can do instead is move that state to redux and it will be available for all of your components in the app.

- **_Actions:_** Actions are methods that are dispatched to trigger an event. Simply, an action is a way to notify that an event has occurred within the application. Now _action_ is not a function although you might think that, instead this is a plain javascript object. In order for redux to catch the action and change state you need to use dispatch method with _action_ object parameter, just like you do in component state with **setState** method.

- **_Reducers:_** Reducers are methods that catch different actions triggered and modifies the logic to change and update the state of the application. Basically this is like listener, so every time you dispatch action reducer catch it and produce new state base on the action type.
