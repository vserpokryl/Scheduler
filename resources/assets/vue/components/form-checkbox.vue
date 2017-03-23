<template>
    <div class="checkbox">
        <label>
            <input
                type="checkbox"
                v-bind:checked="value"
                v-on:change="$emit('input', !value)"
            >
            <span class="checkbox-material"><span class="check"></span></span>
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {
    props: {
        'label': String,
        'value': Boolean
    }
}
</script>