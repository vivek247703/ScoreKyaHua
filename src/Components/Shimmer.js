export const Shimmer = () =>{
  return(
    <>
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-[500px] mx-auto">
    <div className="animate-pulse space-x-4">
      <div className="rounded-full bg-slate-200 h-10 w-52"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-200 rounded mt-4"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
    Loading Scoreboard...
  </div>
    </>
    
    
  )
}