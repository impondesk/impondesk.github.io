---
layout: ../../layouts/BaseLayout.astro

title: 'Microfrontends, Microservices for the Frontend'
category: 'Frontend'
date: '2023-01-01'
lastmod: '2021-02-01'
tags: ['Microservices', 'Decomposition', 'Frontend', 'Angular', 'React']
draft: false
summary: 'Applying microservice patterns to the frontend yields microfrontends. With them, we get the benefits of microservices in the frontend.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['impondesk']
slug: 'microfrontends'
image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvbnQlMjBlbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60'
---

<main class="max-w-7xl mx-auto">

New age Microservice design pattern, for front-end application to decompose a monolithic application into individual semi-independent micro-apps with simple single responsibility, audience-driven, easy to develop and maintain with iterative approach, enable many benefits such as independent deployments, migration and experimentation, and resilient applications.

Micro Frontend are not trying to replace component architecture rather its a technique that decouple between teams and decentralize responsibility of each feature/capability & controlled separately independent of other team members that are more manageable and independent lifecycle and even stack.

Micro front ends are an architectural pattern that involves breaking down a large front-end application into smaller, more manageable parts. Each part is developed and deployed independently, with its own set of responsibilities and functionality. In a micro front end architecture, each team can work on their own section of the application without having to worry about the impact of their changes on other parts of the application. This allows for greater flexibility, scalability, and faster time to market.

# Decomposed & Iterative approach

With decomposition, decentralizing decisions to teams, a value-addition for organization and platforms as team lives and breathe with the product-teams and SME business experts without boundaries and constraints that sometimes are unnecessary.

Micro Frontend is change-in-game, Iterative approach for plan, design and deliverables and technology-independent and allow-s team to deploy pilot solutions and technologies for defined users and parallel implementation on upcoming features and roadmap as teams scope are changed to small rather than full single application.



> Techniques, strategies and recipes for building a modern web app with multiple teams using different JavaScript frameworks. — Micro Frontends


# Things to consider —

- Compatibility of UI Frameworks & versions support
- Data & State Management
- When-to-use guidelines, as it adds flexibility + complexity to platform

# Advantages -

One of the main benefits of micro front ends is the ability to independently deploy each section of the application. This means that updates and changes can be made quickly and with minimal disruption to the rest of the application. In addition, micro front ends can help improve the overall performance of the application by reducing the amount of code that needs to be loaded on each page. This can lead to faster load times and a better user experience. Finally, micro front ends can help reduce the complexity of large front-end applications, making them easier to manage and maintain over time.

- Scalable solution
- Independent Development and Deployment — Cross-Team approach, Faster & Independent Team Development
- Flexibility — Micro frontend architecture & design principles integrated existing web frameworks
- Technology Agnostic — Rendering library agnostic (integrates with React, Vue etc.)
- More comfortable Framework
- Modular architecture with Apps
- Progressive and easy to adopt in existing applications — Incremental Upgrade
- Isolated Runtime — State is isolated between each child/sub-application and no shared runtime state.

# Disadvantages -

Testing & Deployment challenges for ensuring all units are in-force, includes the all capabilities without failures or break points



# Frameworks available —

- [single-spa JS](https://single-spa.js.org/) - A javascript router for front-end microservices
- [Frint JS](https://frint.js.org/) - Modular JavaScript framework for building Scalable & Reactive applications.
- [qiankun](https://qiankun.umijs.org/) - Probably the most complete micro-frontends solution you ever met🧐

<!-- - https://bit.dev/ -->


# The Future of Web Development

As the complexity of front-end applications continues to grow, the need for more flexible and scalable architectures will only become more important. Micro front ends offer a way to break down large applications into smaller, more manageable parts that can be developed and deployed independently. This approach can lead to faster time to market, improved performance, and reduced complexity. As such, we can expect to see more and more companies adopting micro front ends in the years to come.


# Conclusion

Micro front ends are a powerful architectural pattern that can help improve the scalability, flexibility, and performance of large front-end applications. By breaking down applications into smaller parts that can be independently developed and deployed, teams can work more efficiently and with greater agility. As the world of web development continues to evolve, it is clear that micro front ends will play an important role in shaping the future of front-end architecture.


# References
https://semaphoreci.com/blog/microfrontends 




</main>