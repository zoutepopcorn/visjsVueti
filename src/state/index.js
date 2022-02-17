import {ref, watch} from "@vue/composition-api";
import * as dayjs from 'dayjs'

let timeline;

const picker = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10));

// TODO create from times
const options = ref({
    width: '100%',
    autoResize: true,
    locale: 'nl',
    zoomMax: 31536000000,
    zoomMin: 600000,
    max: new Date(dayjs().day(314)),
    min: new Date(dayjs().day(-770)),
    type: "point",
    editable: {
        updateGroup: true,
        updateTime: true
    }
})

const groups = ref([
    {
        id: 0,
        shape: "dot",
        content: '<b>Group 0</b>',
        color: {
            background: '#f3d7d7',
            border: '#a93030'
        }
    },
    {id: 1, content: '<b>Group 1</b>'},
]);

const items = ref([
    {id: 0, start: new Date(dayjs().day(-100)), content: '', className: 'rood', group: 0},
    {id: 1, start: new Date(), content: '', className: 'zwart', group: 1},
]);

const setTimeline = (tmpTimeline) => {
    timeline = tmpTimeline;
}

watch(picker, () => {
    console.log("___ picker ", picker);
    // timeline.moveTo(new Date(picker.value));
    const START = picker.value + " 00:00";
    const END = picker.value + " 23:59";

    timeline.setWindow(START, END);
});


export {groups, items, options, picker, setTimeline}