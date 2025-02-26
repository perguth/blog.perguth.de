---
pubDatetime: 2025-02-26
title: '[de] Die Macht von rel="noopener noreferrer": Sicherheit und Datenschutz
  im Web'
ogImage: //uploads/mr-anonymous--in-style.jpg
featured: false
draft: false
tags:
  - Web
  - Sicherheit
  - Tips
description: Entdecke, warum rel="noopener noreferrer" ein Muss für sicheres
  Webdesign ist – ein kleiner Code, der große Wirkung zeigt!
lang: de
---
> Ein Muss für Sicherheit und Performance

In der Welt des Webdesigns und der Entwicklung gibt es Details, die auf den ersten Blick klein erscheinen, aber eine enorme Wirkung haben können. Ein solches Detail ist der HTML-Attributwert rel="noopener noreferrer". Wenn du Links auf deiner Website oder in deinen LinkedIn-Artikeln einbaust, solltest du diesen Begriff kennen – und ihn auch bewusst einsetzen. In diesem Artikel erkläre ich, warum diese zwei Schlüsselwörter so wichtig sind, wie sie funktionieren und warum sie für dich als Content-Ersteller oder Webentwickler relevant sind.

* * *

### Was bedeutet rel="noopener noreferrer"?

Das rel-Attribut definiert die Beziehung zwischen dem aktuellen Dokument und der verlinkten Ressource. Es wird typischerweise bei \-Tags verwendet, also Links, die auf eine andere Seite führen. Die Werte noopener und noreferrer können einzeln oder kombiniert genutzt werden, haben aber unterschiedliche Funktionen:

1.  **noopener** Dieser Wert verhindert, dass eine neu geöffnete Seite (z. B. in einem neuen Tab) über das JavaScript-Objekt window.opener auf die ursprüngliche Seite zugreifen kann. Ohne noopener könnte eine verlinkte Seite theoretisch Skripte ausführen, die deine Seite manipulieren – ein Sicherheitsrisiko, das du vermeiden willst.
    
2.  **noreferrer** Mit diesem Wert wird verhindert, dass der Browser beim Klick auf den Link den sogenannten "Referer Header" mitsendet. Das bedeutet, dass die Zielseite nicht erfährt, von welcher Seite der Nutzer kommt. Dies schützt die Privatsphäre deiner Besucher und ist besonders bei sensiblen Inhalten wichtig.
    

Wenn du beide Werte kombinierst – rel="noopener noreferrer" – erhältst du maximale Sicherheit und Datenschutz.

* * *

### Warum ist das wichtig?

1\. **Sicherheit vor Tabnabbing**

Tabnabbing ist eine Angriffstechnik, bei der eine verlinkte Seite über window.opener die ursprüngliche Seite umleitet oder manipuliert – etwa auf Phishing-Seiten. Besonders bei Links mit target="\_blank" (die in einem neuen Tab öffnen) ist das ein Risiko. Mit noopener schließt du diese Sicherheitslücke.

_Beispiel:_

```
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Klick hier</a>
```

Ohne "noopener" könnte die Seite "[example.com](http://example.com)" deine Seite übernehmen. Mit "noopener" passiert das nicht.

2\. **Datenschutz für deine Nutzer**

Der Referer Header enthält oft sensible Informationen, wie die genaue URL, von der ein Nutzer kommt. Wenn du noreferrer weglässt, könnten Dritte diese Daten sammeln – etwa für Tracking oder Werbung. Gerade in Zeiten von DSGVO und wachsendem Datenschutzbewusstsein ist das ein No-Go.

3\. **Performance und Professionalität**

Moderne Browser wie Chrome oder Firefox behandeln Links mit target="\_blank" seit einigen Versionen automatisch mit noopener, aber nicht alle Nutzer verwenden die neuesten Versionen. Indem du rel="noopener noreferrer" explizit setzt, zeigst du nicht nur technisches Know-how, sondern sicherst auch ältere Browser ab.

* * *

### Wann solltest du es nutzen?

*   **Immer bei externen Links:** Wenn du auf eine Seite verlinkst, die du nicht kontrollierst, ist rel="noopener noreferrer" ein Muss.
    
*   **Bei target="\_blank":** Sobald ein Link in einem neuen Tab öffnet, füge es hinzu, um Sicherheitslücken zu vermeiden.
    
*   **In Artikeln oder Posts:** Auch auf Plattformen wie LinkedIn, wo du HTML nicht direkt bearbeiten kannst, ist es sinnvoll, Leser über diese Best Practice aufzuklären – etwa wenn du sie zu einer externen Ressource führst.
    

* * *

### Fazit: Kleine Änderung, große Wirkung

rel="noopener noreferrer" ist ein winziger Zusatz im Code, der jedoch Sicherheit, Datenschutz und Professionalität auf ein neues Level hebt. Als Webentwickler, Content-Creator oder einfach als jemand, der Links teilt (z. B. auf meinem Kanal [Per Guth](https://www.linkedin.com/in/perguth/)), solltest du dieses Wissen nicht nur verstehen, sondern auch anwenden. Es zeigt, dass du die Details im Blick hast – und genau das unterscheidet gute von großartigen digitalen Inhalten.

* * *

Hast du schon einmal darüber nachgedacht, wie sicher deine Links sind? Lass es mich in den Kommentaren wissen – ich freue mich auf den Austausch!