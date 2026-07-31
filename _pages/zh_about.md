---
layout: about
title: 天顺谷
permalink: /zh/
lang: zh
translation_url: /
subtitle: 水文气候学博士研究生 · 中国地质大学（武汉）

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>博士研究生</p>
    <p>中国 · 武汉</p>
    <p>
      <a href="mailto:gutsgeo@cug.edu.cn">
        gutsgeo@cug.edu.cn
      </a>
    </p>

social: false

announcements:
  enabled: false

latest_posts:
  enabled: false
---

我现为中国地质大学（武汉）水文气候学博士研究生，主要研究城市化的水文—气候效应，重点关注极端降水演变、城市气候韧性与数据驱动建模。

我的研究综合大尺度气候数据集、时空分析与机器学习方法，旨在深入理解城市化如何重塑降水过程及其相关水文风险。

---

## 研究兴趣

- 城市化的水文气候效应
- 城市气候韧性与洪涝风险
- 基于机器学习的检测与归因

---

## 学术主页

<p style="line-height: 2;">
  <a href="https://scholar.google.com/citations?user=_F0Jv-kAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
    <i class="ai ai-google-scholar" style="margin-right:6px;"></i> Google Scholar
  </a><br>

  <a href="https://orcid.org/0000-0001-6359-8028" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-orcid" style="margin-right:6px;"></i> ORCID
  </a><br>

  <a href="https://www.researchgate.net/profile/Tianshun-Gu" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-researchgate" style="margin-right:6px;"></i> ResearchGate
  </a><br>

  <a href="https://github.com/TianshunGu" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-github" style="margin-right:6px;"></i> GitHub
  </a>
</p>

---

## 科学传播

我还运营城市地理科普平台 _Urban Geography Illumination_（城市地理之光），分享城市地理领域最新的研究进展。

---

## 最新动态

- **2026 年 7 月 18 日**  
  🎤 应窦寅博士邀请，我参加了 City+Talk 系列第 47 期“暴雨强度的时空分布在城市地区比农村地区更陡峭”，介绍了城市化重塑极端降雨格局的最新研究，并讨论了其对城市洪涝风险、预警与应急响应的意义。  
  [👉 阅读全文（微信公众号）](https://mp.weixin.qq.com/s/vEkOr72tX0iG4-JP3g8EOw)

- **2026 年 7 月 13 日**  
  📄 我们发表于 _Cities_ 的论文 _Spatial Heterogeneity of Urban Resilience: Quantifying Key Determinants by a Spatial Machine Learning Model Embedded in the Density–Structure–Function Framework_ 同时入选  
  <span style="color:#6f42c1; font-weight:700;">ESI 热点论文（前 0.1%）和 ESI 高被引论文（前 1%）</span>。  
  [👉 了解更多（微信公众号）](https://mp.weixin.qq.com/s/GDqKBbE4HcLybycrPvNM2g)

- **2026 年 7 月 5 日**  
  🎤 我参加了中国科协党校（科技人才学院）组织的 2026 年青年科技人才“领航计划”国情研修活动第 113 期。

<p style="margin-top:0.5rem;">
  <a href="/zh/news/">查看全部动态 →</a>
</p>

---

## 精选论文

{% bibliography --query @*[homepage_selected=true] %}

<p style="margin-top:0.5rem;">
  <a href="/zh/publications/">查看全部出版物 →</a>
</p>

---

## 全球访客

<div style="margin-top: 1.25rem;">
  <a href="https://info.flagcounter.com/jlT1" target="_blank" rel="noopener noreferrer" style="display:block;">
    <img
      src="https://s01.flagcounter.com/map/jlT1/size_l/txt_000000/border_CCCCCC/pageviews_0/viewers_0/flags_0/"
      alt="全球访客地图"
      style="width:100%; height:auto; border-radius:14px; box-shadow:0 4px 14px rgba(0,0,0,0.08);"
    >
  </a>
</div>

<div style="margin-top: 1.8rem; text-align: center;">
  <button id="like-button">喜欢这个页面</button>
  <div id="like-message" style="margin-top:0.65rem; display:none;">感谢关注，祝科研顺利、成果丰硕。</div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("like-button");
    const message = document.getElementById("like-message");

    if (button && message) {
      button.addEventListener("click", function () {
        button.classList.add("is-appreciated");
        button.innerHTML = "已喜欢";
        message.style.display = "block";
      });
    }
  });
</script>
