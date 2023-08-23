const NewsletterSection = () => {
  return (
    <section id='newsletter'>
      <div className='container mx-auto flex items-stretch flex-col lg:flex-row gap-[30px] my-[48px]'>
        <div className='flex-1 flex items-center justify-center p-6 bg-slate-100 shadow'>
          <div className='text-center'>
            <h2 className='text-2xl lg:text-2xl font-semibold text-gray-800 mb-6'>
              Registrujte sa a získajte množstvo výhod
            </h2>
            <button className='bg-slate-900 text-white hover:bg-slate-700 rounded-[6px] sm:w-[165px] py-2'>
              Registrácia
            </button>
          </div>
        </div>
        <div className='w-full lg:max-w-[600px] flex-1 flex flex-col items-center justify-center h-auto bg-[#02B229] rounded-[5px] p-8'>
          <h2 className='text-2xl lg:text-3xl text-center font-semibold text-white mb-6'>
            Odoberajte novinky <br /> a získajte skvelé zľavy!
          </h2>
          <form action='' className='flex flex-col sm:flex-row gap-2 w-full'>
            <input
              type='text'
              placeholder='Zadajte Váš email'
              className='grow rounded-[6px] px-4 py-3'
            />
            <button className='block w-full sm:inline-block secondary__button sm:w-[165px] py-2'>
              Odoberať
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
