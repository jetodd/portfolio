export interface Cosplay {
    id: number;
    name: string;
    link: string;
    image: string;
    bgColor: string;
    text: string[];
    tags: string[];
    onSelectProject: (key: number) => void;
}
