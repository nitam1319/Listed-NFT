import List from '@/components/List'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center bg-slate-700">
      <div className="w-full h-fit flex justify-around">
        <List/>
      </div>


    </div>
    
  )
}
