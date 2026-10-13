// =====================================================
// EmojiCopyFree — Emoji data + fuzzy search + copy logic
// Names include platform keywords for long-tail SEO matching
// =====================================================

const emojis = [
  // ---------- Smileys ----------
  { char: "😀", name: "grinning face smiley emoji", cat: "Smileys", usage: "The classic happy face. Use for general happiness, friendliness, or a casual 'I'm good.' Common in everyday messages and friendly replies." },
  { char: "😃", name: "grinning face big eyes smiley", cat: "Smileys", usage: "Use for enthusiastic happiness — more excited than 😀. Common in greetings, good news, and 'I'm so happy' moments." },
  { char: "😄", name: "grinning face smiling eyes happy", cat: "Smileys", usage: "Use for genuine, warm happiness. Common in friendly messages and positive reactions." },
  { char: "😁", name: "beaming face grin", cat: "Smileys", usage: "Use for a big, toothy grin — proud or mischievous. Common in 'I did it' moments and playful teasing." },
  { char: "😆", name: "grinning squinting face laugh", cat: "Smileys", usage: "Use for laughing out loud. Common in reactions to funny memes and jokes." },
  { char: "😅", name: "grinning face sweat smiley", cat: "Smileys", usage: "Use for awkward laughs, near-misses, or 'phew, that was close.' Common in embarrassing situations and relieved messages." },
  { char: "🤣", name: "rolling on floor laughing rofl emoji", cat: "Smileys", usage: "Use when something is extremely funny — even funnier than 😂. Common on Twitter and Instagram. Older generations use it more; Gen Z prefers 💀." },
  { char: "😂", name: "face with tears of joy laughing emoji", cat: "Smileys", usage: "The most-used emoji on WhatsApp and Facebook. Use when something is genuinely funny. In 2026, some consider it 'old' — younger users prefer 💀 for laughing. Still safe for all ages." },
  { char: "🙂", name: "slightly smiling face smiley", cat: "Smileys", usage: "Use for a polite, neutral smile. Can feel passive-aggressive in tense conversations. Common in customer service and formal replies." },
  { char: "🙃", name: "upside down face smiley", cat: "Smileys", usage: "Use for sarcasm, irony, or 'everything is fine' (when it's not). Common in passive-aggressive replies and self-deprecating jokes." },
  { char: "😉", name: "winking face wink emoji", cat: "Smileys", usage: "Use for playful teasing, flirting, or 'just kidding.' Common in friendly banter and lighthearted messages." },
  { char: "😊", name: "smiling face smiling eyes blush emoji", cat: "Smileys", usage: "Use for warm, genuine happiness or shyness. Common in thank-you messages, compliments, and friendly replies. Warmer than 🙂." },
  { char: "😇", name: "smiling face halo angel emoji", cat: "Smileys", usage: "Use for innocence, 'I did nothing wrong,' or genuine good behavior. Common in playful sarcasm and sweet messages." },
  { char: "🥰", name: "smiling face hearts love emoji", cat: "Smileys", usage: "Use for warm, affectionate feelings — stronger than 😊 but softer than 😍. Common in captions about loved ones, pets, and happy moments." },
  { char: "😍", name: "heart eyes love emoji", cat: "Smileys", usage: "Use when you find something or someone extremely attractive or appealing. Common on food photos, cute animal posts, and celebrity content. More intense than 🥰." },
  { char: "🤩", name: "star-struck emoji", cat: "Smileys", usage: "Use when you're amazed, impressed, or starstruck. Common in reactions to celebrities, great news, and mind-blowing content." },
  { char: "😘", name: "face blowing kiss emoji", cat: "Smileys", usage: "Use for sending a kiss — romantic or friendly. Common in goodnight messages, long-distance relationships, and flirty content." },
  { char: "😗", name: "kissing face emoji", cat: "Smileys", usage: "Use for a simple kiss or affection. Softer than 😘. Common in romantic messages and cute replies." },
  { char: "😚", name: "kissing closed eyes emoji", cat: "Smileys", usage: "Use for a tender kiss with closed eyes. Common in romantic moments and sweet messages." },
  { char: "😙", name: "kissing smiling eyes emoji", cat: "Smileys", usage: "Use for a happy, smiling kiss. Common in affectionate messages and cute content." },
  { char: "😋", name: "face savoring food yummy emoji", cat: "Smileys", usage: "Use when food is delicious or you're looking forward to eating. Common in food posts and 'this is so good' messages." },
  { char: "😛", name: "face tongue emoji", cat: "Smileys", usage: "Use for playful teasing or silliness. Common in jokes, memes, and friendly banter." },
  { char: "😜", name: "winking tongue emoji", cat: "Smileys", usage: "Use for playful mischief or 'just kidding.' Common in pranks, jokes, and cheeky replies." },
  { char: "🤪", name: "zany face crazy emoji", cat: "Smileys", usage: "Use for goofiness, chaos, or 'I'm losing it.' Common in meme culture and silly posts." },
  { char: "😝", name: "squinting tongue emoji", cat: "Smileys", usage: "Use for silly teasing or 'bleh.' Common in playful insults and jokes." },
  { char: "🤑", name: "money mouth emoji", cat: "Smileys", usage: "Use for money, wealth, or 'I'm getting paid.' Common in finance posts, side hustle content, and 'cha-ching' moments." },
  { char: "🤗", name: "hugging face hug emoji", cat: "Smileys", usage: "Use for hugs, warmth, or 'I'm here for you.' Common in comforting messages and friendly greetings." },
  { char: "🤭", name: "hand over mouth emoji", cat: "Smileys", usage: "Use for giggling, surprise, or 'oops.' Common in reactions to awkward or funny moments." },
  { char: "🤫", name: "shushing face quiet emoji", cat: "Smileys", usage: "Use for secrets, silence, or 'shh.' Common in gossip, surprises, and 'don't tell anyone' messages." },
  { char: "🤔", name: "thinking face emoji", cat: "Smileys", usage: "Use when you're considering something, skeptical, or about to ask a question. Common in replies to questionable claims and in problem-solving chats." },
  { char: "😐", name: "neutral face emoji", cat: "Smileys", usage: "Use for a blank, unimpressed expression. Common in awkward silences and 'I have no reaction' moments." },
  { char: "😑", name: "expressionless face emoji", cat: "Smileys", usage: "Use for 'I'm done' or total lack of amusement. Common in reactions to bad jokes and boring content." },
  { char: "😶", name: "face without mouth emoji", cat: "Smileys", usage: "Use for speechlessness or 'I have no words.' Common in shocking or awkward moments." },
  { char: "😏", name: "smirking face emoji", cat: "Smileys", usage: "Use for smugness, sarcasm, or 'I know something you don't.' Common in flirty messages and playful teasing. Can be misread as creepy in the wrong context." },
  { char: "😒", name: "unamused face emoji", cat: "Smileys", usage: "Use for annoyance or 'really?' Common in reactions to bad jokes and obvious statements." },
  { char: "🙄", name: "face rolling eyes emoji", cat: "Smileys", usage: "Use to express annoyance, disbelief, or 'here we go again.' Common in replies to obvious statements, drama, and repetitive complaints. Passive-aggressive in professional settings." },
  { char: "😬", name: "grimacing face emoji", cat: "Smileys", usage: "Use for awkwardness, cringe, or 'yikes.' Common in reactions to embarrassing moments and uncomfortable situations." },
  { char: "😌", name: "relieved face emoji", cat: "Smileys", usage: "Use for calm contentment or relief. Common in 'finally' moments and peaceful content." },
  { char: "😔", name: "pensive face sad emoji", cat: "Smileys", usage: "Use for quiet sadness or disappointment. Common in reflective posts and 'I'm okay' (when you're not) moments." },
  { char: "😪", name: "sleepy face emoji", cat: "Smileys", usage: "Use for tiredness or 'I need sleep.' Common in late-night messages and Monday morning posts." },
  { char: "🤤", name: "drooling face emoji", cat: "Smileys", usage: "Use for craving food or attraction. Common in food posts and 'I want that' moments." },
  { char: "😴", name: "sleeping face sleep emoji", cat: "Smileys", usage: "Use when you're tired, bored, or something is boring. Also used playfully to say 'this conversation is putting me to sleep.' Common in late-night chats." },
  { char: "😷", name: "medical mask face emoji", cat: "Smileys", usage: "Use for illness, health precautions, or doctor visits. Common during flu season and in health-related posts." },
  { char: "🤒", name: "face thermometer sick emoji", cat: "Smileys", usage: "Use when you're sick or feeling unwell. Common in 'I'm ill' messages and health updates." },
  { char: "🤕", name: "face head bandage hurt emoji", cat: "Smileys", usage: "Use for injuries, accidents, or 'I got hurt.' Common in sports injuries and clumsy moments." },
  { char: "🤢", name: "nauseated face sick emoji", cat: "Smileys", usage: "Use for nausea, disgust, or 'I feel sick.' Common in reactions to gross content and illness." },
  { char: "🤮", name: "vomiting face emoji", cat: "Smileys", usage: "Use for disgust, vomiting, or 'that's disgusting.' Common in reactions to gross content and bad food." },
  { char: "🥵", name: "hot face emoji", cat: "Smileys", usage: "Use for extreme heat, exhaustion, or attraction. Common in summer posts and workout content." },
  { char: "🥶", name: "cold face emoji", cat: "Smileys", usage: "Use for extreme cold or shivering. Common in winter posts and freezing weather." },
  { char: "😵", name: "dizzy face emoji", cat: "Smileys", usage: "Use for dizziness, confusion, or being overwhelmed. Common in 'I'm lost' moments and chaotic situations." },
  { char: "🤯", name: "exploding head mind blown emoji", cat: "Smileys", usage: "Use when something is shocking, mind-blowing, or hard to believe. Common in reactions to plot twists, big news, and surprising facts." },
  { char: "🤠", name: "cowboy hat face emoji", cat: "Smileys", usage: "Use for Western themes, 'howdy,' or playful confidence. Common in cowboy content and Texas references." },
  { char: "🥳", name: "partying face party emoji", cat: "Smileys", usage: "Use for celebrations — birthdays, promotions, graduations, and parties. Common in group chats when announcing good news. More festive than 🎉." },
  { char: "😎", name: "smiling face sunglasses cool emoji", cat: "Smileys", usage: "Use to show confidence, coolness, or 'no problem.' Common in summer posts, selfies, and replies that say 'I've got this.'" },
  { char: "🤓", name: "nerd face emoji", cat: "Smileys", usage: "Use for studying, intelligence, or 'actually...' Common in school content, tech posts, and nerdy jokes." },
  { char: "🧐", name: "face monocle emoji", cat: "Smileys", usage: "Use for curiosity, inspection, or 'interesting.' Common in detective content and 'let me look closer' moments." },
  { char: "😕", name: "confused face emoji", cat: "Smileys", usage: "Use for confusion or 'I don't get it.' Common in reactions to confusing content." },
  { char: "😟", name: "worried face emoji", cat: "Smileys", usage: "Use for worry or concern. Common in 'are you okay?' messages and anxious moments." },
  { char: "🙁", name: "slightly frowning face sad emoji", cat: "Smileys", usage: "Use for mild sadness or disappointment. Softer than 😞. Common in 'aww' moments." },
  { char: "😮", name: "face open mouth surprised emoji", cat: "Smileys", usage: "Use for surprise or 'wow.' Common in reactions to shocking news and unexpected moments." },
  { char: "😯", name: "hushed face emoji", cat: "Smileys", usage: "Use for quiet surprise or 'oh.' Common in stunned reactions and subtle shock." },
  { char: "😲", name: "astonished face emoji", cat: "Smileys", usage: "Use for shock or disbelief. Common in reactions to big news and unbelievable facts." },
  { char: "😳", name: "flushed face emoji", cat: "Smileys", usage: "Use for embarrassment, blushing, or 'I can't believe this.' Common in awkward moments and shy replies." },
  { char: "🥺", name: "pleading face please emoji", cat: "Smileys", usage: "Use to ask for something, show vulnerability, or say 'please.' Common in requests to friends, customer service chats, and cute posts. The 'puppy dog eyes' emoji." },
  { char: "😦", name: "frowning open mouth emoji", cat: "Smileys", usage: "Use for shock or worry. Common in 'oh no' moments and concerned replies." },
  { char: "😧", name: "anguished face emoji", cat: "Smileys", usage: "Use for distress or shock. Common in reactions to bad news and difficult situations." },
  { char: "😨", name: "fearful face emoji", cat: "Smileys", usage: "Use for fear or anxiety. Common in scary content and 'I'm scared' moments." },
  { char: "😰", name: "anxious sweat emoji", cat: "Smileys", usage: "Use for anxiety or nervousness. Common in stressful situations and 'I'm worried' moments." },
  { char: "😥", name: "sad relieved face emoji", cat: "Smileys", usage: "Use for disappointment mixed with relief. Common in 'well, at least...' moments." },
  { char: "😢", name: "crying face sad emoji", cat: "Smileys", usage: "Use for sadness or crying. Common in sad posts and 'I'm hurt' messages." },
  { char: "😭", name: "loudly crying face sad emoji", cat: "Smileys", usage: "Two meanings: (1) Genuine sadness. (2) Gen Z slang for 'this is so funny I'm crying.' Context matters — after a sad post, it means sadness; after a funny post, it means laughter." },
  { char: "😱", name: "face screaming fear emoji", cat: "Smileys", usage: "Use for extreme shock, fear, or excitement. Common in reactions to horror content, surprise announcements, and 'I can't believe this' moments." },
  { char: "😖", name: "confounded face emoji", cat: "Smileys", usage: "Use for frustration or confusion. Common in difficult situations and 'why is this happening' moments." },
  { char: "😣", name: "persevering face emoji", cat: "Smileys", usage: "Use for determination through difficulty. Common in 'I'm trying' moments and tough tasks." },
  { char: "😞", name: "disappointed face sad emoji", cat: "Smileys", usage: "Use for disappointment or sadness. Common in 'I expected better' moments and letdowns." },
  { char: "😓", name: "downcast sweat emoji", cat: "Smileys", usage: "Use for stress or feeling overwhelmed. Common in work pressure and difficult situations." },
  { char: "😩", name: "weary face tired emoji", cat: "Smileys", usage: "Use for exhaustion or 'I can't.' Common in tired posts and overwhelming moments." },
  { char: "😫", name: "tired face emoji", cat: "Smileys", usage: "Use for extreme tiredness or frustration. Common in 'I'm done' moments and exhausting days." },
  { char: "🥱", name: "yawning face emoji", cat: "Smileys", usage: "Use for boredom or tiredness. Common in boring content and sleepy moments." },
  { char: "😤", name: "face steam nose emoji", cat: "Smileys", usage: "Use for frustration or determination. Common in 'I'm done with this' moments and tough challenges." },
  { char: "😡", name: "pouting face angry emoji", cat: "Smileys", usage: "Use for intense anger or rage. Common in angry reactions and 'I'm furious' moments." },
  { char: "😠", name: "angry face emoji", cat: "Smileys", usage: "Use for anger or annoyance. Common in frustrated replies and 'I'm mad' moments." },
  { char: "🤬", name: "face symbols mouth cursing emoji", cat: "Smileys", usage: "Use for extreme anger or cursing. Common in rage posts and 'I'm so mad' moments. Not for polite conversation." },
  { char: "😈", name: "smiling devil emoji", cat: "Smileys", usage: "Use for playful mischief or 'I'm up to something.' Common in pranks and naughty jokes." },
  { char: "👿", name: "angry devil emoji", cat: "Smileys", usage: "Use for anger or evil intent. Common in villain content and 'I'm evil' jokes." },
  { char: "💀", name: "skull emoji", cat: "Smileys", usage: "Gen Z slang for 'I'm dead laughing.' Used on Twitter, TikTok, and Instagram when something is so funny it killed you. NOT for actual death — use 🕊️ or 🪦 for that." },
  { char: "💩", name: "pile of poo emoji", cat: "Smileys", usage: "Use for bad content, 'this is crap,' or playful insults. Common in meme culture and 'that's terrible' moments." },
  { char: "🤡", name: "clown face emoji", cat: "Smileys", usage: "Gen Z slang for 'you're a clown' or 'I'm a clown.' Common in self-deprecating posts and calling out bad behavior." },
  { char: "👻", name: "ghost emoji", cat: "Smileys", usage: "Use for Halloween, spooky content, or 'ghosting.' Common in October posts and 'I'm disappearing' jokes." },
  { char: "👽", name: "alien emoji", cat: "Smileys", usage: "Use for sci-fi, space, or 'I feel different.' Common in alien content and outsider jokes." },
  { char: "🤖", name: "robot emoji", cat: "Smileys", usage: "Use for AI, technology, or 'I'm a bot.' Common in tech posts and robotic humor." },
  
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
  { char: "🥲", name: "smiling face with tear emoji", cat: "Smileys", usage: "Use for bittersweet moments — happy but also sad. Common in graduation posts, moving away, and nostalgic content." },
  { char: "🫠", name: "melting face emoji", cat: "Smileys", usage: "Use for extreme heat, embarrassment, or 'I can't handle this.' Common in summer posts and overwhelming situations." },
  { char: "🫢", name: "face with open eyes and hand over mouth emoji", cat: "Smileys", usage: "Use for surprise, shock, or 'oops.' Common in reactions to unexpected news and awkward moments." },
  { char: "🫣", name: "face with peeking eye emoji", cat: "Smileys", usage: "Use for 'I can't watch' or secretly looking. Common in scary movies and awkward situations." },
  { char: "🫡", name: "saluting face emoji", cat: "Smileys", usage: "Use for respect, agreement, or 'yes sir.' Common in military content, 'understood,' and showing respect." },
  { char: "🫥", name: "dotted line face emoji", cat: "Smileys", usage: "Use for feeling invisible, withdrawn, or 'I'm not here.' Common in social anxiety posts and 'leave me alone' moments." },
  { char: "🫤", name: "face with diagonal mouth emoji", cat: "Smileys", usage: "Use for uncertainty, skepticism, or 'meh.' Common in 'I don't know' replies and unimpressed reactions." },
  { char: "🥹", name: "face holding back tears emoji", cat: "Smileys", usage: "Use for emotional moments — happy or sad. Common in heartfelt posts, proud parent moments, and touching content." },
  { char: "🫨", name: "shaking face emoji", cat: "Smileys", usage: "Use for shock, dizziness, or 'mind blown.' Common in reactions to unbelievable news and chaotic situations." },
  { char: "🫦", name: "biting lip emoji", cat: "Smileys", usage: "Use for flirtation, nervousness, or anticipation. Common in flirty messages and 'I'm nervous' moments." },
  { char: "🫅", name: "person with crown emoji", cat: "Smileys", usage: "Use for royalty, confidence, or 'I'm the king/queen.' Common in self-confident posts and celebration content." },

  // ---------- Unicode 18.0 New Emojis (Early Mover Advantage) ----------
  { char: "🪿", name: "goose emoji", cat: "Animals", usage: "Use for geese, silly humor, or 'goose chase.' Common in meme culture and nature posts." },
  { char: "🪼", name: "jellyfish emoji", cat: "Animals", usage: "Use for jellyfish, ocean, or 'no brain.' Common in sea life content and 'mindless' jokes." },
  { char: "🪻", name: "hyacinth flower emoji", cat: "Flowers", usage: "Use for spring, fragrance, or 'new beginnings.' Common in garden posts and spring content." },
  { char: "🪭", name: "folding hand fan emoji", cat: "Objects", usage: "Use for heat, fans, or 'I'm a fan.' Common in summer posts and fandom jokes." },
  { char: "🪮", name: "hair pick emoji", cat: "Objects", usage: "Use for hair, afros, or 'picking hair.' Common in natural hair content and grooming posts." },
  { char: "🪇", name: "maracas emoji", cat: "Objects", usage: "Use for music, Latin vibes, or celebration. Common in music content and party posts." },
  { char: "🪈", name: "flute emoji", cat: "Objects", usage: "Use for flutes, music, or 'flute it.' Common in music content and band posts." },
  { char: "🪯", name: "khanda emoji", cat: "Symbols", usage: "Use for Sikhism, faith, or Punjabi culture. Common in religious posts and Sikh community content." },
  { char: "🛜", name: "wireless emoji", cat: "Symbols", usage: "Use for Wi-Fi, internet, or connectivity. Common in tech posts and 'no signal' moments." },
  { char: "🪾", name: "leafless tree emoji", cat: "Flowers", usage: "Use for winter, loss, or 'bare.' Common in winter content and reflective posts." },
  { char: "🫆", name: "fingerprint emoji", cat: "Objects", usage: "Use for identity, crime, or 'unique.' Common in detective content and security posts." },
  { char: "🫜", name: "root vegetable emoji", cat: "Food", usage: "Use for root vegetables, cooking, or 'rooted.' Common in food posts and gardening content." },
  { char: "🫟", name: "splatter emoji", cat: "Symbols", usage: "Use for splashes, paint, or 'messy.' Common in art content and 'splatter' moments." },

  // ---------- More Animals ----------
  { char: "🦦", name: "otter emoji", cat: "Animals", usage: "Use for otters, cuteness, or 'holding hands while sleeping.' Common in cute animal posts and 'couple goals' content." },
  { char: "🦥", name: "sloth emoji", cat: "Animals", usage: "Use for sloths, laziness, or 'taking it slow.' Common in 'I'm tired' posts and slow-paced content." },
  { char: "🦨", name: "skunk emoji", cat: "Animals", usage: "Use for skunks, 'stinky,' or 'stay away.' Common in funny content and 'that stinks' jokes." },
  { char: "🦩", name: "flamingo emoji", cat: "Animals", usage: "Use for flamingos, tropical vibes, or 'standing out.' Common in summer posts and aesthetic content." },
  { char: "🦫", name: "beaver emoji", cat: "Animals", usage: "Use for beavers, hard work, or 'busy.' Common in 'busy as a beaver' posts and nature content." },
  { char: "🦭", name: "seal emoji", cat: "Animals", usage: "Use for seals, sea life, or 'seal of approval.' Common in cute animal posts and ocean content." },
  { char: "🦬", name: "bison emoji", cat: "Animals", usage: "Use for bison, strength, or North America. Common in wildlife content and nature posts." },
  { char: "🦣", name: "mammoth emoji", cat: "Animals", usage: "Use for mammoths, prehistoric, or 'huge.' Common in history content and 'big' jokes." },
  { char: "🦤", name: "dodo emoji", cat: "Animals", usage: "Use for dodos, extinction, or 'outdated.' Common in history content and 'old' jokes." },
  { char: "🪶", name: "feather emoji", cat: "Animals", usage: "Use for feathers, lightness, or 'light as a feather.' Common in nature content and soft aesthetic posts." },
  { char: "🦔", name: "hedgehog emoji", cat: "Animals", usage: "Use for hedgehogs, cuteness, or 'prickly.' Common in cute animal posts and 'don't touch me' jokes." },
  { char: "🐿️", name: "chipmunk emoji", cat: "Animals", usage: "Use for chipmunks, squirrels, or 'hoarding.' Common in nature content and cute posts." },
  { char: "🦔", name: "hedgehog emoji", cat: "Animals", usage: "Use for hedgehogs, cuteness, or 'prickly.' Common in cute animal posts and 'don't touch me' jokes." },
  { char: "🪲", name: "beetle emoji", cat: "Animals", usage: "Use for beetles, insects, or 'bug.' Common in nature content and science posts." },
  { char: "🪳", name: "cockroach emoji", cat: "Animals", usage: "Use for cockroaches, disgust, or 'can't kill it.' Common in 'gross' content and survival jokes." },
  { char: "🪰", name: "fly emoji", cat: "Animals", usage: "Use for flies, annoyance, or 'buzzing.' Common in 'annoying' posts and summer content." },
  { char: "🪱", name: "worm emoji", cat: "Animals", usage: "Use for worms, 'bookworm,' or 'early bird.' Common in book lover posts and nature content." },
  { char: "🦠", name: "microbe emoji", cat: "Animals", usage: "Use for germs, viruses, or 'tiny.' Common in health content and science posts." },
  { char: "🪸", name: "coral emoji", cat: "Animals", usage: "Use for coral, ocean, or 'reef.' Common in sea life content and environmental posts." },
  { char: "🪼", name: "jellyfish emoji", cat: "Animals", usage: "Use for jellyfish, ocean, or 'no brain.' Common in sea life content and 'mindless' jokes." },

  // ---------- More Food ----------
  { char: "🫒", name: "olive emoji", cat: "Food", usage: "Use for olives, olive oil, or 'olive you.' Common in Mediterranean food content and punny messages." },
  { char: "🫘", name: "beans emoji", cat: "Food", usage: "Use for beans, 'spilling the beans,' or protein. Common in food content and 'secret' posts." },
  { char: "🫗", name: "pouring liquid emoji", cat: "Food", usage: "Use for pouring drinks, 'spilling,' or 'oops.' Common in drink content and clumsy moments." },
  { char: "🫙", name: "jar emoji", cat: "Food", usage: "Use for jars, storage, or 'jarring.' Common in kitchen content and 'preserved' posts." },
  { char: "🫚", name: "ginger emoji", cat: "Food", usage: "Use for ginger, spice, or 'ginger hair.' Common in cooking content and redhead posts." },
  { char: "🫛", name: "pea pod emoji", cat: "Food", usage: "Use for peas, 'two peas in a pod,' or veggies. Common in food content and 'best friends' posts." },
  { char: "🫓", name: "flatbread emoji", cat: "Food", usage: "Use for flatbread, pita, or wraps. Common in Mediterranean content and lunch posts." },
  { char: "🫔", name: "tamale emoji", cat: "Food", usage: "Use for tamales, Mexican food, or holidays. Common in Mexican content and Christmas posts." },
  { char: "🫕", name: "fondue emoji", cat: "Food", usage: "Use for fondue, cheese, or 'melting.' Common in party content and cheese posts." },
  { char: "🫖", name: "teapot emoji", cat: "Food", usage: "Use for tea, 'I'm a little teapot,' or 'spilling tea.' Common in tea content and gossip posts." },
  { char: "🧋", name: "bubble tea emoji boba", cat: "Food", usage: "Use for bubble tea, boba, or 'tapioca.' Common in boba content and Asian drink posts." },
  { char: "🧉", name: "mate drink emoji", cat: "Food", usage: "Use for mate, South America, or 'yerba mate.' Common in South American content and tea posts." },
  { char: "🧊", name: "ice cube emoji", cat: "Food", usage: "Use for ice, cold, or 'iced out.' Common in drink content and 'cold' posts." },
  { char: "🥠", name: "fortune cookie emoji", cat: "Food", usage: "Use for fortune cookies, Chinese food, or 'fortune.' Common in Chinese food content and 'future' posts." },
  { char: "🥡", name: "takeout box emoji", cat: "Food", usage: "Use for takeout, Chinese food, or 'to go.' Common in takeout content and 'lazy dinner' posts." },

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
  { char: "👍", name: "thumbs up like emoji for facebook instagram whatsapp", cat: "Hands", usage: "The universal 'OK' or 'good job.' On Facebook, it's the original 'Like' button. Use for agreement, approval, and acknowledgment. Can feel dismissive in serious conversations." },
  { char: "👎", name: "thumbs down dislike emoji", cat: "Hands", usage: "Use for disapproval, disagreement, or 'nope.' Common in reactions to bad ideas and disappointing news." },
  { char: "👌", name: "ok hand emoji", cat: "Hands", usage: "Use for 'perfect,' 'got it,' or approval. Common in confirmations and 'this is great' moments. In some cultures, this gesture is offensive — be careful internationally." },
  { char: "✌️", name: "victory hand peace emoji", cat: "Hands", usage: "Two meanings: (1) Peace or victory. (2) A casual selfie pose. Common in photos, peace-themed content, and 'we did it' messages." },
  { char: "🤞", name: "crossed fingers luck emoji", cat: "Hands", usage: "Use for hope, luck, or 'fingers crossed.' Common before exams, job interviews, and uncertain outcomes." },
  { char: "🤟", name: "love you gesture emoji", cat: "Hands", usage: "Use for 'I love you' in sign language (ASL). Common in family posts, affection messages, and deaf community content." },
  { char: "🤘", name: "rock on emoji", cat: "Hands", usage: "Use for rock music, heavy metal, or 'let's go.' Common in concert posts, music content, and excitement." },
  { char: "🤙", name: "call me hand emoji", cat: "Hands", usage: "Use for 'call me' or 'hang loose.' Common in friendly sign-offs, beach vibes, and casual messages." },
  { char: "👈", name: "point left emoji", cat: "Hands", usage: "Use to direct attention left. Common in directions and 'look over there' moments." },
  { char: "👉", name: "point right emoji", cat: "Hands", usage: "Use to direct attention right. Common in directions and 'look at this' moments." },
  { char: "👆", name: "point up emoji", cat: "Hands", usage: "Use to direct attention up. Common in 'look above' and scroll-up instructions." },
  { char: "👇", name: "point down emoji", cat: "Hands", usage: "Use to direct attention down. Common in 'see below' and scroll-down instructions." },
  { char: "☝️", name: "index up emoji", cat: "Hands", usage: "Use for 'actually,' 'one more thing,' or asking to speak. Common in corrections and 'listen up' moments." },
  { char: "✋", name: "raised hand emoji", cat: "Hands", usage: "Use for 'stop,' 'high five,' or volunteering. Common in classrooms, group chats, and 'me!' moments." },
  { char: "🤚", name: "raised back hand emoji", cat: "Hands", usage: "Use for 'stop' or 'wait.' Common in halting a conversation and 'hold on' moments." },
  { char: "🖐️", name: "hand fingers splayed emoji", cat: "Hands", usage: "Use for 'five,' waving, or 'talk to the hand.' Common in counting, greetings, and dismissive moments." },
  { char: "🖖", name: "vulcan salute spock emoji", cat: "Hands", usage: "Use for Star Trek, 'live long and prosper,' or nerd culture. Common in sci-fi content and Trekkie posts." },
  { char: "👋", name: "waving hand hello emoji", cat: "Hands", usage: "Use for greetings, goodbyes, or getting attention. Common in first messages, leaving group chats, and friendly hellos." },
  { char: "🤝", name: "handshake emoji", cat: "Hands", usage: "Use for agreement, partnership, or a deal. Common in business chats, LinkedIn posts, and 'let's work together' messages." },
  { char: "🙏", name: "folded hands pray please emoji", cat: "Hands", usage: "Two meanings: (1) Please or thank you — especially in WhatsApp and email. (2) Prayer or hope. Context matters — in a request, it means 'please'; after receiving help, it means 'thank you.'" },
  { char: "✍️", name: "writing hand emoji", cat: "Hands", usage: "Use for writing, signing, or 'taking notes.' Common in study content, contract signing, and 'note to self' moments." },
  { char: "💪", name: "flexed biceps strong emoji", cat: "Hands", usage: "Use for strength, fitness, or determination. Common in gym posts, motivational content, and 'I can do this' messages." },
  { char: "👏", name: "clapping hands emoji", cat: "Hands", usage: "Use for applause, congratulations, or praise. Common in reactions to achievements and good performances. Can be sarcastic when overused." },
  { char: "🙌", name: "raising hands celebrate emoji", cat: "Hands", usage: "Use for celebration, praise, or 'hands up in the air.' Common in worship contexts, sports celebrations, and 'I did it!' moments." },
  { char: "👐", name: "open hands emoji", cat: "Hands", usage: "Use for openness, 'here you go,' or welcoming. Common in friendly offers and 'take it' moments." },
  { char: "🤲", name: "palms up emoji", cat: "Hands", usage: "Use for offering, receiving, or 'I'm open.' Common in charity content, requests, and 'here you go' messages." },
  { char: "🤜", name: "right fist emoji", cat: "Hands", usage: "Use for fist bumps, solidarity, or 'let's go.' Common between friends and teammates." },
  { char: "🤛", name: "left fist emoji", cat: "Hands", usage: "Use for fist bumps, solidarity, or agreement. Common in friendly gestures and 'we're in this together.'" },
  { char: "✊", name: "raised fist emoji", cat: "Hands", usage: "Use for power, resistance, or solidarity. Common in activism, social justice posts, and 'stay strong' messages." },
  { char: "👊", name: "fist bump emoji", cat: "Hands", usage: "Use for solidarity, agreement, or a friendly punch. Common between friends, teammates, and in 'we're in this together' messages." },
  { char: "🫸", name: "rightwards pushing hand emoji", cat: "Hands", usage: "Use to push away or reject. Common in 'go away' moments and dismissive replies." },
  { char: "🫷", name: "leftwards pushing hand emoji", cat: "Hands", usage: "Use to push away or say 'stop.' Common in 'hold on' moments and 'not now' replies." },
  { char: "🫰", name: "hand with index finger and thumb crossed emoji", cat: "Hands", usage: "Use for 'fingers crossed,' love, or a finger heart. Common in K-pop fan posts and flirty messages." },
  { char: "🫶", name: "heart hands emoji", cat: "Hands", usage: "Use for love, gratitude, or 'I love this.' Common in K-pop fan posts, appreciation messages, and heartfelt content." },

  // ---------- Animals ----------
  { char: "🐶", name: "dog face puppy emoji", cat: "Animals", usage: "Use for dogs, puppies, and 'dog person' content. Common in pet posts, cute content, and 'I love dogs' messages." },
  { char: "🐱", name: "cat face kitten emoji", cat: "Animals", usage: "Use for cats, kittens, and 'cat person' content. Common in pet posts, cute content, and 'I love cats' messages." },
  { char: "🐭", name: "mouse face emoji", cat: "Animals", usage: "Use for mice, shyness, or 'quiet as a mouse.' Common in cute content and 'I'm shy' moments." },
  { char: "🐹", name: "hamster emoji", cat: "Animals", usage: "Use for hamsters, small pets, or 'I'm hoarding.' Common in pet content and 'so cute' posts." },
  { char: "🐰", name: "rabbit face bunny emoji", cat: "Animals", usage: "Use for rabbits, Easter, or 'hop hop.' Common in spring posts and cute content." },
  { char: "🦊", name: "fox emoji", cat: "Animals", usage: "Use for foxes, cleverness, or 'sly.' Common in cute content and 'foxy' compliments." },
  { char: "🐻", name: "bear emoji", cat: "Animals", usage: "Use for bears, cuddles, or 'bear hug.' Common in cozy content and affectionate messages." },
  { char: "🐼", name: "panda emoji", cat: "Animals", usage: "Use for pandas, cuteness, or China. Common in cute content and wildlife posts." },
  { char: "🐨", name: "koala emoji", cat: "Animals", usage: "Use for koalas, Australia, or sleepiness. Common in Australian content and cute posts." },
  { char: "🐯", name: "tiger face emoji", cat: "Animals", usage: "Use for tigers, strength, or 'rawr.' Common in fierce content and playful messages." },
  { char: "🦁", name: "lion emoji", cat: "Animals", usage: "Use for lions, courage, or 'king of the jungle.' Common in motivational content and pride posts." },
  { char: "🐮", name: "cow face emoji", cat: "Animals", usage: "Use for cows, farms, or 'moo.' Common in farm content and dairy posts." },
  { char: "🐷", name: "pig face emoji", cat: "Animals", usage: "Use for pigs, farms, or playful teasing. Common in cute content and 'oink' jokes." },
  { char: "🐸", name: "frog emoji", cat: "Animals", usage: "Use for frogs, 'ribbit,' or Pepe memes. Common in meme culture and nature posts." },
  { char: "🐵", name: "monkey face emoji", cat: "Animals", usage: "Use for monkeys, mischief, or 'monkey business.' Common in playful content and jokes." },
  { char: "🐔", name: "chicken emoji", cat: "Animals", usage: "Use for chickens, farms, or 'chicken out.' Common in farm content and 'I'm scared' jokes." },
  { char: "🐧", name: "penguin emoji", cat: "Animals", usage: "Use for penguins, cold weather, or Linux. Common in winter content and tech jokes." },
  { char: "🐦", name: "bird emoji", cat: "Animals", usage: "Use for birds, freedom, or Twitter (X). Common in nature posts and social media references." },
  { char: "🐤", name: "baby chick emoji", cat: "Animals", usage: "Use for baby birds, spring, or 'cute.' Common in Easter content and adorable posts." },
  { char: "🦆", name: "duck emoji", cat: "Animals", usage: "Use for ducks, ponds, or 'duckling.' Common in nature posts and cute content." },
  { char: "🦅", name: "eagle emoji", cat: "Animals", usage: "Use for eagles, America, or 'soaring.' Common in patriotic content and wildlife posts." },
  { char: "🦉", name: "owl emoji", cat: "Animals", usage: "Use for owls, wisdom, or night. Common in study content and 'night owl' posts." },
  { char: "🦇", name: "bat emoji", cat: "Animals", usage: "Use for bats, Halloween, or Batman. Common in spooky content and superhero references." },
  { char: "🐺", name: "wolf emoji", cat: "Animals", usage: "Use for wolves, loyalty, or 'lone wolf.' Common in motivational content and pack references." },
  { char: "🐗", name: "boar emoji", cat: "Animals", usage: "Use for boars, wild pigs, or strength. Common in wildlife content and hunting posts." },
  { char: "🐴", name: "horse face emoji", cat: "Animals", usage: "Use for horses, riding, or 'neigh.' Common in equestrian content and farm posts." },
  { char: "🦄", name: "unicorn emoji", cat: "Animals", usage: "Use for fantasy, uniqueness, and 'rare.' Common in aesthetic posts, magical content, and 'one of a kind' messages." },
  { char: "🐝", name: "honeybee bee emoji", cat: "Animals", usage: "Use for bees, nature, and 'busy as a bee.' Common in spring posts, environmental content, and productive messages." },
  { char: "🐛", name: "bug emoji", cat: "Animals", usage: "Use for bugs, coding errors, or 'creepy crawlies.' Common in tech content and nature posts." },
  { char: "🦋", name: "butterfly emoji", cat: "Animals", usage: "Use for transformation, beauty, and nature. Common in aesthetic posts, growth content, and 'glow up' messages." },
  { char: "🐌", name: "snail emoji", cat: "Animals", usage: "Use for slowness, patience, or 'taking it slow.' Common in 'slow down' messages and nature posts." },
  { char: "🐞", name: "ladybug emoji", cat: "Animals", usage: "Use for ladybugs, luck, or spring. Common in garden content and cute nature posts." },
  { char: "🐜", name: "ant emoji", cat: "Animals", usage: "Use for ants, hard work, or 'tiny but mighty.' Common in nature posts and teamwork content." },
  { char: "🦗", name: "cricket emoji", cat: "Animals", usage: "Use for crickets, silence, or 'awkward.' Common in 'crickets' jokes and nature posts." },
  { char: "🕷️", name: "spider emoji", cat: "Animals", usage: "Use for spiders, Halloween, or Spider-Man. Common in spooky content and superhero posts." },
  { char: "🐢", name: "turtle emoji", cat: "Animals", usage: "Use for turtles, slowness, or 'slow and steady.' Common in patience content and nature posts." },
  { char: "🐍", name: "snake emoji", cat: "Animals", usage: "Use for snakes, betrayal, or 'snake in the grass.' Common in drama content and wildlife posts." },
  { char: "🦎", name: "lizard emoji", cat: "Animals", usage: "Use for lizards, reptiles, or 'chill.' Common in nature content and pet posts." },
  { char: "🐙", name: "octopus emoji", cat: "Animals", usage: "Use for octopuses, multitasking, or 'eight arms.' Common in sea life content and 'busy' jokes." },
  { char: "🦑", name: "squid emoji", cat: "Animals", usage: "Use for squid, sea life, or Squid Game. Common in ocean content and K-drama references." },
  { char: "🦐", name: "shrimp emoji", cat: "Animals", usage: "Use for shrimp, seafood, or 'small.' Common in food posts and 'tiny' jokes." },
  { char: "🦀", name: "crab emoji", cat: "Animals", usage: "Use for crabs, seafood, or Cancer zodiac. Common in food posts and astrology content." },
  { char: "🐡", name: "blowfish emoji", cat: "Animals", usage: "Use for blowfish, pufferfish, or 'puffed up.' Common in sea life content and 'angry' jokes." },
  { char: "🐠", name: "tropical fish emoji", cat: "Animals", usage: "Use for tropical fish, aquariums, or ocean. Common in sea life content and colorful posts." },
  { char: "🐟", name: "fish emoji", cat: "Animals", usage: "Use for fish, fishing, or Pisces zodiac. Common in seafood posts and astrology content." },
  { char: "🐬", name: "dolphin emoji", cat: "Animals", usage: "Use for dolphins, intelligence, or ocean. Common in sea life content and 'smart' jokes." },
  { char: "🐳", name: "spouting whale emoji", cat: "Animals", usage: "Use for whales, ocean, or 'big.' Common in sea life content and conservation posts." },
  { char: "🦈", name: "shark emoji", cat: "Animals", usage: "Use for sharks, danger, or 'shark tank.' Common in ocean content and business references." },
  { char: "🐊", name: "crocodile emoji", cat: "Animals", usage: "Use for crocodiles, danger, or 'later.' Common in wildlife content and 'see you later, alligator' jokes." },
  { char: "🐅", name: "tiger emoji", cat: "Animals", usage: "Use for tigers, strength, or 'fierce.' Common in wildlife content and motivational posts." },
  { char: "🐆", name: "leopard emoji", cat: "Animals", usage: "Use for leopards, speed, or spots. Common in wildlife content and fashion posts." },
  { char: "🦓", name: "zebra emoji", cat: "Animals", usage: "Use for zebras, stripes, or 'unique.' Common in wildlife content and pattern posts." },
  { char: "🦍", name: "gorilla emoji", cat: "Animals", usage: "Use for gorillas, strength, or 'big.' Common in wildlife content and 'strong' messages." },
  { char: "🐘", name: "elephant emoji", cat: "Animals", usage: "Use for elephants, memory, or 'big.' Common in wildlife content and 'never forget' posts." },
  { char: "🦏", name: "rhinoceros emoji", cat: "Animals", usage: "Use for rhinos, strength, or 'tough.' Common in wildlife content and conservation posts." },
  { char: "🐪", name: "camel emoji", cat: "Animals", usage: "Use for camels, deserts, or 'hump day.' Common in Wednesday posts and desert content." },
  { char: "🦒", name: "giraffe emoji", cat: "Animals", usage: "Use for giraffes, height, or 'tall.' Common in wildlife content and 'standing tall' posts." },
  { char: "🐄", name: "cow emoji", cat: "Animals", usage: "Use for cows, farms, or dairy. Common in farm content and food posts." },
  { char: "🐎", name: "horse emoji", cat: "Animals", usage: "Use for horses, racing, or 'ride.' Common in equestrian content and sports posts." },
  { char: "🐖", name: "pig emoji", cat: "Animals", usage: "Use for pigs, farms, or 'oink.' Common in farm content and cute posts." },
  { char: "🐑", name: "sheep emoji", cat: "Animals", usage: "Use for sheep, counting sleep, or 'follow the herd.' Common in sleep content and farm posts." },
  { char: "🐕", name: "dog emoji", cat: "Animals", usage: "Use for dogs, walking, or 'best friend.' Common in pet content and 'dog lover' posts." },
  { char: "🐈", name: "cat emoji", cat: "Animals", usage: "Use for cats, nine lives, or 'independent.' Common in pet content and 'cat lover' posts." },
  { char: "🐓", name: "rooster emoji", cat: "Animals", usage: "Use for roosters, morning, or 'cock-a-doodle-doo.' Common in farm content and early morning posts." },
  { char: "🦃", name: "turkey emoji", cat: "Animals", usage: "Use for turkeys, Thanksgiving, or 'gobble.' Common in Thanksgiving content and holiday posts." },

  // ---------- Flowers & Nature ----------
  { char: "🌸", name: "cherry blossom flower emoji", cat: "Flowers", usage: "Use for spring, Japan, or delicate beauty. Common in spring posts, Japanese culture content, and aesthetic photos." },
  { char: "💮", name: "white flower emoji", cat: "Flowers", usage: "Use for 'well done' in Japanese culture, or purity. Common in study content and Japanese-themed posts." },
  { char: "🏵️", name: "rosette flower emoji", cat: "Flowers", usage: "Use for awards, achievement, or decoration. Common in award posts and celebration content." },
  { char: "🌹", name: "rose flower love emoji", cat: "Flowers", usage: "Use for love, romance, or Valentine's Day. Common in romantic posts, anniversary content, and 'I love you' messages." },
  { char: "🥀", name: "wilted flower emoji", cat: "Flowers", usage: "Use for sadness, fading love, or 'it's over.' Common in breakup posts and melancholic content." },
  { char: "🌺", name: "hibiscus flower emoji", cat: "Flowers", usage: "Use for tropical vibes, Hawaii, or summer. Common in vacation posts and tropical content." },
  { char: "🌻", name: "sunflower flower emoji", cat: "Flowers", usage: "Use for happiness, summer, or 'stay positive.' Common in bright content and motivational posts." },
  { char: "🌼", name: "blossom flower emoji", cat: "Flowers", usage: "Use for spring, new beginnings, or simple beauty. Common in spring posts and cheerful content." },
  { char: "🌷", name: "tulip flower emoji", cat: "Flowers", usage: "Use for spring, Holland, or affection. Common in spring content and 'thinking of you' messages." },
  { char: "🌱", name: "seedling plant emoji", cat: "Flowers", usage: "Use for new beginnings, growth, or 'just starting.' Common in gardening posts and personal growth content." },
  { char: "🪴", name: "potted plant emoji", cat: "Flowers", usage: "Use for houseplants, plant parents, or home decor. Common in plant lover posts and cozy content." },
  { char: "🌲", name: "evergreen tree emoji", cat: "Flowers", usage: "Use for Christmas, forests, or 'evergreen.' Common in holiday posts and nature content." },
  { char: "🌳", name: "deciduous tree emoji", cat: "Flowers", usage: "Use for trees, nature, or 'family tree.' Common in outdoor posts and environmental content." },
  { char: "🌴", name: "palm tree emoji", cat: "Flowers", usage: "Use for beaches, vacation, or tropical vibes. Common in summer posts and travel content." },
  { char: "🌵", name: "cactus emoji", cat: "Flowers", usage: "Use for deserts, 'tough,' or 'don't touch me.' Common in southwest content and 'I'm prickly' jokes." },
  { char: "🌾", name: "sheaf of rice emoji", cat: "Flowers", usage: "Use for harvest, farming, or rice. Common in agricultural content and autumn posts." },
  { char: "🌿", name: "herb plant emoji", cat: "Flowers", usage: "Use for herbs, nature, or 'natural.' Common in cooking content and wellness posts." },
  { char: "☘️", name: "shamrock emoji", cat: "Flowers", usage: "Use for St. Patrick's Day, Ireland, or luck. Common in March posts and Irish content." },
  { char: "🍀", name: "four leaf clover luck emoji", cat: "Flowers", usage: "Use for luck, St. Patrick's Day, or 'fingers crossed.' Common in lucky moments and Irish content." },
  { char: "🍁", name: "maple leaf emoji", cat: "Flowers", usage: "Use for Canada, autumn, or fall vibes. Common in Canadian content and autumn posts." },
  { char: "🍂", name: "fallen leaf emoji", cat: "Flowers", usage: "Use for autumn, change, or 'letting go.' Common in fall content and reflective posts." },
  { char: "🍃", name: "leaf fluttering emoji", cat: "Flowers", usage: "Use for wind, freshness, or 'breezy.' Common in nature content and 'fresh air' posts." },
  { char: "🍄", name: "mushroom emoji", cat: "Flowers", usage: "Use for mushrooms, nature, or Super Mario. Common in foraging content and gaming posts." },
  { char: "🌰", name: "chestnut emoji", cat: "Flowers", usage: "Use for chestnuts, autumn, or roasting. Common in fall content and holiday posts." },

  // ---------- Food ----------
  { char: "🍎", name: "red apple fruit emoji", cat: "Food", usage: "Use for apples, health, or teachers. Common in healthy eating posts and 'an apple a day' content." },
  { char: "🍐", name: "pear fruit emoji", cat: "Food", usage: "Use for pears, fruit, or 'pear-shaped.' Common in healthy content and fruit posts." },
  { char: "🍊", name: "tangerine orange fruit emoji", cat: "Food", usage: "Use for oranges, vitamin C, or Chinese New Year. Common in citrus posts and winter content." },
  { char: "🍋", name: "lemon fruit emoji", cat: "Food", usage: "Use for lemons, sourness, or 'when life gives you lemons.' Common in summer posts and lemonade content." },
  { char: "🍌", name: "banana fruit emoji", cat: "Food", usage: "Use for bananas, monkeys, or 'going bananas.' Common in fruit posts and potassium jokes." },
  { char: "🍉", name: "watermelon fruit emoji", cat: "Food", usage: "Use for watermelon, summer, or picnics. Common in summer content and BBQ posts." },
  { char: "🍇", name: "grapes fruit emoji", cat: "Food", usage: "Use for grapes, wine, or 'sour grapes.' Common in fruit posts and wine content." },
  { char: "🍓", name: "strawberry fruit emoji", cat: "Food", usage: "Use for strawberries, summer, or sweetness. Common in dessert posts and summer content." },
  { char: "🫐", name: "blueberries fruit emoji", cat: "Food", usage: "Use for blueberries, health, or antioxidants. Common in healthy content and smoothie posts." },
  { char: "🍈", name: "melon fruit emoji", cat: "Food", usage: "Use for melons, summer, or fruit salad. Common in summer content and healthy posts." },
  { char: "🍒", name: "cherries fruit emoji", cat: "Food", usage: "Use for cherries, 'cherry on top,' or twins. Common in dessert posts and 'perfect' moments." },
  { char: "🍑", name: "peach fruit emoji", cat: "Food", usage: "Use for peaches, Georgia, or 'just peachy.' Common in fruit posts and 'feeling good' content." },
  { char: "🥭", name: "mango fruit emoji", cat: "Food", usage: "Use for mangoes, tropical vibes, or summer. Common in tropical content and smoothie posts." },
  { char: "🍍", name: "pineapple fruit emoji", cat: "Food", usage: "Use for pineapple, tropical, or 'pineapple on pizza.' Common in summer posts and controversial food debates." },
  { char: "🥥", name: "coconut fruit emoji", cat: "Food", usage: "Use for coconuts, tropical, or 'coconut oil.' Common in tropical content and wellness posts." },
  { char: "🥝", name: "kiwi fruit emoji", cat: "Food", usage: "Use for kiwi, New Zealand, or 'fuzzy.' Common in fruit posts and New Zealand content." },
  { char: "🍅", name: "tomato vegetable emoji", cat: "Food", usage: "Use for tomatoes, cooking, or 'tomato, tomato.' Common in cooking content and garden posts." },
  { char: "🍆", name: "eggplant vegetable emoji", cat: "Food", usage: "Use for eggplant, cooking, or (in some contexts) suggestive humor. Common in cooking posts and meme culture." },
  { char: "🥑", name: "avocado fruit emoji", cat: "Food", usage: "Use for avocados, toast, or 'millennial.' Common in brunch posts and healthy eating content." },
  { char: "🥦", name: "broccoli vegetable emoji", cat: "Food", usage: "Use for broccoli, health, or 'eat your greens.' Common in healthy content and veggie posts." },
  { char: "🥬", name: "leafy green vegetable emoji", cat: "Food", usage: "Use for leafy greens, health, or salads. Common in healthy content and vegan posts." },
  { char: "🥒", name: "cucumber vegetable emoji", cat: "Food", usage: "Use for cucumbers, salads, or 'cool as a cucumber.' Common in healthy content and salad posts." },
  { char: "🌶️", name: "hot pepper spicy emoji", cat: "Food", usage: "Use for spicy food, heat, or 'hot take.' Common in spicy content and 'this is fire' posts." },
  { char: "🌽", name: "corn vegetable emoji", cat: "Food", usage: "Use for corn, farms, or 'corny.' Common in farm content and 'corny jokes' posts." },
  { char: "🥕", name: "carrot vegetable emoji", cat: "Food", usage: "Use for carrots, rabbits, or 'carrot and stick.' Common in healthy content and Easter posts." },
  { char: "🧄", name: "garlic emoji", cat: "Food", usage: "Use for garlic, vampires, or cooking. Common in cooking content and 'vampire repellent' jokes." },
  { char: "🧅", name: "onion emoji", cat: "Food", usage: "Use for onions, crying, or layers. Common in cooking content and 'makes me cry' posts." },
  { char: "🥔", name: "potato emoji", cat: "Food", usage: "Use for potatoes, 'couch potato,' or Irish. Common in food posts and 'lazy' jokes." },
  { char: "🍠", name: "sweet potato emoji", cat: "Food", usage: "Use for sweet potatoes, Thanksgiving, or healthy carbs. Common in holiday content and healthy posts." },
  { char: "🥐", name: "croissant bread emoji", cat: "Food", usage: "Use for croissants, France, or breakfast. Common in breakfast posts and French content." },
  { char: "🥯", name: "bagel bread emoji", cat: "Food", usage: "Use for bagels, New York, or breakfast. Common in breakfast content and NYC posts." },
  { char: "🍞", name: "bread emoji", cat: "Food", usage: "Use for bread, 'breadwinner,' or money. Common in food posts and 'making bread' (money) slang." },
  { char: "🥖", name: "baguette bread emoji", cat: "Food", usage: "Use for baguettes, France, or bread. Common in French content and bakery posts." },
  { char: "🧀", name: "cheese emoji", cat: "Food", usage: "Use for cheese, 'say cheese,' or 'cheesy.' Common in photo posts and 'cheesy jokes' content." },
  { char: "🥚", name: "egg emoji", cat: "Food", usage: "Use for eggs, Easter, or 'egg-cellent.' Common in breakfast posts and Easter content." },
  { char: "🍳", name: "cooking fried egg emoji", cat: "Food", usage: "Use for cooking, breakfast, or 'frying.' Common in breakfast content and cooking posts." },
  { char: "🥞", name: "pancakes breakfast emoji", cat: "Food", usage: "Use for pancakes, breakfast, or 'flipping.' Common in breakfast content and brunch posts." },
  { char: "🧇", name: "waffle emoji", cat: "Food", usage: "Use for waffles, breakfast, or 'waffling.' Common in breakfast content and 'indecisive' jokes." },
  { char: "🥓", name: "bacon emoji", cat: "Food", usage: "Use for bacon, breakfast, or 'bring home the bacon.' Common in breakfast content and 'making money' slang." },
  { char: "🍔", name: "hamburger burger fast food emoji", cat: "Food", usage: "Use for burgers, fast food, and American cuisine. Common in food posts, weekend content, and 'cheat day' messages." },
  { char: "🍟", name: "fries fast food emoji", cat: "Food", usage: "Use for fries, fast food, or 'french fries.' Common in fast food content and 'I'm lovin' it' posts." },
  { char: "🍕", name: "pizza fast food emoji", cat: "Food", usage: "Use for pizza cravings, parties, and Italian food. Common in food posts, Friday night content, and 'who's hungry?' messages." },
  { char: "🌭", name: "hot dog fast food emoji", cat: "Food", usage: "Use for hot dogs, baseball, or BBQ. Common in sports content and summer posts." },
  { char: "🥪", name: "sandwich emoji", cat: "Food", usage: "Use for sandwiches, lunch, or 'sandwiched.' Common in lunch content and 'busy' posts." },
  { char: "🌮", name: "taco mexican food emoji", cat: "Food", usage: "Use for tacos, Mexican food, or Tuesday. Common in Taco Tuesday posts and Mexican content." },
  { char: "🌯", name: "burrito mexican food emoji", cat: "Food", usage: "Use for burritos, Mexican food, or 'wrapped up.' Common in Mexican food content and 'busy' posts." },
  { char: "🥙", name: "stuffed flatbread emoji", cat: "Food", usage: "Use for pita, gyros, or Mediterranean food. Common in Mediterranean content and lunch posts." },
  { char: "🍜", name: "ramen noodles emoji", cat: "Food", usage: "Use for ramen, noodles, or Japanese food. Common in Japanese content and 'comfort food' posts." },
  { char: "🍝", name: "spaghetti pasta emoji", cat: "Food", usage: "Use for spaghetti, pasta, or Italian food. Common in Italian content and 'carb loading' posts." },
  { char: "🍣", name: "sushi japanese food emoji", cat: "Food", usage: "Use for sushi, Japanese food, or 'raw fish.' Common in Japanese content and foodie posts." },
  { char: "🍱", name: "bento japanese food emoji", cat: "Food", usage: "Use for bento boxes, Japanese food, or lunch. Common in Japanese content and meal prep posts." },
  { char: "🍤", name: "fried shrimp emoji", cat: "Food", usage: "Use for fried shrimp, tempura, or seafood. Common in Japanese content and seafood posts." },
  { char: "🍙", name: "rice ball japanese food emoji", cat: "Food", usage: "Use for onigiri, rice balls, or Japanese food. Common in Japanese content and snack posts." },
  { char: "🍚", name: "rice emoji", cat: "Food", usage: "Use for rice, Asian food, or 'rice bowl.' Common in Asian food content and dinner posts." },
  { char: "🍛", name: "curry rice emoji", cat: "Food", usage: "Use for curry, Indian food, or Japanese curry. Common in Indian and Japanese food content." },
  { char: "🍦", name: "ice cream dessert emoji", cat: "Food", usage: "Use for ice cream, summer, or 'soft serve.' Common in summer content and dessert posts." },
  { char: "🍧", name: "shaved ice dessert emoji", cat: "Food", usage: "Use for shaved ice, summer, or 'cool down.' Common in summer content and dessert posts." },
  { char: "🍨", name: "ice cream bowl dessert emoji", cat: "Food", usage: "Use for ice cream, sundaes, or desserts. Common in dessert content and sweet tooth posts." },
  { char: "🍩", name: "donut dessert emoji", cat: "Food", usage: "Use for donuts, 'donut worry,' or breakfast. Common in breakfast content and 'sweet treat' posts." },
  { char: "🍪", name: "cookie dessert emoji", cat: "Food", usage: "Use for cookies, 'cookie monster,' or snacks. Common in snack content and baking posts." },
  { char: "🎂", name: "birthday cake emoji", cat: "Food", usage: "Use for birthdays and celebrations. Common in birthday posts, group chat announcements, and 'happy birthday' messages." },
  { char: "🍰", name: "shortcake dessert emoji", cat: "Food", usage: "Use for cake, dessert, or 'piece of cake.' Common in dessert content and 'easy' posts." },
  { char: "🧁", name: "cupcake dessert emoji", cat: "Food", usage: "Use for cupcakes, dessert, or 'sweet.' Common in baking content and dessert posts." },
  { char: "🍫", name: "chocolate candy emoji", cat: "Food", usage: "Use for chocolate, candy, or 'chocoholic.' Common in dessert content and Valentine's Day posts." },
  { char: "🍬", name: "candy sweet emoji", cat: "Food", usage: "Use for candy, Halloween, or 'sweet.' Common in Halloween content and dessert posts." },
  { char: "🍭", name: "lollipop candy emoji", cat: "Food", usage: "Use for lollipops, candy, or 'sucker.' Common in candy content and 'sweet' posts." },
  { char: "🍯", name: "honey emoji", cat: "Food", usage: "Use for honey, bees, or 'honey.' Common in tea content and 'sweet' posts." },
  { char: "☕", name: "coffee drink emoji", cat: "Food", usage: "Use for coffee, mornings, and 'need caffeine.' Common in Monday posts, work chats, and cozy content." },
  { char: "🍵", name: "tea drink emoji", cat: "Food", usage: "Use for tea, relaxation, or 'tea time.' Common in cozy content and 'spill the tea' posts." },
  { char: "🍺", name: "beer drink emoji", cat: "Food", usage: "Use for beer, nights out, and celebrations. Common in weekend posts, sports watching, and 'cheers' messages." },
  { char: "🍻", name: "beers cheers drink emoji", cat: "Food", usage: "Use for cheers, drinking with friends, or celebrations. Common in night out content and group posts." },
  { char: "🥂", name: "clinking glasses cheers emoji", cat: "Food", usage: "Use for toasts, celebrations, or 'cheers.' Common in wedding content, New Year's posts, and special occasions." },
  { char: "🍷", name: "wine drink emoji", cat: "Food", usage: "Use for wine, elegant dinners, and relaxation. Common in evening posts, date nights, and 'treat yourself' content." },
  { char: "🥤", name: "cup straw drink emoji", cat: "Food", usage: "Use for soda, fast food drinks, or 'sipping.' Common in fast food content and 'chill' posts." },
  { char: "🧃", name: "juice box drink emoji", cat: "Food", usage: "Use for juice boxes, kids, or lunch. Common in lunch content and 'childhood' posts." },

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
