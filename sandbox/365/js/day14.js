const lilboxes = document.querySelector('.lilboxes');
console.log(lilboxes);
const button = document.querySelector('button');
console.log(button);

function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

function handleClick() {
    console.log('in handleClick');
    const adjectives = [
      "attractive",
      "chubby",
      "clean",
      "dazzling",
      "elegant",
      "fancy",
      "fit",
      "handsome",
      "long",
      "magnificent",
      "muscular",
      "plump",
      "quaint",
      "sparkling",
      "scruffy",
      "shapely",
      "short",
      "bewildered",
      "skinny",
      "different",
      "smiling",
      "silly",
      "fierce",
      "splendid",
      "light",
      "energentic",
      "encouraging",
      "mysterious",
      "talented",
      "successful",
      "blushing",
      "fancy",
      "calm",
      "thoughtful",
      "uptight",
      "tasty"
    ];
  
    const nouns = [
      "person",
      "thanks",
      "fact",
      "oven",
      "community",
      "people",
      "quality",
      "development",
      "direction",
      "halves",
      "freedom",
      "month",
      "truth",
      "writing",
      "cucumber",
      "meaning",
      "tomatoes",
      "cacti",
      "medicine",
      "fungi",
      "night",
      "disk",
      "location",
      "role",
      "education",
      "moment",
      "painting",
      "population",
      "unit",
      "teaching"
    ];
  
    const verb = [
        "accept",
        "accuse",
        "acquire",
        "add",
        "adore",
        "advise",
        "allow",
        "appear",
        "apologize",
        "avoid",
        "attract",
        "avoid",
        "bind",
        "bite",
        "blow",
        "break",
        "be",
        "bear",
        "build",
        "chop",
        "cling",
        "consider",
        "catch",
        "carry",
        "creep",
        "critize",
        "cry",
        "compare",
        "concern",
        "confirm",
        "cook",
        "contain",
        "cry",
        "dance",
        "decide",
        "desire",
        "develop",
        "determine",
        "deliver",
        "dream",
        "drop",
        "earn",
        "feed",
        "feel",
        "follow",
        "forbid",
        "emphasize",
        "engage",
        "generate",
        "grind",
        "hesitate",
        "hide",
        "hold",
        "have",
        "impress", 
        "improve",
        "include",
        "invest",
        "justify",
        "keep",
        "kiss",
        "kneel",
        "laugh",
        "lay",
        "leap",
        "learn",
        "like",
        "listen",
        "make"
    ];

    const conjunction =[
        "for",
        "and",
        "nor",
        "but",
        "or",
        "yet",
        "so"
    ];

    const prepositions =[
        "about",
        "above",
        "across",
        "after",
        "against",
        "along",
        "amoung",
        "around",
        "at",
        "before",
        "behind",
        "between",
        "beyond",
        "but",
        "by",
        "concerning",
        "despite",
        "down",
        "during",
        "except",
        "following",
        "for",
        "from",
        "including",
        "in",
        "into",
        "is",
        "like",
        "near",
        "of",
        "off",
        "on",
        "out",
        "over",
        "plus",
        "since",
        "through",
        "throughout",
        "to",
        "towards",
        "under",
        "until",
        "up",
        "with",
        "without"
    ];

    const pronoun =[
        "he",
        "him",
        "her",
        "she",
        "they",
        "them"
    ];

    lilboxes.innerHTML = 
    `<p class="after">${rando(pronoun)}</p> 
    <p class="after">${rando(verb)} </p>
    <p class="after">${rando(conjunction)} </p>
    <p class="after">${rando(nouns)} </p>
    <p class="after">${rando(verb)}</p>`;


  }

  button.addEventListener('click', handleClick);