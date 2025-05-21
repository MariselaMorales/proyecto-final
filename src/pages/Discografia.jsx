import React, { useState } from "react";
export default function Discografia() {
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
    <div className="bg-black">

      {/* Sección "Acerca de" debajo de la imagen */}
      <div className="bg-gray-100 py-12 px-6 justify-center grid grid-cols-1 place-items-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex items-center gap-8">

          {/* Texto a la izquierda */}
          <div className="md:w-1/2 mx-auto text-center max-w-lg">
            <h2 className="text-3xl text-gray-800 text-center mb-4">Canciones</h2>
            <p className="text-lg text-gray-700 text-justify mb-4 mx-auto ">
              La discografía de BTS no solo se limita a los singles, mini-álbumes y álbumes publicados bajo la empresa Big Hit,
              sino que, mediante el transcurso desde el pre-debut hasta la actualidad,
              el grupo ha demostrado sus capacidades de producción, composición, escritura de letras y presentaciones en vivo de diversos temas,
              desde canciones publicadas antes de debutar como grupo, pasando por mixtapes, discografías en otros países, re-publicaciones de algún álbum, covers etc.
            </p>
          </div>
          
          {/* Imagen a la derecha */}
          <div className="md:w-1/2 place-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVxltgX50O3-K1yV5PiKX_kPkJ_as_9Qt7AQ&s"
              alt="imagen1"
              className="w-1/2 h-64 object-cover rounded shadow"
            />
          </div>
        </div>
      </div>


      {/* Sección Galería de imágenes */}
     <section className="grid place-items-center py-12 px-6 bg-gray-100">
     <div className="max-w-6xl mx-auto text-center">
     <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">Pre-Bangtan</h2>
     <p className="mb-8 text-center">
      Canciones realizadas como el antiguo proyecto Bangtan Sonyeondan.
     </p>

     {/* Grid de imágenes */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center text-center mt-10">

      {/* Cuadro 1 con enlace directo */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <a
          href="https://youtu.be/X1jy9NpWn0o" // ← Cambia esta URL por la del video real
          target="_blank"
          draggable="false"
          
        >
          <img
            src="https://thelimitzero.wordpress.com/wp-content/uploads/2022/04/img_1695.jpg?w=1024"
            draggable="false"
            alt="Imagen 1"
            className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            
          />
        </a>
        <br />
        <h1>Album de colaboracion We Are B.P.B</h1>
      </div>

      {/* Cuadro 2 con enlace directo */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <a
          href="https://youtu.be/GpFydMurMbQ" // ← Cambia esta URL por la del video real
          target="_blank"
          draggable="false"
          
        >
          <img
            src="https://i1.sndcdn.com/artworks-000113783557-vb50ll-t500x500.jpg"
            draggable="false"
            alt="Imagen 1"
            className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            
          />
        </a>
        <br />
        <h1>Hook Gayo (훅가요) es una canción lanzada
          <br /> como el antiguo proyecto 
          <br />Hip-Hop idol BTS
          </h1>
      </div>

    </div>
  </div>
</section>

{/* Sección Galería de imágenes */}
     <section className="grid place-items-center py-12 px-6 bg-gray-100">
     <div className="max-w-6xl mx-auto text-center">
     <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">Canciones</h2>
     <p className="mb-8 text-center">
      Lanzadas oficialmente
     </p>

     {/* Grid de imágenes */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center text-center mt-10">

      {/* Cuadro 1 con enlace directo */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <a
          href="https://ibighit.com/bts/eng/discography/detail/2_cool_4_school.html" // ← Cambia esta URL por la del video real
          target="_blank"
          draggable="false"
          
        >
          <img
            src="https://ibighit.com/bts/images/bts/discography/2_cool_4_school/album-cover.jpg"
            draggable="false"
            alt="Imagen 1"
            className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            
          />
        </a>
        <br />
        <h1>Album 2 COOL 4 SKOOL</h1>
      </div>

      {/* Cuadro 2 con enlace directo */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <a
          href="https://ibighit.com/bts/eng/discography/detail/hwayangyeonhwa-young_forever.html" // ← Cambia esta URL por la del video real
          target="_blank"
          draggable="false"
          
        >
          <img
            src="https://ibighit.com/bts/images/bts/discography/young_forever/album-cover.jpg"
            draggable="false"
            alt="Imagen 1"
            className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            
          />
        </a>
        <br />
        <h1>Album: 
          THE MOST BEAUTIFUL MOMENT IN LIFE :
          <br />YOUNG FOREVER
        </h1>
      </div>

      {/* Cuadro 3 con enlace directo */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <a
          href="https://ibighit.com/bts/eng/discography/detail/wings.html" // ← Cambia esta URL por la del video real
          target="_blank"
          draggable="false"
          
        >
          <img
            src="https://ibighit.com/bts/images/bts/discography/wings/album-cover.jpg"
            draggable="false"
            alt="Imagen 1"
            className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            
          />
        </a>
        <br />
        <h1>Album: wings</h1>
      </div>

      {/* Cuadro 4 con enlace directo */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <a
          href="https://ibighit.com/bts/eng/discography/detail/you_never_walk_alone.html" // ← Cambia esta URL por la del video real
          target="_blank"
          draggable="false"
          
        >
          <img
            src="https://ibighit.com/bts/images/bts/discography/you_never_walk_alone/album-cover.jpg"
            draggable="false"
            alt="Imagen 1"
            className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            
          />
        </a>
        <br />
        <h1>Album: You Never Walk Alone</h1>
      </div>

      {/* Cuadro 5 con enlace directo */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <a
          href="https://ibighit.com/bts/eng/discography/detail/love_yourself-answer.html" // ← Cambia esta URL por la del video real
          target="_blank"
          draggable="false"
          
        >
          <img
            src="https://ibighit.com/bts/images/bts/discography/love_yourself-answer/album-cover.jpg"
            draggable="false"
            alt="Imagen 1"
            className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            
          />
        </a>
        <br />
        <h1>Album: Love Yourself 'Answer'</h1>
      </div>

      {/* Cuadro 6 con enlace directo */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <a
          href="https://ibighit.com/bts/eng/discography/detail/dynamite.html" // ← Cambia esta URL por la del video real
          target="_blank"
          draggable="false"
          
        >
          <img
            src="https://ibighit.com/bts/images/bts/discography/dynamite/Q7gBkUusiDcIYljQOMX9ow6W.jpg"
            draggable="false"
            alt="Imagen 1"
            className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            
          />
        </a>
        <br />
        <h1>Album: Dynamite</h1>
      </div>

    </div>
  </div>
</section>


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
              <h2 className="text-2xl font-semibold mb-4">Track</h2>
              <p>{currentInfo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}