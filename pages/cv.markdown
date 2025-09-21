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
  <canvas id="cv-canvas" aria-label="CV preview page 1"></canvas>
</div>

<script src="{{ "/assets/js/pdfjs/pdf.min.js" | relative_url }}"></script>
<script>
  (function() {
    const pdfUrl = '{{ site.cv_pdf | absolute_url | uri_escape }}';
    const canvas = document.getElementById('cv-canvas');
    if (!canvas || !window['pdfjsLib']) return;

    try {
      pdfjsLib.GlobalWorkerOptions.workerSrc = '{{ "/assets/js/pdfjs/pdf.worker.min.js" | relative_url }}';
    } catch (e) { /* no-op if pdfjsLib missing */ }

    const renderPage = async () => {
      try {
        const containerWidth = canvas.parentElement.clientWidth;
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const scale = containerWidth / viewport.width;
        const scaled = page.getViewport({ scale });
        const context = canvas.getContext('2d');
        canvas.width = Math.floor(scaled.width);
        canvas.height = Math.floor(scaled.height);
        await page.render({ canvasContext: context, viewport: scaled }).promise;
      } catch (e) {
        console.error('Failed to render CV preview', e);
      }
    };

    // Render once ready and on resize
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      renderPage();
    } else {
      document.addEventListener('DOMContentLoaded', renderPage);
    }
    window.addEventListener('resize', () => { requestAnimationFrame(renderPage); });
  })();
</script>

{% else %}

content coming soon

{% endif %}
</div>


