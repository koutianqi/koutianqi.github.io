---
layout: page
title: "Research"
---
<div class="research-page" markdown="1">
### PAPERS & SELECTED WORK-IN-PROGRESS
<p class="research-intro">Below are my past and on-going work as well as existing puzzles. Note: In computer and information science, papers published in major conference proceedings are double-anonymously peer reviewed and recognized as equivalent research contributions to journal articles. For multi-authored work, * indicates lead author.</p>

### I. Machine Learning Research Communication
_Machine Learning research are deeply tied to downstream impacts, yet their “foundational” research is often hard to link directly to harms. This raises the question of how they should balance producing general knowledge with taking responsibility for the social effects their research enables. I address this by developing normative arguments and conceptual tools for accountability through research communication._

<div class="pubs">
{% include paper.html
  title="Dead Zone of Accountability"
  title_url="https://www.arxiv.org/pdf/2508.08739"
  authors="Tianqi Kou*, Dana Calacci, Cindy Lin"
  venue="<em>Proceedings of the AAAI/ACM Conference on Artificial Intelligence Ethics and Society (AIES)</em>, 2025"
  tldr="[TL;DR] This paper introduces the concepts of the <em>claim–reality gap</em> and the <em>dead zone of accountability</em> to diagnose why social claims in ML research resist scrutiny, and proposes strategies to articulate and defend such claims as a way of creating accountability upstream, before harms manifest."
  abstract="Many Machine Learning research studies use language that describes potential social benefits or technical affordances of new methods and technologies. Such language, which we call “social claims”, can help garner substantial resources and influence for those involved in ML research and technology production. However, there exists a gap between social claims and reality (the claim–reality gap): ML methods often fail to deliver the claimed functionality or social impacts. This paper investigates the claim–reality gap and makes a normative argument for developing accountability mechanisms for it. In making the argument, we make three contributions. First, we show why the symptom—absence of social claim accountability—is problematic. Second, we coin dead zone of accountability—a lens that scholars and practitioners can use to identify opportunities for new forms of accountability. We apply this lens to the claim–reality gap and provide a diagnosis by identifying cognitive and structural resistances to accountability in the claim–reality gap. Finally, we offer a prescription—two potential collaborative research agendas that can help create the conditions for social claim accountability."
%}

{% include paper.html
  title="How Claim Replicability Can Help Bridge the Responsibility Gap"
  title_url="https://dl.acm.org/doi/10.1145/3630106.3658951"
  authors="Tianqi Kou"
  venue="<em>Proceedings of the ACM Conference on Fairness, Accountability, and Transparency (FAccT)</em>, 2024"
  tldr="[TL;DR] ML scientists should be accountable not just for replicating model performance but for making replicable claims about their research. Shifting the focus to claim replicability embeds accountability into research communication, helping bridge the responsibility gap between scientists and downstream impacts."
  abstract="Two goals—improving replicability and accountability of Machine Learning research respectively—have accrued much attention from the AI ethics and the Machine Learning community. Despite sharing the measures of improving transparency, the two goals are discussed in different registers: replicability registers with scientific reasoning whereas accountability registers with ethical reasoning. Given the existing challenge of the responsibility gap—holding Machine Learning scientists accountable for Machine Learning harms due to them being far from sites of application—this paper posits that reconceptualizing replicability can help bridge the gap. Through a shift from model performance replicability to claim replicability, Machine Learning scientists can be held accountable for producing non-replicable claims that are prone to eliciting harm due to misuse and misinterpretation. In this paper, I make the following contributions. First, I define and distinguish two forms of replicability for ML research that can aid constructive conversations around replicability. Second, I formulate an argument for claim-replicability’s advantage over model performance replicability in justifying assigning accountability to Machine Learning scientists for producing non-replicable claims and show how it enacts a sense of responsibility that is actionable. In addition, I characterize the implementation of claim replicability as more of a social project than a technical one by discussing its competing epistemological principles and practical implications on Circulating Reference, Interpretative Labor, and research communication."
%}
</div>

### II. Technology Capabilities Communication
_From early rule-based algorithms to today’s large-scale architectures, Machine Learning has fueled AI tools across diverse domains. Yet premature adoptions have produced both cultural harms, like hype, and concrete harms, like inequity in policing and exploitation in marketing. I study how harms emerge from stakeholder communication about technological capabilities in concrete contexts—such as AI tools in policing—and develop strategies for mitigating them through responsible communication._


<div class="pubs">
{% include paper.html
  title="What is the Hype: A Relational Conception of Hype in AI-based Tools in Policing Context"
  authors="Tianqi Kou*, Dana Calacci, Nasser Eledroos, David Gray Widder, Dasha Pruss"
  venue="Work in Progress; extended abstract accepted to Hype Studies Conference"
  tldr="[TL;DR] The paper develops a conception of hype that encompasses a wide range of communities around AI-based policing tools and identifies communicative practices to curtail harmful hype."
  abstract="[working abstract] This study is motivated by two concerns. First, while discussions of AI hype abound across academia, industry, and civic research community, definitions of hype remain fragmented. Second, the deployment of Machine Learning–based tools in policing has drawn critical attention for issues such as privacy, inequity, lack of accountability. Through document analysis of communication artifacts across multiple communities for four policing tools, this study makes three contributions. First, it offers a novel definition of hype that foregrounds the relational dynamics of technological discourse. Second, it demonstrates how this relational conception of hype provides an analytic frame for diagnosing shortcomings in the communicative dimensions of ML-based policing tools. Finally, it identifies three problematic discursive practices in the communication of AI-based policing tools and suggests how rectifying them can advance responsible communication."
%}
</div>

### III. Enforcing Responsible Communication
_A core issue in the scholarship on socially responsible computing is translating conceptual understandings & tools into practical solutions. A key strand of my future research is translating my theorization into practical tools, policies, and legal frameworks._


<div class="pubs">
  {% include paper.html
  title="Implementing Social Claim Accountability in Machine Learning: Challenges and Opportunities"
  authors="Tianqi Kou*, Dana Calacci"
  venue="Work in Progress"
  tldr="[TL;DR] This paper explores ways to incorporate social claims into machine learning core methodology."
  abstract="[working abstract] In machine learning (ML) research, broad social claims about potential societal benefits or harms are often made without clear articulation of scope, supporting evidence, or context, limiting both transparency and foresight for application harms. This paper proposes a path toward new forms of ML accountability by focusing on the concept of social claim replicability: the ability to systematically document, organize, and evaluate the evidence supporting social claims. First, we developed a social claim typology with a list of commonly cited supporting evidence to guide the articulation and substantiation of claims. Second, we proposed evidence diagram for systematizing supporting evidence, thereby improving clarity and rigor of research communication. By integrating these approaches, we aim to create conditions for establishing social claim accountability in ML research."
%}
</div>

</div>
