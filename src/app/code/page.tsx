import styles from './styles.module.css'

export default function Page() {
    return <main 
      className="h-dvh w-dvh justify-center content-center text-center p-4" 
      style={{ ["backgroundColor" as any]: 'var(--color-code)' }}>
      <section className="mx-auto -my-32 md:my-0 flex h-screen w-screen flex-col justify-center">
        <h1>code</h1>
        
      </section>
    </main>
}
