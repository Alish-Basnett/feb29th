import React from "react";
import Buttons from "../helpers/Buttons";
import data from "../helpers/data";
import { FaAngleDown } from "react-icons/fa";

const RatedCards: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 text-gray-600 bg-white">
      {/* Loop through the data to dynamically render each card */}
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {/* Render choice image if it exists and is not empty */}
          {item.choice === "Best Choice" && (
            <div
              className="col-span-4 py-2 bg-orange-500 text-center flex items-center justify-center"
              style={{ width: 150 }}
            >
              <div className="max-w-100px flex items-center">
                <img
                  src={"/bestChoice.svg"}
                  alt="Best Choice"
                  width={20}
                  height={20}
                />
                <span className="ml-1">{item.choice}</span>
              </div>
            </div>
          )}
          {item.choice === "Best Value" && (
            <div
              className="col-span-4 py-2 bg-orange-500 text-center flex items-center justify-center"
              style={{ width: 150 }}
            >
              <div className="max-w-100px flex items-center">
                <img
                  src={"/bestValue.svg"}
                  alt="Best Value"
                  width={20}
                  height={20}
                />
                <span className="ml-1">{item.choice}</span>
              </div>
            </div>
          )}

          {/* First grid for numbering */}
          <div style={{ gridColumn: "auto" }}>
            <div> {item.id}</div>
          </div>

          {/* Second grid for images and text */}
          <div style={{ gridColumn: "auto" }}>
            {/* Top grid for images */}
            <div>
              <img
                src={"/download1.svg"}
                alt={`Image ${item.id}`}
                width={100}
                height={100}
              />
            </div>
            <div>
              <p>{item.text}</p>
            </div>
          </div>

          {/* Third grid for paragraphs and 'Show More' button */}
          <div className="grid grid-rows-4" style={{ gridColumn: "auto" }}>
            {/* Checking the value of text */}
            {item.text === "Builder 1" && (
              <React.Fragment>
                {item.paragraphs.map((paragraph, index) => (
                  <React.Fragment key={index}>
                    <div>
                      <p>{paragraph}</p>
                    </div>
                    {index === 0 && item.paragraphs.length === 2 && (
                      <div>Main highlights</div>
                    )}
                  </React.Fragment>
                ))}
                <div className="flex items-center">
                  <p>Show more {<FaAngleDown />}</p>
                </div>
              </React.Fragment>
            )}
            {item.text === "CDK" && (
              <div>
                <div>
                  <span>CDK Responsive Builder: </span>
                  <span>
                    An extensive library of widgets and apps, and detailed
                    step-by-step guides
                  </span>
                </div>
                <div>26% Off</div>
                <div>Main Highlights</div>
                <div>
                  <ul>
                    <li className="flex items-center">
                      <div>9.9</div>
                      <div>Building Responsive</div>
                    </li>
                    <li className="flex items-center">
                      <div>8.9</div>
                      <div>Cool</div>
                    </li>

                    <li className="flex items-center">
                      <div>8.9</div>
                      <div>Docs</div>
                    </li>
                  </ul>
                </div>
                <div>Why we love it</div>
                <div>
                  <ul>
                    <li className="flex items-center">
                      <div>✅</div>
                      <div>Documentation</div>
                    </li>
                    <li className="flex items-center">
                      <div>✅</div>
                      <div>Easy Use</div>
                    </li>
                    <li className="flex items-center">
                      <div>✅</div>
                      <div>Out of Box</div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Fourth grid for text, image, and button */}
          <div className="grid grid-rows-4" style={{ gridColumn: "auto" }}>
            {/* Top grid for text and image */}
            <div>
              <div>
                <p>{item.text2}</p>
              </div>
              <div>
                <p>{item.text3}</p>
              </div>
              <div>
                <img src={item.image2} alt={`Image 2 for ${item.id}`} />
              </div>
            </div>
            {/* Bottom grid for 'View' button */}
            <div>
              <Buttons text="View" />
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RatedCards;
