import { useEffect, useState } from "react";
import { FloatingIcon } from "./FloatingIcon";

export const RandomIconGenerator = () => {
  const [icons, setIcons] = useState([]);
  const [index, setIndex] = useState(0);
  const { innerWidth: width, innerHeight: height } = window

  function updateImages() {
    const newIcon = {
      id: index,
      timeVisible: parseInt(Math.random() * 100),
      source: `/images/logo${Math.floor(Math.random() * 4) + 1}.png`,
      position: {
        left: parseInt(Math.random() * width),
        top: parseInt(Math.random() * height),
      },
      size: parseInt(Math.random() * 64) + 64,
      classNames: "icon_fade_in",
      fadeTime: parseInt(Math.random() * 2) + 6,
      rotationTime: parseInt(Math.random() * 10) + 10,
      xMovement: (parseInt(Math.random() * 1000) - 500) * 10000,
      yMovement: (parseInt(Math.random() * 1000) - 500) * 10000,
      speed: (parseInt(Math.random() * 1) + 5) * 10000,
      existTime: parseInt(Math.random() * 2) + 8,
      creationTime: new Date(),
    };
    setIndex((previous) => previous + 1);
    setIcons((previous) => [...previous, newIcon]);
    update_numbers();
  }

  function update_numbers() {
    setIcons((previous) =>
      previous.map((value) => {
        console.log(new Date() - value.creationTime > value.existTime * 1000);
        if (new Date() - value.creationTime > value.existTime * 1000) {
          return {
            ...value,
            classNames: value.classNames.replace(
              "icon_fade_in",
              "icon_fade_out"
            )
            // xStart: value.xStart + ((value.xMovement - value.xStart)/value.speed),
            // yStart: value.yStart + ((value.yMovement - value.yStart)/value.speed),
            // xMovement: value.xMovement + ((value.xMovement - value.xStart)/value.speed),
            // yMovement: value.yMovement + ((value.yMovement - value.yStart)/value.speed),
          };
        }
        return value;
      })
    );
    setIcons((previous) =>
      previous.filter((value) => {
        return (
          new Date() - value.creationTime <
          (value.existTime + value.fadeTime + 2) * 1000
        );
      })
    );
  }

  useEffect(() => {
    const interval_id = setInterval(updateImages, 1000);
    // const update_interval_id = setInterval(update_numbers, 1);

    return () => {
      clearInterval(interval_id);
      // clearInterval(update_interval_id)
    };
  });

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {icons.map((number) => {
        return (
          <FloatingIcon key={number.id} icon={number} />
          //   <img
          //     key={number.position.top}
          //     src={number.source}
          //     alt={number.source}
          //     className="icon_fade_in"
          //     style={{
          //       position: "absolute",
          //       left: number.position.left,
          //       top: number.position.top,
          //       "--fade_time": `${number.fadeTime}s`,
          //     }}
          //     width={number.size}
          //     height={number.size}
          //   />
        );
      })}
    </div>
  );
};
