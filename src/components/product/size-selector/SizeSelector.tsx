import type { Size } from "@/interfaces/product.interface";
import clsx from "clsx";

interface Props {
  selectedSize?: Size;
  availableSizes: Size[];
  onSizeChange: (size: Size) => void;
}

export const SizeSelector = ({
  selectedSize,
  availableSizes,
  onSizeChange,
}: Props) => {
  return (
    <div className="my-5 ">
      <h3 className="font-bold mb-4">Talles disponibles</h3>

      <div className="flex ">
        {availableSizes.map((size) => (
          <button
            onClick={() => onSizeChange(size)}
            className={clsx(
              "mx-2 hover:underline text-lg",
              size === selectedSize
                ? "text-primary font-bold underline"
                : "text-gray-500"
            )}
            key={size}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
