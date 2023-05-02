export interface Transform<A, B = A> {
  (source: Source<A>): Source<B>
}

export interface Sink<T, R = Promise<void>> {
  (source: Source<T>): R
}

export type Source<T> = AsyncIterable<T> | Iterable<T>

export interface Duplex<TSource, TSink = TSource, RSink = Promise<void>> {
  source: Source<TSource>
  sink: Sink<TSink, RSink>
}
