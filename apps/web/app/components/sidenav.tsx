import { UserButton } from "@clerk/nextjs"

export const Sidenav = () => {
  return (
    <div className="absolute left-0 top-0 z-20 flex h-screen w-60 flex-none flex-col border-r border-slate-200 bg-white drop-shadow-md md:drop-shadow-none">
      <div className="flex flex-row items-center gap-2 p-5 w-full justify-between">
        <p className="text-lg">Plz.</p>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
