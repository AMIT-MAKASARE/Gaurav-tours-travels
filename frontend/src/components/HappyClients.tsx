import { useEffect, useRef, useState } from "react"

interface ClientPhoto {
  id: number
  src: string
  alt: string
  tour: string
}

const clientPhotos: ClientPhoto[] = [
  { id: 1, src: "/23.webp", alt: "Grishneshwar tour group", tour: "Grishneshwar Tour" },
  { id: 3, src: "/11.webp", alt: "Group at historic monument", tour: "Historic Monument Tour" },
  { id: 4, src: "/22.webp", alt: "Clients enjoying tour transport", tour: "Adventure Tour" },
  { id: 5, src: "/24.webp", alt: "Group enjoying refreshments", tour: "Refreshment Break" },
  { id: 6, src: "/25.webp", alt: "Group at hotel entrance", tour: "Hotel Stay" },
  { id: 8, src: "/12.webp", alt: "Group at historic fort", tour: "Fort Exploration" },
  { id: 9, src: "/21.webp", alt: "Beautiful group photo with mountains", tour: "Mountain View Tour" },
  { id: 10, src: "/14.webp", alt: "Group at cave structure", tour: "Cave Exploration" },
   { id: 11, src: "/5.webp", alt: "Grishneshwar tour group", tour: "Grishneshwar Tour" },
  { id: 12, src: "/6.webp", alt: "Happy clients on bus journey", tour: "Bus Journey" },
  { id: 15, src: "/9.webp", alt: "Group enjoying refreshments", tour: "Refreshment Break" },
  { id: 16, src: "/15.webp", alt: "Group at hotel entrance", tour: "Hotel Stay" },
  { id: 17, src: "/29.webp", alt: "Clients with bicycle", tour: "Cycling Adventure" },
  { id: 18, src: "/17.webp", alt: "Group at historic fort", tour: "Fort Exploration" },
  { id: 19, src: "/18.webp", alt: "Beautiful group photo with mountains", tour: "Mountain View Tour" },
  
]

function PhotoCard({
  photo,
  index,
}: {
  photo: ClientPhoto
  index: number
}) {
  const [isInView, setIsInView] = useState(false)
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) observer.observe(cardRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-lg transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-200">
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          <p className="text-white text-sm font-medium">{photo.tour}</p>
        </div>
      </div>
    </div>
  )
}

const HappyClients = () => {
  return (
    <main id="happyClient" className="min-h-screen bg-background">
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Happy <span className="text-primary">Clients</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Beautiful moments from our clients' unforgettable journeys
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {clientPhotos.map((photo, index) => (
              <PhotoCard key={photo.id} photo={photo} index={index} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <button
                   onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105"

            >
              Book Your Tour
            </button>
            
          </div>

        </div>
      </section>
    </main>
  )
}

export default HappyClients
