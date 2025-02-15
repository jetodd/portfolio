import ContactItem from '../components/ContactLink/ContactItem'
import styles from './styles.module.css'

export default function Page() {
    return <main 
      className="h-dvh w-dvh justify-center content-center text-center" 
      style={{ ["backgroundColor" as any]: 'var(--color-contact)' }}>
      <section className="-my-32 md:my-0">
        <div className="grid grid-cols-1 md:grid-cols-4 mx-8 mx-auto max-w-[200px] md:max-w-5xl md:min-h-[160px]">
          <div className="py-1 text-black rounded-t-full md:rounded-tr-none md:rounded-l-full content-center justify-center"
            style={{ ["backgroundColor" as any]: 'var(--color-pink)' }}>
            <a href="https://www.linkedin.com/in/jess-todd-76b75b90/" target="_blank">
              <span className="grid place-content-center">
                <ContactItem icon='linked-in'></ContactItem>
              </span>
              LinkedIn
            </a>
          </div>
          <div className="bg-white py-1 text-black content-center display-grid"
            style={{ ["backgroundColor" as any]: 'var(--color-pink)' }}>
            <a href="https://github.com/jetodd" target="_blank">
              <span className="grid place-content-center">
                <ContactItem icon='github'></ContactItem>
              </span>
              Github
            </a>
          </div>
          <div className="bg-white py-1 text-black content-center"
            style={{ ["backgroundColor" as any]: 'var(--color-pink)' }}>
            <a href="mailto:jessstodd@gmail.com">
              <span className="grid place-content-center">
                <ContactItem icon='email'></ContactItem>
              </span>
              Email
            </a>
          </div>
          <div className="bg-white py-1 text-black rounded-b-full md:rounded-bl-none md:rounded-r-full content-center"
            style={{ ["backgroundColor" as any]: 'var(--color-pink)' }}>
            <span className="grid place-content-center">
              <ContactItem icon='resume'></ContactItem>
            </span>
            Resume
          </div>
        </div>
      </section>
    </main>
}
