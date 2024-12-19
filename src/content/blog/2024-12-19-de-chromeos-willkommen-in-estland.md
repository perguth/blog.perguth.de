---
pubDatetime: 2024-08-15
title: "[de] ChromeOS: Willkommen in Estland"
ogImage: /uploads/de-willkommen-in-estland.jpg
featured: true
draft: false
tags:
  - ChromeOS
  - eResidency
  - OpenSource
  - Estland
lang: de
---
ChromeOS: Welcome to Estonia - 𝗘𝗶𝗻 𝗘𝗿𝗳𝗮𝗵𝗿𝘂𝗻𝗴𝘀𝗯𝗲𝗿𝗶𝗰𝗵𝘁 𝗮𝘂𝘀 𝗱𝗲𝗿 𝗢𝗽𝗲𝗻-𝗦𝗼𝘂𝗿𝗰𝗲-𝗪𝗲𝗹𝘁

In den letzten zwei Jahren habe ich an einem Open-Source-Projekt gearbeitet: „ChromeOS: Welcome to Estonia“. Diese Softwarelösung richtet sich an Nutzer von ChromeOS, die die e-Residency Estlands ([e-Estonia](https://www.linkedin.com/company/e-estonia/)) nutzen möchten. Das Setup installiert und konfiguriert die nötigen Werkzeuge, um mit der digitalen Identität Estlands zu arbeiten, inklusive der Möglichkeit, Dokumente zu signieren und verschlüsseln.

𝗗𝗶𝗲 𝗔𝗻𝗳𝗮̈𝗻𝗴𝗲: 𝗘𝗶𝗻 𝗧𝗼𝗼𝗹 𝗳𝘂̈𝗿 𝗲-𝗥𝗲𝘀𝗶𝗱𝗲𝗻𝗰𝘆 𝗮𝘂𝗳 𝗖𝗵𝗿𝗼𝗺𝗲𝗢𝗦

Die e-Residency Estlands ermöglicht es Menschen weltweit, eine digitale Identität zu erhalten, um estnische staatliche Dienste zu nutzen und Unternehmen innerhalb der EU zu gründen. Ziel war es, den Prozess für ChromeOS-Nutzer zu vereinfachen.

𝗛𝗲𝗿𝗮𝘂𝘀𝗳𝗼𝗿𝗱𝗲𝗿𝘂𝗻𝗴𝗲𝗻: 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲-𝗔̈𝗻𝗱𝗲𝗿𝘂𝗻𝗴𝗲𝗻 𝘂𝗻𝗱 𝘂𝗻𝗲𝗿𝘄𝗮𝗿𝘁𝗲𝘁𝗲 𝗛𝘂̈𝗿𝗱𝗲𝗻

Wie bei vielen Softwareprojekten gab es Herausforderungen. Eine Änderung in der e-Residency-Software führte dazu, dass mein Setup nicht mehr funktionierte. [Lauri Kaski](https://www.linkedin.com/in/laurikaski/), damals CEO von [Cloudpoint](https://www.linkedin.com/company/cloudpoint-oy/), schrieb mir im Mai:

\> „𝘌𝘳𝘴𝘵𝘮𝘢𝘭 𝘮𝘰̈𝘤𝘩𝘵𝘦 𝘪𝘤𝘩 𝘮𝘪𝘤𝘩 𝘧𝘶̈𝘳 𝘥𝘪𝘦𝘴𝘦𝘴 𝘨𝘳𝘰ß𝘢𝘳𝘵𝘪𝘨𝘦 𝘗𝘳𝘰𝘫𝘦𝘬𝘵 𝘣𝘦𝘥𝘢𝘯𝘬𝘦𝘯. 𝘓𝘦𝘪𝘥𝘦𝘳 𝘴𝘤𝘩𝘭𝘢𝘨𝘦𝘯 𝘪𝘯 𝘭𝘦𝘵𝘻𝘵𝘦𝘳 𝘡𝘦𝘪𝘵 𝘐𝘯𝘴𝘵𝘢𝘭𝘭𝘢𝘵𝘪𝘰𝘯𝘦𝘯 𝘧𝘦𝘩𝘭, 𝘪𝘯𝘴𝘣𝘦𝘴𝘰𝘯𝘥𝘦𝘳𝘦 𝘢𝘶𝘧 𝘊𝘩𝘳𝘰𝘮𝘦𝘖𝘚 𝘍𝘭𝘦𝘹. 𝘒𝘰̈𝘯𝘯𝘵𝘦𝘯 𝘚𝘪𝘦 𝘥𝘢 𝘭𝘦𝘪𝘤𝘩𝘵 𝘸𝘦𝘪𝘵𝘦𝘳𝘩𝘦𝘭𝘧𝘦𝘯?“

Ich bot ihm an, das Problem gegen eine Aufwandsentschädigung schneller zu lösen, was er annahm:

\> „𝘉𝘪𝘵𝘵𝘦 𝘮𝘢𝘤𝘩𝘦𝘯 𝘚𝘪𝘦 𝘸𝘦𝘪𝘵𝘦𝘳, 𝘶𝘯𝘥 𝘪𝘤𝘩 𝘧𝘳𝘦𝘶𝘦 𝘮𝘪𝘤𝘩, 𝘐𝘩𝘯𝘦𝘯 𝘧𝘶̈𝘳 𝘥𝘪𝘦 𝘓𝘰̈𝘴𝘶𝘯𝘨 𝘻𝘶 𝘣𝘦𝘻𝘢𝘩𝘭𝘦𝘯. 𝘌𝘴 𝘨𝘦𝘩𝘵 𝘮𝘪𝘳 𝘯𝘪𝘤𝘩𝘵 𝘯𝘶𝘳 𝘥𝘢𝘳𝘶𝘮, 𝘦𝘴 𝘢𝘶𝘧 𝘮𝘦𝘪𝘯𝘦𝘮 𝘎𝘦𝘳𝘢̈𝘵 𝘻𝘶𝘮 𝘓𝘢𝘶𝘧𝘦𝘯 𝘻𝘶 𝘣𝘳𝘪𝘯𝘨𝘦𝘯, 𝘴𝘰𝘯𝘥𝘦𝘳𝘯 𝘥𝘢𝘳𝘶𝘮, 𝘥𝘢𝘴 𝘗𝘳𝘰𝘫𝘦𝘬𝘵 𝘸𝘪𝘦𝘥𝘦𝘳 𝘻𝘶𝘮 𝘓𝘢𝘶𝘧𝘦𝘯 𝘻𝘶 𝘣𝘳𝘪𝘯𝘨𝘦𝘯.“

𝗨𝗻𝘁𝗲𝗿𝘀𝘁𝘂̈𝘁𝘇𝘂𝗻𝗴 𝗱𝘂𝗿𝗰𝗵 𝗱𝗶𝗲 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝘆

Die Unterstützung durch Lauri und Cloudpoint ermöglichte es mir, das Projekt wieder funktionsfähig zu machen und es zu verbessern. Das Setup läuft jetzt vollautomatisch.

Falls Sie Interesse an diesem Tool haben, schauen Sie gerne auf GitHub vorbei:

🔗 𝗚𝗶𝘁𝗛𝘂𝗯 𝗥𝗲𝗽𝗼𝘀𝗶𝘁𝗼𝗿𝘆: [https://github.com/perguth/chromeos-welcome-to-estonia](https://github.com/perguth/chromeos-welcome-to-estonia)