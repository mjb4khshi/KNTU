import base64

font_b64 = open('KNTU-Notes/tools/card-generator/font_base64.txt', 'r', encoding='utf-8').read().strip()
logo_b64 = open('KNTU-Notes/tools/card-generator/logo_base64.txt', 'r', encoding='utf-8').read().strip()

avatar_b64 = ''
try:
    with open('card-studio/avatar.png', 'rb') as fp:
        avatar_b64 = base64.b64encode(fp.read()).decode('utf-8')
except Exception:
    pass

html_tpl = f"""<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    @font-face {{
      font-family: 'Arad';
      src: url('data:font/woff2;base64,{font_b64}') format('woff2');
      font-weight: 100 900;
    }}

    :root {{
      --accent: #00a896;
      --accent-glow: rgba(0, 168, 150, 0.25);
    }}

    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    body {{
      font-family: 'Arad', system-ui, sans-serif;
      font-variation-settings: 'DSTY' 2;
      width: 1200px;
      height: 630px;
      overflow: hidden;
      background: #fafcff;
    }}

    .card-graph-canvas {{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      opacity: 0.65;
      mask-image: radial-gradient(circle at 25% 45%, black 45%, transparent 80%);
      -webkit-mask-image: radial-gradient(circle at 25% 45%, black 45%, transparent 80%);
    }}

    .social-card {{
      width: 1200px;
      height: 630px;
      background: #fafcff;
      border: 1px solid #e2e8f0;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 60px 68px;
    }}

    .bg-gradient-glow {{
      display: block;
      position: absolute;
      top: -160px;
      left: -160px;
      width: 700px;
      height: 700px;
      background: radial-gradient(circle, var(--accent-glow) 0%, rgba(255, 255, 255, 0) 70%);
      pointer-events: none;
      filter: blur(60px);
      opacity: 0.85;
    }}

    .bg-grid {{
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
      background-size: 44px 44px;
      pointer-events: none;
      mask-image: radial-gradient(circle at 60% 40%, black 50%, transparent 90%);
    }}

    .card-top {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 2;
    }}

    .brand-wrap {{
      display: flex;
      align-items: center;
      gap: 16px;
    }}

    .brand-logo {{
      width: 54px;
      height: 54px;
      object-fit: contain;
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.06));
    }}

    .brand-info {{
      display: flex;
      flex-direction: column;
    }}

    .brand-title {{
      font-size: 1.35rem;
      font-weight: 700;
      color: #0f172a;
    }}

    .brand-subtitle {{
      font-size: 0.92rem;
      color: #64748b;
      font-weight: 500;
    }}

    .badge-category {{
      background: var(--accent);
      border: none;
      color: #ffffff;
      box-shadow: 0 4px 16px -2px var(--accent-glow), 0 2px 6px rgba(0, 0, 0, 0.08);
      padding: 9px 24px;
      font-size: 1.05rem;
      font-weight: 700;
      letter-spacing: -0.2px;
      border-radius: 12px;
    }}

    .card-middle {{
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-top: 10px;
      margin-bottom: 10px;
    }}

    .card-title {{
      font-size: 3.6rem;
      font-weight: 900;
      line-height: 1.22;
      color: #0f172a;
      letter-spacing: -0.8px;
      max-width: 1060px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }}

    .h2-list {{
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding-right: 18px;
      border-right: 3px solid var(--accent);
      max-width: 980px;
    }}

    .h2-item {{
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.35rem;
      font-weight: 500;
      color: #334155;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }}

    .h2-bullet {{
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--accent);
      opacity: 0.8;
      flex-shrink: 0;
    }}

    .card-bottom {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #e2e8f0;
      padding-top: 22px;
      z-index: 2;
    }}

    .author-meta {{
      display: flex;
      align-items: center;
      gap: 14px;
    }}

    .author-avatar {{
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--accent), #0284c7);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: #fff;
      font-size: 1.1rem;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }}

    .author-avatar img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }}

    .author-text {{
      display: flex;
      flex-direction: column;
    }}

    .author-name {{
      font-size: 1.05rem;
      font-weight: 600;
      color: #0f172a;
    }}

    .author-role {{
      font-size: 0.85rem;
      color: #64748b;
    }}

    .card-watermark {{
      font-size: 1.05rem;
      font-weight: 600;
      color: #94a3b8;
      letter-spacing: 0.5px;
      direction: ltr;
    }}
  </style>
</head>
<body>
  <div class="social-card" id="socialCard">
    <canvas class="card-graph-canvas" id="graphCanvas" width="1200" height="630"></canvas>
    <div class="bg-gradient-glow" id="glowEl"></div>
    <div class="bg-grid"></div>

    <div class="card-top">
      <div class="brand-wrap">
        <img src="data:image/png;base64,{logo_b64}" alt="Logo" class="brand-logo">
        <div class="brand-info">
          <span class="brand-title">MJ'S KNTU Notes</span>
          <span class="brand-subtitle">یادداشت‌های آزاد دانشگاه صنعتی خواجه نصیر</span>
        </div>
      </div>
      <div class="badge-category" id="cardCategory"></div>
    </div>

    <div class="card-middle">
      <h1 class="card-title" id="cardTitle"></h1>
      <div class="h2-list" id="h2Container">
        <div class="h2-item" id="h2Item1"><span class="h2-bullet"></span><span id="h2Text1"></span></div>
        <div class="h2-item" id="h2Item2"><span class="h2-bullet"></span><span id="h2Text2"></span></div>
        <div class="h2-item" id="h2Item3"><span class="h2-bullet"></span><span id="h2Text3"></span></div>
      </div>
    </div>

    <div class="card-bottom">
      <div class="author-meta">
        <div class="author-avatar">
          <img src="data:image/png;base64,{avatar_b64}" alt="MJ">
        </div>
        <div class="author-text">
          <span class="author-name">MJBakhshi</span>
          <span class="author-role">K. N. Toosi University of Technology</span>
        </div>
      </div>
      <div class="card-watermark">mjb4khshi.github.io/KNTU</div>
    </div>
  </div>

  <script>
    window.applyCardData = function(note) {{
      document.getElementById('cardTitle').innerText = note.title;
      document.getElementById('cardCategory').innerText = note.category;

      const sub1 = (note.subheadings && note.subheadings[0]) || '';
      const sub2 = (note.subheadings && note.subheadings[1]) || '';
      const sub3 = (note.subheadings && note.subheadings[2]) || '';

      const h1El = document.getElementById('h2Item1');
      const h2El = document.getElementById('h2Item2');
      const h3El = document.getElementById('h2Item3');

      document.getElementById('h2Text1').innerText = sub1;
      h1El.style.display = sub1 ? 'flex' : 'none';

      document.getElementById('h2Text2').innerText = sub2;
      h2El.style.display = sub2 ? 'flex' : 'none';

      document.getElementById('h2Text3').innerText = sub3;
      h3El.style.display = sub3 ? 'flex' : 'none';

      document.documentElement.style.setProperty('--accent', note.color);
      document.documentElement.style.setProperty('--accent-glow', note.glow);

      renderCanvasGraph(note);
    }};

    function renderCanvasGraph(note) {{
      const canvas = document.getElementById('graphCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 1200, 630);

      const cx = 330;
      const cy = 300;
      const accent = note.color || '#00a896';

      let headings = [...(note.allH2 || [])];
      if (note.allH3 && note.allH3.length > 0) {{
        headings.push(...note.allH3.slice(0, 3));
      }}
      if (headings.length === 0) {{
        headings = ['مفاهیم پایه', 'تعاریف اصلی', 'مثال‌ها و کاربردها'];
      }}

      const nodes = [{{ x: cx, y: cy, r: 16, isCenter: true, label: note.title }}];
      const total = headings.length;
      headings.forEach((hTitle, i) => {{
        const angle = (i / total) * Math.PI * 2 + 0.35;
        const dist = 145 + (i % 2) * 50;
        nodes.push({{
          x: cx + Math.cos(angle) * dist,
          y: cy + Math.sin(angle) * dist,
          r: 7,
          isCenter: false,
          label: hTitle
        }});
      }});

      const links = [];
      for (let i = 1; i < nodes.length; i++) {{
        links.push([0, i]);
        if (i > 1 && i % 2 === 0) {{
          links.push([i, i - 1]);
        }}
      }}

      links.forEach(([srcIdx, tgtIdx]) => {{
        const p1 = nodes[srcIdx];
        const p2 = nodes[tgtIdx];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = p1.isCenter || p2.isCenter ? accent : '#cbd5e1';
        ctx.lineWidth = p1.isCenter || p2.isCenter ? 2.5 : 1.2;
        ctx.globalAlpha = p1.isCenter || p2.isCenter ? 0.4 : 0.22;
        ctx.stroke();
      }});

      nodes.forEach(n => {{
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        if (n.isCenter) {{
          ctx.fillStyle = accent;
          ctx.globalAlpha = 0.95;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 7, 0, Math.PI * 2);
          ctx.strokeStyle = accent;
          ctx.lineWidth = 2.5;
          ctx.globalAlpha = 0.45;
          ctx.stroke();
        }} else {{
          ctx.fillStyle = '#64748b';
          ctx.globalAlpha = 0.85;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.stroke();
        }}

        if (n.label) {{
          const text = n.label.length > 28 ? n.label.slice(0, 26) + '...' : n.label;
          const fontStr = n.isCenter ? '700 13px "Arad", sans-serif' : '600 12px "Arad", sans-serif';
          ctx.font = fontStr;
          const textWidth = ctx.measureText(text).width;
          const padX = 10;
          const padY = 4;
          const boxW = textWidth + padX * 2;
          const boxH = 24;
          const boxY = n.y + (n.isCenter ? n.r + 14 : n.r + 10);

          ctx.beginPath();
          ctx.roundRect(n.x - boxW / 2, boxY - boxH / 2, boxW, boxH, 6);
          ctx.fillStyle = n.isCenter ? accent : '#ffffff';
          ctx.globalAlpha = n.isCenter ? 0.95 : 0.94;
          ctx.fill();
          if (!n.isCenter) {{
            ctx.strokeStyle = '#e2e8f0';
            ctx.lineWidth = 1;
            ctx.stroke();
          }}

          ctx.fillStyle = n.isCenter ? '#ffffff' : '#1e293b';
          ctx.globalAlpha = 1.0;
          ctx.font = fontStr;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, n.x, boxY + 1);
        }}
      }});
      ctx.globalAlpha = 1.0;
    }}
  </script>
</body>
</html>
"""

with open('KNTU-Notes/tools/card-generator/card-template.html', 'w', encoding='utf-8') as f:
    f.write(html_tpl)

print('Card template created successfully!')
