import BackLink from '../components/BackLink/BackLink'
import ContactItem from '../components/ContactLink/ContactItem'
import Menu from '../components/Menu/Menu'
import styles from './styles.module.css'

export default function Page() {
    return <main 
      className={`h-dvh w-full text-center ${styles.main}`}>
      <BackLink bgColor={'rose'} color={'black'} />
      <Menu currentPage='contact' color='black' bgColor='rose' />
      <section className="md:my-0 mx-4">
        <div className="grid grid-cols-1 md:grid-cols-4 mx-auto max-w-[200px] md:max-w-5xl md:min-h-[80px]">
          <div className='hidden md:col-span-1 md:col-start-2 md:-mb-4 md:block md:mt-8 md:z-100 md:mx-auto'>
            <img src="/panda.png" alt='Trash panda, my spirit animal' width={"300"} height="300"></img>
          </div>
          <div className='z-100 col-span-1 md:col-start-3 -mb-6 md:-mb-4 md:mt-8 mx-auto'>
            <img src="/piggy.png" alt='Pigeon, may poop on everything you love' width={"300"} height="300"></img>
          </div>
          <div className='hidden md:block'></div>
          <div className="py-1 text-black rounded-t-full md:rounded-tr-none md:rounded-l-full content-center justify-center"
            style={{ backgroundColor: 'var(--color-rose)' }}>
            <a href="https://www.linkedin.com/in/jess-todd-76b75b90/" className={styles.link} target="_blank">
              <span className="grid place-content-center">
                <ContactItem icon='linked-in'></ContactItem>
              </span>
              <span className='font-[Oliver] text-2xl'>LinkedIn</span>
            </a>
          </div>
          <div className="bg-white py-1 text-black content-center display-grid"
            style={{ backgroundColor: 'var(--color-rose)' }}>
            <a href="https://github.com/jetodd" className={styles.link} target="_blank">
              <span className="grid place-content-center">
                <ContactItem icon='github'></ContactItem>
              </span>
              <span className='font-[Oliver] text-2xl'>Github</span>
            </a>
          </div>
          <div className="bg-white py-1 text-black content-center"
            style={{ backgroundColor: 'var(--color-rose)' }}>
            <a href="mailto:jessstodd@gmail.com" className={styles.link}>
              <span className="grid place-content-center">
                <ContactItem icon='email'></ContactItem>
              </span>
              <span className='font-[Oliver] text-2xl'>Email</span>
            </a>
          </div>
          <div className="bg-white py-1 text-black rounded-b-full md:rounded-bl-none md:rounded-r-full content-center"
            style={{ backgroundColor: 'var(--color-rose)' }}>
            <a href="/Resume.pdf" className={styles.link}>
              <span className="grid place-content-center">
                <ContactItem icon='resume'></ContactItem>
              </span>
              <span className='font-[Oliver] text-2xl'>Resume</span>
            </a>
          </div>
        </div>
      </section>
    </main>
}
