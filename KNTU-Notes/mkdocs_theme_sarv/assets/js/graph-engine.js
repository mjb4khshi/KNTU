/* =========================================================
   🌿 Sarv UI Obsidian-Grade Interactive Knowledge Graph
   Luminous Nodes, Neon Links, Dimming Hover, Realtime Physics
   Designed & Built with care by MJ (v0.3.1)
   ========================================================= */

(function () {
  let graphData = null;

  async function fetchGraphData() {
    if (graphData) return graphData;
    try {
      const metaUrl = document.querySelector('meta[name="sarv-graph-url"]')?.getAttribute('content');
      const siteRoot = document.querySelector('meta[name="sarv-site-root"]')?.getAttribute('content') || './';
      const baseUrl = metaUrl || (siteRoot.replace(/\/+$/, '') + '/sarv-graph.json');
      const url = baseUrl.includes('?') ? baseUrl : baseUrl + '?t=' + Date.now();
      const res = await fetch(url, { cache: 'no-cache' });
      if (res.ok) {
        graphData = await res.json();
        return graphData;
      }
    } catch (e) {
      console.warn('[Sarv Graph] Could not load sarv-graph.json:', e);
    }
    return null;
  }

  function getSiteRoot() {
    const siteRoot = document.querySelector('meta[name="sarv-site-root"]')?.getAttribute('content');
    if (siteRoot) return siteRoot;
    const metaUrl = document.querySelector('meta[name="sarv-graph-url"]')?.getAttribute('content');
    if (metaUrl) return metaUrl.replace(/sarv-graph\.json$/, '');
    return './';
  }

  class KnowledgeGraph {
    constructor(container, nodes, links, options = {}) {
      this.container = container;
      this.rawNodes = nodes || [];
      this.rawLinks = links || [];
      this.options = Object.assign({
        isLocal: false,
        centerNodeId: null,
        width: container.clientWidth || 400,
        height: container.clientHeight || 260,
      }, options);

      this.nodes = JSON.parse(JSON.stringify(this.rawNodes));
      this.links = JSON.parse(JSON.stringify(this.rawLinks));

      this.container.innerHTML = '';
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.container.appendChild(this.canvas);

      this.scale = 1;
      this.offsetX = 0;
      this.offsetY = 0;
      this.hoveredNode = null;
      this.draggedNode = null;
      this.connectedToHovered = new Set();
      this.searchQuery = '';

      this.initNodes();
      this.setupEvents();
      this.resize();
      this.startSimulation();
    }

    initNodes() {
      const w = this.options.width;
      const h = this.options.height;
      this.nodeMap = new Map();

      // Degree calculation
      const degreeMap = new Map();
      this.links.forEach(l => {
        degreeMap.set(l.source, (degreeMap.get(l.source) || 0) + 1);
        degreeMap.set(l.target, (degreeMap.get(l.target) || 0) + 1);
      });

      // Sort nodes by folder so nodes in the same folder cluster naturally
      this.nodes.sort((a, b) => (a.folder || '').localeCompare(b.folder || ''));

      const count = this.nodes.length;
      this.nodes.forEach((node, idx) => {
        const isCenter = node.id === this.options.centerNodeId;
        const deg = degreeMap.get(node.id) || 1;
        
        const angle = (idx / Math.max(1, count)) * Math.PI * 2;
        const radiusDist = isCenter ? 0 : 35 + Math.random() * (Math.min(w, h) * 0.35);

        node.x = w / 2 + Math.cos(angle) * radiusDist;
        node.y = h / 2 + Math.sin(angle) * radiusDist;
        node.vx = 0;
        node.vy = 0;
        node.radius = isCenter ? 8.5 : Math.min(10, Math.max(4, 3.5 + Math.sqrt(deg) * 1.6));
        this.nodeMap.set(node.id, node);
      });

      this.resolvedLinks = [];
      this.links.forEach(link => {
        const source = this.nodeMap.get(link.source);
        const target = this.nodeMap.get(link.target);
        if (source && target) {
          this.resolvedLinks.push({ source, target, type: link.type || 'wikilink', folder: link.folder });
        }
      });
    }

    resize() {
      const rect = this.container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.width = rect.width || this.options.width;
      this.height = rect.height || this.options.height;
      this.canvas.width = this.width * dpr;
      this.canvas.height = this.height * dpr;
      this.canvas.style.width = this.width + 'px';
      this.canvas.style.height = this.height + 'px';
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.scale(dpr, dpr);
    }

    startSimulation() {
      this.alpha = 1.0;
      this.decay = this.options.isLocal ? 0.985 : 0.988;
      this.minAlpha = 0.0015;

      const step = () => {
        if (this.draggedNode) {
          this.alpha = Math.max(this.alpha, 0.45);
        } else {
          this.alpha *= this.decay;
        }

        if (this.alpha > this.minAlpha || this.draggedNode) {
          this.tick(this.alpha);
        }

        this.draw();

        if (this.alpha > this.minAlpha || this.draggedNode) {
          this.animId = requestAnimationFrame(step);
        } else {
          this.animId = null;
        }
      };

      if (this.animId) cancelAnimationFrame(this.animId);
      this.animId = requestAnimationFrame(step);
    }

    wake(energy = 0.5) {
      this.alpha = Math.max(this.alpha || 0, energy);
      if (!this.animId) {
        this.startSimulation();
      }
    }

    tick(alpha = 1.0) {
      const cx = this.width / 2;
      const cy = this.height / 2;
      const effectiveAlpha = Math.max(0.12, alpha);

      // 1. Center Gravity
      this.nodes.forEach(node => {
        if (node === this.draggedNode) return;
        const isCenter = node.id === this.options.centerNodeId;
        const grav = (isCenter ? 0.03 : 0.006) * effectiveAlpha;
        node.vx += (cx - node.x) * grav;
        node.vy += (cy - node.y) * grav;
      });

      // 2. Node Repulsion
      const nLen = this.nodes.length;
      const repelDist = this.options.isLocal ? 120 : 160;
      for (let i = 0; i < nLen; i++) {
        for (let j = i + 1; j < nLen; j++) {
          const a = this.nodes[i];
          const b = this.nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < repelDist) {
            const force = ((repelDist - dist) / (dist * 16)) * effectiveAlpha;
            if (a !== this.draggedNode) {
              a.vx -= dx * force;
              a.vy -= dy * force;
            }
            if (b !== this.draggedNode) {
              b.vx += dx * force;
              b.vy += dy * force;
            }
          }
        }
      }

      // 3. Link Spring Tension (Pull neighbor nodes dynamically!)
      const desiredDist = this.options.isLocal ? 55 : 50;
      this.resolvedLinks.forEach(link => {
        const dx = link.target.x - link.source.x;
        const dy = link.target.y - link.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (dist - desiredDist) * 0.06 * effectiveAlpha;
        if (link.source !== this.draggedNode) {
          link.source.vx += (dx / dist) * force;
          link.source.vy += (dy / dist) * force;
        }
        if (link.target !== this.draggedNode) {
          link.target.vx -= (dx / dist) * force;
          link.target.vy -= (dy / dist) * force;
        }
      });

      // 4. Update Position & Velocity Damping
      this.nodes.forEach(node => {
        if (node === this.draggedNode) return;
        node.vx *= 0.82;
        node.vy *= 0.82;
        node.x += node.vx;
        node.y += node.vy;
      });
    }

    draw() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      const isDark = document.documentElement.classList.contains('dark');
      
      // Clean background fill (solid, zero gradients; transparent for local graph)
      if (this.options.isLocal) {
        ctx.clearRect(0, 0, this.width, this.height);
      } else {
        const style = getComputedStyle(document.documentElement);
        const baseColor = style.getPropertyValue('--color-base').trim();
        ctx.fillStyle = baseColor || (isDark ? '#080d16' : '#f8fafc');
        ctx.fillRect(0, 0, this.width, this.height);
      }

      ctx.save();
      ctx.translate(this.offsetX, this.offsetY);
      ctx.scale(this.scale, this.scale);

      const style = getComputedStyle(document.documentElement);
      const primaryColor = style.getPropertyValue('--color-primary').trim() || '#0066a4';
      const accentColor = style.getPropertyValue('--color-accent').trim() || '#fe28a2';
      const textColor = style.getPropertyValue('--color-base-content').trim() || (isDark ? '#f1f5f9' : '#0f172a');

      // 1. Draw Links
      this.resolvedLinks.forEach(link => {
        const isHighlighted = this.hoveredNode && (link.source === this.hoveredNode || link.target === this.hoveredNode);
        const isDimmed = this.hoveredNode && !isHighlighted;
        const isFolder = link.type === 'folder';
        const isHubLink = link.type === 'hub';
        const isResourceLink = link.type === 'resource' || link.type === 'external';

        ctx.beginPath();
        if (isResourceLink) {
          ctx.setLineDash([2, 3]);
        } else if (isFolder && !isHighlighted) {
          ctx.setLineDash([4, 3]);
        } else {
          ctx.setLineDash([]);
        }
        ctx.moveTo(link.source.x, link.source.y);
        ctx.lineTo(link.target.x, link.target.y);

        if (isHighlighted) {
          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 2.4;
          ctx.globalAlpha = 0.95;
        } else if (isDimmed) {
          ctx.strokeStyle = isDark ? '#1e293b' : '#cbd5e1';
          ctx.lineWidth = 0.8;
          ctx.globalAlpha = 0.12;
        } else if (isHubLink) {
          ctx.strokeStyle = isDark ? 'rgba(254, 40, 162, 0.65)' : 'rgba(0, 102, 164, 0.6)';
          ctx.lineWidth = 1.8;
          ctx.globalAlpha = 0.85;
        } else if (isResourceLink) {
          ctx.strokeStyle = isDark ? 'rgba(16, 185, 129, 0.5)' : 'rgba(16, 185, 129, 0.55)';
          ctx.lineWidth = 1.1;
          ctx.globalAlpha = 0.7;
        } else if (isFolder) {
          ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.35)' : 'rgba(0, 102, 164, 0.28)';
          ctx.lineWidth = 1.0;
          ctx.globalAlpha = 0.55;
        } else {
          ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.55)' : 'rgba(0, 102, 164, 0.45)';
          ctx.lineWidth = 1.4;
          ctx.globalAlpha = 0.75;
        }
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // 2. Draw Nodes
      this.nodes.forEach(node => {
        const isCenter = node.id === this.options.centerNodeId;
        const isHovered = node === this.hoveredNode;
        const isConnected = this.connectedToHovered.has(node);
        const isDimmed = this.hoveredNode && !isHovered && !isConnected;
        const isResource = !!node.isResource || !!node.isExternal || node.type === 'external' || node.type === 'resource';
        const isHub = !!node.isHub;
        const isHome = !!node.isHome;

        const baseRadius = node.radius || (isResource ? 4.5 : (isHub ? 7.5 : (isHome ? 9.0 : 5.5)));
        const currentRadius = isHovered ? baseRadius * 1.35 : (isCenter ? baseRadius * 1.2 : baseRadius);

        ctx.globalAlpha = isDimmed ? 0.2 : 1;

        // Glow halo on center, hovered, or home node
        if (isHovered || isCenter || isHome) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius + 5, 0, Math.PI * 2);
          ctx.fillStyle = isCenter || isHome ? accentColor : (isResource ? '#10b981' : primaryColor);
          ctx.globalAlpha = 0.25;
          ctx.fill();
        }

        // Node Circle
        ctx.globalAlpha = isDimmed ? 0.2 : 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);

        if (isCenter || isHome) {
          ctx.fillStyle = accentColor;
        } else if (isHovered || isConnected) {
          ctx.fillStyle = isResource ? '#10b981' : (isConnected ? accentColor : primaryColor);
        } else if (isResource) {
          ctx.fillStyle = '#10b981';
        } else if (isHub) {
          ctx.fillStyle = primaryColor;
        } else {
          ctx.fillStyle = primaryColor;
        }
        ctx.fill();

        // High contrast border
        ctx.strokeStyle = isDark ? '#ffffff' : '#0f172a';
        ctx.lineWidth = isHovered || isCenter || isHome ? 1.8 : (isResource ? 1.0 : 1.2);
        ctx.stroke();

        // Node Title Label with gradual zoom fade-in
        let showLabel = isHovered || isCenter;
        let labelAlpha = 0.95;
        if (this.options.isLocal) {
          if (this.nodes.length <= 4) {
            showLabel = true;
          }
        } else if (!showLabel) {
          if (this.scale >= 1.35) {
            showLabel = true;
            labelAlpha = Math.min(0.95, (this.scale - 1.2) * 2);
          } else if (this.scale >= 0.85 && (isHub || isHome || baseRadius >= 6 || this.nodes.length <= 35)) {
            showLabel = true;
            labelAlpha = Math.min(0.92, (this.scale - 0.75) * 2);
          } else if (isHub || isHome) {
            showLabel = true;
            labelAlpha = 0.9;
          }
        }

        if (showLabel && !isDimmed) {
          ctx.font = isCenter || isHovered || isHub || isHome ? 'bold 11px Arad, sans-serif' : '10px Arad, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = textColor;
          ctx.globalAlpha = labelAlpha;
          let label = node.title || node.id;
          if (isResource) {
            label = '🔗 ' + label;
          }
          if (isHovered) {
            if (node.badge) {
              label += ' [' + node.badge + ']';
            } else if (node.folder && node.folder !== 'عمومی') {
              label += ' (' + node.folder + ')';
            }
          }
          ctx.fillText(label, node.x, node.y + currentRadius + 12);
        }
      });

      ctx.restore();
    }

    setupEvents() {
      let isDragging = false;
      let startX = 0;
      let startY = 0;
      let dragDistance = 0;

      // Touch handling state
      let initialPinchDistance = null;
      let initialScale = 1;
      let touchStartX = 0;
      let touchStartY = 0;
      let touchDragDistance = 0;

      this.canvas.style.touchAction = 'none';

      const getNodeAt = (x, y) => {
        const adjX = (x - this.offsetX) / this.scale;
        const adjY = (y - this.offsetY) / this.scale;
        return this.nodes.find(n => {
          const dx = n.x - adjX;
          const dy = n.y - adjY;
          return Math.sqrt(dx * dx + dy * dy) <= (n.radius || 6) + 8;
        });
      };

      const navigateToNode = (node) => {
        if (!node || !node.url) return;
        if (node.url.startsWith('http://') || node.url.startsWith('https://')) {
          window.open(node.url, '_blank', 'noopener,noreferrer');
          return;
        }
        const siteRoot = getSiteRoot();
        const cleanLoc = (node.url || '').replace(/^\/+/, '');
        const dest = siteRoot.endsWith('/') ? siteRoot + cleanLoc : siteRoot + '/' + cleanLoc;
        window.location.href = dest;
      };

      // Mouse Events
      this.canvas.addEventListener('mousemove', e => {
        const rect = this.canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        if (isDragging) {
          dragDistance += Math.hypot(e.clientX - startX, e.clientY - startY);
          if (this.draggedNode) {
            const nextX = (mx - this.offsetX) / this.scale;
            const nextY = (my - this.offsetY) / this.scale;
            this.draggedNode.vx = (nextX - this.draggedNode.x) * 0.6;
            this.draggedNode.vy = (nextY - this.draggedNode.y) * 0.6;
            this.draggedNode.x = nextX;
            this.draggedNode.y = nextY;
            this.wake(0.45);
          } else {
            this.offsetX += e.clientX - startX;
            this.offsetY += e.clientY - startY;
            this.draw();
          }
          startX = e.clientX;
          startY = e.clientY;
        } else {
          const node = getNodeAt(mx, my);
          if (node !== this.hoveredNode) {
            this.hoveredNode = node;
            this.connectedToHovered.clear();
            if (node) {
              this.resolvedLinks.forEach(l => {
                if (l.source === node) this.connectedToHovered.add(l.target);
                if (l.target === node) this.connectedToHovered.add(l.source);
              });
            }
            this.canvas.style.cursor = node ? 'pointer' : 'grab';
            this.draw();
          }
        }
      });

      this.canvas.addEventListener('mousedown', e => {
        const rect = this.canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const node = getNodeAt(mx, my);
        isDragging = true;
        dragDistance = 0;
        startX = e.clientX;
        startY = e.clientY;
        if (node) {
          this.draggedNode = node;
          this.wake(0.5);
        }
        this.canvas.style.cursor = 'grabbing';
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
        if (this.draggedNode) {
          this.draggedNode = null;
          this.wake(0.4);
        }
        if (this.canvas) {
          this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'grab';
        }
      });

      this.canvas.addEventListener('click', e => {
        // If moved more than 6px, user was dragging, NOT clicking!
        if (dragDistance > 6) {
          dragDistance = 0;
          return;
        }
        const rect = this.canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const node = getNodeAt(mx, my);
        if (node) {
          navigateToNode(node);
        }
      });

      this.canvas.addEventListener('wheel', e => {
        e.preventDefault();
        const zoomFactor = e.deltaY < 0 ? 1.12 : 0.88;
        this.scale = Math.min(3.5, Math.max(0.35, this.scale * zoomFactor));
        this.draw();
      }, { passive: false });

      // Touch Events for Android & iOS Touchscreens
      this.canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 1) {
          const rect = this.canvas.getBoundingClientRect();
          const mx = e.touches[0].clientX - rect.left;
          const my = e.touches[0].clientY - rect.top;
          const node = getNodeAt(mx, my);
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          touchDragDistance = 0;
          this.draggedNode = node || null;
          if (node) {
            this.wake(0.5);
          }
        } else if (e.touches.length === 2) {
          this.draggedNode = null;
          initialPinchDistance = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          initialScale = this.scale;
        }
      }, { passive: true });

      this.canvas.addEventListener('touchmove', e => {
        if (e.touches.length === 1) {
          const rect = this.canvas.getBoundingClientRect();
          const curX = e.touches[0].clientX;
          const curY = e.touches[0].clientY;
          const dx = curX - touchStartX;
          const dy = curY - touchStartY;
          touchDragDistance += Math.hypot(dx, dy);

          const mx = curX - rect.left;
          const my = curY - rect.top;

          if (this.draggedNode) {
            const nextX = (mx - this.offsetX) / this.scale;
            const nextY = (my - this.offsetY) / this.scale;
            this.draggedNode.vx = (nextX - this.draggedNode.x) * 0.6;
            this.draggedNode.vy = (nextY - this.draggedNode.y) * 0.6;
            this.draggedNode.x = nextX;
            this.draggedNode.y = nextY;
            this.wake(0.45);
          } else {
            this.offsetX += dx;
            this.offsetY += dy;
            this.draw();
          }
          touchStartX = curX;
          touchStartY = curY;
        } else if (e.touches.length === 2 && initialPinchDistance) {
          const curDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          if (curDist > 0) {
            const factor = curDist / initialPinchDistance;
            this.scale = Math.min(3.5, Math.max(0.35, initialScale * factor));
            this.draw();
          }
        }
      }, { passive: true });

      this.canvas.addEventListener('touchend', e => {
        if (e.touches.length === 0) {
          // If tap without drag on a node, navigate!
          if (touchDragDistance < 10 && this.draggedNode) {
            navigateToNode(this.draggedNode);
          }
          if (this.draggedNode) {
            this.draggedNode = null;
            this.wake(0.4);
          }
          this.draggedNode = null;
          initialPinchDistance = null;
        } else if (e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          initialPinchDistance = null;
        }
      }, { passive: true });

      // Window Resize Listener
      window.addEventListener('resize', () => {
        this.resize();
        this.draw();
      });

      window.addEventListener('sarv-theme-changed', () => {
        this.draw();
      });
    }
  }

  // Mount Graphs
  document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchGraphData();
    if (!data || !data.nodes) return;

    // 1. Local Graph in Sidebar (under TOC)
    const localBox = document.getElementById('sarv-local-graph-box');
    const currentPageSrc = (document.querySelector('meta[name="sarv-current-page"]')?.getAttribute('content') || '').replace(/\\/g, '/');
    const currentUrl = (document.querySelector('meta[name="sarv-current-url"]')?.getAttribute('content') || '').replace(/\\/g, '/');

    if (localBox) {
      let centerNode = data.nodes.find(n => n.id.replace(/\\/g, '/') === currentPageSrc)
        || data.nodes.find(n => currentUrl && n.url && n.url.replace(/^\/+|\/+$/g, '') === currentUrl.replace(/^\/+|\/+$/g, ''))
        || data.nodes.find(n => n.id.endsWith(currentPageSrc) || currentPageSrc.endsWith(n.id))
        || data.nodes[0];

      if (centerNode) {
        const neighborIds = new Set([centerNode.id]);
        data.links.forEach(l => {
          if (l.source === centerNode.id) neighborIds.add(l.target);
          if (l.target === centerNode.id) neighborIds.add(l.source);
        });

        let localNodes = data.nodes.filter(n => neighborIds.has(n.id));
        let localLinks = data.links.filter(l => neighborIds.has(l.source) && neighborIds.has(l.target));

        new KnowledgeGraph(localBox, localNodes, localLinks, {
          isLocal: true,
          centerNodeId: centerNode.id,
          height: 200
        });
      }
    }

    // 2. Global Graph Modal
    const globalModal = document.getElementById('sarv-global-graph-modal');
    const globalBox = document.getElementById('sarv-global-graph-box');
    const openBtn = document.getElementById('sarv-open-global-graph');
    const closeBtn = document.getElementById('sarv-close-global-graph');

    let globalInstance = null;

    if (openBtn && globalModal && globalBox) {
      openBtn.addEventListener('click', () => {
        globalModal.classList.add('is-open');
        setTimeout(() => {
          if (!globalInstance) {
            globalInstance = new KnowledgeGraph(globalBox, data.nodes, data.links, {
              width: globalBox.clientWidth || 900,
              height: globalBox.clientHeight || 560
            });
          } else {
            globalInstance.resize();
            globalInstance.startSimulation();
          }
        }, 60);
      });

      if (closeBtn) {
        closeBtn.addEventListener('click', () => globalModal.classList.remove('is-open'));
      }
      globalModal.addEventListener('click', (e) => {
        if (e.target === globalModal) globalModal.classList.remove('is-open');
      });
    }

    // 3. Inline embed tags (<div class="sarv-graph"></div>)
    document.querySelectorAll('.sarv-graph').forEach(el => {
      new KnowledgeGraph(el, data.nodes, data.links, {
        height: parseInt(el.getAttribute('data-height')) || 320
      });
    });
  });
})();
