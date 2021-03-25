var myProjects = [
    {
        id: 1,
        title: "Personal Blog",
        subtitle: "Website",
        technos: "Python / Flask / Heroku",
        summary: "A blog where you can post/modify/delete messages, add comments with authentication.",
        features: ["Template integration", "Posts & comments management (SQLite, SQLAlchemy)", "authentication & security (Flask-Login)"],
        page_link: "https://cisco-blog.herokuapp.com/",
        github_link: "https://github.com/ciscoinfo/Justablog",
        images: {
            folder: "01-blog",
            cover: "monblog_img_01.png",
            gallery: ["monblog_img_01.png", "monblog_img_02.png", "monblog_img_03.png", "monblog_img_04.png", "monblog_img_05.png"]
        }
    },
    {
        id: 2,
        title: "Restaurant Apps",
        subtitle: "Web and Cross-Plateform App",
        technos: "HTML / Css / Python / Django / Heroku / Kivy",
        summary: "The website and the cross-plateform App share the same database. The owner can change the menu and prices using an administration page. Data have persistence in the app and are updated when connected online.",
        features: ["RESTful API creation and use", "Responsive design", "Data persistence"],
        page_link: "https://pizzacisco.herokuapp.com/",
        github_link: "",
        images: {
            folder: "02-restaurant",
            cover: "pizza_img.jpg",
            gallery: ["pizza_img.jpg"]
        }
    },
    {
        id: 3,
        title: "Galaxy",
        subtitle: "Cross-Plateform game",
        technos: "Python / Kivy",
        summary: "In this running game, the player control a spaceship with a keyboard or a smartphone. He must follow a way in the space, randomly generated. The further he goes, the higher is the score. The speed and the width of the road can be changed.",
        features: ["Perspective projection", "Scroll and collision management", "Randomly generated map"],
        page_link: "",
        github_link: "https://github.com/ciscoinfo/galaxy",
        images: {
            folder: "03-galaxy",
            cover: "galaxy_img.png",
            gallery: ["galaxy_img.png", "galaxy_vid_240p.gif"]
        }
    },
    {
        id: 4,
        title: "Motus",
        subtitle: "Cross-Plateform game",
        technos: "Python / Kivy",
        summary: "This game was a famous TV show in France. The player have to guess a word, of which he knows only the length and the first letter. To do this, he makes different proposals and the computer give some hints based on the positions of the letters.",
        features: ["Algorithm", "MVC pattern", "Game design"],
        page_link: "",
        github_link: "https://github.com/ciscoinfo/galaxy",
        images: {
            folder: "04-motus",
            cover: "motus_img_01.png",
            gallery: ["motus_img_01.png", "motus_img_02.png", "motus_img_03.png", "motus_vid_240p.gif"]
        }
    },
    {
        id: 5,
        title: "PyReclam",
        subtitle: "Application",
        technos: "Python / PySide2 (Qt)",
        summary: "This software helps the user to manage common complaints and requests. You can add/delete/modify complaints, contacts, add chronological informations and comments. Data are saved locally.",
        features: ["Identify customer's needs", "Iterative and Incremental Process", "MVC pattern"],
        page_link: "",
        github_link: "",
        images: {
            folder: "05-reclam",
            cover: "pyreclam_img.png",
            gallery: ["pyreclam_img.png", "pyreclam-vid-480p.gif"]
        }
    },
    {
        id: 6,
        title: "Currency Tracking",
        subtitle: "Application and Web App",
        technos: "Python / Django / PythonAnywhere / PySide2 (Qt)",
        summary: "Both the software and the Web app connect to an update Forex API. The user can select the currency graphs he wants to display and the time-unit.",
        features: ["getting data of a REST API", "Displaying data with Js / Charts.js"],
        page_link: "http://ciscoprog.pythonanywhere.com/days=7&currencies=USD",
        github_link: "",
        images: {
            folder: "06-forex",
            cover: "trading_img_01.png",
            gallery: ["trading_img_01.png", "trading_img_02.png"]
        }
    }
];


var myInfos = {
    1: {
        title: "titre 1",
        subtitle: "sous-titre 1"
    },
    2: {
        title: "titre 2",
        subtitle: "sous-titre 2"
    },
    3: {
        title: "titre 3",
        subtitle: "sous-titre 3"
    }
};

