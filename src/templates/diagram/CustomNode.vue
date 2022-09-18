<template>
    <div>Select a color</div>

    <Handle
        id="a"
        type="source"
        :position="Position.Right"
        :style="sourceHandleStyleA"
    />
    <Handle
        id="b"
        type="source"
        :position="Position.Right"
        :style="sourceHandleStyleB"
    />

    <Handle
        id="c"
        type="target"
        :position="Position.left"
        :style="sourceHandleStyleC"
    />
</template>

<script setup>
import { Handle, Position } from '@braks/vue-flow';
import { computed } from 'vue';

// const props = defineProps({
//     data: {
//         type: Object,
//         required: false
//     }
// });

const sourceHandleStyleA = computed(() => ({
    background: 'black',
    filter: 'invert(100%)',
    top: '10px'
}));

const sourceHandleStyleB = computed(() => ({
    with: '20px',
    background: 'blue',
    filter: 'invert(100%)',
    bottom: '10px',
    top: 'auto'
}));

const sourceHandleStyleC = computed(() => ({
    with: '20px',
    background: 'blue',
    filter: 'invert(100%)',
    bottom: '10px',
    left: '0',
    top: 'auto'
}));
</script>
