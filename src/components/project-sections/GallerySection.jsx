function GallerySection({ images }) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* GALLERY TITLE */}
        <h2 className="text-2xl font-semibold text-white mb-6">
          Screens & Mockups
        </h2>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {images.map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-white/10 bg-[#131A2B]"
            >
              <img
                src={img}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GallerySection;