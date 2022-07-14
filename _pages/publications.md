---
layout: archive
#title: "Research"#
permalink: /publications/
author_profile: true
---

Funded Research
-----
* (ongoing) Epistemology of machine learning

* (ongoing)Exploring librarians' role in developing children's privacy literacy through interviews and curricula analysis
  * Supervisor: Dr. Priya Kumar
  * Funded by the College of IST

* Developing a variant of Surrogate Scoring Rule using Hierarchical Mutual Information to score participants judgments of study reproducibility without ground truth
  * Supervisors: Dr. Sarah Rajtmajer and Dr. David Pennock(Rutgers)
  * Funded by DARPA ([link](https://www.ist.psu.edu/research/projects/synthetic-prediction-markets))

* Detecting self-disclosure dynamics on twitter during COVID-19 pandemic using network analysis
  * Supervisors: Dr. Sarah Rajtmajer and Dr. Anna Squicciarini
  * Funded by NSF ([link](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2027757&HistoricalAwards=false))

* Developing a semi-supervised variant of SVM using privileged informtion
  * Supervisor: Dr. Yijun Zhao
  * Funded by Graduate School at Fordham University


{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
