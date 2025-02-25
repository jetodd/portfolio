export interface Cosplay {
    id: number;
    name: string;
    sauce: string;
    image: string;
    bgColor: string;
    text: string[];
    onSelectCosplay: (key: number) => void;
}
