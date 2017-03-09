<nav class="navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-index">
            <span class="sr-only">Навигация</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    </div>
    <div class="container">
        <div class="collapse navbar-collapse" id="navigation-index">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="{{ secure_url(route('login', [], false)) }}">
                        <i class="fa fa-sign-in" aria-hidden="true"></i> Вход
                    </a>
                </li>
                <li>
                    <a href="{{ secure_url(route('register', [], false)) }}">
                        <i class="fa fa-user-plus" aria-hidden="true"></i> Регистрация
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>