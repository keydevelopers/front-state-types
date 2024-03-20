/**
 * @description watch callback
 */
export type Listener<T> = (newValue: T, oldValue: T) => void;

/**
 * @description update function for state
 */
export type Setter<T> = (current: T) => T;

/**
 * @description provides watch to listen for future updates, the current state is value.
 * - doesn't allow external updates
 */
export interface IState<T> {
  get value(): T;
  watch: (callback: Listener<T>) => void;
  unWatch: (callback: Listener<T>) => void;
}

/**
 * @description a state that allows external updates
 */
export interface IMut<T> extends IState<T> {
  set value(value: T);
  set: (setter: Setter<T>) => void;
}

export type StateFul<T> = IMut<T> | IState<T> | T;
