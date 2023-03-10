import type { ChangeEvent, FormEvent } from "react";

// export const wrapAsync = (asyncFunc: () => Promise<void>) => (event) => {
// void asyncFunc();
// };

export const wrapFormAsync =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void asyncFunc();
  };

export const wrapAsync =
  <E>(asyncFunc: (event: E) => Promise<void>) =>
  (event: E) => {
    void asyncFunc(event);
  };
