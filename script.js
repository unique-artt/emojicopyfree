// =====================================================
// EmojiCopyFree — Emoji data + fuzzy search + copy logic
// Names include platform keywords for long-tail SEO matching
// =====================================================

const emojis = [
  // ---------- Smileys ----------
  { char: "😀", name: "grinning face smiley emoji", cat: "Smileys" },
  { char: "😃", name: "grinning face big eyes smiley", cat: "Smileys" },
  { char: "😄", name: "grinning face smiling eyes happy", cat: "Smileys" },
  { char: "😁", name: "beaming face grin", cat: "Smileys" },
  { char: "😆", name: "grinning squinting face laugh", cat: "Smileys" },
  { char: "😅", name: "grinning face sweat smiley", cat: "Smileys" },
  { char: "🤣", name: "rolling on floor laughing rofl emoji", cat: "Smileys" },
  { char: "😂", name: "face with tears of joy laughing emoji", cat: "Smileys" },
  { char: "🙂", name: "slightly smiling face smiley", cat: "Smileys" },
  { char: "🙃", name: "upside down face smiley", cat: "Smileys" },
  { char: "😉", name: "winking face wink emoji", cat: "Smileys" },
  { char: "😊", name: "smiling face smiling eyes blush emoji", cat: "Smileys" },
  { char: "😇", name: "smiling face halo angel emoji", cat: "Smileys" },
  { char: "🥰", name: "smiling face hearts love emoji", cat: "Smileys" },
  { char: "😍", name: "heart eyes love emoji", cat: "Smileys" },
  { char: "🤩", name: "star struck emoji", cat: "Smileys" },
  { char: "😘", name: "face blowing kiss emoji", cat: "Smileys" },
  { char: "😗", name: "kissing face emoji", cat: "Smileys" },
  { char: "😚", name: "kissing closed eyes emoji", cat: "Smileys" },
  { char: "😙", name: "kissing smiling eyes emoji", cat: "Smileys" },
  { char: "😋", name: "face savoring food yummy emoji", cat: "Smileys" },
  { char: "😛", name: "face tongue emoji", cat: "Smileys" },
  { char: "😜", name: "winking tongue emoji", cat: "Smileys" },
  { char: "🤪", name: "zany face crazy emoji", cat: "Smileys" },
  { char: "😝", name: "squinting tongue emoji", cat: "Smileys" },
  { char: "🤑", name: "money mouth emoji", cat: "Smileys" },
  { char: "🤗", name: "hugging face hug emoji", cat: "Smileys" },
  { char: "🤭", name: "hand over mouth emoji", cat: "Smileys" },
  { char: "🤫", name: "shushing face quiet emoji", cat: "Smileys" },
  { char: "🤔", name: "thinking face emoji", cat: "Smileys" },
  { char: "😐", name: "neutral face emoji", cat: "Smileys" },
  { char: "😑", name: "expressionless face emoji", cat: "Smileys" },
  { char: "😶", name: "face without mouth emoji", cat: "Smileys" },
  { char: "😏", name: "smirking face emoji", cat: "Smileys" },
  { char: "😒", name: "unamused face emoji", cat: "Smileys" },
  { char: "🙄", name: "face rolling eyes emoji", cat: "Smileys" },
  { char: "😬", name: "grimacing face emoji", cat: "Smileys" },
  { char: "😌", name: "relieved face emoji", cat: "Smileys" },
  { char: "😔", name: "pensive face sad emoji", cat: "Smileys" },
  { char: "😪", name: "sleepy face emoji", cat: "Smileys" },
  { char: "🤤", name: "drooling face emoji", cat: "Smileys" },
  { char: "😴", name: "sleeping face sleep emoji", cat: "Smileys" },
  { char: "😷", name: "medical mask face emoji", cat: "Smileys" },
  { char: "🤒", name: "face thermometer sick emoji", cat: "Smileys" },
  { char: "🤕", name: "face head bandage hurt emoji", cat: "Smileys" },
  { char: "🤢", name: "nauseated face sick emoji", cat: "Smileys" },
  { char: "🤮", name: "vomiting face emoji", cat: "Smileys" },
  { char: "🥵", name: "hot face emoji", cat: "Smileys" },
  { char: "🥶", name: "cold face emoji", cat: "Smileys" },
  { char: "😵", name: "dizzy face emoji", cat: "Smileys" },
  { char: "🤯", name: "exploding head mind blown emoji", cat: "Smileys" },
  { char: "🤠", name: "cowboy hat face emoji", cat: "Smileys" },
  { char: "🥳", name: "partying face party emoji", cat: "Smileys" },
  { char: "😎", name: "smiling face sunglasses cool emoji", cat: "Smileys" },
  { char: "🤓", name: "nerd face emoji", cat: "Smileys" },
  { char: "🧐", name: "face monocle emoji", cat: "Smileys" },
  { char: "😕", name: "confused face emoji", cat: "Smileys" },
  { char: "😟", name: "worried face emoji", cat: "Smileys" },
  { char: "🙁", name: "slightly frowning face sad emoji", cat: "Smileys" },
  { char: "😮", name: "face open mouth surprised emoji", cat: "Smileys" },
  { char: "😯", name: "hushed face emoji", cat: "Smileys" },
  { char: "😲", name: "astonished face emoji", cat: "Smileys" },
  { char: "😳", name: "flushed face emoji", cat: "Smileys" },
  { char: "🥺", name: "pleading face please emoji", cat: "Smileys" },
  { char: "😦", name: "frowning open mouth emoji", cat: "Smileys" },
  { char: "😧", name: "anguished face emoji", cat: "Smileys" },
  { char: "😨", name: "fearful face emoji", cat: "Smileys" },
  { char: "😰", name: "anxious sweat emoji", cat: "Smileys" },
  { char: "😥", name: "sad relieved face emoji", cat: "Smileys" },
  { char: "😢", name: "crying face sad emoji", cat: "Smileys" },
  { char: "😭", name: "loudly crying face sad emoji", cat: "Smileys" },
  { char: "😱", name: "face screaming fear emoji", cat: "Smileys" },
  { char: "😖", name: "confounded face emoji", cat: "Smileys" },
  { char: "😣", name: "persevering face emoji", cat: "Smileys" },
  { char: "😞", name: "disappointed face sad emoji", cat: "Smileys" },
  { char: "😓", name: "downcast sweat emoji", cat: "Smileys" },
  { char: "😩", name: "weary face tired emoji", cat: "Smileys" },
  { char: "😫", name: "tired face emoji", cat: "Smileys" },
  { char: "🥱", name: "yawning face emoji", cat: "Smileys" },
  { char: "😤", name: "face steam nose emoji", cat: "Smileys" },
  { char: "😡", name: "pouting face angry emoji", cat: "Smileys" },
  { char: "😠", name: "angry face emoji", cat: "Smileys" },
  { char: "🤬", name: "face symbols mouth cursing emoji", cat: "Smileys" },
  { char: "😈", name: "smiling devil emoji", cat: "Smileys" },
  { char: "👿", name: "angry devil emoji", cat: "Smileys" },
  { char: "💀", name: "skull emoji", cat: "Smileys" },
  { char: "💩", name: "pile of poo emoji", cat: "Smileys" },
  { char: "🤡", name: "clown face emoji", cat: "Smileys" },
  { char: "👻", name: "ghost emoji", cat: "Smileys" },
  { char: "👽", name: "alien emoji", cat: "Smileys" },
  { char: "🤖", name: "robot emoji", cat: "Smileys" },
  
  // ---------- Skin Tones (High Search Volume) ----------
  { char: "👋🏻", name: "waving hand light skin tone emoji", cat: "Hands" },
  { char: "👋🏼", name: "waving hand medium light skin tone emoji", cat: "Hands" },
  { char: "👋🏽", name: "waving hand medium skin tone emoji", cat: "Hands" },
  { char: "👋🏾", name: "waving hand medium dark skin tone emoji", cat: "Hands" },
  { char: "👋🏿", name: "waving hand dark skin tone emoji", cat: "Hands" },
  { char: "👍🏻", name: "thumbs up light skin tone emoji", cat: "Hands" },
  { char: "👍🏼", name: "thumbs up medium light skin tone emoji", cat: "Hands" },
  { char: "👍🏽", name: "thumbs up medium skin tone emoji", cat: "Hands" },
  { char: "👍🏾", name: "thumbs up medium dark skin tone emoji", cat: "Hands" },
  { char: "👍🏿", name: "thumbs up dark skin tone emoji", cat: "Hands" },
  { char: "👎🏻", name: "thumbs down light skin tone emoji", cat: "Hands" },
  { char: "👎🏼", name: "thumbs down medium light skin tone emoji", cat: "Hands" },
  { char: "👎🏽", name: "thumbs down medium skin tone emoji", cat: "Hands" },
  { char: "👎🏾", name: "thumbs down medium dark skin tone emoji", cat: "Hands" },
  { char: "👎🏿", name: "thumbs down dark skin tone emoji", cat: "Hands" },
  { char: "🙏🏻", name: "folded hands light skin tone emoji", cat: "Hands" },
  { char: "🙏🏼", name: "folded hands medium light skin tone emoji", cat: "Hands" },
  { char: "🙏🏽", name: "folded hands medium skin tone emoji", cat: "Hands" },
  { char: "🙏🏾", name: "folded hands medium dark skin tone emoji", cat: "Hands" },
  { char: "🙏🏿", name: "folded hands dark skin tone emoji", cat: "Hands" },
  { char: "💪🏻", name: "flexed biceps light skin tone emoji", cat: "Hands" },
  { char: "💪🏼", name: "flexed biceps medium light skin tone emoji", cat: "Hands" },
  { char: "💪🏽", name: "flexed biceps medium skin tone emoji", cat: "Hands" },
  { char: "💪🏾", name: "flexed biceps medium dark skin tone emoji", cat: "Hands" },
  { char: "💪🏿", name: "flexed biceps dark skin tone emoji", cat: "Hands" },
  { char: "✌🏻", name: "victory hand light skin tone emoji", cat: "Hands" },
  { char: "✌🏼", name: "victory hand medium light skin tone emoji", cat: "Hands" },
  { char: "✌🏽", name: "victory hand medium skin tone emoji", cat: "Hands" },
  { char: "✌🏾", name: "victory hand medium dark skin tone emoji", cat: "Hands" },
  { char: "✌🏿", name: "victory hand dark skin tone emoji", cat: "Hands" },
  { char: "👌🏻", name: "OK hand light skin tone emoji", cat: "Hands" },
  { char: "👌🏼", name: "OK hand medium light skin tone emoji", cat: "Hands" },
  { char: "👌🏽", name: "OK hand medium skin tone emoji", cat: "Hands" },
  { char: "👌🏾", name: "OK hand medium dark skin tone emoji", cat: "Hands" },
  { char: "👌🏿", name: "OK hand dark skin tone emoji", cat: "Hands" },
  { char: "🤝🏻", name: "handshake light skin tone emoji", cat: "Hands" },
  { char: "🤝🏼", name: "handshake medium light skin tone emoji", cat: "Hands" },
  { char: "🤝🏽", name: "handshake medium skin tone emoji", cat: "Hands" },
  { char: "🤝🏾", name: "handshake medium dark skin tone emoji", cat: "Hands" },
  { char: "🤝🏿", name: "handshake dark skin tone emoji", cat: "Hands" },
  { char: "👏🏻", name: "clapping hands light skin tone emoji", cat: "Hands" },
  { char: "👏🏼", name: "clapping hands medium light skin tone emoji", cat: "Hands" },
  { char: "👏🏽", name: "clapping hands medium skin tone emoji", cat: "Hands" },
  { char: "👏🏾", name: "clapping hands medium dark skin tone emoji", cat: "Hands" },
  { char: "👏🏿", name: "clapping hands dark skin tone emoji", cat: "Hands" },
  { char: "🙌🏻", name: "raising hands light skin tone emoji", cat: "Hands" },
  { char: "🙌🏼", name: "raising hands medium light skin tone emoji", cat: "Hands" },
  { char: "🙌🏽", name: "raising hands medium skin tone emoji", cat: "Hands" },
  { char: "🙌🏾", name: "raising hands medium dark skin tone emoji", cat: "Hands" },
  { char: "🙌🏿", name: "raising hands dark skin tone emoji", cat: "Hands" },

  // ---------- Flags (High Search Volume for Country Queries) ----------
  { char: "🇺🇸", name: "United States flag emoji USA", cat: "Flags" },
  { char: "🇬🇧", name: "United Kingdom flag emoji UK Britain", cat: "Flags" },
  { char: "🇨🇦", name: "Canada flag emoji", cat: "Flags" },
  { char: "🇦🇺", name: "Australia flag emoji", cat: "Flags" },
  { char: "🇮🇳", name: "India flag emoji", cat: "Flags" },
  { char: "🇯🇵", name: "Japan flag emoji", cat: "Flags" },
  { char: "🇨🇳", name: "China flag emoji", cat: "Flags" },
  { char: "🇩🇪", name: "Germany flag emoji", cat: "Flags" },
  { char: "🇫🇷", name: "France flag emoji", cat: "Flags" },
  { char: "🇮🇹", name: "Italy flag emoji", cat: "Flags" },
  { char: "🇪🇸", name: "Spain flag emoji", cat: "Flags" },
  { char: "🇧🇷", name: "Brazil flag emoji", cat: "Flags" },
  { char: "🇲🇽", name: "Mexico flag emoji", cat: "Flags" },
  { char: "🇰🇷", name: "South Korea flag emoji", cat: "Flags" },
  { char: "🇷🇺", name: "Russia flag emoji", cat: "Flags" },
  { char: "🇿🇦", name: "South Africa flag emoji", cat: "Flags" },
  { char: "🇳🇬", name: "Nigeria flag emoji", cat: "Flags" },
  { char: "🇪🇬", name: "Egypt flag emoji", cat: "Flags" },
  { char: "🇸🇦", name: "Saudi Arabia flag emoji", cat: "Flags" },
  { char: "🇦🇪", name: "United Arab Emirates flag emoji UAE", cat: "Flags" },
  { char: "🇸🇬", name: "Singapore flag emoji", cat: "Flags" },
  { char: "🇲🇾", name: "Malaysia flag emoji", cat: "Flags" },
  { char: "🇮🇩", name: "Indonesia flag emoji", cat: "Flags" },
  { char: "🇵🇭", name: "Philippines flag emoji", cat: "Flags" },
  { char: "🇹🇭", name: "Thailand flag emoji", cat: "Flags" },
  { char: "🇻🇳", name: "Vietnam flag emoji", cat: "Flags" },
  { char: "🇵🇰", name: "Pakistan flag emoji", cat: "Flags" },
  { char: "🇧🇩", name: "Bangladesh flag emoji", cat: "Flags" },
  { char: "🇳🇱", name: "Netherlands flag emoji", cat: "Flags" },
  { char: "🇧🇪", name: "Belgium flag emoji", cat: "Flags" },
  { char: "🇨🇭", name: "Switzerland flag emoji", cat: "Flags" },
  { char: "🇦🇹", name: "Austria flag emoji", cat: "Flags" },
  { char: "🇸🇪", name: "Sweden flag emoji", cat: "Flags" },
  { char: "🇳🇴", name: "Norway flag emoji", cat: "Flags" },
  { char: "🇩🇰", name: "Denmark flag emoji", cat: "Flags" },
  { char: "🇫🇮", name: "Finland flag emoji", cat: "Flags" },
  { char: "🇵🇱", name: "Poland flag emoji", cat: "Flags" },
  { char: "🇵🇹", name: "Portugal flag emoji", cat: "Flags" },
  { char: "🇬🇷", name: "Greece flag emoji", cat: "Flags" },
  { char: "🇹🇷", name: "Turkey flag emoji", cat: "Flags" },
  { char: "🇮🇱", name: "Israel flag emoji", cat: "Flags" },
  { char: "🇮🇪", name: "Ireland flag emoji", cat: "Flags" },
  { char: "🇳🇿", name: "New Zealand flag emoji", cat: "Flags" },
  { char: "🇦🇷", name: "Argentina flag emoji", cat: "Flags" },
  { char: "🇨🇴", name: "Colombia flag emoji", cat: "Flags" },
  { char: "🇨🇱", name: "Chile flag emoji", cat: "Flags" },
  { char: "🇵🇪", name: "Peru flag emoji", cat: "Flags" },
  { char: "🇺🇦", name: "Ukraine flag emoji", cat: "Flags" },
  { char: "🇷🇴", name: "Romania flag emoji", cat: "Flags" },
  { char: "🇨🇿", name: "Czech Republic flag emoji Czechia", cat: "Flags" },
  { char: "🇭🇺", name: "Hungary flag emoji", cat: "Flags" },

  // ---------- Unicode 17.0 New Emojis ----------
  { char: "🥲", name: "smiling face with tear emoji", cat: "Smileys" },
  { char: "🫠", name: "melting face emoji", cat: "Smileys" },
  { char: "🫢", name: "face with open eyes and hand over mouth emoji", cat: "Smileys" },
  { char: "🫣", name: "face with peeking eye emoji", cat: "Smileys" },
  { char: "🫡", name: "saluting face emoji", cat: "Smileys" },
  { char: "🫥", name: "dotted line face emoji", cat: "Smileys" },
  { char: "🫤", name: "face with diagonal mouth emoji", cat: "Smileys" },
  { char: "🥹", name: "face holding back tears emoji", cat: "Smileys" },
  { char: "🫨", name: "shaking face emoji", cat: "Smileys" },
  { char: "🫸", name: "rightwards pushing hand emoji", cat: "Hands" },
  { char: "🫷", name: "leftwards pushing hand emoji", cat: "Hands" },
  { char: "🫰", name: "hand with index finger and thumb crossed emoji", cat: "Hands" },
  { char: "🫶", name: "heart hands emoji", cat: "Hands" },
  { char: "🫦", name: "biting lip emoji", cat: "Smileys" },
  { char: "🫅", name: "person with crown emoji", cat: "Smileys" },

  // ---------- Unicode 18.0 New Emojis (Early Mover Advantage) ----------
  { char: "🪿", name: "goose emoji", cat: "Animals" },
  { char: "🪼", name: "jellyfish emoji", cat: "Animals" },
  { char: "🪻", name: "hyacinth flower emoji", cat: "Flowers" },
  { char: "🪭", name: "folding hand fan emoji", cat: "Objects" },
  { char: "🪮", name: "hair pick emoji", cat: "Objects" },
  { char: "🪇", name: "maracas emoji", cat: "Objects" },
  { char: "🪈", name: "flute emoji", cat: "Objects" },
  { char: "🪯", name: "khanda emoji", cat: "Symbols" },
  { char: "🛜", name: "wireless emoji", cat: "Symbols" },
  { char: "🪾", name: "leafless tree emoji", cat: "Flowers" },
  { char: "🫆", name: "fingerprint emoji", cat: "Objects" },
  { char: "🫜", name: "root vegetable emoji", cat: "Food" },
  { char: "🫟", name: "splatter emoji", cat: "Symbols" },

  // ---------- More Animals ----------
  { char: "🦦", name: "otter emoji", cat: "Animals" },
  { char: "🦥", name: "sloth emoji", cat: "Animals" },
  { char: "🦨", name: "skunk emoji", cat: "Animals" },
  { char: "🦩", name: "flamingo emoji", cat: "Animals" },
  { char: "🦫", name: "beaver emoji", cat: "Animals" },
  { char: "🦭", name: "seal emoji", cat: "Animals" },
  { char: "🦬", name: "bison emoji", cat: "Animals" },
  { char: "🦣", name: "mammoth emoji", cat: "Animals" },
  { char: "🦤", name: "dodo emoji", cat: "Animals" },
  { char: "🪶", name: "feather emoji", cat: "Animals" },
  { char: "🦔", name: "hedgehog emoji", cat: "Animals" },
  { char: "🐿️", name: "chipmunk emoji", cat: "Animals" },
  { char: "🦔", name: "hedgehog emoji", cat: "Animals" },
  { char: "🪲", name: "beetle emoji", cat: "Animals" },
  { char: "🪳", name: "cockroach emoji", cat: "Animals" },
  { char: "🪰", name: "fly emoji", cat: "Animals" },
  { char: "🪱", name: "worm emoji", cat: "Animals" },
  { char: "🦠", name: "microbe emoji", cat: "Animals" },
  { char: "🪸", name: "coral emoji", cat: "Animals" },
  { char: "🪼", name: "jellyfish emoji", cat: "Animals" },

  // ---------- More Food ----------
  { char: "🫒", name: "olive emoji", cat: "Food" },
  { char: "🫘", name: "beans emoji", cat: "Food" },
  { char: "🫗", name: "pouring liquid emoji", cat: "Food" },
  { char: "🫙", name: "jar emoji", cat: "Food" },
  { char: "🫚", name: "ginger emoji", cat: "Food" },
  { char: "🫛", name: "pea pod emoji", cat: "Food" },
  { char: "🫓", name: "flatbread emoji", cat: "Food" },
  { char: "🫔", name: "tamale emoji", cat: "Food" },
  { char: "🫕", name: "fondue emoji", cat: "Food" },
  { char: "🫖", name: "teapot emoji", cat: "Food" },
  { char: "🧋", name: "bubble tea emoji boba", cat: "Food" },
  { char: "🧉", name: "mate drink emoji", cat: "Food" },
  { char: "🧊", name: "ice cube emoji", cat: "Food" },
  { char: "🥠", name: "fortune cookie emoji", cat: "Food" },
  { char: "🥡", name: "takeout box emoji", cat: "Food" },

  // ---------- More Travel & Places ----------
  { char: "🛖", name: "hut emoji", cat: "Travel" },
  { char: "🛻", name: "pickup truck emoji", cat: "Travel" },
  { char: "🛼", name: "roller skate emoji", cat: "Travel" },
  { char: "🛝", name: "playground slide emoji", cat: "Travel" },
  { char: "🛞", name: "wheel emoji", cat: "Travel" },
  { char: "🛟", name: "ring buoy emoji", cat: "Travel" },
  { char: "🪝", name: "hook emoji", cat: "Travel" },
  { char: "🪜", name: "ladder emoji", cat: "Travel" },
  { char: "🪩", name: "mirror ball emoji disco", cat: "Travel" },
  { char: "🪫", name: "low battery emoji", cat: "Travel" },
  { char: "🪬", name: "hamsa emoji", cat: "Travel" },
  { char: "🪭", name: "folding hand fan emoji", cat: "Travel" },
  { char: "🪮", name: "hair pick emoji", cat: "Travel" },
  { char: "🪯", name: "khanda emoji", cat: "Travel" },
  { char: "🛜", name: "wireless emoji", cat: "Travel" },

  // ---------- More Objects ----------
  { char: "🪃", name: "boomerang emoji", cat: "Objects" },
  { char: "🪄", name: "magic wand emoji", cat: "Objects" },
  { char: "🪅", name: "piñata emoji", cat: "Objects" },
  { char: "🪆", name: "nesting dolls emoji", cat: "Objects" },
  { char: "🪐", name: "ringed planet emoji Saturn", cat: "Objects" },
  { char: "🪑", name: "chair emoji", cat: "Objects" },
  { char: "🪒", name: "razor emoji", cat: "Objects" },
  { char: "🪓", name: "axe emoji", cat: "Objects" },
  { char: "🪔", name: "diya lamp emoji", cat: "Objects" },
  { char: "🪕", name: "banjo emoji", cat: "Objects" },
  { char: "🪖", name: "military helmet emoji", cat: "Objects" },
  { char: "🪗", name: "accordion emoji", cat: "Objects" },
  { char: "🪘", name: "long drum emoji", cat: "Objects" },
  { char: "🪙", name: "coin emoji", cat: "Objects" },
  { char: "🪚", name: "carpentry saw emoji", cat: "Objects" },
  { char: "🪛", name: "screwdriver emoji", cat: "Objects" },
  { char: "🪜", name: "ladder emoji", cat: "Objects" },
  { char: "🪞", name: "mirror emoji", cat: "Objects" },
  { char: "🪟", name: "window emoji", cat: "Objects" },
  { char: "🪠", name: "plunger emoji", cat: "Objects" },
  { char: "🪡", name: "sewing needle emoji", cat: "Objects" },
  { char: "🪢", name: "knot emoji", cat: "Objects" },
  { char: "🪣", name: "bucket emoji", cat: "Objects" },
  { char: "🪤", name: "mouse trap emoji", cat: "Objects" },
  { char: "🪥", name: "toothbrush emoji", cat: "Objects" },
  { char: "🪦", name: "headstone emoji", cat: "Objects" },
  { char: "🪧", name: "placard emoji", cat: "Objects" },
  { char: "🪨", name: "rock emoji", cat: "Objects" },
  { char: "🪰", name: "fly emoji", cat: "Objects" },
  { char: "🪱", name: "worm emoji", cat: "Objects" },
  { char: "🪲", name: "beetle emoji", cat: "Objects" },
  { char: "🪳", name: "cockroach emoji", cat: "Objects" },
  { char: "🪴", name: "potted plant emoji", cat: "Objects" },
  { char: "🪵", name: "wood emoji", cat: "Objects" },
  { char: "🪶", name: "feather emoji", cat: "Objects" },
  { char: "🪷", name: "lotus flower emoji", cat: "Objects" },
  { char: "🪸", name: "coral emoji", cat: "Objects" },
  { char: "🪹", name: "empty nest emoji", cat: "Objects" },
  { char: "🪺", name: "nest with eggs emoji", cat: "Objects" },
  { char: "🫎", name: "moose emoji", cat: "Animals" },
  { char: "🫏", name: "donkey emoji", cat: "Animals" },
  { char: "🫍", name: "whale emoji", cat: "Animals" },
  { char: "🫐", name: "blueberries emoji", cat: "Food" },
  { char: "🫑", name: "bell pepper emoji", cat: "Food" },
  { char: "🫒", name: "olive emoji", cat: "Food" },
  { char: "🫓", name: "flatbread emoji", cat: "Food" },
  { char: "🫔", name: "tamale emoji", cat: "Food" },
  { char: "🫕", name: "fondue emoji", cat: "Food" },
  { char: "🫖", name: "teapot emoji", cat: "Food" },
  
  // ---------- Hearts & Love ----------
  { char: "🩷", name: "pink heart emoji", cat: "Hearts", usage: "Use for crushes, cuteness, or playful love. Softer and more girly than ❤️. Common in K-pop fan posts, cute content, and messages to a crush." },
  { char: "🩵", name: "light blue heart emoji", cat: "Hearts", usage: "Use for calm, trust, or a gentle vibe. Softer than 💙. Common in aesthetic posts, peaceful content, and friendly messages." },
  { char: "🩶", name: "grey heart emoji", cat: "Hearts", usage: "Use for neutrality, indifference, or a subtle aesthetic. Common in minimal posts, moody content, and 'I don't know how I feel' moments." },
  { char: "❤️", name: "red heart love emoji for whatsapp facebook instagram", cat: "Hearts", usage: "Use for love, affection, or strong agreement. On WhatsApp and Instagram, it's the most common way to react to a message you love. In text, ❤️ often means 'I love this' or 'I agree.'" },
  { char: "🧡", name: "orange heart emoji", cat: "Hearts", usage: "Use for friendship, warmth, or autumn vibes. Less intense than ❤️. Common in friendly messages and fall-themed posts." },
  { char: "💛", name: "yellow heart emoji", cat: "Hearts", usage: "Use for friendship, happiness, or platonic love. Common in messages to friends and cheerful content. Not romantic." },
  { char: "💚", name: "green heart emoji", cat: "Hearts", usage: "Use for nature, health, or jealousy. Common in environmental posts and wellness content. Also used for 'green with envy.'" },
  { char: "💙", name: "blue heart emoji", cat: "Hearts", usage: "Use for trust, loyalty, or calm. Common in friendship messages, sports team support, and peaceful content." },
  { char: "💜", name: "purple heart emoji", cat: "Hearts", usage: "Use for BTS ARMY, K-pop fandom, or uniqueness. Common in K-pop fan posts and 'one of a kind' content." },
  { char: "🖤", name: "black heart emoji", cat: "Hearts", usage: "Use for dark aesthetics, goth vibes, or deep love. Common in alternative fashion posts, moody content, and 'I love you deeply.'" },
  { char: "🤍", name: "white heart emoji", cat: "Hearts", usage: "Use for purity, peace, or new beginnings. Common in minimal aesthetic posts, wedding content, and calming messages." },
  { char: "🤎", name: "brown heart emoji", cat: "Hearts", usage: "Use for warmth, comfort, or skin tone representation. Common in cozy content and messages celebrating diversity." },
  { char: "💔", name: "broken heart sad emoji", cat: "Hearts", usage: "Use after a breakup, disappointment, or bad news. Common in sad captions and memes about heartbreak. Not for minor annoyances — use 😞 for those." },
  { char: "❣️", name: "heart exclamation emoji", cat: "Hearts", usage: "Use for emphasis — 'I really mean this.' Common in strong declarations of love and important messages." },
  { char: "💕", name: "two hearts love emoji", cat: "Hearts", usage: "Use for friendship, romance, or a close bond. Common in captions about best friends, couples, and family. Softer and less intense than ❤️." },
  { char: "💞", name: "revolving hearts emoji", cat: "Hearts", usage: "Use for mutual love, new relationships, or 'we're in this together.' Common in couple posts and anniversary content." },
  { char: "💓", name: "beating heart emoji", cat: "Hearts", usage: "Use for excitement, nervousness, or a racing heart. Common in 'I'm so excited' messages and crush content." },
  { char: "💗", name: "growing heart emoji", cat: "Hearts", usage: "Use for growing love, personal growth, or appreciation. Common in relationship milestones and self-love posts." },
  { char: "💖", name: "sparkling heart love emoji", cat: "Hearts", usage: "Use when something is extra special or exciting. Common on Instagram posts about new relationships, gifts, or happy news. More enthusiastic than ❤️." },
  { char: "💘", name: "heart arrow cupid emoji", cat: "Hearts", usage: "Use for crushes, first love, or Valentine's Day. The arrow means 'struck by love.' Common in romantic posts and Valentine's Day captions." },
  { char: "💝", name: "heart ribbon gift emoji", cat: "Hearts", usage: "Use for gifts, special occasions, or 'you're a gift.' Common in birthday posts, Valentine's Day, and appreciation messages." },
  { char: "💟", name: "heart decoration emoji", cat: "Hearts", usage: "Use for decoration, love themes, or aesthetic posts. Common in cute content and romantic edits." },
  { char: "♥️", name: "heart suit emoji", cat: "Hearts", usage: "Use for card games, love, or Valentine's Day. Common in poker content, casino posts, and romantic messages." },
  { char: "💋", name: "kiss mark lips emoji", cat: "Hearts", usage: "Use for flirty or romantic messages. Common in captions for selfies, date nights, and Valentine's Day. More playful than ❤️." },
  { char: "💌", name: "love letter emoji", cat: "Hearts", usage: "Use for love letters, romantic messages, or 'I wrote you something.' Common in Valentine's Day content and long-distance relationship posts." },

  // ---------- Hands & Gestures ----------
  { char: "👍", name: "thumbs up like emoji for facebook instagram whatsapp", cat: "Hands" },
  { char: "👎", name: "thumbs down dislike emoji", cat: "Hands" },
  { char: "👌", name: "ok hand emoji", cat: "Hands" },
  { char: "✌️", name: "victory hand peace emoji", cat: "Hands" },
  { char: "🤞", name: "crossed fingers luck emoji", cat: "Hands" },
  { char: "🤟", name: "love you gesture emoji", cat: "Hands" },
  { char: "🤘", name: "rock on emoji", cat: "Hands" },
  { char: "🤙", name: "call me hand emoji", cat: "Hands" },
  { char: "👈", name: "point left emoji", cat: "Hands" },
  { char: "👉", name: "point right emoji", cat: "Hands" },
  { char: "👆", name: "point up emoji", cat: "Hands" },
  { char: "👇", name: "point down emoji", cat: "Hands" },
  { char: "☝️", name: "index up emoji", cat: "Hands" },
  { char: "✋", name: "raised hand emoji", cat: "Hands" },
  { char: "🤚", name: "raised back hand emoji", cat: "Hands" },
  { char: "🖐️", name: "hand fingers splayed emoji", cat: "Hands" },
  { char: "🖖", name: "vulcan salute spock emoji", cat: "Hands" },
  { char: "👋", name: "waving hand hello emoji", cat: "Hands" },
  { char: "🤝", name: "handshake emoji", cat: "Hands" },
  { char: "🙏", name: "folded hands pray please emoji", cat: "Hands" },
  { char: "✍️", name: "writing hand emoji", cat: "Hands" },
  { char: "💪", name: "flexed biceps strong emoji", cat: "Hands" },
  { char: "👏", name: "clapping hands emoji", cat: "Hands" },
  { char: "🙌", name: "raising hands celebrate emoji", cat: "Hands" },
  { char: "👐", name: "open hands emoji", cat: "Hands" },
  { char: "🤲", name: "palms up emoji", cat: "Hands" },
  { char: "🤜", name: "right fist emoji", cat: "Hands" },
  { char: "🤛", name: "left fist emoji", cat: "Hands" },
  { char: "✊", name: "raised fist emoji", cat: "Hands" },
  { char: "👊", name: "fist bump emoji", cat: "Hands" },

  // ---------- Animals ----------
  { char: "🐶", name: "dog face puppy emoji", cat: "Animals" },
  { char: "🐱", name: "cat face kitten emoji", cat: "Animals" },
  { char: "🐭", name: "mouse face emoji", cat: "Animals" },
  { char: "🐹", name: "hamster emoji", cat: "Animals" },
  { char: "🐰", name: "rabbit face bunny emoji", cat: "Animals" },
  { char: "🦊", name: "fox emoji", cat: "Animals" },
  { char: "🐻", name: "bear emoji", cat: "Animals" },
  { char: "🐼", name: "panda emoji", cat: "Animals" },
  { char: "🐨", name: "koala emoji", cat: "Animals" },
  { char: "🐯", name: "tiger face emoji", cat: "Animals" },
  { char: "🦁", name: "lion emoji", cat: "Animals" },
  { char: "🐮", name: "cow face emoji", cat: "Animals" },
  { char: "🐷", name: "pig face emoji", cat: "Animals" },
  { char: "🐸", name: "frog emoji", cat: "Animals" },
  { char: "🐵", name: "monkey face emoji", cat: "Animals" },
  { char: "🐔", name: "chicken emoji", cat: "Animals" },
  { char: "🐧", name: "penguin emoji", cat: "Animals" },
  { char: "🐦", name: "bird emoji", cat: "Animals" },
  { char: "🐤", name: "baby chick emoji", cat: "Animals" },
  { char: "🦆", name: "duck emoji", cat: "Animals" },
  { char: "🦅", name: "eagle emoji", cat: "Animals" },
  { char: "🦉", name: "owl emoji", cat: "Animals" },
  { char: "🦇", name: "bat emoji", cat: "Animals" },
  { char: "🐺", name: "wolf emoji", cat: "Animals" },
  { char: "🐗", name: "boar emoji", cat: "Animals" },
  { char: "🐴", name: "horse face emoji", cat: "Animals" },
  { char: "🦄", name: "unicorn emoji", cat: "Animals" },
  { char: "🐝", name: "honeybee bee emoji", cat: "Animals" },
  { char: "🐛", name: "bug emoji", cat: "Animals" },
  { char: "🦋", name: "butterfly emoji", cat: "Animals" },
  { char: "🐌", name: "snail emoji", cat: "Animals" },
  { char: "🐞", name: "ladybug emoji", cat: "Animals" },
  { char: "🐜", name: "ant emoji", cat: "Animals" },
  { char: "🦗", name: "cricket emoji", cat: "Animals" },
  { char: "🕷️", name: "spider emoji", cat: "Animals" },
  { char: "🐢", name: "turtle emoji", cat: "Animals" },
  { char: "🐍", name: "snake emoji", cat: "Animals" },
  { char: "🦎", name: "lizard emoji", cat: "Animals" },
  { char: "🐙", name: "octopus emoji", cat: "Animals" },
  { char: "🦑", name: "squid emoji", cat: "Animals" },
  { char: "🦐", name: "shrimp emoji", cat: "Animals" },
  { char: "🦀", name: "crab emoji", cat: "Animals" },
  { char: "🐡", name: "blowfish emoji", cat: "Animals" },
  { char: "🐠", name: "tropical fish emoji", cat: "Animals" },
  { char: "🐟", name: "fish emoji", cat: "Animals" },
  { char: "🐬", name: "dolphin emoji", cat: "Animals" },
  { char: "🐳", name: "spouting whale emoji", cat: "Animals" },
  { char: "🦈", name: "shark emoji", cat: "Animals" },
  { char: "🐊", name: "crocodile emoji", cat: "Animals" },
  { char: "🐅", name: "tiger emoji", cat: "Animals" },
  { char: "🐆", name: "leopard emoji", cat: "Animals" },
  { char: "🦓", name: "zebra emoji", cat: "Animals" },
  { char: "🦍", name: "gorilla emoji", cat: "Animals" },
  { char: "🐘", name: "elephant emoji", cat: "Animals" },
  { char: "🦏", name: "rhinoceros emoji", cat: "Animals" },
  { char: "🐪", name: "camel emoji", cat: "Animals" },
  { char: "🦒", name: "giraffe emoji", cat: "Animals" },
  { char: "🐄", name: "cow emoji", cat: "Animals" },
  { char: "🐎", name: "horse emoji", cat: "Animals" },
  { char: "🐖", name: "pig emoji", cat: "Animals" },
  { char: "🐑", name: "sheep emoji", cat: "Animals" },
  { char: "🐕", name: "dog emoji", cat: "Animals" },
  { char: "🐈", name: "cat emoji", cat: "Animals" },
  { char: "🐓", name: "rooster emoji", cat: "Animals" },
  { char: "🦃", name: "turkey emoji", cat: "Animals" },

  // ---------- Flowers & Nature ----------
  { char: "🌸", name: "cherry blossom flower emoji", cat: "Flowers" },
  { char: "💮", name: "white flower emoji", cat: "Flowers" },
  { char: "🏵️", name: "rosette flower emoji", cat: "Flowers" },
  { char: "🌹", name: "rose flower love emoji", cat: "Flowers" },
  { char: "🥀", name: "wilted flower emoji", cat: "Flowers" },
  { char: "🌺", name: "hibiscus flower emoji", cat: "Flowers" },
  { char: "🌻", name: "sunflower flower emoji", cat: "Flowers" },
  { char: "🌼", name: "blossom flower emoji", cat: "Flowers" },
  { char: "🌷", name: "tulip flower emoji", cat: "Flowers" },
  { char: "🌱", name: "seedling plant emoji", cat: "Flowers" },
  { char: "🪴", name: "potted plant emoji", cat: "Flowers" },
  { char: "🌲", name: "evergreen tree emoji", cat: "Flowers" },
  { char: "🌳", name: "deciduous tree emoji", cat: "Flowers" },
  { char: "🌴", name: "palm tree emoji", cat: "Flowers" },
  { char: "🌵", name: "cactus emoji", cat: "Flowers" },
  { char: "🌾", name: "sheaf of rice emoji", cat: "Flowers" },
  { char: "🌿", name: "herb plant emoji", cat: "Flowers" },
  { char: "☘️", name: "shamrock emoji", cat: "Flowers" },
  { char: "🍀", name: "four leaf clover luck emoji", cat: "Flowers" },
  { char: "🍁", name: "maple leaf emoji", cat: "Flowers" },
  { char: "🍂", name: "fallen leaf emoji", cat: "Flowers" },
  { char: "🍃", name: "leaf fluttering emoji", cat: "Flowers" },
  { char: "🍄", name: "mushroom emoji", cat: "Flowers" },
  { char: "🌰", name: "chestnut emoji", cat: "Flowers" },

  // ---------- Food ----------
  { char: "🍎", name: "red apple fruit emoji", cat: "Food" },
  { char: "🍐", name: "pear fruit emoji", cat: "Food" },
  { char: "🍊", name: "tangerine orange fruit emoji", cat: "Food" },
  { char: "🍋", name: "lemon fruit emoji", cat: "Food" },
  { char: "🍌", name: "banana fruit emoji", cat: "Food" },
  { char: "🍉", name: "watermelon fruit emoji", cat: "Food" },
  { char: "🍇", name: "grapes fruit emoji", cat: "Food" },
  { char: "🍓", name: "strawberry fruit emoji", cat: "Food" },
  { char: "🫐", name: "blueberries fruit emoji", cat: "Food" },
  { char: "🍈", name: "melon fruit emoji", cat: "Food" },
  { char: "🍒", name: "cherries fruit emoji", cat: "Food" },
  { char: "🍑", name: "peach fruit emoji", cat: "Food" },
  { char: "🥭", name: "mango fruit emoji", cat: "Food" },
  { char: "🍍", name: "pineapple fruit emoji", cat: "Food" },
  { char: "🥥", name: "coconut fruit emoji", cat: "Food" },
  { char: "🥝", name: "kiwi fruit emoji", cat: "Food" },
  { char: "🍅", name: "tomato vegetable emoji", cat: "Food" },
  { char: "🍆", name: "eggplant vegetable emoji", cat: "Food" },
  { char: "🥑", name: "avocado fruit emoji", cat: "Food" },
  { char: "🥦", name: "broccoli vegetable emoji", cat: "Food" },
  { char: "🥬", name: "leafy green vegetable emoji", cat: "Food" },
  { char: "🥒", name: "cucumber vegetable emoji", cat: "Food" },
  { char: "🌶️", name: "hot pepper spicy emoji", cat: "Food" },
  { char: "🌽", name: "corn vegetable emoji", cat: "Food" },
  { char: "🥕", name: "carrot vegetable emoji", cat: "Food" },
  { char: "🧄", name: "garlic emoji", cat: "Food" },
  { char: "🧅", name: "onion emoji", cat: "Food" },
  { char: "🥔", name: "potato emoji", cat: "Food" },
  { char: "🍠", name: "sweet potato emoji", cat: "Food" },
  { char: "🥐", name: "croissant bread emoji", cat: "Food" },
  { char: "🥯", name: "bagel bread emoji", cat: "Food" },
  { char: "🍞", name: "bread emoji", cat: "Food" },
  { char: "🥖", name: "baguette bread emoji", cat: "Food" },
  { char: "🧀", name: "cheese emoji", cat: "Food" },
  { char: "🥚", name: "egg emoji", cat: "Food" },
  { char: "🍳", name: "cooking fried egg emoji", cat: "Food" },
  { char: "🥞", name: "pancakes breakfast emoji", cat: "Food" },
  { char: "🧇", name: "waffle breakfast emoji", cat: "Food" },
  { char: "🥓", name: "bacon emoji", cat: "Food" },
  { char: "🍔", name: "hamburger burger fast food emoji", cat: "Food" },
  { char: "🍟", name: "fries fast food emoji", cat: "Food" },
  { char: "🍕", name: "pizza fast food emoji", cat: "Food" },
  { char: "🌭", name: "hot dog fast food emoji", cat: "Food" },
  { char: "🥪", name: "sandwich emoji", cat: "Food" },
  { char: "🌮", name: "taco mexican food emoji", cat: "Food" },
  { char: "🌯", name: "burrito mexican food emoji", cat: "Food" },
  { char: "🥙", name: "stuffed flatbread emoji", cat: "Food" },
  { char: "🍜", name: "ramen noodles emoji", cat: "Food" },
  { char: "🍝", name: "spaghetti pasta emoji", cat: "Food" },
  { char: "🍣", name: "sushi japanese food emoji", cat: "Food" },
  { char: "🍱", name: "bento japanese food emoji", cat: "Food" },
  { char: "🍤", name: "fried shrimp emoji", cat: "Food" },
  { char: "🍙", name: "rice ball japanese food emoji", cat: "Food" },
  { char: "🍚", name: "rice emoji", cat: "Food" },
  { char: "🍛", name: "curry rice emoji", cat: "Food" },
  { char: "🍦", name: "ice cream dessert emoji", cat: "Food" },
  { char: "🍧", name: "shaved ice dessert emoji", cat: "Food" },
  { char: "🍨", name: "ice cream bowl dessert emoji", cat: "Food" },
  { char: "🍩", name: "donut dessert emoji", cat: "Food" },
  { char: "🍪", name: "cookie dessert emoji", cat: "Food" },
  { char: "🎂", name: "birthday cake emoji", cat: "Food" },
  { char: "🍰", name: "shortcake dessert emoji", cat: "Food" },
  { char: "🧁", name: "cupcake dessert emoji", cat: "Food" },
  { char: "🍫", name: "chocolate candy emoji", cat: "Food" },
  { char: "🍬", name: "candy sweet emoji", cat: "Food" },
  { char: "🍭", name: "lollipop candy emoji", cat: "Food" },
  { char: "🍯", name: "honey emoji", cat: "Food" },
  { char: "☕", name: "coffee drink emoji", cat: "Food" },
  { char: "🍵", name: "tea drink emoji", cat: "Food" },
  { char: "🍺", name: "beer drink emoji", cat: "Food" },
  { char: "🍻", name: "beers cheers drink emoji", cat: "Food" },
  { char: "🥂", name: "clinking glasses cheers emoji", cat: "Food" },
  { char: "🍷", name: "wine drink emoji", cat: "Food" },
  { char: "🥤", name: "cup straw drink emoji", cat: "Food" },
  { char: "🧃", name: "juice box drink emoji", cat: "Food" },

  // ---------- Travel & Places ----------
  { char: "🚗", name: "car vehicle emoji", cat: "Travel" },
  { char: "🚕", name: "taxi vehicle emoji", cat: "Travel" },
  { char: "🚙", name: "SUV vehicle emoji", cat: "Travel" },
  { char: "🚌", name: "bus vehicle emoji", cat: "Travel" },
  { char: "🚎", name: "trolleybus vehicle emoji", cat: "Travel" },
  { char: "🏎️", name: "race car vehicle emoji", cat: "Travel" },
  { char: "🚓", name: "police car vehicle emoji", cat: "Travel" },
  { char: "🚑", name: "ambulance vehicle emoji", cat: "Travel" },
  { char: "🚒", name: "fire engine vehicle emoji", cat: "Travel" },
  { char: "🚐", name: "minibus vehicle emoji", cat: "Travel" },
  { char: "🚚", name: "truck vehicle emoji", cat: "Travel" },
  { char: "🚛", name: "articulated lorry vehicle emoji", cat: "Travel" },
  { char: "🚜", name: "tractor vehicle emoji", cat: "Travel" },
  { char: "🛵", name: "motor scooter vehicle emoji", cat: "Travel" },
  { char: "🏍️", name: "motorcycle vehicle emoji", cat: "Travel" },
  { char: "🚲", name: "bicycle bike emoji", cat: "Travel" },
  { char: "✈️", name: "airplane flight travel emoji", cat: "Travel" },
  { char: "🚀", name: "rocket space emoji", cat: "Travel" },
  { char: "🛸", name: "flying saucer UFO emoji", cat: "Travel" },
  { char: "🚁", name: "helicopter emoji", cat: "Travel" },
  { char: "⛵", name: "sailboat boat emoji", cat: "Travel" },
  { char: "🚢", name: "ship boat emoji", cat: "Travel" },
  { char: "🏠", name: "house home emoji", cat: "Travel" },
  { char: "🏡", name: "house garden home emoji", cat: "Travel" },
  { char: "🏢", name: "office building emoji", cat: "Travel" },
  { char: "🏥", name: "hospital emoji", cat: "Travel" },
  { char: "🏦", name: "bank emoji", cat: "Travel" },
  { char: "🏨", name: "hotel emoji", cat: "Travel" },
  { char: "🏫", name: "school emoji", cat: "Travel" },
  { char: "⛪", name: "church emoji", cat: "Travel" },
  { char: "🕌", name: "mosque emoji", cat: "Travel" },
  { char: "🕍", name: "synagogue emoji", cat: "Travel" },
  { char: "🏛️", name: "classical building emoji", cat: "Travel" },
  { char: "🗽", name: "statue of liberty emoji", cat: "Travel" },
  { char: "🗼", name: "Tokyo tower emoji", cat: "Travel" },
  { char: "🏰", name: "castle emoji", cat: "Travel" },
  { char: "🌋", name: "volcano emoji", cat: "Travel" },
  { char: "🗻", name: "mount fuji emoji", cat: "Travel" },
  { char: "🏕️", name: "camping tent emoji", cat: "Travel" },
  { char: "🏖️", name: "beach umbrella emoji", cat: "Travel" },
  { char: "🏝️", name: "desert island emoji", cat: "Travel" },
  { char: "🌃", name: "night city emoji", cat: "Travel" },
  { char: "🌆", name: "city sunset emoji", cat: "Travel" },
  { char: "🌇", name: "city sunrise emoji", cat: "Travel" },
  { char: "🌉", name: "bridge night emoji", cat: "Travel" },
  { char: "🌈", name: "rainbow emoji", cat: "Travel" },
  { char: "☀️", name: "sun sunny emoji", cat: "Travel" },
  { char: "🌙", name: "crescent moon emoji", cat: "Travel" },
  { char: "⭐", name: "star emoji", cat: "Travel" },
  { char: "🌟", name: "glowing star emoji", cat: "Travel" },
  { char: "✨", name: "sparkles emoji", cat: "Travel" },
  { char: "⚡", name: "high voltage lightning emoji", cat: "Travel" },
  { char: "🔥", name: "fire flame hot emoji", cat: "Travel" },
  { char: "💧", name: "droplet water emoji", cat: "Travel" },
  { char: "🌊", name: "water wave emoji", cat: "Travel" },
  { char: "❄️", name: "snowflake emoji", cat: "Travel" },
  { char: "☃️", name: "snowman emoji", cat: "Travel" },
  { char: "🌍", name: "globe Europe emoji", cat: "Travel" },
  { char: "🌎", name: "globe Americas emoji", cat: "Travel" },
  { char: "🌏", name: "globe Asia emoji", cat: "Travel" },

  // ---------- Objects ----------
  { char: "📱", name: "mobile phone smartphone emoji", cat: "Objects" },
  { char: "💻", name: "laptop computer emoji", cat: "Objects" },
  { char: "⌨️", name: "keyboard computer emoji", cat: "Objects" },
  { char: "🖥️", name: "desktop computer emoji", cat: "Objects" },
  { char: "🖨️", name: "printer computer emoji", cat: "Objects" },
  { char: "🖱️", name: "computer mouse emoji", cat: "Objects" },
  { char: "💾", name: "floppy disk emoji", cat: "Objects" },
  { char: "💿", name: "CD emoji", cat: "Objects" },
  { char: "📀", name: "DVD emoji", cat: "Objects" },
  { char: "📷", name: "camera emoji", cat: "Objects" },
  { char: "📹", name: "video camera emoji", cat: "Objects" },
  { char: "📺", name: "television TV emoji", cat: "Objects" },
  { char: "📻", name: "radio emoji", cat: "Objects" },
  { char: "⏰", name: "alarm clock emoji", cat: "Objects" },
  { char: "⌚", name: "watch emoji", cat: "Objects" },
  { char: "📡", name: "satellite antenna emoji", cat: "Objects" },
  { char: "🔋", name: "battery emoji", cat: "Objects" },
  { char: "🔌", name: "electric plug emoji", cat: "Objects" },
  { char: "💡", name: "light bulb idea emoji", cat: "Objects" },
  { char: "🔦", name: "flashlight emoji", cat: "Objects" },
  { char: "🕯️", name: "candle emoji", cat: "Objects" },
  { char: "📚", name: "books emoji", cat: "Objects" },
  { char: "📖", name: "open book emoji", cat: "Objects" },
  { char: "📝", name: "memo note emoji", cat: "Objects" },
  { char: "✏️", name: "pencil emoji", cat: "Objects" },
  { char: "🖊️", name: "pen emoji", cat: "Objects" },
  { char: "🖌️", name: "paintbrush emoji", cat: "Objects" },
  { char: "📌", name: "pushpin emoji", cat: "Objects" },
  { char: "📎", name: "paperclip emoji", cat: "Objects" },
  { char: "✂️", name: "scissors emoji", cat: "Objects" },
  { char: "🔒", name: "locked lock emoji", cat: "Objects" },
  { char: "🔓", name: "unlocked lock emoji", cat: "Objects" },
  { char: "🔑", name: "key emoji", cat: "Objects" },
  { char: "🔨", name: "hammer emoji", cat: "Objects" },
  { char: "🔧", name: "wrench emoji", cat: "Objects" },
  { char: "⚙️", name: "gear settings emoji", cat: "Objects" },
  { char: "🧲", name: "magnet emoji", cat: "Objects" },
  { char: "💊", name: "pill medicine emoji", cat: "Objects" },
  { char: "💉", name: "syringe emoji", cat: "Objects" },
  { char: "🩹", name: "adhesive bandage emoji", cat: "Objects" },
  { char: "🔬", name: "microscope emoji", cat: "Objects" },
  { char: "🔭", name: "telescope emoji", cat: "Objects" },
  { char: "📦", name: "package box emoji", cat: "Objects" },
  { char: "📫", name: "mailbox emoji", cat: "Objects" },
  { char: "💰", name: "money bag emoji", cat: "Objects" },
  { char: "💳", name: "credit card emoji", cat: "Objects" },
  { char: "💎", name: "gem stone diamond emoji", cat: "Objects" },
  { char: "⚖️", name: "balance scale emoji", cat: "Objects" },
  { char: "🔗", name: "link emoji", cat: "Objects" },
  { char: "📊", name: "bar chart emoji", cat: "Objects" },
  { char: "📈", name: "chart increasing emoji", cat: "Objects" },
  { char: "📉", name: "chart decreasing emoji", cat: "Objects" },
  { char: "🗓️", name: "calendar emoji", cat: "Objects" },
  { char: "📅", name: "calendar date emoji", cat: "Objects" },
  { char: "🗑️", name: "wastebasket trash emoji", cat: "Objects" },
  { char: "🎁", name: "wrapped gift present emoji", cat: "Objects" },
  { char: "🎈", name: "balloon emoji", cat: "Objects" },
  { char: "🎉", name: "party popper celebrate emoji", cat: "Objects" },
  { char: "🎊", name: "confetti ball emoji", cat: "Objects" },
  { char: "🏆", name: "trophy win emoji", cat: "Objects" },
  { char: "🥇", name: "gold medal emoji", cat: "Objects" },
  { char: "🥈", name: "silver medal emoji", cat: "Objects" },
  { char: "🥉", name: "bronze medal emoji", cat: "Objects" },
  { char: "⚽", name: "soccer ball football emoji", cat: "Objects" },
  { char: "🏀", name: "basketball emoji", cat: "Objects" },
  { char: "🏈", name: "american football emoji", cat: "Objects" },
  { char: "⚾", name: "baseball emoji", cat: "Objects" },
  { char: "🎾", name: "tennis emoji", cat: "Objects" },
  { char: "🏐", name: "volleyball emoji", cat: "Objects" },
  { char: "🎱", name: "pool 8 ball emoji", cat: "Objects" },
  { char: "🏓", name: "ping pong emoji", cat: "Objects" },
  { char: "🏸", name: "badminton emoji", cat: "Objects" },
  { char: "🥊", name: "boxing glove emoji", cat: "Objects" },
  { char: "🎯", name: "direct hit target emoji", cat: "Objects" },
  { char: "🎮", name: "video game controller emoji", cat: "Objects" },
  { char: "🎲", name: "game die dice emoji", cat: "Objects" },
  { char: "🧩", name: "puzzle piece emoji", cat: "Objects" },
  { char: "🎨", name: "artist palette emoji", cat: "Objects" },
  { char: "🎭", name: "performing arts emoji", cat: "Objects" },
  { char: "🎬", name: "clapper board movie emoji", cat: "Objects" },
  { char: "🎤", name: "microphone emoji", cat: "Objects" },
  { char: "🎧", name: "headphone emoji", cat: "Objects" },
  { char: "🎵", name: "musical note music emoji", cat: "Objects" },
  { char: "🎶", name: "musical notes music emoji", cat: "Objects" },
  { char: "🎸", name: "guitar music emoji", cat: "Objects" },
  { char: "🎹", name: "musical keyboard piano emoji", cat: "Objects" },
  { char: "🎺", name: "trumpet music emoji", cat: "Objects" },
  { char: "🎻", name: "violin music emoji", cat: "Objects" },
  { char: "🥁", name: "drum music emoji", cat: "Objects" },

  // ---------- Symbols ----------
  { char: "✅", name: "check mark tick emoji", cat: "Symbols" },
  { char: "❌", name: "cross mark x emoji", cat: "Symbols" },
  { char: "❎", name: "cross mark button emoji", cat: "Symbols" },
  { char: "➕", name: "plus add emoji", cat: "Symbols" },
  { char: "➖", name: "minus subtract emoji", cat: "Symbols" },
  { char: "➗", name: "divide emoji", cat: "Symbols" },
  { char: "✖️", name: "multiply emoji", cat: "Symbols" },
  { char: "♾️", name: "infinity emoji", cat: "Symbols" },
  { char: "💲", name: "dollar sign money emoji", cat: "Symbols" },
  { char: "💱", name: "currency exchange emoji", cat: "Symbols" },
  { char: "™️", name: "trade mark emoji", cat: "Symbols" },
  { char: "©️", name: "copyright emoji", cat: "Symbols" },
  { char: "®️", name: "registered emoji", cat: "Symbols" },
  { char: "〰️", name: "wavy dash emoji", cat: "Symbols" },
  { char: "➰", name: "curly loop emoji", cat: "Symbols" },
  { char: "➿", name: "double curly loop emoji", cat: "Symbols" },
  { char: "🔚", name: "end arrow emoji", cat: "Symbols" },
  { char: "🔙", name: "back arrow emoji", cat: "Symbols" },
  { char: "🔛", name: "on arrow emoji", cat: "Symbols" },
  { char: "🔝", name: "top arrow emoji", cat: "Symbols" },
  { char: "🔜", name: "soon arrow emoji", cat: "Symbols" },
  { char: "✔️", name: "check mark tick emoji", cat: "Symbols" },
  { char: "☑️", name: "check box emoji", cat: "Symbols" },
  { char: "🔘", name: "radio button emoji", cat: "Symbols" },
  { char: "🔴", name: "red circle emoji", cat: "Symbols" },
  { char: "🟠", name: "orange circle emoji", cat: "Symbols" },
  { char: "🟡", name: "yellow circle emoji", cat: "Symbols" },
  { char: "🟢", name: "green circle emoji", cat: "Symbols" },
  { char: "🔵", name: "blue circle emoji", cat: "Symbols" },
  { char: "🟣", name: "purple circle emoji", cat: "Symbols" },
  { char: "⚫", name: "black circle emoji", cat: "Symbols" },
  { char: "⚪", name: "white circle emoji", cat: "Symbols" },
  { char: "🟤", name: "brown circle emoji", cat: "Symbols" },
  { char: "🔺", name: "red triangle up emoji", cat: "Symbols" },
  { char: "🔻", name: "red triangle down emoji", cat: "Symbols" },
  { char: "🔶", name: "large orange diamond emoji", cat: "Symbols" },
  { char: "🔷", name: "large blue diamond emoji", cat: "Symbols" },
  { char: "🔸", name: "small orange diamond emoji", cat: "Symbols" },
  { char: "🔹", name: "small blue diamond emoji", cat: "Symbols" },
  { char: "🔳", name: "white square button emoji", cat: "Symbols" },
  { char: "🔲", name: "black square button emoji", cat: "Symbols" },
  { char: "▪️", name: "black small square emoji", cat: "Symbols" },
  { char: "▫️", name: "white small square emoji", cat: "Symbols" },
  { char: "◾", name: "black medium square emoji", cat: "Symbols" },
  { char: "◽", name: "white medium square emoji", cat: "Symbols" },
  { char: "◼️", name: "black medium square emoji", cat: "Symbols" },
  { char: "◻️", name: "white medium square emoji", cat: "Symbols" },
  { char: "⬛", name: "black large square emoji", cat: "Symbols" },
  { char: "⬜", name: "white large square emoji", cat: "Symbols" },
  { char: "🟥", name: "red square emoji", cat: "Symbols" },
  { char: "🟧", name: "orange square emoji", cat: "Symbols" },
  { char: "🟨", name: "yellow square emoji", cat: "Symbols" },
  { char: "🟩", name: "green square emoji", cat: "Symbols" },
  { char: "🟦", name: "blue square emoji", cat: "Symbols" },
  { char: "🟪", name: "purple square emoji", cat: "Symbols" },
  { char: "🟫", name: "brown square emoji", cat: "Symbols" }
];

// Fixed category order
const categoryOrder = ["All", "Smileys", "Hearts", "Hands", "Animals", "Flowers", "Food", "Travel", "Objects", "Symbols", "Flags"];
const detectedCategories = [...new Set(emojis.map(e => e.cat))];
const categories = categoryOrder.filter(c => c === "All" || detectedCategories.includes(c));

// ============ State ============
let activeCategory = "All";
let searchQuery = "";

// ============ DOM refs ============
const grid = document.getElementById("emojiGrid");
const categoriesEl = document.getElementById("categories");
const searchInput = document.getElementById("search");

// ============ Levenshtein distance (typo tolerance) ============
function levenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// Fuzzy match: handles typos like "hert" -> "heart"
function fuzzyMatch(query, target) {
  const q = query.toLowerCase().trim();
  const t = target.toLowerCase();

  if (t.includes(q)) return true;

  const targetWords = t.split(/\s+/);
  const queryWords = q.split(/\s+/);

  return queryWords.every(qw => {
    if (qw.length < 3) return false;
    return targetWords.some(tw => {
      const maxDist = qw.length <= 5 ? 1 : 2;
      return levenshtein(qw, tw) <= maxDist;
    });
  });
}

// ============ Render category buttons ============
function renderCategories() {
  categoriesEl.innerHTML = categories.map(cat => `
    <button class="category-btn ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">
      ${cat}
    </button>
  `).join("");

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderCategories();
      renderEmojis();
    });
  });
}

// ============ Filter emojis ============
function getFilteredEmojis() {
  return emojis.filter(e => {
    const matchesCategory = activeCategory === "All" || e.cat === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      fuzzyMatch(searchQuery, e.name) ||
      fuzzyMatch(searchQuery, e.cat);
    return matchesCategory && matchesSearch;
  });
}

// ============ Render emojis ============
function renderEmojis() {
  const filtered = getFilteredEmojis();

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="text-align: center; padding: 40px; color: #666;">No emojis found. Try a different search.</p>`;
    return;
  }

  // If a specific category is selected OR user is searching → flat grid
  if (activeCategory !== "All" || searchQuery !== "") {
    grid.innerHTML = `<div class="emoji-row">${filtered.map(e => `
      <button class="emoji-btn" data-emoji="${e.char}" title="${e.name}">
        ${e.char}
      </button>
    `).join("")}</div>`;
  } else {
    // "All" view → grouped by category with headings, using fixed order
    const grouped = {};
    filtered.forEach(e => {
      if (!grouped[e.cat]) grouped[e.cat] = [];
      grouped[e.cat].push(e);
    });

    // Sort categories by the fixed order
    const sortedCategories = categoryOrder.filter(c => grouped[c]);

    grid.innerHTML = sortedCategories.map(cat => {
      const items = grouped[cat];
      return `
        <div class="category-section">
          <h2 class="category-heading">${cat}</h2>
          <div class="emoji-row">
            ${items.map(e => `
              <button class="emoji-btn" data-emoji="${e.char}" title="${e.name}">
                ${e.char}
              </button>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");
  }

  // Copy handlers — pass the button element so bubble knows where to appear
  document.querySelectorAll(".emoji-btn").forEach(btn => {
    btn.addEventListener("click", () => copyEmoji(btn.dataset.emoji, btn));
  });
}

// ============ Copy to clipboard ============
function copyEmoji(emoji, btnEl) {
  const onSuccess = () => {
    showBubble(btnEl);
    showUsagePanel(emoji);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(emoji).then(onSuccess).catch(() => fallbackCopy(emoji, btnEl));
  } else {
    fallbackCopy(emoji, btnEl);
  }
}

function fallbackCopy(emoji, btnEl) {
  const textarea = document.createElement("textarea");
  textarea.value = emoji;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try { document.execCommand("copy"); showBubble(btnEl); showUsagePanel(emoji); } catch (e) { /* silent */ }
  document.body.removeChild(textarea);
}

// ============ Copy bubble above the clicked emoji ============
function showBubble(btnEl) {
  if (!btnEl) return;

  const existing = btnEl.querySelector(".copy-bubble");
  if (existing) existing.remove();

  const bubble = document.createElement("span");
  bubble.className = "copy-bubble";
  bubble.textContent = "Copied!";
  btnEl.appendChild(bubble);

  requestAnimationFrame(() => bubble.classList.add("show"));

  setTimeout(() => {
    bubble.classList.remove("show");
    setTimeout(() => bubble.remove(), 200);
  }, 1200);
}

// ============ Usage panel (appears at bottom when emoji is clicked) ============
function showUsagePanel(emojiChar) {
  const emojiObj = emojis.find(e => e.char === emojiChar);
  if (!emojiObj) return;

  let panel = document.getElementById("usagePanel");
  if (panel) panel.remove();

  panel = document.createElement("div");
  panel.id = "usagePanel";
  panel.className = "usage-panel";
  panel.innerHTML = `
    <div class="usage-panel-emoji">${emojiObj.char}</div>
    <div class="usage-panel-body">
      <h3 class="usage-panel-name">${emojiObj.name}</h3>
      <p class="usage-panel-text">${emojiObj.usage || "Click any emoji above to copy it instantly. Paste it into WhatsApp, Instagram, Facebook, Twitter, Slack, email, or anywhere else."}</p>
    </div>
    <button class="usage-panel-close" aria-label="Close">×</button>
  `;

  document.body.appendChild(panel);

  panel.querySelector(".usage-panel-close").addEventListener("click", () => {
    panel.classList.remove("show");
    setTimeout(() => panel.remove(), 300);
  });

  requestAnimationFrame(() => panel.classList.add("show"));

  setTimeout(() => {
    if (panel && panel.parentNode) {
      panel.classList.remove("show");
      setTimeout(() => panel.remove(), 300);
    }
  }, 7000);
}

// ============ Search input ============
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderEmojis();
});

// ============ Init ============
renderCategories();
renderEmojis();
