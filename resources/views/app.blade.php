<html>
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
    <section id="about">

    </section>
    <script src="/js/app.js"></script>
    </body>
</html>