export default function Index(){

  return(

    <main className='flex justify-center items-center h-screen --gray bg p-6'>

      <section className='flex flex-col gap-4 px-3 pt-3 pb-6 bg-white rounded-xl'>

        <img className='aspect-square w-full sm:w-60 rounded-xl' src='assets/image-qr-code.png' />

        <h1 className='--blue2 font font-bold text-2xl sm:text-xl text-center'>Improve your front-end <br /> skills by building projects</h1>

        <p className='--blue1 font text-base sm:text-sm text-center'>Scan the QR code to visit Frontend <br /> Mentor and take your coding skills to <br /> the next level</p>

      </section>

    </main>

  )

}