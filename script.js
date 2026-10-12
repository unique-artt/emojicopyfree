// =====================================================
// EmojiCopyFree — Emoji data + fuzzy search + copy logic
// =====================================================

const emojis = [
  // ---------- Smileys ----------
  { char: "😀", name: "grinning face", cat: "Smileys" },
  { char: "😃", name: "grinning face big eyes", cat: "Smileys" },
  { char: "😄", name: "grinning face smiling eyes", cat: "Smileys" },
  { char: "😁", name: "beaming face", cat: "Smileys" },
  { char: "😆", name: "grinning squinting face", cat: "Smileys" },
  { char: "😅", name: "grinning face sweat", cat: "Smileys" },
  { char: "🤣", name: "rolling on floor laughing", cat: "Smileys" },
  { char: "😂", name: "face with tears of joy", cat: "Smileys" },
  { char: "🙂", name: "slightly smiling face", cat: "Smileys" },
  { char: "🙃", name: "upside down face", cat: "Smileys" },
  { char: "😉", name: "winking face", cat: "Smileys" },
  { char: "😊", name: "smiling face smiling eyes", cat: "Smileys" },
  { char: "😇", name: "smiling face halo", cat: "Smileys" },
  { char: "🥰", name: "smiling face hearts", cat: "Smileys" },
  { char: "😍", name: "heart eyes", cat: "Smileys" },
  { char: "🤩", name: "star struck", cat: "Smileys" },
  { char: "😘", name: "face blowing kiss", cat: "Smileys" },
  { char: "😗", name: "kissing face", cat: "Smileys" },
  { char: "😚", name: "kissing closed eyes", cat: "Smileys" },
  { char: "😙", name: "kissing smiling eyes", cat: "Smileys" },
  { char: "😋", name: "face savoring food", cat: "Smileys" },
  { char: "😛", name: "face tongue", cat: "Smileys" },
  { char: "😜", name: "winking tongue", cat: "Smileys" },
  { char: "🤪", name: "zany face", cat: "Smileys" },
  { char: "😝", name: "squinting tongue", cat: "Smileys" },
  { char: "🤑", name: "money mouth", cat: "Smileys" },
  { char: "🤗", name: "hugging face", cat: "Smileys" },
  { char: "🤭", name: "hand over mouth", cat: "Smileys" },
  { char: "🤫", name: "shushing face", cat: "Smileys" },
  { char: "🤔", name: "thinking face", cat: "Smileys" },
  { char: "😐", name: "neutral face", cat: "Smileys" },
  { char: "😑", name: "expressionless", cat: "Smileys" },
  { char: "😶", name: "face without mouth", cat: "Smileys" },
  { char: "😏", name: "smirking face", cat: "Smileys" },
  { char: "😒", name: "unamused face", cat: "Smileys" },
  { char: "🙄", name: "face rolling eyes", cat: "Smileys" },
  { char: "😬", name: "grimacing face", cat: "Smileys" },
  { char: "😌", name: "relieved face", cat: "Smileys" },
  { char: "😔", name: "pensive face", cat: "Smileys" },
  { char: "😪", name: "sleepy face", cat: "Smileys" },
  { char: "🤤", name: "drooling face", cat: "Smileys" },
  { char: "😴", name: "sleeping face", cat: "Smileys" },
  { char: "😷", name: "medical mask", cat: "Smileys" },
  { char: "🤒", name: "face thermometer", cat: "Smileys" },
  { char: "🤕", name: "face head bandage", cat: "Smileys" },
  { char: "🤢", name: "nauseated face", cat: "Smileys" },
  { char: "🤮", name: "vomiting face", cat: "Smileys" },
  { char: "🥵", name: "hot face", cat: "Smileys" },
  { char: "🥶", name: "cold face", cat: "Smileys" },
  { char: "😵", name: "dizzy face", cat: "Smileys" },
  { char: "🤯", name: "exploding head", cat: "Smileys" },
  { char: "🤠", name: "cowboy hat", cat: "Smileys" },
  { char: "🥳", name: "partying face", cat: "Smileys" },
  { char: "😎", name: "smiling face sunglasses", cat: "Smileys" },
  { char: "🤓", name: "nerd face", cat: "Smileys" },
  { char: "🧐", name: "face monocle", cat: "Smileys" },
  { char: "😕", name: "confused face", cat: "Smileys" },
  { char: "😟", name: "worried face", cat: "Smileys" },
  { char: "🙁", name: "slightly frowning", cat: "Smileys" },
  { char: "😮", name: "face open mouth", cat: "Smileys" },
  { char: "😯", name: "hushed face", cat: "Smileys" },
  { char: "😲", name: "astonished face", cat: "Smileys" },
  { char: "😳", name: "flushed face", cat: "Smileys" },
  { char: "🥺", name: "pleading face", cat: "Smileys" },
  { char: "😦", name: "frowning open mouth", cat: "Smileys" },
  { char: "😧", name: "anguished face", cat: "Smileys" },
  { char: "😨", name: "fearful face", cat: "Smileys" },
  { char: "😰", name: "anxious sweat", cat: "Smileys" },
  { char: "😥", name: "sad relieved", cat: "Smileys" },
  { char: "😢", name: "crying face", cat: "Smileys" },
  { char: "😭", name: "loudly crying", cat: "Smileys" },
  { char: "😱", name: "face screaming fear", cat: "Smileys" },
  { char: "😖", name: "confounded face", cat: "Smileys" },
  { char: "😣", name: "persevering face", cat: "Smileys" },
  { char: "😞", name: "disappointed face", cat: "Smileys" },
  { char: "😓", name: "downcast sweat", cat: "Smileys" },
  { char: "😩", name: "weary face", cat: "Smileys" },
  { char: "😫", name: "tired face", cat: "Smileys" },
  { char: "🥱", name: "yawning face", cat: "Smileys" },
  { char: "😤", name: "face steam nose", cat: "Smileys" },
  { char: "😡", name: "pouting face", cat: "Smileys" },
  { char: "😠", name: "angry face", cat: "Smileys" },
  { char: "🤬", name: "face symbols mouth", cat: "Smileys" },
  { char: "😈", name: "smiling devil", cat: "Smileys" },
  { char: "👿", name: "angry devil", cat: "Smileys" },
  { char: "💀", name: "skull", cat: "Smileys" },
  { char: "💩", name: "pile of poo", cat: "Smileys" },
  { char: "🤡", name: "clown face", cat: "Smileys" },
  { char: "👻", name: "ghost", cat: "Smileys" },
  { char: "👽", name: "alien", cat: "Smileys" },
  { char: "🤖", name: "robot", cat: "Smileys" },

  // ---------- Hearts & Love ----------
  { char: "❤️", name: "red heart", cat: "Hearts" },
  { char: "🧡", name: "orange heart", cat: "Hearts" },
  { char: "💛", name: "yellow heart", cat: "Hearts" },
  { char: "💚", name: "green heart", cat: "Hearts" },
  { char: "💙", name: "blue heart", cat: "Hearts" },
  { char: "💜", name: "purple heart", cat: "Hearts" },
  { char: "🖤", name: "black heart", cat: "Hearts" },
  { char: "🤍", name: "white heart", cat: "Hearts" },
  { char: "🤎", name: "brown heart", cat: "Hearts" },
  { char: "💔", name: "broken heart", cat: "Hearts" },
  { char: "❣️", name: "heart exclamation", cat: "Hearts" },
  { char: "💕", name: "two hearts", cat: "Hearts" },
  { char: "💞", name: "revolving hearts", cat: "Hearts" },
  { char: "💓", name: "beating heart", cat: "Hearts" },
  { char: "💗", name: "growing heart", cat: "Hearts" },
  { char: "💖", name: "sparkling heart", cat: "Hearts" },
  { char: "💘", name: "heart arrow", cat: "Hearts" },
  { char: "💝", name: "heart ribbon", cat: "Hearts" },
  { char: "💟", name: "heart decoration", cat: "Hearts" },
  { char: "♥️", name: "heart suit", cat: "Hearts" },
  { char: "💋", name: "kiss mark", cat: "Hearts" },
  { char: "💌", name: "love letter", cat: "Hearts" },

  // ---------- Hands & Gestures ----------
  { char: "👍", name: "thumbs up", cat: "Hands" },
  { char: "👎", name: "thumbs down", cat: "Hands" },
  { char: "👌", name: "ok hand", cat: "Hands" },
  { char: "✌️", name: "victory hand", cat: "Hands" },
  { char: "🤞", name: "crossed fingers", cat: "Hands" },
  { char: "🤟", name: "love you gesture", cat: "Hands" },
  { char: "🤘", name: "rock on", cat: "Hands" },
  { char: "🤙", name: "call me hand", cat: "Hands" },
  { char: "👈", name: "point left", cat: "Hands" },
  { char: "👉", name: "point right", cat: "Hands" },
  { char: "👆", name: "point up", cat: "Hands" },
  { char: "👇", name: "point down", cat: "Hands" },
  { char: "☝️", name: "index up", cat: "Hands" },
  { char: "✋", name: "raised hand", cat: "Hands" },
  { char: "🤚", name: "raised back hand", cat: "Hands" },
  { char: "🖐️", name: "hand fingers splayed", cat: "Hands" },
  { char: "🖖", name: "vulcan salute", cat: "Hands" },
  { char: "👋", name: "waving hand", cat: "Hands" },
  { char: "🤝", name: "handshake", cat: "Hands" },
  { char: "🙏", name: "folded hands", cat: "Hands" },
  { char: "✍️", name: "writing hand", cat: "Hands" },
  { char: "💪", name: "flexed biceps", cat: "Hands" },
  { char: "👏", name: "clapping hands", cat: "Hands" },
  { char: "🙌", name: "raising hands", cat: "Hands" },
  { char: "👐", name: "open hands", cat: "Hands" },
  { char: "🤲", name: "palms up", cat: "Hands" },
  { char: "🤜", name: "right fist", cat: "Hands" },
  { char: "🤛", name: "left fist", cat: "Hands" },
  { char: "✊", name: "raised fist", cat: "Hands" },
  { char: "👊", name: "fist bump", cat: "Hands" },

  // ---------- Animals ----------
  { char: "🐶", name: "dog face", cat: "Animals" },
  { char: "🐱", name: "cat face", cat: "Animals" },
  { char: "🐭", name: "mouse face", cat: "Animals" },
  { char: "🐹", name: "hamster", cat: "Animals" },
  { char: "🐰", name: "rabbit face", cat: "Animals" },
  { char: "🦊", name: "fox", cat: "Animals" },
  { char: "🐻", name: "bear", cat: "Animals" },
  { char: "🐼", name: "panda", cat: "Animals" },
  { char: "🐨", name: "koala", cat: "Animals" },
  { char: "🐯", name: "tiger face", cat: "Animals" },
  { char: "🦁", name: "lion", cat: "Animals" },
  { char: "🐮", name: "cow face", cat: "Animals" },
  { char: "🐷", name: "pig face", cat: "Animals" },
  { char: "🐸", name: "frog", cat: "Animals" },
  { char: "🐵", name: "monkey face", cat: "Animals" },
  { char: "🐔", name: "chicken", cat: "Animals" },
  { char: "🐧", name: "penguin", cat: "Animals" },
  { char: "🐦", name: "bird", cat: "Animals" },
  { char: "🐤", name: "baby chick", cat: "Animals" },
  { char: "🦆", name: "duck", cat: "Animals" },
  { char: "🦅", name: "eagle", cat: "Animals" },
  { char: "🦉", name: "owl", cat: "Animals" },
  { char: "🦇", name: "bat", cat: "Animals" },
  { char: "🐺", name: "wolf", cat: "Animals" },
  { char: "🐗", name: "boar", cat: "Animals" },
  { char: "🐴", name: "horse face", cat: "Animals" },
  { char: "🦄", name: "unicorn", cat: "Animals" },
  { char: "🐝", name: "honeybee", cat: "Animals" },
  { char: "🐛", name: "bug", cat: "Animals" },
  { char: "🦋", name: "butterfly", cat: "Animals" },
  { char: "🐌", name: "snail", cat: "Animals" },
  { char: "🐞", name: "ladybug", cat: "Animals" },
  { char: "🐜", name: "ant", cat: "Animals" },
  { char: "🦗", name: "cricket", cat: "Animals" },
  { char: "🕷️", name: "spider", cat: "Animals" },
  { char: "🐢", name: "turtle", cat: "Animals" },
  { char: "🐍", name: "snake", cat: "Animals" },
  { char: "🦎", name: "lizard", cat: "Animals" },
  { char: "🐙", name: "octopus", cat: "Animals" },
  { char: "🦑", name: "squid", cat: "Animals" },
  { char: "🦐", name: "shrimp", cat: "Animals" },
  { char: "🦀", name: "crab", cat: "Animals" },
  { char: "🐡", name: "blowfish", cat: "Animals" },
  { char: "🐠", name: "tropical fish", cat: "Animals" },
  { char: "🐟", name: "fish", cat: "Animals" },
  { char: "🐬", name: "dolphin", cat: "Animals" },
  { char: "🐳", name: "spouting whale", cat: "Animals" },
  { char: "🦈", name: "shark", cat: "Animals" },
  { char: "🐊", name: "crocodile", cat: "Animals" },
  { char: "🐅", name: "tiger", cat: "Animals" },
  { char: "🐆", name: "leopard", cat: "Animals" },
  { char: "🦓", name: "zebra", cat: "Animals" },
  { char: "🦍", name: "gorilla", cat: "Animals" },
  { char: "🐘", name: "elephant", cat: "Animals" },
  { char: "🦏", name: "rhinoceros", cat: "Animals" },
  { char: "🐪", name: "camel", cat: "Animals" },
  { char: "🦒", name: "giraffe", cat: "Animals" },
  { char: "🐄", name: "cow", cat: "Animals" },
  { char: "🐎", name: "horse", cat: "Animals" },
  { char: "🐖", name: "pig", cat: "Animals" },
  { char: "🐑", name: "sheep", cat: "Animals" },
  { char: "🐕", name: "dog", cat: "Animals" },
  { char: "🐈", name: "cat", cat: "Animals" },
  { char: "🐓", name: "rooster", cat: "Animals" },
  { char: "🦃", name: "turkey", cat: "Animals" },

  // ---------- Flowers & Nature ----------
  { char: "🌸", name: "cherry blossom", cat: "Flowers" },
  { char: "💮", name: "white flower", cat: "Flowers" },
  { char: "🏵️", name: "rosette", cat: "Flowers" },
  { char: "🌹", name: "rose", cat: "Flowers" },
  { char: "🥀", name: "wilted flower", cat: "Flowers" },
  { char: "🌺", name: "hibiscus", cat: "Flowers" },
  { char: "🌻", name: "sunflower", cat: "Flowers" },
  { char: "🌼", name: "blossom", cat: "Flowers" },
  { char: "🌷", name: "tulip", cat: "Flowers" },
  { char: "🌱", name: "seedling", cat: "Flowers" },
  { char: "🪴", name: "potted plant", cat: "Flowers" },
  { char: "🌲", name: "evergreen tree", cat: "Flowers" },
  { char: "🌳", name: "deciduous tree", cat: "Flowers" },
  { char: "🌴", name: "palm tree", cat: "Flowers" },
  { char: "🌵", name: "cactus", cat: "Flowers" },
  { char: "🌾", name: "sheaf of rice", cat: "Flowers" },
  { char: "🌿", name: "herb", cat: "Flowers" },
  { char: "☘️", name: "shamrock", cat: "Flowers" },
  { char: "🍀", name: "four leaf clover", cat: "Flowers" },
  { char: "🍁", name: "maple leaf", cat: "Flowers" },
  { char: "🍂", name: "fallen leaf", cat: "Flowers" },
  { char: "🍃", name: "leaf fluttering", cat: "Flowers" },
  { char: "🍄", name: "mushroom", cat: "Flowers" },
  { char: "🌰", name: "chestnut", cat: "Flowers" },
  { char: "🌶️", name: "hot pepper", cat: "Flowers" },

  // ---------- Food ----------
  { char: "🍎", name: "red apple", cat: "Food" },
  { char: "🍐", name: "pear", cat: "Food" },
  { char: "🍊", name: "tangerine", cat: "Food" },
  { char: "🍋", name: "lemon", cat: "Food" },
  { char: "🍌", name: "banana", cat: "Food" },
  { char: "🍉", name: "watermelon", cat: "Food" },
  { char: "🍇", name: "grapes", cat: "Food" },
  { char: "🍓", name: "strawberry", cat: "Food" },
  { char: "🫐", name: "blueberries", cat: "Food" },
  { char: "🍈", name: "melon", cat: "Food" },
  { char: "🍒", name: "cherries", cat: "Food" },
  { char: "🍑", name: "peach", cat: "Food" },
  { char: "🥭", name: "mango", cat: "Food" },
  { char: "🍍", name: "pineapple", cat: "Food" },
  { char: "🥥", name: "coconut", cat: "Food" },
  { char: "🥝", name: "kiwi", cat: "Food" },
  { char: "🍅", name: "tomato", cat: "Food" },
  { char: "🍆", name: "eggplant", cat: "Food" },
  { char: "🥑", name: "avocado", cat: "Food" },
  { char: "🥦", name: "broccoli", cat: "Food" },
  { char: "🥬", name: "leafy green", cat: "Food" },
  { char: "🥒", name: "cucumber", cat: "Food" },
  { char: "🌽", name: "corn", cat: "Food" },
  { char: "🥕", name: "carrot", cat: "Food" },
  { char: "🧄", name: "garlic", cat: "Food" },
  { char: "🧅", name: "onion", cat: "Food" },
  { char: "🥔", name: "potato", cat: "Food" },
  { char: "🍠", name: "sweet potato", cat: "Food" },
  { char: "🥐", name: "croissant", cat: "Food" },
  { char: "🥯", name: "bagel", cat: "Food" },
  { char: "🍞", name: "bread", cat: "Food" },
  { char: "🥖", name: "baguette", cat: "Food" },
  { char: "🧀", name: "cheese", cat: "Food" },
  { char: "🥚", name: "egg", cat: "Food" },
  { char: "🍳", name: "cooking", cat: "Food" },
  { char: "🥞", name: "pancakes", cat: "Food" },
  { char: "🧇", name: "waffle", cat: "Food" },
  { char: "🥓", name: "bacon", cat: "Food" },
  { char: "🍔", name: "hamburger", cat: "Food" },
  { char: "🍟", name: "fries", cat: "Food" },
  { char: "🍕", name: "pizza", cat: "Food" },
  { char: "🌭", name: "hot dog", cat: "Food" },
  { char: "🥪", name: "sandwich", cat: "Food" },
  { char: "🌮", name: "taco", cat: "Food" },
  { char: "🌯", name: "burrito", cat: "Food" },
  { char: "🥙", name: "stuffed flatbread", cat: "Food" },
  { char: "🍜", name: "ramen", cat: "Food" },
  { char: "🍝", name: "spaghetti", cat: "Food" },
  { char: "🍣", name: "sushi", cat: "Food" },
  { char: "🍱", name: "bento", cat: "Food" },
  { char: "🍤", name: "fried shrimp", cat: "Food" },
  { char: "🍙", name: "rice ball", cat: "Food" },
  { char: "🍚", name: "rice", cat: "Food" },
  { char: "🍛", name: "curry rice", cat: "Food" },
  { char: "🍦", name: "ice cream", cat: "Food" },
  { char: "🍧", name: "shaved ice", cat: "Food" },
  { char: "🍨", name: "ice cream bowl", cat: "Food" },
  { char: "🍩", name: "donut", cat: "Food" },
  { char: "🍪", name: "cookie", cat: "Food" },
  { char: "🎂", name: "birthday cake", cat: "Food" },
  { char: "🍰", name: "shortcake", cat: "Food" },
  { char: "🧁", name: "cupcake", cat: "Food" },
  { char: "🍫", name: "chocolate", cat: "Food" },
  { char: "🍬", name: "candy", cat: "Food" },
  { char: "🍭", name: "lollipop", cat: "Food" },
  { char: "🍯", name: "honey", cat: "Food" },
  { char: "☕", name: "coffee", cat: "Food" },
  { char: "🍵", name: "tea", cat: "Food" },
  { char: "🍺", name: "beer", cat: "Food" },
  { char: "🍻", name: "beers", cat: "Food" },
  { char: "🥂", name: "clinking glasses", cat: "Food" },
  { char: "🍷", name: "wine", cat: "Food" },
  { char: "🥤", name: "cup straw", cat: "Food" },
  { char: "🧃", name: "juice box", cat: "Food" },

  // ---------- Travel & Places ----------
  { char: "🚗", name: "car", cat: "Travel" },
  { char: "🚕", name: "taxi", cat: "Travel" },
  { char: "🚙", name: "SUV", cat: "Travel" },
  { char: "🚌", name: "bus", cat: "Travel" },
  { char: "🚎", name: "trolleybus", cat: "Travel" },
  { char: "🏎️", name: "race car", cat: "Travel" },
  { char: "🚓", name: "police car", cat: "Travel" },
  { char: "🚑", name: "ambulance", cat: "Travel" },
  { char: "🚒", name: "fire engine", cat: "Travel" },
  { char: "🚐", name: "minibus", cat: "Travel" },
  { char: "🚚", name: "truck", cat: "Travel" },
  { char: "🚛", name: "articulated lorry", cat: "Travel" },
  { char: "🚜", name: "tractor", cat: "Travel" },
  { char: "🛵", name: "motor scooter", cat: "Travel" },
  { char: "🏍️", name: "motorcycle", cat: "Travel" },
  { char: "🚲", name: "bicycle", cat: "Travel" },
  { char: "✈️", name: "airplane", cat: "Travel" },
  { char: "🚀", name: "rocket", cat: "Travel" },
  { char: "🛸", name: "flying saucer", cat: "Travel" },
  { char: "🚁", name: "helicopter", cat: "Travel" },
  { char: "⛵", name: "sailboat", cat: "Travel" },
  { char: "🚢", name: "ship", cat: "Travel" },
  { char: "🏠", name: "house", cat: "Travel" },
  { char: "🏡", name: "house garden", cat: "Travel" },
  { char: "🏢", name: "office building", cat: "Travel" },
  { char: "🏥", name: "hospital", cat: "Travel" },
  { char: "🏦", name: "bank", cat: "Travel" },
  { char: "🏨", name: "hotel", cat: "Travel" },
  { char: "🏫", name: "school", cat: "Travel" },
  { char: "⛪", name: "church", cat: "Travel" },
  { char: "🕌", name: "mosque", cat: "Travel" },
  { char: "🕍", name: "synagogue", cat: "Travel" },
  { char: "🏛️", name: "classical building", cat: "Travel" },
  { char: "🗽", name: "statue of liberty", cat: "Travel" },
  { char: "🗼", name: "Tokyo tower", cat: "Travel" },
  { char: "🏰", name: "castle", cat: "Travel" },
  { char: "🌋", name: "volcano", cat: "Travel" },
  { char: "🗻", name: "mount fuji", cat: "Travel" },
  { char: "🏕️", name: "camping", cat: "Travel" },
  { char: "🏖️", name: "beach umbrella", cat: "Travel" },
  { char: "🏝️", name: "desert island", cat: "Travel" },
  { char: "🌃", name: "night city", cat: "Travel" },
  { char: "🌆", name: "city sunset", cat: "Travel" },
  { char: "🌇", name: "city sunrise", cat: "Travel" },
  { char: "🌉", name: "bridge night", cat: "Travel" },
  { char: "🌈", name: "rainbow", cat: "Travel" },
  { char: "☀️", name: "sun", cat: "Travel" },
  { char: "🌙", name: "crescent moon", cat: "Travel" },
  { char: "⭐", name: "star", cat: "Travel" },
  { char: "🌟", name: "glowing star", cat: "Travel" },
  { char: "✨", name: "sparkles", cat: "Travel" },
  { char: "⚡", name: "high voltage", cat: "Travel" },
  { char: "🔥", name: "fire", cat: "Travel" },
  { char: "💧", name: "droplet", cat: "Travel" },
  { char: "🌊", name: "water wave", cat: "Travel" },
  { char: "❄️", name: "snowflake", cat: "Travel" },
  { char: "☃️", name: "snowman", cat: "Travel" },
  { char: "🌍", name: "globe Europe", cat: "Travel" },
  { char: "🌎", name: "globe Americas", cat: "Travel" },
  { char: "🌏", name: "globe Asia", cat: "Travel" },

  // ---------- Objects ----------
  { char: "📱", name: "mobile phone", cat: "Objects" },
  { char: "💻", name: "laptop", cat: "Objects" },
  { char: "⌨️", name: "keyboard", cat: "Objects" },
  { char: "🖥️", name: "desktop computer", cat: "Objects" },
  { char: "🖨️", name: "printer", cat: "Objects" },
  { char: "🖱️", name: "computer mouse", cat: "Objects" },
  { char: "💾", name: "floppy disk", cat: "Objects" },
  { char: "💿", name: "CD", cat: "Objects" },
  { char: "📀", name: "DVD", cat: "Objects" },
  { char: "📷", name: "camera", cat: "Objects" },
  { char: "📹", name: "video camera", cat: "Objects" },
  { char: "📺", name: "television", cat: "Objects" },
  { char: "📻", name: "radio", cat: "Objects" },
  { char: "⏰", name: "alarm clock", cat: "Objects" },
  { char: "⌚", name: "watch", cat: "Objects" },
  { char: "📡", name: "satellite antenna", cat: "Objects" },
  { char: "🔋", name: "battery", cat: "Objects" },
  { char: "🔌", name: "electric plug", cat: "Objects" },
  { char: "💡", name: "light bulb", cat: "Objects" },
  { char: "🔦", name: "flashlight", cat: "Objects" },
  { char: "🕯️", name: "candle", cat: "Objects" },
  { char: "📚", name: "books", cat: "Objects" },
  { char: "📖", name: "open book", cat: "Objects" },
  { char: "📝", name: "memo", cat: "Objects" },
  { char: "✏️", name: "pencil", cat: "Objects" },
  { char: "🖊️", name: "pen", cat: "Objects" },
  { char: "🖌️", name: "paintbrush", cat: "Objects" },
  { char: "📌", name: "pushpin", cat: "Objects" },
  { char: "📎", name: "paperclip", cat: "Objects" },
  { char: "✂️", name: "scissors", cat: "Objects" },
  { char: "🔒", name: "locked", cat: "Objects" },
  { char: "🔓", name: "unlocked", cat: "Objects" },
  { char: "🔑", name: "key", cat: "Objects" },
  { char: "🔨", name: "hammer", cat: "Objects" },
  { char: "🔧", name: "wrench", cat: "Objects" },
  { char: "⚙️", name: "gear", cat: "Objects" },
  { char: "🧲", name: "magnet", cat: "Objects" },
  { char: "💊", name: "pill", cat: "Objects" },
  { char: "💉", name: "syringe", cat: "Objects" },
  { char: "🩹", name: "adhesive bandage", cat: "Objects" },
  { char: "🔬", name: "microscope", cat: "Objects" },
  { char: "🔭", name: "telescope", cat: "Objects" },
  { char: "📦", name: "package", cat: "Objects" },
  { char: "📫", name: "mailbox", cat: "Objects" },
  { char: "💰", name: "money bag", cat: "Objects" },
  { char: "💳", name: "credit card", cat: "Objects" },
  { char: "💎", name: "gem stone", cat: "Objects" },
  { char: "⚖️", name: "balance scale", cat: "Objects" },
  { char: "🔗", name: "link", cat: "Objects" },
  { char: "📊", name: "bar chart", cat: "Objects" },
  { char: "📈", name: "chart increasing", cat: "Objects" },
  { char: "📉", name: "chart decreasing", cat: "Objects" },
  { char: "🗓️", name: "calendar", cat: "Objects" },
  { char: "📅", name: "calendar date", cat: "Objects" },
  { char: "🗑️", name: "wastebasket", cat: "Objects" },
  { char: "🎁", name: "wrapped gift", cat: "Objects" },
  { char: "🎈", name: "balloon", cat: "Objects" },
  { char: "🎉", name: "party popper", cat: "Objects" },
  { char: "🎊", name: "confetti ball", cat: "Objects" },
  { char: "🏆", name: "trophy", cat: "Objects" },
  { char: "🥇", name: "gold medal", cat: "Objects" },
  { char: "🥈", name: "silver medal", cat: "Objects" },
  { char: "🥉", name: "bronze medal", cat: "Objects" },
  { char: "⚽", name: "soccer ball", cat: "Objects" },
  { char: "🏀", name: "basketball", cat: "Objects" },
  { char: "🏈", name: "american football", cat: "Objects" },
  { char: "⚾", name: "baseball", cat: "Objects" },
  { char: "🎾", name: "tennis", cat: "Objects" },
  { char: "🏐", name: "volleyball", cat: "Objects" },
  { char: "🎱", name: "pool 8 ball", cat: "Objects" },
  { char: "🏓", name: "ping pong", cat: "Objects" },
  { char: "🏸", name: "badminton", cat: "Objects" },
  { char: "🥊", name: "boxing glove", cat: "Objects" },
  { char: "🎯", name: "direct hit", cat: "Objects" },
  { char: "🎮", name: "video game", cat: "Objects" },
  { char: "🎲", name: "game die", cat: "Objects" },
  { char: "🧩", name: "puzzle piece", cat: "Objects" },
  { char: "🎨", name: "artist palette", cat: "Objects" },
  { char: "🎭", name: "performing arts", cat: "Objects" },
  { char: "🎬", name: "clapper board", cat: "Objects" },
  { char: "🎤", name: "microphone", cat: "Objects" },
  { char: "🎧", name: "headphone", cat: "Objects" },
  { char: "🎵", name: "musical note", cat: "Objects" },
  { char: "🎶", name: "musical notes", cat: "Objects" },
  { char: "🎸", name: "guitar", cat: "Objects" },
  { char: "🎹", name: "musical keyboard", cat: "Objects" },
  { char: "🎺", name: "trumpet", cat: "Objects" },
  { char: "🎻", name: "violin", cat: "Objects" },
  { char: "🥁", name: "drum", cat: "Objects" },

  // ---------- Symbols ----------
  { char: "✅", name: "check mark", cat: "Symbols" },
  { char: "❌", name: "cross mark", cat: "Symbols" },
  { char: "❎", name: "cross mark button", cat: "Symbols" },
  { char: "➕", name: "plus", cat: "Symbols" },
  { char: "➖", name: "minus", cat: "Symbols" },
  { char: "➗", name: "divide", cat: "Symbols" },
  { char: "✖️", name: "multiply", cat: "Symbols" },
  { char: "♾️", name: "infinity", cat: "Symbols" },
  { char: "💲", name: "dollar sign", cat: "Symbols" },
  { char: "💱", name: "currency exchange", cat: "Symbols" },
  { char: "™️", name: "trade mark", cat: "Symbols" },
  { char: "©️", name: "copyright", cat: "Symbols" },
  { char: "®️", name: "registered", cat: "Symbols" },
  { char: "〰️", name: "wavy dash", cat: "Symbols" },
  { char: "➰", name: "curly loop", cat: "Symbols" },
  { char: "➿", name: "double curly loop", cat: "Symbols" },
  { char: "🔚", name: "end arrow", cat: "Symbols" },
  { char: "🔙", name: "back arrow", cat: "Symbols" },
  { char: "🔛", name: "on arrow", cat: "Symbols" },
  { char: "🔝", name: "top arrow", cat: "Symbols" },
  { char: "🔜", name: "soon arrow", cat: "Symbols" },
  { char: "✔️", name: "check mark", cat: "Symbols" },
  { char: "☑️", name: "check box", cat: "Symbols" },
  { char: "🔘", name: "radio button", cat: "Symbols" },
  { char: "🔴", name: "red circle", cat: "Symbols" },
  { char: "🟠", name: "orange circle", cat: "Symbols" },
  { char: "🟡", name: "yellow circle", cat: "Symbols" },
  { char: "🟢", name: "green circle", cat: "Symbols" },
  { char: "🔵", name: "blue circle", cat: "Symbols" },
  { char: "🟣", name: "purple circle", cat: "Symbols" },
  { char: "⚫", name: "black circle", cat: "Symbols" },
  { char: "⚪", name: "white circle", cat: "Symbols" },
  { char: "🟤", name: "brown circle", cat: "Symbols" },
  { char: "🔺", name: "red triangle up", cat: "Symbols" },
  { char: "🔻", name: "red triangle down", cat: "Symbols" },
  { char: "🔶", name: "large orange diamond", cat: "Symbols" },
  { char: "🔷", name: "large blue diamond", cat: "Symbols" },
  { char: "🔸", name: "small orange diamond", cat: "Symbols" },
  { char: "🔹", name: "small blue diamond", cat: "Symbols" },
  { char: "🔳", name: "white square button", cat: "Symbols" },
  { char: "🔲", name: "black square button", cat: "Symbols" },
  { char: "▪️", name: "black small square", cat: "Symbols" },
  { char: "▫️", name: "white small square", cat: "Symbols" },
  { char: "◾", name: "black medium square", cat: "Symbols" },
  { char: "◽", name: "white medium square", cat: "Symbols" },
  { char: "◼️", name: "black medium square", cat: "Symbols" },
  { char: "◻️", name: "white medium square", cat: "Symbols" },
  { char: "⬛", name: "black large square", cat: "Symbols" },
  { char: "⬜", name: "white large square", cat: "Symbols" },
  { char: "🟥", name: "red square", cat: "Symbols" },
  { char: "🟧", name: "orange square", cat: "Symbols" },
  { char: "🟨", name: "yellow square", cat: "Symbols" },
  { char: "🟩", name: "green square", cat: "Symbols" },
  { char: "🟦", name: "blue square", cat: "Symbols" },
  { char: "🟪", name: "purple square", cat: "Symbols" },
  { char: "🟫", name: "brown square", cat: "Symbols" }
];

// ============ Build categories ============
const categories = ["All", ...new Set(emojis.map(e => e.cat))];

// ============ State ============
let activeCategory = "All";
let searchQuery = "";

// ============ DOM refs ============
const grid = document.getElementById("emojiGrid");
const categoriesEl = document.getElementById("categories");
const searchInput = document.getElementById("search");
const toast = document.getElementById("toast");

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
    // "All" view → grouped by category with headings
    const grouped = {};
    filtered.forEach(e => {
      if (!grouped[e.cat]) grouped[e.cat] = [];
      grouped[e.cat].push(e);
    });

    grid.innerHTML = Object.entries(grouped).map(([cat, items]) => `
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
    `).join("");
  }

  // Copy handlers
  document.querySelectorAll(".emoji-btn").forEach(btn => {
    btn.addEventListener("click", () => copyEmoji(btn.dataset.emoji));
  });
}

// ============ Copy to clipboard ============
function copyEmoji(emoji) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(emoji).then(showToast).catch(() => fallbackCopy(emoji));
  } else {
    fallbackCopy(emoji);
  }
}

function fallbackCopy(emoji) {
  const textarea = document.createElement("textarea");
  textarea.value = emoji;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try { document.execCommand("copy"); showToast(); } catch (e) { /* silent */ }
  document.body.removeChild(textarea);
}

// ============ Toast ============
let toastTimer;
function showToast() {
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1500);
}

// ============ Search input ============
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderEmojis();
});

// ============ Init ============
renderCategories();
renderEmojis();
