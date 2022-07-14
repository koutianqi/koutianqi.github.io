---
layout: archive
title: "Research"
permalink: /publications/
author_profile: true
---

Research Experience
-----
*Detecting self-disclosure dynamics on twitter during COVID-19 pandemic using network analysis
*Supervised by
*Funded by 

======
* 2020 Fall - 2021 Spring: Research Assistant
  * Pennsylvania State University
  * Supervisors: Dr. Sarah Rajtmajer and Dr. Anna Squicciarini

* 2019: Data Scientist
  * Apteo

* 2017 Fall - 2018 Winter: Research Assistant
  * Fordham University
  * Supervisor: Dr. Yijun Zhao


{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
