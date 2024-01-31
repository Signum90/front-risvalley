import { IoIosMegaphone } from "react-icons/io";
/**==================================================
 * DASHBOARD DIRECTORY
================================================== */
const DashDirectory = () => {
  return (
    <div className="fade-in">
      {/* TITULO > */}
      <div className="p-2 border-b">
        <h1 className="text-xl flex gap-1 font-k font-bold items-center">
          <IoIosMegaphone className="text-xl mr-1"/>Gestión de Ofertas
        </h1>
      </div>
      {/* TABLA DE LISTADOS */}
      <div className="p-4 mt-2">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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