<nav class="navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#adminmenu-navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>

        <div class="collapse navbar-collapse" id="adminmenu-navbar">
            <ul class="nav navbar-nav">
                <router-link to="/" tag="li">
                    <a>
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        Расписание
                    </a>
                </router-link>
                <router-link to="/statistics" tag="li">
                    <a>
                        <i class="fa fa-area-chart" aria-hidden="true"></i>
                        Статистика
                    </a>
                </router-link>
                <li class="dropdown">
                    <a href="" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                        Редактирование
                        <b class="caret"></b>
                        <div class="ripple-container"></div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li class="dropdown-header">Редактировать</li>
                        <li><a href="/edit/colleges">ВУЗы</a></li>
                        <li><a href="/edit/faculties">Факультеты</a></li>
                        <li><a href="/edit/specialties">Специальности</a></li>
                        <li><a href="/edit/groups">Группы</a></li>
                        <li><a href="/edit/subgroups">Подгруппы</a></li>
                        <li><a href="/edit/teachers">Преподавателей</a></li>
                        <li><a href="/edit/subjects">Предметы</a></li>
                        <li><a href="/edit/type_subjects">Типы предметов</a></li>
                        <li><a href="/edit/buildings">Корпусы</a></li>
                        <li><a href="/edit/classrooms">Кабинеты</a></li>
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
