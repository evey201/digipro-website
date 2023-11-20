import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <>
      <header className='px-6 py-6 w-full'>
            <div className='w-full flex justify-between'>
                <div className='max-w-[200px] w-full'>
                    Logo goes here
                </div>
                <div className='justify-end'>
                    <ul className='flex gap-x-8 list-none'>
                        <li>
                            <Link href='/about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href='/work'>
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link href='/work'>
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link href='/work'>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href='/work'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
      </header>
    </>
  )
}

