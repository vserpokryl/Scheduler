<template>
    <div>
        <div class="signup-page">
            <div class="wrapper">
                <div class="header header-filter" style="background-image: url('/img/city.jpg'); background-size: cover; background-position: top center;">
                    <div class="container">
                        <div class="row" style="margin-bottom: 80px;">
                            <div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                                <div class="card card-signup">
                                    <form class="form">
                                        <div class="header header-primary text-center">
                                            <h4>Вход в панель управления</h4>
                                        </div>
                                        <div class="content">
                                            <form-input
                                                    type="text"
                                                    label="E-Mail"
                                                    v-model="email"
                                                    :error="email_error"
                                                    @error="email_error = arguments[0]"
                                                    icon="email">
                                            </form-input>
                                            <form-input
                                                type="password"
                                                label="Пароль"
                                                v-model="password"
                                                :error="password_error"
                                                @error="password_error = arguments[0]"
                                                icon="lock_outline"
                                            />
                                            <!--<div class="col-xs-12" style="margin-top: 10px;">-->
                                                <!--<router-link to="/password_reset" class="pull-right">-->
                                                    <!--Забыли пароль?-->
                                                <!--</router-link>-->
                                            <!--</div>-->

                                            <div class="col-xs-12 text-center">
                                                <form-checkbox label="Запомнить меня" v-model="remember"/>
                                            </div>
                                        </div>
                                        <div class="footer text-center">
                                            <button v-on:click.prevent="login" class="btn btn-simple btn-primary btn-lg">Войти</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="footer" style="position: absolute;bottom: 0;width: 100%;height: 80px;">
                        <div class="container">
                            <div class="copyright pull-right">
                                &copy; 2017, made with <i class="fa fa-heart heart"></i> by <a href="https://github.com/Nanografon" target="_blank">Nanografon</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: '',

            email_error: false,
            password_error: false,

            remember: true,
        }
    },
    methods: {
        login: function() {
            axios.post('/login', {
                email: this.email,
                password: this.password,
                remember: this.remember
            }).then((response) => {

                if (response.data.success === true) {
                    window.location.replace(response.data.goto);
                } else {

                    if (response.data.invalid === true) {
                        for (let elem in response.data.messages) {
                            let elem_messages = response.data.messages[elem];

                            this[elem + '_error'] = true;

                            elem_messages.forEach((message) => {
                                showErrorMessage(message)
                            });
                        }
                    } else {
                        console.error(response);
                        console.error(response.data);
                        showErrorMessage(response.data.message);
                    }

                }
            }).catch((error) => {
                console.error(error);
            });
        }
    },
    created () {
        loadedAssets();
        NProgress.done();
    }
}
</script>