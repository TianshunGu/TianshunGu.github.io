---
layout: page
title: 出版物
permalink: /zh/publications/
lang: zh
translation_url: /publications/
description: 代表性论文与完整出版物列表
---

## 精选论文

以下为部分代表性研究成果。

{% bibliography --query @*[selected=true] %}

---

## 全部出版物

完整出版物列表（重点成果已在上方单独展示）。

{% bibliography --query @*[selected!=true] %}
