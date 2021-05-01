import { Db } from "mongodb";

use musicquiz;
db.dropDatabase();
db.facts.insertMany ([
    {
        genre: "pop",
        facts: ["pop1", "pop2", "pop3", "pop4", "pop5"

        ]
    },
    {
        genre: "rock",
        facts: ["rock1", "rock2", "rock3", "rock4", "rock5"

        ]
    },
    {
        genre: "jazz",
        facts: ["jazz1", "jazz2", "jazz3", "jazz4", "jazz5"

        ]
    }
    

])