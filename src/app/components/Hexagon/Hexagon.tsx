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
        <div className={styles.hexagon} style={{ backgroundColor: bgColor }} onClick={handleClick}>
	        <div className='align-middle'>
		        <p className='text-xl md:text-2xl uppercase font-[Oliver]'>{name}</p>
                <span className='text-xs md:text-sm'>{sauce}</span>
	        </div>
        </div>
    )
}
