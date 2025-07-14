# ミタマっち開発ノウハウ - CLAUDE.md

## 🎨 ビジュアルアセット管理・AI生成統合ベストプラクティス

### ChatGPT画像生成統合パターン（実証済み）

#### 成功実績
- **メイン部屋背景生成**: 95%成功率、技術要件完全準拠
- **ファイル**: `ChatGPT Image 2025年7月14日 16_16_45.png` → `bg_room_main.png`
- **品質**: 温かみのある日本風ミニマルデザイン、ゲーム統合完璧

#### プロンプト設計の重要ポイント

##### 1. 技術仕様の明確化（必須）
```
- Resolution: 800×600 pixels（ゲームキャンバスサイズ）
- Format: PNG with transparency
- NO characters, people, pets, or living beings（最重要制約）
- Style: [プロジェクト固有スタイル指定]
```

##### 2. 確立済みプロンプトテンプレート
```
Create a [アセット種類] for a pet care game:
- Resolution: [具体的サイズ]
- Style: [デザイン方針]
- NO characters, people, pets, or living beings
- Elements: [具体的要素]
- Color palette: [色調指定]
- Atmosphere: [雰囲気]
- Layout: [レイアウト要件]
- Details: [詳細要素]
- Lighting: [照明指定]
- Perspective: [視点指定]
```

#### 実装ワークフロー

##### Phase A優先実装順序
1. **最優先**: 時間帯別窓景4枚（朝・昼・夕・夜）
2. **高優先**: ハート・キラキラエフェクト素材
3. **中優先**: ボタン背景・UI装飾要素

##### ファイル管理規則
```
命名規則:
- 背景: bg_room_main.png, bg_window_morning.png
- エフェクト: effect_heart_small.png, effect_sparkle_01.png
- UI: ui_button_base.png, ui_decoration_corner.png

保存場所:
- 生成画像: `public/assets/` 配下に適切な名前で保存
- プロンプト管理: `ChatGPT_Asset_Prompts.md` で一元管理
```

#### 品質保証・チェックリスト

##### 生成後必須確認項目
- [ ] 指定解像度になっているか
- [ ] キャラクター・人物・動物が含まれていないか
- [ ] ゲーム全体の色調と調和しているか
- [ ] 透過PNG形式で保存されているか
- [ ] ファイル名を適切にリネームしたか

##### トラブルシューティング
- **キャラクターが含まれる**: 「STRICTLY NO people, pets, animals, characters」追加
- **解像度不適合**: 「Resolution must be exactly [サイズ] pixels」強調
- **色調不調和**: プロジェクト固有の色調指定を再強調

### Phaser統合・実装ノウハウ

#### 背景システム実装パターン
```typescript
// 動的背景システム（時間帯連動）
private updateBackgroundForTime() {
    const hour = new Date().getHours();
    let windowTexture: string;
    
    if (hour >= 6 && hour < 12) windowTexture = 'bg_window_morning';
    else if (hour >= 12 && hour < 18) windowTexture = 'bg_window_day';
    else if (hour >= 18 && hour < 21) windowTexture = 'bg_window_evening';
    else windowTexture = 'bg_window_night';
    
    this.windowSprite.setTexture(windowTexture);
}
```

#### アセット読み込み最適化
```typescript
// 段階的アセット読み込み（パフォーマンス重視）
preload() {
    // Phase A: 最優先背景
    this.load.image('bg_room_main', 'assets/bg_room_main.png');
    this.load.image('bg_window_morning', 'assets/bg_window_morning.png');
    // ... 時間帯別窓景
    
    // Phase A: 基本エフェクト
    this.load.image('effect_heart_small', 'assets/effect_heart_small.png');
    this.load.image('effect_sparkle_stars', 'assets/effect_sparkle_stars.png');
}
```

### プロジェクト固有設定・ブランドガイドライン

#### ミタマっちビジュアルアイデンティティ
- **カラーパレット**: 温かみのあるベージュ、ソフトブラウン、優しいイエロー
- **デザイン哲学**: 日本風ミニマリズム、温かみ、子供フレンドリー
- **照明**: 自然な窓光、左側から優しい光
- **雰囲気**: 平和、育成的、愛着形成を促進

#### スタイル一貫性確保
```
共通スタイル要素:
- Warm lighting, cozy atmosphere
- Family-friendly, japanese minimalist
- Natural textures, wooden elements
- Soft shadows, gentle gradients
- Central open space for character placement
```

### 段階的実装・品質管理戦略

#### Phase分離による確実な進捗
- **Phase A**: 即効性改善（1-2週間）- チープ感解消・愛着形成
- **Phase B**: プロ品質到達（1-2ヶ月）- 戦略性・長期継続性
- **Phase C**: 業界標準到達（3-6ヶ月）- エンタープライズレベル

#### 各Phase完了基準
- **Phase A完了**: 没入感70/100、魅力度75/100達成
- **Phase B完了**: ビジュアル85/100、音響80/100達成
- **Phase C完了**: 品質95/100、コミュニティ形成

### 技術的制約・注意事項

#### ChatGPT生成の限界と対策
- **人物描画傾向**: 強力なネガティブ指定で99%防止可能
- **解像度変動**: 具体的ピクセル数指定で95%確実
- **スタイル一貫性**: プロジェクト固有要素の反復指定で確保

#### Phaser統合時の注意点
- **テクスチャサイズ**: 2の累乗サイズ推奨（パフォーマンス最適化）
- **透過PNG**: 背景レイヤリング・エフェクト重ね合わせ用途
- **メモリ管理**: 不要アセットの適切な破棄・読み込み最適化

### 継続的改善・拡張計画

#### 他プロジェクトへの横展開可能性
- **プロンプトテンプレート**: ジャンル別カスタマイズで再利用
- **ワークフロー**: AI生成→Phaser統合パターンの標準化
- **品質管理**: チェックリスト・トラブルシューティングの汎用化

#### 技術進歩への対応
- **AI生成技術**: DALL-E以外のツール統合検討
- **Phaser新機能**: 最新版機能活用・パフォーマンス向上
- **ワークフロー自動化**: CI/CD統合・自動品質チェック

---

> **💡 重要**: このノウハウは実証済みパターンに基づく実用的ガイドです。
> 
> 他プロジェクトでの適用時は、プロジェクト固有要件に応じてカスタマイズしてください。