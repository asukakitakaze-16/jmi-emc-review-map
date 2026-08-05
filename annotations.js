(() => {
  const RED = '#e3232c';
  const defaultReviews = [
    {
      id: 'A1', sheetNo: '1', group: '8/2・1920px', x: 1073, y: 564, refWidth: 1920,
      comment: '経営・人材革新センター',
      analysis: '「経営人材・革新センター」の表記修正と判断。',
      target: '経営人材・革新センター', replacement: '経営・人材革新センター', kind: 'text'
    },
    {
      id: 'A1b', sheetNo: '1', group: '追加・2ページ目', x: 1030, y: 1994, refWidth: 1920,
      comment: '経営・人材革新センター',
      analysis: '2ページ目「実施主体」の「経営人材・革新センター」を同じ表記へ修正。',
      target: '経営人材・革新センター', replacement: '経営・人材革新センター', kind: 'text'
    },
    {
      id: 'A2', sheetNo: '2', group: '8/2・1920px', x: 673, y: 1271, refWidth: 1920,
      comment: '（初出のためここだけ）JMI エグゼクティブ・マネジメントコース（JMI EMC）',
      analysis: '本文で最初に現れる略称へ正式名称を補う指示と判断。',
      target: 'JMI EMC第37期', replacement: 'JMI エグゼクティブ・マネジメントコース（JMI EMC）第37期', kind: 'text'
    },
    {
      id: 'A3', sheetNo: '3', group: '8/2・1920px', x: 833, y: 1278, refWidth: 1920,
      comment: '全9回のうちの1回目の3日間',
      analysis: '「開講3日間」の説明を具体化する指示と判断。',
      target: '開講3日間', replacement: '全9回のうちの1回目の3日間', kind: 'text'
    },
    {
      id: 'A4', sheetNo: '4', group: '8/2・1920px', x: 1272, y: 4894, refWidth: 1920,
      comment: 'ほかの写真に対して画面の映り込みが鮮明。受講者のPC画面の映り込みを要確認。',
      analysis: '該当写真を座標とページ構成から特定。公開前の画像確認事項。',
      figureIndex: 3, kind: 'image'
    },
    {
      id: 'A5', sheetNo: '5', group: '8/2・1920px', x: 1277, y: 5525, refWidth: 1920,
      comment: '受講内容（有料で教わる内容）が写っているため、公開可否をクライアント確認。',
      analysis: '該当写真を座標とページ構成から特定。内容確認が必要。',
      figureIndex: 4, kind: 'image'
    },
    {
      id: 'A6', sheetNo: '6', group: '8/2・1920px', x: 1238, y: 11458, refWidth: 1920,
      comment: 'インタビュー記事と重複。差別化としても「ある参加者は」でよいのでは。',
      analysis: '固有名を「ある参加者は」へ一般化する提案と判断。',
      target: '東京ガスの江波戸氏は', replacement: 'ある参加者は', kind: 'text'
    },
    {
      id: 'B1', sheetNo: '1', group: '8/3・1440px', x: 534, y: 2150, refWidth: 1440,
      comment: '約8か月',
      analysis: '「約9か月」の期間表記を修正する指示と判断。',
      target: '約9か月', replacement: '約8か月', kind: 'text'
    },
    {
      id: 'B2', sheetNo: '2', group: '8/3・1440px', x: 635, y: 1947, refWidth: 1440,
      comment: '第37期エグゼクティブマネジメントコース',
      analysis: '略称「JMI EMC第37期」の正式表記への変更と判断。',
      target: 'JMI EMC第37期', replacement: '第37期エグゼクティブマネジメントコース', kind: 'text'
    },
    {
      id: 'B3', sheetNo: '3', group: '8/3・1440px', x: 890, y: 2116, refWidth: 1440,
      comment: '取る',
      analysis: '削除指示と思われるが、対象語がコメントだけでは確定できないため座標表示。',
      kind: 'point'
    },
    {
      id: 'B4', sheetNo: '4', group: '8/3・1440px', x: 971, y: 2974, refWidth: 1440,
      comment: '第37期エグゼクティブマネジメントコース',
      analysis: '本文中の略称を正式表記へ変更する指示と判断。',
      target: 'JMI EMC第37期', replacement: '第37期エグゼクティブマネジメントコース', kind: 'text'
    },
    {
      id: 'B5', sheetNo: '5', group: '8/3・1440px', x: 717, y: 4402, refWidth: 1440,
      comment: '8か月',
      analysis: '「9か月」の期間表記を修正する指示と判断。',
      target: '9か月', replacement: '8か月', kind: 'text'
    },
    {
      id: 'B6', sheetNo: '6', group: '8/3・1440px', x: 418, y: 4999, refWidth: 1440,
      comment: 'IMD教授　一條和生先生',
      analysis: '講師名に所属・肩書を補う指示と判断。',
      target: '一條先生', replacement: 'IMD教授　一條和生先生', kind: 'text'
    },
    {
      id: 'C1', sheetNo: '7', group: '8/4・1440px', x: 463, y: 13217, refWidth: 1440,
      comment: '8か月 or 9回です',
      analysis: '見出しの「9か月」が指摘対象。8か月／全9回のどちらに直すかはコメントだけでは確定できないため、語句を示して要確認。',
      target: '9か月', replacement: '9か月', kind: 'text'
    },
    {
      id: 'C2', sheetNo: '8', group: '8/4・1440px', x: 909, y: 13913, refWidth: 1440,
      comment: '8か月です。',
      analysis: '本文中の期間表記「9か月」を「8か月」へ修正する指示と判断。',
      target: '9か月', replacement: '8か月', kind: 'text'
    },
    {
      id: 'C3', sheetNo: '9', group: '8/4・1440px', x: 496, y: 13960, refWidth: 1440,
      comment: 'EMC',
      analysis: '同じ段落の「JMI EMC」を「EMC」へ簡略化する指示と判断。',
      target: 'JMI EMC', replacement: 'EMC', kind: 'text'
    },
    {
      id: 'C4', sheetNo: '10', group: '8/4・1440px', x: 627, y: 15118, refWidth: 1440,
      comment: 'JMIエグゼクティブマネジメントコース',
      analysis: 'FAQ見出しの略称「JMI EMC」を正式表記へ変更する指示と判断。',
      target: 'JMI EMC', context: 'に関するFAQ', replacement: 'JMIエグゼクティブマネジメントコース', kind: 'text'
    },
    {
      id: 'C5', sheetNo: '11', group: '8/4・1440px', x: 460, y: 15424, refWidth: 1440,
      comment: '第1単位の3日間',
      analysis: 'FAQの「開講3日間」を「第1単位の3日間」へ変更する指示と判断。',
      target: '開講3日間', replacement: '第1単位の3日間', kind: 'text'
    },
    {
      id: 'C6', sheetNo: '12', group: '8/4・1440px', x: 479, y: 16431, refWidth: 1440,
      comment: 'JMI 第37期EMC',
      analysis: 'まとめ冒頭の期・コース表記を指定順へ変更する指示と判断。',
      target: 'JMI EMC第37期', replacement: 'JMI 第37期EMC', kind: 'text'
    },
    {
      id: 'C7', sheetNo: '13', group: '8/4・1440px', x: 514, y: 16728, refWidth: 1440,
      comment: '第37期EMC',
      analysis: 'まとめ末尾の「JMI EMC第37期」を「第37期EMC」へ変更する指示と判断。',
      target: 'JMI EMC第37期', replacement: '第37期EMC', kind: 'text'
    },
    {
      id: 'C8', sheetNo: '14', group: '8/4・1440px', x: 573, y: 16726, refWidth: 1440,
      comment: '8か月',
      analysis: 'まとめ末尾の期間表記「9か月」を「8か月」へ修正する指示と判断。',
      target: '9か月', replacement: '8か月', kind: 'text'
    },
    {
      id: 'C9', sheetNo: '15', group: '8/4・1440px', x: 608, y: 16911, refWidth: 1440,
      comment: 'JMI第37期エグゼクティブマネジメントコース',
      analysis: '編集注記の取材対象にある略称を指定の正式表記へ変更する指示と判断。',
      target: 'JMI EMC第37期', replacement: 'JMI第37期エグゼクティブマネジメントコース', kind: 'text'
    },
    {
      id: 'C10', sheetNo: '16', group: '8/4・1440px', x: 960, y: 11481, refWidth: 1440,
      comment: 'この後に石黒さんの講演の様子写真を入れられますか。',
      analysis: '石黒氏の講演を説明する段落直後への写真追加依頼。追加する写真素材の指定が必要。',
      kind: 'point'
    },
    {
      id: 'C11', sheetNo: '17', group: '8/4・1440px', x: 999, y: 17533, refWidth: 1440,
      comment: '8か月 or 9回です。',
      analysis: 'ページ下部の「9ヶ月」が指摘対象。8ヶ月／全9回のどちらに直すかはコメントだけでは確定できないため、語句を示して要確認。',
      target: '9ヶ月', replacement: '9ヶ月', kind: 'text'
    }
  ];
  const pageConfig = window.REVIEW_MAP || {};
  const reviews = pageConfig.reviews || defaultReviews;

  const css = document.createElement('style');
  css.textContent = `
    html { scroll-padding-top: 96px; }
    body { padding-right: 360px; }
    .review-underlined { text-decoration: underline 3px ${RED}; text-underline-offset: 5px; background: rgba(227,35,44,.07); }
    .review-image { outline: 4px solid ${RED}; outline-offset: -4px; }
    .review-pin { position:absolute; z-index:2147483000; width:34px; height:34px; border-radius:999px; border:3px solid #fff; background:${RED}; color:#fff; display:grid; place-items:center; font:700 12px/1 Arial,sans-serif; box-shadow:0 4px 14px rgba(0,0,0,.35); cursor:pointer; transform:translate(-50%,-50%); }
    .review-pin:hover,.review-pin:focus { width:40px; height:40px; outline:3px solid rgba(227,35,44,.25); }
    .review-panel { position:fixed; inset:0 0 0 auto; z-index:2147483001; width:360px; background:#fff; border-left:1px solid #dedede; box-shadow:-8px 0 28px rgba(0,0,0,.14); color:#202020; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; display:flex; flex-direction:column; }
    .review-head { padding:18px 18px 14px; background:#101010; color:#fff; }
    .review-kicker { margin:0 0 5px; color:#ff757b; font-size:11px; font-weight:800; letter-spacing:.12em; }
    .review-title { margin:0; font-size:19px; line-height:1.4; }
    .review-summary { margin:8px 0 0; color:#cfcfcf; font-size:12px; line-height:1.6; }
    .review-list { overflow:auto; padding:10px; display:flex; flex-direction:column; gap:8px; }
    .review-mode { position:sticky; top:0; z-index:3; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:8px; padding:2px 0 8px; background:#fff; }
    .review-mode-button { min-height:42px; border:1px solid #d8d8d8; border-radius:9px; background:#fff; color:#333; font:700 14px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; cursor:pointer; }
    .review-mode-button:hover { border-color:${RED}; }
    .review-mode-button[aria-pressed="true"] { border-color:${RED}; background:${RED}; color:#fff; box-shadow:0 3px 10px rgba(227,35,44,.22); }
    .review-card { border:1px solid #e6e6e6; border-radius:10px; padding:11px; background:#fff; cursor:pointer; text-align:left; color:#202020; }
    .review-card:hover,.review-card.active { border-color:${RED}; box-shadow:0 0 0 2px rgba(227,35,44,.10); }
    .review-meta { display:flex; align-items:center; gap:8px; margin-bottom:6px; font-size:11px; color:#777; }
    .review-id { display:inline-grid; place-items:center; min-width:30px; height:22px; border-radius:20px; background:${RED}; color:#fff; font-weight:800; }
    .review-comment { margin:0; font-size:13px; font-weight:700; line-height:1.55; }
    .review-analysis { margin:6px 0 0; padding-top:6px; border-top:1px dashed #ddd; color:#666; font-size:11px; line-height:1.55; }
    .review-legend { padding:10px 18px 14px; border-top:1px solid #eee; color:#666; font-size:11px; line-height:1.55; }
    body.review-confirm-view { padding-right:0 !important; padding-bottom:0 !important; }
    .review-confirm-view .review-underlined { text-decoration:none !important; background:none !important; }
    .review-confirm-view .review-image { outline:none !important; }
    .review-confirm-view .review-pin { display:none !important; }
    .review-confirm-view #review-toggle,
    .review-confirm-view #review-panel { display:none !important; }
    .review-confirm-view .review-panel { inset:12px 12px auto auto; width:min(440px,calc(100vw - 24px)); height:auto; max-height:none; border:0; border-radius:12px; box-shadow:0 8px 28px rgba(0,0,0,.18); background:rgba(255,255,255,.96); backdrop-filter:blur(10px); }
    .review-confirm-view .review-head,
    .review-confirm-view .review-card,
    .review-confirm-view .review-legend { display:none !important; }
    .review-confirm-view .review-list { overflow:visible; padding:10px; }
    .review-confirm-view .review-mode { padding:0; background:transparent; }
    @media (max-width: 960px) {
      body { padding-right:0; padding-bottom:230px; }
      .review-panel { inset:auto 0 0 0; width:auto; height:220px; border-left:0; border-top:1px solid #ddd; }
      .review-head { padding:10px 14px; }
      .review-summary,.review-legend { display:none; }
      .review-list { flex-direction:row; overflow-x:auto; }
      .review-card { min-width:260px; }
    }
  `;
  document.head.appendChild(css);

  const panel = document.createElement('aside');
  panel.className = 'review-panel';
  panel.setAttribute('aria-label', '修正コメント一覧');
  panel.innerHTML = `
    <div class="review-head">
      <p class="review-kicker">SPREADSHEET REVIEW MAP</p>
      <h2 class="review-title">${pageConfig.title || `修正箇所 ${reviews.length}件`}</h2>
      <p class="review-summary">${pageConfig.summary || '番号を押すと該当位置へ移動します。赤い下線は対象語を特定できた箇所、赤枠は写真への指摘です。'}</p>
    </div>
    <div class="review-list"></div>
    <div class="review-legend">${pageConfig.legend || 'A＝8/2、B＝8/3、C＝8/4の追加指摘。対象語を確定できないものは座標からの推定表示です。'}</div>
  `;
  document.body.appendChild(panel);

  const list = panel.querySelector('.review-list');
  const modeControls = document.createElement('div');
  modeControls.className = 'review-mode';
  modeControls.setAttribute('aria-label', '修正前後の表示切り替え');
  modeControls.innerHTML = `
    <button type="button" class="review-mode-button" data-mode="before" aria-pressed="true">修正前</button>
    <button type="button" class="review-mode-button" data-mode="after" aria-pressed="false">修正後</button>
    <button type="button" class="review-mode-button" data-mode="confirm" aria-pressed="false">確認用</button>
  `;
  list.appendChild(modeControls);

  function expectedY(item) {
    return item.y;
  }

  function directTextCandidates(text) {
    const selector = 'p,span,li,h1,h2,h3,blockquote,figcaption,a';
    return Array.from(document.querySelectorAll(selector)).filter((el) => {
      if (el.closest('.review-panel')) return false;
      if (!(el.textContent || '').includes(text)) return false;
      return !Array.from(el.children).some((child) => (child.textContent || '').includes(text));
    });
  }

  function findTextNode(root, text) {
    for (const node of root.childNodes) {
      if (node.nodeType === 3 && (node.nodeValue || '').includes(text)) return node;
      if (node.nodeType === 1) {
        const found = findTextNode(node, text);
        if (found) return found;
      }
    }
    return null;
  }

  function underlineTarget(item) {
    const candidates = directTextCandidates(item.target).filter((el) => !item.context || (el.textContent || '').includes(item.context));
    if (!candidates.length) return null;
    const targetY = expectedY(item);
    const chosen = candidates.sort((a, b) => Math.abs((a.getBoundingClientRect().top + scrollY) - targetY) - Math.abs((b.getBoundingClientRect().top + scrollY) - targetY))[0];
    const node = findTextNode(chosen, item.target);
    if (!node) return chosen;
    const idx = node.nodeValue.indexOf(item.target);
    const before = node.nodeValue.slice(0, idx);
    const match = node.nodeValue.slice(idx, idx + item.target.length);
    const after = node.nodeValue.slice(idx + item.target.length);
    const span = document.createElement('span');
    span.className = 'review-underlined';
    span.textContent = match;
    span.dataset.original = match;
    span.dataset.replacement = item.replacement || match;
    const frag = document.createDocumentFragment();
    if (before) frag.appendChild(document.createTextNode(before));
    frag.appendChild(span);
    if (after) frag.appendChild(document.createTextNode(after));
    node.parentNode.replaceChild(frag, node);
    return span;
  }

  function pinFor(item, anchor) {
    const pin = document.createElement('button');
    pin.className = 'review-pin';
    pin.type = 'button';
    pin.textContent = item.id;
    pin.setAttribute('aria-label', `${item.id}: ${item.comment}`);
    pin.dataset.reviewId = item.id;
    document.body.appendChild(pin);

    const place = () => {
      if (anchor) {
        const rect = anchor.getBoundingClientRect();
        pin.style.left = `${Math.min(document.documentElement.clientWidth - (window.innerWidth > 960 ? 380 : 25), rect.right + scrollX + 18)}px`;
        pin.style.top = `${rect.top + scrollY + Math.min(18, rect.height / 2)}px`;
      } else {
        const contentWidth = Math.max(320, window.innerWidth - (window.innerWidth > 960 ? 360 : 0));
        pin.style.left = `${Math.min(contentWidth - 30, item.x * (contentWidth / item.refWidth))}px`;
        pin.style.top = `${expectedY(item)}px`;
      }
    };
    place();
    return { pin, place };
  }

  const placed = reviews.map((item) => {
    let anchor = null;
    if (item.kind === 'text') anchor = underlineTarget(item);
    if (item.kind === 'image') {
      const figures = Array.from(document.querySelectorAll('figure'));
      const figure = figures[item.figureIndex];
      anchor = figure ? figure.querySelector('img') || figure : null;
      if (anchor) anchor.classList.add('review-image');
    }
    const { pin, place } = pinFor(item, anchor);
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'review-card';
    card.dataset.reviewId = item.id;
    card.innerHTML = `<div class="review-meta"><span class="review-id">${item.id}</span><span>表の番号 ${item.sheetNo}</span><span>${item.group}</span></div><p class="review-comment"></p><p class="review-analysis"></p>`;
    card.querySelector('.review-comment').textContent = item.comment;
    card.querySelector('.review-analysis').textContent = item.analysis;
    list.appendChild(card);

    const focus = () => {
      const top = anchor ? anchor.getBoundingClientRect().top + scrollY - 110 : expectedY(item) - 110;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      document.querySelectorAll('.review-card').forEach((el) => el.classList.toggle('active', el === card));
    };
    pin.addEventListener('click', focus);
    card.addEventListener('click', focus);
    return { place };
  });

  function setReviewMode(mode) {
    document.querySelectorAll('.review-mode-button').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.mode === mode));
    });
    document.querySelectorAll('.review-underlined').forEach((span) => {
      span.textContent = mode === 'before' ? span.dataset.original : span.dataset.replacement;
    });
    document.body.classList.toggle('review-confirm-view', mode === 'confirm');
    requestAnimationFrame(() => placed.forEach(({ place }) => place()));
  }

  const cleanAfterView = new URLSearchParams(window.location.search).get('pdf') === 'after';
  if (cleanAfterView) {
    document.body.classList.add('review-clean-after');
    setReviewMode('confirm');
    const cleanStyle = document.createElement('style');
    cleanStyle.textContent = `
      body.review-clean-after { padding-right: 0 !important; padding-bottom: 0 !important; }
      .review-clean-after .review-panel,
      .review-clean-after .review-pin { display: none !important; }
      .review-clean-after .review-underlined { text-decoration: none !important; background: none !important; }
      .review-clean-after .review-image { outline: none !important; }
    `;
    document.head.appendChild(cleanStyle);
  }

  const cleanCaptureView = new URLSearchParams(window.location.search).get('capture') === 'clean';
  if (cleanCaptureView) {
    document.body.classList.add('review-capture-clean');
    setReviewMode('confirm');
    const captureStyle = document.createElement('style');
    captureStyle.textContent = `
      body.review-capture-clean { padding-right: 0 !important; padding-bottom: 0 !important; }
      .review-capture-clean .review-panel,
      .review-capture-clean .review-pin,
      .review-capture-clean #review-toggle,
      .review-capture-clean #review-panel { visibility: hidden !important; pointer-events: none !important; }
      .review-capture-clean .review-underlined { text-decoration: none !important; background: none !important; }
      .review-capture-clean .review-image { outline: none !important; }
    `;
    document.head.appendChild(captureStyle);
  }

  modeControls.querySelectorAll('.review-mode-button').forEach((button) => {
    button.addEventListener('click', () => setReviewMode(button.dataset.mode));
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => placed.forEach(({ place }) => place()), 120);
  });
})();
