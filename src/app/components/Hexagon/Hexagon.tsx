import { Cosplay } from '@/app/models/Cosplay';
import styles from './Hexagon.module.css'

export default function Hexagon({
    name,
    sauce,
    bgColor,
    id,
    onSelectCosplay,
}: Cosplay) {
    const handleClick = () => {
        onSelectCosplay(id);
    };

    return (
        <div className={styles.hexagon} style={{ ["backgroundColor" as any]: bgColor }} onClick={handleClick}>
	        <div className='align-middle'>
		        <p className='text-sm md:text-xl uppercase'>{name}</p>
                <span className='text-xs md:text-sm'>{sauce}</span>
	        </div>
        </div>
    )
}
