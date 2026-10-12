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

  // ---------- Hearts & Love ----------
  { char: "❤️", name: "red heart love emoji for whatsapp facebook instagram", cat: "Hearts" },
  { char: "🧡", name: "orange heart emoji", cat: "Hearts" },
  { char: "💛", name: "yellow heart emoji", cat: "Hearts" },
  { char: "💚", name: "green heart emoji", cat: "Hearts" },
  { char: "💙", name: "blue heart emoji", cat: "Hearts" },
  { char: "💜", name: "purple heart emoji", cat: "Hearts" },
  { char: "🖤", name: "black heart emoji", cat: "Hearts" },
  { char: "🤍", name: "white heart emoji", cat: "Hearts" },
  { char: "🤎", name: "brown heart emoji", cat: "Hearts" },
  { char: "💔", name: "broken heart sad emoji", cat: "Hearts" },
  { char: "❣️", name: "heart exclamation emoji", cat: "Hearts" },
  { char: "💕", name: "two hearts love emoji", cat: "Hearts" },
  { char: "💞", name: "revolving hearts emoji", cat: "Hearts" },
  { char: "💓", name: "beating heart emoji", cat: "Hearts" },
  { char: "💗", name: "growing heart emoji", cat: "Hearts" },
  { char: "💖", name: "sparkling heart love emoji", cat: "Hearts" },
  { char: "💘", name: "heart arrow cupid emoji", cat: "Hearts" },
  { char: "💝", name: "heart ribbon gift emoji", cat: "Hearts" },
  { char: "💟", name: "heart decoration emoji", cat: "Hearts" },
  { char: "♥️", name: "heart suit emoji", cat: "Hearts" },
  { char: "💋", name: "kiss mark lips emoji", cat: "Hearts" },
  { char: "💌", name: "love letter emoji", cat: "Hearts" },

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

// ============ Build categories ============
const categories = ["All", ...new Set(emojis.map(e => e.cat))];

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

  // Copy handlers — pass the button element so bubble knows where to appear
  document.querySelectorAll(".emoji-btn").forEach(btn => {
    btn.addEventListener("click", () => copyEmoji(btn.dataset.emoji, btn));
  });
}

// ============ Copy to clipboard ============
function copyEmoji(emoji, btnEl) {
  const onSuccess = () => showBubble(btnEl);
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
  try { document.execCommand("copy"); showBubble(btnEl); } catch (e) { /* silent */ }
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

// ============ Search input ============
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderEmojis();
});

// ============ Init ============
renderCategories();
renderEmojis();
