declare module 'rickmortyapi' {
  export function getEndpoints(): () => any;
  export function getCharacter<T>(opt: T): (item: string, opt: T) => any;
  export function getLocation<T>(opt: T): (item: string, opt: T) => any;
  export function getEpisode<T>(opt: T): (item: string, opt: T) => any;
}
