import { FC, ReactNode } from "react";
import { DraggableItem } from "./Element";

export const DraggableList: FC<{
  forType: string;
  elements: any[];
  render: (element: any, handle?: any) => ReactNode;
  onSortChange?: (elements: any[]) => void;
  onCombine?: (fromId: string, toId: string) => void;
}> = ({ forType, elements, render, onSortChange, onCombine }) => {
  const onChangePos = (id: string, pos: number) => {
    const el = elements.find((el) => el.id === id);
    const without = elements.filter((el) => el.id !== id);
    without.splice(pos, 0, el);
    onSortChange?.(without);
  };

  return (
    <div>
      {elements.map((e, index) => (
        <DraggableItem
          type={forType}
          id={e.id}
          key={e.id}
          index={index}
          canCombine={e.canCombine}
          move={onChangePos}
          combine={onCombine}
          element={e}
          render={render}
        />
      ))}
    </div>
  );
};
