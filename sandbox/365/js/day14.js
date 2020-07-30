function poetry() {
    const adjectives = [
      "adorable",
      "beautiful",
      "clean",
      "drab",
      "elegant",
      "fancy",
      "glamorous",
      "handsome",
      "long",
      "magnificent",
      "old-fashioned",
      "plain",
      "quaint",
      "sparkling",
      "ugliest",
      "unsightly",
      "angry",
      "bewildered",
      "clumsy",
      "defeated",
      "embarrassed",
      "fierce",
      "grumpy",
      "helpless",
      "itchy",
      "jealous",
      "lazy",
      "mysterious",
      "nervous",
      "obnoxious",
      "panicky",
      "repulsive",
      "scary",
      "thoughtless",
      "uptight",
      "worried"
    ];
  
    const nouns = [
      "women",
      "men",
      "children",
      "teeth",
      "feet",
      "people",
      "leaves",
      "mice",
      "geese",
      "halves",
      "knives",
      "wives",
      "lives",
      "elves",
      "loaves",
      "potatoes",
      "tomatoes",
      "cacti",
      "foci",
      "fungi",
      "nuclei",
      "syllabuses",
      "analyses",
      "diagnoses",
      "oases",
      "theses",
      "crises",
      "phenomena",
      "criteria",
      "data"
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

    return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
  }