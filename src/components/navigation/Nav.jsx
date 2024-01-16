"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import { motion } from "framer-motion"

const DialogContent = motion(Dialog.Content)
const DialogOverlay = motion(Dialog.Overlay)



export const categoriesLinks = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Submit Info",
        url: "/submit",
    },
    {
        label: "About",
        url: "/about",
    },

]


export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1024) {
                setIsOpen(false)
            }
        })
    }, [])

    const toggleMenu = () => {
        setIsOpen((isOpen) => !isOpen)
    }




    return (
        <div className="sticky w-full mx-auto p-2 tablet:p-6  z-50 laptop:border-b-0 border-b-2  top-0 ">
            <nav className="flex w-full relative laptop:px-10 justify-between  items-center">
                <Link href="/" className="flex items-center gap-5  py-2 laptop:hidden ">
                    <div>
                        <Image src="/svgs/logo.png" width={100} height={50} alt="The Hazara Logo" />
                    </div>
                </Link>

                <ul className="hidden laptop:flex gap-10 w-full">
                    {categoriesLinks.map(({ label, url }, index) => {
                        return (
                            <li key={index} className="text-textDark hover:text-primary ease-linear duration-300 ">
                                <Link href={url} >
                                    {label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <div className="flex items-center gap-4 justify-end">
                    <Menu className="laptop:hidden" onClick={toggleMenu} />
                </div>
            </nav >

            <Dialog.Root open={isOpen} onOpenChange={toggleMenu}>
                <Dialog.Portal>
                    <div
                        className="fixed inset-0 z-50 flex items-start justify-center sm:items-center"
                        initial={{ x: "50%", opacity: 0.5 }}>
                        <DialogOverlay
                            className="fixed inset-0 z-50  backdrop-blur-sm transition-opacity"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.2,
                                default: {
                                    ease: "easeIn",
                                },
                            }}
                        />
                        <DialogContent
                            className="fixed z-50 w-full h-full bg-white p-6"
                            initial={{
                                x: "100%",
                                opacity: 0,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.3,
                                default: { ease: "easeOut" },
                            }}
                            onClick={() => setIsOpen(false)}>
                            <nav>
                                <div className="flex justify-between items-center ">
                                    <Link href="/" className="self-center">
                                        <Image
                                            src="/svgs/logo.png"
                                            className=""
                                            alt="Kaaj logo"
                                            width={150}
                                            height={100}
                                        />
                                    </Link>
                                    <Dialog.Close
                                        className="absolute top-6 right-6 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 "
                                        onClick={toggleMenu}
                                    >
                                        <X className="w-6 h-6 text-slate-900" />
                                        <span className="sr-only">Close</span>
                                    </Dialog.Close>
                                </div>
                                <ul className="flex flex-col gap-3 mt-8">
                                    {categoriesLinks.map(
                                        ({ label, url }, index) => {
                                            return (
                                                <Link href={url} key={index} className="border-2 rounded-md">
                                                    <li className="text-sm text-slate-900 w-full py-3 px-4 inline-block hover:font-bold">
                                                        {label}
                                                    </li>
                                                </Link>
                                            )
                                        }
                                    )}
                                </ul>
                            </nav>
                        </DialogContent>
                    </div>
                </Dialog.Portal>
            </Dialog.Root>
        </div >
    )

}