---
pubDatetime: 2024-12-31
title: "Building in the Open: The Quest for a Lightning-Fast Custom Storefront"
ogImage: /uploads/per-building-a-custom-storefront.jpg
featured: false
draft: false
tags:
  - WooCommerce
description: Our journey began with WooCommerce, evolved through Shopify, and
  now points toward a custom solution. The driving force? Speed, as measured by
  Google's PageSpeed Insights.
---
Our journey began with WooCommerce, evolved through Shopify, and now points toward a custom solution. The driving force? Speed, as measured by Google's PageSpeed Insights.

\## The Platform Journey  
WooCommerce was our starting point, yielding PageSpeed scores in the 70s. We quickly moved to Shopify, but despite its $80 monthly cost (including extensions), performance only improved to the 80s.

\## The Custom Solution  
Inspiration struck when I discovered Deno Merch's earlier version, which achieved perfect PageSpeed scores. Though they've since changed their approach, their implementation provided valuable insights for building our custom storefront.

\## Current Architecture  
Our shop currently runs on Shopify's GraphQL API. While this introduces some performance overhead, we've still managed to achieve a PageSpeed score of 99. How? Through decoupling:

1\. The core HTML/CSS loads instantly  
2\. Shop functionality (like the cart) initializes separately

You can see this in action at \[Sternvoll\]([https://www.sternvoll.com](https://www.sternvoll.com)) - the page loads rapidly, while the shopping cart icon takes about 500ms to become interactive.

\## Performance Monitoring  
Cloudflare's API Shield (found under Security settings) provides valuable latency metrics for API endpoints, helping us monitor and optimize performance.

\## Future Development  
While speed remains crucial, developer experience (DX) is equally important. Our next iteration will implement tRPC to enhance both performance and development efficiency.

\## Looking Ahead  
With the e-commerce landscape constantly evolving, what's your take on the trade-off between using established platforms versus building custom solutions? Have you found a sweet spot between development speed, performance, and maintainability in your projects?
