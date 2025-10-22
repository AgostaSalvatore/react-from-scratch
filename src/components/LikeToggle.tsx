import * as React from "react";
import { Heart } from "lucide-react";

export function LikeToggle() {
    const [isLiked, setIsLiked] = React.useState(false);  //[state value, state setter]

    function handleClick() {
        setIsLiked(!isLiked);
    }

    return (
        <button className="group" onClick={handleClick}>
            <Heart  className={isLiked ? " fill-pink-500 stroke-none" : " stroke-slate-500 group-hover:stroke-slate-300 "} />
        </button>
    )
}