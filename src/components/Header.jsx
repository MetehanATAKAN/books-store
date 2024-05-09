

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <h1>
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