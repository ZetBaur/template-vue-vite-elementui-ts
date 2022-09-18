<template>
    <div style="height: 300px">
        <VueFlow v-model="elements" auto-connect style="height: 300px">
            <template #connection-line="props">
                <CustomConnectionLine v-bind="props" />
            </template>

            <template #node-custom="props">
                <CustomNode :data="props.data" /> </template
        ></VueFlow>

        <button style="background-color: #33a6b8" @click="onAdd">add</button>
    </div>
</template>

<script setup>
import { VueFlow, Position, useVueFlow } from '@braks/vue-flow';
import { ref } from 'vue';
import CustomConnectionLine from './CustomConnectionLine.vue';
import CustomNode from './CustomNode.vue';

const { nodes, dimensions, onPaneReady, onNodeDragStop, onConnect } =
    useVueFlow();

onNodeDragStop((e) => console.log('drag stop', e));

onConnect((e) => console.log('onConnect', e));

onPaneReady(({ fitView }) => {
    fitView();
});

const elements = ref([
    {
        id: '1',
        type: 'custom',
        label: 'Node 1',
        position: { x: 250, y: 5 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left
    },
    {
        id: '2',
        label: 'Node 2',
        position: { x: 100, y: 100 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left
    },
    {
        id: '3',
        label: 'Node 3',
        position: { x: 400, y: 100 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left
    },
    {
        id: '4',
        type: 'output',
        label: 'Node 4',
        position: { x: 400, y: 200 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left
    },
    {
        id: '5',
        type: 'output',
        label: 'Node 5',
        position: { x: 750, y: 50 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left
    },

    { id: 'e1-3', source: '1', target: '3', animated: true },
    { id: 'e1-2', source: '1', target: '2', animated: true }
]);

const onAdd = () => {
    const id = nodes.value.length + 1;

    const newNode = {
        id: `random_node-${id}`,
        label: `Node ${id}`,
        position: {
            x: Math.random() * dimensions.value.width,
            y: Math.random() * dimensions.value.height
        },
        type: 'custom',
        sourcePosition: Position.Right,
        targetPosition: Position.Left
    };

    elements.value.push(newNode);

    console.log(newNode);
};
</script>
