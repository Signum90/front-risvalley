import { FaChartPie } from "react-icons/fa";
import { IoIosMegaphone } from "react-icons/io";
import { MdScience } from "react-icons/md";
import { GrContact } from "react-icons/gr";
// import { useLocation } from "react-router-dom";
/**==================================================
 * DASHBOARD
================================================== */
const Dashboard = () => {  
  return (    
    <div className="fade-in">
      {/* ESTADÍSTICAS GENERALES */}
      <div className="p-2">
        <h1 className="text-4xl flex gap-1 font-k font-bold items-center">
          <FaChartPie className="text-3xl"/>Estadísticas
        </h1>
        <div className="flex flex-col md:flex-row gap-3 mt-2">
          <div className="flex-1">
            <div className="w-full h-52 bg-primary text-center rounded">
              <p className="text-lg">Personas</p>
              <h1 className="text-8xl mt-5">100</h1>
            </div>

          </div>
          <div className="flex-1">
            <div className="w-full h-52 bg-secondary text-center rounded">
              <p className="text-lg">Universidades</p>
              <h1 className="text-8xl mt-5">20</h1>
            </div>

          </div>
          <div className="flex-1">
            <div className="w-full h-52 bg-tertiary text-center rounded">
              <p className="text-lg">Entidades</p>
              <h1 className="text-8xl mt-5">180</h1>
            </div>

          </div>
          <div className="flex-1">
            <div className="w-full h-52 bg-quaternary text-center rounded">
              <p className="text-lg">Retos</p>
              <h1 className="text-8xl mt-5">25</h1>
            </div>

          </div>
        </div>
      </div>
      
      {/* SOLICITUDES */}
      <div className="p-2 flex flex-col md:flex-row">
        {/* SOLICITUDES OFERTANTES */}
        <div className="flex-1">
          <h1 className="flex items-center gap-2 text-lg"><IoIosMegaphone />Solicitudes de Ofertantes</h1>
          <div className="p-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Solicitante
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
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Cosme Fulanito Barajas
                    </th>
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
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Cosme Fulanito Barajas
                    </th>
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
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Cosme Fulanito Barajas
                    </th>
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
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Cosme Fulanito Barajas
                    </th>
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
        {/* SOLICITUDES RETOS */}
        <div className="flex-1">
          <h1 className="flex items-center gap-2 text-lg"><MdScience/> Solicitudes de Retos</h1>
          <div className="p-2 h-48">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Solicitante
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

          <h1 className="flex items-center gap-2 text-lg"><GrContact/> PQRS</h1>
          <div className="p-2">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Solicitante
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
      </div>
    </div>
  )
}

export default Dashboard;