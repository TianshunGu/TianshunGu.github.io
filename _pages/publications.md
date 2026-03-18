---
layout: page
title: Publications
permalink: /publications/
nav: true
nav_order: 2
description: Selected publications and full publication list.
---

## Selected Publications

A selection of representative publications.

{% bibliography --query @*[selected=true] %}

---

## All Publications

Complete list of publications.  
(*See Selected Publications above for highlighted works.*)

{% bibliography --query @*[selected!=true] %}
