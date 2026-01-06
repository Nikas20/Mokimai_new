import './App.css'


function App() {

  return (
    <>
    <body className='bg-black'>
      <main>
        <p className='text-white text-left ml-5'>2.Use functiona; component to create the following design</p>
          <div className='  border-white border-[20px] bg-white'>
            <div className='rounded-xl bg-blue-200 py-5 px-10' >
            <p className='uppercase mb-6 font-bold'>Sucbscribe</p>
            <p className='mb-10 '>Sign up with your email address to receive news and updates.</p>

            <form className='flex gap-3 mb-6 '>
              <input type="text" placeholder='First name' className='bg-white py-3 px-4 rounded'/>
              <input type="text" placeholder='Last name' className='bg-white py-2 px-4 rounded'/>
              <input type="text" placeholder='Email' className='bg-white py-2 px-4 rounded'/>
            </form>
            <button className='bg-red-500 text-white px-40 py-2 font-bold' >
              Subscribe</button>
              </div>
        </div>
       
      </main>
    </body>
    </>
  )
}
//ww
// checked
export default App
