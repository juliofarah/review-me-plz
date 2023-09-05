import { UserButton } from "@clerk/nextjs"
import { League_Spartan } from "next/font/google"

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: '800',
})


export function Header() {
  return (
      <div className="flex flex-row items-center gap-2 px-10 py-3 w-full justify-between border-b border-slate-200 bg-slate-50">
        {/* <div className={`${leagueSpartan.className} text-white bg-black w-9 h-9 flex justify-center items-center text-4xl`}>plz.</div> */}
        <div className={`${leagueSpartan.className} text-slate-900 w-9 h-9 flex justify-center items-center text-4xl`}>plz.</div>
        <UserButton afterSignOutUrl="/" appearance={{
          elements: {
            userButtonTrigger: {
              width: 36,
              height: 36,
            },
            avatarBox: {
              width: 36,
              height: 36,
            }
          }
        }}/>
      </div>
  )
}