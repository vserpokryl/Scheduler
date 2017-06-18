<template>
    <div>
        <div class="signup-page">
            <div class="wrapper">
                <div class="header header-filter" style="background-image: url('/img/city.jpg'); background-size: cover; background-position: top center;">
                    <div class="container">
                        <div class="row" style="margin-bottom: 80px;">
                            <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                                <div class="card card-signup">
                                    <form class="form">
                                        <div class="header header-primary text-center">
                                            <h4>Регистрация</h4>
                                        </div>
                                        <div class="content">
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">email</i>
                                                </span>
                                                <form-input
                                                    type="text"
                                                    name="email"
                                                    label="E-Mail"
                                                    v-model="email"
                                                    :error="email_error"
                                                    @error="email_error = arguments[0]">
                                                </form-input>
                                            </div>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">school</i>
                                                </span>
                                                <form-input
                                                    type="text"
                                                    name="university_name"
                                                    label="Полное название учебного заведения"
                                                    v-model="university_name"
                                                    :error="university_name_error"
                                                    @error="university_name_error = arguments[0]">
                                                </form-input>
                                            </div>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">school</i>
                                                </span>
                                                <form-input
                                                    type="text"
                                                    name="university_short_name"
                                                    label="Сокращенное название учебного заведения"
                                                    v-model="university_short_name"
                                                    :error="university_short_name_error"
                                                    @error="university_short_name_error = arguments[0]">
                                                </form-input>
                                            </div>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">lock_outline</i>
                                                </span>
                                                <form-input
                                                    type="password"
                                                    name="password"
                                                    label="Пароль"
                                                    v-model="password"
                                                    :error="password_error"
                                                    @error="password_error = arguments[0]">
                                                </form-input>
                                            </div>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">lock_outline</i>
                                                </span>
                                                <form-input
                                                    type="password"
                                                    name="password_confirmation"
                                                    label="Подтверждение пароля"
                                                    v-model="password_confirmation"
                                                    :error="password_confirmation_error"
                                                    @error="password_confirmation_error = arguments[0]">
                                                </form-input>
                                            </div>
                                        </div>
                                        <div class="footer text-center">
                                            <button v-on:click.prevent="register" class="btn btn-simple btn-primary btn-lg register-button">Зарегистрироваться</button>
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
            university_name: '',
            university_short_name: '',
            password: '',
            password_confirmation: '',

            email_error: false,
            university_name_error: false,
            university_short_name_error: false,
            password_error: false,
            password_confirmation_error: false,
        }
    },
    methods: {
        register: function() {

            axios.post('/register', {
                email: this.email,
                university_name: this.university_name,
                university_short_name: this.university_short_name,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then((response) => {

                if (response.data.success === true) {
                    showSuccessMessage(response.data.message);

                    setTimeout(() => {
                        window.location.replace(response.data.goto);
                    }, 2000);
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