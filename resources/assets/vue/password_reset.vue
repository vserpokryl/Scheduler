<template>
    <div>
        <div class="signup-page">
            <div class="wrapper">
                <div class="header header-filter" style="background-image: url('/img/city.jpg'); background-size: cover; background-position: top center;">
                    <div class="container">
                        <div class="row" style="margin-bottom: 80px;">
                            <div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                                <div class="card card-signup">
                                    <form class="form" role="form" method="POST" action="/login">
                                        <div class="header header-primary text-center">
                                            <h4>Восстановление пароля</h4>
                                        </div>
                                        <div class="content">
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">email</i>
                                                </span>
                                                <div class="form-group label-floating is-empty">
                                                    <label class="control-label" for="email">E-Mail</label>
                                                    <input id="email" type="text" class="form-control" name="email">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="footer text-center">
                                            <button class="btn btn-simple btn-primary btn-lg">Восстановить</button>
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
            msg: 'Hello world!'
        }
    },
    created () {
        loadedAssets();
        $(document).ready(function() {
            $.material.init();
        });
        NProgress.done();
    }
}
</script>