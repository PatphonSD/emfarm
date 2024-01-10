import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

const Container = ({
  children,
  className,
  asSub,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  asSub?: boolean;
  props?: HTMLAttributes<HTMLDivElement>;
}) => (
  <div
    {...props}
    className={clsx(className, "container max-w-7xl mx-auto px-4", !asSub && "py-16")}
  >
    {children}
  </div>
);

export default Container;
