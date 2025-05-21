import React, { useState } from "react";
export default function Inicio() {
  const [modalOpen, setModalOpen] = useState(false); // Controla si el modal está abierto
  const [currentImage, setCurrentImage] = useState(null); // Imagen actual mostrada en el modal
  const [currentInfo, setCurrentInfo] = useState(""); // Información de la imagen actual

  // Función para abrir el modal y mostrar la imagen e información
  const openModal = (image, info) => {
    setCurrentImage(image);
    setCurrentInfo(info);
    setModalOpen(true); // Abrir el modal
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
    setCurrentInfo("");
  };

  return (
    <div className="#">
      {/* Sección de portada con la imagen */}
      <div
        className="h-screen bg-cover bg-center flex justify-center items-center text-white"
        style={{ backgroundImage: "url('https://ibighit.com/bts/images/profile/proof/member/bts-pc.jpg')" }}
      >
        <div className="text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">BTS</h1>
          <p className="text-xl md:text-2xl">"La música y el amor nos unen"</p>
        </div>
      </div>

      {/* Sección "Acerca de" debajo de la imagen */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Acerca de BTS</h2>
          <p className="text-lg text-gray-700">
            BTS, también conocido como Bangtan Sonyeondan, es un grupo de K-pop
            surcoreano que ha conquistado el mundo con su música. Desde su debut en
            2013, han ganado múltiples premios y han sido una fuente de inspiración
            para millones de personas alrededor del mundo. Su música abarca diversos
            géneros, y sus letras tratan temas de amor, autodefinición, y la
            importancia de la conexión humana.
          </p>
        </div>
      </div>

      {/* Sección Galería de imágenes */}
      <div className="py-12 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Integrantes</h2>

          {/* Grid de imágenes */}
          <div className="grid grid-cols-3 gap-6">

            {/* Cuadro 1 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
             
            >
              <img
                src="https://img.freepik.com/vector-premium/mid-autumn-festival-vector-fondo_1375-1115.jpg"
                alt="Imagen 1"
                className="w-full h-64 object-cover cursor-pointer"
              />
            </div>

            {/* Cuadro 2 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              onClick={() =>
                openModal("https://ibighit.com/bts/images/profile/proof/member/member-rm.jpg", "Lider de la banda RM")
              }
            >
              <img
                src="https://ibighit.com/bts/images/profile/proof/member/member-rm.jpg"
                alt="Imagen 2"
                className="w-full h-64 object-cover cursor-pointer"
              />
            </div>

            {/* Cuadro 3 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              
            >
              <img
                src="https://img.freepik.com/vector-premium/mid-autumn-festival-vector-fondo_1375-1115.jpg"
                alt="#"
                className="w-full h-64 object-cover cursor-pointer"
              />
            </div>

            {/* Cuadro 4 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              onClick={() =>
                openModal("https://ibighit.com/bts/images/profile/proof/member/member-jin.jpg", "Jin")
              }
            >
              <img
                src="https://ibighit.com/bts/images/profile/proof/member/member-jin.jpg"
                alt="Imagen 4"
                className="w-full h-64 object-cover cursor-pointer"
              /> 
            </div>

            {/* Cuadro 5 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
             
            >
              <img
                src="https://img.freepik.com/vector-premium/mid-autumn-festival-vector-fondo_1375-1115.jpg"
                alt=""
                className="w-full h-64 object-cover cursor-pointer"
              /> 
            </div>

            {/* Cuadro 6 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              onClick={() =>
                openModal("https://ibighit.com/bts/images/profile/proof/member/member-suga.jpg", "Suga")
              }
            >
              <img
                src="https://ibighit.com/bts/images/profile/proof/member/member-suga.jpg"
                alt="Imagen 6"
                className="w-full h-64 object-cover cursor-pointer"
              /> 
            </div>

            {/* Cuadro 7 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
             
            >
              <img
                src="https://img.freepik.com/vector-premium/mid-autumn-festival-vector-fondo_1375-1115.jpg"
                alt=""
                className="w-full h-64 object-cover cursor-pointer"
              /> 
            </div>

            {/* Cuadro 8 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              onClick={() =>
                openModal("https://ibighit.com/bts/images/profile/proof/member/member-jhope.jpg", "Jhope")
              }
            >
              <img
                src="https://ibighit.com/bts/images/profile/proof/member/member-jhope.jpg"
                alt="Imagen 8"
                className="w-full h-64 object-cover cursor-pointer"
              /> 
            </div>

            {/* Cuadro 9 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              onClick={() =>
                openModal("https://ibighit.com/bts/images/profile/proof/member/member-jimin.jpg", "Jimin")
              }
            >
              <img
                src="https://ibighit.com/bts/images/profile/proof/member/member-jimin.jpg"
                alt="Imagen 9"
                className="w-full h-64 object-cover cursor-pointer"
              /> 
            </div>


            {/* Cuadro 10 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              onClick={() =>
                openModal("https://ibighit.com/bts/images/profile/proof/member/member-v.jpg", "V")
              }
            >
              <img
                src="https://ibighit.com/bts/images/profile/proof/member/member-v.jpg"
                alt="Imagen 10"
                className="w-full h-64 object-cover cursor-pointer"
              /> 
            </div>

            {/* Cuadro 11 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              onClick={() =>
                openModal("https://ibighit.com/bts/images/profile/proof/member/member-jk.jpg", "Jungkook")
              }
            >
              <img
                src="https://ibighit.com/bts/images/profile/proof/member/member-jk.jpg"
                alt="Imagen 11"
                className="w-full h-64 object-cover cursor-pointer"
              /> 
            </div>

            {/* Cuadro 12 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              
            >
              <img
                src="https://img.freepik.com/vector-premium/mid-autumn-festival-vector-fondo_1375-1115.jpg"
                alt=""
                className="w-full h-64 object-cover cursor-pointer"
              /> 
            </div>



              

          </div>
        </div>
      </div>

      {/* Modal de imagen e información */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg flex space-x-6 w-3/4 md:w-1/2"
            onClick={(e) => e.stopPropagation()} // Evitar que el click cierre el modal al hacer clic en el contenido
          >
            {/* Imagen */}
            <div className="w-1/2">
              <img
                src={currentImage}
                alt="Imagen Modal"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Información */}
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Datos</h2>
              <p>{currentInfo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}