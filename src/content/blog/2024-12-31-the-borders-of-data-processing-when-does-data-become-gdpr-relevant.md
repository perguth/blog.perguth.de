---
pubDatetime: 2024-12-31
title: "The Borders of Data Processing: When Does Data Become GDPR Relevant?"
ogImage: //uploads/per-beeing-a-customer-in-a-store.jpg
featured: false
draft: false
tags:
  - GDPR
  - Analytics
  - Ecommerce
description: In the digital age, understanding GDPR's scope is crucial for any
  business handling customer data. Let me share my perspective as someone
  working with online shops.
---
In the digital age, understanding GDPR's scope is crucial for any business handling customer data. Let me share my perspective as someone working with online shops.

_Disclaimer: I'm a tech professional, not a lawyer. This article shares my technical perspective and experience, but should not be considered legal advice. For specific legal guidance, please consult with legal professionals._

\## The Core Question: What Makes Data Personal?

Any data point that can be associated with a natural person likely falls under GDPR's scope. The key phrase here is "can be associated" – this includes not just direct identifiers, but also data that could identify someone when combined with other information, whether from internal sources or third parties.

Once such data is processed, GDPR requires both documentation and justification based on specific legal grounds (Article 6.1, points a-f, such as ~"upkeep of service").

\## A Real-World Analogy

Think of an online shop like its physical counterpart. In a brick-and-mortar store, staff naturally observe customers browsing products without collecting personal details. We want to replicate this balance in the digital world.

\## A Potential Solution: Time-Relative Analytics

To achieve meaningful analytics while respecting privacy, consider this approach:

Instead of absolute timestamps, use customer-relative timing:

\- t0: Customer enters store  
\- t1: Customer views product A  
\- tn: Customer completes purchase

These customer journeys can then be aggregated into time windows (e.g., 2-week periods) for analysis. This approach helps decouple behavior from personally identifiable information, especially when combined with appropriate time window selection and sales volume consideration.

\## Why This Matters

This method allows businesses to gain valuable insights while potentially reducing GDPR obligations. However, implementation details are crucial – factors like sales volume and time window length significantly impact the effectiveness of anonymization.

What are your thoughts on this approach to privacy-conscious analytics? I'd be interested in hearing about your experiences balancing business needs with data protection requirements.