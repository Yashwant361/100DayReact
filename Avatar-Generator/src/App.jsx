import { Scale } from 'lucide-react'
import { React, useState } from 'react'
import { data } from './dice/dicebear.js'


export default function App() {
  return (
    <>
      <div
        className='animate__animated animate__fadeIn overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white'>
        <div className="animate__animated animate__slideInUp animate__faster gap-6 flex flex-col items-center w-full max-w-md rounded-2xl shadow-xl backdrop-blur-xl border border-slate-700 p-10">
          <img
            className='w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover'
            src='https://imgs.search.brave.com/ohAuTp3hK89mgurwQr18x7s-vbzmC8bs0Cu6ZuQZSlQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjcv/OTUxLzEzNy9zbWFs/bC9zdHlsaXNoLXNw/ZWN0YWNsZXMtZ3V5/LTNkLWF2YXRhci1j/aGFyYWN0ZXItaWxs/dXN0cmF0aW9ucy1w/bmcucG5n'
         
          />
          <div className='text-center'>
            <h1 className='text-3xl font-bold tracking-wide'>Avatar Generator</h1>
            <p className='text-slate-300'>Generate Unlimated avatars for webistes</p>
          </div>

          <div className='w-full space-y-4'>
            {/* Need to update */}
            <select className='bg-slate-900/60 w-full p-3 rounded-xl'>
              {data.map((item, index) =>
                <option key={index} value={item.value}>
                  {item.value}
                </option>
              )}
            </select>

            <div className='bg-slate-900/60 w-full p-3 rounded-xl'>
              {/* // link of avatar */}
              https://raycrops.com
            </div>
          </div>


          <div className='flex w-full gap-4'>
            <button className='flex-1 bg-gradient-to-r from-rose-500 to-orange-600 font-medium rounded-lg py-2 hover:scale-105 transition-transform'>
              <i className="ri-arrow-right-up-line"> </i>
              Change
            </button>
            <button className='flex-1 bg-gradient-to-r from-green-500 to-cyan-600 font-medium rounded-lg py-2 hover:scale-105 transition-transform'>
              <i className="ri-download-line"> </i>
              Download
            </button>
            <button className='flex-1 bg-gradient-to-r from-orange-500 to-amber-600 font-medium rounded-lg py-2 hover:scale-105 transition-transform'>
              <i className="ri-file-copy-line"> </i>
              Copy
            </button>
          </div>
        </div>
      </div>

    </>
  )
}