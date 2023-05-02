var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EventEmitter_listeners;
/**
 * Adds types to the EventTarget class. Hopefully this won't be necessary forever.
 *
 * https://github.com/microsoft/TypeScript/issues/28357
 * https://github.com/microsoft/TypeScript/issues/43477
 * https://github.com/microsoft/TypeScript/issues/299
 * etc
 */
export class EventEmitter extends EventTarget {
    constructor() {
        super(...arguments);
        _EventEmitter_listeners.set(this, new Map());
    }
    listenerCount(type) {
        const listeners = __classPrivateFieldGet(this, _EventEmitter_listeners, "f").get(type);
        if (listeners == null) {
            return 0;
        }
        return listeners.length;
    }
    addEventListener(type, listener, options) {
        super.addEventListener(type, listener, options);
        let list = __classPrivateFieldGet(this, _EventEmitter_listeners, "f").get(type);
        if (list == null) {
            list = [];
            __classPrivateFieldGet(this, _EventEmitter_listeners, "f").set(type, list);
        }
        list.push({
            callback: listener,
            once: (options !== true && options !== false && options?.once) ?? false
        });
    }
    removeEventListener(type, listener, options) {
        super.removeEventListener(type.toString(), listener ?? null, options);
        let list = __classPrivateFieldGet(this, _EventEmitter_listeners, "f").get(type);
        if (list == null) {
            return;
        }
        list = list.filter(({ callback }) => callback !== listener);
        __classPrivateFieldGet(this, _EventEmitter_listeners, "f").set(type, list);
    }
    dispatchEvent(event) {
        const result = super.dispatchEvent(event);
        let list = __classPrivateFieldGet(this, _EventEmitter_listeners, "f").get(event.type);
        if (list == null) {
            return result;
        }
        list = list.filter(({ once }) => !once);
        __classPrivateFieldGet(this, _EventEmitter_listeners, "f").set(event.type, list);
        return result;
    }
}
_EventEmitter_listeners = new WeakMap();
/**
 * CustomEvent is a standard event but it's not supported by node.
 *
 * Remove this when https://github.com/nodejs/node/issues/40678 is closed.
 *
 * Ref: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
 */
class CustomEventPolyfill extends Event {
    constructor(message, data) {
        super(message, data);
        // @ts-expect-error could be undefined
        this.detail = data?.detail;
    }
}
export const CustomEvent = globalThis.CustomEvent ?? CustomEventPolyfill;
//# sourceMappingURL=events.js.map