import { MonoTypeOperatorFunction, Observable } from 'rxjs';
type BeforeCompleteArgType = Promise<unknown> | Observable<unknown> | (() => void) | (() => Promise<unknown>) | (() => Observable<unknown>);
/**
 * @category Operators
 * @description This operator will execute the given argument before completing the source observable.
 *				 The argument can be a Promise, an Observable, a function that returns a Promise or an Observable or a simple function.
 *				 </r>
 *				  <p class="very-important">If the argument is an Observable or a function that returns an Observable, the returned Observable will complete only when the argument Observable completes</p>
 * @example ### Example with a function that returns a Promise
 * ```ts
 * const promise = new Promise((resolve) => {
 *   setTimeout(() => {
 *      console.log("after 2.5s");
 *      resolve()
 *  }, 2500);
 * });
 *
 * of(1, 2, 3)
 *   .pipe(beforeComplete(() => promise))
 *   .subscribe({
 *     next: (v) => console.log("next", v),
 *     complete: () => console.log("complete"),
 *   });
 *   // OUTPUT:
 *   // next 1
 *   // next 2
 *   // next 3
 *   // after 2.5s
 *   // complete
 * ```
 *
 * @example ### Example with an Observable
 * ```ts
 * const timer$ = timer(2500).pipe( tap(() => console.log("after 2.5s")));
 *
 * of(1, 2, 3)
 *   .pipe(beforeComplete(timer$)
 *   .subscribe({
 *     next: (v) => console.log("next", v),
 *     complete: () => console.log("complete"),
 *   });
 *   // OUTPUT:
 *   // next 1
 *   // next 2
 *   // next 3
 *   // after 2.5s
 *   // complete
 * ```
 *
 * @example ### Example with a function
 *  ```ts
 *
 * of(1, 2, 3)
 *   .pipe(beforeComplete(console.log("beforeComplete"))
 *   .subscribe({
 *     next: (v) => console.log("next", v),
 *     complete: () => console.log("complete"),
 *   });
 *   // OUTPUT:
 *   // next 1
 *   // next 2
 *   // next 3
 *   // beforeComplete
 *   // complete
 * ```
 *
 * @param arg : Promise | Observable | (() => void) | (() => Promise) | (() => Observable)
 * @returns A function that returns an Observable that will execute the given argument before completing the source observable.
 */
export declare const beforeComplete: <T>(arg: BeforeCompleteArgType) => MonoTypeOperatorFunction<T>;
export {};
//# sourceMappingURL=before-complete.d.ts.map