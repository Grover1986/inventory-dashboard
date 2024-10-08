'use client';

import Image from "next/image";
import { useRouter } from "next/navigation"; 

export default function Home() {
   const router = useRouter(); // enrutador

   return (
      <>
         <div className="flex justify-center mt-16">
            <div style={{minWidth: '30%'}}>
               <div className="shadow-lg flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                     <div className="flex justify-center">
                        <Image
                           src='/login-user.gif'
                           alt="login"
                           width={60}
                           height={60}
                        />
                     </div>
                     <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Inicia sesión en tu cuenta
                     </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                     <form action="#" method="POST" className="space-y-6">
                        <div>
                           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                              Dirección de correo electrónico
                           </label>
                           <div className="mt-2">
                              <input
                                 id="email"
                                 name="email"
                                 type="email"
                                 required
                                 autoComplete="email"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                           </div>
                        </div>

                        <div>
                           <div className="flex items-center justify-between">
                              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                 Contraseña
                              </label>
                              <div className="text-sm">
                                 <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    ¿Has olvidado tu contraseña?
                                 </a>
                              </div>
                           </div>
                           <div className="mt-2">
                              <input
                                 id="password"
                                 name="password"
                                 type="password"
                                 required
                                 autoComplete="current-password"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                           </div>
                        </div>

                        <div>
                           <button
                              type="submit"
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              onClick={() => router.push('/panel')}
                           >
                              Iniciar sesión
                           </button>
                        </div>
                     </form>

                     <p className="mt-10 text-center text-sm text-gray-500">
                        ¿No eres miembro?{' '}
                        <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
                        onClick={() => router.push('/registro')}>
                           Start a 14 day free trial
                        </span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
