function ImageSection({ planetData }) {
  return (
    <div className="image-section">
      <img
        key={planetData.image}
        loading="lazy"
        src={planetData.image}
        alt={planetData.name}
      />
    </div>
  );
}

export default ImageSection;
