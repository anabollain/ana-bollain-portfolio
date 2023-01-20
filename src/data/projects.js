const projectData = [
    {
        "id": 1,
        "type": "React",
        "name": "Rick and Morty",
        "desc": "Personal | React · HTML5 · Sass | Responsive",
        "version" : "Responsive",
        "photo": require("../images/rick-morty.JPG"),
        "githubURL": "https://github.com/anabollain/adalab-react-personal-final-project-rick-morty",
        "mainURL": "https://anabollain.github.io/adalab-react-personal-final-project-rick-morty/"
    },
    {
        "id": 2,
        "type": "Javascript",
        "name": "Minion's Cards",
        "desc": "Team | Javascript · HTML5 · Sass | Responsive",
        "version" : "Responsive",
        "photo": require("../images/minions-cards.JPG"),
        "githubURL": "https://github.com/anabollain/adalab-javascript-team-project-minions-cards",
        "mainURL": "https://anabollain.github.io/adalab-javascript-team-project-minions-cards/"
    },
    {
        "id": 3,
        "type": "Javascript",
        "name": "Breaking Bad",
        "desc": "Personal | Javascript · HTML5 · Sass | Desktop",
        "version" : "Desktop",
        "photo": require("../images/breaking-bad.JPG"),
        "githubURL": "https://github.com/anabollain/adalab-javascript-personal-final-project-breaking-bad",
        "mainURL": "https://anabollain.github.io/adalab-javascript-personal-final-project-breaking-bad/"
    },
    {
        "id": 4,
        "type": "Node",
        "name": "Coding Time Refactoring",
        "desc": "Team | React · Node · Express · SQLite | Responsive",
        "version" : "Responsive",
        "photo": require("../images/coding-time.JPG"),
        "githubURL": "https://github.com/anabollain/adalab-node-team-project-coding-time",
        "mainURL": "https://project-promo-r-module-4-team-9-production.up.railway.app/"
    },
    {
        "id": 5,
        "type": "Javascript",
        "name": "The Monsterous Battle",
        "desc": "Personal | Javascript · HTML5 · Sass | Desktop",
        "version" : "Desktop",
        "photo": require("../images/monsterous-battle.JPG"),
        "githubURL": "https://github.com/anabollain/adalab-javascript-personal-mid-project",
        "mainURL": "https://anabollain.github.io/adalab-javascript-personal-mid-project/"
    },
    {
        "id": 6,
        "type": "Layout",
        "name": "Adatravellers",
        "desc": "Team | HTML5 · CSS3 | Responsive",
        "version" : "Responsive",
        "photo": require("../images/adatravellers.JPG"),
        "githubURL": "https://github.com/anabollain/adalab-html-css-team-project-adatravelleres",
        "mainURL": "https://anabollain.github.io/adalab-html-css-team-project-adatravelleres/"
    },
    {
        "id": 7,
        "name": "Adalabers",
        "type" : "React",
        "desc": "Personal | React · HTML5 · Sass | Desktop",
        "version" : "Desktop",
        "photo": require("../images/adalabers.JPG"),
        "githubURL": "https://github.com/anabollain/adalab-react-personal-mid-project-adalabers",
        "mainURL": "https://anabollain.github.io/adalab-react-personal-mid-project-adalabers/"
    },
    {
        "id": 8,
        "type": "Javascript",
        "name": "Memory Game",
        "desc": "Personal | Javascript · HTML5 · Sass | Desktop",
        "version" : "Desktop",
        "photo": require("../images/memory-game.JPG"),
        "githubURL": "https://github.com/anabollain/javascript-personal-project-memory-game",
        "mainURL": "https://anabollain.github.io/javascript-personal-project-memory-game/"
    },
    {
        "id": 9,
        "type": "Javascript",
        "name": "Whack Tartalo",
        "desc": "Personal | Javascript · HTML5 · Sass | Desktop",
        "version" : "Desktop",
        "photo": require("../images/whack-tartalo.JPG"),
        "githubURL": "https://github.com/anabollain/javascript-personal-project-whack-tartalo",
        "mainURL": "https://anabollain.github.io/javascript-personal-project-whack-tartalo/"
    },
    {
        "id": 10,
        "type": "Javascript",
        "name": "Drum Kit",
        "desc": "Personal | Javascript · HTML5 · CSS3 | Desktop",
        "version" : "Desktop",
        "photo": require("../images/drum-kit.JPG"),
        "githubURL": "https://github.com/anabollain/javascript-personal-project-drum-kit",
        "mainURL": "https://anabollain.github.io/javascript-personal-project-drum-kit/"
    },
    {
        "id": 11,
        "type": "Javascript",
        "name": "Clock",
        "desc": "Personal | Javascript · HTML5 · CSS3 | Desktop",
        "version" : "Desktop",
        "photo": require("../images/clock-js.JPG"),
        "githubURL": "https://github.com/anabollain/javascript-personal-project-clock",
        "mainURL": "https://anabollain.github.io/javascript-personal-project-clock/"
    },
    {
        "id": 12,
        "type": "Layout",
        "name": "Flex Gallery",
        "desc": "Personal | HTML5 · CSS3 . Javascript| Responsive",
        "version" : "Desktop",
        "photo": require("../images/flexbox.JPG"),
        "githubURL": "https://github.com/anabollain/javascript-personal-project-flexbox",
        "mainURL": "https://anabollain.github.io/javascript-personal-project-flexbox/"
    },
    {
        "id": 13,
        "type": "Layout",
        "name": "Anonymous Proxy",
        "desc": "Personal | HTML5 · CSS3 | Responsive",
        "version" : "Responsive",
        "photo": require("../images/anonymous-proxy.JPG"),
        "githubURL": "https://github.com/anabollain/adalab-html-css-personal-final-project-anonymous-proxy",
        "mainURL": "https://anabollain.github.io/adalab-html-css-personal-final-project-anonymous-proxy/"
    },
    {
        "id": 14,
        "type": "Layout",
        "name": "Google",
        "desc": "Personal | HTML5 · CSS3 | Desktop",
        "version" : "Desktop",
        "photo": require("../images/google.JPG"),
        "githubURL": "https://github.com/anabollain/platzi-html-css-personal-project-google",
        "mainURL": "https://anabollain.github.io/platzi-html-css-personal-project-google/"
    },
    
    {
        "id": 15,
        "type": "Layout",
        "name": "Check the Best Food",
        "desc": "Personal | HTML5 · CSS3 · CSS Grid | Desktop",
        "version" : "Desktop",
        "photo": require("../images/best-food.JPG"),
        "githubURL": "https://github.com/anabollain/platzi-css-grid-basic-personal-project-food",
        "mainURL": "https://anabollain.github.io/platzi-css-grid-basic-personal-project-food/"
    },
    {
        "id": 16,
        "type": "Javascript",
        "name": "CSS Variables",
        "desc": "Personal | Javascript · HTML5 · CSS3 | Desktop",
        "version" : "Desktop",
        "photo": require("../images/homer.JPG"),
        "githubURL": "https://github.com/anabollain/javascript-personal-project-css-variables",
        "mainURL": "https://anabollain.github.io/javascript-personal-project-css-variables/"
    }
]

export default projectData;