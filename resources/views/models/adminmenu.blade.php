<nav class="navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Меню</a>
        </div>

        <div class="collapse navbar-collapse" id="example-navbar">
            <ul class="nav navbar-nav">
                <li class="{{ Request::is("/") ? 'active' : '' }}"><a href="/">Расписание</a></li>
                <li class="{{ Request::is("statistic") ? 'active' : '' }}"><a href="/statistic">Статистика</a></li>
                <li class="dropdown {{ array_search(Request::path(), [
                    'edit/colleges',
                    'edit/faculties',
                    'edit/specialties',
                    'edit/groups',
                    'edit/subgroups',
                    'edit/teachers',
                    'edit/subjects',
                    'edit/type_subjects',
                    'edit/buildings',
                    'edit/classrooms'
                ]) > 0 ? 'active' : ''}}">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Редактирование
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
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">{{ Auth::user()->username }}
                        <b class="caret"></b>
                        <div class="ripple-container"></div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="{{ url('/logout') }}">Выход</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
