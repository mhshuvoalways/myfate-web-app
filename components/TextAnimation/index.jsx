import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Index = ({ letters, className, textCenter }) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={handleVisibilityChange}>
      <div className={textCenter && "text-center"}>
        {hasBeenVisible ? (
          <div className={`waviy`}>
            {letters.split(" ").map((letter, index) => (
              <p
                className={`mr-3 ${className}`}
                style={{ "--i": index + 1 }}
                key={index}
              >
                {letter}
              </p>
            ))}
          </div>
        ) : (
          <p className={`mr-3 ${className}`}>{letters}</p>
        )}
      </div>
    </VisibilitySensor>
  );
};

export default Index;
