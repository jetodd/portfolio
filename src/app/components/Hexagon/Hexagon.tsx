import styles from './Hexagon.module.css'

interface IHexagonProps {
    backgroundColor: string;
    text?: string;
}

export default function Hexagon({
    backgroundColor = '#000',
    text = ''
}: IHexagonProps) {
    return (
        <div className={styles.hexagon} style={{ ["background-color" as any]: backgroundColor }}>
	        <div className='text'>
		        {text}
	        </div>
        </div>
    )
}