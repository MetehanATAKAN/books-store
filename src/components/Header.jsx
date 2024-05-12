

const Header = () => {
  return (
    <div className='section-screen flex justify-between items-center fixed z-10 bg-slate-600 w-full top-0 right-0 left-0'>
        <h1 className="text-4xl text-zinc-800">
            <strong>BOOK</strong>
            STORE
            </h1>
        <div>
            <img src={'/images/basket.png'} alt="basket" className='w-7 h-7' />
        </div>
    </div>
  )
}

export default Header