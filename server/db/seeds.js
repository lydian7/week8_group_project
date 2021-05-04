import { Db } from "mongodb";

use musicquiz;
db.dropDatabase();
db.facts.insertMany ([
    {
        genre: "14",
        facts: ["The first pop video was Bohemian Rhapsody by Queen, released in 1975",
        "Today there are probably hundreds of different types of pop music, including K-pop (Korean pop), hip hop, electric dance music (EDM) and rock music.",
        "The term 'pop music' became commonly used in the 1950s when rock and roll music became a hit with teenagers.",
        "Much pop music is intended to encourage dancing, or it uses dance-oriented beats or rhythms",
        "Pop music is music that is commercially recorded for a youthful audience and is much distinguishable from jazz and folk music. The word pop was first used in 1926 to refer to music with a popular appeal."

        ]
    },
    {
        genre: "21",
        facts: ["A 2001 study found that cows produce more milk when listening to relaxing moo-sic (sorry, we couldn’t resist!)",
         "Radio and television made music more accessible to people over the 20th century.",
          "The most expensive instrument in the world is the “Lady Blunt” Stradivarius violin, which sold in 2011 for US$15.9 million.",
          "In 2008, researchers discovered that loud music makes customers in bars drink more alcohol in less time.",
           "Having made $18,000, Jimi Hendrix was the highest paid musician to perform at Woodstock."

        ]
    },
    {
        genre: "11",
        facts: ["Indian Classical Music And Jazz Have A Lot In Common.The renowned sitar player, Ravi Shankar, had quite an influence on John Coltrane and John McLaughlin.",
         "According to Unesco, jazz is “a means to develop and increase intercultural exchanges and understanding between cultures for the purpose of mutual comprehension and tolerance”.",
        "The first truly successful US jazz group called itself The Original Dixieland Jass Band. They changed the spelling to “jazz” in 1917.",
        "The word “jazz” was originally (around 1912) US slang for excitement or energy.",
         "Bruce Springsteen’s Born in the USA was the first CD to be pressed in the United State."

        ]
    }
    
]
);
db.userscore.insertMany ([
    {
        name: "Martin",
        score: 10 
    },
    {
        name: "Ahmet",
        score: 7 
    },
    {
        name: "Pooja",
        score: 15
    }  
]);