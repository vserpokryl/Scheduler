<nav class="navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#adminmenu-navbar">
            <span class="sr-only">Навигация</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    </div>
    <div class="container">
        <div class="collapse navbar-collapse" id="adminmenu-navbar">
            <ul class="nav navbar-nav">
                <router-link to="/schedule" tag="li">
                    <a>
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        Расписание
                    </a>
                </router-link>
                <li class="dropdown">
                    <a href="" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-area-chart" aria-hidden="true"></i>
                        Статистика
                        <b class="caret"></b>
                        <div class="ripple-container"></div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <router-link to="/statistics/employment/classrooms" tag="li">
                            <a>Занятость аудиторий</a>
                        </router-link>
                        <router-link to="/statistics/employment/teachers" tag="li">
                            <a>Занятость преподавателей</a>
                        </router-link>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                        Управление
                        <b class="caret"></b>
                        <div class="ripple-container"></div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li class="dropdown-header">Редактировать</li>
                        <router-link to="/edit/faculties" tag="li">
                            <a>Факультеты</a>
                        </router-link>
                        <router-link to="/edit/specialties" tag="li">
                            <a>Специальности</a>
                        </router-link>
                        <router-link to="/edit/groups" tag="li">
                            <a>Группы</a>
                        </router-link>
                        <router-link to="/edit/teachers" tag="li">
                            <a>Преподаватели</a>
                        </router-link>
                        <router-link to="/edit/subjects" tag="li">
                            <a>Предметы</a>
                        </router-link>
                        <router-link to="/edit/buildings" tag="li">
                            <a>Корпуса</a>
                        </router-link>
                        <router-link to="/edit/classrooms" tag="li">
                            <a>Кабинеты</a>
                        </router-link>
                        <router-link to="/edit/teachingloads" tag="li">
                            <a>Учебная нагрузка</a>
                        </router-link>
                    </ul>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a disabled="disabled">
                        <i class="fa fa-university" aria-hidden="true"></i>
                        {{ Auth::user()->university->university_short_name }}
                    </a>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                        {{ Auth::user()->email }}
                        <b class="caret"></b>
                        <div class="ripple-container"></div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="/logout">Выход</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>