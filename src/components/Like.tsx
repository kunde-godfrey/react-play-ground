import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  size: string;
  color: string;
  onToggleLike: () => void;
}

const Like = ({ size, color, onToggleLike }: Props) => {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike(!like);
    onToggleLike();
  };
  if (like)
    return (
      <div>
        <AiOutlineHeart size={size} color={color} onClick={toggleLike} />
      </div>
    );

  return (
    <div>
      <AiFillHeart size={size} color={color} onClick={toggleLike} />
    </div>
  );
};

export default Like;
