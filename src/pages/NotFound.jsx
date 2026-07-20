import Watermark from "../components/Watermark.jsx";

function NotFound({ t, onBackHome }) {
  const nf = t.notFound;

  return (
    <div className="page page-not-found">
      <Watermark text={nf.watermark} className="not-found-watermark" />
      <p className="not-found-text">{nf.text}</p>
      <button type="button" className="btn btn-primary" onClick={onBackHome}>
        {nf.button}
      </button>
    </div>
  );
}

export default NotFound;
