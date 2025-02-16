import Menu from "../components/Menu/Menu";

export default function Page() {
    return <main 
      className="h-dvh w-dvh justify-center content-center text-center" 
      style={{ ["backgroundColor" as any]: 'var(--color-code)' }}>
      <Menu currentPage="code" color="azure" />
      <section className="mx-auto -my-32 md:my-0 flex h-screen w-screen flex-col justify-center">
        <span className='text-2xl'>code</span>
      </section>
    </main>
}
