import Image from "next/image";
import whatsapp4 from '../../public/assets/whatsapp4.jpeg'

export default function Skills() {
    return (
      <main className="p-5 sm:flex flex-col items-center justify-between pt-3 pb-2 p-20">
        <div className="w-full">
          <div className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800 pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
            <div className="top mb-2 flex">
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
              <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
              <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="mt-4 block sm:flex">
              <span className="text-green-400">computer:~$</span>
              <p className="flex-1 typing items-center pl-2">
                apt-cache show <span className="text-gray-400">yazanunis-skills</span>
                <br />
              </p>
            </div>
            <div className="mt-4 block sm:flex">
              <span className="text-blue-400">Programming Languages: </span>
              <p className="text-amber-300 typing items-center pl-2">
                C++, JavaScript, Python
                <br />
              </p>
            </div>
            <div className="mt-4 block sm:flex">
              <span className="text-blue-400">Front-end Frameworks: </span>
              <p className="text-amber-300 flex-1 typing items-center pl-2">
                React, Next
              </p>
            </div>
            <div className="mt-4 block sm:flex">
              <span className="text-blue-400">Back-end Frameworks: </span>
              <p className="text-amber-300 flex-1 typing items-center pl-2">
                Express, Django
                <br />
              </p>
            </div>
            <div className="mt-4 block sm:flex">
              <span className="text-blue-400">Database: </span>
              <p className="text-amber-300 flex-1 typing items-center pl-2">
                MySql, MongoDB
                <br />
              </p>
            </div>
            <div className="mt-4 block sm:flex">
              <span className="text-blue-400">Other: </span>
              <p className="text-amber-300 flex-1 typing items-center pl-2">
                GraphQL, Prisma, Windows Server 2016, Docker
                <br />
              </p>
            </div>
            <div className="mt-4 block sm:flex">
              <span className="text-green-400">computer:~$</span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-center">
                <Image
                src={whatsapp4}
                width={200}
                height={10}
                />
          </div>
        </div>
      </main>
    )
  }
  