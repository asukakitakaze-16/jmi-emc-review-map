window.REVIEW_MAP = {
  title: 'インタビュー修正箇所 19件',
  summary: '番号を押すと該当位置へ移動します。赤い下線は対象語を特定できた箇所、赤枠は写真への指摘です。',
  legend: 'A＝8/2の指摘、B＝8/3の追加指摘。対象語を断定できない指示は座標表示にしています。',
  reviews: [
    {
      id: 'A1', sheetNo: '1', group: '8/2・1920px', x: 1210, y: 571, refWidth: 1920,
      comment: '経営・人材革新センター',
      analysis: 'ヘッダーの「経営人材・革新センター」の表記修正と判断。',
      target: '経営人材・革新センター', replacement: '経営・人材革新センター', kind: 'text'
    },
    {
      id: 'A2', sheetNo: '2', group: '8/2・1920px', x: 1099, y: 2138, refWidth: 1920,
      comment: '経営・人材革新センター',
      analysis: '本文中の「経営人材・革新センター」の表記修正と判断。',
      target: '経営人材・革新センター', replacement: '経営・人材革新センター', kind: 'text'
    },
    {
      id: 'A3', sheetNo: '3', group: '8/2・1920px', x: 783, y: 2672, refWidth: 1920,
      comment: '以上に',
      analysis: '「それ以上に」から「それ」を取る修正と判断。',
      target: 'それ以上に', replacement: '以上に', kind: 'text'
    },
    {
      id: 'A4', sheetNo: '4', group: '8/2・1920px', x: 1265, y: 2780, refWidth: 1920,
      comment: '非常に',
      analysis: 'コメントだけでは置換元の語を断定できないため、座標で表示。',
      kind: 'point'
    },
    {
      id: 'A5', sheetNo: '5', group: '8/2・1920px', x: 671, y: 4320, refWidth: 1920,
      comment: '第１回目として',
      analysis: '周辺に完全一致する語がないため、座標で表示。',
      kind: 'point'
    },
    {
      id: 'A6a', sheetNo: '6', group: '8/2・1920px', x: 672, y: 4322, refWidth: 1920,
      comment: '第１回目としての',
      analysis: '周辺に完全一致する語がないため、座標で表示。',
      kind: 'point'
    },
    {
      id: 'A6b', sheetNo: '6', group: '8/2・1920px', x: 730, y: 4758, refWidth: 1920,
      comment: 'ほかの企業の方と意見を交わすうちに、',
      analysis: '発言の言い換え指示と判断。表の「違憲」は文脈から「意見」と解析。',
      target: '他の方とのやり取りの中で、', replacement: 'ほかの企業の方と意見を交わすうちに、', kind: 'text'
    },
    {
      id: 'A7', sheetNo: '7', group: '8/2・1920px', x: 1175, y: 7591, refWidth: 1920,
      comment: '削除（本人発言の原文にない）',
      analysis: '削除範囲をコメントだけでは確定できないため、座標で表示。',
      kind: 'point'
    },
    {
      id: 'A8a', sheetNo: '8', group: '8/2・1920px', x: 1127, y: 7582, refWidth: 1920,
      comment: '本人発言の原文にないため差し替え：経営と現場のあいだに立つという役割は、以前から理解していた。だがこの3日間を通じて、その役割の重さが具体的な輪郭を持った。',
      analysis: 'A7と同じ周辺の段落差し替え。対象範囲は座標で表示。',
      kind: 'point'
    },
    {
      id: 'A8b', sheetNo: '8', group: '8/2・1920px', x: 1096, y: 9459, refWidth: 1920,
      comment: '心が動いた反応だった',
      analysis: '江波戸氏の反応を表す段落への修正指示。対象範囲は座標で表示。',
      kind: 'point'
    },
    {
      id: 'A9', sheetNo: '9', group: '8/2・1920px', x: 612, y: 10175, refWidth: 1920,
      comment: 'のようだった',
      analysis: '「ように見えた」を断定を弱めた表現へ修正する指示と判断。',
      target: 'ように見えた', replacement: 'ようだった', kind: 'text'
    },
    {
      id: 'A10', sheetNo: '10', group: '8/2・1920px', x: 956, y: 10991, refWidth: 1920,
      comment: '自分の',
      analysis: '座標に最も近い「自分の」を対象語として表示。',
      target: '自分の', replacement: '自分の', kind: 'text'
    },
    {
      id: 'A11', sheetNo: '11', group: '8/2・1920px', x: 1063, y: 11932, refWidth: 1920,
      comment: '回を重ねるごとに、本人の視点と行動がどう変わったかを確認する。',
      analysis: '派遣企業向けチェック項目の文言差し替えと判断。',
      target: '研修期間中に複数回、本人の視点と行動の変化を確認する。', replacement: '回を重ねるごとに、本人の視点と行動がどう変わったかを確認する。', kind: 'text'
    },
    {
      id: 'A12', sheetNo: '12', group: '8/2・1920px', x: 1060, y: 1394, refWidth: 1920,
      comment: '人事院',
      analysis: '導入文の「行政組織」を具体名へ変更する指示と判断。',
      target: '行政組織', replacement: '人事院', kind: 'text'
    },
    {
      id: 'A13', sheetNo: '13', group: '8/2・1920px', x: 1161, y: 421, refWidth: 1920,
      comment: '全体的に写真が違う可能性。開講レポートと同じ写真・説明文が入っていないか確認。',
      analysis: 'インタビューページ全体の写真確認事項。代表として冒頭写真を赤枠表示。',
      figureIndex: 0, kind: 'image'
    },
    {
      id: 'B1', sheetNo: '1', group: '8/3・1440px', x: 548, y: 2052, refWidth: 1440,
      comment: 'エグゼクティブマネジメントコース（EMC）に変更',
      analysis: '本文冒頭の略称を正式表記へ変更する指示と判断。',
      target: 'JMI EMC', replacement: 'エグゼクティブマネジメントコース（EMC）', kind: 'text'
    },
    {
      id: 'B2', sheetNo: '2', group: '8/3・1440px', x: 665, y: 2162, refWidth: 1440,
      comment: '今年度37回目の開催となる本コースは過去1,000名近くの次世代経営幹部が受講し、経営者へのキャリアを歩んでいる。',
      analysis: '追加・差し替え範囲をコメントだけでは確定できないため、座標で表示。',
      kind: 'point'
    },
    {
      id: 'B3', sheetNo: '3', group: '8/3・1440px', x: 685, y: 13761, refWidth: 1440,
      comment: 'JMA マネジメントインスティチュート　第37期エグゼクティブマネジメントコース　参加者',
      analysis: '編集注記の取材対象表記を差し替える指示と判断。',
      target: 'JMI EMC第37期 開講3日間の参加者5名', replacement: 'JMA マネジメントインスティチュート　第37期エグゼクティブマネジメントコース　参加者', kind: 'text'
    },
    {
      id: 'C1', sheetNo: '追加', group: '8/6・フッター', x: 999, y: 14480, refWidth: 1440,
      comment: '8ヶ月',
      analysis: 'ページ下部の「9ヶ月」を「8ヶ月」へ修正。',
      target: '9ヶ月', replacement: '8ヶ月', kind: 'text'
    }
  ]
};
window.REVIEW_MAP = {
  title: 'インタビュー修正箇所 18件',
  summary: '番号を押すと該当位置へ移動します。赤い下線は対象語を特定できた箇所、赤枠は写真への指摘です。',
  legend: 'A＝8/2の指摘、B＝8/3の追加指摘。対象語を断定できない指示は座標表示にしています。',
  reviews: [
    {
      id: 'A1', sheetNo: '1', group: '8/2・1920px', x: 1210, y: 571, refWidth: 1920,
      comment: '経営・人材革新センター',
      analysis: 'ヘッダーの「経営人材・革新センター」の表記修正と判断。',
      target: '経営人材・革新センター', replacement: '経営・人材革新センター', kind: 'text'
    },
    {
      id: 'A2', sheetNo: '2', group: '8/2・1920px', x: 1099, y: 2138, refWidth: 1920,
      comment: '経営・人材革新センター',
      analysis: '本文中の「経営人材・革新センター」の表記修正と判断。',
      target: '経営人材・革新センター', replacement: '経営・人材革新センター', kind: 'text'
    },
    {
      id: 'A3', sheetNo: '3', group: '8/2・1920px', x: 783, y: 2672, refWidth: 1920,
      comment: '以上に',
      analysis: '「それ以上に」から「それ」を取る修正と判断。',
      target: 'それ以上に', replacement: '以上に', kind: 'text'
    },
    {
      id: 'A4', sheetNo: '4', group: '8/2・1920px', x: 1265, y: 2780, refWidth: 1920,
      comment: '非常に',
      analysis: 'コメントだけでは置換元の語を断定できないため、座標で表示。',
      kind: 'point'
    },
    {
      id: 'A5', sheetNo: '5', group: '8/2・1920px', x: 671, y: 4320, refWidth: 1920,
      comment: '第１回目として',
      analysis: '周辺に完全一致する語がないため、座標で表示。',
      kind: 'point'
    },
    {
      id: 'A6a', sheetNo: '6', group: '8/2・1920px', x: 672, y: 4322, refWidth: 1920,
      comment: '第１回目としての',
      analysis: '周辺に完全一致する語がないため、座標で表示。',
      kind: 'point'
    },
    {
      id: 'A6b', sheetNo: '6', group: '8/2・1920px', x: 730, y: 4758, refWidth: 1920,
      comment: 'ほかの企業の方と意見を交わすうちに、',
      analysis: '発言の言い換え指示と判断。表の「違憲」は文脈から「意見」と解析。',
      target: '他の方とのやり取りの中で、', replacement: 'ほかの企業の方と意見を交わすうちに、', kind: 'text'
    },
    {
      id: 'A7', sheetNo: '7', group: '8/2・1920px', x: 1175, y: 7591, refWidth: 1920,
      comment: '削除（本人発言の原文にない）',
      analysis: '削除範囲をコメントだけでは確定できないため、座標で表示。',
      kind: 'point'
    },
    {
      id: 'A8a', sheetNo: '8', group: '8/2・1920px', x: 1127, y: 7582, refWidth: 1920,
      comment: '本人発言の原文にないため差し替え：経営と現場のあいだに立つという役割は、以前から理解していた。だがこの3日間を通じて、その役割の重さが具体的な輪郭を持った。',
      analysis: 'A7と同じ周辺の段落差し替え。対象範囲は座標で表示。',
      kind: 'point'
    },
    {
      id: 'A8b', sheetNo: '8', group: '8/2・1920px', x: 1096, y: 9459, refWidth: 1920,
      comment: '心が動いた反応だった',
      analysis: '江波戸氏の反応を表す段落への修正指示。対象範囲は座標で表示。',
      kind: 'point'
    },
    {
      id: 'A9', sheetNo: '9', group: '8/2・1920px', x: 612, y: 10175, refWidth: 1920,
      comment: 'のようだった',
      analysis: '「ように見えた」を断定を弱めた表現へ修正する指示と判断。',
      target: 'ように見えた', replacement: 'ようだった', kind: 'text'
    },
    {
      id: 'A10', sheetNo: '10', group: '8/2・1920px', x: 956, y: 10991, refWidth: 1920,
      comment: '自分の',
      analysis: '座標に最も近い「自分の」を対象語として表示。',
      target: '自分の', replacement: '自分の', kind: 'text'
    },
    {
      id: 'A11', sheetNo: '11', group: '8/2・1920px', x: 1063, y: 11932, refWidth: 1920,
      comment: '回を重ねるごとに、本人の視点と行動がどう変わったかを確認する。',
      analysis: '派遣企業向けチェック項目の文言差し替えと判断。',
      target: '研修期間中に複数回、本人の視点と行動の変化を確認する。', replacement: '回を重ねるごとに、本人の視点と行動がどう変わったかを確認する。', kind: 'text'
    },
    {
      id: 'A12', sheetNo: '12', group: '8/2・1920px', x: 1060, y: 1394, refWidth: 1920,
      comment: '人事院',
      analysis: '導入文の「行政組織」を具体名へ変更する指示と判断。',
      target: '行政組織', replacement: '人事院', kind: 'text'
    },
    {
      id: 'A13', sheetNo: '13', group: '8/2・1920px', x: 1161, y: 421, refWidth: 1920,
      comment: '全体的に写真が違う可能性。開講レポートと同じ写真・説明文が入っていないか確認。',
      analysis: 'インタビューページ全体の写真確認事項。代表として冒頭写真を赤枠表示。',
      figureIndex: 0, kind: 'image'
    },
    {
      id: 'B1', sheetNo: '1', group: '8/3・1440px', x: 548, y: 2052, refWidth: 1440,
      comment: 'エグゼクティブマネジメントコース（EMC）に変更',
      analysis: '本文冒頭の略称を正式表記へ変更する指示と判断。',
      target: 'JMI EMC', replacement: 'エグゼクティブマネジメントコース（EMC）', kind: 'text'
    },
    {
      id: 'B2', sheetNo: '2', group: '8/3・1440px', x: 665, y: 2162, refWidth: 1440,
      comment: '今年度37回目の開催となる本コースは過去1,000名近くの次世代経営幹部が受講し、経営者へのキャリアを歩んでいる。',
      analysis: '追加・差し替え範囲をコメントだけでは確定できないため、座標で表示。',
      kind: 'point'
    },
    {
      id: 'B3', sheetNo: '3', group: '8/3・1440px', x: 685, y: 13761, refWidth: 1440,
      comment: 'JMA マネジメントインスティチュート　第37期エグゼクティブマネジメントコース　参加者',
      analysis: '編集注記の取材対象表記を差し替える指示と判断。',
      target: 'JMI EMC第37期 開講3日間の参加者5名', replacement: 'JMA マネジメントインスティチュート　第37期エグゼクティブマネジメントコース　参加者', kind: 'text'
    }
  ]
};
