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

<!-- Load PDF.js from CDN for mobile canvas rendering; if it fails we'll fall back to an iframe -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js" integrity="sha512-4VvZg0I2jm7pnFKbH9ZsNGyYmpm0Xr3m3u3lCPZ3H1b9o6z1CNPuX6sF1ahKN6M3WJrQrsXO1HQa7h7oZ7q3/Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
  (function() {
    const pdfUrl = '{{ site.cv_pdf | absolute_url | uri_escape }}';
    const canvas = document.getElementById('cv-canvas');
    const getAvailableHeight = () => {
      const container = canvas ? canvas.parentElement : null;
      if (!container) return window.innerHeight;
      const rect = container.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight || 600;
      // leave a small margin below the preview
      return Math.max(200, viewportH - rect.top - 16);
    };

    const mountFallbackIframe = () => {
      if (!canvas) return;
      const container = canvas.parentElement;
      if (!container) return;
      container.innerHTML = '';
      const iframe = document.createElement('iframe');
      iframe.src = pdfUrl + '#page=1&zoom=page-fit';
      iframe.title = 'Tianqi Kou CV';
      iframe.loading = 'lazy';
      iframe.style.width = '100%';
      iframe.style.height = getAvailableHeight() + 'px';
      iframe.style.border = 'none';
      container.appendChild(iframe);
    };

    if (!canvas) return;
    if (!window['pdfjsLib']) { mountFallbackIframe(); return; }

    try {
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
    } catch (e) { /* no-op if pdfjsLib missing */ }

    const renderPage = async () => {
      try {
        const containerEl = canvas.parentElement;
        const containerWidth = containerEl.clientWidth;
        const maxHeight = getAvailableHeight();
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        // Fit-to-screen: respect both width and available height
        const scaleW = containerWidth / viewport.width;
        const scaleH = maxHeight / viewport.height;
        const scale = Math.min(scaleW, scaleH);
        const scaled = page.getViewport({ scale });
        const context = canvas.getContext('2d');
        canvas.width = Math.floor(scaled.width);
        canvas.height = Math.floor(scaled.height);
        // Ensure container height matches the rendered page to avoid internal scrollbars
        containerEl.style.height = Math.floor(scaled.height) + 'px';
        await page.render({ canvasContext: context, viewport: scaled }).promise;
      } catch (e) {
        console.error('Failed to render CV preview', e);
        // Fallback to iframe if rendering fails for any reason
        mountFallbackIframe();
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


