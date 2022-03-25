---
title: Creating a City Builder using Python
description: Record of lessons learned and design decisions during my journey developing my first city builder game. Follow along as I learn how to architect a city builder, use PyGame, and make the whole thing run a social simulation
date: 2021-11-09
category: blog
series: Creating A City Builder
chapter: 0
private: true
---

# Creating My First City Builder

## Surfacing Agent-related Content to the player

There is a recent trend in city builder games to offer players a Twitter-like interface to learn some of the thoughts of the people in their cities. _Cities: Skylines_ has a blue bird that occasionally communicates resident thoughts. _Silicon City_ takes design choice a bit further by fitting an entire twitter clone into the game, complete with a chatbot that helps the player if they are stuck. Their version gives the player insight into both the thought of characters as well as some of the recent events in their lives. Players may choose to follow these characters to get more updates. Also, they can get a feel for if the character like them or not based on if the that character follows them on the virtual Twitter platform. I am interested to see how this plays out in the future as _Silicon Valley_ is further developed.

_Sim City 2000_ used a newspaper system that narrativized events in the town and sprinkles them with natural language. It gives the player an understanding of the general sentiment of the city's population.

## Optimization and Future Work

I am really excited to convert the codebase over to something more performant than python. Rust is my number-one candidate right now because of its memory safety and bindings for both Python and JavaScript. At the end of the day, I want this project to be accessible to as many people as want to use it. I think Rust puts this project in a good position to be just that.

Along with moving to rust here are some crates that I am interested in trying:

- [specs](https://crates.io/crates/specs) - Entity Component System
- [anymap](https://crates.io/crates/anymap) - Value store
- [slotmap](https://crates.io/crates/slotmap) - Persistent unique keys to access stored values

I heard about these while watching Catherine West's keynote at Rust Conf 2018, ["Using Rust For Game Development"](https://www.youtube.com/watch?v=aKLntZcp27M&ab_channel=Rust).

## Nov 11, 2021

I have started prototyping what an ECS version of _Talk of the Town_ would look like. I was waiting to do this port, but I have concluded that the ECS pattern is going to make my life easier in the end when we need to perform story sifting on the data. ECS naturally lays out information in a way that is modular and easily stored in a database. All the structurally related information is stored together in an array, and each component is mapped to a unique ID. I started adding unique IDs to things already and decoupling things by using IDs instead of references. That was a really good decision on my behalf because it is making this very easy. The main thing that I need to remember is that Entities are not containers. They are only lookup indices for the collections of components.

**_ECS Compliant Talk of the Town Classes_**

- City, CityFactory, \*All the classes in `talktown.city.layout.py`
- SimulationDateTime
- All the routine classes in `talktown.person.routine`
- Status, Status Manager
- Relationship, RelationshipManager
- ActivityRecord, ActivityTracker
