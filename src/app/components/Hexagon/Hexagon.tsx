import { ICosplay } from '@/app/models/ICosplay';
import styles from './Hexagon.module.css'

export default function Hexagon({
    name,
    sauce,
    image,
    bgColor,
}: ICosplay) {
    return (
        <div className={styles.hexagon} style={{ ["background-color" as any]: bgColor }}>
	        <div>
		        <p className='text-xl uppercase'>{name}</p>
                <span className='text-sm'>{sauce}</span>
	        </div>
        </div>
    )
}
