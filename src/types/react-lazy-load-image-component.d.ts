import {
  ComponentType,
  CSSProperties,
  FunctionComponent,
  ImgHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

declare module "react-lazy-load-image-component";

export type DelayMethod = "debounce" | "throttle";
export type Effect = "blur" | "black-and-white" | "opacity";

export interface ScrollPosition {
  x: number;
  y: number;
}

export interface CommonProps {
  afterLoad?: (() => any) | undefined;
  onLoad?: (() => any) | undefined;
  beforeLoad?: (() => any) | undefined;
  delayMethod?: DelayMethod | undefined;
  delayTime?: number | undefined;
  threshold?: number | undefined;
  useIntersectionObserver?: boolean | undefined;
  visibleByDefault?: boolean | undefined;
  placeholder?: ReactElement | null | undefined;
  scrollPosition?: ScrollPosition | undefined;
}

export interface LazyLoadImageProps
  extends CommonProps,
    Omit<ImgHTMLAttributes<HTMLImageElement>, "placeholder" | "onLoad"> {
  effect?: Effect | undefined;
  placeholderSrc?: string | undefined;
  wrapperClassName?: string | undefined;
  wrapperProps?: React.HTMLAttributes<HTMLSpanElement> | undefined;
}

export const LazyLoadImage: FunctionComponent<LazyLoadImageProps>;

export interface LazyComponentProps {
  scrollPosition: ScrollPosition;
}

export function trackWindowScroll<P extends LazyComponentProps>(
  BaseComponent: ComponentType<P>
): ComponentType<Omit<P, "scrollPosition">>;

export interface LazyLoadComponentProps extends CommonProps {
  children: ReactNode;
  style?: CSSProperties | undefined;
}

export const LazyLoadComponent: FunctionComponent<LazyLoadComponentProps>;
