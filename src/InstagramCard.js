import "./InstagramCard.css";
import "./transitions.css";

export default function InstagramCard(props) {
  console.log(props.permalink);
  return (
    <div className="rounded-xl shadow shadow-black m-2 text-center ld ld-bounce-alt-in">
      <div>
        <img
          className="m-5 aspect-square w-60 rounded-xl shadow shadow-black "
          src={props.imgSrc}
          alt="instagram-post"
        />
      </div>
      <div className="m-5 w-60 h-24 overflow-scroll">{props.caption}</div>
      <div className="m-5">
        <a
          href={props.link}
          className="rounded-lg shadow shadow-black p-2 text-center font-bold text-white bg-black hover:bg-blue-600"
        >
          Voir le post original
        </a>
      </div>
    </div>
  );
}
