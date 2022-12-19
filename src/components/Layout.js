import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <section className="text-center">
        <Header />
        <div className="m-8 md:mx-14 lg:mx-40 xl:mx-64 2xl:mx-80 mb-20">
            {children}
        </div>
      </section>
      <hr></hr>
      <Footer />
    </>
  )
}