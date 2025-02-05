---
pubDatetime: 2025-02-05
title: An Evening of Open Source Innovation at Hackergarten Stuttgart
ogImage: /uploads/hyper-yggdrasil-screencast.gif
featured: false
draft: false
tags:
  - opensource
  - networking
  - hackergarten
description: A hands-on evening at Hackergarten Stuttgart where I introduced
  Hyper-Yggdrasil, a project connecting decentralized network nodes via
  HyperDHT. From initial concept to working prototype, complete with pizza and
  great collaboration.
---
\# An Evening of Open Source Innovation at Hackergarten Stuttgart

About nine months ago, I had the pleasure of attending Hackergarten Stuttgart, a monthly gathering where developers come together to work on open source projects. The event, hosted at the codecentric AG office, proved to be an excellent blend of collaboration, learning, and community spirit.

\## The Hackergarten Experience

The evening kicked off with everyone gathering over pizza and soft drinks, creating an immediately welcoming atmosphere. What makes Hackergarten unique is its organic approach to project selection - participants propose ideas, and people naturally gravitate toward what interests them most. If your project generates enough interest, you become the session lead, guiding the collaborative effort.

\## My Project: Hyper-Yggdrasil

I proposed a project that caught several participants' attention - a proof of concept for connecting Yggdrasil Network nodes via HyperDHT. For those unfamiliar, Yggdrasil is a fascinating experimental networking project that aims to create a scalable and egalitarian routing scheme.

The session began with a thorough discussion of Yggdrasil's fundamentals. We explored its core concepts: how it functions as a decentralized routing scheme, requires minimal state to operate, and automatically finds the most direct path to destinations. This context was crucial for everyone to understand the value proposition of adding HyperDHT connectivity.

\## From Concept to Code

We then dove into implementation. The goal was to create a bridge between Yggdrasil nodes using HyperDHT for connection establishment. Our solution works by:

1\. Setting up two Yggdrasil instances

2\. Creating NodeJS scripts that handle the HyperDHT connection

3\. Establishing local TCP ports for communication

4\. Enabling IPv6 connectivity between the nodes

While we got the basic structure right during the session, it took an additional two hours of work afterward to polish everything into a working solution. The final result is now fully documented with both text explanations and a screencast demonstration.

\## The Power of Collaborative Development

What struck me most about the evening was how the Hackergarten format perfectly embodies the open source spirit. Ideas are shared freely, expertise is pooled, and everyone contributes to moving projects forward. The combination of structured project work with an informal, social atmosphere creates an ideal environment for innovation.

The project is available on GitHub as "hyper-yggdrasil" - a proof of concept that allows Yggdrasil nodes to connect via HyperDHT. It's a small but meaningful contribution to the networking ecosystem, and it all started with a simple project proposal at Hackergarten Stuttgart.

\## Looking Forward

If you're in the Stuttgart area and interested in open source development, I highly recommend checking out Hackergarten.
