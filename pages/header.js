import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { NavLink } from './NavLink'
import Image from 'next/image'

var productsPage_link = '/product';
var loginPage_link = '/login';
var teamPage_link = '/team';


const header = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    {/* <Link href="/">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img alt="Workflow" className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                      </a>
                    </Link> */}

                  <NavLink href="/" className="font-medium text-gray-500 hover:text-gray-900">
                    {/* <img alt="Workflow" className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" /> */}

                    <Image
                    src="/logo.svg"
                    alt="logo"
                    width={44}
                    height={40}
                    className="h-8 w-auto sm:h-10"
                  />
                  </NavLink>

                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Open main menu</span>


                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">

                  {/* <Link href={productsPage_link}>
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                      Product
                    </a>
                  </Link> */}

                <NavLink href={productsPage_link} className="font-medium text-gray-500 hover:text-gray-900">Product</NavLink>


                  {/* <Link href={loginPage_link}>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">Log In</a>
                  </Link> */}

                <NavLink href={loginPage_link} className="font-medium text-gray-500 hover:text-gray-900">Log In</NavLink>

                  {/* <Link href={teamPage_link}>
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                      Team
                    </a>
                  </Link> */}

                <NavLink href={teamPage_link} className="font-medium text-gray-500 hover:text-gray-900">Team</NavLink>

                </div>
              </nav>
            </div>
          </div>


        </div>
      </div>
    </div>

  )
}

export default header
