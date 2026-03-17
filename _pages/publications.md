---
layout: page
title: Publications
permalink: /publications/
nav: true
nav_order: 4
description: Selected publications and full publication list.
---

## Selected Publications

{% bibliography --query @*[selected=true] %}

---

## Full Publications

{% bibliography --query @*[selected!=true] %}
