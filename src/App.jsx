import './App.css'
import { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [data, setData] = useState(null)
  const fetchContent = async () => {
    try {
      const res = await axios.get('https://api.pinata.cloud/data/pinList?status=pinned&pinSizeMin=100', {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_JWT}`
        }
      })
      console.log(res.data)
      setData(res.status)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit 🌀
      <button onClick={fetchContent}>Fetch</button>
      <p>{!data ? 'Press button for status' : data}</p>
    </main>
  )
}

