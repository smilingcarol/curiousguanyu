const ARTICLES = [
  {
    id: "me-and-ai-01",
    file: "articles/me-and-ai-01-how-i-got-here.html",
    series: "Me and AI",
    seriesSlug: "me-and-ai",
    tag: "Origin",
    title: "How I got here",
    preview: "From language and literature to applied linguistics to human-robot interaction: the thread that connects it all.",
    date: "Apr 2026",
    readingTime: "3 min read"
  },
  {
    id: "me-and-ai-02",
    file: "articles/me-and-ai-02-hri-research.html",
    series: "Me and AI",
    seriesSlug: "me-and-ai",
    tag: "Research",
    title: "Where my research about human-robot interaction started",
    preview: "Before I became a researcher in HRI, I was a confused user. That experience became the central question.",
    date: "Apr 2026",
    readingTime: "5 min read"
  },
  {
    id: "me-and-ai-03",
    file: "articles/me-and-ai-03-daily-life.html",
    series: "Me and AI",
    seriesSlug: "me-and-ai",
    tag: "Practice",
    title: "Using AI in daily life",
    preview: "A cognitive mirror, a prism, a co-creator: it depends on what I need.",
    date: "Apr 2026",
    readingTime: "8 min read"
  },
  {
    id: "me-and-ai-04",
    file: "articles/me-and-ai-04-learning-designer.html",
    series: "Me and AI",
    seriesSlug: "me-and-ai",
    tag: "Observation",
    title: "Using AI as a learning designer",
    preview: "AI is changing what's possible in education. But the hardest parts of learning have always been human.",
    date: "Apr 2026",
    readingTime: "6 min read"
  }
];

// 按系列分组
function getArticlesBySeries() {
  const series = {};
  ARTICLES.forEach(article => {
    if (!series[article.series]) {
      series[article.series] = [];
    }
    series[article.series].push(article);
  });
  return series;
}

// 生成文章列表HTML（用于index.html和writing.html）
function renderArticleGrid(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const articles = limit ? ARTICLES.slice(0, limit) : ARTICLES;

  container.innerHTML = articles.map(article => `
    <a href="${article.file}" class="writing-item">
      <div>
        <div class="writing-tag">${article.tag}</div>
        <div class="writing-title">${article.title}</div>
        <div class="writing-preview">${article.preview}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.35rem">
        <div class="writing-date">${article.date}</div>
        <div class="writing-date">${article.readingTime}</div>
        <div class="writing-arrow">→</div>
      </div>
    </a>
  `).join('');
}

// 生成writing页面的系列分组HTML
function renderWritingPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const seriesGroups = getArticlesBySeries();

  container.innerHTML = Object.entries(seriesGroups).map(([seriesName, articles]) => `
    <div class="writing-series">
      <div class="series-label">Series · ${seriesName} · ${articles[0].date}</div>
      <div class="writing-grid">
        ${articles.map(article => `
          <a href="${article.file}" class="writing-item">
            <div>
              <div class="writing-tag">${article.tag}</div>
              <div class="writing-title">${article.title}</div>
              <div class="writing-preview">${article.preview}</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.35rem">
              <div class="writing-date">${article.date}</div>
              <div class="writing-date">${article.readingTime}</div>
              <div class="writing-arrow">→</div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
