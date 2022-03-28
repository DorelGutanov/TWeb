import RootStore from "./RootStore.store";
const storeProvider=RootStore.create({
    contents: [
    {
        id: '1',
        title: "Card title 1",
        description: "description",
        seen: false
    },
    {
        id: '2',
        title: "Card title 2",
        description: "description",
        seen: false
    },
    {
        id: '3',
        title: "Card title 3",
        description: "description",
        seen: false
    },
    {
        id: '4',
        title: "Card title 4",
        description: "description",
        seen: false
    },
    {
        id: '5',
        title: "Card title 5",
        description: "description",
        seen: false
    },
    {
        id: '6',
        title: "Card title 6",
        description: "description",
        seen: true
    },
]
})