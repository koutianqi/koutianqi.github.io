---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---


-----
Kou, Tianqi, From Model Peformance to Claim: How a Change of Focus in Machine Learning Replicability Can Help Bridge the Responsibility Gap. ACM Conference on Fairness, Accountability, and Transparency (FAccT '24), Pre-print coming soon.

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
