$(function(){

	var DATA = [
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
				cover: "monblog_cover.jpg",
				gallery: ["monblog_img_01.png", "monblog_img_02.png", "monblog_img_03.png", "monblog_img_04.png", "monblog_img_05.png"]
			}
		},
		{
			id: 2,
			title: "Restaurant application",
			subtitle: "Web and Cross-Platform App",
			technos: "HTML / Css / Python / Django / Heroku / Kivy",
			summary: "The website and the cross-plateform App share the same database. The owner can change the menu and prices using an administration page. Data have persistence in the app and are updated when connected online.",
			features: ["RESTful API creation and use", "Responsive design", "Data persistence"],
			page_link: "https://pizzacisco.herokuapp.com/",
			github_link: "",
			images: {
				folder: "02-restaurant",
				cover: "pizza_cover.jpg",
				gallery: ["pizza_img.jpg"]
			}
		},
		{
			id: 3,
			title: "Galaxy",
			subtitle: "Cross-Platform game",
			technos: "Python / Kivy",
			summary: "In this running game, the player control a spaceship with a keyboard or a smartphone. He must follow a way in the space, randomly generated. The further he goes, the higher is the score. The speed and the width of the road can be changed.",
			features: ["Perspective projection", "Scroll and collision management", "Randomly generated map"],
			page_link: "",
			github_link: "https://github.com/ciscoinfo/galaxy",
			images: {
				folder: "03-galaxy",
				cover: "galaxy_cover.png",
				gallery: ["galaxy_img.png", "galaxy_vid_240p.gif"]
			}
		},
		{
			id: 4,
			title: "Motus",
			subtitle: "Cross-Platform game",
			technos: "Python / Kivy",
			summary: "This game was a famous TV show in France. The player have to guess a word, of which he knows only the length and the first letter. To do this, he makes different proposals and the computer give some hints based on the positions of the letters.",
			features: ["Algorithm", "MVC pattern", "Game design"],
			page_link: "",
			github_link: "https://github.com/ciscoinfo/galaxy",
			images: {
				folder: "04-motus",
				cover: "motus_cover.png",
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
				cover: "pyreclam_cover.jpg",
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
				cover: "trading_cover.png",
				gallery: ["trading_img_01.png", "trading_img_02.png"]
			}
		}
	];


	const PROJECT_PATH = "images/projects/";

	const CARDS_CTN = $('.portfolio-cards-container');



	// Afficher les cards projects
	setCards();

	// modal window opening
	$('.modal-button').on('click', function() {

		let cardId = this.id;
		// console.log(cardId);
		let dataCard;

		currentIndex = 0;

		// find the element wich matching id
		for (i = 0; i < DATA.length; i++) {
			// console.log(DATA[i]["id"]);
			if (DATA[i]["id"].toString() === cardId) {
				dataCard = DATA[i];
			}
		}

		// populate modal window
		$('#modal-title').text(dataCard['title']);
		$('#modal-subtitle').text(dataCard['subtitle']);
		$('#modal-summary').text(dataCard['summary']);
		let features = dataCard['features'];

		for (i = 0; i < features.length; i++) {
			let newLi = "<li>" + features[i] + "</li>";
			$('#modal-features').append(newLi);
		}

		if (dataCard['page_link']) {
			$('#modal-website-link').attr("href",dataCard['page_link']);
			$('.modal-wrap .button').addClass('visible');
		}
		else {
			$('#modal-website-link').attr("href","#");
		}

		if (dataCard['github_link']) {
			$('#modal-github-link').attr("href",dataCard['github_link']);
			$('.github-link').addClass('visible');
		}
		else {
			$('#modal-github-link').attr("href","#");
		}

		$('.modal-wrap').addClass('visible');

		// ------------- Carousel -------------

		const IMG_SLIDES = dataCard['images']['gallery'];
		
		while (IMG_SLIDES.length < 3) {
			IMG_SLIDES.push(IMG_SLIDES[0]);
		}

		const NB_SLIDES = IMG_SLIDES.length;

		LAST_INDEX = NB_SLIDES - 1;

		let folderImage = dataCard['images']['folder'];
		let imageUrlPrefix = PROJECT_PATH + folderImage + "/";
		
		console.log(IMG_SLIDES);



		initSlider();

		initSlides();

		console.log("current index init = " + currentIndex);

		function initSlider() {
			// init slider
			slider.css({
				marginLeft: -SLIDE_WIDTH,
				width: SLIDE_WIDTH * NB_SLIDES,
			});
		}
	
		function initSlides() {
			// create slides
			for (i = 0; i < NB_SLIDES; i++) {
				slider.append( "<img class='slide' src='' alt=''>" );
			}
	
			// populate slides
			for (i = 0; i < NB_SLIDES; i++) {
				$('#slider .slide:nth-child(' + (i + 1) + ')').attr("src", imageUrlPrefix + IMG_SLIDES[i]);
			}
		}


	});


	btnLeft.click(function() {
		console.log("click on left");
		console.log("current index = " + currentIndex);
		slider.animate({
			left: "+=" + SLIDE_WIDTH
		}, 800, function () {
			currentIndex = getPreviousIndex(currentIndex);
			console.log("current index = " + currentIndex);
			// The last image becomes the first
			$('#slider .slide:last-child').prependTo(slider);
			resetSliderImages();
		});
	});


	btnRight.on('click', function() {
		console.log("click on right");
		console.log("current index = " + currentIndex);
		slider.animate({
			left: "-=" + SLIDE_WIDTH
		}, 800,  function () {
			currentIndex = getNextIndex(currentIndex);
			console.log("current index = " + currentIndex);
			// The first image becomes the last
			$('#slider .slide:first-child').appendTo(slider);
			resetSliderImages();
		});
	});

	function resetSliderImages() {
		slider.css('left', "0");
	}

	function getPreviousIndex(currentIndex) {
		let res = 0;
		res = (currentIndex > 0) ? currentIndex - 1 : LAST_INDEX;
		return res;
	}
	
	function getNextIndex(currentIndex) {
		let res = 0;
		res = (currentIndex < LAST_INDEX) ? currentIndex + 1 : 0;
		return res;
	}

	// modal window closing
	$('.close').on('click', function() {
		clearModal();
	});

	$('.mask').on('click', function() {
		clearModal();
	});

	function clearModal() {
		$('.modal-wrap').removeClass('visible');
		$('#modal').removeClass('visible');
		$('#modal-features').empty();
		$('.modal-wrap .button').removeClass('visible');
		$('.github-link').removeClass('visible');
		// remove all childs in the slider
		slider.empty();
	}


	// ------------- Carousel -------------








	// Afficher les cards projects
	function setCards() {
		for (i = 0; i < DATA.length; i++) {
			let title = DATA[i]['title'];
			let techno = DATA[i]['technos'];
			let id = DATA[i]['id'];
			let folderImage = DATA[i]['images']['folder'];
			let imageUrl = PROJECT_PATH + folderImage + "/" + DATA[i]['images']['cover'];

			let card = "<div class='card-wrapper'><div class='card'></div><div class='infos'><div class='title'>" + title + "</div><div class='technos'>" + techno + "</div></div><div id='" + id + "' class='modal-button'>INFOS</div></div>";

			CARDS_CTN.append(card);

			$('.card-wrapper:last-child .card').css("background-image", "url(" + imageUrl + ")");
		}
	}

});// end
