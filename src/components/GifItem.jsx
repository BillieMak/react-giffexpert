export const GifItem = ({ id, title , url}) => {
  return (
    // <li key={key}>{title}</li>
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>

    </div>
    
  );
};
