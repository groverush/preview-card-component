import { Hero, Content, Footer } from "./components"

const App = () => {
  return (
    <div className="w-screen h-screen max-w-[350px] mx-auto pt-8 md:pt-28 md:max-w-[600px] flex flex-col justify-between">
      <div className="md:flex">
        <Hero />
        <Content />
      </div>

      <Footer />
    </div>
  )
}
export default App
