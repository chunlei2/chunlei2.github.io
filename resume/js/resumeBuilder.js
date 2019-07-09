/*
This is empty on purpose! Your code to build the resume will go here.
 */

 const bio = {
    name: 'Chunlei Liu',
    role : 'Web Developer',
    contacts : {mobile: '2177217672',
                email: 'chunleiliu1995@gmail.com',
                github: 'chunlei2',
                //twitter: 'chunlei_liu',
                location: 'Champaign'},
    welcomeMessage: 'aaaaaaaaaaa',
    skills: ['HTML', 'CSS', 'Java Script', 'Python', 'SAS', 'R', 'SQL', 'Hadoop'],
    biopic: './images/fry.jpg',
    display: function (){
        let formattedName = HTMLheaderName.replace('%data%', bio.name);
        let formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedHeader = formattedName + formattedRole;
        $("#header").prepend(formattedHeader);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMsg);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        //var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        //var blog = HTMLblog.replace("%data%", bio.contacts.blog);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        var contactData = mobile + email + /*twitter*/ github /*+ blog*/ + location;
        $("#topContacts, #footerContacts").append(contactData);
        if(bio.skills.length > 0) {

            $("#header").append(HTMLskillsStart);
    
        }
        bio.skills.forEach(function(skill) {

            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
    
        })
    }
 };
 bio.display();

 const work = {
    jobs: [{employer: 'University of Illinois at Urbana-Champaign',
            title: 'Research Assistant',
            location: 'Champaign',
            dates: 'Jul2018 - Dec2018',
            description: 'Utilized Python to scratch speech text files from Securities and Exchange Commission(SEC) website \
            <br>Collaborated with 3 teammates to clean 2059 speech text files of SEC from 1998 to 2011 and labelled text files \
            <br>Embedded individual words into vector space and applied sentiment analysis on text files'}, 
            {employer: 'University of Illinois at Urbana-Champaign',
            title: 'Grader',
            location: 'Champaign',
            dates: 'Jun2018 - Aug2018',
            description: 'Weekly designed the deduction criteria for the homework and the midterm with the professor\
            <br>Graded the homework and midterm based on statistical report files and SAS code files including hypothesis testing, ANOVA, regression models and unsupervised learning \
            <br>Managed the grades of students through Compass system'},
            {employer: 'National Bureau of Statistics',
            title: 'Data Analyst Intern',
            location: 'WuXi',
            dates: 'Jun2016 - Sep2016',
            description: 'Merged economic development data from database and other data from the internet\
            <br>Completed data cleaning, feature engineering, data visualization and calculated important KPIs \
            <br>Built linear regression model with L2 penalty to predict GDP and provided inference on statistical significant variables'}],

    display: function (){
        work.jobs.forEach(function(job){

            $("#workExperience").append(HTMLworkStart);
    
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
    
            $(".work-entry:last").append(formattedEmployerTitle);
    
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDates);
    
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedLocation);
    
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
    
        });
    }
 };
 work.display();

 const projects = {
     projects: [{
         title: 'Airline Data Analysis Project',
         dates: 'Apr2019 - May2019',
         description: 'Saved 10G airline data into Hadoop file system, manipulated the data with map reduce \
                <br>Analyzed the data with Hive, calculated the mean, maximum, standard error of departure delay based on each month, each week, each state\
                <br>Visualized the summary statistics with R, explored the main reason for the departure delay',
        images: ['./images/fry.jpg', '/images/fry.jpg']
     }, {
        title: 'Show and Tell Project',
        dates: 'Nov2018 - Dec2018',
        description: 'Implemented a research paper from Google DeepMind which generates complete sentences from an input image with Pytorch \
               <br>Constructed Convolutional Neural Network(CNN) to encode the image and Recurrent Neural Network(RNN) to generate words, leveraging GPU from Blue Water Super Computer to accelerate the implementation\
               <br>Evaluated the performance with Bilingual Evaluation Understudy Score(BLEU)',
       images: ['./images/fry.jpg', 'images/fry.jpg']
    }],
     display: function (){
        projects.projects.forEach(function(project){

            $("#projects").append(HTMLprojectStart);
    
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedTitle);
    
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedDates);
    
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedDescription);
    
            
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
           
                
            });
    
        });
     }

 }
 projects.display();

 const education = {
     schools: [{
         name: 'University of Illinois at Urbana-Champaign',
         location: 'Champaign',
         degree: 'Master',
         majors: ['Statistics'],
         dates: 'Aug2017 -- May2019'
     },
     {
        name: 'Zhejiang Gongshang University',
        location: 'HangZhou',
        degree: 'Bachelor',
        majors: ['Economic Statistics'],
        dates: 'Aug2013 -- Jun2017'
    }],
    onlineCourses: [{
        title: 'Front-End Web Developer',
        school: 'Udacity',
        dates: 'May2019 -- June2019',
        url: 'https://graduation.udacity.com/confirm/KCU4QL3U'
    }],

    display: function (){
        education.schools.forEach(function(school) {

            $("#education").append(HTMLschoolStart);
    
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            $(".education-entry:last").append(formattedName);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedLocation);
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedMajor);
        });
        
        education.onlineCourses.forEach(function(classes) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", classes.title);
            $(".education-entry:last").append(formattedTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%", classes.school);
            $(".education-entry:last").append(formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", classes.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedURL = HTMLonlineURL.replace("%data%", classes.url);
            formattedURL = formattedURL.replace('#', classes.url)
            $(".education-entry:last").append(formattedURL);
        });

    }

 };
 education.display();

  // keeps track of clicks made on the site
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
  
    logClicks(x,y);
  });

$("#mapDiv").append(googleMap);