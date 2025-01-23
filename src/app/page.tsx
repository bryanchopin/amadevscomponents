// import BtnHoverDelete from "@/app/components/BtnHoverDelete";
// import BtnChangeDelete from "@/app/components/BtnChangeDelete";

// export default function Home() {
//   return (
//     <div className="p-4">
//       {/* Texto con gradiente */}
//       <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-center mt-12">
//         Amadevs Components
//       </h1>
//       {/* tailwind text gradient too */}
//       <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-center mb-12">
//         with <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent text-center">TailwindCSS</span>
//       </h2>

//       {/* Contenedor del grid */}
//       <div className="grid grid-cols-6 grid-rows-6 gap-2">
//         <div className="col-span-2 row-span-2 border border-gray-300 relative h-[150px] w-full flex items-center justify-center">
//           <BtnHoverDelete />
//         </div>
//         <div className="col-span-2 row-span-2 border border-gray-300 relative h-[150px] w-full flex items-center justify-center">
//           <BtnChangeDelete />
//         </div>
//         <div className="col-span-2 row-span-2 border border-gray-300 relative h-[150px] w-full flex items-center justify-center">
//           {/* Aquí puedes agregar otro componente */}
//         </div>
//         <div className="col-span-2 row-span-2 border border-gray-300 relative h-[150px] w-full flex items-center justify-center">
//           {/* Aquí puedes agregar otro componente */}
//         </div>
//         <div className="col-span-2 row-span-2 border border-gray-300 relative h-[150px] w-full flex items-center justify-center">
//           {/* Aquí puedes agregar otro componente */}
//         </div>
//         <div className="col-span-2 row-span-2 border border-gray-300 relative h-[150px] w-full flex items-center justify-center">
//           {/* Aquí puedes agregar otro componente */}
//         </div>
//         <div className="col-span-2 row-span-2 border border-gray-300 relative h-[150px] w-full flex items-center justify-center">
//           {/* Aquí puedes agregar otro componente */}
//         </div>
//         <div className="col-span-2 row-span-2 border border-gray-300 relative h-[150px] w-full flex items-center justify-center">
//           {/* Aquí puedes agregar otro componente */}
//         </div>
//         <div className="col-span-2 row-span-2 border border-gray-300 relative h-[150px] w-full flex items-center justify-center">
//           {/* Aquí puedes agregar otro componente */}
//         </div>
//       </div>
//     </div>
//   );
// }



import BtnHoverDelete from "@/app/components/BtnHoverDelete";
import BtnChangeDelete from "@/app/components/BtnChangeDelete";

export default function Home() {
  return (
    <div className="p-4">
      {/* Texto con gradiente */}
      <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-center mt-12">
        Amadevs Components
      </h1>
      {/* Subtítulo */}
      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-center mb-12">
        with <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">TailwindCSS</span>
      </h2>

      {/* Contenedor del grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
        <div className="col-span-1 md:col-span-2 row-span-2 border border-gray-300 relative h-[150px] flex items-center justify-center">
          <BtnHoverDelete />
        </div>
        <div className="col-span-1 md:col-span-2 row-span-2 border border-gray-300 relative h-[150px] flex items-center justify-center">
          <BtnChangeDelete />
        </div>
        <div className="col-span-1 md:col-span-2 row-span-2 border border-gray-300 relative h-[150px] flex items-center justify-center">
          {/* Aquí puedes agregar otro componente */}
        </div>
        <div className="col-span-1 md:col-span-2 row-span-2 border border-gray-300 relative h-[150px] flex items-center justify-center">
          {/* Aquí puedes agregar otro componente */}
        </div>
        <div className="col-span-1 md:col-span-2 row-span-2 border border-gray-300 relative h-[150px] flex items-center justify-center">
          {/* Aquí puedes agregar otro componente */}
        </div>
        <div className="col-span-1 md:col-span-2 row-span-2 border border-gray-300 relative h-[150px] flex items-center justify-center">
          {/* Aquí puedes agregar otro componente */}
        </div>
        <div className="col-span-1 md:col-span-2 row-span-2 border border-gray-300 relative h-[150px] flex items-center justify-center">
          {/* Aquí puedes agregar otro componente */}
        </div>
        <div className="col-span-1 md:col-span-2 row-span-2 border border-gray-300 relative h-[150px] flex items-center justify-center">
          {/* Aquí puedes agregar otro componente */}
        </div>
        <div className="col-span-1 md:col-span-2 row-span-2 border border-gray-300 relative h-[150px] flex items-center justify-center">
          {/* Aquí puedes agregar otro componente */}
        </div>
      </div>
    </div>
  );
}




