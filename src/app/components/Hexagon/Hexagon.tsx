import { ICosplay } from '@/app/models/ICosplay';
import styles from './Hexagon.module.css'

export default function Hexagon({
    name,
    sauce,
    bgColor,
    id,
    onSelectCosplay,
}: ICosplay) {
    const handleClick = () => {
        onSelectCosplay(id);
    };

    return (
        <div className={styles.hexagon} style={{ ["backgroundColor" as any]: bgColor }} onClick={handleClick}>
	        <div className='align-middle'>
		        <p className='text-xl uppercase'>{name}</p>
                <span className='text-sm'>{sauce}</span>
	        </div>
        </div>
    )
}
