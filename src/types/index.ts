export interface User {
    name: string;
    image: string;
}

export interface TaskItem {
    id: string;
    title: string;
    description: string;
    image: string | null;
    tags: Array<string>;
}

export interface CollectionItem {
    id: string;
    name: string;
    items: Array<TaskItem>;
}

export interface BoardItem {
    name: string;
    collections: Array<CollectionItem>;
}