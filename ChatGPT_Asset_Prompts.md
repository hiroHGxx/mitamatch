# ミタマっち - ChatGPT画像生成プロンプト集

> **使用方法**: 各プロンプトをコピーしてChatGPTに貼り付け、画像生成を実行
> 
> **保存場所**: 生成した画像は `public/assets/` 配下に保存
> 
> **実装順序**: Phase A → B → C の順で優先度に従って実装

---

## 🎯 技術仕様・共通要件

### 基本仕様
- **解像度**: 800×600px (ゲームキャンバスサイズ)
- **ファイル形式**: PNG (透過対応)
- **重要**: キャラクター・人物・動物は一切含めない
- **用途**: Phaserゲーム背景・エフェクト素材

### ファイル命名規則
```
背景: bg_room_main.png, bg_window_morning.png
エフェクト: effect_heart_small.png, effect_sparkle_01.png
UI: ui_button_base.png, ui_decoration_corner.png
```

---

## 🏠 Phase A: 基本背景セット

### ✅ 1. メイン部屋背景 (完了)
**ファイル名**: `bg_room_main.png`
**現在のファイル**: `ChatGPT Image 2025年7月14日 16_16_45.png`

**使用済みプロンプト**:
```
Create a cozy indoor room background for a pet care game. Requirements:
- Resolution: 800×600 pixels
- Style: Warm, minimalist Japanese interior design
- NO characters, people, pets, or living beings
- Room elements: Wooden flooring, soft lighting, simple furniture
- Color palette: Warm beiges, soft browns, gentle yellows
- Atmosphere: Peaceful, nurturing, child-friendly
- Layout: Open central space for game character placement
- Details: Small potted plants, soft cushions, wooden shelves
- Lighting: Natural window light from the left side
- Perspective: Slight 3/4 view, not completely front-facing
```

### 2. 時間帯別窓景 (4枚セット)

#### 朝の窓景
**ファイル名**: `bg_window_morning.png`
```
Create a window view for morning time in a pet care game:
- Resolution: 200×300 pixels (window portion only)
- Scene: Bright morning sky with soft orange-yellow gradients
- Elements: Distant trees silhouettes, clear sky
- NO people, animals, or characters visible
- Lighting: Fresh morning light, optimistic atmosphere
- Style: Simple, clean, suitable for overlaying on room background
- Format: PNG with transparency for areas outside the window frame
```

#### 昼の窓景
**ファイル名**: `bg_window_day.png`
```
Create a window view for daytime in a pet care game:
- Resolution: 200×300 pixels
- Scene: Clear blue sky with fluffy white clouds
- Elements: Green tree tops, bright natural lighting
- Atmosphere: Energetic, cheerful, peak activity time
- NO living beings visible
- Style: Clean, vibrant colors suitable for overlay
- Format: PNG with transparency
```

#### 夕方の窓景
**ファイル名**: `bg_window_evening.png`
```
Create a window view for evening time in a pet care game:
- Resolution: 200×300 pixels  
- Scene: Sunset sky with warm orange-pink gradients
- Elements: Tree silhouettes, gentle twilight atmosphere
- Lighting: Soft, romantic, calming colors
- NO characters or animals
- Style: Peaceful, suitable for overlay on room background
- Format: PNG with transparency
```

#### 夜の窓景
**ファイル名**: `bg_window_night.png`
```
Create a window view for nighttime in a pet care game:
- Resolution: 200×300 pixels
- Scene: Dark blue night sky with stars and soft moon
- Elements: Distant building lights, peaceful night atmosphere
- Lighting: Gentle moonlight, sleepy ambiance
- NO people or animals visible
- Style: Calm, dreamy, suitable for overlay
- Format: PNG with transparency
```

---

## ✨ Phase A: エフェクト・パーティクル素材

### 3. ハートパーティクル (餌やり用)

#### 小ハート
**ファイル名**: `effect_heart_small.png`
```
Create small heart-shaped particle effects for a pet care game:
- Size: 16×16 pixels each heart
- Create 6 different hearts in one image (arranged in 2×3 grid)
- Colors: Pink, red, soft purple gradients
- Style: Cute, glossy, slightly transparent
- Variations: Normal hearts, sparkly hearts
- Format: PNG with transparency
- Usage: Love/feeding reaction effects
- NO characters or living beings
```

#### 中ハート
**ファイル名**: `effect_heart_medium.png`
```
Create medium heart-shaped particle effects:
- Size: 24×24 pixels each heart
- Create 4 different hearts in one image (arranged in 2×2 grid)
- Colors: Bright pink, warm red, rose gold
- Style: Glossy, animated-ready, semi-transparent
- Variations: Pulsing hearts, floating hearts
- Format: PNG with transparency
- NO living beings or characters
```

### 4. キラキラエフェクト (掃除用)

#### 星キラキラ
**ファイル名**: `effect_sparkle_stars.png`
```
Create star-shaped sparkle effects for a pet care game:
- Multiple star shapes in various sizes (12px, 16px, 20px)
- Colors: Golden yellow, white, light blue sparkles
- Style: Bright, shimmering, magical feeling
- Transparency: Semi-transparent for overlay effects
- Variations: 4-point stars, 6-point stars, cross sparkles
- Arrangement: 8-10 sparkles in one image
- Usage: Cleaning/achievement effects
- NO characters or animals
```

#### ダイヤモンドキラキラ
**ファイル名**: `effect_sparkle_diamonds.png`
```
Create diamond-shaped sparkle effects:
- Diamond and gem shapes in multiple sizes
- Colors: Rainbow sparkles, crystal clear, silver
- Style: Prismatic, light-refracting effects
- Multiple variations in one image (2×4 grid)
- Format: PNG with transparency
- Usage: Special achievement effects
- NO people or living beings
```

---

## 🎮 Phase A: UI装飾要素

### 5. ボタン背景・装飾

#### 基本ボタン背景
**ファイル名**: `ui_button_base.png`
```
Create decorative UI button backgrounds for a pet care game:
- Size: 120×40 pixels each button
- Create 4 different button styles in one image
- Colors: Warm pastels (peach, mint, lavender, cream)
- Style: Neumorphism (soft 3D effect with gentle shadows)
- Elements: Rounded corners, subtle gradients
- NO text, characters, or living beings
- Format: PNG with transparency
- Usage: Care action buttons (feed, clean, play)
```

#### ボタンホバー効果
**ファイル名**: `ui_button_hover.png`
```
Create button hover state effects:
- Size: 120×40 pixels each
- Create 4 hover variations (slightly brighter/glowing versions)
- Style: Soft glow, lifted 3D effect, gentle pulsing feel
- Colors: Slightly brighter versions of base button colors
- Format: PNG with transparency
- NO characters or text
- Usage: Button interaction feedback
```

---

## 🌸 Phase B: 季節・環境バリエーション

### 6. 季節テーマ背景

#### 春の部屋
**ファイル名**: `bg_room_spring.png`
```
Create a spring-themed room interior for a pet care game:
- Base: Similar to main room but with spring elements
- Resolution: 800×600 pixels
- Elements: Cherry blossom petals visible through window
- Decorations: Soft pink and green accents, small flower arrangements
- Atmosphere: Light, airy feeling with pastel color scheme
- Lighting: Fresh, optimistic spring lighting
- NO people, pets, or living creatures
- Style: Consistent with main room design
```

#### 夏の部屋
**ファイル名**: `bg_room_summer.png`
```
Create a summer-themed room interior:
- Resolution: 800×600 pixels
- Atmosphere: Bright, energetic with cooling elements
- Elements: Blue and white accents, small fan, bright sunlight
- Decorations: Fresh, clean summer feeling
- Lighting: Strong, cheerful sunlight streaming through windows
- NO characters, animals, or people
- Style: Maintains room layout but with summer mood
```

#### 秋の部屋
**ファイル名**: `bg_room_autumn.png`
```
Create an autumn-themed room interior:
- Resolution: 800×600 pixels
- Elements: Warm orange and brown accents, falling leaves outside
- Decorations: Cozy autumn elements, warm lighting
- Atmosphere: Comfortable, harvest-time feeling
- Lighting: Golden, warm autumn light
- NO living beings or characters
- Style: Cozy autumn transformation of the base room
```

#### 冬の部屋
**ファイル名**: `bg_room_winter.png`
```
Create a winter-themed room interior:
- Resolution: 800×600 pixels
- Elements: Snow visible outside, warm indoor lighting
- Decorations: Cozy winter elements, soft fabrics, warm colors
- Atmosphere: Snug, comfortable winter feeling
- Lighting: Warm indoor lighting contrasting with cool outside
- NO people, animals, or characters
- Style: Winter comfort version of the base room
```

---

## 🌧️ Phase B: 天候エフェクト

### 7. 天候オーバーレイ

#### 雨の日エフェクト
**ファイル名**: `effect_rain_overlay.png`
```
Create a rainy day window overlay effect:
- Resolution: 800×600 pixels (full room overlay)
- Effect: Rain droplets on window glass, soft gray lighting
- Elements: Subtle puddle reflections visible outside
- Atmosphere: Peaceful, contemplative, cozy indoor mood
- Transparency: Semi-transparent for layering over main background
- Lighting: Soft, diffused gray light
- NO people, animals, or characters
- Style: Realistic rain effect suitable for overlay
```

#### 雪の日エフェクト
**ファイル名**: `effect_snow_overlay.png`
```
Create a snowy day overlay effect:
- Resolution: 800×600 pixels
- Effect: Falling snow outside windows, soft winter lighting
- Elements: Snow accumulation on window sills, gentle snowfall
- Atmosphere: Peaceful, magical winter feeling
- Transparency: Semi-transparent overlay
- Lighting: Soft, cool winter light filtering through
- NO living beings or characters
- Style: Gentle, beautiful snow effect
```

---

## 🎪 Phase B: 高度なエフェクト

### 8. 進化・特別エフェクト

#### 進化光エフェクト
**ファイル名**: `effect_evolution_light.png`
```
Create magical evolution light effects for a pet care game:
- Various sizes of glowing orbs and light particles
- Colors: Golden white, soft rainbow, magical sparkles
- Style: Mystical, transformation-themed effects
- Transparency: Semi-transparent for overlay
- Variations: Swirling lights, ascending particles, glow bursts
- Arrangement: Multiple effects in one image for variety
- NO characters, people, or animals
- Usage: Pet evolution sequence effects
```

#### 祝福エフェクト
**ファイル名**: `effect_celebration.png`
```
Create celebration particle effects:
- Elements: Confetti, streamers, celebration sparkles
- Colors: Bright, festive colors (gold, silver, rainbow)
- Style: Joyful, achievement-celebration themed
- Multiple particle types in one image
- Format: PNG with transparency
- NO people, characters, or living beings
- Usage: Achievement, evolution completion effects
```

---

## 🔧 Phase C: 高品質・専用素材

### 9. 装飾・家具アイテム

#### 家具アイテム
**ファイル名**: `furniture_items.png`
```
Create decorative furniture items for room customization:
- Items: Small cushions, plant pots, lamps, decorative objects
- Style: Consistent with main room aesthetic
- Size: Various sizes suitable for room decoration
- Colors: Warm, harmonious with room palette
- Arrangement: 6-8 items in one image with spacing
- NO characters, people, or animals
- Format: PNG with transparency
- Usage: Room customization elements
```

---

## 📝 使用時の注意点

### 生成後チェックリスト
各画像生成後に確認：
- [ ] 指定解像度になっているか
- [ ] キャラクター・人物・動物が含まれていないか
- [ ] ゲーム全体の色調と調和しているか
- [ ] 透過PNG形式で保存されているか
- [ ] ファイル名を適切にリネームしたか

### 実装優先順序
1. **最優先** (Phase A週1): 時間帯別窓景 4枚
2. **高優先** (Phase A週2): ハート・キラキラエフェクト
3. **中優先** (Phase B): 季節背景・天候エフェクト  
4. **低優先** (Phase C): 装飾・高度エフェクト

### トラブルシューティング
- **キャラクターが含まれる場合**: プロンプトに「STRICTLY NO people, pets, animals, characters」を追加
- **解像度が合わない場合**: 「Resolution must be exactly 800×600 pixels」を強調
- **色調が合わない場合**: 「Color palette: warm beiges, soft browns, gentle yellows」を再指定

---

> **💡 Tips**: 一度に全て生成する必要はありません。実装進捗に合わせて必要な素材から順次生成してください。