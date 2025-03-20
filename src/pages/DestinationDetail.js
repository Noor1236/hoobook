import { useParams } from "react-router-dom";

function DestinationDetail() {
  const { id } = useParams();

  return (
    <div className="p-6 text-white bg-black">
      <h1 className="text-2xl">Destination Details - {id}</h1>
      <p>More details will be added soon.</p>
    </div>
  );
}

export default DestinationDetail;
