<html lang="en">
    <head>
        <title>Ian Andersen</title>
        <meta charset="utf-8"/>
        <meta name="description" content="I am a full stack web developer with experience in all aspects of web design."/>
        <meta name="author" content="Ian Andersen" />
        <meta name="copyright" content="Ian Andersen" />
        <link type="text/css" rel="stylesheet" href="{{ mix('css/app.css') }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
    <section id="jumbotron">
        <div id="centerContent">
            <h1>Hello, my name is <span class="emphasis-light">Ian Andersen</span></h1>
            <h2>I am a full stack web developer</h2>
        </div>
        <div id="scrollDown">
            <a href="#about">
                See More<br/>
                <i id="scrollDownCaret" class="fa fa-chevron-down"></i>
            </a>
        </div>
        <canvas id="jumbotronCanvas"></canvas>
    </section>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Ian Andersen</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">About <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Skills</a>
                <a class="nav-item nav-link" href="#">Portfolio</a>
                <a class="nav-item nav-link" href="#">Contact Me</a>
            </div>
        </div>
    </nav>
    <section id="about" class="pageSection col-md-12">
        <h2 class="sectionTitle">About Me</h2>
        {{--<img id="bioImage" class="offset-md-1 col-md-2" src="http://ianstuff.com/img/gallery_photos/thumbnail/IMG_2760.jpg"/>--}}
        <p id="bioText" class="offset-md-4 col-md-8">I began programming in 2012, making games for my own enjoyment, then began learning Java.
            In 2015 I wrote my first full stack application, and in 2016 I began working part time as a web developer,
            learning new technologies along the way. I am hardworking, a quick learner, and I enjoy working with people
            as well as code.
        </p>
        <h3>Experience</h3>
        <ul id="experienceList">
            <li class="experienceItem">
                <span class="title col-md-4">Junior Full Stack Web Developer at Finalweb</span><span class="duration col-md-4"><span class="start">August 2016</span><span class="end">Current</span></span><a class="expand col-md-1" href="#">+</a>
                <p class="description">At Finalweb we used Laravel and ReactJS, along with various other technologies to create a powerful
                    WYSIWYG CMS designed primarily for churches. I began with no experience with these technologies, but
                    after a short time I was able to contribute in bug fixing, adding new features, and even customer
                    support. Now I can comfortably interact with and improve all aspects of our flagship application.</p>
            </li>
            <li class="experienceItem">
                <span class="title col-md-4">TA at The Master's University</span><span class="duration col-md-4"><span class="start">August 2017</span><span class="end">June 2018</span></span><a class="expand col-md-1" href="#">+</a>
                <p class="description">I graded assignments and communicated with students in various computer science
                    classes, including Data Structures, Web Design, and Intro to Unix and Linux.</p>
            </li>
            <li class="experienceItem">
                <span class="title col-md-4">Bachelor's Degree from The Master's University</span><span class="duration col-md-4"><span class="start">August 2016</span><span class="end">May 2019</span></span><a class="expand col-md-1" href="#">+</a>
                <p class="description">I finished university in three years with a double emphasis in Computer Science
                and Information Systems. I was awarded the President's Scholarship for academic excellence and kept the
                scholarship throughout my time at the school.</p>
            </li>
            <li class="experienceItem">
                <span class="title col-md-4">Computer Science Club at The Master's University</span><span class="duration col-md-4"><span class="start">August 2017</span><span class="end">May 2019</span></span><a class="expand col-md-1" href="#">+</a>
                <p class="description">I attended the club in my first year of university, was elected Events Coordinator
                in my second year, and elected president in my third year. I interacted with industry professionals,
                arranged meetings, competed in two ACM competitions, and planned events.</p>
            </li>
        </ul>
    </section>
    <section id="skills" class="pageSection col-md-12 clearfix">
        <h2 class="sectionTitle">Skills</h2>
        <div id="skillsListContainer" class="col-md-6">
            <div class="col-md-3 skillCategory">
                <h3 class="skillsSubTitle">
                    Server Side
                </h3>
                <ul class="skillsList">
                    <li>Java</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>MySQL</li>
                </ul>
            </div>
            <div class="col-md-3 skillCategory">
                <h3 class="skillsSubTitle">
                    Front-End
                </h3>
                <ul class="skillsList">
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>BackboneJS</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div class="col-md-3 skillCategory">
                <h3 class="skillsSubTitle">
                    Workplace
                </h3>
                <ul class="skillsList">
                    <li>Agile Programming</li>
                    <li>JIRA</li>
                    <li>Git Flow</li>
                    <li>Interacting Directly with Clients</li>
                </ul>
            </div>
        </div>
        <div id="skillsCanvasContainer" class="col-md-4">
            <canvas id="skillsCanvas"></canvas>
        </div>
    </section>
    <section id="portfolio" class="pageSection row">
        <h2 class="sectionTitle">Portfolio</h2>
        <div class="portfolioItem col-md-4">
            <h3 class="title">
                HTML High 5
            </h3>
            <img src="/images/htmlhigh5.jpg" alt="HTML High 5" class="featuredImage">
            <p class="description">Lorem Ipsum Dolor Sit Amet</p>
            <a class="btn btn-primary" href="https://htmlhigh5.com" target="_blank">See for Yourself!</a>
            <a class="btn btn-default" href="https://bitbucket.org/guadalcanal1/htmlhigh5/src/master/" target="_blank">Check the Source Code</a>
        </div>
        <div class="portfolioItem col-md-4">
            <h3 class="title">
                Finalweb 2.0
            </h3>
            <img src="/images/finalweb.png" alt="Finalweb 2.0" class="featuredImage">
            <p class="description"></p>
            <a class="btn btn-primary" href="https://finalweb.com" target="_blank">See for Yourself!</a>
        </div>
        <div class="portfolioItem col-md-4">
            <h3 class="title">
                Popsic.io
            </h3>
            <img src="/images/popsicio.png" alt="Popsic.io" class="featuredImage">
            <p class="description"></p>
            <a class="btn btn-primary" href="https://popsic.io" target="_blank">See for Yourself!</a>
            <a class="btn btn-default" href="https://github.com/iandersen/popsic.io" target="_blank">Check the Source Code</a>
        </div>
        <div class="portfolioItem col-md-4">
            <h3 class="title">
                Drone Car
            </h3>
            <img src="" alt="Drone Car" class="featuredImage">
            <p class="description"></p>
            <a class="btn btn-default" href="https://github.com/iandersen/drone-car" target="_blank">Check the Source Code!</a>
        </div>
    </section>
    <section id="contact" class="pageSection col-md-12">
        <h2 class="sectionTitle">Contact Me</h2>
    </section>
    <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>