import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  /**
   * Checks whether two arrays are equal (for instance string arrays).
   * @param a: First array
   * @param b: Second array
   */
  simpleArraysEqual<T>(a: T, b: T): boolean {
    return Array.isArray( a ) &&
      Array.isArray( b ) &&
      a.length === b.length &&
      a.every( (el, index) => {
        return el === b[ index ];
      } );
  }

  /**
   * Removes keys from object whose values are null, undefined, an empty string or array.
   * Can be used for clean REST requests.
   * Does not support nested data structures like { cars: { name: 'BMW' } } or { cars: [ names: [] ] }
   * @param filter: Filter Object
   */
  removeKeysWithoutInformationFromObject<T extends Object>(filter: T): Object {
    if ( typeof filter != 'object' ) { return {}; }

    return Object.keys( filter )
      .filter( key => filter[ key ] != null && filter [ key ] !== '' )
      .filter( key => !Array.isArray( filter[ key ] ) || Array.isArray( filter[ key ] ) && filter[ key ].length > 0 )
      .reduce( (obj, key) => {
        obj[ key ] = filter[ key ];
        return obj;
      }, {} );
  }
}
