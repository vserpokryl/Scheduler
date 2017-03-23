<nav class="navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#adminmenu-navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <span class="navbar-brand">Меню</span>
        </div>

        <div class="collapse navbar-collapse" id="adminmenu-navbar">
            <ul class="nav navbar-nav">
                <router-link to="/" tag="li"><a>Расписание</a></router-link>
                <router-link to="/statistics" tag="li"><a>Статистика</a></router-link>
                <li class="dropdown">
                    <a href="" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Редактирование
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
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">{{ Auth::user()->university->university_short_name }}
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
