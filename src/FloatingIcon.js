import "./FloatingIcon.css";

export const FloatingIcon = ({ icon }) => {
  //   const [icon, setNewIcon] = useState({
  //     timeVisible: parseInt(Math.random() * 100),
  //     source: `/images/logo${Math.floor(Math.random() * 4) + 1}.png`,
  //     position: {
  //       left: parseInt(Math.random() * 1000),
  //       top: parseInt(Math.random() * 1000),
  //     },
  //     size: parseInt(Math.random() * 64) + 64,
  //     className: "icon_fade_in",
  //     fadeTime: parseInt(Math.random() * 10) + 10,
  //     existTime: parseInt(Math.random() * 10) + 5,
  //   });

  return (
    <img
      src={icon.source}
      alt={icon.source}
      className={icon.classNames}
      style={{
        position: "absolute",
        left: icon.position.left,
        top: icon.position.top,
        "--fade_time": `${icon.fadeTime}s`,
        "--rotation_time": `${icon.rotationTime}s`,
        "--x_movement": `${icon.xMovement}px`,
        "--y_movement": `${icon.yMovement}px`,
        "--speed": `${icon.speed}s`,
      }}
      width={icon.size}
      height={icon.size}
    />
  );
};
