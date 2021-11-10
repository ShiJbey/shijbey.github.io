---
title: Creating a City Builder using Python
description: Record of lessons learned and design decions during my journey developing my first city builder game. Follow along as I learn how to architect a city builder, use pygame, and make the whole thing run a social simulation
date: "2021-11-09"
category: blog
series: Creating A City Builder
chapter: 0
---

# Creating My First City Builder

## Surfacing Agent-related Content to the player

There is a recent trend in city builder games to offer players a Twitter-esq interface to learn some of the thoughts of the people in their cities. *Cities: Skylines* has a blue bird that occasionsally communicates resident thoughts. *Silicon City* takes design choice a bit furhter by fitting an entire twitter clone into the game, complete iwth a chatbot that helps the player if they are stuck. Their version gives the player insite into botht the thought of characters as well as some of the recent events in their lives. Players may choose to follow these characters to get more updates. Also, they can get a feel for if the character like them or not based on if the that character follows them on the virtual Twitter platform. I am interested to see how this plays out in th future as *Silicon Valley* is furhter developed.

*Sim City 2000* used a newspaper systsem that narrativised events in the town and sprinkles them with natural language. It gives the player an understanding of the general sentiment of the city's population.



## Optimization and Future Work

I am really excited to convert the codebase over to something more performant than python. Rust is my number-one candidate right now becase of its memory safety and bindings for both Python and JavaScript. At the end of the day, I want this project to be accessible to as many people as want to use it. I think Rust puts this projct in a good position to be just that.

Along with moving to rust here are some crates that I am interested in trying:
* [specs](https://crates.io/crates/specs) - Entity-component system
* [anymap](https://crates.io/crates/anymap) - Value store
* [slotmap](https://crates.io/crates/slotmap) - Persistent unique keys to access stored values

I heard about these while watching Catherine West's keynote at Rust Conf 2018, ["Using Rust For Game Development"](https://www.youtube.com/watch?v=aKLntZcp27M&ab_channel=Rust).
