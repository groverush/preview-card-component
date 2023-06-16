import cartIcon from "../assets/images/icon-cart.svg"
const Content = () => {
  return (
    <section className="bg-white p-6 font-montserrat rounded-b-xl md:w-[50%] md:rounded-bl-none md:rounded-r-xl">
      <span className="uppercase font-medium text-gray-500 tracking-[5px] text-[12px]">
        Perfume
      </span>
      <h2 className="font-fraunces text-3xl my-3 font-bold">
        Gabrielle Essence <br />
        Eau De Parfum
      </h2>
      <p className="text-[14px] text-gray-500 leading-6">
        A floral, solar and voluptuos interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="my-6 font-fraunces flex items-center">
        <span className="text-4xl mr-5 font-bold text-emerald-700">
          $149.99
        </span>{" "}
        <span className="text-sm line-through text-gray-400">$169.99</span>
      </div>

      <button className="flex bg-emerald-700 hover:bg-emerald-900 mx-auto w-full py-3 justify-center gap-4 text-white rounded-lg items-center">
        <img src={cartIcon} alt="cart-icon" className="w-4 h-4" />
        Add to Cart
      </button>
    </section>
  )
}
export default Content
