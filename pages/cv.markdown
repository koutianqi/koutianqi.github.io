---
layout: page
title: "CV"
description: "Tianqi studies AI hype and communication norms."
---

<div class="cv-page" markdown="1">
{% if site.cv_available %}

[Download CV [PDF]]({{ site.cv_pdf | relative_url }})

<div class="cv-container">
  <object data="{{ site.cv_pdf | relative_url }}" type="application/pdf" width="100%" height="100%">
    Your browser can't display embedded PDFs. [Download the PDF]({{ site.cv_pdf | relative_url }}).
  </object>
</div>

{% else %}

content coming soon

{% endif %}
</div>


