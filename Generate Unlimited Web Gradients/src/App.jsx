import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  const [num, setNum] = useState(12)
  const [type, setType] = useState('linear')
  const [gradient, setGradient] = useState([])

  const getHexColorCode = () => {
    const rgb = 255 * 255 * 255
    const random = Math.random() * rgb
    const int = Math.floor(random)
    const hexCode = int.toString(16)
    const colorHex = hexCode.padStart(6, '0')
    return `#${colorHex}`
  }

  const generateGradient = () => {
    // if (num < 1) return
    const colors = []

    for (let i = 0; i < num; i++) {
      const color1 = getHexColorCode()
      const color2 = getHexColorCode()
      const degree = Math.floor(Math.random() * 360)
      const degreeString = `${degree}deg`

      let gradientValue

      if (type === 'linear') {
        gradientValue = `linear-gradient(${degreeString}, ${color1}, ${color2})`
      } else {
        gradientValue = `radial-gradient(circle, ${color1}, ${color2})`
      }

      colors.push({
        gradient: gradientValue,
        css: `background: ${gradientValue}`
      })
    }

    setGradient(colors)
  }

  const onCopy = (css) => {
    navigator.clipboard.writeText(css)
      .then(() => {
        toast.success('Gradient Copied ', { position: 'top-center' })
      })
      .catch(() => {
        toast.error('Copy Failed ')
      })
  }

  useEffect(() => {
    generateGradient()
  }, [num, type])

  return (
    <>
      <div className="min-h-screen bg-gray-200 py-12">
        <div className="w-9/12 mx-auto space-y-8">

          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">
              🎨 Gradient Generator
            </h1>
            <div className="flex gap-4">
              <input
                className="border bg-white rounded-lg w-[100px] p-2"
                placeholder="12"
                value={num}
                onChange={(e) => {
                  const value = (e.target.value)

                  if (value === '') {
                    setNum('')
                    return
                  }
                  const newValue = Number(value)
                  if (newValue < 1) {
                    toast.error('Minimum value is 1',{position:'top-center'})
                    setNum(1)
                  }
                  else {
                    setNum(newValue)
                  }
                }}
              />
              <select
                className="border bg-white rounded-lg w-[100px] p-2"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="linear">Linear</option>
                <option value="radial">Radial</option>
              </select>
              <button

                className="bg-indigo-500 text-white px-4 py-2 rounded"
                onClick={generateGradient}
              >
                Generate
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {
              gradient.map((item, index) => (
                <div
                  key={index}
                  className="h-32 rounded-xl relative"
                  style={{
                    background: item.gradient
                  }}
                >
                  <button
                    onClick={() => onCopy(item.css)}
                    className="bg-black/50 hover:bg-black text-white rounded absolute bottom-3 right-3 text-[10px] py-1 px-2"
                  >
                    Copy
                  </button>
                </div>
              ))
            }
          </div>
        </div>

        <ToastContainer />
        <div className="text-center mt-6 text-sm text-gray-600">
          © {new Date().getFullYear()} RayCrop. All rights reserved.
        </div>
      </div >

    </>
  )
}