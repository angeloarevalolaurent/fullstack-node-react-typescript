import { Outlet } from "react-router-dom"

export default function Layouts() {

  return (
    <>
      <header className="bg-slate-800">
        <div className="mx-auto max-w-6xl py-10">
            <h1 className="text-4xl font-extrabold text-white">
                Administrados de Productos
            </h1>
        </div>
      </header>

      <main className="mt-10 mx-auto w-full max-w-6xl rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100">
            <Outlet />
      </main>
      
    </>
  )
}
