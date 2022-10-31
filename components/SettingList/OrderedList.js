import React, { useEffect, useRef, useState } from "react";
import OrderChannel from "./OrderChannel";
import "./SettingChannelList.scss";
import Loader from "../../global-components/Loader";
import Logos from "../../global-components/AllLogos.js";
import { nanoid } from "nanoid";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const SortableItem = SortableElement(({ value }) => (
  <div key={nanoid()}>
    <OrderChannel
      key={nanoid()}
      logoLink={value.logoLink}
      channelName={value.channelName}
      programCount={value.programCount}
    />
  </div>
));
const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      {items.map((value, index) => {
        if (!value.checked) {
          return <></>;
        }
        return <SortableItem key={nanoid()} index={index} value={value} />;
      })}
    </div>
  );
});
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
        const items = JSON.parse(window.localStorage.getItem("channelList"));
        setRenderer(items);
      } catch {}
    } catch {}
  }, []);

  useEffect(() => {
    if (renderer) {
      window.localStorage.setItem("channelList", JSON.stringify(renderer));
    }
  }, [renderer]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(renderer);
    const [reorderItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderItem);

    setRenderer(items);
  };
  const onSortEnd = (result) => {
    console.log("result", result);
    const items = Array.from(renderer);
    const [reorderItem] = items.splice(result.oldIndex, 1);
    items.splice(result.newIndex, 0, reorderItem);

    setRenderer(items);
  };
  return (
    <div className="selection__list">
      {!renderer ? (
        <Loader />
      ) : (
        <div className="channelList">
          <SortableList items={renderer} onSortEnd={onSortEnd} />
        </div>
      )}
    </div>
  );
};

export default OrderedList;
