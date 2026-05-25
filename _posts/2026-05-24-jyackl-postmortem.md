---
layout: post
title: "A Postmortem of Jyackl.com"
roles: "Full-Stack Developer, UX Designer"
technologies: "Angular, NextJS, React, Google Firebase, Google Cloud Platform, Algolia"
project_active: false 
---

Jyackl.com (pronounced "jackal") was an online catalog of Black-owned food businesses operating within the DMV area (Washington, D.C., Maryland, and Virginia). The website was inspired by my ex-partner and our adventures as food influencers during the early times of the COVID-19 pandemic. Our mission was to contribute to the growth, success, and visibility of Black-owned food businesses by connecting people with verified information. We took inspiration from apps like Yelp and Happy Cow.

This post provides an overview of the features we planned for Jyackl, its visual evolution, and lessons learned from development. Jyackl.com was deactivated in 2024. The source code is not publicly available online. I'm thankful for those who supported the project while it was active.

## Planned Features

* Search for businesses by location and proximity  
* Filter search results based on cuisine offerings, dietary restrictions, and amenities  
* Users should be able to view search results as a list or as pins on a map  
* Users should be able to curate lists of their favorite places to share with others

## Design Iteration 0: Summer 2020

The first iteration of Jyackl.com was called TheBlackListDMV.com, named after the associated social media page. I took a mobile-first approach to development, opting to deploy the site as a progressive web app. The figure below shows the home page.

{% include figure.html src="/static/figures/jyackl-figure-1.png" alt="Description" caption="Figure 1: (Left) Screenshot of HappyCow on iOS captured by the author. (Middle) Screenshot Booking.com in Safari on iOS. (Right) Screenshot of TheBlacklistDMV.com in Google Chrome on desktop, which eventually became Jyackl.com. Notice our use of content cards to denote search results, a common theme among existing applications. At the time, the image links were not broken." %}

## Design Iteration 1: Winter 2020

For the second iteration, I moved away from the completely mobile look. I also added some simple blog posts based on some social media posts. This iteration was also when I updated the website's deployment workflow to use server-side rendering to improve SEO.

{% include figure.html src="/static/figures/jyackl-figure-2.png" alt="Description" caption="Figure 2: Second iteration of the directory site released in winter 2020. We updated the search bar to include keyword searches and added a section with blog posts featuring curated lists of restaurants. The old homepage was recycled into the search page." %}

## Design Iteration 2: Spring 2021

This version moved away from my idea to host blogs. It leaned more toward only presenting the businesses. However, the home page did not provide much context for what the site was or how to use it. I used HappyCow and Netflix as design inspiration. This iteration also included a revamped search experience powered by Algolia and Leaflet maps.

{% include figure.html src="/static/figures/jyackl-figure-3.png" alt="Description" caption="Figure 3: Screenshots captured by the author in Google Chrome on desktop (Left). HappyCow. (Middle) Netflix (Right) Jyackl.com Spring 2021 release. Notice we use horizontally scrolling content cards to denote search results, a common theme among existing applications." %}

{% include figure.html src="/static/figures/jyackl-figure-4.png" alt="Description" caption="Figure 4: Screenshots captured by the author in Google Chrome of Jyackl.com’s search page and an example directory listing." %}

## Design Iteration 3: Spring 2022

For this design iteration, we switched the front-end from Angular to NextJS (Angular to React). I chose to do this because server-side rendering was a core part of Jyackl, and NextJS provided good SSR as part of the core framework. Angular did not add SSR as a core module until much later. I changed the site's visual presentation to be more minimalist. The previous version just dropped users into the app without context. This latest version included more landing page text explaining the app's purpose.

{% include figure.html src="/static/figures/jyackl-figure-5.png" alt="Description" caption="Figure 5: Screenshots captured by the author in Google Chrome of Jyackl.com’s new homepage" %}

## Lessons Learned

Jyackl.com was my first time embarking on such a large, publicly visible project. I had ambitious plans for this project and lost sight of keeping the scope manageable. Enter the monster that is *Scope Creep*. The following are a few core lessons I gleaned after reflecting on my time with this project.

### 1. Keep It Simple. Do Not Design for "What if…"

I added months to our development timeline to implement half-baked user accounts because I was worried that our manual data-entry workflow would not scale to support the overnight success I anticipated. At the time, we entered data manually into our site from a spreadsheet. I thought that if we added user and business accounts, people could manage their own information, relieving us of the responsibility. However, I did not realize that user accounts would open a whole new can of worms regarding privacy, data protection, and content moderation.

We should have stuck with our decision to follow the HappyCow business model, in which users submit new entries or updates to the app moderators for review before they're posted to the general user base. We could have started with a Google Form and eventually transitioned to an In-app form. If we became too overwhelmed with submissions, we could have brought additional people onto the team. My decision to implement user accounts was unnecessary at this time and represented a classic case of designing for a problem that doesn't exist.

### 2. Build a REST API for Unified Data Access

We should have spent more time at the beginning of the project working on the REST API to facilitate data exchange between the app and backend services. Jyackl used a combination of  Firestore, Firebase Storage, Algolia Search, and Firebase Cloud Functions. These service dependencies were also reflected in the front-end application because we did not provide a unified REST API  as a clean single point of data access. Spending more time on this at the beginning of the project would have facilitated development by enabling us to mock the back-end services.

### 3. Functional Pages First, Styling Later

I focused too much on presentation and not enough on function when developing Jyackl. This lesson piggybacks on my lesson about spending more time building the API. I should have focused on implementing basic HTML pages that provided the interaction loops we desired. Implementing functional pages first would have helped with testing and ensuring we were feature-complete.

### 4. Focus on the Core Value Proposition

At one point in development, I spent months working on an internal system for us to post blogs. This feature was entirely unnecessary because it didn't add value to the website's value proposition. I went down a feature rabbit hole without assessing whether the work was truly needed. Simply put, I should have spent more time on the API and core web functionality before moving on to auxiliary features.