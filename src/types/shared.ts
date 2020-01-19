export type HandleChangeFunc<T> = (name: string, value: T) => void;

export type HandleBlurFunc<TEvent> = (e: TEvent) => void;
export type HandleFocusFunc<TEvent> = (e: TEvent) => void;
