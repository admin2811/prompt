"use client";
import Link from 'next/link'
import Image  from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react' 
const Nav = () => {
    const {data: session} = useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropDown] = useState(false)
    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);

  return (
    <nav className = "flex-between w-full mb-16 pt-3">
      <Link href = "/" className= "flex gap-2 flex-center">
        <Image src = "/assets/images/logo.svg"
            alt="Promptopia Logo"
            width={30}
            height={30}
            className = "object-contain"
        />
        <p className = "logo_text">Promptopia</p>
      </Link>
      {/*Mobile Navigation */}
      <div className = "sm:flex hidden">
        {session?.user ? (
            <div className = "flex gap-3 md:gap-5">
                <Link href = "/create-prompt" 
                className = "black_btn"
                >
                    Create Post
                </Link>
                <button type="button" onClick = {signOut} className="outline_btn">
                    Sign Out
                </button>

                <Link href='/profile'>
                    <Image 
                        src = {session?.user.image}
                        width  = {30}
                        height = {30}
                        className = "rounded-full"
                    />
                </Link>
            </div>
        ): (
            <>
                {providers && 
                Object.values(providers).map((providers) => (
                    <button
                    type = "button"
                    key = {providers.name}
                    onClick = {() => signIn(providers.id)}
                    className = "black_btn"
                    >
                        Sign In
                    </button>
                ))}
            </>
        )}
      </div>

      <div className = "sm:hidden flex relative">
      {session?.user ? (
        <div className = "flex">
            <Image 
                src = "/assets/images/logo.svg"
                width={30}
                height={30}
                className = "rounded-full"
                alt="profile"
                onClick = {() => setToggleDropDown(!toggleDropdown)}
            
                />
                {toggleDropdown && (
                    <div className = "dropdown">
                        <Link 
                            href = "/profile"
                            className = "dropdown_link"
                            onClick= {() => setToggleDropDown(false)}
                        >
                            My Profile
                        </Link>
                        <Link 
                            href = "/create-prompt"
                            className = "dropdown_link"
                            onClick= {() => setToggleDropDown(false)}
                        >
                            Create Prompts
                        </Link>
                        <button 
                            type = "button"
                            onClick = {() => {
                                setToggleDropDown(false)
                                signOut();
                            }}
                            className = "mt-5 w-full black_btn "
                        >
                            Sign Out
                        </button>
                    </div>
                )}
        </div>
      ) : (
        <>
                {providers && 
                Object.values(providers).map((providers) => (
                    <button
                    type = "button"
                    key = {providers.name}
                    onClick = {() => signIn(providers.id)}
                    className = "black_btn"
                    >
                        Sign In
                    </button>
                ))}
            </>

      )}
      </div>
    </nav>
  )
}

export default Nav
