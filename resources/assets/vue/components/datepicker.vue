<template>
    <div class="form-group label-floating" :class="{'has-error': error, 'is-empty': value.length === 0, 'is-focused': focus}">
        <label class="control-label" :for="id">{{ label }}</label>

        <div :id="id">
            <input type="text" data-input class="form-control"
                @input="$emit('input', $event.target.value)"
                @focus="onFocus"
                @blur="focus = false"
                :value="value">
        </div>
        <span class="material-icons form-control-feedback" v-if="error">clear</span>
    </div>
</template>

<script>
import Flatpickr from 'flatpickr'
import { ru } from 'flatpickr/dist/l10n/ru';

export default {
    props: ['label', 'error', 'name', 'value', 'config'],
    data () {
        return {
            focus: false,
            datepickr: null,
        }
    },
    methods: {
        onFocus () {
            this.focus = true;
            this.$emit('error', false);
        }
    },
    computed: {
        id: function() {
            return 'id_' + this.name
        }
    },
    watch: {
        config: function(newConfig) {
            this.datepickr.config.minDate = new Date(newConfig.minDate.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
        }
    },
    mounted () {
        let el = document.getElementById(this.id);
        this.config.wrap = true;
        this.config.locale = ru;

        this.datepickr = new Flatpickr(el, Object.assign({}, this.config));
    }
}
</script>