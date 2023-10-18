import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Index = ({ letters, className }) => {
  const [visible, setIsVisible] = useState(false);

  function onChange(visible) {
    if (visible) {
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    }
  }

  return (
    <VisibilitySensor onChange={onChange}>
      {({ isVisible }) => (
        <div>
          {isVisible && !visible ? (
            <div className="waviy">
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
      )}
    </VisibilitySensor>
  );
};

export default Index;
