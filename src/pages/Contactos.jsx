export default function Contactos() {
  const contactos = [
    {
      nombre: "RM",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgUvdvjQmXFpWLWrNYW60k5v5UHIqHdRM0FHSjM9y-Eh-ZKDiD3tolZ-wYcsC6djgSL70&usqp=CAU",
      instagram: "rkive",
      tiktok: "",
      weverse: "bts"
    },
    {
      nombre: "Jin",
      imagen: "https://cdn.shopify.com/s/files/1/0645/2546/7890/files/D9E3E4B2-F121-41BA-BE63-7046140F8607_480x480.jpg?v=1668698744",
      instagram: "jin",
      tiktok: "",
      weverse: ""
    },
    {
      nombre: "Suga",
      imagen: "https://i.scdn.co/image/ab6761610000e5eb0fad315ccb6b38517152d2cc",
      instagram: "agustd",
      tiktok: "",
      weverse: ""
    },
    {
      nombre: "j-hope",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD34YGtIuyupqYgPDqXPAywGzx4sGGcg_L5ebaJ7C_u-DAx0YKywNMNtzU1CmYKclvCJ8&usqp=CAU",
      instagram: "uarmyhope",
      tiktok: "iamurhope",
      weverse: ""
    },
    {
      nombre: "Jimin",
      imagen: "https://i.pinimg.com/736x/d6/11/32/d611327190d133e587156fa03d008a21.jpg",
      instagram: "j.m",
      tiktok: "",
      weverse: ""
    },
    {
      nombre: "V",
      imagen: "https://preview.redd.it/bts-proof-concept-photos-proof-ver-2-290522-v0-p43snajqe8291.jpg?width=640&crop=smart&auto=webp&s=690e97cdbd9b69412efe3493553c37247ae093f8",
      instagram: "",
      tiktok: "thv",
      weverse: ""
    },
    {
      nombre: "Jungkook",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCQIlJ2eH8jAZ9tejlV403bGFkLRtNh1PebBVWJnfvofKpQo8tqxKzBl_uwGopydjzkMg&usqp=CAU",
      instagram: "bowwow_bam",
      tiktok: "abjkMRstY",
      weverse: ""
    }
  ];

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Integrantes de BTS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactos.map((contacto, index) => (
            <div key={index} className="border p-4 rounded-2xl bg-white shadow text-center">
              {contacto.imagen && (
                <img
                  src={contacto.imagen}
                  alt={contacto.nombre}
                  className="w-24 h-24 rounded-full mx-auto object-cover mb-2"
                />
              )}
              <p className="font-semibold text-lg">{contacto.nombre}</p>

              <div className="mt-2 space-y-1 text-sm">
                {contacto.instagram && (
                  <div>Instagram: <span className="text-blue-600">@{contacto.instagram}</span></div>
                )}
                {contacto.tiktok && (
                  <div>TikTok: <span className="text-pink-600">@{contacto.tiktok}</span></div>
                )}
                {contacto.weverse && (
                  <div>Weverse: <span className="text-green-600">@{contacto.weverse}</span></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}