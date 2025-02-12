import Hexagon from '../components/Hexagon/Hexagon'
import { ICosplay } from '../models/ICosplay'
import styles from './styles.module.css'

export default function Page() {
  const cosplays: ICosplay[] = [
    { id: 1, name: 'Lulu', sauce: 'League of Legends', image: 'lulu.jpg', bgColor: '#6297e5' },
    { id: 2, name: 'San', sauce: 'Studio Ghibli', image: 'san.jpg', bgColor: '#db6e62' },
    { id: 3, name: 'Riven', sauce: 'League of Legends', image: 'riven.jpg', bgColor: '#5db77c' },
    { id: 4, name: 'Jester', sauce: 'Critical Role', image: 'jester.jpg', bgColor: '#8599CE' },
    { id: 5, name: 'Pike', sauce: 'Critical Role', image: 'pike.jpg', bgColor: '#83bde0' },
    { id: 6, name: 'Fearne', sauce: 'Critical Role', image: 'fearne.jpg', bgColor: '#dba45c' },
    { id: 7, name: 'Nyx', sauce: 'Hades', image: 'nyx.jpg', bgColor: '#8c60c9' }
  ]
    return <main className={styles.container}>
      <section className="mx-auto h-screen w-screen justify-center mt-4">
        {cosplays.map((cosplay, index) => {
              return <Hexagon {...cosplay}></Hexagon>;
        })}

        {/* <app-hexagon *ngIf="i % 3 === 0 && i % 2 !== 0" class="spacer"></app-hexagon>
        <app-hexagon [cosplay]="cosplay" class="inline"></app-hexagon>
        <app-hexagon *ngIf="i % 3 === 0 && i % 2 === 0" class="spacer"></app-hexagon>
        <br *ngIf="(i + 1) % 3 === 0 || (i % 3 === 0)">
        </span> */}
        
      </section>
    </main>
}
