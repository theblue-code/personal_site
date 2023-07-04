import Image from "next/image";
import whatsapp6 from '../public/assets/whatsapp6.jpeg'

export default function Home() {
  return (
    <main>
      <div className="p-5 sm:flex flex-col items-center justify-between pt-3 p-20">
        <div className="w-full">
          <div className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800 pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
            <div className="top mb-2 flex">
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
              <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
              <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="mt-4 flex">
              <span className="text-green-400">computer:~$</span>
              <p className="flex-1 typing items-center pl-2">
                apt-cache show <span className="text-gray-400">yazanunis</span>
                <br />
              </p>
            </div>
            <div className="mt-4 flex">
              <span className="text-blue-400">Name: </span>
              <p className="text-amber-300 typing items-center pl-2">
                "Yazan Unis"
                <br />
              </p>
            </div>
            <div className="mt-4 flex">
              <span className="text-blue-400">Birthday: </span>
              <p className="text-amber-300 flex-1 typing items-center pl-2">
                "19 - Dec - 1998"
              </p>
            </div>
            <div className="mt-4 flex">
              <span className="text-blue-400">Location: </span>
              <p className="text-amber-300 flex-1 typing items-center pl-2">
                "Syria - Tartus"
                <br />
              </p>
            </div>
            <div className="mt-4 flex">
              <span className="text-blue-400">Email: </span>
              <p className="text-amber-300 flex-1 typing items-center pl-2">
                "yazanunis89@gmail.com"
                <br />
              </p>
            </div>
            <div className="mt-4 block sm:flex">
              <span className="text-green-400">computer:~$</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
                <Image
                src={whatsapp6}
                width={200}
                height={100}
                />
          </div>
        </div>
      </div>
    </main>
  )
}
