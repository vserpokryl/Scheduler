<template>
    <div class="input-group">
        <span class="input-group-addon">
            <i class="material-icons">{{ icon }}</i>
        </span>
        <div class="form-group label-floating" :class="{'has-error': error, 'is-empty': value.length === 0, 'is-focused': focus}">
            <label class="control-label" :for="name">{{ label }}</label>
            <input class="form-control"
                :type="type"
                :name="name"
                :id="name"
                :value="value"
                @input="$emit('input', $event.target.value)"
                @focus="onFocus"
                @blur="focus = false"
            >
            <span class="material-icons form-control-feedback" v-if="error">clear</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['icon', 'label', 'error', 'value', 'type', 'name'],
    data () {
        return {
            focus: false,
        }
    },
    methods: {
        onFocus () {
            this.focus = true;
            this.$emit('error', false);
        }
    }
}
</script>