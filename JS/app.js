var projects = JSON.parse('{\
    "items" : [\
        {\
            "title"   : "Audio Editing Webapp",\
            "desc"   : "Built a webapp in Flask, Librosa, and React to modify audio files.<br><br>App was architected as a set of microservices with an orchestrator (kubernetes) and deployed to AWS EKS.<br><br>User audio files are temporarily stored in s3, modified, and re-downloaded.",\
            "link"    : "https://github.com/lkaldyne/altered-sound-tool",\
            "imgLink" : "media/projectMedia/alteredsound.png"\
        },\
        {\
            "title"   : "Car Sales App",\
            "desc"   : "Created a BCNF and ACID-compliant database in MySQL based on raw historic car sales data from Kaggle, along with a CLI in Python providing full CRUD functionality for user accounts and car postings.",\
            "link"    : "",\
            "imgLink" : "media/projectMedia/carsalesapp.png"\
        },\
        {\
            "title"   : "RTOS For ARM Cortex",\
            "desc"   : "Built a Realtime Operating System in C and ARM assembly for the Cortex A9 chip using EDF scheduling and interrupt routines. Offered features such as task management, memory management, and I/O.",\
            "link"    : "",\
            "imgLink" : "media/projectMedia/RTOS.png"\
        },\
        {\
            "title"   : "PNG Utility Tool",\
            "desc"   : "Implemented a PNG utility tool for decoding png files, scanning chunks for corrupted CRC data, and concatenating multiple images into one aggregated png file.",\
            "link"    : "",\
            "imgLink" : "media/projectMedia/PNGTool.png"\
        },\
		{\
            "title"   : "Titanic ML",\
            "desc"   : "Built a K-Means Clustering algorithm to predict the likelihood of survival on the Titanic ship based on various factors (age, gender, class, etc.)",\
            "link"    : "https://github.com/lkaldyne/ML_Exploration/",\
            "imgLink" : "media/projectMedia/titanic.jpg"\
        },\
		{\
            "title"   : "Tumor Malignancy ML",\
            "desc"   : "Created KNN and Support Vector Machine machine learning algorithms from scratch to analyze incoming breast cancer scan data. Algorithms output whether a particular scan is a benign or malignant tumor, achieving an accuracy of 98% on a test data set.",\
            "link"    : "https://github.com/lkaldyne/ML_Exploration/",\
            "imgLink" : "media/projectMedia/knn.jpg"\
        },\
		{\
            "title"   : "The AutoCommitter",\
            "desc"   : "Built a web app to make any developer look like a dedicated code guru. Auto-Committer performs customizable, routinely commits to GitHub daily or weekly on behalf of its users, giving them a pleasing and colorful commit history.",\
            "link"    : "https://github.com/lkaldyne/autoCommitter",\
            "imgLink" : "media/projectMedia/autoCommitter.JPG"\
        },\
        {\
            "title"   : "Blogging Webapp",\
            "desc"   : "Developed a blogging web-app in Django with user creation/registration and login sessions. Features include creating, updating, and deleting posts, updating profile information, and resetting passwords.",\
            "link"    : "https://github.com/lkaldyne/bloggingWebApp",\
            "imgLink" : "media/projectMedia/djangoblog.JPG"\
        },\
        {\
            "title"   : "Arcade Claw Machine Engine",\
            "desc"   : "Architected and developed source code for an arcade claw machine in VHDL using finite-state machine logic on an FPGA board.",\
            "link"    : "https://github.com/lkaldyne/ArcadeClawMachine_Engine",\
            "imgLink" : "media/projectMedia/quartusPrime.JPG"\
        },\
        {\
            "title"   : "NLP Emotion Analyzer",\
            "desc"   : "Built a sentence emotion analyzer using python machine learning and NLP libraries. Successfully achieved an accuracy of 88.5% correct emotion detection across various series of tests",\
            "link"    : "",\
            "imgLink" : "media/projectMedia/ML.png"\
        },\
        {\
            "title"   : "Embedded MP3 Player",\
            "desc"   : "Developed an ASCII music reader/player on the Onion Omega 2 embedded linux chip. Current features include reading and playing notes, switching octaves, and toggling between piano and drum modes.<br><br>This project acts as a \'phase 1\' to the overall goal of having a fully-functional audio soundboard for mixing and DJing!",\
            "link"    : "https://github.com/lkaldyne/ascii_music_player",\
            "imgLink" : "media/projectMedia/onionOmega2.jpg"\
        },\
        {\
            "title"   : "100\'000 digit calculator",\
            "desc"   : "Created a 100\'000-digit number calculator in C++",\
            "link"    : "https://github.com/lkaldyne/The_100000-Digit_Calculator",\
            "imgLink" : "media/projectMedia/calculatorApp.JPG"\
        },\
        {\
            "title"   : "Crazy Car Jump",\
            "desc"   : "Programmed a pseudo-3d crazy-taxi game replica using PyProcessing and custom 3d/depth logic.",\
            "link"    : "https://github.com/lkaldyne/Crazy-Car-Jump",\
            "imgLink" : "media/projectMedia/crazy_car_jump.jpg"\
        }\
    ]\
}');

var slideUp = {
    distance: '30%',
    origin: 'bottom',
    opacity: 0.5,
    delay: 250,
    easing: 'ease-out'
};

var loadProjects = function (numcols) {
    // create column divs
    let projectsContainer = document.getElementById('projectscontainer');
    for (let i = 0; i < numcols; i++) {
        let projWrapper = document.createElement("div");
        projWrapper.className = "projectcol";
        projectsContainer.appendChild(projWrapper);
    }

    let projectCols = document.getElementsByClassName('projectcol');

    for (let i = 0; i < projects.items.length; i++) {
        let projRow = document.createElement("div");
        projRow.className = "projectrow";

        let projHeader = document.createElement("div");
        projHeader.className = "projectheader";

        let projHeaderTxt = document.createElement("p");
        projHeaderTxt.className = "projectheadertext";
        projHeaderTxt.innerHTML = `${projects.items[i].title}`;

        let projHeaderLine = document.createElement("div");
        projHeaderLine.className = "projectheaderline";

        projHeader.appendChild(projHeaderTxt);
        projHeader.appendChild(projHeaderLine);
        projRow.appendChild(projHeader);

        let projInfo = document.createElement("div");
        projInfo.className = "projectinfo";

        let projInfoBckg = document.createElement("div");
        projInfoBckg.className = "projectinfobckg";
        projInfoBckg.innerHTML = `<img src="${projects.items[i].imgLink}" class="projectimg"></img>`;

        let projHidden = document.createElement("div");
        projHidden.className = "projectinfohidden";
        if (projects.items[i].link.length) {
            projHidden.innerHTML = `<p class="projectdesctext">${projects.items[i].desc}</p><a href="${projects.items[i].link}" target="_blank"><span class="iconify projecticon" data-inline="false" data-icon="ant-design:github-filled"></span></a>`;
        } else {
            projHidden.innerHTML = `<p class="projectdesctext">${projects.items[i].desc}</p>`;
        }

        projInfo.appendChild(projInfoBckg);
        projInfo.appendChild(projHidden);

        projRow.appendChild(projInfo);

        projectCols[i % numcols].appendChild(projRow);
    }
};

var initProjects = function (w) {
    document.getElementById('projectscontainer').innerHTML = "";
    if (w > 1500) {
        loadProjects(4);
    }
    else if (w > 1100) {
        loadProjects(3);
    }
    else if (w > 800) {
        loadProjects(2);
    }
    else {
        loadProjects(1);
    }
};

var beResponsive = function () {
    let w = $(window).width();

    if ($(window).scrollTop() >= 50) {
        $(".nav").css("background", "#517B84");
    }

    if (w < 800) {
        $(".nav").hide();
    } else {
        $(".nav").show();
    }

    initProjects(w);
}

var projRowHoverIn = function () {
    $(this).css("background", "#20202B");
    $(this).find(".projectinfohidden").css("opacity", "1");
    $(this).find(".projectheadertext").css("color", "white");
    $(this).find(".projectheaderline").css("background", "white");
    $(this).find(".projectinfobckg").css("opacity", "0");
    $(this).find(".projectinfohidden").css("z-index", "0");
};

var projRowHoverOut = function () {
    $(this).css("background", "#EEEEEE");
    $(this).find(".projectinfohidden").css("opacity", "0");
    $(this).find(".projectheadertext").css("color", "black");
    $(this).find(".projectheaderline").css("background", "black");
    $(this).find(".projectinfobckg").css("opacity", "1");
};


$(document).ready(function () {
    particlesJS.load('particles-div', 'particlesjs-config.json');
    gsap.to('#logosvg', { delay: 0.2, marginBottom: 0, opacity: 1, duration: 0.5, ease: 'Power4.out' });
    gsap.to('#logo-firstline', { delay: 0.7, width: 165, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });
    gsap.to('#logo-secondline', { delay: 0.8, width: 125, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });
    gsap.to('#logo-thirdline', { delay: 0.9, width: 95, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });

    // gsap.from('.nav', { delay: 1.5, opacity: 0, duration: 1 })
    // gsap.from('#particles-div', { delay: 1.5, opacity: 0, duration: 1 })
    gsap.to('.intrologocontainer', { delay: 1.5, opacity: 0, zIndex: 0, duration: 1 })
    gsap.to('.nav', { delay: 1.5, zIndex: 1, duration: 1 })
    gsap.to('.intrologocontainer', { delay: 2.5, height: 0, duration: 0.1 })

    beResponsive();
    ScrollReveal().reveal('.projectrow', slideUp);

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 50, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        } // End if
    });

    // $(window).resize(function () {
    //     console.log("AYO");
    //     initProjects();
    // });
    $(window).on('resize', function () {
        beResponsive();
    });

    $(window).scroll(function () {
        var topofAbout = $("#about").offset().top; //gets offset of header
        var aboutHeight = $("#about").outerHeight(); //gets height of header
        var topofSkills = $("#skills").offset().top; //gets offset of header
        var skillsHeight = $("#skills").outerHeight(); //gets height of header
        var topofProjects = $("#projects").offset().top; //gets offset of header
        var projectsHeight = $("#projects").outerHeight(); //gets height of header

        if ($(window).scrollTop() >= 50) {
            $(".nav").css("background", "#517B84");
        }
        else {
            $(".nav").css("background", "rgba(0,0,0,0)");
        }
        if ($(window).scrollTop() >= (topofAbout) && $(window).scrollTop() < (topofAbout + aboutHeight)) {
            $("#navoptionabout").css("color", "rgba(0,0,0,0.3)");
        }
        else {
            $("#navoptionabout").css("color", "#C3E1E8");
        }
        if ($(window).scrollTop() >= (topofSkills) && $(window).scrollTop() < (topofSkills + skillsHeight)) {
            $("#navoptionskills").css("color", "rgba(0,0,0,0.3)");
        }
        else {
            $("#navoptionskills").css("color", "#C3E1E8");
        }
        if ($(window).scrollTop() >= (topofProjects) && $(window).scrollTop() < (topofProjects + projectsHeight)) {
            $("#navoptionprojects").css("color", "rgba(0,0,0,0.3)");
        }
        else {
            $("#navoptionprojects").css("color", "#C3E1E8");
        }
    });

    $(".projectrow").hover(projRowHoverIn, projRowHoverOut);
    // $(".projectrow").on('mouseenter', projRowHoverIn);
    // $(".projectrow").on('mouseleave', projRowHoverOut);
});


