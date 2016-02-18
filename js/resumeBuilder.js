var bio = {
    "name": "Yamna Nid Belaid",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my resume",
    "skills": ["Quick learning", "Hard working",, "Java", "HTML"],
    "contacts": {
        "mobile": "504-906-6007",
        "email": "a.mouna02@gmail.com",
        "github": "mounamn",
        "facebook": "mouna ny",
        "location": "Eagan, MN",
        "biopic": "images/mona.jpg"
    }

}

var work = {
    "jobs": [{
        "employer": "Meditel",
        "title": "Developer Intern",
        "location": "Casablanca, Morocco",
        "dates": "February 2012 – June 2012",
        "description": "Licensed telecom operator offering multiservice consumer and business solutions, using diverse technologies"
    }, {
        "employer": "Regional Investment Centre",
        "title": "Networking Intern",
        "location": "Casablanca, Morocco",
        "dates": "June 2011 – July 2011",
        "description": "Federal investment company which develops and promotes investments in the Grand Casablanca region"
    }, {
        "employer": "IB-Maroc IT Consulting Company",
        "title": "Java Development Intern",
        "location": "Casablanca, Morocco",
        "dates": "April 2010 – June2010",
        "description": "Consulting firm offering services/solutions in data centers, security, administration & supervision of information systems"
    }, {
        "employer": "Morocco Information Technology Consulting",
        "title": "Developer Inter",
        "location": "Oujda, Morocco",
        "dates": "April 2009 – June 2009",
        "description": "Startup development company that specializes in mini applications for small and medium businesses"
    }, {
        "employer": "RADEEO",
        "title": "IT Intern",
        "location": "Oujda, Morocco",
        "dates": "June 2008",
        "description": "Self-governing community based organization dedicated to the distribution of water and electricity"
    }]
}

var projects = {
    "projects": [{
        "title": "Automating the implementation of services IP of backbone IP / MPLS and coding an application using .NET to assist services' implementation ",
        "dates": "2012",
        "description": "I added new clients to IP/MPLS backbone using Excel to grant clients access to network. Then, I analyzed and designed automation and implementation projects using UML to streamline the processes of adding new clients.I also automated the implementation of IP services of backbone IP/MPLS. In addition, I studied and achieved model to simulate the backbone IP/MPLS of Meditel using GNS3. Finally, I coded web application using .NET to assist service implementation.",
        "images": ["images/meditel1.png", "images/meditel2.png", "images/meditel3.png"]
    }, {
        "title": "Network Monitoring using Nagios",
        "dates": "2011",
        "description": "I monitored networks daily using Nagios to identify protocol errors or hardware issues in network; troubleshot issues until resolution. Last, I identify and resolve IT infrastructure problems regarding hardware (servers, switches, routers) and protocols.",
        "images": ["", ""]
    }, {
        "title": "Rewriting “MyClinic” application using J2EE",
        "dates": "2010",
        "description": "Rewrote “MyClinic” application using J2EE to function as a medical application example to present to potential clients; translated the application from PHP to J2EE *Self trained in J2EE and MySQL to develop medical applications.",
        "images": ["images/ibmaroc1.jpg", "images/ibmaroc2.jpg", "images/ibmaroc3.jpg"]
    }, {
        "title": "Realization of a web application “MyClinic” using PHP5, to manage medical practices in doctor clinics",
        "dates": "2009",
        "description": "I started by collecting patient data to design application architecture to build ‘My Clinic’ mini-application. Then, I designed and developed mini-application in PHP with team of 3 developers to reduce paperwork and increase file storage while enabling system to generate patients and prescriptions reports on a PDF format.",
        "images": ["images/mit1.png", "images/mit2.png", "images/mit3.png"]
    }, {
        "title": "Coding of  “Meter Access” application using PHP, to facilitate customer's management",
        "dates": "2008",
        "description": "Self studied Windev software to add and search client data and update information, and I coded “Meter Access” application using PHP to facilitate customer management by storing and retrieving customers’ data on a normalized MySQL database.",
        "images": ["images/radeeo1.jpg", "images/radeeo2.jpg"]
    }]
}

var education = {
    "schools": [{
        "name": "Faculty of Sciences and Technology",
        "location": "Fes, Morocco",
        "degree": "Masters",
        "majors": ["Intelligent Systems and Networks"],
        "dates": 2012,
        "url": "http://www.fst-usmba.ac.ma/"
    }, {
        "name": "Faculty of Sciences and Technology",
        "location": "Fes, Morocco",
        "degree": "Bachelors",
        "majors": ["Computer Engineering"],
        "dates": 2010,
        "url": "http://www.fst-usmba.ac.ma/"
    }, {
        "name": "Superior School of Technology",
        "location": "Oujda, Morocco",
        "degree": "Associate",
        "majors": ["Software Engineering"],
        "dates": 2009,
        "url": "http://esto.ump.ma/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/"
    }]
}

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedFb = HTMLfacebook.replace("%data%", bio.contacts.facebook);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedImg = HTMLbioPic.replace("%data%", bio.contacts.biopic);

    $("#header").append(formattedImg);

    $("#topContacts").prepend(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGit);
    $("#topContacts").append(formattedFb);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").prepend(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGit);
    $("#footerContacts").append(formattedFb);
    $("#footerContacts").append(formattedLocation);


    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedMsg);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {


            var formatedSkill = HTMLskills.replace("%data%", bio.skills[skill]);

            $("#skills").append(formatedSkill);
        }
    }
}

bio.display();

work.display = function() {
    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formatedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formatedEmployerTitle = formatedEmployer + formatedTitle;
        var formatedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formatedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formatedEmployerTitle);
        $(".work-entry:last").append(formatedLocation);
        $(".work-entry:last").append(formatedDates);
        $(".work-entry:last").append(formatedDescription);
    }
}

work.display();

projects.display = function() {
    for (project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }
}

projects.display();

education.display = function() {
    for (study in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[study].name).replace("#", education.schools[study].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[study].degree);
        var nameDegree = formattedName + formattedDegree;
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[study].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[study].location);

        $(".education-entry:last").append(nameDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);

        if (education.schools[study].majors.length > 0) {
            for (major in education.schools[study].majors) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[study].majors[major]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
    }

    for (online in education.onlineCourses) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var onlineTitleSchool = onlineTitle + onlineSchool;
        var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
        var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

        $(".education-entry:last").append(onlineTitleSchool);
        $(".education-entry:last").append(onlineDates);
        $(".education-entry:last").append(onlineURL);

    }
}

education.display();

function inName() {
    var finalName = bio.name;
    var names = bio.name.split(" ");
    names[1] = names[1].toUpperCase();
    names[2] = names[2].toUpperCase();
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

$("#mapDiv").append(googleMap);