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
                    <router-link to="/">
                        <i class="fa fa-home" aria-hidden="true"></i>Главная
                    </router-link>
                </li>
            @if (Auth::check())
                <li>
                    <a href="/schedule"><i class="fa fa-calendar" aria-hidden="true"></i>Расписание</a>
                </li>
                <li>
                    <a href="/logout"><i class="fa fa-sign-out" aria-hidden="true"></i>Выход</a>
                </li>
            @else
                <li>
                    <router-link to="/login">
                        <i class="fa fa-sign-in" aria-hidden="true"></i> Вход
                    </router-link>
                </li>
                <li>
                    <router-link to="/register">
                        <i class="fa fa-user-plus" aria-hidden="true"></i> Регистрация
                    </router-link>
                </li>
            @endif
            </ul>
        </div>
    </div>
</nav>