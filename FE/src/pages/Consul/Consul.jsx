import React from "react";
import { dataBidan } from "@/db/dataBidan";
import { Link } from "react-router-dom";

function Consul() {
  return (
    <div className="container mx-auto my-20 mb-48">
      <div className="grid grid-cols-3 gap-4">
        {dataBidan.map((item) => (
          <div
            className="w-full max-w-md py-1  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
            key={item.nama}
          >
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li>
                  <div className="flex ">
                    <div className="flex-shrink-0">
                      <img
                        className="w-10 h-10rounded-full"
                        src={item.img}
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-bold  text-gray-900 truncate dark:text-white">
                        {item.nama}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {item.bidang}
                      </p>
                      <div className="flex space-x-2 mt-2">
                        <button
                          type="button"
                          className="text-black bg-[#f2f2f2] font-medium rounded-lg text-xs px-3 py-1"
                          disabled
                        >
                          <i class="fa-solid fa-briefcase"></i>{" "}
                          {item.lama_pengalaman} tahun
                        </button>
                        <button
                          type="button"
                          className="text-black bg-[#f2f2f2] font-medium rounded-lg text-xs px-3 py-1"
                          disabled
                        >
                          <i class="fa-solid fa-thumbs-up"></i> {item.like}
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-bold text-gray-500 truncate dark:text-gray-400 mt-2">
                            Rp. {item.harga}
                          </p>
                        </div>

                        <div>
                          <button
                            type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 
                      focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 
                      dark:hover:bg-red-700 dark:focus:ring-red-900"
                          >
                            <Link to="form-pasien">
                              Chat
                            </Link>
                            
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Consul;
