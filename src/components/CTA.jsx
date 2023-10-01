import React from 'react'

function CTA({ setDBVisible, Page }) {
    return (
        <div className='fixed  w-fit flex items-end flex-col right-0 top-1/2 transform -translate-y-1/2 z-50'>


            <div className='flex group h-full transition-all ease-in-out delay-150 mb-[3px]'>
                <div className={`flex ${Page === "z2" ? 'bg-tomato' : 'bg-gold'} p-4`}>
                    <a href='http://api.whatsapp.com/send?phone=+917573030027&text=Hi,%20I%20contacted%20you%20Through%20your%20website%20zadegroup.in' target='_blank' rel="noreferrer" >
                        <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className={`${Page === 'z2' ? 'fill-white' : 'fill-black'}`}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>

                    </a>

                </div>
                <div className='hidden group-hover:flex ml-1 justify-center items-center px-4 bg-black transition-opacity ease-in-out delay-150 opacity-0 group-hover:opacity-100'>
                    <a href='http://api.whatsapp.com/send?phone=+917573030027&text=Hi,%20I%20contacted%20you%20Through%20your%20website%20zadegroup.in' target='_blank' rel="noreferrer" >
                        <h3 className='text-xl text-textWhiteDark font-primary font-semibold'>Whatsapp</h3>
                    </a>
                </div>
            </div>


            <div className='md:hidden flex group h-full transition-all ease-in-out delay-150 mb-[3px]'>
                <div className={`flex ${Page === "z2" ? 'bg-tomato' : 'bg-gold'} p-4`}>
                    <a href='tel:7573030027' target='_black'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 ${Page === 'z2' ? 'stroke-white' : 'stroke-black'}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </a>

                </div>
                <div className='hidden group-hover:flex ml-1 justify-center items-center px-4 bg-black transition-opacity ease-in-out delay-150 opacity-0 group-hover:opacity-100'>
                    <a href='tel:7573030027' target='_black'>
                        <h3 className='text-xl text-textWhiteDark font-primary font-semibold'>Contact</h3>
                    </a>
                </div>
            </div>

            <div className='flex group h-full transition-all ease-in-out delay-150 mb-[3px]'>
                <div className={`flex ${Page === "z2" ? 'bg-tomato' : 'bg-gold'} p-4`}>
                    <a href='mailto:info@zadegroup.in' target='_black'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 ${Page === 'z2' ? 'stroke-white' : 'stroke-black'}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>

                    </a>

                </div>
                <div className='hidden group-hover:flex ml-1 justify-center items-center px-4 bg-black transition-opacity ease-in-out delay-150 opacity-0 group-hover:opacity-100'>
                    <a href='mailto:info@zadegroup.in' target='_black'>
                        <h3 className='text-xl text-textWhiteDark font-primary font-semibold'>Contact Us</h3>
                    </a>
                </div>
            </div>

            <div className='flex group h-full transition-all ease-in-out delay-150 mb-[3px]'>
                <div className={`flex ${Page === "z2" ? 'bg-tomato' : 'bg-gold'} p-4`} onClick={() => { setDBVisible(true) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 ${Page === 'z2' ? 'stroke-white' : 'stroke-black'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                </div>
                <div className='hidden group-hover:flex ml-1 justify-center items-center px-4 bg-black transition-opacity ease-in-out delay-150 opacity-0 group-hover:opacity-100'>
                    <h3 className='text-xl text-textWhiteDark font-primary font-semibold hover:cursor-pointer' onClick={() => { setDBVisible(true) }} >Brochure</h3>
                </div>
            </div>




        </div>
    )
}

export default CTA