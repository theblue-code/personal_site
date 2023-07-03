import Link from "next/link"

export default function Header() {
  return (
    <header>
      <nav className="flex flex-col items-center justify-between border-gray-200 px-4 lg:px-6 py-10">
        {/* flex flex-wrap justify-between items-center mx-auto max-w-screen-xl */}
        {/* hidden in the div under // hidden justify-between items-center lg:flex lg:w-auto lg:order-1 */}
        {/* flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 */}
        <div className="text-center items-center">
          <ul className="flex font-medium space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-500 hover:text-stone-300 delay-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/education"
                className="text-gray-500 hover:text-stone-300 delay-100"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="text-gray-500 hover:text-stone-300 delay-100"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-stone-300 delay-100"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
