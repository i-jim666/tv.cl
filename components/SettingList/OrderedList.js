import React, { useEffect, useRef, useState } from "react";
import OrderChannel from "./OrderChannel";
import "./SettingChannelList.scss";
import Loader from "../../global-components/Loader";
import Logos from "../../global-components/AllLogos.js";
import { nanoid } from "nanoid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const OrderedList = () => {
  function convertToFit(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "_")
      .replace(/[^\w-]+/g, "");
  }

  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    try {
      try {
        const items = JSON.parse(localStorage.getItem("channelList"));
        setRenderer(items);
      } catch {}
    } catch {}
  }, []);
  console.log("parent renderer", renderer);
  useEffect(() => {
    if (renderer) {
      localStorage.setItem("channelList", JSON.stringify(renderer));
    }
  }, [renderer]);

  const handleOnDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;
    const items = Array.from(renderer);
    const [reorderItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderItem);

    setRenderer(items);
  };
  return (
    <div className="selection__list">
      {!renderer ? (
        <Loader />
      ) : (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="channelList">
            {(provided) => (
              <div
                className="channelList"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {renderer.map((item, index) => {
                  if (!item.checked) {
                    return <></>;
                  }
                  return (
                    <Draggable
                      key={nanoid()}
                      draggableId={item.channelName}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                        >
                          <OrderChannel
                            key={nanoid()}
                            logoLink={item.logoLink}
                            channelName={item.channelName}
                            programCount={item.programCount}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default OrderedList;
