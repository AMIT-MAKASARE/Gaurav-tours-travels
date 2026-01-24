const Map = () => {
  return (
   
     <section className="py-16 bg-gray-50" id="map">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Location
      </h2>

      <div className="max-w-5xl mx-auto px-4">
        <iframe
          title="Aurangabad Location"
          src="https://www.google.com/maps?q=Aurangabad,Maharashtra&output=embed"
          className="w-full h-[400px] rounded-xl shadow-lg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Map;
