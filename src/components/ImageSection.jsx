function ImageSection({ planetData }) {
  return (
    <div className="image-section">
      <img
        key={planetData.image}
        src={`assets/${planetData.image}`}
        alt={planetData.name}
      />
    </div>
  );
}

export default ImageSection;


