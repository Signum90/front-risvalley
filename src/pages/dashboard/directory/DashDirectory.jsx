import { IoIosMegaphone } from "react-icons/io";
/**==================================================
 * DASHBOARD DIRECTORY
================================================== */
const DashDirectory = () => {
  return (
    <div className="fade-in">
      {/* TITULO > */}
      <div className="p-2 border-b flex gap-2">
        <h1 className="text-xl flex gap-1 font-k font-bold items-center">
          <IoIosMegaphone className="text-xl mr-1"/>Gestión de Ofertas
        </h1>
        <div className="p-2">
          <button className="text-sm px-2 py-1 border rounded transition-all hover:bg-black">+ Nueva Oferta</button>
        </div>
      </div>
      {/* TABLA DE LISTADOS */}
      <div className="p-4">
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <p>Solicitud de Empresas</p>
          </div>
          <div className="flex-1">
            <div className="flex">
              <div className="relative flex items-center group border-b-[3px] border-transparent hover:border-secondary cursor-pointer">
                <button className="py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">Filtrar</button>
                <div className="z-50 bg-black absolute hidden group-hover:flex top-full -translate-x-[50%] left-1/2 right-1/2 w-[210px] border-b-2 border-secondary transition-colors duration-[2000] flex-col items-center">
                  <p className="p-2 hover:text-secondary">Preguntas Frecuentes</p>
                </div>
              </div>
              <div className="relative w-full">
                  <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required/>
                  <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
              </div>
            </div>
          </div>
        </div>
        {/* TABLA */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Solicitante
                </th>
                <th scope="col" className="px-6 py-3">
                  Tipo de Naturaleza
                </th>
                <th scope="col" className="px-6 py-3">
                  Empresa
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha Solicitud
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Cosme Fulanito Barajas
                </th>
                <td className="px-6 py-4">
                 Natural
                </td>
                <td className="px-6 py-4">
                  Cosme S.A.S
                </td>
                <td className="px-6 py-4">
                  2024-02-25
                </td>
                <td className="px-6 py-4">
                  Solicitado
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default DashDirectory;