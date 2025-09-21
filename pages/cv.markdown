---
layout: page
title: "CV"
description: "Tianqi studies AI hype and communication norms."
---

<div class="cv-page" markdown="1">
{% if site.cv_available %}

[Download CV]({{ site.cv_pdf | relative_url }})

<div class="cv-container desktop-only">
  <iframe src="{{ site.cv_pdf | relative_url }}#page=1&zoom=page-fit" title="Tianqi Kou CV" loading="lazy"></iframe>
  </div>

<div class="cv-container mobile-only">
  <iframe src="{{ site.cv_pdf | absolute_url | uri_escape }}#page=1&zoom=page-fit" title="Tianqi Kou CV (mobile)" loading="lazy"></iframe>
</div>

{% else %}

content coming soon

{% endif %}
</div>


