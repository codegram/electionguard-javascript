(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.voter = {}));
}(this, (function (exports) { 'use strict';

    var __module_re__ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        get translate () { return translate; },
        get T () { return T; },
        get TEMPLATE () { return TEMPLATE; },
        get I () { return I; },
        get IGNORECASE () { return IGNORECASE; },
        get L () { return L; },
        get LOCALE () { return LOCALE; },
        get M () { return M; },
        get MULTILINE () { return MULTILINE; },
        get S () { return S; },
        get DOTALL () { return DOTALL; },
        get U () { return U; },
        get UNICODE () { return UNICODE; },
        get X () { return X; },
        get VERBOSE () { return VERBOSE$1; },
        get DEBUG () { return DEBUG; },
        get A () { return A; },
        get ASCII () { return ASCII; },
        get Y () { return Y; },
        get STICKY () { return STICKY; },
        get G () { return G$1; },
        get GLOBAL () { return GLOBAL; },
        get J () { return J; },
        get JSSTRICT () { return JSSTRICT; },
        get error () { return error; },
        get ReIndexError () { return ReIndexError; },
        get Match () { return Match; },
        get Regex () { return Regex; },
        get PyRegExp () { return PyRegExp; },
        get compile () { return compile; },
        get search () { return search; },
        get match () { return match; },
        get fullmatch () { return fullmatch; },
        get py_split () { return py_split; },
        get findall () { return findall; },
        get finditer () { return finditer; },
        get sub () { return sub; },
        get subn () { return subn; },
        get escape () { return escape; },
        get purge () { return purge; }
    });

    // Transcrypt'ed from Python, 2020-10-23 21:39:42
    var __name__ = 'org.transcrypt.__runtime__';

    function __nest__ (headObject, tailNames, value) {
        var current = headObject;
        if (tailNames != '') {
            var tailChain = tailNames.split ('.');
            var firstNewIndex = tailChain.length;
            for (var index = 0; index < tailChain.length; index++) {
                if (!current.hasOwnProperty (tailChain [index])) {
                    firstNewIndex = index;
                    break;
                }
                current = current [tailChain [index]];
            }
            for (var index = firstNewIndex; index < tailChain.length; index++) {
                current [tailChain [index]] = {};
                current = current [tailChain [index]];
            }
        }
        for (let attrib of Object.getOwnPropertyNames (value)) {
            Object.defineProperty (current, attrib, {
                get () {return value [attrib];},
                enumerable: true,
                configurable: true
            });
        }
    }function __get__ (self, func, quotedFuncName) {
        if (self) {
            if (self.hasOwnProperty ('__class__') || typeof self == 'string' || self instanceof String) {
                if (quotedFuncName) {
                    Object.defineProperty (self, quotedFuncName, {
                        value: function () {
                            var args = [] .slice.apply (arguments);
                            return func.apply (null, [self] .concat (args));
                        },
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                return function () {
                    var args = [] .slice.apply (arguments);
                    return func.apply (null, [self] .concat (args));
                };
            }
            else {
                return func;
            }
        }
        else {
            return func;
        }
    }function __getcm__ (self, func, quotedFuncName) {
        if (self.hasOwnProperty ('__class__')) {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self.__class__] .concat (args));
            };
        }
        else {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self] .concat (args));
            };
        }
    }var py_metatype = {
        __name__: 'type',
        __bases__: [],
        __new__: function (meta, name, bases, attribs) {
            var cls = function () {
                var args = [] .slice.apply (arguments);
                return cls.__new__ (args);
            };
            for (var index = bases.length - 1; index >= 0; index--) {
                var base = bases [index];
                for (var attrib in base) {
                    var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                    Object.defineProperty (cls, attrib, descrip);
                }
                for (let symbol of Object.getOwnPropertySymbols (base)) {
                    let descrip = Object.getOwnPropertyDescriptor (base, symbol);
                    Object.defineProperty (cls, symbol, descrip);
                }
            }
            cls.__metaclass__ = meta;
            cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
            cls.__bases__ = bases;
            for (var attrib in attribs) {
                var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
                Object.defineProperty (cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols (attribs)) {
                let descrip = Object.getOwnPropertyDescriptor (attribs, symbol);
                Object.defineProperty (cls, symbol, descrip);
            }
            return cls;
        }
    };
    py_metatype.__metaclass__ = py_metatype;
    var object = {
        __init__: function (self) {},
        __metaclass__: py_metatype,
        __name__: 'object',
        __bases__: [],
        __new__: function (args) {
            var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
            if ('__getattr__' in this || '__setattr__' in this) {
                instance = new Proxy (instance, {
                    get: function (target, name) {
                        let result = target [name];
                        if (result == undefined) {
                            return target.__getattr__ (name);
                        }
                        else {
                            return result;
                        }
                    },
                    set: function (target, name, value) {
                        try {
                            target.__setattr__ (name, value);
                        }
                        catch (exception) {
                            target [name] = value;
                        }
                        return true;
                    }
                });
            }
            this.__init__.apply (null, [instance] .concat (args));
            return instance;
        }
    };
    function __class__ (name, bases, attribs, meta) {
        if (meta === undefined) {
            meta = bases [0] .__metaclass__;
        }
        return meta.__new__ (meta, name, bases, attribs);
    }function __call__ (/* <callee>, <this>, <params>* */) {
        var args = [] .slice.apply (arguments);
        if (typeof args [0] == 'object' && '__call__' in args [0]) {
            return args [0] .__call__ .apply (args [1], args.slice (2));
        }
        else {
            return args [0] .apply (args [1], args.slice (2));
        }
    }function __kwargtrans__ (anObject) {
        anObject.__kwargtrans__ = null;
        anObject.constructor = Object;
        return anObject;
    }
    function __super__ (aClass, methodName) {
        for (let base of aClass.__bases__) {
            if (methodName in base) {
               return base [methodName];
            }
        }
        throw new Exception ('Superclass method not found');
    }
    function property (getter, setter) {
        if (!setter) {
            setter = function () {};
        }
        return {get: function () {return getter (this)}, set: function (value) {setter (this, value);}, enumerable: true};
    }
    function __setproperty__ (anObject, name, descriptor) {
        if (!anObject.hasOwnProperty (name)) {
            Object.defineProperty (anObject, name, descriptor);
        }
    }
    function __mergefields__ (targetClass, sourceClass) {
        let fieldNames = ['__reprfields__', '__comparefields__', '__initfields__'];
        if (sourceClass [fieldNames [0]]) {
            if (targetClass [fieldNames [0]]) {
                for (let fieldName of fieldNames) {
                    targetClass [fieldName] = new Set ([...targetClass [fieldName], ...sourceClass [fieldName]]);
                }
            }
            else {
                for (let fieldName of fieldNames) {
                    targetClass [fieldName] = new Set (sourceClass [fieldName]);
                }
            }
        }
    }
    function getattr (obj, name) {
        return name in obj ? obj [name] : obj ['py_' + name];
    }function hasattr (obj, name) {
        try {
            return name in obj || 'py_' + name in obj;
        }
        catch (exception) {
            return false;
        }
    }function __in__ (element, container) {
        if (container === undefined || container === null) {
            return false;
        }
        if (container.__contains__ instanceof Function) {
            return container.__contains__ (element);
        }
        else {
            return (
                container.indexOf ?
                container.indexOf (element) > -1 :
                container.hasOwnProperty (element)
            );
        }
    }function __specialattrib__ (attrib) {
        return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
    }function len (anObject) {
        if (anObject === undefined || anObject === null) {
            return 0;
        }
        if (anObject.__len__ instanceof Function) {
            return anObject.__len__ ();
        }
        if (anObject.length !== undefined) {
            return anObject.length;
        }
        var length = 0;
        for (var attr in anObject) {
            if (!__specialattrib__ (attr)) {
                length++;
            }
        }
        return length;
    }function __t__ (target) {
        return (
            target === undefined || target === null ? false :
            ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
            target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
            target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
            target instanceof Function ? target :
            len (target) !== 0 ? target :
            false
        );
    }
    function float (any) {
        if (any == 'inf') {
            return Infinity;
        }
        else if (any == '-inf') {
            return -Infinity;
        }
        else if (any == 'nan') {
            return NaN;
        }
        else if (isNaN (parseFloat (any))) {
            if (any === false) {
                return 0;
            }
            else if (any === true) {
                return 1;
            }
            else {
                throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
            }
        }
        else {
            return +any;
        }
    }float.__name__ = 'float';
    float.__bases__ = [object];
    function int (any) {
        return float (any) | 0
    }int.__name__ = 'int';
    int.__bases__ = [object];
    function bool (any) {
        return !!__t__ (any);
    }bool.__name__ = 'bool';
    bool.__bases__ = [int];
    function py_typeof (anObject) {
        var aType = typeof anObject;
        if (aType == 'object') {
            try {
                return '__class__' in anObject ? anObject.__class__ : object;
            }
            catch (exception) {
                return aType;
            }
        }
        else {
            return (
                aType == 'boolean' ? bool :
                aType == 'string' ? str :
                aType == 'number' ? (anObject % 1 == 0 ? int : float) :
                null
            );
        }
    }function issubclass (aClass, classinfo) {
        if (classinfo instanceof Array) {
            for (let aClass2 of classinfo) {
                if (issubclass (aClass, aClass2)) {
                    return true;
                }
            }
            return false;
        }
        try {
            var aClass2 = aClass;
            if (aClass2 == classinfo) {
                return true;
            }
            else {
                var bases = [].slice.call (aClass2.__bases__);
                while (bases.length) {
                    aClass2 = bases.shift ();
                    if (aClass2 == classinfo) {
                        return true;
                    }
                    if (aClass2.__bases__.length) {
                        bases = [].slice.call (aClass2.__bases__).concat (bases);
                    }
                }
                return false;
            }
        }
        catch (exception) {
            return aClass == classinfo || classinfo == object;
        }
    }function isinstance (anObject, classinfo) {
        try {
            return '__class__' in anObject ? issubclass (anObject.__class__, classinfo) : issubclass (py_typeof (anObject), classinfo);
        }
        catch (exception) {
            return issubclass (py_typeof (anObject), classinfo);
        }
    }function callable (anObject) {
        return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
    }function repr (anObject) {
        try {
            return anObject.__repr__ ();
        }
        catch (exception) {
            try {
                return anObject.__str__ ();
            }
            catch (exception) {
                try {
                    if (anObject == null) {
                        return 'None';
                    }
                    else if (anObject.constructor == Object) {
                        var result = '{';
                        var comma = false;
                        for (var attrib in anObject) {
                            if (!__specialattrib__ (attrib)) {
                                if (attrib.isnumeric ()) {
                                    var attribRepr = attrib;
                                }
                                else {
                                    var attribRepr = '\'' + attrib + '\'';
                                }
                                if (comma) {
                                    result += ', ';
                                }
                                else {
                                    comma = true;
                                }
                                result += attribRepr + ': ' + repr (anObject [attrib]);
                            }
                        }
                        result += '}';
                        return result;
                    }
                    else {
                        return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
                    }
                }
                catch (exception) {
                    return '<object of type: ' + typeof anObject + '>';
                }
            }
        }
    }function max (nrOrSeq) {
        return arguments.length == 1 ? Math.max (...nrOrSeq) : Math.max (...arguments);
    }function min (nrOrSeq) {
        return arguments.length == 1 ? Math.min (...nrOrSeq) : Math.min (...arguments);
    }var abs = Math.abs;
    function round (number, ndigits) {
        if (ndigits) {
            var scale = Math.pow (10, ndigits);
            number *= scale;
        }
        var rounded = Math.round (number);
        if (rounded - number == 0.5 && rounded % 2) {
            rounded -= 1;
        }
        if (ndigits) {
            rounded /= scale;
        }
        return rounded;
    }function __jsUsePyNext__ () {
        try {
            var result = this.__next__ ();
            return {value: result, done: false};
        }
        catch (exception) {
            return {value: undefined, done: true};
        }
    }
    function __pyUseJsNext__ () {
        var result = this.next ();
        if (result.done) {
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    function py_iter (iterable) {
        if (typeof iterable == 'string' || '__iter__' in iterable) {
            var result = iterable.__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('selector' in iterable) {
            var result = list (iterable) .__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('next' in iterable) {
            var result = iterable;
            if (! ('__next__' in result)) {
                result.__next__ = __pyUseJsNext__;
            }
        }
        else if (Symbol.iterator in iterable) {
            var result = iterable [Symbol.iterator] ();
            result.__next__ = __pyUseJsNext__;
        }
        else {
            throw IterableError (new Error ());
        }
        result [Symbol.iterator] = function () {return result;};
        return result;
    }
    function __PyIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __PyIterator__.prototype.__next__ = function() {
        if (this.index < this.iterable.length) {
            return this.iterable [this.index++];
        }
        else {
            throw StopIteration (new Error ());
        }
    };
    function __JsIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __JsIterator__.prototype.next = function () {
        if (this.index < this.iterable.py_keys.length) {
            return {value: this.index++, done: false};
        }
        else {
            return {value: undefined, done: true};
        }
    };
    function py_reversed (iterable) {
        iterable = iterable.slice ();
        iterable.reverse ();
        return iterable;
    }function zip () {
        var args = [] .slice.call (arguments);
        for (var i = 0; i < args.length; i++) {
            if (typeof args [i] == 'string') {
                args [i] = args [i] .split ('');
            }
            else if (!Array.isArray (args [i])) {
                args [i] = Array.from (args [i]);
            }
        }
        var shortest = args.length == 0 ? [] : args.reduce (
            function (array0, array1) {
                return array0.length < array1.length ? array0 : array1;
            }
        );
        return shortest.map (
            function (current, index) {
                return args.map (
                    function (current) {
                        return current [index];
                    }
                );
            }
        );
    }function range (start, stop, step) {
        if (stop == undefined) {
            stop = start;
            start = 0;
        }
        if (step == undefined) {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    }function any (iterable) {
        for (let item of iterable) {
            if (bool (item)) {
                return true;
            }
        }
        return false;
    }
    function all (iterable) {
        for (let item of iterable) {
            if (! bool (item)) {
                return false;
            }
        }
        return true;
    }
    function enumerate (iterable) {
        return zip (range (len (iterable)), iterable);
    }
    function copy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = anObject [attrib];
                }
            }
            return result;
        }
    }
    function list (iterable) {
        let instance = iterable ? Array.from (iterable) : [];
        return instance;
    }
    Array.prototype.__class__ = list;
    list.__name__ = 'list';
    list.__bases__ = [object];
    Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
    Array.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        else if (stop > this.length) {
            stop = this.length;
        }
        if (step == 1) {
            return Array.prototype.slice.call(this, start, stop);
        }
        let result = list ([]);
        for (let index = start; index < stop; index += step) {
            result.push (this [index]);
        }
        return result;
    };
    Array.prototype.__setslice__ = function (start, stop, step, source) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        if (step == null) {
            Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
        }
        else {
            let sourceIndex = 0;
            for (let targetIndex = start; targetIndex < stop; targetIndex += step) {
                this [targetIndex] = source [sourceIndex++];
            }
        }
    };
    Array.prototype.__repr__ = function () {
        if (this.__class__ == set && !this.length) {
            return 'set()';
        }
        let result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
        for (let index = 0; index < this.length; index++) {
            if (index) {
                result += ', ';
            }
            result += repr (this [index]);
        }
        if (this.__class__ == tuple && this.length == 1) {
            result += ',';
        }
        result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';    return result;
    };
    Array.prototype.__str__ = Array.prototype.__repr__;
    Array.prototype.append = function (element) {
        this.push (element);
    };
    Array.prototype.py_clear = function () {
        this.length = 0;
    };
    Array.prototype.extend = function (aList) {
        this.push.apply (this, aList);
    };
    Array.prototype.insert = function (index, element) {
        this.splice (index, 0, element);
    };
    Array.prototype.remove = function (element) {
        let index = this.indexOf (element);
        if (index == -1) {
            throw ValueError ("list.remove(x): x not in list", new Error ());
        }
        this.splice (index, 1);
    };
    Array.prototype.index = function (element) {
        return this.indexOf (element);
    };
    Array.prototype.py_pop = function (index) {
        if (index == undefined) {
            return this.pop ();
        }
        else {
            return this.splice (index, 1) [0];
        }
    };
    Array.prototype.py_sort = function () {
        __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
    };
    Array.prototype.__add__ = function (aList) {
        return list (this.concat (aList));
    };
    Array.prototype.__mul__ = function (scalar) {
        let result = this;
        for (let i = 1; i < scalar; i++) {
            result = result.concat (this);
        }
        return result;
    };
    Array.prototype.__rmul__ = Array.prototype.__mul__;
    function tuple (iterable) {
        let instance = iterable ? [] .slice.apply (iterable) : [];
        instance.__class__ = tuple;
        return instance;
    }
    tuple.__name__ = 'tuple';
    tuple.__bases__ = [object];
    function set (iterable) {
        let instance = [];
        if (iterable) {
            for (let index = 0; index < iterable.length; index++) {
                instance.add (iterable [index]);
            }
        }
        instance.__class__ = set;
        return instance;
    }
    set.__name__ = 'set';
    set.__bases__ = [object];
    Array.prototype.__bindexOf__ = function (element) {
        element += '';
        let mindex = 0;
        let maxdex = this.length - 1;
        while (mindex <= maxdex) {
            let index = (mindex + maxdex) / 2 | 0;
            let middle = this [index] + '';
            if (middle < element) {
                mindex = index + 1;
            }
            else if (middle > element) {
                maxdex = index - 1;
            }
            else {
                return index;
            }
        }
        return -1;
    };
    Array.prototype.add = function (element) {
        if (this.indexOf (element) == -1) {
            this.push (element);
        }
    };
    Array.prototype.discard = function (element) {
        var index = this.indexOf (element);
        if (index != -1) {
            this.splice (index, 1);
        }
    };
    Array.prototype.isdisjoint = function (other) {
        this.sort ();
        for (let i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issuperset = function (other) {
        this.sort ();
        for (let i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) == -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issubset = function (other) {
        return set (other.slice ()) .issuperset (this);
    };
    Array.prototype.union = function (other) {
        let result = set (this.slice () .sort ());
        for (let i = 0; i < other.length; i++) {
            if (result.__bindexOf__ (other [i]) == -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.intersection = function (other) {
        this.sort ();
        let result = set ();
        for (let i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.difference = function (other) {
        let sother = set (other.slice () .sort ());
        let result = set ();
        for (let i = 0; i < this.length; i++) {
            if (sother.__bindexOf__ (this [i]) == -1) {
                result.push (this [i]);
            }
        }
        return result;
    };
    Array.prototype.symmetric_difference = function (other) {
        return this.union (other) .difference (this.intersection (other));
    };
    Array.prototype.py_update = function () {
        let updated = [] .concat.apply (this.slice (), arguments) .sort ();
        this.py_clear ();
        for (let i = 0; i < updated.length; i++) {
            if (updated [i] != updated [i - 1]) {
                this.push (updated [i]);
            }
        }
    };
    Array.prototype.__eq__ = function (other) {
        if (this.length != other.length) {
            return false;
        }
        if (this.__class__ == set) {
            this.sort ();
            other.sort ();
        }
        for (let i = 0; i < this.length; i++) {
            if (this [i] != other [i]) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.__ne__ = function (other) {
        return !this.__eq__ (other);
    };
    Array.prototype.__le__ = function (other) {
        if (this.__class__ == set) {
            return this.issubset (other);
        }
        else {
            for (let i = 0; i < this.length; i++) {
                if (this [i] > other [i]) {
                    return false;
                }
                else if (this [i] < other [i]) {
                    return true;
                }
            }
            return true;
        }
    };
    Array.prototype.__ge__ = function (other) {
        if (this.__class__ == set) {
            return this.issuperset (other);
        }
        else {
            for (let i = 0; i < this.length; i++) {
                if (this [i] < other [i]) {
                    return false;
                }
                else if (this [i] > other [i]) {
                    return true;
                }
            }
            return true;
        }
    };
    Array.prototype.__lt__ = function (other) {
        return (
            this.__class__ == set ?
            this.issubset (other) && !this.issuperset (other) :
            !this.__ge__ (other)
        );
    };
    Array.prototype.__gt__ = function (other) {
        return (
            this.__class__ == set ?
            this.issuperset (other) && !this.issubset (other) :
            !this.__le__ (other)
        );
    };
    Uint8Array.prototype.__add__ = function (aBytes) {
        let result = new Uint8Array (this.length + aBytes.length);
        result.set (this);
        result.set (aBytes, this.length);
        return result;
    };
    Uint8Array.prototype.__mul__ = function (scalar) {
        let result = new Uint8Array (scalar * this.length);
        for (let i = 0; i < scalar; i++) {
            result.set (this, i * this.length);
        }
        return result;
    };
    Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
    function str (stringable) {
        if (typeof stringable === 'number')
            return stringable.toString();
        else {
            try {
                return stringable.__str__ ();
            }
            catch (exception) {
                try {
                    return repr (stringable);
                }
                catch (exception) {
                    return String (stringable);
                }
            }
        }
    }String.prototype.__class__ = str;
    str.__name__ = 'str';
    str.__bases__ = [object];
    String.prototype.__iter__ = function () {};
    String.prototype.__repr__ = function () {
        return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
    };
    String.prototype.__str__ = function () {
        return this;
    };
    String.prototype.capitalize = function () {
        return this.charAt (0).toUpperCase () + this.slice (1);
    };
    String.prototype.endswith = function (suffix) {
        if (suffix instanceof Array) {
            for (var i=0;i<suffix.length;i++) {
                if (this.slice (-suffix[i].length) == suffix[i])
                    return true;
            }
        } else
            return suffix == '' || this.slice (-suffix.length) == suffix;
        return false;
    };
    String.prototype.find = function (sub, start) {
        return this.indexOf (sub, start);
    };
    String.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        var result = '';
        if (step == 1) {
            result = this.substring (start, stop);
        }
        else {
            for (var index = start; index < stop; index += step) {
                result = result.concat (this.charAt(index));
            }
        }
        return result;
    };
    __setproperty__ (String.prototype, 'format', {
        get: function () {return __get__ (this, function (self) {
            var args = tuple ([] .slice.apply (arguments).slice (1));
            var autoIndex = 0;
            return self.replace (/\{(\w*)\}/g, function (match, key) {
                if (key == '') {
                    key = autoIndex++;
                }
                if (key == +key) {
                    return args [key] === undefined ? match : str (args [key]);
                }
                else {
                    for (var index = 0; index < args.length; index++) {
                        if (typeof args [index] == 'object' && args [index][key] !== undefined) {
                            return str (args [index][key]);
                        }
                    }
                    return match;
                }
            });
        });},
        enumerable: true
    });
    String.prototype.isalnum = function () {
        return /^[0-9a-zA-Z]{1,}$/.test(this)
    };
    String.prototype.isalpha = function () {
        return /^[a-zA-Z]{1,}$/.test(this)
    };
    String.prototype.isdecimal = function () {
        return /^[0-9]{1,}$/.test(this)
    };
    String.prototype.isdigit = function () {
        return this.isdecimal()
    };
    String.prototype.islower = function () {
        return /^[a-z]{1,}$/.test(this)
    };
    String.prototype.isupper = function () {
        return /^[A-Z]{1,}$/.test(this)
    };
    String.prototype.isspace = function () {
        return /^[\s]{1,}$/.test(this)
    };
    String.prototype.isnumeric = function () {
        return !isNaN (parseFloat (this)) && isFinite (this);
    };
    String.prototype.join = function (strings) {
        strings = Array.from (strings);
        return strings.join (this);
    };
    String.prototype.lower = function () {
        return this.toLowerCase ();
    };
    String.prototype.py_replace = function (old, aNew, maxreplace) {
        return this.split (old, maxreplace) .join (aNew);
    };
    String.prototype.lstrip = function () {
        return this.replace (/^\s*/g, '');
    };
    String.prototype.rfind = function (sub, start) {
        return this.lastIndexOf (sub, start);
    };
    String.prototype.rsplit = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                var maxrsplit = result.length - maxsplit;
                return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
            }
            else {
                return result;
            }
        }
    };
    String.prototype.rstrip = function () {
        return this.replace (/\s*$/g, '');
    };
    String.prototype.py_split = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
            }
            else {
                return result;
            }
        }
    };
    String.prototype.startswith = function (prefix) {
        if (prefix instanceof Array) {
            for (var i=0;i<prefix.length;i++) {
                if (this.indexOf (prefix [i]) == 0)
                    return true;
            }
        } else
            return this.indexOf (prefix) == 0;
        return false;
    };
    String.prototype.strip = function () {
        return this.trim ();
    };
    String.prototype.upper = function () {
        return this.toUpperCase ();
    };
    String.prototype.__mul__ = function (scalar) {
        var result = '';
        for (var i = 0; i < scalar; i++) {
            result = result + this;
        }
        return result;
    };
    String.prototype.__rmul__ = String.prototype.__mul__;
    function __contains__ (element) {
        return this.hasOwnProperty (element);
    }
    function __keys__ () {
        var keys = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                keys.push (attrib);
            }
        }
        return keys;
    }
    function __items__ () {
        var items = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                items.push ([attrib, this [attrib]]);
            }
        }
        return items;
    }
    function __del__ (key) {
        delete this [key];
    }
    function __clear__ () {
        for (var attrib in this) {
            delete this [attrib];
        }
    }
    function __getdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result == undefined) {
            result = this ['py_' + aKey];
        }
        return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
    }
    function __setdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            return result;
        }
        var val = aDefault == undefined ? null : aDefault;
        this [aKey] = val;
        return val;
    }
    function __pop__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            delete this [aKey];
            return result;
        } else {
            if ( aDefault === undefined ) {
                throw KeyError (aKey, new Error());
            }
        }
        return aDefault;
    }
    function __popitem__ () {
        var aKey = Object.keys (this) [0];
        if (aKey == null) {
            throw KeyError ("popitem(): dictionary is empty", new Error ());
        }
        var result = tuple ([aKey, this [aKey]]);
        delete this [aKey];
        return result;
    }
    function __update__ (aDict) {
        for (var aKey in aDict) {
            this [aKey] = aDict [aKey];
        }
    }
    function __values__ () {
        var values = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                values.push (this [attrib]);
            }
        }
        return values;
    }
    function __dgetitem__ (aKey) {
        return this [aKey];
    }
    function __dsetitem__ (aKey, aValue) {
        this [aKey] = aValue;
    }
    function dict (objectOrPairs) {
        var instance = {};
        if (!objectOrPairs || objectOrPairs instanceof Array) {
            if (objectOrPairs) {
                for (var index = 0; index < objectOrPairs.length; index++) {
                    var pair = objectOrPairs [index];
                    if ( !(pair instanceof Array) || pair.length != 2) {
                        throw ValueError(
                            "dict update sequence element #" + index +
                            " has length " + pair.length +
                            "; 2 is required", new Error());
                    }
                    var key = pair [0];
                    var val = pair [1];
                    if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                         if (!isinstance (objectOrPairs, dict)) {
                             val = dict (val);
                         }
                    }
                    instance [key] = val;
                }
            }
        }
        else {
            if (isinstance (objectOrPairs, dict)) {
                var aKeys = objectOrPairs.py_keys ();
                for (var index = 0; index < aKeys.length; index++ ) {
                    var key = aKeys [index];
                    instance [key] = objectOrPairs [key];
                }
            } else if (objectOrPairs instanceof Object) {
                instance = objectOrPairs;
            } else {
                throw ValueError ("Invalid type of object for dict creation", new Error ());
            }
        }
        __setproperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
        __setproperty__ (instance, '__contains__', {value: __contains__, enumerable: false});
        __setproperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
        __setproperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
        __setproperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
        __setproperty__ (instance, 'py_items', {value: __items__, enumerable: false});
        __setproperty__ (instance, 'py_del', {value: __del__, enumerable: false});
        __setproperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
        __setproperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
        __setproperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
        __setproperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
        __setproperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
        __setproperty__ (instance, 'py_update', {value: __update__, enumerable: false});
        __setproperty__ (instance, 'py_values', {value: __values__, enumerable: false});
        __setproperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
        __setproperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
        return instance;
    }
    dict.__name__ = 'dict';
    dict.__bases__ = [object];
    function __setdoc__ (docString) {
        this.__doc__ = docString;
        return this;
    }
    __setproperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
    function __mod__ (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    }function __neg__ (a) {
        if (typeof a == 'object' && '__neg__' in a) {
            return a.__neg__ ();
        }
        else {
            return -a;
        }
    }function __mul__ (a, b) {
        if (typeof a == 'object' && '__mul__' in a) {
            return a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return b.__rmul__ (a);
        }
        else {
            return a * b;
        }
    }function __floordiv__ (a, b) {
        if (typeof a == 'object' && '__floordiv__' in a) {
            return a.__floordiv__ (b);
        }
        else if (typeof b == 'object' && '__rfloordiv__' in b) {
            return b.__rfloordiv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return Math.floor (a / b);
        }
    }function __add__ (a, b) {
        if (typeof a == 'object' && '__add__' in a) {
            return a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return b.__radd__ (a);
        }
        else {
            return a + b;
        }
    }function __sub__ (a, b) {
        if (typeof a == 'object' && '__sub__' in a) {
            return a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return b.__rsub__ (a);
        }
        else {
            return a - b;
        }
    }function __eq__ (a, b) {
        if (typeof a == 'object' && '__eq__' in a) {
            return a.__eq__ (b);
        }
        else {
            return a == b;
        }
    }function __lt__ (a, b) {
        if (typeof a == 'object' && '__lt__' in a) {
            return a.__lt__ (b);
        }
        else {
            return a < b;
        }
    }function __le__ (a, b) {
        if (typeof a == 'object' && '__le__' in a) {
            return a.__le__ (b);
        }
        else {
            return a <= b;
        }
    }function __gt__ (a, b) {
        if (typeof a == 'object' && '__gt__' in a) {
            return a.__gt__ (b);
        }
        else {
            return a > b;
        }
    }function __iadd__ (a, b) {
        if (typeof a == 'object' && '__iadd__' in a) {
            return a.__iadd__ (b);
        }
        else if (typeof a == 'object' && '__add__' in a) {
            return a = a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return a = b.__radd__ (a);
        }
        else {
            return a += b;
        }
    }function __isub__ (a, b) {
        if (typeof a == 'object' && '__isub__' in a) {
            return a.__isub__ (b);
        }
        else if (typeof a == 'object' && '__sub__' in a) {
            return a = a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return a = b.__rsub__ (a);
        }
        else {
            return a -= b;
        }
    }function __getitem__ (container, key) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ (key);
        }
        else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
            return container [container.length + key];
        }
        else {
            return container [key];
        }
    }function __getslice__ (container, lower, upper, step) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ ([lower, upper, step]);
        }
        else {
            return container.__getslice__ (lower, upper, step);
        }
    }var BaseException =  __class__ ('BaseException', [object], {
    	__module__: __name__,
    });
    var Exception =  __class__ ('Exception', [BaseException], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		self.__args__ = args;
    		try {
    			self.stack = kwargs.error.stack;
    		}
    		catch (__except0__) {
    			self.stack = 'No stack trace available';
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		if (len (self.__args__) > 1) {
    			return '{}{}'.format (self.__class__.__name__, repr (tuple (self.__args__)));
    		}
    		else if (len (self.__args__)) {
    			return '{}({})'.format (self.__class__.__name__, repr (self.__args__ [0]));
    		}
    		else {
    			return '{}()'.format (self.__class__.__name__);
    		}
    	});},
    	get __str__ () {return __get__ (this, function (self) {
    		if (len (self.__args__) > 1) {
    			return str (tuple (self.__args__));
    		}
    		else if (len (self.__args__)) {
    			return str (self.__args__ [0]);
    		}
    		else {
    			return '';
    		}
    	});}
    });
    var IterableError =  __class__ ('IterableError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, error) {
    		Exception.__init__ (self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
    	});}
    });
    var StopIteration =  __class__ ('StopIteration', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, error) {
    		Exception.__init__ (self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
    	});}
    });
    var ValueError =  __class__ ('ValueError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
    	});}
    });
    var KeyError =  __class__ ('KeyError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
    	});}
    });
    var AssertionError =  __class__ ('AssertionError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		if (message) {
    			Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
    		}
    		else {
    			Exception.__init__ (self, __kwargtrans__ ({error: error}));
    		}
    	});}
    });
    var NotImplementedError =  __class__ ('NotImplementedError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
    	});}
    });
    var IndexError =  __class__ ('IndexError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
    	});}
    });
    var AttributeError =  __class__ ('AttributeError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
    	});}
    });
    var py_TypeError =  __class__ ('py_TypeError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
    	});}
    });
    var Warning =  __class__ ('Warning', [Exception], {
    	__module__: __name__,
    });
    var UserWarning =  __class__ ('UserWarning', [Warning], {
    	__module__: __name__,
    });
    var DeprecationWarning =  __class__ ('DeprecationWarning', [Warning], {
    	__module__: __name__,
    });
    var RuntimeWarning =  __class__ ('RuntimeWarning', [Warning], {
    	__module__: __name__,
    });
    var __sort__ = function (iterable, key, reverse) {
    	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {		var key = null;
    	}	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {		var reverse = false;
    	}	if (arguments.length) {
    		var __ilastarg0__ = arguments.length - 1;
    		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    			var __allkwargs0__ = arguments [__ilastarg0__--];
    			for (var __attrib0__ in __allkwargs0__) {
    				switch (__attrib0__) {
    					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
    					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
    					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
    				}
    			}
    		}
    	}
    	if (key) {
    		iterable.sort ((function __lambda__ (a, b) {
    			if (arguments.length) {
    				var __ilastarg0__ = arguments.length - 1;
    				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    					var __allkwargs0__ = arguments [__ilastarg0__--];
    					for (var __attrib0__ in __allkwargs0__) {
    						switch (__attrib0__) {
    							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
    							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
    						}
    					}
    				}
    			}
    			return (key (a) > key (b) ? 1 : -(1));
    		}));
    	}
    	else {
    		iterable.sort ();
    	}
    	if (reverse) {
    		iterable.reverse ();
    	}
    };
    var sorted = function (iterable, key, reverse) {
    	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {		var key = null;
    	}	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {		var reverse = false;
    	}	if (arguments.length) {
    		var __ilastarg0__ = arguments.length - 1;
    		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    			var __allkwargs0__ = arguments [__ilastarg0__--];
    			for (var __attrib0__ in __allkwargs0__) {
    				switch (__attrib0__) {
    					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
    					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
    					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
    				}
    			}
    		}
    	}
    	if (py_typeof (iterable) == dict) {
    		var result = copy (iterable.py_keys ());
    	}
    	else {
    		var result = copy (iterable);
    	}
    	__sort__ (result, key, reverse);
    	return result;
    };
    var map = function (func, iterable) {
    	return (function () {
    		var __accu0__ = [];
    		for (var item of iterable) {
    			__accu0__.append (func (item));
    		}
    		return __accu0__;
    	}) ();
    };
    var filter = function (func, iterable) {
    	if (func == null) {
    		var func = bool;
    	}
    	return (function () {
    		var __accu0__ = [];
    		for (var item of iterable) {
    			if (func (item)) {
    				__accu0__.append (item);
    			}
    		}
    		return __accu0__;
    	}) ();
    };
    var divmod = function (n, d) {
    	return tuple ([Math.floor (n / d), __mod__ (n, d)]);
    };
    var __Terminal__ =  __class__ ('__Terminal__', [object], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self) {
    		self.buffer = '';
    		try {
    			self.element = document.getElementById ('__terminal__');
    		}
    		catch (__except0__) {
    			self.element = null;
    		}
    		if (self.element) {
    			self.element.style.overflowX = 'auto';
    			self.element.style.boxSizing = 'border-box';
    			self.element.style.padding = '5px';
    			self.element.innerHTML = '_';
    		}
    	});},
    	get print () {return __get__ (this, function (self) {
    		var sep = ' ';
    		var end = '\n';
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
    						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		self.buffer = '{}{}{}'.format (self.buffer, sep.join ((function () {
    			var __accu0__ = [];
    			for (var arg of args) {
    				__accu0__.append (str (arg));
    			}
    			return __accu0__;
    		}) ()), end).__getslice__ (-(4096), null, 1);
    		if (self.element) {
    			self.element.innerHTML = self.buffer.py_replace ('\n', '<br>').py_replace (' ', '&nbsp');
    			self.element.scrollTop = self.element.scrollHeight;
    		}
    		else {
    			console.log (sep.join ((function () {
    				var __accu0__ = [];
    				for (var arg of args) {
    					__accu0__.append (str (arg));
    				}
    				return __accu0__;
    			}) ()));
    		}
    	});},
    	get input () {return __get__ (this, function (self, question) {
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'question': var question = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		self.print ('{}'.format (question), __kwargtrans__ ({end: ''}));
    		var answer = window.prompt ('\n'.join (self.buffer.py_split ('\n').__getslice__ (-(8), null, 1)));
    		self.print (answer);
    		return answer;
    	});}
    });
    var __terminal__ = __Terminal__ ();
    var print = __terminal__.print;
    var input = __terminal__.input;

    var bigInt=function(undefined$1){var BASE=1e7,LOG_BASE=7,MAX_INT=9007199254740992,MAX_INT_ARR=smallToArray(MAX_INT),DEFAULT_ALPHABET="0123456789abcdefghijklmnopqrstuvwxyz";var supportsNativeBigInt=typeof BigInt==="function";function Integer(v,radix,alphabet,caseSensitive){if(typeof v==="undefined")return Integer[0];if(typeof radix!=="undefined")return +radix===10&&!alphabet?parseValue(v):parseBase(v,radix,alphabet,caseSensitive);return parseValue(v)}function BigInteger(value,sign){this.value=value;this.sign=sign;this.isSmall=false;}BigInteger.prototype=Object.create(Integer.prototype);function SmallInteger(value){this.value=value;this.sign=value<0;this.isSmall=true;}SmallInteger.prototype=Object.create(Integer.prototype);function NativeBigInt(value){this.value=value;}NativeBigInt.prototype=Object.create(Integer.prototype);function isPrecise(n){return -MAX_INT<n&&n<MAX_INT}function smallToArray(n){if(n<1e7)return [n];if(n<1e14)return [n%1e7,Math.floor(n/1e7)];return [n%1e7,Math.floor(n/1e7)%1e7,Math.floor(n/1e14)]}function arrayToSmall(arr){trim(arr);var length=arr.length;if(length<4&&compareAbs(arr,MAX_INT_ARR)<0){switch(length){case 0:return 0;case 1:return arr[0];case 2:return arr[0]+arr[1]*BASE;default:return arr[0]+(arr[1]+arr[2]*BASE)*BASE}}return arr}function trim(v){var i=v.length;while(v[--i]===0);v.length=i+1;}function createArray(length){var x=new Array(length);var i=-1;while(++i<length){x[i]=0;}return x}function truncate(n){if(n>0)return Math.floor(n);return Math.ceil(n)}function add(a,b){var l_a=a.length,l_b=b.length,r=new Array(l_a),carry=0,base=BASE,sum,i;for(i=0;i<l_b;i++){sum=a[i]+b[i]+carry;carry=sum>=base?1:0;r[i]=sum-carry*base;}while(i<l_a){sum=a[i]+carry;carry=sum===base?1:0;r[i++]=sum-carry*base;}if(carry>0)r.push(carry);return r}function addAny(a,b){if(a.length>=b.length)return add(a,b);return add(b,a)}function addSmall(a,carry){var l=a.length,r=new Array(l),base=BASE,sum,i;for(i=0;i<l;i++){sum=a[i]-base+carry;carry=Math.floor(sum/base);r[i]=sum-carry*base;carry+=1;}while(carry>0){r[i++]=carry%base;carry=Math.floor(carry/base);}return r}BigInteger.prototype.add=function(v){var n=parseValue(v);if(this.sign!==n.sign){return this.subtract(n.negate())}var a=this.value,b=n.value;if(n.isSmall){return new BigInteger(addSmall(a,Math.abs(b)),this.sign)}return new BigInteger(addAny(a,b),this.sign)};BigInteger.prototype.plus=BigInteger.prototype.add;SmallInteger.prototype.add=function(v){var n=parseValue(v);var a=this.value;if(a<0!==n.sign){return this.subtract(n.negate())}var b=n.value;if(n.isSmall){if(isPrecise(a+b))return new SmallInteger(a+b);b=smallToArray(Math.abs(b));}return new BigInteger(addSmall(b,Math.abs(a)),a<0)};SmallInteger.prototype.plus=SmallInteger.prototype.add;NativeBigInt.prototype.add=function(v){return new NativeBigInt(this.value+parseValue(v).value)};NativeBigInt.prototype.plus=NativeBigInt.prototype.add;function subtract(a,b){var a_l=a.length,b_l=b.length,r=new Array(a_l),borrow=0,base=BASE,i,difference;for(i=0;i<b_l;i++){difference=a[i]-borrow-b[i];if(difference<0){difference+=base;borrow=1;}else borrow=0;r[i]=difference;}for(i=b_l;i<a_l;i++){difference=a[i]-borrow;if(difference<0)difference+=base;else {r[i++]=difference;break}r[i]=difference;}for(;i<a_l;i++){r[i]=a[i];}trim(r);return r}function subtractAny(a,b,sign){var value;if(compareAbs(a,b)>=0){value=subtract(a,b);}else {value=subtract(b,a);sign=!sign;}value=arrayToSmall(value);if(typeof value==="number"){if(sign)value=-value;return new SmallInteger(value)}return new BigInteger(value,sign)}function subtractSmall(a,b,sign){var l=a.length,r=new Array(l),carry=-b,base=BASE,i,difference;for(i=0;i<l;i++){difference=a[i]+carry;carry=Math.floor(difference/base);difference%=base;r[i]=difference<0?difference+base:difference;}r=arrayToSmall(r);if(typeof r==="number"){if(sign)r=-r;return new SmallInteger(r)}return new BigInteger(r,sign)}BigInteger.prototype.subtract=function(v){var n=parseValue(v);if(this.sign!==n.sign){return this.add(n.negate())}var a=this.value,b=n.value;if(n.isSmall)return subtractSmall(a,Math.abs(b),this.sign);return subtractAny(a,b,this.sign)};BigInteger.prototype.minus=BigInteger.prototype.subtract;SmallInteger.prototype.subtract=function(v){var n=parseValue(v);var a=this.value;if(a<0!==n.sign){return this.add(n.negate())}var b=n.value;if(n.isSmall){return new SmallInteger(a-b)}return subtractSmall(b,Math.abs(a),a>=0)};SmallInteger.prototype.minus=SmallInteger.prototype.subtract;NativeBigInt.prototype.subtract=function(v){return new NativeBigInt(this.value-parseValue(v).value)};NativeBigInt.prototype.minus=NativeBigInt.prototype.subtract;BigInteger.prototype.negate=function(){return new BigInteger(this.value,!this.sign)};SmallInteger.prototype.negate=function(){var sign=this.sign;var small=new SmallInteger(-this.value);small.sign=!sign;return small};NativeBigInt.prototype.negate=function(){return new NativeBigInt(-this.value)};BigInteger.prototype.abs=function(){return new BigInteger(this.value,false)};SmallInteger.prototype.abs=function(){return new SmallInteger(Math.abs(this.value))};NativeBigInt.prototype.abs=function(){return new NativeBigInt(this.value>=0?this.value:-this.value)};function multiplyLong(a,b){var a_l=a.length,b_l=b.length,l=a_l+b_l,r=createArray(l),base=BASE,product,carry,i,a_i,b_j;for(i=0;i<a_l;++i){a_i=a[i];for(var j=0;j<b_l;++j){b_j=b[j];product=a_i*b_j+r[i+j];carry=Math.floor(product/base);r[i+j]=product-carry*base;r[i+j+1]+=carry;}}trim(r);return r}function multiplySmall(a,b){var l=a.length,r=new Array(l),base=BASE,carry=0,product,i;for(i=0;i<l;i++){product=a[i]*b+carry;carry=Math.floor(product/base);r[i]=product-carry*base;}while(carry>0){r[i++]=carry%base;carry=Math.floor(carry/base);}return r}function shiftLeft(x,n){var r=[];while(n-- >0)r.push(0);return r.concat(x)}function multiplyKaratsuba(x,y){var n=Math.max(x.length,y.length);if(n<=30)return multiplyLong(x,y);n=Math.ceil(n/2);var b=x.slice(n),a=x.slice(0,n),d=y.slice(n),c=y.slice(0,n);var ac=multiplyKaratsuba(a,c),bd=multiplyKaratsuba(b,d),abcd=multiplyKaratsuba(addAny(a,b),addAny(c,d));var product=addAny(addAny(ac,shiftLeft(subtract(subtract(abcd,ac),bd),n)),shiftLeft(bd,2*n));trim(product);return product}function useKaratsuba(l1,l2){return -.012*l1-.012*l2+15e-6*l1*l2>0}BigInteger.prototype.multiply=function(v){var n=parseValue(v),a=this.value,b=n.value,sign=this.sign!==n.sign,abs;if(n.isSmall){if(b===0)return Integer[0];if(b===1)return this;if(b===-1)return this.negate();abs=Math.abs(b);if(abs<BASE){return new BigInteger(multiplySmall(a,abs),sign)}b=smallToArray(abs);}if(useKaratsuba(a.length,b.length))return new BigInteger(multiplyKaratsuba(a,b),sign);return new BigInteger(multiplyLong(a,b),sign)};BigInteger.prototype.times=BigInteger.prototype.multiply;function multiplySmallAndArray(a,b,sign){if(a<BASE){return new BigInteger(multiplySmall(b,a),sign)}return new BigInteger(multiplyLong(b,smallToArray(a)),sign)}SmallInteger.prototype._multiplyBySmall=function(a){if(isPrecise(a.value*this.value)){return new SmallInteger(a.value*this.value)}return multiplySmallAndArray(Math.abs(a.value),smallToArray(Math.abs(this.value)),this.sign!==a.sign)};BigInteger.prototype._multiplyBySmall=function(a){if(a.value===0)return Integer[0];if(a.value===1)return this;if(a.value===-1)return this.negate();return multiplySmallAndArray(Math.abs(a.value),this.value,this.sign!==a.sign)};SmallInteger.prototype.multiply=function(v){return parseValue(v)._multiplyBySmall(this)};SmallInteger.prototype.times=SmallInteger.prototype.multiply;NativeBigInt.prototype.multiply=function(v){return new NativeBigInt(this.value*parseValue(v).value)};NativeBigInt.prototype.times=NativeBigInt.prototype.multiply;function square(a){var l=a.length,r=createArray(l+l),base=BASE,product,carry,i,a_i,a_j;for(i=0;i<l;i++){a_i=a[i];carry=0-a_i*a_i;for(var j=i;j<l;j++){a_j=a[j];product=2*(a_i*a_j)+r[i+j]+carry;carry=Math.floor(product/base);r[i+j]=product-carry*base;}r[i+l]=carry;}trim(r);return r}BigInteger.prototype.square=function(){return new BigInteger(square(this.value),false)};SmallInteger.prototype.square=function(){var value=this.value*this.value;if(isPrecise(value))return new SmallInteger(value);return new BigInteger(square(smallToArray(Math.abs(this.value))),false)};NativeBigInt.prototype.square=function(v){return new NativeBigInt(this.value*this.value)};function divMod1(a,b){var a_l=a.length,b_l=b.length,base=BASE,result=createArray(b.length),divisorMostSignificantDigit=b[b_l-1],lambda=Math.ceil(base/(2*divisorMostSignificantDigit)),remainder=multiplySmall(a,lambda),divisor=multiplySmall(b,lambda),quotientDigit,shift,carry,borrow,i,l,q;if(remainder.length<=a_l)remainder.push(0);divisor.push(0);divisorMostSignificantDigit=divisor[b_l-1];for(shift=a_l-b_l;shift>=0;shift--){quotientDigit=base-1;if(remainder[shift+b_l]!==divisorMostSignificantDigit){quotientDigit=Math.floor((remainder[shift+b_l]*base+remainder[shift+b_l-1])/divisorMostSignificantDigit);}carry=0;borrow=0;l=divisor.length;for(i=0;i<l;i++){carry+=quotientDigit*divisor[i];q=Math.floor(carry/base);borrow+=remainder[shift+i]-(carry-q*base);carry=q;if(borrow<0){remainder[shift+i]=borrow+base;borrow=-1;}else {remainder[shift+i]=borrow;borrow=0;}}while(borrow!==0){quotientDigit-=1;carry=0;for(i=0;i<l;i++){carry+=remainder[shift+i]-base+divisor[i];if(carry<0){remainder[shift+i]=carry+base;carry=0;}else {remainder[shift+i]=carry;carry=1;}}borrow+=carry;}result[shift]=quotientDigit;}remainder=divModSmall(remainder,lambda)[0];return [arrayToSmall(result),arrayToSmall(remainder)]}function divMod2(a,b){var a_l=a.length,b_l=b.length,result=[],part=[],base=BASE,guess,xlen,highx,highy,check;while(a_l){part.unshift(a[--a_l]);trim(part);if(compareAbs(part,b)<0){result.push(0);continue}xlen=part.length;highx=part[xlen-1]*base+part[xlen-2];highy=b[b_l-1]*base+b[b_l-2];if(xlen>b_l){highx=(highx+1)*base;}guess=Math.ceil(highx/highy);do{check=multiplySmall(b,guess);if(compareAbs(check,part)<=0)break;guess--;}while(guess);result.push(guess);part=subtract(part,check);}result.reverse();return [arrayToSmall(result),arrayToSmall(part)]}function divModSmall(value,lambda){var length=value.length,quotient=createArray(length),base=BASE,i,q,remainder,divisor;remainder=0;for(i=length-1;i>=0;--i){divisor=remainder*base+value[i];q=truncate(divisor/lambda);remainder=divisor-q*lambda;quotient[i]=q|0;}return [quotient,remainder|0]}function divModAny(self,v){var value,n=parseValue(v);if(supportsNativeBigInt){return [new NativeBigInt(self.value/n.value),new NativeBigInt(self.value%n.value)]}var a=self.value,b=n.value;var quotient;if(b===0)throw new Error("Cannot divide by zero");if(self.isSmall){if(n.isSmall){return [new SmallInteger(truncate(a/b)),new SmallInteger(a%b)]}return [Integer[0],self]}if(n.isSmall){if(b===1)return [self,Integer[0]];if(b==-1)return [self.negate(),Integer[0]];var abs=Math.abs(b);if(abs<BASE){value=divModSmall(a,abs);quotient=arrayToSmall(value[0]);var remainder=value[1];if(self.sign)remainder=-remainder;if(typeof quotient==="number"){if(self.sign!==n.sign)quotient=-quotient;return [new SmallInteger(quotient),new SmallInteger(remainder)]}return [new BigInteger(quotient,self.sign!==n.sign),new SmallInteger(remainder)]}b=smallToArray(abs);}var comparison=compareAbs(a,b);if(comparison===-1)return [Integer[0],self];if(comparison===0)return [Integer[self.sign===n.sign?1:-1],Integer[0]];if(a.length+b.length<=200)value=divMod1(a,b);else value=divMod2(a,b);quotient=value[0];var qSign=self.sign!==n.sign,mod=value[1],mSign=self.sign;if(typeof quotient==="number"){if(qSign)quotient=-quotient;quotient=new SmallInteger(quotient);}else quotient=new BigInteger(quotient,qSign);if(typeof mod==="number"){if(mSign)mod=-mod;mod=new SmallInteger(mod);}else mod=new BigInteger(mod,mSign);return [quotient,mod]}BigInteger.prototype.divmod=function(v){var result=divModAny(this,v);return {quotient:result[0],remainder:result[1]}};NativeBigInt.prototype.divmod=SmallInteger.prototype.divmod=BigInteger.prototype.divmod;BigInteger.prototype.divide=function(v){return divModAny(this,v)[0]};NativeBigInt.prototype.over=NativeBigInt.prototype.divide=SmallInteger.prototype.over=SmallInteger.prototype.divide=BigInteger.prototype.over=BigInteger.prototype.divide;BigInteger.prototype.mod=function(v){return divModAny(this,v)[1]};NativeBigInt.prototype.mod=NativeBigInt.prototype.remainder=SmallInteger.prototype.remainder=SmallInteger.prototype.mod=BigInteger.prototype.remainder=BigInteger.prototype.mod;BigInteger.prototype.pow=function(v){var n=parseValue(v),a=this.value,b=n.value,value,x,y;if(b===0)return Integer[1];if(a===0)return Integer[0];if(a===1)return Integer[1];if(a===-1)return n.isEven()?Integer[1]:Integer[-1];if(n.sign){return Integer[0]}if(!n.isSmall)throw new Error("The exponent "+n.toString()+" is too large.");if(this.isSmall){if(isPrecise(value=Math.pow(a,b)))return new SmallInteger(truncate(value))}x=this;y=Integer[1];while(true){if(b&1===1){y=y.times(x);--b;}if(b===0)break;b/=2;x=x.square();}return y};SmallInteger.prototype.pow=BigInteger.prototype.pow;var pow;if(supportsNativeBigInt){pow=eval("(a,b)=>a**b");}NativeBigInt.prototype.pow=function(v){var n=parseValue(v);var a=this.value,b=n.value;if(b===BigInt(0))return Integer[1];if(a===BigInt(0))return Integer[0];if(a===BigInt(1))return Integer[1];if(a===BigInt(-1))return n.isEven()?Integer[1]:Integer[-1];if(n.isNegative())return new NativeBigInt(BigInt(0));return new NativeBigInt(pow(a,b))};BigInteger.prototype.modPow=function(exp,mod){exp=parseValue(exp);mod=parseValue(mod);if(mod.isZero())throw new Error("Cannot take modPow with modulus 0");var r=Integer[1],base=this.mod(mod);while(exp.isPositive()){if(base.isZero())return Integer[0];if(exp.isOdd())r=r.multiply(base).mod(mod);exp=exp.divide(2);base=base.square().mod(mod);}return r};NativeBigInt.prototype.modPow=SmallInteger.prototype.modPow=BigInteger.prototype.modPow;function compareAbs(a,b){if(a.length!==b.length){return a.length>b.length?1:-1}for(var i=a.length-1;i>=0;i--){if(a[i]!==b[i])return a[i]>b[i]?1:-1}return 0}BigInteger.prototype.compareAbs=function(v){var n=parseValue(v),a=this.value,b=n.value;if(n.isSmall)return 1;return compareAbs(a,b)};SmallInteger.prototype.compareAbs=function(v){var n=parseValue(v),a=Math.abs(this.value),b=n.value;if(n.isSmall){b=Math.abs(b);return a===b?0:a>b?1:-1}return -1};NativeBigInt.prototype.compareAbs=function(v){var a=this.value;var b=parseValue(v).value;a=a>=0?a:-a;b=b>=0?b:-b;return a===b?0:a>b?1:-1};BigInteger.prototype.compare=function(v){if(v===Infinity){return -1}if(v===-Infinity){return 1}var n=parseValue(v),a=this.value,b=n.value;if(this.sign!==n.sign){return n.sign?1:-1}if(n.isSmall){return this.sign?-1:1}return compareAbs(a,b)*(this.sign?-1:1)};BigInteger.prototype.compareTo=BigInteger.prototype.compare;SmallInteger.prototype.compare=function(v){if(v===Infinity){return -1}if(v===-Infinity){return 1}var n=parseValue(v),a=this.value,b=n.value;if(n.isSmall){return a==b?0:a>b?1:-1}if(a<0!==n.sign){return a<0?-1:1}return a<0?1:-1};SmallInteger.prototype.compareTo=SmallInteger.prototype.compare;NativeBigInt.prototype.compare=function(v){if(v===Infinity){return -1}if(v===-Infinity){return 1}var a=this.value;var b=parseValue(v).value;return a===b?0:a>b?1:-1};NativeBigInt.prototype.compareTo=NativeBigInt.prototype.compare;BigInteger.prototype.equals=function(v){return this.compare(v)===0};NativeBigInt.prototype.eq=NativeBigInt.prototype.equals=SmallInteger.prototype.eq=SmallInteger.prototype.equals=BigInteger.prototype.eq=BigInteger.prototype.equals;BigInteger.prototype.notEquals=function(v){return this.compare(v)!==0};NativeBigInt.prototype.neq=NativeBigInt.prototype.notEquals=SmallInteger.prototype.neq=SmallInteger.prototype.notEquals=BigInteger.prototype.neq=BigInteger.prototype.notEquals;BigInteger.prototype.greater=function(v){return this.compare(v)>0};NativeBigInt.prototype.gt=NativeBigInt.prototype.greater=SmallInteger.prototype.gt=SmallInteger.prototype.greater=BigInteger.prototype.gt=BigInteger.prototype.greater;BigInteger.prototype.lesser=function(v){return this.compare(v)<0};NativeBigInt.prototype.lt=NativeBigInt.prototype.lesser=SmallInteger.prototype.lt=SmallInteger.prototype.lesser=BigInteger.prototype.lt=BigInteger.prototype.lesser;BigInteger.prototype.greaterOrEquals=function(v){return this.compare(v)>=0};NativeBigInt.prototype.geq=NativeBigInt.prototype.greaterOrEquals=SmallInteger.prototype.geq=SmallInteger.prototype.greaterOrEquals=BigInteger.prototype.geq=BigInteger.prototype.greaterOrEquals;BigInteger.prototype.lesserOrEquals=function(v){return this.compare(v)<=0};NativeBigInt.prototype.leq=NativeBigInt.prototype.lesserOrEquals=SmallInteger.prototype.leq=SmallInteger.prototype.lesserOrEquals=BigInteger.prototype.leq=BigInteger.prototype.lesserOrEquals;BigInteger.prototype.isEven=function(){return (this.value[0]&1)===0};SmallInteger.prototype.isEven=function(){return (this.value&1)===0};NativeBigInt.prototype.isEven=function(){return (this.value&BigInt(1))===BigInt(0)};BigInteger.prototype.isOdd=function(){return (this.value[0]&1)===1};SmallInteger.prototype.isOdd=function(){return (this.value&1)===1};NativeBigInt.prototype.isOdd=function(){return (this.value&BigInt(1))===BigInt(1)};BigInteger.prototype.isPositive=function(){return !this.sign};SmallInteger.prototype.isPositive=function(){return this.value>0};NativeBigInt.prototype.isPositive=SmallInteger.prototype.isPositive;BigInteger.prototype.isNegative=function(){return this.sign};SmallInteger.prototype.isNegative=function(){return this.value<0};NativeBigInt.prototype.isNegative=SmallInteger.prototype.isNegative;BigInteger.prototype.isUnit=function(){return false};SmallInteger.prototype.isUnit=function(){return Math.abs(this.value)===1};NativeBigInt.prototype.isUnit=function(){return this.abs().value===BigInt(1)};BigInteger.prototype.isZero=function(){return false};SmallInteger.prototype.isZero=function(){return this.value===0};NativeBigInt.prototype.isZero=function(){return this.value===BigInt(0)};BigInteger.prototype.isDivisibleBy=function(v){var n=parseValue(v);if(n.isZero())return false;if(n.isUnit())return true;if(n.compareAbs(2)===0)return this.isEven();return this.mod(n).isZero()};NativeBigInt.prototype.isDivisibleBy=SmallInteger.prototype.isDivisibleBy=BigInteger.prototype.isDivisibleBy;function isBasicPrime(v){var n=v.abs();if(n.isUnit())return false;if(n.equals(2)||n.equals(3)||n.equals(5))return true;if(n.isEven()||n.isDivisibleBy(3)||n.isDivisibleBy(5))return false;if(n.lesser(49))return true}function millerRabinTest(n,a){var nPrev=n.prev(),b=nPrev,r=0,d,i,x;while(b.isEven())b=b.divide(2),r++;next:for(i=0;i<a.length;i++){if(n.lesser(a[i]))continue;x=bigInt(a[i]).modPow(b,n);if(x.isUnit()||x.equals(nPrev))continue;for(d=r-1;d!=0;d--){x=x.square().mod(n);if(x.isUnit())return false;if(x.equals(nPrev))continue next}return false}return true}BigInteger.prototype.isPrime=function(strict){var isPrime=isBasicPrime(this);if(isPrime!==undefined$1)return isPrime;var n=this.abs();var bits=n.bitLength();if(bits<=64)return millerRabinTest(n,[2,325,9375,28178,450775,9780504,1795265022]);var logN=Math.log(2)*bits.toJSNumber();var t=Math.ceil(strict===true?2*Math.pow(logN,2):logN);for(var a=[],i=0;i<t;i++){a.push(bigInt(i+2));}return millerRabinTest(n,a)};NativeBigInt.prototype.isPrime=SmallInteger.prototype.isPrime=BigInteger.prototype.isPrime;BigInteger.prototype.isProbablePrime=function(iterations){var isPrime=isBasicPrime(this);if(isPrime!==undefined$1)return isPrime;var n=this.abs();var t=iterations===undefined$1?5:iterations;for(var a=[],i=0;i<t;i++){a.push(bigInt.randBetween(2,n.minus(2)));}return millerRabinTest(n,a)};NativeBigInt.prototype.isProbablePrime=SmallInteger.prototype.isProbablePrime=BigInteger.prototype.isProbablePrime;BigInteger.prototype.modInv=function(n){var t=bigInt.zero,newT=bigInt.one,r=parseValue(n),newR=this.abs(),q,lastT,lastR;while(!newR.isZero()){q=r.divide(newR);lastT=t;lastR=r;t=newT;r=newR;newT=lastT.subtract(q.multiply(newT));newR=lastR.subtract(q.multiply(newR));}if(!r.isUnit())throw new Error(this.toString()+" and "+n.toString()+" are not co-prime");if(t.compare(0)===-1){t=t.add(n);}if(this.isNegative()){return t.negate()}return t};NativeBigInt.prototype.modInv=SmallInteger.prototype.modInv=BigInteger.prototype.modInv;BigInteger.prototype.next=function(){var value=this.value;if(this.sign){return subtractSmall(value,1,this.sign)}return new BigInteger(addSmall(value,1),this.sign)};SmallInteger.prototype.next=function(){var value=this.value;if(value+1<MAX_INT)return new SmallInteger(value+1);return new BigInteger(MAX_INT_ARR,false)};NativeBigInt.prototype.next=function(){return new NativeBigInt(this.value+BigInt(1))};BigInteger.prototype.prev=function(){var value=this.value;if(this.sign){return new BigInteger(addSmall(value,1),true)}return subtractSmall(value,1,this.sign)};SmallInteger.prototype.prev=function(){var value=this.value;if(value-1>-MAX_INT)return new SmallInteger(value-1);return new BigInteger(MAX_INT_ARR,true)};NativeBigInt.prototype.prev=function(){return new NativeBigInt(this.value-BigInt(1))};var powersOfTwo=[1];while(2*powersOfTwo[powersOfTwo.length-1]<=BASE)powersOfTwo.push(2*powersOfTwo[powersOfTwo.length-1]);var powers2Length=powersOfTwo.length,highestPower2=powersOfTwo[powers2Length-1];function shift_isSmall(n){return Math.abs(n)<=BASE}BigInteger.prototype.shiftLeft=function(v){var n=parseValue(v).toJSNumber();if(!shift_isSmall(n)){throw new Error(String(n)+" is too large for shifting.")}if(n<0)return this.shiftRight(-n);var result=this;if(result.isZero())return result;while(n>=powers2Length){result=result.multiply(highestPower2);n-=powers2Length-1;}return result.multiply(powersOfTwo[n])};NativeBigInt.prototype.shiftLeft=SmallInteger.prototype.shiftLeft=BigInteger.prototype.shiftLeft;BigInteger.prototype.shiftRight=function(v){var remQuo;var n=parseValue(v).toJSNumber();if(!shift_isSmall(n)){throw new Error(String(n)+" is too large for shifting.")}if(n<0)return this.shiftLeft(-n);var result=this;while(n>=powers2Length){if(result.isZero()||result.isNegative()&&result.isUnit())return result;remQuo=divModAny(result,highestPower2);result=remQuo[1].isNegative()?remQuo[0].prev():remQuo[0];n-=powers2Length-1;}remQuo=divModAny(result,powersOfTwo[n]);return remQuo[1].isNegative()?remQuo[0].prev():remQuo[0]};NativeBigInt.prototype.shiftRight=SmallInteger.prototype.shiftRight=BigInteger.prototype.shiftRight;function bitwise(x,y,fn){y=parseValue(y);var xSign=x.isNegative(),ySign=y.isNegative();var xRem=xSign?x.not():x,yRem=ySign?y.not():y;var xDigit=0,yDigit=0;var xDivMod=null,yDivMod=null;var result=[];while(!xRem.isZero()||!yRem.isZero()){xDivMod=divModAny(xRem,highestPower2);xDigit=xDivMod[1].toJSNumber();if(xSign){xDigit=highestPower2-1-xDigit;}yDivMod=divModAny(yRem,highestPower2);yDigit=yDivMod[1].toJSNumber();if(ySign){yDigit=highestPower2-1-yDigit;}xRem=xDivMod[0];yRem=yDivMod[0];result.push(fn(xDigit,yDigit));}var sum=fn(xSign?1:0,ySign?1:0)!==0?bigInt(-1):bigInt(0);for(var i=result.length-1;i>=0;i-=1){sum=sum.multiply(highestPower2).add(bigInt(result[i]));}return sum}BigInteger.prototype.not=function(){return this.negate().prev()};NativeBigInt.prototype.not=SmallInteger.prototype.not=BigInteger.prototype.not;BigInteger.prototype.and=function(n){return bitwise(this,n,function(a,b){return a&b})};NativeBigInt.prototype.and=SmallInteger.prototype.and=BigInteger.prototype.and;BigInteger.prototype.or=function(n){return bitwise(this,n,function(a,b){return a|b})};NativeBigInt.prototype.or=SmallInteger.prototype.or=BigInteger.prototype.or;BigInteger.prototype.xor=function(n){return bitwise(this,n,function(a,b){return a^b})};NativeBigInt.prototype.xor=SmallInteger.prototype.xor=BigInteger.prototype.xor;var LOBMASK_I=1<<30,LOBMASK_BI=(BASE&-BASE)*(BASE&-BASE)|LOBMASK_I;function roughLOB(n){var v=n.value,x=typeof v==="number"?v|LOBMASK_I:typeof v==="bigint"?v|BigInt(LOBMASK_I):v[0]+v[1]*BASE|LOBMASK_BI;return x&-x}function integerLogarithm(value,base){if(base.compareTo(value)<=0){var tmp=integerLogarithm(value,base.square(base));var p=tmp.p;var e=tmp.e;var t=p.multiply(base);return t.compareTo(value)<=0?{p:t,e:e*2+1}:{p:p,e:e*2}}return {p:bigInt(1),e:0}}BigInteger.prototype.bitLength=function(){var n=this;if(n.compareTo(bigInt(0))<0){n=n.negate().subtract(bigInt(1));}if(n.compareTo(bigInt(0))===0){return bigInt(0)}return bigInt(integerLogarithm(n,bigInt(2)).e).add(bigInt(1))};NativeBigInt.prototype.bitLength=SmallInteger.prototype.bitLength=BigInteger.prototype.bitLength;function max(a,b){a=parseValue(a);b=parseValue(b);return a.greater(b)?a:b}function min(a,b){a=parseValue(a);b=parseValue(b);return a.lesser(b)?a:b}function gcd(a,b){a=parseValue(a).abs();b=parseValue(b).abs();if(a.equals(b))return a;if(a.isZero())return b;if(b.isZero())return a;var c=Integer[1],d,t;while(a.isEven()&&b.isEven()){d=min(roughLOB(a),roughLOB(b));a=a.divide(d);b=b.divide(d);c=c.multiply(d);}while(a.isEven()){a=a.divide(roughLOB(a));}do{while(b.isEven()){b=b.divide(roughLOB(b));}if(a.greater(b)){t=b;b=a;a=t;}b=b.subtract(a);}while(!b.isZero());return c.isUnit()?a:a.multiply(c)}function lcm(a,b){a=parseValue(a).abs();b=parseValue(b).abs();return a.divide(gcd(a,b)).multiply(b)}function randBetween(a,b){a=parseValue(a);b=parseValue(b);var low=min(a,b),high=max(a,b);var range=high.subtract(low).add(1);if(range.isSmall)return low.add(Math.floor(Math.random()*range));var digits=toBase(range,BASE).value;var result=[],restricted=true;for(var i=0;i<digits.length;i++){var top=restricted?digits[i]:BASE;var digit=truncate(Math.random()*top);result.push(digit);if(digit<top)restricted=false;}return low.add(Integer.fromArray(result,BASE,false))}var parseBase=function(text,base,alphabet,caseSensitive){alphabet=alphabet||DEFAULT_ALPHABET;text=String(text);if(!caseSensitive){text=text.toLowerCase();alphabet=alphabet.toLowerCase();}var length=text.length;var i;var absBase=Math.abs(base);var alphabetValues={};for(i=0;i<alphabet.length;i++){alphabetValues[alphabet[i]]=i;}for(i=0;i<length;i++){var c=text[i];if(c==="-")continue;if(c in alphabetValues){if(alphabetValues[c]>=absBase){if(c==="1"&&absBase===1)continue;throw new Error(c+" is not a valid digit in base "+base+".")}}}base=parseValue(base);var digits=[];var isNegative=text[0]==="-";for(i=isNegative?1:0;i<text.length;i++){var c=text[i];if(c in alphabetValues)digits.push(parseValue(alphabetValues[c]));else if(c==="<"){var start=i;do{i++;}while(text[i]!==">"&&i<text.length);digits.push(parseValue(text.slice(start+1,i)));}else throw new Error(c+" is not a valid character")}return parseBaseFromArray(digits,base,isNegative)};function parseBaseFromArray(digits,base,isNegative){var val=Integer[0],pow=Integer[1],i;for(i=digits.length-1;i>=0;i--){val=val.add(digits[i].times(pow));pow=pow.times(base);}return isNegative?val.negate():val}function stringify(digit,alphabet){alphabet=alphabet||DEFAULT_ALPHABET;if(digit<alphabet.length){return alphabet[digit]}return "<"+digit+">"}function toBase(n,base){base=bigInt(base);if(base.isZero()){if(n.isZero())return {value:[0],isNegative:false};throw new Error("Cannot convert nonzero numbers to base 0.")}if(base.equals(-1)){if(n.isZero())return {value:[0],isNegative:false};if(n.isNegative())return {value:[].concat.apply([],Array.apply(null,Array(-n.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:false};var arr=Array.apply(null,Array(n.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);arr.unshift([1]);return {value:[].concat.apply([],arr),isNegative:false}}var neg=false;if(n.isNegative()&&base.isPositive()){neg=true;n=n.abs();}if(base.isUnit()){if(n.isZero())return {value:[0],isNegative:false};return {value:Array.apply(null,Array(n.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:neg}}var out=[];var left=n,divmod;while(left.isNegative()||left.compareAbs(base)>=0){divmod=left.divmod(base);left=divmod.quotient;var digit=divmod.remainder;if(digit.isNegative()){digit=base.minus(digit).abs();left=left.next();}out.push(digit.toJSNumber());}out.push(left.toJSNumber());return {value:out.reverse(),isNegative:neg}}function toBaseString(n,base,alphabet){var arr=toBase(n,base);return (arr.isNegative?"-":"")+arr.value.map(function(x){return stringify(x,alphabet)}).join("")}BigInteger.prototype.toArray=function(radix){return toBase(this,radix)};SmallInteger.prototype.toArray=function(radix){return toBase(this,radix)};NativeBigInt.prototype.toArray=function(radix){return toBase(this,radix)};BigInteger.prototype.toString=function(radix,alphabet){if(radix===undefined$1)radix=10;if(radix!==10)return toBaseString(this,radix,alphabet);var v=this.value,l=v.length,str=String(v[--l]),zeros="0000000",digit;while(--l>=0){digit=String(v[l]);str+=zeros.slice(digit.length)+digit;}var sign=this.sign?"-":"";return sign+str};SmallInteger.prototype.toString=function(radix,alphabet){if(radix===undefined$1)radix=10;if(radix!=10)return toBaseString(this,radix,alphabet);return String(this.value)};NativeBigInt.prototype.toString=SmallInteger.prototype.toString;NativeBigInt.prototype.toJSON=BigInteger.prototype.toJSON=SmallInteger.prototype.toJSON=function(){return this.toString()};BigInteger.prototype.valueOf=function(){return parseInt(this.toString(),10)};BigInteger.prototype.toJSNumber=BigInteger.prototype.valueOf;SmallInteger.prototype.valueOf=function(){return this.value};SmallInteger.prototype.toJSNumber=SmallInteger.prototype.valueOf;NativeBigInt.prototype.valueOf=NativeBigInt.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};function parseStringValue(v){if(isPrecise(+v)){var x=+v;if(x===truncate(x))return supportsNativeBigInt?new NativeBigInt(BigInt(x)):new SmallInteger(x);throw new Error("Invalid integer: "+v)}var sign=v[0]==="-";if(sign)v=v.slice(1);var split=v.split(/e/i);if(split.length>2)throw new Error("Invalid integer: "+split.join("e"));if(split.length===2){var exp=split[1];if(exp[0]==="+")exp=exp.slice(1);exp=+exp;if(exp!==truncate(exp)||!isPrecise(exp))throw new Error("Invalid integer: "+exp+" is not a valid exponent.");var text=split[0];var decimalPlace=text.indexOf(".");if(decimalPlace>=0){exp-=text.length-decimalPlace-1;text=text.slice(0,decimalPlace)+text.slice(decimalPlace+1);}if(exp<0)throw new Error("Cannot include negative exponent part for integers");text+=new Array(exp+1).join("0");v=text;}var isValid=/^([0-9][0-9]*)$/.test(v);if(!isValid)throw new Error("Invalid integer: "+v);if(supportsNativeBigInt){return new NativeBigInt(BigInt(sign?"-"+v:v))}var r=[],max=v.length,l=LOG_BASE,min=max-l;while(max>0){r.push(+v.slice(min,max));min-=l;if(min<0)min=0;max-=l;}trim(r);return new BigInteger(r,sign)}function parseNumberValue(v){if(supportsNativeBigInt){return new NativeBigInt(BigInt(v))}if(isPrecise(v)){if(v!==truncate(v))throw new Error(v+" is not an integer.");return new SmallInteger(v)}return parseStringValue(v.toString())}function parseValue(v){if(typeof v==="number"){return parseNumberValue(v)}if(typeof v==="string"){return parseStringValue(v)}if(typeof v==="bigint"){return new NativeBigInt(v)}return v}for(var i=0;i<1e3;i++){Integer[i]=parseValue(i);if(i>0)Integer[-i]=parseValue(-i);}Integer.one=Integer[1];Integer.zero=Integer[0];Integer.minusOne=Integer[-1];Integer.max=max;Integer.min=min;Integer.gcd=gcd;Integer.lcm=lcm;Integer.isInstance=function(x){return x instanceof BigInteger||x instanceof SmallInteger||x instanceof NativeBigInt};Integer.randBetween=randBetween;Integer.fromArray=function(digits,base,isNegative){return parseBaseFromArray(digits.map(parseValue),parseValue(base||10),isNegative)};return Integer}();if(typeof module!=="undefined"&&module.hasOwnProperty("exports")){module.exports=bigInt;}if(typeof define==="function"&&define.amd){define("big-integer",[],function(){return bigInt});}

    // Transcrypt'ed from Python, 2020-10-23 21:39:42
    var __name__$1 = 'group';
    var mpz = bigInt;
    var Q = mpz (2).pow (256).minus (189);
    var P = mpz ('1044388881413152506691752710716624382579964249047383780384233483283953907971553643537729993126875883902173634017777416360502926082946377942955704498542097614841825246773580689398386320439747911160897731551074903967243883427132918813748016269754522343505285898816777211761912392772914485521155521641049273446207578961939840619466145806859275053476560973295158703823395710210329314709715239251736552384080845836048778667318931418338422443891025911884723433084701207771901944593286624979917391350564662632723703007964229849154756196890615252286533089643184902706926081744149289517418249153634178342075381874131646013444796894582106870531535803666254579602632453103741452569793905551901541856173251385047414840392753585581909950158046256810542678368121278509960520957624737942914600310646609792665012858397381435755902851312071248102599442308951327039250818892493767423329663783709190716162023529669217300939783171415808233146823000766917789286154006042281423733706462905243774854543127239500245873582012663666430583862778167369547603016344242729592244544608279405999759391099775667746401633668308698186721172238255007962658564443858927634850415775348839052026675785694826386930175303143450046575460843879941791946313299322976993405829119');
    var R = P.minus (1).multiply (Q.modInv (P)).mod (P);
    var G = mpz ('14245109091294741386751154342323521003543059865261911603340669522218159898070093327838595045175067897363301047764229640327930333001123401070596314469603183633790452807428416775717923182949583875381833912370889874572112086966300498607364501764494811956017881198827400327403252039184448888877644781610594801053753235453382508543906993571248387749420874609737451803650021788641249940534081464232937193671929586747339353451021712752406225276255010281004857233043241332527821911604413582442915993833774890228705495787357234006932755876972632840760599399514028393542345035433135159511099877773857622699742816228063106927776147867040336649025152771036361273329385354927395836330206311072577683892664475070720408447257635606891920123791602538518516524873664205034698194561673019535564273204744076336022130453963648114321050173994259620611015189498335966173440411967562175734606706258335095991140827763942280037063180207172918769921712003400007923888084296685269233298371143630883011213745082207405479978418089917768242592557172834921185990876960527013386693909961093302289646193295725135238595082039133488721800071459503353417574248679728577942863659802016004283193163470835709405666994892499382890912238098413819320185166580019604608311466');
    var ElementModQ =  __class__ ('ElementModQ', [object], {
    	__module__: __name__$1,
    	get __init__ () {return __get__ (this, function (self, elem) {
    		self.elem = elem;
    	});},
    	get to_hex () {return __get__ (this, function (self) {
    		var h = self.elem.toString (16);
    		if (__mod__ (len (h), 2)) {
    			var h = '0' + h;
    		}
    		return ;
    	});},
    	get to_int () {return __get__ (this, function (self) {
    		return self.elem;
    	});},
    	get is_in_bounds () {return __get__ (this, function (self) {
    		return (0 <= self.elem && self.elem < Q);
    	});},
    	get is_in_bounds_no_zero () {return __get__ (this, function (self) {
    		return (0 < self.elem && self.elem < Q);
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		return (isinstance (other, ElementModP) || isinstance (other, ElementModQ)) && !(eq_elems (self, other));
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		return (isinstance (other, ElementModP) || isinstance (other, ElementModQ)) && eq_elems (self, other);
    	});},
    	get __str__ () {return __get__ (this, function (self) {
    		return self.elem.toString ();
    	});},
    	get toString () {return __get__ (this, function (self) {
    		return str (self);
    	});}
    });
    var ElementModP =  __class__ ('ElementModP', [object], {
    	__module__: __name__$1,
    	get __init__ () {return __get__ (this, function (self, elem) {
    		self.elem = elem;
    	});},
    	get to_hex () {return __get__ (this, function (self) {
    		var h = self.elem.toString (16);
    		if (__mod__ (len (h), 2)) {
    			var h = '0' + h;
    		}
    		return h;
    	});},
    	get to_int () {return __get__ (this, function (self) {
    		return self.elem;
    	});},
    	get is_in_bounds () {return __get__ (this, function (self) {
    		return (0 <= self.elem && self.elem < P);
    	});},
    	get is_in_bounds_no_zero () {return __get__ (this, function (self) {
    		return (0 < self.elem && self.elem < P);
    	});},
    	get is_valid_residue () {return __get__ (this, function (self) {
    		var residue = pow_p (self, ElementModQ (mpz (Q))) == ONE_MOD_P;
    		return self.is_in_bounds () && residue;
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		return (isinstance (other, ElementModP) || isinstance (other, ElementModQ)) && !(eq_elems (self, other));
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		return (isinstance (other, ElementModP) || isinstance (other, ElementModQ)) && eq_elems (self, other);
    	});},
    	get __str__ () {return __get__ (this, function (self) {
    		return self.elem.toString ();
    	});},
    	get toString () {return __get__ (this, function (self) {
    		return str (self);
    	});}
    });
    var ZERO_MOD_Q = ElementModQ (mpz (0));
    var ONE_MOD_Q = ElementModQ (mpz (1));
    var TWO_MOD_Q = ElementModQ (mpz (2));
    var ZERO_MOD_P = ElementModP (mpz (0));
    var ONE_MOD_P = ElementModP (mpz (1));
    var TWO_MOD_P = ElementModP (mpz (2));
    var int_to_q = function (input) {
    	var i = int (input);
    	if ((0 <= i && i < Q)) {
    		return ElementModQ (mpz (i));
    	}
    	else {
    		return null;
    	}
    };
    var int_to_q_unchecked = function (i) {
    	var m = mpz (int (i));
    	return ElementModQ (m);
    };
    var int_to_p_unchecked = function (i) {
    	var m = mpz (int (i));
    	return ElementModP (m);
    };
    var add_q = function () {
    	var elems = tuple ([].slice.apply (arguments).slice (0));
    	var t = mpz (0);
    	for (var e of elems) {
    		if (isinstance (e, int)) {
    			var e = int_to_q_unchecked (e);
    		}
    		var t = t.sum (e.elem).mod (Q);
    	}
    	return ElementModQ (t);
    };
    var mult_inv_p = function (e) {
    	if (isinstance (e, int)) {
    		var e = int_to_p_unchecked (e);
    	}
    	return ElementModP (e.elem.modInv (P));
    };
    var pow_p = function (b, e) {
    	if (isinstance (b, int)) {
    		var b = int_to_p_unchecked (b);
    	}
    	if (isinstance (e, int)) {
    		var e = int_to_p_unchecked (e);
    	}
    	return ElementModP (b.elem.modPow (e.elem, P));
    };
    var mult_p = function () {
    	var elems = tuple ([].slice.apply (arguments).slice (0));
    	var product = mpz (1);
    	for (var x of elems) {
    		if (isinstance (x, int)) {
    			var x = int_to_p_unchecked (x);
    		}
    		var product = product.multiply (x.elem).mod (P);
    	}
    	return ElementModP (product);
    };
    var g_pow_p = function (e) {
    	return pow_p (ElementModP (mpz (G)), e);
    };
    var eq_elems = function (a, b) {
    	return a.elem == b.elem;
    };

    // Transcrypt'ed from Python, 2020-10-23 21:39:43
    var re = {};
    __nest__ (re, '', __module_re__);
    var __name__$2 = 're.translate';
    var VERBOSE = false;
    var MAX_SHIFTREDUCE_LOOPS = 1000;
    var stringFlags = 'aiLmsux';
    var Group =  __class__ ('Group', [object], {
    	__module__: __name__$2,
    	get __init__ () {return __get__ (this, function (self, start, end, klass) {
    		self.start = start;
    		self.end = end;
    		self.klass = klass;
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		return str (tuple ([self.start, self.end, self.klass]));
    	});}
    });
    var generateGroupSpans = function (tokens) {
    	var groupInfo = [];
    	var idx = 0;
    	for (var token of tokens) {
    		if (__t__ (token.py_name.startswith ('('))) {
    			groupInfo.append (Group (idx, null, token.py_name));
    		}
    		else if (__t__ (token.py_name == ')')) {
    			for (var group of py_reversed (groupInfo)) {
    				if (__t__ (group.end === null)) {
    					group.end = idx;
    				}
    			}
    		}
    		idx += 1;
    	}
    	return groupInfo;
    };
    var countCaptureGroups = function (tokens) {
    	var groupInfo = generateGroupSpans (tokens);
    	var count = 0;
    	for (var token of tokens) {
    		if (__t__ (token.py_name == '(')) {
    			count += 1;
    		}
    	}
    	return count;
    };
    var getCaptureGroup = function (groupInfo, namedGroups, groupRef) {
    	try {
    		var id = int (groupRef);
    	}
    	catch (__except0__) {
    		var id = namedGroups [groupRef];
    	}
    	var search = 0;
    	for (var group of groupInfo) {
    		if (__t__ (group.klass == '(')) {
    			search += 1;
    			if (__t__ (search == id)) {
    				return group;
    			}
    		}
    	}
    };
    var splitIfElse = function (tokens, namedGroups) {
    	var variants = [];
    	var groupInfo = generateGroupSpans (tokens);
    	for (var group of groupInfo) {
    		if (__t__ (group.klass == '(?<')) {
    			var iff = tokens.__getslice__ (0, null, 1);
    			var els = tokens.__getslice__ (0, null, 1);
    			var conStart = group.start;
    			var conEnd = group.end;
    			var ref = tokens [conStart + 1].py_name;
    			var captureGroup = getCaptureGroup (groupInfo, namedGroups, ref);
    			var captureGroupModifier = tokens [captureGroup.end + 1];
    			if (__t__ (__t__ (__in__ (captureGroupModifier.py_name, ['?', '*'])) || captureGroupModifier.py_name.startswith ('{0,'))) {
    				if (__t__ (captureGroupModifier.py_name == '?')) {
    					iff [captureGroup.end + 1] = null;
    				}
    				else if (__t__ (captureGroupModifier.py_name == '*')) {
    					iff [captureGroup.end + 1] = Token ('+');
    				}
    				else if (__t__ (captureGroupModifier.py_name.startswith ('{0,'))) {
    					iff [captureGroup.end + 1].py_name.__setslice__ (0, 3, null, '{1,');
    				}
    				els [captureGroup.end + 1] = null;
    				var hasElse = false;
    				for (var idx = conStart; idx < conEnd; idx++) {
    					if (__t__ (tokens [idx].py_name == '|')) {
    						var hasElse = true;
    						els.py_pop (conEnd);
    						iff.__setslice__ (idx, conEnd + 1, null, []);
    						els.__setslice__ (conStart, idx + 1, null, []);
    						break;
    					}
    				}
    				if (__t__ (!__t__ ((hasElse)))) {
    					els.__setslice__ (conStart, conEnd + 1, null, []);
    					iff.py_pop (conEnd);
    				}
    				iff.__setslice__ (conStart, conStart + 3, null, []);
    				els.__setslice__ (captureGroup.start, captureGroup.end + 1, null, [Token ('('), Token (')')]);
    				iff.remove (null);
    				els.remove (null);
    				variants.append (iff);
    				variants.append (els);
    			}
    			else {
    				for (var idx = conStart; idx < conEnd; idx++) {
    					if (__t__ (iff [idx].py_name == '|')) {
    						var iff = tokens.__getslice__ (0, idx, 1);
    						iff.extend (tokens.__getslice__ (conEnd + 1, null, 1));
    						break;
    					}
    				}
    				iff.__setslice__ (conStart, conStart + 3, null, []);
    				variants.append (iff);
    			}
    			break;
    		}
    	}
    	if (__t__ (!__t__ ((variants)))) {
    		return [tokens];
    	}
    	var allVariants = [];
    	for (var variant of variants) {
    		allVariants.extend (splitIfElse (variant, namedGroups));
    	}
    	return allVariants;
    };
    var Token =  __class__ ('Token', [object], {
    	__module__: __name__$2,
    	get __init__ () {return __get__ (this, function (self, py_name, paras, pure) {
    		if (typeof paras == 'undefined' || (paras != null && paras.hasOwnProperty ("__kwargtrans__"))) {			var paras = null;
    		}		if (typeof pure == 'undefined' || (pure != null && pure.hasOwnProperty ("__kwargtrans__"))) {			var pure = false;
    		}		if (__t__ (paras === null)) {
    			var paras = [];
    		}
    		self.py_name = py_name;
    		self.paras = paras;
    		self.pure = pure;
    		self.isModeGroup = false;
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		return self.py_name;
    	});},
    	get resolve () {return __get__ (this, function (self) {
    		var paras = '';
    		for (var para of self.paras) {
    			paras += str (para);
    		}
    		return self.py_name + paras;
    	});}
    });
    var shift = function (stack, queue) {
    	var done = !__t__ ((bool (queue)));
    	if (__t__ (!__t__ ((done)))) {
    		stack.append (Token (queue [0], [], true));
    		var queue = queue.__getslice__ (1, null, 1);
    	}
    	return tuple ([stack, queue, done]);
    };
    var shiftReduce = function (stack, queue, namedGroups, flags) {
    	var done = false;
    	var high = len (stack) - 1;
    	if (__t__ (len (stack) < 2)) {
    		var __left0__ = shift (stack, queue);
    		var stack = __left0__ [0];
    		var queue = __left0__ [1];
    		var done = __left0__ [2];
    		return tuple ([stack, queue, flags, done]);
    	}
    	var s0 = (__t__ (len (stack) > 0) ? stack [high] : Token (''));
    	var s1 = (__t__ (len (stack) > 1) ? stack [high - 1] : Token (''));
    	if (__t__ (VERBOSE)) {
    		for (var token of stack) {
    			console.log (token.resolve (), '\t', __kwargtrans__ ({end: ''}));
    		}
    		console.log ('');
    	}
    	if (__t__ (s1.py_name == '\\')) {
    		if (__t__ (s0.py_name == 'A')) {
    			stack.__setslice__ (-__t__ ((2)), null, null, [Token ('^')]);
    		}
    		else if (__t__ (s0.py_name == 'a')) {
    			stack.__setslice__ (-__t__ ((2)), null, null, [Token ('\\07')]);
    		}
    		else if (__t__ (s0.py_name == 'Z')) {
    			stack.__setslice__ (-__t__ ((2)), null, null, [Token ('$')]);
    		}
    		else {
    			stack.__setslice__ (-__t__ ((2)), null, null, [Token ('\\' + s0.py_name)]);
    		}
    	}
    	else if (__t__ (__t__ (s0.py_name == '$') && s0.pure)) {
    		stack.py_pop ();
    		stack.extend ([Token ('(?='), Token ('\\n'), Token ('?'), Token ('$'), Token (')')]);
    	}
    	else if (__t__ (s1.py_name == '{')) {
    		if (__t__ (__t__ (s0.py_name == ',') && len (s1.paras) == 0)) {
    			s1.paras.append ('0');
    			s1.paras.append (',');
    		}
    		else if (__t__ (s0.py_name == '}')) {
    			s1.paras.append ('}');
    			s1.py_name = s1.resolve ();
    			s1.paras = [];
    		}
    		else {
    			s1.paras.append (s0.py_name);
    		}
    		var stack = stack.__getslice__ (0, -__t__ ((1)), 1);
    	}
    	else if (__t__ (__t__ (s1.py_name == '[') && s0.py_name == '^')) {
    		stack.__setslice__ (-__t__ ((2)), null, null, [Token ('[^')]);
    	}
    	else if (__t__ (__t__ (s1.py_name == '(') && s0.py_name == '?')) {
    		stack.__setslice__ (-__t__ ((2)), null, null, [Token ('(?')]);
    	}
    	else if (__t__ (__t__ (__in__ (s1.py_name, ['*', '+', '?'])) && s0.py_name == '?')) {
    		stack.__setslice__ (-__t__ ((2)), null, null, [Token (s1.py_name + '?')]);
    	}
    	else if (__t__ (__t__ (s1.isModeGroup) && s0.py_name == ')')) {
    		var stack = stack.__getslice__ (0, -__t__ ((2)), 1);
    	}
    	else if (__t__ (s1.py_name == '(?')) {
    		if (__t__ (__in__ (s0.py_name, stringFlags))) {
    			if (__t__ (s0.py_name == 'i')) {
    				flags |= re.IGNORECASE;
    			}
    			else if (__t__ (s0.py_name == 'L')) {
    				flags |= re.LOCALE;
    			}
    			else if (__t__ (s0.py_name == 'm')) {
    				flags |= re.MULTILINE;
    			}
    			else if (__t__ (s0.py_name == 's')) {
    				flags |= re.DOTALL;
    			}
    			else if (__t__ (s0.py_name == 'u')) {
    				flags |= re.UNICODE;
    			}
    			else if (__t__ (s0.py_name == 'x')) {
    				flags |= re.VERBOSE;
    			}
    			else if (__t__ (s0.py_name == 'a')) {
    				flags |= re.ASCII;
    			}
    			stack.py_pop ();
    			s1.isModeGroup = true;
    		}
    		else {
    			if (__t__ (s0.py_name == '(')) {
    				s0.py_name = '<';
    			}
    			var newToken = Token ('(?' + s0.py_name);
    			stack.__setslice__ (-__t__ ((2)), null, null, [newToken]);
    		}
    	}
    	else if (__t__ (s1.py_name == '(?<')) {
    		if (__t__ (s0.py_name == ')')) {
    			stack.__setslice__ (-__t__ ((1)), null, null, [Token (''.join (s1.paras)), Token ('>')]);
    			s1.paras = [];
    		}
    		else {
    			s1.paras.append (s0.py_name);
    			stack.py_pop ();
    		}
    	}
    	else if (__t__ (s1.py_name == '(?P')) {
    		stack.__setslice__ (-__t__ ((2)), null, null, [Token ('(?P' + s0.py_name)]);
    	}
    	else if (__t__ (s1.py_name == '(?P<')) {
    		if (__t__ (s0.py_name == '>')) {
    			namedGroups [''.join (s1.paras)] = countCaptureGroups (stack) + 1;
    			stack.__setslice__ (-__t__ ((2)), null, null, [Token ('(')]);
    		}
    		else {
    			s1.paras.append (s0.py_name);
    			stack.py_pop ();
    		}
    	}
    	else if (__t__ (s1.py_name == '(?P=')) {
    		if (__t__ (s0.py_name == ')')) {
    			stack.__setslice__ (-__t__ ((2)), null, null, [Token ('\\' + str (namedGroups [s1.paras [0]]))]);
    		}
    		else if (__t__ (!__t__ ((s1.paras)))) {
    			s1.paras.append (s0.py_name);
    			stack.py_pop ();
    		}
    		else {
    			s1.paras [0] += s0.py_name;
    			stack.py_pop ();
    		}
    	}
    	else if (__t__ (s1.py_name == '(?#')) {
    		if (__t__ (s0.py_name == ')')) {
    			var stack = stack.__getslice__ (0, -__t__ ((2)), 1);
    		}
    		else {
    			var stack = stack.__getslice__ (0, -__t__ ((1)), 1);
    		}
    	}
    	else {
    		var __left0__ = shift (stack, queue);
    		var stack = __left0__ [0];
    		var queue = __left0__ [1];
    		var done = __left0__ [2];
    	}
    	return tuple ([stack, queue, flags, done]);
    };
    var translate = function (rgx) {
    	var stack = [];
    	var queue = list (rgx);
    	var flags = 0;
    	var namedGroups = dict ();
    	var nloop = 0;
    	while (__t__ (true)) {
    		nloop += 1;
    		if (__t__ (nloop > MAX_SHIFTREDUCE_LOOPS)) {
    			var __except0__ = Exception ();
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		var __left0__ = shiftReduce (stack, queue, namedGroups, flags);
    		var stack = __left0__ [0];
    		var queue = __left0__ [1];
    		var flags = __left0__ [2];
    		var done = __left0__ [3];
    		if (__t__ (done)) {
    			break;
    		}
    	}
    	var variants = splitIfElse (stack, namedGroups);
    	var n_splits = len (variants);
    	var final = [];
    	for (var i = 0; i < len (variants); i++) {
    		final.extend (variants [i]);
    		if (__t__ (i < len (variants) - 1)) {
    			final.append (Token ('|'));
    		}
    	}
    	var stack = final;
    	var groupInfo = generateGroupSpans (stack);
    	var resolvedTokens = [];
    	for (var token of stack) {
    		var stringed = token.resolve ();
    		if (__t__ (__t__ (flags & re.DOTALL) && stringed == '.')) {
    			var stringed = '[\\s\\S]';
    		}
    		resolvedTokens.append (stringed);
    	}
    	return tuple ([resolvedTokens, flags, namedGroups, countCaptureGroups (stack), n_splits]);
    };

    // Transcrypt'ed from Python, 2020-10-23 21:39:43
    var __name__$3 = 're';
    var T = 1 << 0;
    var TEMPLATE = T;
    var I = 1 << 1;
    var IGNORECASE = I;
    var L = 1 << 2;
    var LOCALE = L;
    var M = 1 << 3;
    var MULTILINE = M;
    var S = 1 << 4;
    var DOTALL = S;
    var U = 1 << 5;
    var UNICODE = U;
    var X = 1 << 6;
    var VERBOSE$1 = X;
    var DEBUG = 1 << 7;
    var A = 1 << 8;
    var ASCII = A;
    var Y = 1 << 16;
    var STICKY = Y;
    var G$1 = 1 << 17;
    var GLOBAL = G$1;
    var J = 1 << 19;
    var JSSTRICT = J;
    var error =  __class__ ('error', [Exception], {
    	__module__: __name__$3,
    	get __init__ () {return __get__ (this, function (self, msg, error, pattern, flags, pos) {
    		if (typeof pattern == 'undefined' || (pattern != null && pattern.hasOwnProperty ("__kwargtrans__"))) {			var pattern = null;
    		}		if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {			var flags = 0;
    		}		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {			var pos = null;
    		}		Exception.__init__ (self, msg, __kwargtrans__ ({error: error}));
    		self.pattern = pattern;
    		self.flags = flags;
    		self.pos = pos;
    	});}
    });
    var ReIndexError =  __class__ ('ReIndexError', [IndexError], {
    	__module__: __name__$3,
    	get __init__ () {return __get__ (this, function (self) {
    		IndexError.__init__ (self, 'no such group');
    	});}
    });
    var Match =  __class__ ('Match', [object], {
    	__module__: __name__$3,
    	get __init__ () {return __get__ (this, function (self, mObj, string, pos, endpos, rObj, namedGroups) {
    		if (typeof namedGroups == 'undefined' || (namedGroups != null && namedGroups.hasOwnProperty ("__kwargtrans__"))) {			var namedGroups = null;
    		}		for (var [index, match] of enumerate (mObj)) {
    			mObj [index] = (mObj [index] == undefined ? null : mObj [index]);
    		}
    		self._obj = mObj;
    		self._pos = pos;
    		self._endpos = endpos;
    		self._re = rObj;
    		self._string = string;
    		self._namedGroups = namedGroups;
    		self._lastindex = self._lastMatchGroup ();
    		if (self._namedGroups !== null) {
    			self._lastgroup = self._namedGroups [self._lastindex];
    		}
    		else {
    			self._lastgroup = null;
    		}
    	});},
    	get _getPos () {return __get__ (this, function (self) {
    		return self._pos;
    	});},
    	get _setPos () {return __get__ (this, function (self, val) {
    		var __except0__ = AttributeError ('readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getEndPos () {return __get__ (this, function (self) {
    		return self._endpos;
    	});},
    	get _setEndPos () {return __get__ (this, function (self, val) {
    		var __except0__ = AttributeError ('readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getRe () {return __get__ (this, function (self) {
    		return self._re;
    	});},
    	get _setRe () {return __get__ (this, function (self, val) {
    		var __except0__ = AttributeError ('readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getString () {return __get__ (this, function (self) {
    		return self._string;
    	});},
    	get _setString () {return __get__ (this, function (self, val) {
    		var __except0__ = AttributeError ('readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getLastGroup () {return __get__ (this, function (self) {
    		return self._lastgroup;
    	});},
    	get _setLastGroup () {return __get__ (this, function (self, val) {
    		var __except0__ = AttributeError ('readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getLastIndex () {return __get__ (this, function (self) {
    		return self._lastindex;
    	});},
    	get _setLastIndex () {return __get__ (this, function (self, val) {
    		var __except0__ = AttributeError ('readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _lastMatchGroup () {return __get__ (this, function (self) {
    		if (len (self._obj) > 1) {
    			for (var i of range (len (self._obj) - 1, 0, -(1))) {
    				if (self._obj [i] !== null) {
    					return i;
    				}
    			}
    			return null;
    		}
    		else {
    			return null;
    		}
    	});},
    	get expand () {return __get__ (this, function (self, template) {
    		var __except0__ = NotImplementedError ();
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get group () {return __get__ (this, function (self) {
    		var args = tuple ([].slice.apply (arguments).slice (1));
    		var ret = [];
    		if (len (args) > 0) {
    			for (var index of args) {
    				if (py_typeof (index) === str) {
    					if (self._namedGroups !== null) {
    						if (!__in__ (index, self._namedGroups.py_keys ())) {
    							var __except0__ = ReIndexError ();
    							__except0__.__cause__ = null;
    							throw __except0__;
    						}
    						ret.append (self._obj [self._namedGroups [index]]);
    					}
    					else {
    						var __except0__ = NotImplementedError ('No NamedGroups Available');
    						__except0__.__cause__ = null;
    						throw __except0__;
    					}
    				}
    				else {
    					if (index >= len (self._obj)) {
    						var __except0__ = ReIndexError ();
    						__except0__.__cause__ = null;
    						throw __except0__;
    					}
    					ret.append (self._obj [index]);
    				}
    			}
    		}
    		else {
    			ret.append (self._obj [0]);
    		}
    		if (len (ret) == 1) {
    			return ret [0];
    		}
    		else {
    			return tuple (ret);
    		}
    	});},
    	get groups () {return __get__ (this, function (self, py_default) {
    		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {			var py_default = null;
    		}		if (len (self._obj) > 1) {
    			var ret = self._obj.__getslice__ (1, null, 1);
    			return tuple ((function () {
    				var __accu0__ = [];
    				for (var x of ret) {
    					__accu0__.append ((x !== null ? x : py_default));
    				}
    				return __accu0__;
    			}) ());
    		}
    		else {
    			return tuple ();
    		}
    	});},
    	get groupdict () {return __get__ (this, function (self, py_default) {
    		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {			var py_default = null;
    		}		if (self._namedGroups !== null) {
    			var ret = dict ({});
    			for (var [gName, gId] of self._namedGroups.py_items ()) {
    				var value = self._obj [gId];
    				ret [gName] = (value !== null ? value : py_default);
    			}
    			return ret;
    		}
    		else {
    			var __except0__ = NotImplementedError ('No NamedGroups Available');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    	});},
    	get start () {return __get__ (this, function (self, group) {
    		if (typeof group == 'undefined' || (group != null && group.hasOwnProperty ("__kwargtrans__"))) {			var group = 0;
    		}		var gId = 0;
    		if (py_typeof (group) === str) {
    			if (self._namedGroups !== null) {
    				if (!__in__ (group, self._namedGroups.py_keys ())) {
    					var __except0__ = ReIndexError ();
    					__except0__.__cause__ = null;
    					throw __except0__;
    				}
    				var gId = self._namedGroups [group];
    			}
    			else {
    				var __except0__ = NotImplementedError ('No NamedGroups Available');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    		}
    		else {
    			var gId = group;
    		}
    		if (gId >= len (self._obj)) {
    			var __except0__ = ReIndexError ();
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		if (gId == 0) {
    			return self._obj.index;
    		}
    		else if (self._obj [gId] !== null) {
    			var r = compile (escape (self._obj [gId]), self._re.flags);
    			var m = r.search (self._obj [0]);
    			if (m) {
    				return self._obj.index + m.start ();
    			}
    			else {
    				var __except0__ = Exception ('Failed to find capture group');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    		}
    		else {
    			return -(1);
    		}
    	});},
    	get end () {return __get__ (this, function (self, group) {
    		if (typeof group == 'undefined' || (group != null && group.hasOwnProperty ("__kwargtrans__"))) {			var group = 0;
    		}		var gId = 0;
    		if (py_typeof (group) === str) {
    			if (self._namedGroups !== null) {
    				if (!__in__ (group, self._namedGroups.py_keys ())) {
    					var __except0__ = ReIndexError ();
    					__except0__.__cause__ = null;
    					throw __except0__;
    				}
    				var gId = self._namedGroups [group];
    			}
    			else {
    				var __except0__ = NotImplementedError ('No NamedGroups Available');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    		}
    		else {
    			var gId = group;
    		}
    		if (gId >= len (self._obj)) {
    			var __except0__ = ReIndexError ();
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		if (gId == 0) {
    			return self._obj.index + len (self._obj [0]);
    		}
    		else if (self._obj [gId] !== null) {
    			var r = compile (escape (self._obj [gId]), self._re.flags);
    			var m = r.search (self._obj [0]);
    			if (m) {
    				return self._obj.index + m.end ();
    			}
    			else {
    				var __except0__ = Exception ('Failed to find capture group');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    		}
    		else {
    			return -(1);
    		}
    	});},
    	get span () {return __get__ (this, function (self, group) {
    		if (typeof group == 'undefined' || (group != null && group.hasOwnProperty ("__kwargtrans__"))) {			var group = 0;
    		}		return tuple ([self.start (group), self.end (group)]);
    	});}
    });
    Object.defineProperty (Match, 'pos', property.call (Match, Match._getPos, Match._setPos));
    Object.defineProperty (Match, 'endpos', property.call (Match, Match._getEndPos, Match._setEndPos));
    Object.defineProperty (Match, 're', property.call (Match, Match._getRe, Match._setRe));
    Object.defineProperty (Match, 'string', property.call (Match, Match._getString, Match._setString));
    Object.defineProperty (Match, 'lastgroup', property.call (Match, Match._getLastGroup, Match._setLastGroup));
    Object.defineProperty (Match, 'lastindex', property.call (Match, Match._getLastIndex, Match._setLastIndex));
    var Regex =  __class__ ('Regex', [object], {
    	__module__: __name__$3,
    	get __init__ () {return __get__ (this, function (self, pattern, flags) {
    		if (!((flags & ASCII) > 0)) {
    			flags |= UNICODE;
    		}
    		self._flags = flags;
    		var __left0__ = self._compileWrapper (pattern, flags);
    		self._jsFlags = __left0__ [0];
    		self._obj = __left0__ [1];
    		self._jspattern = pattern;
    		self._pypattern = pattern;
    		var __left0__ = self._compileWrapper (pattern + '|', flags);
    		var _ = __left0__ [0];
    		var groupCounterRegex = __left0__ [1];
    		self._groups = groupCounterRegex.exec ('').length - 1;
    		self._groupindex = null;
    	});},
    	get _getPattern () {return __get__ (this, function (self) {
    		var ret = self._pypattern.py_replace ('\\', '\\\\');
    		return ret;
    	});},
    	get _setPattern () {return __get__ (this, function (self, val) {
    		var __except0__ = AttributeError ('readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getFlags () {return __get__ (this, function (self) {
    		return self._flags;
    	});},
    	get _setFlags () {return __get__ (this, function (self, val) {
    		var __except0__ = AttributeError ('readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getGroups () {return __get__ (this, function (self) {
    		return self._groups;
    	});},
    	get _setGroups () {return __get__ (this, function (self, val) {
    		var __except0__ = AttributeError ('readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getGroupIndex () {return __get__ (this, function (self) {
    		if (self._groupindex === null) {
    			return dict ({});
    		}
    		else {
    			return self._groupindex;
    		}
    	});},
    	get _setGroupIndex () {return __get__ (this, function (self, val) {
    		var __except0__ = AttributeError ('readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _compileWrapper () {return __get__ (this, function (self, pattern, flags) {
    		if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {			var flags = 0;
    		}		var jsFlags = self._convertFlags (flags);
    		var rObj = null;
    		var errObj = null;
    		
    		                   try {
    		                     rObj = new RegExp(pattern, jsFlags);
    		                   } catch( err ) {
    		                     errObj = err;
    		                   }
    		                   
    		if (errObj !== null) {
    			var __except0__ = error (errObj.message, errObj, pattern, flags);
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		return tuple ([jsFlags, rObj]);
    	});},
    	get _convertFlags () {return __get__ (this, function (self, flags) {
    		var bitmaps = [tuple ([DEBUG, '']), tuple ([IGNORECASE, 'i']), tuple ([MULTILINE, 'm']), tuple ([STICKY, 'y']), tuple ([GLOBAL, 'g']), tuple ([UNICODE, 'u'])];
    		var ret = ''.join ((function () {
    			var __accu0__ = [];
    			for (var x of bitmaps) {
    				if ((x [0] & flags) > 0) {
    					__accu0__.append (x [1]);
    				}
    			}
    			return __accu0__;
    		}) ());
    		return ret;
    	});},
    	get _getTargetStr () {return __get__ (this, function (self, string, pos, endpos) {
    		var endPtr = len (string);
    		if (endpos !== null) {
    			if (endpos < endPtr) {
    				var endPtr = endpos;
    			}
    		}
    		if (endPtr < 0) {
    			var endPtr = 0;
    		}
    		var ret = string.__getslice__ (pos, endPtr, 1);
    		return ret;
    	});},
    	get _patternHasCaptures () {return __get__ (this, function (self) {
    		return self._groups > 0;
    	});},
    	get search () {return __get__ (this, function (self, string, pos, endpos) {
    		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {			var pos = 0;
    		}		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {			var endpos = null;
    		}		if (endpos === null) {
    			var endpos = len (string);
    		}
    		var rObj = self._obj;
    		var m = rObj.exec (string);
    		if (m) {
    			if (m.index < pos || m.index > endpos) {
    				return null;
    			}
    			else {
    				return Match (m, string, pos, endpos, self, self._groupindex);
    			}
    		}
    		else {
    			return null;
    		}
    	});},
    	get match () {return __get__ (this, function (self, string, pos, endpos) {
    		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {			var pos = 0;
    		}		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {			var endpos = null;
    		}		var target = string;
    		if (endpos !== null) {
    			var target = target.__getslice__ (0, endpos, 1);
    		}
    		else {
    			var endpos = len (string);
    		}
    		var rObj = self._obj;
    		var m = rObj.exec (target);
    		if (m) {
    			if (m.index == pos) {
    				return Match (m, string, pos, endpos, self, self._groupindex);
    			}
    			else {
    				return null;
    			}
    		}
    		else {
    			return null;
    		}
    	});},
    	get fullmatch () {return __get__ (this, function (self, string, pos, endpos) {
    		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {			var pos = 0;
    		}		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {			var endpos = null;
    		}		var target = string;
    		var strEndPos = len (string);
    		if (endpos !== null) {
    			var target = target.__getslice__ (0, endpos, 1);
    			var strEndPos = endpos;
    		}
    		var rObj = self._obj;
    		var m = rObj.exec (target);
    		if (m) {
    			var obsEndPos = m.index + len (m [0]);
    			if (m.index == pos && obsEndPos == strEndPos) {
    				return Match (m, string, pos, strEndPos, self, self._groupindex);
    			}
    			else {
    				return null;
    			}
    		}
    		else {
    			return null;
    		}
    	});},
    	get py_split () {return __get__ (this, function (self, string, maxsplit) {
    		if (typeof maxsplit == 'undefined' || (maxsplit != null && maxsplit.hasOwnProperty ("__kwargtrans__"))) {			var maxsplit = 0;
    		}		if (maxsplit < 0) {
    			return [string];
    		}
    		var mObj = null;
    		var rObj = self._obj;
    		if (maxsplit == 0) {
    			var mObj = string.py_split (rObj);
    			return mObj;
    		}
    		else {
    			var flags = self._flags;
    			flags |= GLOBAL;
    			var __left0__ = self._compileWrapper (self._jspattern, flags);
    			var _ = __left0__ [0];
    			var rObj = __left0__ [1];
    			var ret = [];
    			var lastM = null;
    			for (var i = 0; i < maxsplit; i++) {
    				var m = rObj.exec (string);
    				if (m) {
    					if (lastM !== null) {
    						var start = lastM.index + len (lastM [0]);
    						var head = string.__getslice__ (start, m.index, 1);
    						ret.append (head);
    						if (len (m) > 1) {
    							ret.extend (m.__getslice__ (1, null, 1));
    						}
    					}
    					else {
    						var head = string.__getslice__ (0, m.index, 1);
    						ret.append (head);
    						if (len (m) > 1) {
    							ret.extend (m.__getslice__ (1, null, 1));
    						}
    					}
    					var lastM = m;
    				}
    				else {
    					break;
    				}
    			}
    			if (lastM !== null) {
    				var endPos = lastM.index + len (lastM [0]);
    				var end = string.__getslice__ (endPos, null, 1);
    				ret.append (end);
    			}
    			return ret;
    		}
    	});},
    	get _findAllMatches () {return __get__ (this, function (self, string, pos, endpos) {
    		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {			var pos = 0;
    		}		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {			var endpos = null;
    		}		var target = self._getTargetStr (string, pos, endpos);
    		var flags = self._flags;
    		flags |= GLOBAL;
    		var __left0__ = self._compileWrapper (self._jspattern, flags);
    		var _ = __left0__ [0];
    		var rObj = __left0__ [1];
    		var ret = [];
    		while (true) {
    			var m = rObj.exec (target);
    			if (m) {
    				ret.append (m);
    			}
    			else {
    				break;
    			}
    		}
    		return ret;
    	});},
    	get findall () {return __get__ (this, function (self, string, pos, endpos) {
    		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {			var pos = 0;
    		}		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {			var endpos = null;
    		}		var mlist = self._findAllMatches (string, pos, endpos);
    		var mSelect = function (m) {
    			if (len (m) > 2) {
    				return tuple (m.__getslice__ (1, null, 1));
    			}
    			else if (len (m) == 2) {
    				return m [1];
    			}
    			else {
    				return m [0];
    			}
    		};
    		var ret = map (mSelect, mlist);
    		return ret;
    	});},
    	get finditer () {return __get__ (this, function (self, string, pos, endpos) {
    		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {			var endpos = null;
    		}		var mlist = self._findAllMatches (string, pos, endpos);
    		var ret = map ((function __lambda__ (m) {
    			return Match (m, string, 0, len (string), self, self._groupindex);
    		}), mlist);
    		return py_iter (ret);
    	});},
    	get sub () {return __get__ (this, function (self, repl, string, count) {
    		if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {			var count = 0;
    		}		var __left0__ = self.subn (repl, string, count);
    		var ret = __left0__ [0];
    		var _ = __left0__ [1];
    		return ret;
    	});},
    	get subn () {return __get__ (this, function (self, repl, string, count) {
    		if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {			var count = 0;
    		}		var flags = self._flags;
    		flags |= GLOBAL;
    		var __left0__ = self._compileWrapper (self._jspattern, flags);
    		var _ = __left0__ [0];
    		var rObj = __left0__ [1];
    		var ret = '';
    		var totalMatch = 0;
    		var lastEnd = -(1);
    		while (true) {
    			if (count > 0) {
    				if (totalMatch >= count) {
    					if (lastEnd < 0) {
    						return tuple ([ret, totalMatch]);
    					}
    					else {
    						ret += string.__getslice__ (lastEnd, m.index, 1);
    						return tuple ([ret, totalMatch]);
    					}
    				}
    			}
    			var m = rObj.exec (string);
    			if (m) {
    				if (lastEnd < 0) {
    					ret += string.__getslice__ (0, m.index, 1);
    				}
    				else {
    					ret += string.__getslice__ (lastEnd, m.index, 1);
    				}
    				if (callable (repl)) {
    					var content = repl (Match (m, string, 0, len (string), self, self._groupindex));
    					ret += content;
    				}
    				else {
    					ret += repl;
    				}
    				totalMatch += 1;
    				var lastEnd = m.index + len (m [0]);
    			}
    			else if (lastEnd < 0) {
    				return tuple ([string, 0]);
    			}
    			else {
    				ret += string.__getslice__ (lastEnd, null, 1);
    				return tuple ([ret, totalMatch]);
    			}
    		}
    	});}
    });
    Object.defineProperty (Regex, 'pattern', property.call (Regex, Regex._getPattern, Regex._setPattern));
    Object.defineProperty (Regex, 'flags', property.call (Regex, Regex._getFlags, Regex._setFlags));
    Object.defineProperty (Regex, 'groups', property.call (Regex, Regex._getGroups, Regex._setGroups));
    Object.defineProperty (Regex, 'groupindex', property.call (Regex, Regex._getGroupIndex, Regex._setGroupIndex));
    var PyRegExp =  __class__ ('PyRegExp', [Regex], {
    	__module__: __name__$3,
    	get __init__ () {return __get__ (this, function (self, pyPattern, flags) {
    		var __left0__ = translate (pyPattern);
    		var jsTokens = __left0__ [0];
    		var inlineFlags = __left0__ [1];
    		var namedGroups = __left0__ [2];
    		var nCapGroups = __left0__ [3];
    		var n_splits = __left0__ [4];
    		flags |= inlineFlags;
    		var jsPattern = ''.join (jsTokens);
    		Regex.__init__ (self, jsPattern, flags);
    		self._pypattern = pyPattern;
    		self._nsplits = n_splits;
    		self._jsTokens = jsTokens;
    		self._capgroups = nCapGroups;
    		self._groupindex = namedGroups;
    	});}
    });
    var compile = function (pattern, flags) {
    	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	if (flags & JSSTRICT) {
    		var p = Regex (pattern, flags);
    	}
    	else {
    		var p = PyRegExp (pattern, flags);
    	}
    	return p;
    };
    var search = function (pattern, string, flags) {
    	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = compile (pattern, flags);
    	return p.search (string);
    };
    var match = function (pattern, string, flags) {
    	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = compile (pattern, flags);
    	return p.match (string);
    };
    var fullmatch = function (pattern, string, flags) {
    	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = compile (pattern, flags);
    	return p.fullmatch (string);
    };
    var py_split = function (pattern, string, maxsplit, flags) {
    	if (typeof maxsplit == 'undefined' || (maxsplit != null && maxsplit.hasOwnProperty ("__kwargtrans__"))) {		var maxsplit = 0;
    	}	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = compile (pattern, flags);
    	return p.py_split (string, maxsplit);
    };
    var findall = function (pattern, string, flags) {
    	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = compile (pattern, flags);
    	return p.findall (string);
    };
    var finditer = function (pattern, string, flags) {
    	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = compile (pattern, flags);
    	return p.finditer (string);
    };
    var sub = function (pattern, repl, string, count, flags) {
    	if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {		var count = 0;
    	}	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = compile (pattern, flags);
    	return p.sub (repl, string, count);
    };
    var subn = function (pattern, repl, string, count, flags) {
    	if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {		var count = 0;
    	}	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = compile (pattern, flags);
    	return p.subn (repl, string, count);
    };
    var escape = function (string) {
    	var ret = null;
    	var replfunc = function (m) {
    		if (m [0] == '\\') {
    			return '\\\\\\\\';
    		}
    		else {
    			return '\\\\' + m [0];
    		}
    	};
    	
    	        var r = /[^A-Za-z:;\d]/g;
    	        ret = string.replace(r, replfunc);
    	        
    	if (ret !== null) {
    		return ret;
    	}
    	else {
    		var __except0__ = Exception ('Failed to escape the passed string');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    };
    var purge = function () {
    	// pass;
    };

    // Transcrypt'ed from Python, 2020-10-23 21:39:43
    var modf = function (n) {
    	var sign = (n >= 0 ? 1 : -(1));
    	var __left0__ = divmod (abs (n), 1);
    	var f = __left0__ [0];
    	var mod = __left0__ [1];
    	return tuple ([mod * sign, f * sign]);
    };

    // Transcrypt'ed from Python, 2020-10-23 21:39:43
    try {
    	var __language = window.navigator.language;
    }
    catch (__except0__) {
    	var __language = 'en-US';
    }
    var __debugGetLanguage = function () {
    	return __language;
    };
    var __adapt__ = function (request) {
    	__language = request.headers ['accept-language'].py_split (',') [0];
    };
    var __date = new Date (0);
    var __now = new Date ();
    var __weekdays = [];
    var __weekdays_long = [];
    var __d = new Date (1467662339080);
    for (var i = 0; i < 7; i++) {
    	for (var [l, s] of tuple ([tuple ([__weekdays, 'short']), tuple ([__weekdays_long, 'long'])])) {
    		l.append (__d.toLocaleString (__language, dict ([['weekday', s]])).lower ());
    	}
    	__d.setDate (__d.getDate () + 1);
    }
    var __months = [];
    var __months_long = [];
    var __d = new Date (946681200000.0);
    for (var i = 0; i < 12; i++) {
    	for (var [l, s] of tuple ([tuple ([__months, 'short']), tuple ([__months_long, 'long'])])) {
    		l.append (__d.toLocaleString (__language, dict ([['month', s]])).lower ());
    	}
    	__d.setMonth (__d.getMonth () + 1);
    }
    var __lu = dict ([['Y', 0], ['m', 1], ['d', 2], ['H', 3], ['M', 4], ['S', 5]]);
    var _lsplit = function (s, sep, maxsplit) {
    	if (maxsplit == 0) {
    		return [s];
    	}
    	var py_split = s.py_split (sep);
    	if (!(maxsplit)) {
    		return py_split;
    	}
    	var ret = py_split.slice (0, maxsplit, 1);
    	if (len (ret) == len (py_split)) {
    		return ret;
    	}
    	ret.append (sep.join (py_split.__getslice__ (maxsplit, null, 1)));
    	return ret;
    };
    var _local_time_tuple = function (jd) {
    	var res = tuple ([jd.getFullYear (), jd.getMonth () + 1, jd.getDate (), jd.getHours (), jd.getMinutes (), jd.getSeconds (), (jd.getDay () > 0 ? jd.getDay () - 1 : 6), _day_of_year (jd, true), _daylight_in_effect (jd), jd.getMilliseconds ()]);
    	return res;
    };
    var _utc_time_tuple = function (jd) {
    	var res = tuple ([jd.getUTCFullYear (), jd.getUTCMonth () + 1, jd.getUTCDate (), jd.getUTCHours (), jd.getUTCMinutes (), jd.getUTCSeconds (), jd.getUTCDay () - 1, _day_of_year (jd, false), 0, jd.getUTCMilliseconds ()]);
    	return res;
    };
    var _day_of_year = function (jd, local) {
    	var day_offs = 0;
    	if (jd.getHours () + (jd.getTimezoneOffset () * 60) / 3600 < 0) {
    		var day_offs = -(1);
    	}
    	var was = jd.getTime ();
    	var cur = jd.setHours (23);
    	jd.setUTCDate (1);
    	jd.setUTCMonth (0);
    	jd.setUTCHours (0);
    	jd.setUTCMinutes (0);
    	jd.setUTCSeconds (0);
    	var res = round ((cur - jd) / 86400000);
    	if (!(local)) {
    		res += day_offs;
    	}
    	if (res == 0) {
    		var res = 365;
    		jd.setTime (jd.getTime () - 86400);
    		var last_year = jd.getUTCFullYear ();
    		if (_is_leap (last_year)) {
    			var res = 366;
    		}
    	}
    	jd.setTime (was);
    	return res;
    };
    var _is_leap = function (year) {
    	return __mod__ (year, 4) == 0 && (__mod__ (year, 100) != 0 || __mod__ (year, 400) == 0);
    };
    var __jan_jun_tz = function (t, func) {
    	var was = t.getTime ();
    	t.setDate (1);
    	var res = [];
    	for (var m of tuple ([0, 6])) {
    		t.setMonth (m);
    		if (!(func)) {
    			res.append (t.getTimezoneOffset ());
    		}
    		else {
    			res.append (func (t));
    		}
    	}
    	t.setTime (was);
    	return res;
    };
    var _daylight = function (t) {
    	var jj = __jan_jun_tz (t);
    	if (jj [0] != jj [1]) {
    		return 1;
    	}
    	return 0;
    };
    var _daylight_in_effect = function (t) {
    	var jj = __jan_jun_tz (t);
    	if (min (jj [0], jj [1]) == t.getTimezoneOffset ()) {
    		return 1;
    	}
    	return 0;
    };
    var _timezone = function (t) {
    	var jj = __jan_jun_tz (t);
    	return max (jj [0], jj [1]);
    };
    var __tzn = function (t) {
    	try {
    		return str (t).py_split ('(') [1].py_split (')') [0];
    	}
    	catch (__except0__) {
    		return 'n.a.';
    	}
    };
    var _tzname = function (t) {
    	var cn = __tzn (t);
    	var ret = [cn, cn];
    	var jj = __jan_jun_tz (t, __tzn);
    	var ind = 0;
    	if (!(_daylight_in_effect (t))) {
    		var ind = 1;
    	}
    	for (var i of jj) {
    		if (i != cn) {
    			ret [ind] = i;
    		}
    	}
    	return tuple (ret);
    };
    var altzone = __now.getTimezoneOffset ();
    if (!(_daylight_in_effect (__now))) {
    	var _jj = __jan_jun_tz (__now);
    	var altzone = (altzone == _jj [1] ? _jj [0] : _jj [1]);
    }
    var altzone = altzone * 60;
    var timezone = _timezone (__now) * 60;
    var daylight = _daylight (__now);
    var tzname = _tzname (__now);
    var time = function () {
    	return Date.now () / 1000;
    };
    var asctime = function (t) {
    	return strftime ('%a %b %d %H:%M:%S %Y', t);
    };
    var mktime = function (t) {
    	var d = new Date (t [0], t [1] - 1, t [2], t [3], t [4], t [5], 0);
    	return (d - 0) / 1000;
    };
    var ctime = function (seconds) {
    	if (!(seconds)) {
    		var seconds = time ();
    	}
    	return asctime (localtime (seconds));
    };
    var localtime = function (seconds) {
    	if (!(seconds)) {
    		var seconds = time ();
    	}
    	return gmtime (seconds, true);
    };
    var gmtime = function (seconds, localtime) {
    	if (!(seconds)) {
    		var seconds = time ();
    	}
    	var millis = seconds * 1000;
    	__date.setTime (millis);
    	if (localtime) {
    		var t = _local_time_tuple (__date);
    	}
    	else {
    		var t = _utc_time_tuple (__date);
    	}
    	return t.__getslice__ (0, 9, 1);
    };
    var strptime = function (string, format) {
    	if (!(format)) {
    		var format = '%a %b %d %H:%M:%S %Y';
    	}
    	var __left0__ = tuple ([string, format]);
    	var ts = __left0__ [0];
    	var fmt = __left0__ [1];
    	var get_next = function (fmt) {
    		var get_sep = function (fmt) {
    			var res = [];
    			if (!(fmt)) {
    				return tuple (['', '']);
    			}
    			for (var i = 0; i < len (fmt) - 1; i++) {
    				var c = fmt [i];
    				if (c == '%') {
    					break;
    				}
    				res.append (c);
    			}
    			return tuple ([''.join (res), fmt.__getslice__ (i, null, 1)]);
    		};
    		var __left0__ = tuple ([null, null, null]);
    		var d = __left0__ [0];
    		var sep = __left0__ [1];
    		var f = __left0__ [2];
    		if (fmt) {
    			if (fmt [0] == '%') {
    				var d = fmt [1];
    				var __left0__ = get_sep (fmt.__getslice__ (2, null, 1));
    				var sep = __left0__ [0];
    				var f = __left0__ [1];
    			}
    			else {
    				var __left0__ = get_sep (fmt);
    				var sep = __left0__ [0];
    				var f = __left0__ [1];
    			}
    		}
    		return tuple ([d, sep, f]);
    	};
    	var dir_val = dict ({});
    	while (ts) {
    		var __left0__ = get_next (fmt);
    		var d = __left0__ [0];
    		var sep = __left0__ [1];
    		var fmt = __left0__ [2];
    		if (sep == '') {
    			var lv = null;
    			if (d) {
    				var l = -(1);
    				if (d == 'Y') {
    					var l = 4;
    				}
    				else if (d == 'a') {
    					var l = len (__weekdays [0]);
    				}
    				else if (d == 'A') {
    					var l = len (__weekdays_long [0]);
    				}
    				else if (d == 'b') {
    					var l = len (__months [0]);
    				}
    				else if (__in__ (d, tuple (['d', 'm', 'H', 'M', 'S']))) {
    					var l = 2;
    				}
    				if (l > -(1)) {
    					var lv = [ts.__getslice__ (0, l, 1), ts.__getslice__ (l, null, 1)];
    				}
    			}
    			if (!(lv)) {
    				var lv = [ts, ''];
    			}
    		}
    		else {
    			var lv = _lsplit (ts, sep, 1);
    		}
    		if (d == null) {
    			var ts = lv [1];
    			continue;
    		}
    		var __left0__ = tuple ([lv [1], lv [0]]);
    		var ts = __left0__ [0];
    		dir_val [d] = __left0__ [1];
    		if (fmt == '') {
    			break;
    		}
    	}
    	var t = [1900, 1, 1, 0, 0, 0, 0, 1, -(1)];
    	var ignore_keys = [];
    	var have_weekday = false;
    	for (var [d, v] of dir_val.py_items ()) {
    		if (__in__ (d, ignore_keys)) {
    			continue;
    		}
    		if (d == 'p') {
    			continue;
    		}
    		if (__in__ (d, __lu.py_keys ())) {
    			t [__lu [d]] = int (v);
    			continue;
    		}
    		if (__in__ (d, tuple (['a', 'A', 'b', 'B']))) {
    			var v = v.lower ();
    		}
    		if (d == 'm') {
    			ignore_keys.append ('b');
    			ignore_keys.append ('B');
    		}
    		if (d == 'a') {
    			if (!(__in__ (v, __weekdays))) {
    				var __except0__ = ValueError ('Weekday unknown in your locale');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    			var have_weekday = true;
    			t [6] = __weekdays.index (v);
    		}
    		else if (d == 'A') {
    			if (!(__in__ (v, __weekdays_long))) {
    				var __except0__ = ValueError ('Weekday unknown in your locale');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    			var have_weekday = true;
    			t [6] = __weekdays_long.index (v);
    		}
    		else if (d == 'b') {
    			if (!(__in__ (v, __months))) {
    				var __except0__ = ValueError ('Month unknown in your locale');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    			t [1] = __months.index (v) + 1;
    		}
    		else if (d == 'B') {
    			if (!(__in__ (v, __months_long))) {
    				var __except0__ = ValueError ('Month unknown in your locale');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    			t [1] = __months_long.index (v) + 1;
    		}
    		else if (d == 'I') {
    			var ampm = dir_val ['p'] || 'am';
    			var ampm = ampm.lower ();
    			var v = int (v);
    			if (v == 12) {
    				var v = 0;
    			}
    			else if (v > 12) {
    				var __except0__ = ValueError (((("time data '" + string) + "' does not match format '") + format) + "'");
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    			if (ampm == 'pm') {
    				v += 12;
    			}
    			t [__lu ['H']] = v;
    		}
    		else if (d == 'y') {
    			t [0] = 2000 + int (v);
    		}
    		else if (d == 'Z') {
    			if (__in__ (v.lower (), ['gmt', 'utc'])) {
    				t [-(1)] = 0;
    			}
    		}
    	}
    	var __date = new Date (0);
    	__date.setUTCFullYear (t [0]);
    	__date.setUTCMonth (t [1] - 1);
    	__date.setUTCDate (t [2]);
    	__date.setUTCHours (t [3]);
    	t [7] = _day_of_year (__date, true);
    	if (!(have_weekday)) {
    		t [6] = __date.getUTCDay () - 1;
    	}
    	return t;
    };
    var strftime = function (format, t) {
    	var zf2 = function (v) {
    		if (v < 10) {
    			return '0' + str (v);
    		}
    		return v;
    	};
    	if (!(t)) {
    		var t = localtime ();
    	}
    	var f = format;
    	for (var d of __lu.py_keys ()) {
    		var k = '%' + d;
    		if (!(__in__ (k, f))) {
    			continue;
    		}
    		var v = zf2 (t [__lu [d]]);
    		var f = f.py_replace (k, v);
    	}
    	for (var [d, l, pos] of tuple ([tuple (['b', __months, 1]), tuple (['B', __months_long, 1]), tuple (['a', __weekdays, 6]), tuple (['A', __weekdays_long, 6])])) {
    		var p = t [pos];
    		if (pos == 1) {
    			var p = p - 1;
    		}
    		var v = l [p].capitalize ();
    		var f = f.py_replace ('%' + d, v);
    	}
    	if (__in__ ('%p', f)) {
    		if (t [3] > 11) {
    			var ap = 'PM';
    		}
    		else {
    			var ap = 'AM';
    		}
    		var f = f.py_replace ('%p', ap);
    	}
    	if (__in__ ('%y', f)) {
    		var f = f.py_replace ('%y', str (t [0]).__getslice__ (-(2), null, 1));
    	}
    	if (__in__ ('%I', f)) {
    		var v = t [3];
    		if (v == 0) {
    			var v = 12;
    		}
    		else if (v > 12) {
    			var v = v - 12;
    		}
    		var f = f.py_replace ('%I', zf2 (v));
    	}
    	return f;
    };

    var _time = /*#__PURE__*/Object.freeze({
        __proto__: null,
        __debugGetLanguage: __debugGetLanguage,
        __adapt__: __adapt__,
        __date: __date,
        __now: __now,
        __weekdays: __weekdays,
        __weekdays_long: __weekdays_long,
        get __d () { return __d; },
        __months: __months,
        __months_long: __months_long,
        __lu: __lu,
        _lsplit: _lsplit,
        _local_time_tuple: _local_time_tuple,
        _utc_time_tuple: _utc_time_tuple,
        _day_of_year: _day_of_year,
        _is_leap: _is_leap,
        __jan_jun_tz: __jan_jun_tz,
        _daylight: _daylight,
        _daylight_in_effect: _daylight_in_effect,
        _timezone: _timezone,
        __tzn: __tzn,
        _tzname: _tzname,
        get altzone () { return altzone; },
        timezone: timezone,
        daylight: daylight,
        tzname: tzname,
        time: time,
        asctime: asctime,
        mktime: mktime,
        ctime: ctime,
        localtime: localtime,
        gmtime: gmtime,
        strptime: strptime,
        strftime: strftime
    });

    // Transcrypt'ed from Python, 2020-10-23 21:39:43
    var __name__$4 = 'datetime';
    var zfill = function (s, c) {
    	var s = str (s);
    	if (len (s) < c) {
    		return __add__ (__mul__ ('0', __sub__ (c, __call__ (len, null, s))), s);
    	}
    	else {
    		return s;
    	}
    };
    var rjust = function (s, c) {
    	var s = str (s);
    	if (len (s) < c) {
    		return __add__ (__mul__ (' ', __sub__ (c, __call__ (len, null, s))), s);
    	}
    	else {
    		return s;
    	}
    };
    var _cmp = function (x, y) {
    	return (x == y ? 0 : (x > y ? 1 : -(1)));
    };
    var MINYEAR = 1;
    var MAXYEAR = 9999;
    var _MAXORDINAL = 3652059;
    var _DAYS_IN_MONTH = [-(1), 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var _DAYS_BEFORE_MONTH = [-(1)];
    var dbm = 0;
    for (var dim of _DAYS_IN_MONTH.__getslice__ (1, null, 1)) {
    	_DAYS_BEFORE_MONTH.append (dbm);
    	dbm += dim;
    }
    var _is_leap$1 = function (year) {
    	return __mod__ (year, 4) == 0 && (__mod__ (year, 100) != 0 || __mod__ (year, 400) == 0);
    };
    var _days_before_year = function (year) {
    	var y = year - 1;
    	return ((y * 365 + Math.floor (y / 4)) - Math.floor (y / 100)) + Math.floor (y / 400);
    };
    var _days_in_month = function (year, month) {
    	if (month == 2 && _is_leap$1 (year)) {
    		return 29;
    	}
    	return _DAYS_IN_MONTH [month];
    };
    var _days_before_month = function (year, month) {
    	return _DAYS_BEFORE_MONTH [month] + (month > 2 && _is_leap$1 (year));
    };
    var _ymd2ord = function (year, month, day) {
    	var dim = _days_in_month (year, month);
    	return (_days_before_year (year) + _days_before_month (year, month)) + day;
    };
    var _DI400Y = _days_before_year (401);
    var _DI100Y = _days_before_year (101);
    var _DI4Y = _days_before_year (5);
    var _ord2ymd = function (n) {
    	n -= 1;
    	var __left0__ = divmod (n, _DI400Y);
    	var n400 = __left0__ [0];
    	var n = __left0__ [1];
    	var year = n400 * 400 + 1;
    	var __left0__ = divmod (n, _DI100Y);
    	var n100 = __left0__ [0];
    	var n = __left0__ [1];
    	var __left0__ = divmod (n, _DI4Y);
    	var n4 = __left0__ [0];
    	var n = __left0__ [1];
    	var __left0__ = divmod (n, 365);
    	var n1 = __left0__ [0];
    	var n = __left0__ [1];
    	year += (n100 * 100 + n4 * 4) + n1;
    	if (n1 == 4 || n100 == 4) {
    		return tuple ([year - 1, 12, 31]);
    	}
    	var leapyear = n1 == 3 && (n4 != 24 || n100 == 3);
    	var month = n + 50 >> 5;
    	var preceding = _DAYS_BEFORE_MONTH [month] + (month > 2 && leapyear);
    	if (preceding > n) {
    		month -= 1;
    		preceding -= _DAYS_IN_MONTH [month] + (month == 2 && leapyear);
    	}
    	n -= preceding;
    	return tuple ([year, month, n + 1]);
    };
    var _MONTHNAMES = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var _DAYNAMES = [null, 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var _build_struct_time = function (y, m, d, hh, mm, ss, dstflag) {
    	var wday = __mod__ (_ymd2ord (y, m, d) + 6, 7);
    	var dnum = _days_before_month (y, m) + d;
    	return tuple ([y, m, d, hh, mm, ss, wday, dnum, dstflag]);
    };
    var _format_time = function (hh, mm, ss, us) {
    	var result = '{}:{}:{}'.format (zfill (hh, 2), zfill (mm, 2), zfill (ss, 2));
    	if (us) {
    		result += '.{}'.format (zfill (us, 6));
    	}
    	return result;
    };
    var _wrap_strftime = function (object, format, timetuple) {
    	var freplace = null;
    	var zreplace = null;
    	var Zreplace = null;
    	var newformat = [];
    	var __left0__ = tuple ([0, len (format)]);
    	var i = __left0__ [0];
    	var n = __left0__ [1];
    	while (i < n) {
    		var ch = format [i];
    		i += 1;
    		if (ch == '%') {
    			if (i < n) {
    				var ch = format [i];
    				i += 1;
    				if (ch == 'f') {
    					if (freplace === null) {
    						var freplace = '{}'.format (zfill (getattr (object, 'microsecond'), 6));
    					}
    					newformat.append (freplace);
    				}
    				else if (ch == 'z') {
    					if (zreplace === null) {
    						var zreplace = '';
    						if (hasattr (object, 'utcoffset')) {
    							var offset = object.utcoffset ();
    							if (offset !== null) {
    								var sign = '+';
    								if (offset.days < 0) {
    									var offset = -(offset);
    									var sign = '-';
    								}
    								var __left0__ = divmod (offset, timedelta (__kwargtrans__ ({hours: 1})));
    								var h = __left0__ [0];
    								var m = __left0__ [1];
    								var m = Math.floor (m / timedelta (__kwargtrans__ ({minutes: 1})));
    								var zreplace = '{}{}{}'.format (sign, zfill (h, 2), zfill (m, 2));
    							}
    						}
    					}
    					newformat.append (zreplace);
    				}
    				else if (ch == 'Z') {
    					if (Zreplace === null) {
    						var Zreplace = '';
    						if (hasattr (object, 'tzname')) {
    							var s = object.tzname ();
    							if (s !== null) {
    								var Zreplace = s.py_replace ('%', '%%');
    							}
    						}
    					}
    					newformat.append (Zreplace);
    				}
    				else {
    					newformat.append ('%');
    					newformat.append (ch);
    				}
    			}
    			else {
    				newformat.append ('%');
    			}
    		}
    		else {
    			newformat.append (ch);
    		}
    	}
    	var newformat = ''.join (newformat);
    	return strftime (newformat, timetuple);
    };
    var _check_tzname = function (py_name) {
    	if (py_name !== null && !(isinstance (py_name, str))) {
    		var __except0__ = py_TypeError ("tzinfo.tzname() must return None or string, not '{}'".format (py_typeof (py_name)));
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    };
    var _check_utc_offset = function (py_name, offset) {
    	if (offset === null) {
    		return ;
    	}
    	if (!(isinstance (offset, timedelta))) {
    		var __except0__ = py_TypeError ("tzinfo.{}() must return None or timedelta, not '{}'".format (py_name, py_typeof (offset)));
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    	if (offset.__mod__ (timedelta (__kwargtrans__ ({minutes: 1}))).microseconds || offset.microseconds) {
    		var __except0__ = ValueError ('tzinfo.{}() must return a whole number of minutes, got {}'.format (py_name, offset));
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    	if (!((__lt__ (__neg__ (__call__ (timedelta, null, 1)), offset) && __lt__ (offset, __call__ (timedelta, null, 1))))) {
    		var __except0__ = __call__ (ValueError, null, (function () {
    			var __accu0__ = '{}()={}, must be must be strictly between -timedelta(hours=24) and timedelta(hours=24)';
    			return __call__ (__accu0__.format, __accu0__, py_name, offset);
    		}) ());
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    };
    var _check_int_field = function (value) {
    	var _type = py_typeof (value);
    	if (_type == int) {
    		return value;
    	}
    	if (!(_type == float)) {
    		try {
    			var value = value.__int__ ();
    			try {
    				if (py_typeof (value) == int) {
    					return value;
    				}
    				var __except0__ = py_TypeError ('__int__ returned non-int (type {})'.format (py_typeof (value).__name__));
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    			catch (__except0__) {
    			}
    		}
    		catch (__except0__) {
    			if (isinstance (__except0__, AttributeError)) ;
    			else {
    				throw __except0__;
    			}
    		}
    		var __except0__ = py_TypeError ('an integer is required (got type {})'.format (py_typeof (value).__name__));
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    	var __except0__ = py_TypeError ('integer argument expected, got float');
    	__except0__.__cause__ = null;
    	throw __except0__;
    };
    var _check_date_fields = function (year, month, day) {
    	var year = _check_int_field (year);
    	var month = _check_int_field (month);
    	var day = _check_int_field (day);
    	if (!((MINYEAR <= year && year <= MAXYEAR))) {
    		var __except0__ = ValueError ('year must be in {}..{}'.format (MINYEAR, MAXYEAR), year);
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    	if (!((1 <= month && month <= 12))) {
    		var __except0__ = ValueError ('month must be in 1..12', month);
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    	var dim = _days_in_month (year, month);
    	if (!((1 <= day && day <= dim))) {
    		var __except0__ = ValueError ('day must be in 1..{}'.format (dim), day);
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    	return tuple ([year, month, day]);
    };
    var _check_time_fields = function (hour, minute, second, microsecond) {
    	var hour = _check_int_field (hour);
    	var minute = _check_int_field (minute);
    	var second = _check_int_field (second);
    	var microsecond = _check_int_field (microsecond);
    	if (!((0 <= hour && hour <= 23))) {
    		var __except0__ = ValueError ('hour must be in 0..23', hour);
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    	if (!((0 <= minute && minute <= 59))) {
    		var __except0__ = ValueError ('minute must be in 0..59', minute);
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    	if (!((0 <= second && second <= 59))) {
    		var __except0__ = ValueError ('second must be in 0..59', second);
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    	if (!((0 <= microsecond && microsecond <= 999999))) {
    		var __except0__ = ValueError ('microsecond must be in 0..999999', microsecond);
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    	return tuple ([hour, minute, second, microsecond]);
    };
    var _check_tzinfo_arg = function (tz) {
    	if (tz !== null && !(isinstance (tz, tzinfo))) {
    		var __except0__ = py_TypeError ('tzinfo argument must be None or of a tzinfo subclass');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    };
    var _cmperror = function (x, y) {
    	var __except0__ = py_TypeError ("can't compare '{}' to '{}'".format (py_typeof (x).__name__, py_typeof (y).__name__));
    	__except0__.__cause__ = null;
    	throw __except0__;
    };
    var _divide_and_round = function (a, b) {
    	var __left0__ = divmod (a, b);
    	var q = __left0__ [0];
    	var r = __left0__ [1];
    	r *= 2;
    	var greater_than_half = (b > 0 ? r > b : r < b);
    	if (greater_than_half || r == b && __mod__ (q, 2) == 1) {
    		q += 1;
    	}
    	return q;
    };
    var timedelta =  __class__ ('timedelta', [object], {
    	__module__: __name__$4,
    	get __init__ () {return __get__ (this, function (self, days, seconds, microseconds, milliseconds, minutes, hours, weeks) {
    		if (typeof days == 'undefined' || (days != null && days.hasOwnProperty ("__kwargtrans__"))) {			var days = 0;
    		}		if (typeof seconds == 'undefined' || (seconds != null && seconds.hasOwnProperty ("__kwargtrans__"))) {			var seconds = 0;
    		}		if (typeof microseconds == 'undefined' || (microseconds != null && microseconds.hasOwnProperty ("__kwargtrans__"))) {			var microseconds = 0;
    		}		if (typeof milliseconds == 'undefined' || (milliseconds != null && milliseconds.hasOwnProperty ("__kwargtrans__"))) {			var milliseconds = 0;
    		}		if (typeof minutes == 'undefined' || (minutes != null && minutes.hasOwnProperty ("__kwargtrans__"))) {			var minutes = 0;
    		}		if (typeof hours == 'undefined' || (hours != null && hours.hasOwnProperty ("__kwargtrans__"))) {			var hours = 0;
    		}		if (typeof weeks == 'undefined' || (weeks != null && weeks.hasOwnProperty ("__kwargtrans__"))) {			var weeks = 0;
    		}		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'days': var days = __allkwargs0__ [__attrib0__]; break;
    						case 'seconds': var seconds = __allkwargs0__ [__attrib0__]; break;
    						case 'microseconds': var microseconds = __allkwargs0__ [__attrib0__]; break;
    						case 'milliseconds': var milliseconds = __allkwargs0__ [__attrib0__]; break;
    						case 'minutes': var minutes = __allkwargs0__ [__attrib0__]; break;
    						case 'hours': var hours = __allkwargs0__ [__attrib0__]; break;
    						case 'weeks': var weeks = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		var __left0__ = 0;
    		var d = __left0__;
    		var s = __left0__;
    		var us = __left0__;
    		days += weeks * 7;
    		seconds += minutes * 60 + hours * 3600;
    		microseconds += milliseconds * 1000;
    		if (isinstance (days, float)) {
    			var __left0__ = modf (days);
    			var dayfrac = __left0__ [0];
    			var days = __left0__ [1];
    			var __left0__ = modf (dayfrac * (24.0 * 3600.0));
    			var daysecondsfrac = __left0__ [0];
    			var daysecondswhole = __left0__ [1];
    			var s = int (daysecondswhole);
    			var d = int (days);
    		}
    		else {
    			var daysecondsfrac = 0.0;
    			var d = days;
    		}
    		if (isinstance (seconds, float)) {
    			var __left0__ = modf (seconds);
    			var secondsfrac = __left0__ [0];
    			var seconds = __left0__ [1];
    			var seconds = int (seconds);
    			secondsfrac += daysecondsfrac;
    		}
    		else {
    			var secondsfrac = daysecondsfrac;
    		}
    		var __left0__ = divmod (seconds, 24 * 3600);
    		var days = __left0__ [0];
    		var seconds = __left0__ [1];
    		d += days;
    		s += int (seconds);
    		var usdouble = secondsfrac * 1000000.0;
    		if (isinstance (microseconds, float)) {
    			var microseconds = round (microseconds + usdouble);
    			var __left0__ = divmod (microseconds, 1000000);
    			var seconds = __left0__ [0];
    			var microseconds = __left0__ [1];
    			var __left0__ = divmod (seconds, 24 * 3600);
    			var days = __left0__ [0];
    			var seconds = __left0__ [1];
    			d += days;
    			s += seconds;
    		}
    		else {
    			var microseconds = int (microseconds);
    			var __left0__ = divmod (microseconds, 1000000);
    			var seconds = __left0__ [0];
    			var microseconds = __left0__ [1];
    			var __left0__ = divmod (seconds, 24 * 3600);
    			var days = __left0__ [0];
    			var seconds = __left0__ [1];
    			d += days;
    			s += seconds;
    			var microseconds = round (microseconds + usdouble);
    		}
    		var __left0__ = divmod (microseconds, 1000000);
    		var seconds = __left0__ [0];
    		var us = __left0__ [1];
    		s += seconds;
    		var __left0__ = divmod (s, 24 * 3600);
    		var days = __left0__ [0];
    		var s = __left0__ [1];
    		d += days;
    		if (abs (d) > 999999999) {
    			var __except0__ = OverflowError (__mod__ ('timedelta # of days is too large: %d', d));
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		self._days = d;
    		self._seconds = s;
    		self._microseconds = us;
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		if (self._microseconds) {
    			return 'datetime.timedelta(days={}, seconds={}, microseconds={})'.format (self._days, self._seconds, self._microseconds);
    		}
    		if (self._seconds) {
    			return 'datetime.timedelta(days={}, seconds={})'.format (self._days, self._seconds);
    		}
    		return 'datetime.timedelta(days={})'.format (self._days);
    	});},
    	get __str__ () {return __get__ (this, function (self) {
    		var __left0__ = divmod (self._seconds, 60);
    		var mm = __left0__ [0];
    		var ss = __left0__ [1];
    		var __left0__ = divmod (mm, 60);
    		var hh = __left0__ [0];
    		var mm = __left0__ [1];
    		var s = '{}:{}:{}'.format (hh, zfill (mm, 2), zfill (ss, 2));
    		if (self._days) {
    			var plural = function (n) {
    				return tuple ([n, abs (n) != 1 && 's' || '']);
    			};
    			var s = '{} day{}, '.format (plural (self._days)) + s;
    		}
    		if (self._microseconds) {
    			var s = s + '.{}'.format (zfill (self._microseconds, 6));
    		}
    		return s;
    	});},
    	get total_seconds () {return __get__ (this, function (self) {
    		return ((self.days * 86400 + self.seconds) * Math.pow (10, 6) + self.microseconds) / Math.pow (10, 6);
    	});},
    	get _get_days () {return __get__ (this, function (self) {
    		return self._days;
    	});},
    	get _get_seconds () {return __get__ (this, function (self) {
    		return self._seconds;
    	});},
    	get _get_microseconds () {return __get__ (this, function (self) {
    		return self._microseconds;
    	});},
    	get __add__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, timedelta)) {
    			return timedelta (self._days + other._days, self._seconds + other._seconds, self._microseconds + other._microseconds);
    		}
    		return NotImplemented;
    	});},
    	get __radd__ () {return __get__ (this, function (self, other) {
    		return self.__add__ (other);
    	});},
    	get __sub__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, timedelta)) {
    			return timedelta (self._days - other._days, self._seconds - other._seconds, self._microseconds - other._microseconds);
    		}
    		return NotImplemented;
    	});},
    	get __rsub__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, timedelta)) {
    			return -(self) + other;
    		}
    		return NotImplemented;
    	});},
    	get __neg__ () {return __get__ (this, function (self) {
    		return timedelta (-(self._days), -(self._seconds), -(self._microseconds));
    	});},
    	get __pos__ () {return __get__ (this, function (self) {
    		return self;
    	});},
    	get __abs__ () {return __get__ (this, function (self) {
    		if (self._days < 0) {
    			return __neg__ (self);
    		}
    		else {
    			return self;
    		}
    	});},
    	get __mul__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, int)) {
    			return timedelta (self._days * other, self._seconds * other, self._microseconds * other);
    		}
    		if (isinstance (other, float)) {
    			var usec = self._to_microseconds ();
    			var __left0__ = other.as_integer_ratio ();
    			var a = __left0__ [0];
    			var b = __left0__ [1];
    			return timedelta (0, 0, _divide_and_round (usec * a, b));
    		}
    		return NotImplemented;
    	});},
    	get __rmul__ () {return __get__ (this, function (self, other) {
    		return self.__mul__ (other);
    	});},
    	get _to_microseconds () {return __get__ (this, function (self) {
    		return (self._days * (24 * 3600) + self._seconds) * 1000000 + self._microseconds;
    	});},
    	get __floordiv__ () {return __get__ (this, function (self, other) {
    		if (!(isinstance (other, tuple ([int, timedelta])))) {
    			return NotImplemented;
    		}
    		var usec = self._to_microseconds ();
    		if (isinstance (other, timedelta)) {
    			return Math.floor (usec / other._to_microseconds ());
    		}
    		if (isinstance (other, int)) {
    			return timedelta (0, 0, Math.floor (usec / other));
    		}
    	});},
    	get __truediv__ () {return __get__ (this, function (self, other) {
    		if (!(isinstance (other, tuple ([int, float, timedelta])))) {
    			return NotImplemented;
    		}
    		var usec = self._to_microseconds ();
    		if (isinstance (other, timedelta)) {
    			return usec / other._to_microseconds ();
    		}
    		if (isinstance (other, int)) {
    			return timedelta (0, 0, _divide_and_round (usec, other));
    		}
    		if (isinstance (other, float)) {
    			var __left0__ = other.as_integer_ratio ();
    			var a = __left0__ [0];
    			var b = __left0__ [1];
    			return timedelta (0, 0, _divide_and_round (b * usec, a));
    		}
    	});},
    	get __mod__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, timedelta)) {
    			var r = __mod__ (self._to_microseconds (), other._to_microseconds ());
    			return timedelta (0, 0, r);
    		}
    		return NotImplemented;
    	});},
    	get __divmod__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, timedelta)) {
    			var __left0__ = divmod (self._to_microseconds (), other._to_microseconds ());
    			var q = __left0__ [0];
    			var r = __left0__ [1];
    			return tuple ([q, timedelta (0, 0, r)]);
    		}
    		return NotImplemented;
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, timedelta)) {
    			return self._cmp (other) == 0;
    		}
    		else {
    			return false;
    		}
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, timedelta)) {
    			return self._cmp (other) <= 0;
    		}
    		else {
    			_cmperror (self, other);
    		}
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, timedelta)) {
    			return self._cmp (other) < 0;
    		}
    		else {
    			_cmperror (self, other);
    		}
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, timedelta)) {
    			return self._cmp (other) >= 0;
    		}
    		else {
    			_cmperror (self, other);
    		}
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, timedelta)) {
    			return self._cmp (other) > 0;
    		}
    		else {
    			_cmperror (self, other);
    		}
    	});},
    	get _cmp () {return __get__ (this, function (self, other) {
    		return _cmp (self._to_microseconds (), other._to_microseconds ());
    	});},
    	get __bool__ () {return __get__ (this, function (self) {
    		return self._days != 0 || self._seconds != 0 || self._microseconds != 0;
    	});}
    });
    Object.defineProperty (timedelta, 'microseconds', property.call (timedelta, timedelta._get_microseconds));
    Object.defineProperty (timedelta, 'seconds', property.call (timedelta, timedelta._get_seconds));
    Object.defineProperty (timedelta, 'days', property.call (timedelta, timedelta._get_days));var _td_min = timedelta (-(999999999));
    var _td_max = timedelta (__kwargtrans__ ({days: 999999999, hours: 23, minutes: 59, seconds: 59, microseconds: 999999}));
    var _td_resolution = timedelta (__kwargtrans__ ({microseconds: 1}));
    Object.defineProperty (timedelta, 'min', {get: function () {return _td_min;}});
    Object.defineProperty (timedelta, 'max', {get: function () {return _td_max;}});
    Object.defineProperty (timedelta, 'resolution', {get: function () {return _td_resolution;}});
    var date =  __class__ ('date', [object], {
    	__module__: __name__$4,
    	get __init__ () {return __get__ (this, function (self, year, month, day) {
    		if (typeof month == 'undefined' || (month != null && month.hasOwnProperty ("__kwargtrans__"))) {			var month = null;
    		}		if (typeof day == 'undefined' || (day != null && day.hasOwnProperty ("__kwargtrans__"))) {			var day = null;
    		}		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'year': var year = __allkwargs0__ [__attrib0__]; break;
    						case 'month': var month = __allkwargs0__ [__attrib0__]; break;
    						case 'day': var day = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		var __left0__ = _check_date_fields (year, month, day);
    		var year = __left0__ [0];
    		var month = __left0__ [1];
    		var day = __left0__ [2];
    		self._year = year;
    		self._month = month;
    		self._day = day;
    	});},
    	get fromtimestamp () {return __getcm__ (this, function (cls, t) {
    		var __left0__ = localtime (t);
    		var y = __left0__ [0];
    		var m = __left0__ [1];
    		var d = __left0__ [2];
    		var hh = __left0__ [3];
    		var mm = __left0__ [4];
    		var ss = __left0__ [5];
    		var weekday = __left0__ [6];
    		var jday = __left0__ [7];
    		var dst = __left0__ [8];
    		return cls (y, m, d);
    	});},
    	get today () {return __getcm__ (this, function (cls) {
    		var t = time ();
    		return cls.fromtimestamp (t);
    	});},
    	get fromordinal () {return __getcm__ (this, function (cls, n) {
    		var __left0__ = _ord2ymd (n);
    		var y = __left0__ [0];
    		var m = __left0__ [1];
    		var d = __left0__ [2];
    		return cls (y, m, d);
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		return 'datetime.date({}, {}, {})'.format (self._year, self._month, self._day);
    	});},
    	get ctime () {return __get__ (this, function (self) {
    		var weekday = __mod__ (self.toordinal (), 7) || 7;
    		return '{} {} {} 00:00:00 {}'.format (_DAYNAMES [weekday], _MONTHNAMES [self._month], rjust (self._day, 2), zfill (self._year, 4));
    	});},
    	get strftime () {return __get__ (this, function (self, fmt) {
    		return _wrap_strftime (self, fmt, self.timetuple ());
    	});},
    	get __format__ () {return __get__ (this, function (self, fmt) {
    		if (!(isinstance (fmt, str))) {
    			var __except0__ = py_TypeError ('must be str, not {}'.format (py_typeof (fmt).__name__));
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		if (len (fmt) != 0) {
    			return self.strftime (fmt);
    		}
    		return str (self);
    	});},
    	get isoformat () {return __get__ (this, function (self) {
    		return '{}-{}-{}'.format (zfill (self._year, 4), zfill (self._month, 2), zfill (self._day, 2));
    	});},
    	get __str__ () {return __get__ (this, function (self) {
    		return self.isoformat ();
    	});},
    	get _get_year () {return __get__ (this, function (self) {
    		return self._year;
    	});},
    	get _get_month () {return __get__ (this, function (self) {
    		return self._month;
    	});},
    	get _get_day () {return __get__ (this, function (self) {
    		return self._day;
    	});},
    	get timetuple () {return __get__ (this, function (self) {
    		return _build_struct_time (self._year, self._month, self._day, 0, 0, 0, -(1));
    	});},
    	get toordinal () {return __get__ (this, function (self) {
    		return _ymd2ord (self._year, self._month, self._day);
    	});},
    	get py_replace () {return __get__ (this, function (self, year, month, day) {
    		if (typeof year == 'undefined' || (year != null && year.hasOwnProperty ("__kwargtrans__"))) {			var year = null;
    		}		if (typeof month == 'undefined' || (month != null && month.hasOwnProperty ("__kwargtrans__"))) {			var month = null;
    		}		if (typeof day == 'undefined' || (day != null && day.hasOwnProperty ("__kwargtrans__"))) {			var day = null;
    		}		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'year': var year = __allkwargs0__ [__attrib0__]; break;
    						case 'month': var month = __allkwargs0__ [__attrib0__]; break;
    						case 'day': var day = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		if (year === null) {
    			var year = self._year;
    		}
    		if (month === null) {
    			var month = self._month;
    		}
    		if (day === null) {
    			var day = self._day;
    		}
    		return date (year, month, day);
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, date)) {
    			return self._cmp (other) == 0;
    		}
    		return NotImplemented;
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, date)) {
    			return self._cmp (other) <= 0;
    		}
    		return NotImplemented;
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, date)) {
    			return self._cmp (other) < 0;
    		}
    		return NotImplemented;
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, date)) {
    			return self._cmp (other) >= 0;
    		}
    		return NotImplemented;
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, date)) {
    			return self._cmp (other) > 0;
    		}
    		return NotImplemented;
    	});},
    	get _cmp () {return __get__ (this, function (self, other) {
    		var __left0__ = tuple ([self._year, self._month, self._day]);
    		var y = __left0__ [0];
    		var m = __left0__ [1];
    		var d = __left0__ [2];
    		var __left0__ = tuple ([other._year, other._month, other._day]);
    		var y2 = __left0__ [0];
    		var m2 = __left0__ [1];
    		var d2 = __left0__ [2];
    		return _cmp ('{}{}{}'.format (zfill (y, 4), zfill (m, 2), zfill (d, 2)), '{}{}{}'.format (zfill (y2, 4), zfill (m2, 2), zfill (d2, 2)));
    	});},
    	get __add__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, timedelta)) {
    			var o = self.toordinal () + other.days;
    			if ((0 < o && o <= _MAXORDINAL)) {
    				return date.fromordinal (o);
    			}
    			var __except0__ = OverflowError ('result out of range');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		return NotImplemented;
    	});},
    	get __radd__ () {return __get__ (this, function (self, other) {
    		return self.__add__ (other);
    	});},
    	get __sub__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, timedelta)) {
    			return __add__ (self, __call__ (timedelta, null, __neg__ (other.days)));
    		}
    		if (isinstance (other, date)) {
    			var days1 = self.toordinal ();
    			var days2 = other.toordinal ();
    			return __call__ (timedelta, null, __sub__ (days1, days2));
    		}
    		return NotImplemented;
    	});},
    	get weekday () {return __get__ (this, function (self) {
    		return __mod__ (self.toordinal () + 6, 7);
    	});},
    	get isoweekday () {return __get__ (this, function (self) {
    		return __mod__ (self.toordinal (), 7) || 7;
    	});},
    	get isocalendar () {return __get__ (this, function (self) {
    		var year = self._year;
    		var week1monday = _isoweek1monday (year);
    		var today = _ymd2ord (self._year, self._month, self._day);
    		var __left0__ = divmod (today - week1monday, 7);
    		var week = __left0__ [0];
    		var day = __left0__ [1];
    		if (week < 0) {
    			year -= 1;
    			var week1monday = _isoweek1monday (year);
    			var __left0__ = divmod (today - week1monday, 7);
    			var week = __left0__ [0];
    			var day = __left0__ [1];
    		}
    		else if (week >= 52) {
    			if (today >= _isoweek1monday (year + 1)) {
    				year += 1;
    				var week = 0;
    			}
    		}
    		return tuple ([year, week + 1, day + 1]);
    	});},
    	resolution: timedelta (__kwargtrans__ ({days: 1}))
    });
    Object.defineProperty (date, 'day', property.call (date, date._get_day));
    Object.defineProperty (date, 'month', property.call (date, date._get_month));
    Object.defineProperty (date, 'year', property.call (date, date._get_year));var _date_class = date;
    var _d_min = date (1, 1, 1);
    var _d_max = date (9999, 12, 31);
    Object.defineProperty (date, 'min', {get: function () {return _d_min;}});
    Object.defineProperty (date, 'max', {get: function () {return _d_max;}});
    var tzinfo =  __class__ ('tzinfo', [object], {
    	__module__: __name__$4,
    	get tzname () {return __get__ (this, function (self, dt) {
    		var __except0__ = NotImplementedError ('tzinfo subclass must override tzname()');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get utcoffset () {return __get__ (this, function (self, dt) {
    		var __except0__ = NotImplementedError ('tzinfo subclass must override utcoffset()');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get dst () {return __get__ (this, function (self, dt) {
    		var __except0__ = NotImplementedError ('tzinfo subclass must override dst()');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get fromutc () {return __get__ (this, function (self, dt) {
    		if (!(isinstance (dt, datetime))) {
    			var __except0__ = py_TypeError ('fromutc() requires a datetime argument');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		if (dt.tzinfo !== self) {
    			var __except0__ = ValueError ('dt.tzinfo is not self');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		var dtoff = dt.utcoffset ();
    		if (dtoff === null) {
    			var __except0__ = ValueError ('fromutc() requires a non-None utcoffset() result');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		var dtdst = dt.dst ();
    		if (dtdst === null) {
    			var __except0__ = ValueError ('fromutc() requires a non-None dst() result');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		var delta = dtoff - dtdst;
    		if (delta) {
    			dt += delta;
    			var dtdst = dt.dst ();
    			if (dtdst === null) {
    				var __except0__ = ValueError ('fromutc(): dt.dst gave inconsistent results; cannot convert');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    		}
    		return dt + dtdst;
    	});}
    });
    var time$1 =  __class__ ('time', [object], {
    	__module__: __name__$4,
    	get __init__ () {return __get__ (this, function (self, hour, minute, second, microsecond, tzinfo) {
    		if (typeof hour == 'undefined' || (hour != null && hour.hasOwnProperty ("__kwargtrans__"))) {			var hour = 0;
    		}		if (typeof minute == 'undefined' || (minute != null && minute.hasOwnProperty ("__kwargtrans__"))) {			var minute = 0;
    		}		if (typeof second == 'undefined' || (second != null && second.hasOwnProperty ("__kwargtrans__"))) {			var second = 0;
    		}		if (typeof microsecond == 'undefined' || (microsecond != null && microsecond.hasOwnProperty ("__kwargtrans__"))) {			var microsecond = 0;
    		}		if (typeof tzinfo == 'undefined' || (tzinfo != null && tzinfo.hasOwnProperty ("__kwargtrans__"))) {			var tzinfo = null;
    		}		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'hour': var hour = __allkwargs0__ [__attrib0__]; break;
    						case 'minute': var minute = __allkwargs0__ [__attrib0__]; break;
    						case 'second': var second = __allkwargs0__ [__attrib0__]; break;
    						case 'microsecond': var microsecond = __allkwargs0__ [__attrib0__]; break;
    						case 'tzinfo': var tzinfo = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		var __left0__ = _check_time_fields (hour, minute, second, microsecond);
    		var hour = __left0__ [0];
    		var minute = __left0__ [1];
    		var second = __left0__ [2];
    		var microsecond = __left0__ [3];
    		_check_tzinfo_arg (tzinfo);
    		self._hour = hour;
    		self._minute = minute;
    		self._second = second;
    		self._microsecond = microsecond;
    		self._tzinfo = tzinfo;
    	});},
    	get _get_hour () {return __get__ (this, function (self) {
    		return self._hour;
    	});},
    	get _get_minute () {return __get__ (this, function (self) {
    		return self._minute;
    	});},
    	get _get_second () {return __get__ (this, function (self) {
    		return self._second;
    	});},
    	get _get_microsecond () {return __get__ (this, function (self) {
    		return self._microsecond;
    	});},
    	get _get_tzinfo () {return __get__ (this, function (self) {
    		return self._tzinfo;
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, time$1)) {
    			return self._cmp (other, __kwargtrans__ ({allow_mixed: true})) == 0;
    		}
    		else {
    			return false;
    		}
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, time$1)) {
    			return self._cmp (other) <= 0;
    		}
    		else {
    			_cmperror (self, other);
    		}
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, time$1)) {
    			return self._cmp (other) < 0;
    		}
    		else {
    			_cmperror (self, other);
    		}
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, time$1)) {
    			return self._cmp (other) >= 0;
    		}
    		else {
    			_cmperror (self, other);
    		}
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, time$1)) {
    			return self._cmp (other) > 0;
    		}
    		else {
    			_cmperror (self, other);
    		}
    	});},
    	get _cmp () {return __get__ (this, function (self, other, allow_mixed) {
    		if (typeof allow_mixed == 'undefined' || (allow_mixed != null && allow_mixed.hasOwnProperty ("__kwargtrans__"))) {			var allow_mixed = false;
    		}		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
    						case 'allow_mixed': var allow_mixed = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		var mytz = self._tzinfo;
    		var ottz = other._tzinfo;
    		var __left0__ = null;
    		var myoff = __left0__;
    		var otoff = __left0__;
    		if (mytz === ottz) {
    			var base_compare = true;
    		}
    		else {
    			var myoff = self.utcoffset ();
    			var otoff = other.utcoffset ();
    			var base_compare = myoff == otoff;
    		}
    		if (base_compare) {
    			return _cmp (tuple ([self._hour, self._minute, self._second, self._microsecond]), tuple ([other._hour, other._minute, other._second, other._microsecond]));
    		}
    		if (myoff === null || otoff === null) {
    			if (allow_mixed) {
    				return 2;
    			}
    			else {
    				var __except0__ = py_TypeError ('cannot compare naive and aware times');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    		}
    		var myhhmm = __sub__ (__add__ (__mul__ (self._hour, 60), self._minute), __floordiv__ (myoff, __call__ (timedelta, null, __kwargtrans__ ({minutes: 1}))));
    		var othhmm = __sub__ (__add__ (__mul__ (other._hour, 60), other._minute), __floordiv__ (otoff, __call__ (timedelta, null, __kwargtrans__ ({minutes: 1}))));
    		return _cmp (tuple ([myhhmm, self._second, self._microsecond]), tuple ([othhmm, other._second, other._microsecond]));
    	});},
    	get _tzstr () {return __get__ (this, function (self, sep) {
    		if (typeof sep == 'undefined' || (sep != null && sep.hasOwnProperty ("__kwargtrans__"))) {			var sep = ':';
    		}		var off = self.utcoffset ();
    		if (off !== null) {
    			if (off.days < 0) {
    				var sign = '-';
    				var off = -(off);
    			}
    			else {
    				var sign = '+';
    			}
    			var __left0__ = divmod (off, timedelta (__kwargtrans__ ({hours: 1})));
    			var hh = __left0__ [0];
    			var mm = __left0__ [1];
    			var mm = Math.floor (mm / timedelta (__kwargtrans__ ({minutes: 1})));
    			var off = '{}{}{}{}'.format (sign, zfill (hh, 2), sep, zfill (mm, 2));
    		}
    		return off;
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		if (self._microsecond != 0) {
    			var s = ', {}, {}'.format (self._second, self._microsecond);
    		}
    		else if (self._second != 0) {
    			var s = ', {}'.format (self._second);
    		}
    		else {
    			var s = '';
    		}
    		var s = 'datetime.time({}, {}{})'.format (self._hour, self._minute, s);
    		if (self._tzinfo !== null) {
    			var s = (s.__getslice__ (0, len (s) - 1, 1) + ', tzinfo={}'.format (self._tzinfo.__repr__ ())) + ')';
    		}
    		return s;
    	});},
    	get isoformat () {return __get__ (this, function (self) {
    		var s = _format_time (self._hour, self._minute, self._second, self._microsecond);
    		var tz = self._tzstr ();
    		if (tz) {
    			s += tz;
    		}
    		return s;
    	});},
    	get __str__ () {return __get__ (this, function (self) {
    		return self.isoformat ();
    	});},
    	get strftime () {return __get__ (this, function (self, fmt) {
    		var timetuple = tuple ([1900, 1, 1, self._hour, self._minute, self._second, 0, 1, -(1)]);
    		return _wrap_strftime (self, fmt, timetuple);
    	});},
    	get __format__ () {return __get__ (this, function (self, fmt) {
    		if (!(isinstance (fmt, str))) {
    			var __except0__ = py_TypeError (__mod__ ('must be str, not %s', py_typeof (fmt).__name__));
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		if (len (fmt) != 0) {
    			return self.strftime (fmt);
    		}
    		return str (self);
    	});},
    	get utcoffset () {return __get__ (this, function (self) {
    		if (self._tzinfo === null) {
    			return null;
    		}
    		var offset = self._tzinfo.utcoffset (null);
    		_check_utc_offset ('utcoffset', offset);
    		return offset;
    	});},
    	get tzname () {return __get__ (this, function (self) {
    		if (self._tzinfo === null) {
    			return null;
    		}
    		var py_name = self._tzinfo.tzname (null);
    		_check_tzname (py_name);
    		return py_name;
    	});},
    	get dst () {return __get__ (this, function (self) {
    		if (self._tzinfo === null) {
    			return null;
    		}
    		var offset = self._tzinfo.dst (null);
    		_check_utc_offset ('dst', offset);
    		return offset;
    	});},
    	get py_replace () {return __get__ (this, function (self, hour, minute, second, microsecond, tzinfo) {
    		if (typeof hour == 'undefined' || (hour != null && hour.hasOwnProperty ("__kwargtrans__"))) {			var hour = null;
    		}		if (typeof minute == 'undefined' || (minute != null && minute.hasOwnProperty ("__kwargtrans__"))) {			var minute = null;
    		}		if (typeof second == 'undefined' || (second != null && second.hasOwnProperty ("__kwargtrans__"))) {			var second = null;
    		}		if (typeof microsecond == 'undefined' || (microsecond != null && microsecond.hasOwnProperty ("__kwargtrans__"))) {			var microsecond = null;
    		}		if (typeof tzinfo == 'undefined' || (tzinfo != null && tzinfo.hasOwnProperty ("__kwargtrans__"))) {			var tzinfo = true;
    		}		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'hour': var hour = __allkwargs0__ [__attrib0__]; break;
    						case 'minute': var minute = __allkwargs0__ [__attrib0__]; break;
    						case 'second': var second = __allkwargs0__ [__attrib0__]; break;
    						case 'microsecond': var microsecond = __allkwargs0__ [__attrib0__]; break;
    						case 'tzinfo': var tzinfo = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		if (hour === null) {
    			var hour = self.hour;
    		}
    		if (minute === null) {
    			var minute = self.minute;
    		}
    		if (second === null) {
    			var second = self.second;
    		}
    		if (microsecond === null) {
    			var microsecond = self.microsecond;
    		}
    		if (tzinfo === true) {
    			var tzinfo = self.tzinfo;
    		}
    		return time$1 (hour, minute, second, microsecond, tzinfo);
    	});},
    	resolution: timedelta (__kwargtrans__ ({microseconds: 1}))
    });
    Object.defineProperty (time$1, 'tzinfo', property.call (time$1, time$1._get_tzinfo));
    Object.defineProperty (time$1, 'microsecond', property.call (time$1, time$1._get_microsecond));
    Object.defineProperty (time$1, 'second', property.call (time$1, time$1._get_second));
    Object.defineProperty (time$1, 'minute', property.call (time$1, time$1._get_minute));
    Object.defineProperty (time$1, 'hour', property.call (time$1, time$1._get_hour));var _time_class = time$1;
    var _tm_min = time$1 (0, 0, 0);
    var _tm_max = time$1 (23, 59, 59, 999999);
    Object.defineProperty (time$1, 'min', {get: function () {return _tm_min;}});
    Object.defineProperty (time$1, 'max', {get: function () {return _tm_max;}});
    var datetime =  __class__ ('datetime', [date], {
    	__module__: __name__$4,
    	get __init__ () {return __get__ (this, function (self, year, month, day, hour, minute, second, microsecond, tzinfo) {
    		if (typeof month == 'undefined' || (month != null && month.hasOwnProperty ("__kwargtrans__"))) {			var month = null;
    		}		if (typeof day == 'undefined' || (day != null && day.hasOwnProperty ("__kwargtrans__"))) {			var day = null;
    		}		if (typeof hour == 'undefined' || (hour != null && hour.hasOwnProperty ("__kwargtrans__"))) {			var hour = 0;
    		}		if (typeof minute == 'undefined' || (minute != null && minute.hasOwnProperty ("__kwargtrans__"))) {			var minute = 0;
    		}		if (typeof second == 'undefined' || (second != null && second.hasOwnProperty ("__kwargtrans__"))) {			var second = 0;
    		}		if (typeof microsecond == 'undefined' || (microsecond != null && microsecond.hasOwnProperty ("__kwargtrans__"))) {			var microsecond = 0;
    		}		if (typeof tzinfo == 'undefined' || (tzinfo != null && tzinfo.hasOwnProperty ("__kwargtrans__"))) {			var tzinfo = null;
    		}		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'year': var year = __allkwargs0__ [__attrib0__]; break;
    						case 'month': var month = __allkwargs0__ [__attrib0__]; break;
    						case 'day': var day = __allkwargs0__ [__attrib0__]; break;
    						case 'hour': var hour = __allkwargs0__ [__attrib0__]; break;
    						case 'minute': var minute = __allkwargs0__ [__attrib0__]; break;
    						case 'second': var second = __allkwargs0__ [__attrib0__]; break;
    						case 'microsecond': var microsecond = __allkwargs0__ [__attrib0__]; break;
    						case 'tzinfo': var tzinfo = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		var __left0__ = _check_date_fields (year, month, day);
    		var year = __left0__ [0];
    		var month = __left0__ [1];
    		var day = __left0__ [2];
    		var __left0__ = _check_time_fields (hour, minute, second, microsecond);
    		var hour = __left0__ [0];
    		var minute = __left0__ [1];
    		var second = __left0__ [2];
    		var microsecond = __left0__ [3];
    		_check_tzinfo_arg (tzinfo);
    		self._year = year;
    		self._month = month;
    		self._day = day;
    		self._hour = hour;
    		self._minute = minute;
    		self._second = second;
    		self._microsecond = microsecond;
    		self._tzinfo = tzinfo;
    	});},
    	get _get_hour () {return __get__ (this, function (self) {
    		return self._hour;
    	});},
    	get _get_minute () {return __get__ (this, function (self) {
    		return self._minute;
    	});},
    	get _get_second () {return __get__ (this, function (self) {
    		return self._second;
    	});},
    	get _get_microsecond () {return __get__ (this, function (self) {
    		return self._microsecond;
    	});},
    	get _get_tzinfo () {return __get__ (this, function (self) {
    		return self._tzinfo;
    	});},
    	get _fromtimestamp () {return __getcm__ (this, function (cls, t, utc, tz) {
    		var __left0__ = modf (t);
    		var frac = __left0__ [0];
    		var t = __left0__ [1];
    		var us = round (frac * 1000000.0);
    		if (us >= 1000000) {
    			t += 1;
    			us -= 1000000;
    		}
    		else if (us < 0) {
    			t -= 1;
    			us += 1000000;
    		}
    		var converter = (utc ? gmtime : localtime);
    		var __left0__ = converter (t);
    		var y = __left0__ [0];
    		var m = __left0__ [1];
    		var d = __left0__ [2];
    		var hh = __left0__ [3];
    		var mm = __left0__ [4];
    		var ss = __left0__ [5];
    		var weekday = __left0__ [6];
    		var jday = __left0__ [7];
    		var dst = __left0__ [8];
    		var ss = min (ss, 59);
    		return cls (y, m, d, hh, mm, ss, us, tz);
    	});},
    	get fromtimestamp () {return __getcm__ (this, function (cls, t, tz) {
    		if (typeof tz == 'undefined' || (tz != null && tz.hasOwnProperty ("__kwargtrans__"))) {			var tz = null;
    		}		_check_tzinfo_arg (tz);
    		var result = cls._fromtimestamp (t, tz !== null, tz);
    		if (tz !== null) {
    			var result = tz.fromutc (result);
    		}
    		return result;
    	});},
    	get utcfromtimestamp () {return __getcm__ (this, function (cls, t) {
    		return cls._fromtimestamp (t, true, null);
    	});},
    	get now () {return __getcm__ (this, function (cls, tz) {
    		if (typeof tz == 'undefined' || (tz != null && tz.hasOwnProperty ("__kwargtrans__"))) {			var tz = null;
    		}		var t = time ();
    		return cls.fromtimestamp (t, tz);
    	});},
    	get utcnow () {return __getcm__ (this, function (cls) {
    		var t = time ();
    		return cls.utcfromtimestamp (t);
    	});},
    	get combine () {return __getcm__ (this, function (cls, date, time) {
    		if (!(isinstance (date, _date_class))) {
    			var __except0__ = py_TypeError ('date argument must be a date instance');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		if (!(isinstance (time, _time_class))) {
    			var __except0__ = py_TypeError ('time argument must be a time instance');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		return cls (date.year, date.month, date.day, time.hour, time.minute, time.second, time.microsecond, time.tzinfo);
    	});},
    	get timetuple () {return __get__ (this, function (self) {
    		var dst = self.dst ();
    		if (dst === null) {
    			var dst = -(1);
    		}
    		else if (dst) {
    			var dst = 1;
    		}
    		else {
    			var dst = 0;
    		}
    		return _build_struct_time (self.year, self.month, self.day, self.hour, self.minute, self.second, dst);
    	});},
    	get timestamp () {return __get__ (this, function (self) {
    		if (self._tzinfo === null) {
    			return mktime (tuple ([self.year, self.month, self.day, self.hour, self.minute, self.second, -(1), -(1), -(1)])) + self.microsecond / 1000000.0;
    		}
    		else {
    			return (function () {
    				var __accu0__ = __sub__ (self, _EPOCH);
    				return __call__ (__accu0__.total_seconds, __accu0__);
    			}) ();
    		}
    	});},
    	get utctimetuple () {return __get__ (this, function (self) {
    		var offset = self.utcoffset ();
    		if (offset) {
    			var self = __call__ (__isub__, null, self, offset);
    		}
    		var __left0__ = tuple ([self.year, self.month, self.day]);
    		var y = __left0__ [0];
    		var m = __left0__ [1];
    		var d = __left0__ [2];
    		var __left0__ = tuple ([self.hour, self.minute, self.second]);
    		var hh = __left0__ [0];
    		var mm = __left0__ [1];
    		var ss = __left0__ [2];
    		return _build_struct_time (y, m, d, hh, mm, ss, 0);
    	});},
    	get date () {return __get__ (this, function (self) {
    		return date (self._year, self._month, self._day);
    	});},
    	get time () {return __get__ (this, function (self) {
    		return time$1 (self.hour, self.minute, self.second, self.microsecond);
    	});},
    	get timetz () {return __get__ (this, function (self) {
    		return time$1 (self.hour, self.minute, self.second, self.microsecond, self._tzinfo);
    	});},
    	get py_replace () {return __get__ (this, function (self, year, month, day, hour, minute, second, microsecond, tzinfo) {
    		if (typeof year == 'undefined' || (year != null && year.hasOwnProperty ("__kwargtrans__"))) {			var year = null;
    		}		if (typeof month == 'undefined' || (month != null && month.hasOwnProperty ("__kwargtrans__"))) {			var month = null;
    		}		if (typeof day == 'undefined' || (day != null && day.hasOwnProperty ("__kwargtrans__"))) {			var day = null;
    		}		if (typeof hour == 'undefined' || (hour != null && hour.hasOwnProperty ("__kwargtrans__"))) {			var hour = null;
    		}		if (typeof minute == 'undefined' || (minute != null && minute.hasOwnProperty ("__kwargtrans__"))) {			var minute = null;
    		}		if (typeof second == 'undefined' || (second != null && second.hasOwnProperty ("__kwargtrans__"))) {			var second = null;
    		}		if (typeof microsecond == 'undefined' || (microsecond != null && microsecond.hasOwnProperty ("__kwargtrans__"))) {			var microsecond = null;
    		}		if (typeof tzinfo == 'undefined' || (tzinfo != null && tzinfo.hasOwnProperty ("__kwargtrans__"))) {			var tzinfo = true;
    		}		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'year': var year = __allkwargs0__ [__attrib0__]; break;
    						case 'month': var month = __allkwargs0__ [__attrib0__]; break;
    						case 'day': var day = __allkwargs0__ [__attrib0__]; break;
    						case 'hour': var hour = __allkwargs0__ [__attrib0__]; break;
    						case 'minute': var minute = __allkwargs0__ [__attrib0__]; break;
    						case 'second': var second = __allkwargs0__ [__attrib0__]; break;
    						case 'microsecond': var microsecond = __allkwargs0__ [__attrib0__]; break;
    						case 'tzinfo': var tzinfo = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		if (year === null) {
    			var year = self.year;
    		}
    		if (month === null) {
    			var month = self.month;
    		}
    		if (day === null) {
    			var day = self.day;
    		}
    		if (hour === null) {
    			var hour = self.hour;
    		}
    		if (minute === null) {
    			var minute = self.minute;
    		}
    		if (second === null) {
    			var second = self.second;
    		}
    		if (microsecond === null) {
    			var microsecond = self.microsecond;
    		}
    		if (tzinfo === true) {
    			var tzinfo = self.tzinfo;
    		}
    		return datetime (year, month, day, hour, minute, second, microsecond, tzinfo);
    	});},
    	get astimezone () {return __get__ (this, function (self, tz) {
    		if (typeof tz == 'undefined' || (tz != null && tz.hasOwnProperty ("__kwargtrans__"))) {			var tz = null;
    		}		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'tz': var tz = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		if (tz === null) {
    			if (self.tzinfo === null) {
    				var __except0__ = ValueError ('astimezone() requires an aware datetime');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    			var ts = __floordiv__ ((__sub__ (self, _EPOCH)), __call__ (timedelta, null, __kwargtrans__ ({seconds: 1})));
    			var localtm = localtime (ts);
    			var local = datetime (...localtm.__getslice__ (0, 6, 1));
    			if (len (localtm) > 9) {
    				var gmtoff = localtm [10];
    				var zone = localtm [9];
    				var tz = timezone$1 (timedelta (__kwargtrans__ ({seconds: gmtoff})), zone);
    			}
    			else {
    				var delta = __sub__ (local, __call__ (datetime, null, ...__getslice__ ((function () {
    					var __accu0__ = _time;
    					return __call__ (__accu0__.gmtime, __accu0__, ts);
    				}) (), 0, 6, 1)));
    				var dst = daylight && __gt__ (__getitem__ (localtm, 8), 0);
    				var gmtoff = __neg__ ((dst ? altzone : timezone));
    				if (__eq__ (delta, __call__ (timedelta, null, __kwargtrans__ ({seconds: gmtoff})))) {
    					var tz = __call__ (timezone$1, null, delta, __getitem__ (tzname, dst));
    				}
    				else {
    					var tz = __call__ (timezone$1, null, delta);
    				}
    			}
    		}
    		else if (!(isinstance (tz, tzinfo))) {
    			var __except0__ = py_TypeError ('tz argument must be an instance of tzinfo');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		var mytz = self.tzinfo;
    		if (mytz === null) {
    			var __except0__ = ValueError ('astimezone() requires an aware datetime');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		if (tz === mytz) {
    			return self;
    		}
    		var myoffset = self.utcoffset ();
    		if (myoffset === null) {
    			var __except0__ = ValueError ('astimezone() requires an aware datetime');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		var utc = (function () {
    			var __accu0__ = __sub__ (self, myoffset);
    			return __call__ (__accu0__.py_replace, __accu0__, __kwargtrans__ ({tzinfo: tz}));
    		}) ();
    		return tz.fromutc (utc);
    	});},
    	get ctime () {return __get__ (this, function (self) {
    		var weekday = __mod__ (self.toordinal (), 7) || 7;
    		return '{} {} {} {}:{}:{} {}'.format (_DAYNAMES [weekday], _MONTHNAMES [self._month], zfill (self._day, 2), zfill (self._hour, 2), zfill (self._minute, 2), zfill (self._second, 2), zfill (self._year, 4));
    	});},
    	get isoformat () {return __get__ (this, function (self, sep) {
    		if (typeof sep == 'undefined' || (sep != null && sep.hasOwnProperty ("__kwargtrans__"))) {			var sep = 'T';
    		}		var s = '{}-{}-{}{}'.format (zfill (self._year, 4), zfill (self._month, 2), zfill (self._day, 2), sep) + _format_time (self._hour, self._minute, self._second, self._microsecond);
    		var off = self.utcoffset ();
    		if (off !== null) {
    			if (off.days < 0) {
    				var sign = '-';
    				var off = -(off);
    			}
    			else {
    				var sign = '+';
    			}
    			var __left0__ = divmod (off, timedelta (__kwargtrans__ ({hours: 1})));
    			var hh = __left0__ [0];
    			var mm = __left0__ [1];
    			var mm = Math.floor (mm / timedelta (__kwargtrans__ ({minutes: 1})));
    			s += '{}{}:{}'.format (sign, zfill (hh, 2), zfill (mm, 2));
    		}
    		return s;
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		var L = [self._year, self._month, self._day, self._hour, self._minute, self._second, self._microsecond];
    		if (L [len (L) - 1] == 0) {
    			L.py_pop ();
    		}
    		if (L [len (L) - 1] == 0) {
    			L.py_pop ();
    		}
    		var s = 'datetime.datetime({})'.format (', '.join (map (str, L)));
    		if (self._tzinfo !== null) {
    			var s = (s.__getslice__ (0, len (s) - 1, 1) + ', tzinfo={}'.format (self._tzinfo.__repr__ ())) + ')';
    		}
    		return s;
    	});},
    	get __str__ () {return __get__ (this, function (self) {
    		return self.isoformat (__kwargtrans__ ({sep: ' '}));
    	});},
    	get strptime () {return __getcm__ (this, function (cls, date_string, format) {
    		return cls (...strptime (date_string, format).__getslice__ (0, 6, 1));
    	});},
    	get utcoffset () {return __get__ (this, function (self) {
    		if (self._tzinfo === null) {
    			return null;
    		}
    		var offset = self._tzinfo.utcoffset (self);
    		_check_utc_offset ('utcoffset', offset);
    		return offset;
    	});},
    	get tzname () {return __get__ (this, function (self) {
    		if (self._tzinfo === null) {
    			return null;
    		}
    		var py_name = self._tzinfo.tzname (self);
    		_check_tzname (py_name);
    		return py_name;
    	});},
    	get dst () {return __get__ (this, function (self) {
    		if (self._tzinfo === null) {
    			return null;
    		}
    		var offset = self._tzinfo.dst (self);
    		_check_utc_offset ('dst', offset);
    		return offset;
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, datetime)) {
    			return self._cmp (other, __kwargtrans__ ({allow_mixed: true})) == 0;
    		}
    		else if (!(isinstance (other, date))) {
    			return NotImplemented;
    		}
    		else {
    			return false;
    		}
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, datetime)) {
    			return self._cmp (other) <= 0;
    		}
    		else if (!(isinstance (other, date))) {
    			return NotImplemented;
    		}
    		else {
    			_cmperror (self, other);
    		}
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, datetime)) {
    			return self._cmp (other) < 0;
    		}
    		else if (!(isinstance (other, date))) {
    			return NotImplemented;
    		}
    		else {
    			_cmperror (self, other);
    		}
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, datetime)) {
    			return self._cmp (other) >= 0;
    		}
    		else if (!(isinstance (other, date))) {
    			return NotImplemented;
    		}
    		else {
    			_cmperror (self, other);
    		}
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		if (isinstance (other, datetime)) {
    			return self._cmp (other) > 0;
    		}
    		else if (!(isinstance (other, date))) {
    			return NotImplemented;
    		}
    		else {
    			_cmperror (self, other);
    		}
    	});},
    	get _cmp () {return __get__ (this, function (self, other, allow_mixed) {
    		if (typeof allow_mixed == 'undefined' || (allow_mixed != null && allow_mixed.hasOwnProperty ("__kwargtrans__"))) {			var allow_mixed = false;
    		}		var mytz = self._tzinfo;
    		var ottz = other._tzinfo;
    		var __left0__ = null;
    		var myoff = __left0__;
    		var otoff = __left0__;
    		if (mytz === ottz) {
    			var base_compare = true;
    		}
    		else {
    			var myoff = self.utcoffset ();
    			var otoff = other.utcoffset ();
    			var base_compare = myoff == otoff;
    		}
    		if (base_compare) {
    			var s1 = '{}{}{}{}{}{}{}'.format (zfill (self._year, 4), zfill (self._month, 2), zfill (self._day, 2), zfill (self._hour, 2), zfill (self._minute, 2), zfill (self._second, 2), zfill (self._microsecond, 6));
    			var s2 = '{}{}{}{}{}{}{}'.format (zfill (other._year, 4), zfill (other._month, 2), zfill (other._day, 2), zfill (other._hour, 2), zfill (other._minute, 2), zfill (other._second, 2), zfill (other._microsecond, 6));
    			return _cmp (s1, s2);
    		}
    		if (myoff === null || otoff === null) {
    			if (allow_mixed) {
    				return 2;
    			}
    			else {
    				var __except0__ = py_TypeError ('cannot compare naive and aware datetimes');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    		}
    		var diff = __sub__ (self, other);
    		if (diff.days < 0) {
    			return -(1);
    		}
    		return diff && 1 || 0;
    	});},
    	get __add__ () {return __get__ (this, function (self, other) {
    		if (!(isinstance (other, timedelta))) {
    			return NotImplemented;
    		}
    		var delta = timedelta (self.toordinal (), __kwargtrans__ ({hours: self._hour, minutes: self._minute, seconds: self._second, microseconds: self._microsecond}));
    		var delta = __call__ (__iadd__, null, delta, other);
    		var __left0__ = divmod (delta.seconds, 3600);
    		var hour = __left0__ [0];
    		var rem = __left0__ [1];
    		var __left0__ = divmod (rem, 60);
    		var minute = __left0__ [0];
    		var second = __left0__ [1];
    		if ((0 < delta.days && delta.days <= _MAXORDINAL)) {
    			return datetime.combine (date.fromordinal (delta.days), time$1 (hour, minute, second, delta.microseconds, __kwargtrans__ ({tzinfo: self._tzinfo})));
    		}
    		var __except0__ = OverflowError ('result out of range');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get __radd__ () {return __get__ (this, function (self, other) {
    		return self.__add__ (other);
    	});},
    	get __sub__ () {return __get__ (this, function (self, other) {
    		if (!(isinstance (other, datetime))) {
    			if (isinstance (other, timedelta)) {
    				return __add__ (self, __neg__ (other));
    			}
    			return NotImplemented;
    		}
    		var days1 = self.toordinal ();
    		var days2 = other.toordinal ();
    		var secs1 = (self._second + self._minute * 60) + self._hour * 3600;
    		var secs2 = (other._second + other._minute * 60) + other._hour * 3600;
    		var base = timedelta (days1 - days2, secs1 - secs2, self._microsecond - other._microsecond);
    		if (self._tzinfo === other._tzinfo) {
    			return base;
    		}
    		var myoff = self.utcoffset ();
    		var otoff = other.utcoffset ();
    		if (myoff == otoff) {
    			return base;
    		}
    		if (myoff === null || otoff === null) {
    			var __except0__ = py_TypeError ('cannot mix naive and timezone-aware time');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		return __sub__ (__add__ (base, otoff), myoff);
    	});},
    	resolution: timedelta (__kwargtrans__ ({microseconds: 1}))
    });
    Object.defineProperty (datetime, 'tzinfo', property.call (datetime, datetime._get_tzinfo));
    Object.defineProperty (datetime, 'microsecond', property.call (datetime, datetime._get_microsecond));
    Object.defineProperty (datetime, 'second', property.call (datetime, datetime._get_second));
    Object.defineProperty (datetime, 'minute', property.call (datetime, datetime._get_minute));
    Object.defineProperty (datetime, 'hour', property.call (datetime, datetime._get_hour));var _dt_min = datetime (1, 1, 1);
    var _dt_max = datetime (9999, 12, 31, 23, 59, 59, 999999);
    Object.defineProperty (datetime, 'min', {get: function () {return _dt_min;}});
    Object.defineProperty (datetime, 'max', {get: function () {return _dt_max;}});
    var _isoweek1monday = function (year) {
    	var THURSDAY = 3;
    	var firstday = _ymd2ord (year, 1, 1);
    	var firstweekday = __mod__ (firstday + 6, 7);
    	var week1monday = firstday - firstweekday;
    	if (firstweekday > THURSDAY) {
    		week1monday += 7;
    	}
    	return week1monday;
    };
    var _Omitted = '@#$^&$^';
    var timezone$1 =  __class__ ('timezone', [tzinfo], {
    	__module__: __name__$4,
    	get __init__ () {return __get__ (this, function (self, offset, py_name) {
    		if (typeof py_name == 'undefined' || (py_name != null && py_name.hasOwnProperty ("__kwargtrans__"))) {			var py_name = _Omitted;
    		}		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'offset': var offset = __allkwargs0__ [__attrib0__]; break;
    						case 'py_name': var py_name = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		if (!(isinstance (offset, timedelta))) {
    			var __except0__ = py_TypeError ('offset must be a timedelta');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		if (py_name === _Omitted) {
    			if (!(offset)) {
    				var offset = self.utc;
    			}
    			var py_name = null;
    		}
    		else if (!(isinstance (py_name, str))) {
    			var __except0__ = py_TypeError ('name must be a string');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		if (!((__le__ (self._minoffset, offset) && __le__ (offset, self._maxoffset)))) {
    			var __except0__ = __call__ (ValueError, null, 'offset must be a timedelta strictly between -timedelta(hours=24) and timedelta(hours=24).');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		if (offset.microseconds != 0 || __mod__ (offset.seconds, 60) != 0) {
    			var __except0__ = ValueError ('offset must be a timedelta representing a whole number of minutes');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		self._offset = offset;
    		self._name = py_name;
    	});},
    	get _create () {return __getcm__ (this, function (cls, offset, py_name) {
    		if (typeof py_name == 'undefined' || (py_name != null && py_name.hasOwnProperty ("__kwargtrans__"))) {			var py_name = _Omitted;
    		}		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
    						case 'offset': var offset = __allkwargs0__ [__attrib0__]; break;
    						case 'py_name': var py_name = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		return cls (offset, py_name);
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		if (py_typeof (other) != timezone$1) {
    			return false;
    		}
    		return self._offset == other._offset;
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		if (self === self.utc) {
    			return 'datetime.timezone.utc';
    		}
    		if (self._name === null) {
    			return 'datetime.timezone({})'.format (self._offset.__repr__ ());
    		}
    		return 'datetime.timezone({}, {})'.format (self._offset.__repr__ (), self._name.__repr__ ());
    	});},
    	get __str__ () {return __get__ (this, function (self) {
    		return self.tzname (null);
    	});},
    	get utcoffset () {return __get__ (this, function (self, dt) {
    		if (isinstance (dt, datetime) || dt === null) {
    			return self._offset;
    		}
    		var __except0__ = py_TypeError ('utcoffset() argument must be a datetime instance or None');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get tzname () {return __get__ (this, function (self, dt) {
    		if (isinstance (dt, datetime) || dt === null) {
    			if (self._name === null) {
    				return self._name_from_offset (self._offset);
    			}
    			return self._name;
    		}
    		var __except0__ = py_TypeError ('tzname() argument must be a datetime instance or None');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get dst () {return __get__ (this, function (self, dt) {
    		if (isinstance (dt, datetime) || dt === null) {
    			return null;
    		}
    		var __except0__ = py_TypeError ('dst() argument must be a datetime instance or None');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get fromutc () {return __get__ (this, function (self, dt) {
    		if (isinstance (dt, datetime)) {
    			if (dt.tzinfo !== self) {
    				var __except0__ = ValueError ('fromutc: dt.tzinfo is not self');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    			return __add__ (dt, self._offset);
    		}
    		var __except0__ = py_TypeError ('fromutc() argument must be a datetime instance or None');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	_maxoffset: timedelta (__kwargtrans__ ({hours: 23, minutes: 59})),
    	_minoffset: __neg__ (__call__ (timedelta, null, __kwargtrans__ ({hours: 23, minutes: 59}))),
    	get _name_from_offset () {return function (delta) {
    		if (__lt__ (delta, __call__ (timedelta, null, 0))) {
    			var sign = '-';
    			var delta = __neg__ (delta);
    		}
    		else {
    			var sign = '+';
    		}
    		var __left0__ = __call__ (divmod, null, delta, __call__ (timedelta, null, __kwargtrans__ ({hours: 1})));
    		var hours = __left0__ [0];
    		var rest = __left0__ [1];
    		var minutes = __floordiv__ (rest, __call__ (timedelta, null, __kwargtrans__ ({minutes: 1})));
    		return 'UTC{}{}:{}'.format (sign, zfill (hours, 2), zfill (minutes, 2));
    	};}
    });
    var _tz_utc = timezone$1._create (timedelta (0));
    var _tz_min = timezone$1._create (timezone$1._minoffset);
    var _tz_max = timezone$1._create (timezone$1._maxoffset);
    Object.defineProperty (timezone$1, 'utc', {get: function () {return _tz_utc;}});
    Object.defineProperty (timezone$1, 'min', {get: function () {return _tz_min;}});
    Object.defineProperty (timezone$1, 'max', {get: function () {return _tz_max;}});
    var _EPOCH = datetime (1970, 1, 1, __kwargtrans__ ({tzinfo: timezone$1.utc}));

    // Transcrypt'ed from Python, 2020-10-23 21:39:43
    var get_optional = function (optional) {
    	return optional;
    };
    var to_ticks = function (date_time) {
    	var ticks = (date_time.tzinfo ? date_time.timestamp () : date_time.astimezone (timezone$1.utc).timestamp ());
    	return int (ticks);
    };
    var space_between_capitals = function (base) {
    	return sub ('(\\w)([A-Z])', '\\1 \\2', base);
    };

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var field = function (func) {
    	return func;
    };

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var re$1 = {};
    __nest__ (re$1, '', __module_re__);
    var __name__$5 = 'serializable';
    var Serializable =  __class__ ('Serializable', [object], {
    	__module__: __name__$5,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	get to_json () {return __get__ (this, function (self, strip_privates) {
    		if (typeof strip_privates == 'undefined' || (strip_privates != null && strip_privates.hasOwnProperty ("__kwargtrans__"))) {			var strip_privates = true;
    		}		return JSON.stringify (self);
    	});},
    	get to_json_object () {return __get__ (this, function (self, strip_privates) {
    		if (typeof strip_privates == 'undefined' || (strip_privates != null && strip_privates.hasOwnProperty ("__kwargtrans__"))) {			var strip_privates = true;
    		}		return self;
    	});},
    	get from_json () {return __getcm__ (this, function (cls, data) {
    		return JSON.parse (data);
    	});},
    	get from_json_object () {return __getcm__ (this, function (cls, data) {
    		return data;
    	});}
    });
    for (let aClass of Serializable.__bases__) {
    	__mergefields__ (Serializable, aClass);
    }__mergefields__ (Serializable, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var __name__$6 = 'singleton';
    var Singleton =  __class__ ('Singleton', [object], {
    	__module__: __name__$6,
    	__instance: null,
    	get get_instance () {return function () {
    		if (Singleton.__instance === null) {
    			Singleton ();
    		}
    		return Singleton.__instance;
    	};},
    	get __init__ () {return __get__ (this, function (self) {
    		if (Singleton.__instance === null) {
    			Singleton.__instance = self;
    		}
    	});}
    });

    class ConsoleLogger {
      constructor() {
      }

      debug(message) {
        console.log("debug: " + message);
      }

      warning(message) {
        console.log("warning: " + message);
      }

      info(message) {
        console.log("info: " + message);
      }

      error(message) {
        console.log("error: " + message);
      }

      critical(message) {
        console.log("critical: " + message);
      }
    }

    var Logger = function() { return new ConsoleLogger(); };

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var __name__$7 = 'logs';
    var ElectionGuardLog =  __class__ ('ElectionGuardLog', [Singleton], {
    	__module__: __name__$7,
    	get __init__ () {return __get__ (this, function (self) {
    		__super__ (ElectionGuardLog, '__init__') (self);
    		self.__logger = Logger ();
    	});},
    	get __formatted_message () {return __get__ (this, function (self, message) {
    		return message;
    	});},
    	get debug () {return __get__ (this, function (self, message) {
    		var args = tuple ([].slice.apply (arguments).slice (2));
    		self.__logger.debug (self.__formatted_message (message), ...args, __kwargtrans__ (kwargs));
    	});},
    	get info () {return __get__ (this, function (self, message) {
    		var args = tuple ([].slice.apply (arguments).slice (2));
    		self.__logger.info (self.__formatted_message (message), ...args, __kwargtrans__ (kwargs));
    	});},
    	get warn () {return __get__ (this, function (self, message) {
    		var args = tuple ([].slice.apply (arguments).slice (2));
    		self.__logger.warning (self.__formatted_message (message), ...args, __kwargtrans__ (kwargs));
    	});},
    	get error () {return __get__ (this, function (self, message) {
    		var args = tuple ([].slice.apply (arguments).slice (2));
    		self.__logger.error (self.__formatted_message (message), ...args, __kwargtrans__ (kwargs));
    	});},
    	get critical () {return __get__ (this, function (self, message) {
    		var args = tuple ([].slice.apply (arguments).slice (2));
    		self.__logger.critical (self.__formatted_message (message), ...args, __kwargtrans__ (kwargs));
    	});}
    });
    var LOG = ElectionGuardLog ();
    var log_warning = function (msg) {
    	var args = tuple ([].slice.apply (arguments).slice (1));
    	LOG.warn (msg, ...args, __kwargtrans__ (kwargs));
    };

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var __name__$8 = 'hash';
    var CryptoHashable =  __class__ ('CryptoHashable', [object], {
    	__module__: __name__$8,
    	get crypto_hash () {return __get__ (this, function (self) {
    	});}
    });
    var CryptoHashCheckable =  __class__ ('CryptoHashCheckable', [object], {
    	__module__: __name__$8,
    	get crypto_hash_with () {return __get__ (this, function (self, seed_hash) {
    	});}
    });
    var hash_elems = function () {
    	var a = tuple ([].slice.apply (arguments).slice (0));
    	return 'no-hashing-here';
    };

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var __name__$9 = 'election_object_base';
    var ElectionObjectBase =  __class__ ('ElectionObjectBase', [Serializable], {
    	__module__: __name__$9,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    });
    for (let aClass of ElectionObjectBase.__bases__) {
    	__mergefields__ (ElectionObjectBase, aClass);
    }__mergefields__ (ElectionObjectBase, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var MIN_INDEX = 0;
    var MAX_INDEX = 4095;
    var get_word = function (index) {
    	if (index < MIN_INDEX) {
    		return null;
    	}
    	if (index > MAX_INDEX) {
    		return null;
    	}
    	return words [index & 4095];
    };
    var words = ['aardvark', 'abacus', 'abbey', 'abbreviation', 'ability', 'abolishment', 'absence', 'abundance', 'academics', 'academy', 'accelerant', 'accelerator', 'accent', 'acceptance', 'access', 'accessory', 'accident', 'accommodation', 'accompanist', 'accomplishment', 'accord', 'accordance', 'accordion', 'account', 'accountability', 'accountant', 'accounting', 'accuracy', 'achievement', 'achiever', 'acknowledgment', 'acorn', 'acoustics', 'acquaintance', 'acquisition', 'acre', 'acrylic', 'act', 'action', 'activation', 'activity', 'actor', 'actress', 'adaptation', 'adapter', 'addition', 'address', 'adjective', 'adjustment', 'administration', 'administrator', 'admire', 'admission', 'adobe', 'adult', 'adulthood', 'advance', 'advancement', 'advantage', 'advent', 'adverb', 'advertisement', 'advertising', 'advice', 'adviser', 'advocacy', 'advocate', 'affect', 'affiliate', 'affinity', 'afoul', 'afterlife', 'aftermath', 'afternoon', 'aftershave', 'afterthought', 'age', 'agency', 'agenda', 'agent', 'agony', 'agreement', 'agriculture', 'aid', 'aide', 'aim', 'air', 'airbag', 'aircraft', 'airfare', 'airfield', 'airline', 'airmail', 'airplane', 'airport', 'airspace', 'albatross', 'album', 'alcove', 'alder', 'alfalfa', 'algebra', 'algorithm', 'alias', 'alibi', 'allergist', 'alley', 'alliance', 'alligator', 'allocation', 'allowance', 'alloy', 'almanac', 'almond', 'alpaca', 'alpha', 'alphabet', 'altar', 'alteration', 'alternative', 'altitude', 'alto', 'aluminium', 'aluminum', 'amazement', 'ambassador', 'amber', 'ambience', 'ambiguity', 'ambition', 'ambulance', 'amendment', 'amenity', 'amount', 'amusement', 'anagram', 'analog', 'analogue', 'analogy', 'analysis', 'analyst', 'analytics', 'anatomy', 'ancestor', 'anchovy', 'angel', 'angle', 'angora', 'anguish', 'animal', 'anime', 'anise', 'ankle', 'anklet', 'anniversary', 'announcement', 'annual', 'anorak', 'answer', 'ant', 'anteater', 'antelope', 'antennae', 'anterior', 'anthropology', 'antibody', 'anticipation', 'antique', 'antiquity', 'antler', 'antling', 'anybody', 'anyone', 'anything', 'anywhere', 'apartment', 'ape', 'apology', 'app', 'apparatus', 'apparel', 'appeal', 'appearance', 'appendix', 'appetiser', 'appetite', 'appetizer', 'applause', 'applewood', 'appliance', 'application', 'appointment', 'appreciation', 'apprehension', 'approach', 'appropriation', 'approval', 'apricot', 'apron', 'aquarium', 'aquifer', 'arcade', 'arch', 'archaeology', 'archeology', 'archer', 'architect', 'architecture', 'archives', 'area', 'arena', 'argument', 'arithmetic', 'ark', 'arm', 'armadillo', 'armchair', 'armoire', 'armpit', 'armrest', 'arrangement', 'array', 'arrest', 'arrival', 'arrow', 'art', 'artery', 'arthur', 'artichoke', 'article', 'artifact', 'artificer', 'artist', 'ascend', 'ascent', 'ascot', 'ash', 'aside', 'asparagus', 'aspect', 'asphalt', 'assembly', 'assertion', 'assessment', 'asset', 'assignment', 'assist', 'assistance', 'assistant', 'associate', 'association', 'assumption', 'assurance', 'asterisk', 'astronomy', 'asymmetry', 'atelier', 'athlete', 'athletics', 'atmosphere', 'atom', 'atrium', 'attachment', 'attainment', 'attempt', 'attendance', 'attendant', 'attention', 'attic', 'attitude', 'attorney', 'attraction', 'attribute', 'auction', 'audience', 'audit', 'auditorium', 'aunt', 'authentication', 'authenticity', 'author', 'authorisation', 'authority', 'authorization', 'auto', 'automation', 'automaton', 'autumn', 'availability', 'avalanche', 'avenue', 'average', 'avocado', 'award', 'awareness', 'awe', 'axis', 'babe', 'baby', 'bachelor', 'back', 'backbone', 'backburn', 'backdrop', 'background', 'backpack', 'backup', 'backyard', 'bacon', 'badge', 'badger', 'bafflement', 'bag', 'bagel', 'baggage', 'bagpipe', 'bail', 'bait', 'bake', 'baker', 'bakery', 'bakeware', 'balance', 'balcony', 'ball', 'ballet', 'balloon', 'balloonist', 'ballot', 'ballpark', 'bamboo', 'ban', 'banana', 'band', 'bandana', 'bandanna', 'bandwidth', 'bangle', 'banjo', 'bank', 'bankbook', 'banker', 'banking', 'bankruptcy', 'banner', 'banquette', 'bar', 'barbecue', 'barbeque', 'barber', 'bargain', 'barge', 'baritone', 'bark', 'barley', 'barn', 'barometer', 'barrage', 'barrel', 'barrier', 'base', 'baseball', 'baseboard', 'baseline', 'basement', 'basics', 'basil', 'basin', 'basis', 'basket', 'basketball', 'bass', 'bassinet', 'bassoon', 'bat', 'bath', 'bathrobe', 'bathroom', 'bathtub', 'battalion', 'batter', 'battery', 'batting', 'bay', 'bayou', 'beach', 'bead', 'beak', 'beam', 'bean', 'beancurd', 'beanie', 'beanstalk', 'bear', 'beauty', 'beck', 'bedrock', 'bee', 'beech', 'beet', 'beetle', 'beginner', 'beginning', 'begonia', 'behalf', 'behavior', 'behaviour', 'behest', 'behold', 'being', 'belfry', 'belief', 'believer', 'bell', 'bellows', 'belt', 'bench', 'bend', 'benefit', 'beret', 'berry', 'bestseller', 'bet', 'beverage', 'beyond', 'bias', 'bicycle', 'bid', 'bidder', 'bidding', 'bifocals', 'bijou', 'bike', 'bill', 'billboard', 'billing', 'billion', 'bin', 'binoculars', 'biology', 'biopsy', 'biosphere', 'biplane', 'birch', 'bird', 'birdbath', 'birdcage', 'birdhouse', 'birthday', 'biscuit', 'bit', 'bitten', 'bitter', 'blackberry', 'blackbird', 'blackboard', 'blackfish', 'blackness', 'blade', 'blame', 'blank', 'blanket', 'blast', 'blazer', 'blend', 'blind', 'blinker', 'blister', 'blizzard', 'block', 'blocker', 'blog', 'blogger', 'bloom', 'bloomer', 'blossom', 'blouse', 'blue', 'blueberry', 'blush', 'boar', 'board', 'boat', 'boatload', 'boatyard', 'bob', 'bobcat', 'bog', 'bolero', 'bolt', 'bond', 'bonding', 'bondsman', 'bonfire', 'bongo', 'bonnet', 'bonsai', 'bonus', 'book', 'bookcase', 'bookend', 'booking', 'booklet', 'bookmark', 'boolean', 'boom', 'boon', 'boost', 'booster', 'boot', 'border', 'bore', 'borrower', 'borrowing', 'boss', 'botany', 'bother', 'bottle', 'bottling', 'bough', 'boulder', 'boulevard', 'boundary', 'bouquet', 'bout', 'boutique', 'bow', 'bower', 'bowl', 'bowler', 'bowling', 'bowtie', 'boxer', 'boxspring', 'boy', 'boycott', 'boyfriend', 'boyhood', 'boysenberry', 'brace', 'bracelet', 'bracket', 'brain', 'brake', 'bran', 'branch', 'brand', 'brass', 'bratwurst', 'bread', 'breadcrumb', 'breadfruit', 'break', 'breakdown', 'breakfast', 'breakpoint', 'breakthrough', 'breath', 'breeze', 'brewer', 'bribery', 'brick', 'bricklaying', 'bride', 'bridge', 'brief', 'briefing', 'briefly', 'brilliant', 'brink', 'brisket', 'broad', 'broadcast', 'broccoli', 'brochure', 'broiler', 'broker', 'bronco', 'bronze', 'brooch', 'brood', 'brook', 'broom', 'brother', 'brow', 'brownie', 'browser', 'browsing', 'brunch', 'brush', 'brushfire', 'brushing', 'bubble', 'buck', 'bucket', 'buckle', 'buckwheat', 'buddy', 'budget', 'buffalo', 'buffer', 'buffet', 'bug', 'buggy', 'bugle', 'builder', 'building', 'bulb', 'bulk', 'bull', 'bulldozer', 'bullet', 'bun', 'bunch', 'bungalow', 'bunghole', 'bunkhouse', 'burden', 'bureau', 'burglar', 'burial', 'burn', 'burning', 'burrito', 'burrow', 'burst', 'bus', 'business', 'businessman', 'bustle', 'butane', 'butler', 'butter', 'butterfly', 'button', 'buy', 'buyer', 'buying', 'buzzard', 'cabana', 'cabbage', 'cabin', 'cabinet', 'cable', 'caboose', 'cacao', 'cactus', 'caddy', 'cadet', 'cafe', 'caffeine', 'caftan', 'cage', 'cake', 'calculation', 'calculator', 'calculus', 'calendar', 'calf', 'calico', 'call', 'calm', 'calorie', 'camel', 'cameo', 'camera', 'camp', 'campaign', 'campaigning', 'campanile', 'camper', 'campus', 'can', 'canal', 'candelabra', 'candidacy', 'candidate', 'candle', 'candy', 'cane', 'cannon', 'canoe', 'canon', 'canopy', 'cantaloupe', 'canteen', 'canvas', 'cap', 'capability', 'capacity', 'cape', 'caper', 'capital', 'capitulation', 'capon', 'cappuccino', 'captain', 'caption', 'captor', 'car', 'caramel', 'caravan', 'carbon', 'card', 'cardboard', 'cardigan', 'care', 'career', 'cargo', 'caribou', 'carload', 'carnation', 'carnival', 'carol', 'carp', 'carpenter', 'carpet', 'carpeting', 'carport', 'carriage', 'carrier', 'carrot', 'carry', 'cart', 'cartel', 'carter', 'cartload', 'cartoon', 'cartridge', 'carving', 'cascade', 'case', 'casement', 'cash', 'cashew', 'cashier', 'casino', 'casserole', 'cassock', 'cast', 'castanet', 'castle', 'cat', 'catacomb', 'catalogue', 'catalyst', 'catamaran', 'catastrophe', 'catch', 'catcher', 'category', 'caterpillar', 'cation', 'catsup', 'cattle', 'cauliflower', 'causal', 'cause', 'causeway', 'caution', 'cave', 'caviar', 'cayenne', 'ceiling', 'celebration', 'celebrity', 'celeriac', 'celery', 'cell', 'cellar', 'cello', 'celsius', 'cement', 'census', 'cent', 'center', 'centimeter', 'centre', 'centurion', 'century', 'ceramic', 'ceramics', 'cereal', 'ceremony', 'certainty', 'certificate', 'certification', 'chafe', 'chain', 'chainstay', 'chair', 'chairlift', 'chairman', 'chairperson', 'chaise', 'chalet', 'chalice', 'chalk', 'challenge', 'chamber', 'champagne', 'champion', 'championship', 'chance', 'chandelier', 'change', 'channel', 'chaos', 'chap', 'chapel', 'chapter', 'character', 'chard', 'charge', 'charger', 'charity', 'charlatan', 'charm', 'chart', 'charter', 'chasm', 'chassis', 'chateau', 'chatter', 'check', 'checkbook', 'checking', 'checkout', 'checkroom', 'cheddar', 'cheek', 'cheer', 'cheese', 'cheesecake', 'cheetah', 'chef', 'chem', 'chemical', 'chemistry', 'cherry', 'chess', 'chestnut', 'chicken', 'chicory', 'chief', 'child', 'childhood', 'chili', 'chill', 'chime', 'chimpanzee', 'chin', 'chino', 'chip', 'chipmunk', 'chivalry', 'chive', 'chives', 'chocolate', 'choice', 'choir', 'choker', 'choosing', 'chop', 'chops', 'chopstick', 'chopsticks', 'chord', 'chorus', 'chow', 'chowder', 'chrome', 'chronicle', 'chrysalis', 'chub', 'chuck', 'chug', 'churn', 'chutney', 'cicada', 'cilantro', 'cinder', 'cinema', 'cinnamon', 'circadian', 'circle', 'circuit', 'circulation', 'circumference', 'circumstance', 'cirrus', 'citizen', 'citizenship', 'citron', 'citrus', 'city', 'civilian', 'civilisation', 'civilization', 'claim', 'clamp', 'clan', 'clank', 'clapboard', 'clarification', 'clarinet', 'clarity', 'clasp', 'class', 'classic', 'classmate', 'classroom', 'clause', 'clave', 'clavicle', 'clavier', 'claw', 'clay', 'cleaner', 'clearance', 'clearing', 'cleat', 'clef', 'cleft', 'clerk', 'click', 'client', 'cliff', 'climate', 'climb', 'clinic', 'clip', 'clipboard', 'clipper', 'cloak', 'cloakroom', 'clock', 'clockwork', 'clogs', 'clone', 'close', 'closet', 'closing', 'closure', 'cloth', 'clothes', 'clothing', 'cloud', 'cloudburst', 'clove', 'clover', 'cloves', 'club', 'clue', 'cluster', 'clutch', 'coach', 'coal', 'coalition', 'coast', 'coaster', 'coat', 'cob', 'cobbler', 'cobweb', 'cocktail', 'cocoa', 'coconut', 'cod', 'code', 'codepage', 'codling', 'codon', 'cofactor', 'coffee', 'coffin', 'cohesion', 'cohort', 'coil', 'coin', 'coincidence', 'coinsurance', 'cold', 'coleslaw', 'coliseum', 'collaboration', 'collagen', 'collapse', 'collar', 'collard', 'collateral', 'colleague', 'collection', 'collector', 'college', 'collision', 'colloquy', 'colony', 'color', 'colt', 'column', 'columnist', 'comb', 'combination', 'combine', 'comeback', 'comedy', 'comfort', 'comfortable', 'comic', 'comics', 'comma', 'command', 'commander', 'comment', 'commerce', 'commercial', 'commission', 'commitment', 'committee', 'commodity', 'common', 'commonsense', 'commotion', 'communicant', 'communication', 'community', 'commuter', 'company', 'comparison', 'compass', 'compassion', 'compassionate', 'compensation', 'competence', 'competition', 'competitor', 'complaint', 'complement', 'completion', 'complex', 'complexity', 'compliance', 'complication', 'complicity', 'compliment', 'component', 'comportment', 'composer', 'composite', 'composition', 'compost', 'comprehension', 'compress', 'compromise', 'compulsion', 'computer', 'con', 'concentrate', 'concept', 'conception', 'concern', 'concert', 'conclusion', 'concrete', 'condition', 'conditioner', 'condominium', 'condor', 'conduct', 'conductor', 'cone', 'conference', 'confidence', 'configuration', 'conflict', 'confusion', 'conga', 'congo', 'congress', 'congressman', 'conifer', 'connection', 'connotation', 'conscience', 'consciousness', 'consensus', 'consent', 'consequence', 'conservation', 'consideration', 'consignment', 'consist', 'consistency', 'console', 'consonant', 'constant', 'constellation', 'constitution', 'constraint', 'construction', 'consul', 'consulate', 'consulting', 'consumer', 'consumption', 'contact', 'container', 'content', 'contention', 'contest', 'context', 'continent', 'continuity', 'contour', 'contract', 'contractor', 'contrary', 'contrast', 'contribution', 'contributor', 'control', 'controller', 'convection', 'convenience', 'convention', 'conversation', 'conversion', 'convert', 'convertible', 'cook', 'cookbook', 'cookie', 'cooking', 'cooperation', 'coordination', 'coordinator', 'cope', 'copper', 'copy', 'copying', 'copyright', 'copywriter', 'coral', 'cord', 'corduroy', 'core', 'cork', 'corn', 'corner', 'cornerstone', 'cornflakes', 'cornmeal', 'corporal', 'corporation', 'corral', 'corridor', 'corsage', 'cosset', 'cost', 'costume', 'cot', 'cottage', 'cotton', 'couch', 'cough', 'council', 'councilor', 'counsel', 'counseling', 'counselling', 'counsellor', 'counselor', 'count', 'counter', 'counterpart', 'countess', 'country', 'countryside', 'county', 'couple', 'coupon', 'courage', 'court', 'courthouse', 'courtroom', 'cousin', 'cover', 'coverage', 'coverall', 'cow', 'cowbell', 'coyote', 'crackers', 'cradle', 'craft', 'craftsman', 'cranberry', 'crane', 'cranky', 'crash', 'crate', 'cravat', 'craw', 'crawdad', 'crayfish', 'crayon', 'creation', 'creative', 'creativity', 'creator', 'creature', 'credential', 'credenza', 'credibility', 'credit', 'creditor', 'creek', 'crepe', 'crest', 'crew', 'crewman', 'crewmate', 'crewmember', 'crewmen', 'crib', 'cribbage', 'cricket', 'crime', 'criminal', 'crisis', 'crisp', 'criteria', 'criterion', 'critic', 'criticism', 'crocodile', 'crocus', 'croissant', 'crook', 'crop', 'cross', 'croup', 'crow', 'crowd', 'crown', 'cruise', 'crumb', 'crunch', 'crush', 'crust', 'cry', 'crystal', 'cub', 'cube', 'cuckoo', 'cucumber', 'cue', 'cuisine', 'culture', 'culvert', 'cummerbund', 'cup', 'cupboard', 'cupcake', 'curd', 'cure', 'curio', 'curiosity', 'curl', 'curler', 'currant', 'currency', 'current', 'curriculum', 'curry', 'curse', 'cursor', 'curtailment', 'curtain', 'curve', 'cushion', 'custard', 'custom', 'customer', 'cut', 'cuticle', 'cutlet', 'cutover', 'cutting', 'cycle', 'cyclone', 'cylinder', 'cymbal', 'cynic', 'daffodil', 'dahlia', 'daikon', 'daily', 'dairy', 'daisy', 'damage', 'dame', 'dance', 'dancer', 'dancing', 'dandelion', 'danger', 'dare', 'dark', 'darkness', 'darn', 'dart', 'dash', 'dashboard', 'data', 'database', 'date', 'daughter', 'dawn', 'day', 'daybed', 'daylight', 'deal', 'dealing', 'dearest', 'debate', 'debris', 'debt', 'debtor', 'decade', 'decadence', 'decency', 'decimal', 'decision', 'deck', 'declaration', 'declination', 'decline', 'decoder', 'decoration', 'decrease', 'dedication', 'deduce', 'deduction', 'deed', 'deep', 'deer', 'default', 'defeat', 'defendant', 'defender', 'defense', 'deficit', 'definition', 'degree', 'delay', 'deliberation', 'delight', 'delivery', 'demand', 'democracy', 'democrat', 'demur', 'den', 'denim', 'denominator', 'density', 'dentist', 'department', 'departure', 'dependency', 'dependent', 'deployment', 'deposit', 'deposition', 'depot', 'depression', 'depressive', 'depth', 'deputy', 'derby', 'derivation', 'derivative', 'derrick', 'descendant', 'descent', 'description', 'desert', 'design', 'designation', 'designer', 'desire', 'desk', 'desktop', 'dessert', 'destination', 'destiny', 'destruction', 'detail', 'detection', 'detective', 'detector', 'detention', 'detour', 'developer', 'developing', 'development', 'device', 'dew', 'diabetes', 'diadem', 'diagnosis', 'diagram', 'dial', 'dialect', 'dialogue', 'diam', 'diamond', 'diaper', 'diaphragm', 'diarist', 'diary', 'dibble', 'dick', 'diction', 'dictionary', 'diesel', 'diet', 'difference', 'difficulty', 'diffuse', 'dig', 'digestion', 'digestive', 'digger', 'digging', 'digit', 'dignity', 'dill', 'dilution', 'dime', 'dimension', 'dimple', 'diner', 'dinghy', 'dining', 'dinner', 'dinosaur', 'dioxide', 'dip', 'diploma', 'diplomacy', 'direction', 'directive', 'director', 'directory', 'dirt', 'disadvantage', 'disagreement', 'disaster', 'discharge', 'discipline', 'disclaimer', 'disclosure', 'disco', 'disconnection', 'discount', 'discourse', 'discovery', 'discrepancy', 'discretion', 'discussion', 'disdain', 'disembodiment', 'disengagement', 'disguise', 'dish', 'dishwasher', 'disk', 'disparity', 'dispatch', 'display', 'disposal', 'disposer', 'disposition', 'dispute', 'disregard', 'disruption', 'dissemination', 'dissonance', 'distance', 'distinction', 'distortion', 'distribution', 'distributor', 'district', 'divan', 'diver', 'diversity', 'divide', 'dividend', 'divider', 'diving', 'division', 'doc', 'dock', 'doctor', 'doctorate', 'doctrine', 'document', 'documentary', 'doe', 'dog', 'dogsled', 'dogwood', 'doing', 'doll', 'dollar', 'dollop', 'dolman', 'dolor', 'dolphin', 'domain', 'dome', 'donation', 'donkey', 'donor', 'donut', 'door', 'doorbell', 'doorknob', 'doorpost', 'doorway', 'dory', 'dose', 'dot', 'double', 'doubling', 'doubt', 'doubter', 'dough', 'doughnut', 'down', 'downfall', 'downgrade', 'download', 'downstairs', 'downtown', 'downturn', 'dozen', 'draft', 'drag', 'dragon', 'dragonfly', 'dragonfruit', 'dragster', 'drain', 'drainage', 'drake', 'drama', 'drapes', 'draw', 'drawbridge', 'drawer', 'drawing', 'dream', 'dreamer', 'dredger', 'dress', 'dresser', 'dressing', 'drill', 'drink', 'drinking', 'drive', 'driver', 'driveway', 'driving', 'drizzle', 'drop', 'drudgery', 'drum', 'drummer', 'dryer', 'duck', 'duckling', 'dud', 'dude', 'due', 'duel', 'dueling', 'duffel', 'dugout', 'dune', 'duration', 'durian', 'dusk', 'dust', 'duster', 'duty', 'dwarf', 'dwell', 'dwelling', 'dynamics', 'dynamo', 'dynasty', 'eagle', 'eaglet', 'ear', 'eardrum', 'earmuffs', 'earnings', 'earplug', 'earring', 'earrings', 'earth', 'earthquake', 'earthworm', 'ease', 'easel', 'east', 'eating', 'eaves', 'eavesdropper', 'eclipse', 'ecliptic', 'ecology', 'economics', 'economy', 'ecosystem', 'eddy', 'edge', 'edger', 'edible', 'editing', 'edition', 'editor', 'editorial', 'education', 'eel', 'effect', 'effective', 'effector', 'efficacy', 'efficiency', 'effort', 'egg', 'egghead', 'eggnog', 'eggplant', 'ego', 'elbow', 'elderberry', 'election', 'electricity', 'electronics', 'element', 'elephant', 'elevation', 'elevator', 'eleventh', 'elf', 'elicit', 'eligibility', 'elimination', 'elite', 'elixir', 'elk', 'ellipse', 'elm', 'elongation', 'elver', 'email', 'emanate', 'embassy', 'embossing', 'emerald', 'emergence', 'emergent', 'emery', 'emission', 'emitter', 'emotion', 'emphasis', 'empire', 'employ', 'employee', 'employer', 'employment', 'empowerment', 'emu', 'enactment', 'enclave', 'enclosure', 'encounter', 'encouragement', 'encyclopedia', 'end', 'endive', 'endorsement', 'endpoint', 'enemy', 'energy', 'enforcement', 'engagement', 'engine', 'engineer', 'engineering', 'enigma', 'enjoyment', 'enquiry', 'enrollment', 'enterprise', 'entertainment', 'enthusiasm', 'entirety', 'entity', 'entrance', 'entree', 'entrepreneur', 'entry', 'envelope', 'environment', 'envy', 'enzyme', 'epic', 'episode', 'epoch', 'epoxy', 'equal', 'equality', 'equation', 'equinox', 'equipment', 'equity', 'equivalent', 'era', 'eraser', 'erosion', 'error', 'escalator', 'escape', 'escort', 'essay', 'essence', 'essential', 'establishment', 'estate', 'estimate', 'estuary', 'eternity', 'ethernet', 'ethics', 'evaluation', 'evaluator', 'evaporation', 'eve', 'evening', 'event', 'everybody', 'everyone', 'everything', 'evidence', 'evocation', 'evolution', 'exaggeration', 'exam', 'examination', 'examiner', 'example', 'excellence', 'exception', 'excerpt', 'excess', 'exchange', 'exclamation', 'excursion', 'excuse', 'executive', 'executor', 'exercise', 'exhaust', 'exhaustion', 'exhibit', 'exhibition', 'exile', 'existence', 'exit', 'expansion', 'expectancy', 'expectation', 'expedition', 'expense', 'experience', 'experiment', 'expert', 'expertise', 'explanation', 'exploration', 'explorer', 'export', 'expose', 'exposition', 'exposure', 'expression', 'extension', 'extent', 'exterior', 'external', 'extreme', 'eye', 'eyeball', 'eyebrow', 'eyebrows', 'eyeglasses', 'eyelash', 'eyelashes', 'eyelid', 'eyelids', 'eyeliner', 'eyestrain', 'fabric', 'face', 'facet', 'facility', 'facsimile', 'fact', 'factor', 'factory', 'faculty', 'fail', 'failure', 'fairness', 'fairy', 'fall', 'fallacy', 'fame', 'familiar', 'familiarity', 'family', 'fan', 'fang', 'fanlight', 'farm', 'farmer', 'farming', 'farmland', 'farrow', 'fascia', 'fashion', 'fat', 'fate', 'father', 'fatigue', 'faucet', 'fault', 'fava', 'favor', 'favorite', 'fawn', 'fax', 'fear', 'feast', 'feather', 'feature', 'federation', 'fedora', 'fee', 'feed', 'feedback', 'feeding', 'feel', 'feeling', 'fellow', 'fen', 'fence', 'fencing', 'fender', 'fennel', 'ferret', 'ferry', 'ferryboat', 'fertilizer', 'festival', 'few', 'fiber', 'fiberglass', 'fibre', 'fiction', 'fiddle', 'field', 'fiery', 'fiesta', 'fifth', 'fig', 'fight', 'fighter', 'figure', 'figurine', 'file', 'filing', 'fill', 'fillet', 'filly', 'film', 'filter', 'final', 'finance', 'financing', 'finding', 'fine', 'finer', 'finger', 'fingerling', 'fingernail', 'finish', 'finisher', 'fir', 'fire', 'fireman', 'fireplace', 'firewall', 'firm', 'first', 'fish', 'fishbone', 'fisherman', 'fishery', 'fishing', 'fishnet', 'fit', 'fitness', 'fix', 'fixture', 'flag', 'flair', 'flame', 'flan', 'flanker', 'flare', 'flash', 'flat', 'flatboat', 'flavor', 'flax', 'fleck', 'fledgling', 'fleece', 'flesh', 'flexibility', 'flick', 'flicker', 'flight', 'flint', 'flock', 'flood', 'floodplain', 'floor', 'flour', 'flow', 'flower', 'fluke', 'flume', 'flung', 'flute', 'fly', 'flytrap', 'foal', 'foam', 'fob', 'focus', 'fog', 'fold', 'folder', 'folk', 'folklore', 'follower', 'following', 'fondue', 'font', 'food', 'foodstuffs', 'fool', 'foot', 'footage', 'football', 'footnote', 'footprint', 'footrest', 'footstep', 'footstool', 'footwear', 'forage', 'forager', 'foray', 'force', 'ford', 'forearm', 'forebear', 'forecast', 'forehead', 'foreigner', 'forelimb', 'forest', 'forestry', 'forever', 'forgery', 'fork', 'form', 'formal', 'format', 'formation', 'former', 'formula', 'fort', 'forte', 'fortnight', 'fortress', 'fortune', 'forum', 'foundation', 'founder', 'founding', 'fountain', 'fourths', 'fowl', 'fox', 'foxglove', 'fraction', 'fragrance', 'frame', 'framework', 'fraud', 'fraudster', 'freak', 'freckle', 'freedom', 'freelance', 'freezer', 'freezing', 'freight', 'freighter', 'frenzy', 'freon', 'frequency', 'fresco', 'friction', 'fridge', 'friend', 'friendship', 'fries', 'fright', 'fringe', 'fritter', 'frock', 'frog', 'front', 'frontier', 'frost', 'frosting', 'frown', 'fruit', 'frustration', 'fry', 'fuel', 'fulfillment', 'full', 'fun', 'function', 'functionality', 'fund', 'funding', 'fundraising', 'funeral', 'fur', 'furnace', 'furniture', 'futon', 'future', 'gadget', 'gaffe', 'gain', 'gaiters', 'gale', 'gallery', 'galley', 'gallon', 'galoshes', 'gambling', 'game', 'gamebird', 'gaming', 'gander', 'gap', 'garage', 'garb', 'garbage', 'garden', 'garlic', 'garment', 'garter', 'gas', 'gasket', 'gasoline', 'gasp', 'gastronomy', 'gastropod', 'gate', 'gateway', 'gather', 'gathering', 'gator', 'gauge', 'gauntlet', 'gavel', 'gazebo', 'gazelle', 'gear', 'gearshift', 'geek', 'gel', 'gelatin', 'gelding', 'gem', 'gender', 'gene', 'general', 'generation', 'generator', 'generosity', 'genetics', 'genie', 'genius', 'genre', 'gentleman', 'geography', 'geology', 'geometry', 'geranium', 'gerbil', 'gesture', 'geyser', 'ghost', 'giant', 'gift', 'gig', 'giggle', 'ginger', 'gingerbread', 'ginseng', 'giraffe', 'girdle', 'girl', 'girlfriend', 'glacier', 'gladiolus', 'glance', 'gland', 'glass', 'glasses', 'glee', 'glen', 'glider', 'gliding', 'glimpse', 'globe', 'gloom', 'glory', 'glove', 'glow', 'glucose', 'glue', 'glut', 'glutamate', 'gnat', 'gnu', 'goal', 'goat', 'gobbler', 'goggles', 'going', 'gold', 'goldfish', 'golf', 'gondola', 'gong', 'good', 'goodbye', 'goodie', 'goodness', 'goodnight', 'goodwill', 'goose', 'gopher', 'gorilla', 'gosling', 'gossip', 'governance', 'government', 'governor', 'gown', 'grace', 'grade', 'gradient', 'graduate', 'graduation', 'graffiti', 'graft', 'grain', 'gram', 'grammar', 'gran', 'grand', 'grandchild', 'grandfather', 'grandma', 'grandmom', 'grandmother', 'grandpa', 'grandparent', 'grandson', 'granny', 'granola', 'grant', 'grape', 'grapefruit', 'graph', 'graphic', 'grasp', 'grasshopper', 'grassland', 'gratitude', 'gravel', 'gravitas', 'gravity', 'gravy', 'gray', 'grease', 'greatness', 'greed', 'green', 'greenhouse', 'greens', 'grenade', 'grey', 'grid', 'grief', 'grill', 'grin', 'grip', 'gripper', 'grit', 'grocery', 'ground', 'group', 'grouper', 'grouse', 'grove', 'growth', 'grub', 'guacamole', 'guarantee', 'guard', 'guava', 'guerrilla', 'guess', 'guest', 'guestbook', 'guidance', 'guide', 'guideline', 'guilder', 'guilt', 'guilty', 'guinea', 'guitar', 'guitarist', 'gum', 'gumshoe', 'gutter', 'guy', 'gym', 'gymnast', 'gymnastics', 'gyro', 'habit', 'habitat', 'hacksaw', 'hackwork', 'hail', 'hair', 'haircut', 'hake', 'half', 'halibut', 'hall', 'halloween', 'hallway', 'halt', 'ham', 'hamburger', 'hammer', 'hammock', 'hamster', 'hand', 'handball', 'handful', 'handicap', 'handle', 'handlebar', 'handmaiden', 'handover', 'handrail', 'handsaw', 'hanger', 'happening', 'happiness', 'harald', 'harbor', 'harbour', 'hardboard', 'hardcover', 'hardening', 'hardhat', 'hardship', 'hardware', 'hare', 'harm', 'harmonica', 'harmonise', 'harmonize', 'harmony', 'harp', 'harpooner', 'harvest', 'harvester', 'hash', 'hashtag', 'hassock', 'haste', 'hat', 'hatbox', 'hatchet', 'hatchling', 'haunt', 'haven', 'haversack', 'havoc', 'hawk', 'hay', 'haze', 'hazel', 'hazelnut', 'head', 'headache', 'headlight', 'headline', 'headphones', 'headquarters', 'headrest', 'health', 'hearing', 'hearsay', 'heart', 'heartache', 'heartbeat', 'hearth', 'hearthside', 'heartwood', 'heat', 'heater', 'heating', 'heaven', 'heavy', 'hectare', 'hedge', 'hedgehog', 'heel', 'heifer', 'height', 'heir', 'heirloom', 'helicopter', 'helium', 'hellcat', 'hello', 'helmet', 'helo', 'help', 'hemisphere', 'hemp', 'hen', 'herb', 'herbs', 'heritage', 'hermit', 'hero', 'heron', 'herring', 'hesitation', 'hexagon', 'heyday', 'hiccups', 'hide', 'hierarchy', 'high', 'highland', 'highlight', 'highway', 'hike', 'hiking', 'hill', 'hint', 'hip', 'hippodrome', 'hire', 'hiring', 'historian', 'history', 'hit', 'hive', 'hobbit', 'hobby', 'hockey', 'hoe', 'hog', 'hold', 'holder', 'holiday', 'home', 'homeland', 'hometown', 'homework', 'homonym', 'honesty', 'honey', 'honeybee', 'honeydew', 'honor', 'honoree', 'hood', 'hoof', 'hook', 'hop', 'hope', 'hops', 'horde', 'horizon', 'hormone', 'horn', 'hornet', 'horror', 'horse', 'horseradish', 'horst', 'hose', 'hosiery', 'hospice', 'hospital', 'hospitality', 'host', 'hostel', 'hostess', 'hotdog', 'hotel', 'hound', 'hour', 'hourglass', 'house', 'houseboat', 'household', 'housewife', 'housework', 'housing', 'hovel', 'hovercraft', 'howard', 'hub', 'hubcap', 'hubris', 'hug', 'hugger', 'hull', 'human', 'humanity', 'humidity', 'hummus', 'humor', 'humour', 'hundred', 'hunger', 'hunt', 'hunter', 'hunting', 'hurdle', 'hurdler', 'hurricane', 'hurry', 'hurt', 'husband', 'hut', 'hutch', 'hyacinth', 'hydrant', 'hydraulics', 'hydrocarb', 'hydrocarbon', 'hydrofoil', 'hydrogen', 'hyena', 'hygienic', 'hype', 'hypothesis', 'ice', 'iceberg', 'icebreaker', 'icecream', 'icicle', 'icing', 'icon', 'icy', 'id', 'idea', 'ideal', 'identification', 'identity', 'ideology', 'idiom', 'igloo', 'ignorance', 'ignorant', 'illegal', 'illiteracy', 'illness', 'illusion', 'illustration', 'image', 'imagination', 'imbalance', 'imitation', 'immortal', 'impact', 'impairment', 'impala', 'impediment', 'implement', 'implementation', 'implication', 'import', 'importance', 'impostor', 'impress', 'impression', 'imprisonment', 'impropriety', 'improvement', 'impudence', 'impulse', 'inability', 'inauguration', 'inbox', 'incandescence', 'incarnation', 'incense', 'incentive', 'inch', 'incidence', 'incident', 'incision', 'inclusion', 'income', 'incompetence', 'inconvenience', 'increase', 'incubation', 'independence', 'independent', 'index', 'indication', 'indicator', 'indigence', 'individual', 'industry', 'inequality', 'inevitable', 'infancy', 'infant', 'infection', 'infiltration', 'infinite', 'infix', 'inflammation', 'inflation', 'influence', 'influx', 'info', 'information', 'infrastructure', 'infusion', 'ingrate', 'ingredient', 'inhabitant', 'inheritance', 'inhibition', 'inhibitor', 'initial', 'initialise', 'initialize', 'initiative', 'injunction', 'injury', 'injustice', 'ink', 'inlay', 'inn', 'innervation', 'innocence', 'innocent', 'innovation', 'input', 'inquiry', 'inscription', 'insect', 'insert', 'inside', 'insight', 'insolence', 'insomnia', 'inspection', 'inspector', 'inspiration', 'installation', 'instance', 'instant', 'instinct', 'institute', 'institution', 'instruction', 'instructor', 'instrument', 'instrumentalist', 'instrumentation', 'insulation', 'insurance', 'insurgence', 'insurrection', 'integer', 'integral', 'integration', 'integrity', 'intellect', 'intelligence', 'intensity', 'intent', 'intention', 'intentionality', 'interaction', 'interchange', 'interest', 'interface', 'interior', 'interject', 'interloper', 'internet', 'interpretation', 'interpreter', 'interval', 'intervenor', 'intervention', 'interview', 'interviewer', 'introduction', 'intuition', 'invader', 'invasion', 'invention', 'inventor', 'inventory', 'inverse', 'inversion', 'investigation', 'investigator', 'investment', 'investor', 'invitation', 'invite', 'invoice', 'involvement', 'iridescence', 'iris', 'iron', 'ironclad', 'irony', 'irrigation', 'island', 'isolation', 'issue', 'item', 'itinerary', 'ivory', 'jack', 'jackal', 'jacket', 'jackfruit', 'jade', 'jaguar', 'jail', 'jailhouse', 'jalapeno', 'jam', 'jar', 'jasmine', 'jaw', 'jazz', 'jealousy', 'jeans', 'jeep', 'jelly', 'jellybeans', 'jellyfish', 'jet', 'jewel', 'jeweller', 'jewellery', 'jewelry', 'jicama', 'jiffy', 'job', 'jockey', 'joey', 'jogging', 'joke', 'jot', 'journal', 'journalism', 'journalist', 'journey', 'joy', 'judge', 'judgment', 'judo', 'jug', 'juggernaut', 'juice', 'julienne', 'jumbo', 'jump', 'jumper', 'jumpsuit', 'jungle', 'junior', 'junk', 'junker', 'junket', 'jury', 'justice', 'jute', 'kale', 'kangaroo', 'karate', 'kayak', 'kazoo', 'kebab', 'keep', 'keeper', 'kendo', 'kennel', 'ketch', 'ketchup', 'kettle', 'kettledrum', 'key', 'keyboard', 'keyboarding', 'keystone', 'kick', 'kid', 'kilogram', 'kilometer', 'kilt', 'kimono', 'kind', 'kindness', 'king', 'kingdom', 'kingfish', 'kiosk', 'kiss', 'kit', 'kitchen', 'kite', 'kitsch', 'kitten', 'kitty', 'kiwi', 'knee', 'kneejerk', 'knickers', 'knife', 'knight', 'knitting', 'knock', 'knot', 'knowledge', 'knuckle', 'koala', 'kohlrabi', 'kumquat', 'lab', 'label', 'labor', 'laboratory', 'laborer', 'labour', 'labourer', 'lace', 'lack', 'lad', 'ladder', 'ladle', 'lady', 'ladybug', 'lag', 'lake', 'lamb', 'lambkin', 'lament', 'lamp', 'lanai', 'land', 'landform', 'landing', 'landmine', 'landscape', 'lane', 'language', 'lantern', 'lap', 'lapdog', 'laptop', 'larch', 'lard', 'larder', 'lark', 'larva', 'lasagna', 'lashes', 'last', 'latency', 'lathe', 'latitude', 'latte', 'latter', 'laugh', 'laughter', 'laundry', 'lava', 'law', 'lawmaker', 'lawn', 'lawsuit', 'lawyer', 'lay', 'layer', 'layout', 'lead', 'leader', 'leadership', 'leading', 'leaf', 'league', 'leaker', 'leap', 'learning', 'leash', 'leather', 'leave', 'leaver', 'lecture', 'leek', 'leeway', 'left', 'leg', 'legacy', 'legal', 'legend', 'legging', 'legislation', 'legislator', 'legislature', 'legitimacy', 'legume', 'leisure', 'lemon', 'lemonade', 'lemur', 'lender', 'lending', 'length', 'lens', 'lentil', 'leopard', 'lesson', 'letter', 'lettuce', 'level', 'lever', 'leverage', 'leveret', 'liability', 'liar', 'liberty', 'library', 'licence', 'license', 'licensing', 'licorice', 'lid', 'lie', 'lieu', 'lieutenant', 'life', 'lifestyle', 'lifetime', 'lift', 'ligand', 'light', 'lighting', 'lightning', 'lightscreen', 'likelihood', 'likeness', 'lilac', 'lily', 'limb', 'lime', 'limestone', 'limit', 'limitation', 'limo', 'line', 'linen', 'liner', 'linguist', 'linguistics', 'lining', 'link', 'linkage', 'linseed', 'lion', 'lip', 'lipid', 'lipstick', 'liquid', 'liquidity', 'list', 'listening', 'listing', 'literate', 'literature', 'litigation', 'litmus', 'litter', 'littleneck', 'livestock', 'living', 'lizard', 'llama', 'load', 'loading', 'loaf', 'loafer', 'loan', 'lobby', 'lobster', 'local', 'locality', 'location', 'lock', 'locker', 'locket', 'locomotive', 'locust', 'lode', 'loft', 'log', 'logic', 'login', 'logistics', 'logo', 'lollipop', 'loneliness', 'longboat', 'longitude', 'look', 'lookout', 'loop', 'loophole', 'loquat', 'loss', 'lot', 'lotion', 'lottery', 'lounge', 'louse', 'lout', 'love', 'lox', 'loyalty', 'luck', 'luggage', 'lumber', 'lumberman', 'lunch', 'luncheonette', 'lunchmeat', 'lunchroom', 'lung', 'lunge', 'lute', 'luxury', 'lychee', 'lycra', 'lye', 'lynx', 'lyre', 'lyrics', 'lysine', 'macadamia', 'macaroni', 'macaroon', 'macaw', 'machine', 'machinery', 'macrame', 'macro', 'macrofauna', 'maelstrom', 'maestro', 'magazine', 'magic', 'magnet', 'magnitude', 'maid', 'maiden', 'mail', 'mailbox', 'mailer', 'mailing', 'mailman', 'main', 'mainland', 'mainstream', 'maintainer', 'maintenance', 'major', 'majority', 'makeover', 'maker', 'makeup', 'making', 'male', 'malice', 'mall', 'mallard', 'mallet', 'mama', 'mambo', 'mammoth', 'man', 'manacle', 'management', 'manager', 'manatee', 'mandarin', 'mandate', 'mandolin', 'mangle', 'mango', 'mangrove', 'manhunt', 'maniac', 'manicure', 'manifestation', 'manipulation', 'manner', 'manor', 'mansard', 'mansion', 'mantel', 'mantle', 'mantua', 'manufacturer', 'manufacturing', 'many', 'map', 'maple', 'mapping', 'maracas', 'marathon', 'marble', 'march', 'mare', 'margarine', 'margin', 'mariachi', 'marimba', 'marines', 'marionberry', 'mark', 'marker', 'market', 'marketer', 'marketing', 'marketplace', 'marksman', 'markup', 'marmalade', 'marriage', 'marsh', 'marshland', 'marshmallow', 'marten', 'mascara', 'mask', 'masonry', 'mass', 'massage', 'mast', 'master', 'masterpiece', 'mastoid', 'mat', 'match', 'matchmaker', 'mate', 'material', 'maternity', 'math', 'mathematics', 'matrix', 'matter', 'mattock', 'mattress', 'max', 'maximum', 'maybe', 'mayonnaise', 'mayor', 'meadow', 'meal', 'mean', 'meander', 'meaning', 'means', 'meantime', 'measure', 'measurement', 'meat', 'meatball', 'meatloaf', 'mecca', 'mechanic', 'mechanism', 'med', 'medal', 'media', 'median', 'medication', 'medicine', 'medium', 'meet', 'meeting', 'melatonin', 'melody', 'melon', 'member', 'membership', 'membrane', 'meme', 'memo', 'memorial', 'memory', 'men', 'mention', 'mentor', 'menu', 'merchandise', 'merchant', 'mercury', 'meridian', 'meringue', 'merit', 'mess', 'message', 'messenger', 'messy', 'metabolite', 'metal', 'metaphor', 'meteor', 'meteorology', 'meter', 'methane', 'method', 'methodology', 'metric', 'metro', 'metronome', 'mezzanine', 'microlending', 'microphone', 'microwave', 'midden', 'middle', 'middleman', 'midline', 'midnight', 'midwife', 'might', 'migrant', 'migration', 'mile', 'mileage', 'milepost', 'milestone', 'military', 'milk', 'milkshake', 'mill', 'millennium', 'millet', 'millimeter', 'million', 'millisecond', 'millstone', 'mime', 'mimosa', 'min', 'mincemeat', 'mind', 'mine', 'mineral', 'mineshaft', 'mini', 'minibus', 'minimalism', 'minimum', 'mining', 'minion', 'minister', 'mink', 'minnow', 'minor', 'minority', 'mint', 'minute', 'miracle', 'mirror', 'misfit', 'misnomer', 'misplacement', 'misreading', 'miss', 'missile', 'mission', 'mist', 'mistake', 'mister', 'misunderstand', 'miter', 'mitten', 'mix', 'mixer', 'mixture', 'moat', 'mob', 'mobile', 'mobility', 'moccasins', 'mocha', 'mochi', 'mode', 'model', 'modeling', 'modem', 'modernist', 'modernity', 'modification', 'molar', 'molasses', 'molding', 'mole', 'molecule', 'mom', 'moment', 'money', 'monger', 'monitor', 'monitoring', 'monk', 'monkey', 'monocle', 'monopoly', 'monsoon', 'monster', 'month', 'monument', 'mood', 'moody', 'moon', 'moonlight', 'moonscape', 'moonshine', 'moose', 'mop', 'morale', 'morning', 'morsel', 'mortal', 'mortality', 'mortgage', 'mortise', 'mosquito', 'most', 'motel', 'moth', 'mother', 'motion', 'motivation', 'motive', 'motor', 'motorboat', 'motorcar', 'motorcycle', 'mound', 'mountain', 'mouse', 'mouser', 'mousse', 'moustache', 'mouton', 'movement', 'mover', 'movie', 'mower', 'mozzarella', 'mud', 'muffin', 'mug', 'mukluk', 'mule', 'multimedia', 'muscat', 'muscle', 'museum', 'mushroom', 'music', 'musician', 'muskrat', 'mussel', 'mustache', 'mustard', 'mutation', 'mutt', 'mutton', 'mystery', 'myth', 'mythology', 'nail', 'name', 'naming', 'napkin', 'narrative', 'nasal', 'nation', 'nationality', 'native', 'nature', 'navigation', 'necessity', 'necklace', 'necktie', 'nectar', 'nectarine', 'need', 'needle', 'neglect', 'negotiation', 'neighbor', 'neighborhood', 'neighbour', 'neighbourhood', 'neon', 'neonate', 'nephew', 'nerve', 'nest', 'nestling', 'nestmate', 'net', 'netball', 'netbook', 'network', 'networking', 'neuron', 'news', 'newsletter', 'newspaper', 'newsprint', 'newsstand', 'nexus', 'nibble', 'nicety', 'niche', 'nick', 'nickel', 'nickname', 'niece', 'night', 'nightclub', 'nightgown', 'nightingale', 'nightlife', 'nightlight', 'nightmare', 'ninja', 'nit', 'nitrogen', 'nobody', 'nod', 'node', 'noir', 'noise', 'nonconformist', 'nondisclosure', 'nonsense', 'noodle', 'noodles', 'noon', 'norm', 'normal', 'normalisation', 'normalization', 'north', 'nose', 'notation', 'note', 'notebook', 'notepad', 'nothing', 'notice', 'notion', 'notoriety', 'nougat', 'noun', 'nourishment', 'novel', 'nudge', 'number', 'numeracy', 'numeric', 'nurse', 'nursery', 'nursing', 'nurture', 'nut', 'nutmeg', 'nutrient', 'nutrition', 'nylon', 'nymph', 'oak', 'oar', 'oasis', 'oat', 'oatmeal', 'oats', 'obedience', 'obi', 'object', 'objection', 'objective', 'obligation', 'oboe', 'observation', 'observatory', 'obsession', 'obsidian', 'obstacle', 'occasion', 'occupation', 'occurrence', 'ocean', 'ocelot', 'octagon', 'octave', 'octavo', 'octet', 'octopus', 'odometer', 'odyssey', 'oeuvre', 'offence', 'offense', 'offer', 'offering', 'office', 'officer', 'official', 'offset', 'oil', 'okra', 'oldie', 'oleo', 'olive', 'omega', 'omelet', 'omission', 'omnivore', 'oncology', 'onion', 'online', 'onset', 'opening', 'opera', 'operating', 'operation', 'operator', 'opinion', 'opossum', 'opponent', 'opportunist', 'opportunity', 'opposite', 'opposition', 'optimal', 'optimisation', 'optimist', 'optimization', 'option', 'orange', 'orangutan', 'orator', 'orchard', 'orchestra', 'orchid', 'order', 'ordinary', 'ordination', 'ore', 'oregano', 'organ', 'organisation', 'organising', 'organization', 'organizing', 'orient', 'orientation', 'origin', 'original', 'originality', 'ornament', 'osmosis', 'osprey', 'ostrich', 'other', 'otter', 'ottoman', 'ounce', 'outback', 'outcome', 'outfielder', 'outfit', 'outhouse', 'outlaw', 'outlay', 'outlet', 'outline', 'outlook', 'output', 'outrage', 'outrigger', 'outrun', 'outset', 'outside', 'oval', 'oven', 'overcharge', 'overclocking', 'overcoat', 'overexertion', 'overflight', 'overhead', 'overheard', 'overload', 'overnighter', 'overshoot', 'oversight', 'overview', 'owl', 'owner', 'ownership', 'ox', 'oxford', 'oxygen', 'oyster', 'ozone', 'pace', 'pacemaker', 'pack', 'package', 'packaging', 'packet', 'pad', 'paddle', 'paddock', 'page', 'pail', 'pain', 'paint', 'painter', 'painting', 'paintwork', 'pair', 'pajamas', 'palace', 'palate', 'palm', 'pamphlet', 'pan', 'pancake', 'pancreas', 'panda', 'panel', 'panic', 'pannier', 'panpipe', 'pansy', 'panther', 'pantry', 'pants', 'pantsuit', 'pantyhose', 'papa', 'papaya', 'paper', 'paperback', 'paperwork', 'parable', 'parachute', 'parade', 'paradise', 'paragraph', 'paramedic', 'parameter', 'paranoia', 'parcel', 'parchment', 'pard', 'pardon', 'parent', 'parenthesis', 'parenting', 'park', 'parka', 'parking', 'parliament', 'parole', 'parrot', 'parser', 'parsley', 'parsnip', 'part', 'participant', 'participation', 'particle', 'particular', 'partner', 'partnership', 'partridge', 'party', 'pass', 'passage', 'passbook', 'passenger', 'passing', 'passion', 'passive', 'passport', 'password', 'past', 'pasta', 'paste', 'pastry', 'pasture', 'pat', 'patch', 'pate', 'patent', 'patentee', 'path', 'pathology', 'pathway', 'patience', 'patient', 'patina', 'patio', 'patrimony', 'patriot', 'patrol', 'patroller', 'patrolling', 'patron', 'pattern', 'patty', 'pattypan', 'pause', 'pavement', 'pavilion', 'paw', 'pawnshop', 'pay', 'payee', 'payment', 'payoff', 'pea', 'peace', 'peach', 'peacoat', 'peacock', 'peak', 'peanut', 'pear', 'pearl', 'peasant', 'pecan', 'pedal', 'peek', 'peen', 'peer', 'pegboard', 'pelican', 'pelt', 'pen', 'penalty', 'pence', 'pencil', 'pendant', 'pendulum', 'penguin', 'penicillin', 'peninsula', 'pennant', 'penny', 'pension', 'pentagon', 'peony', 'people', 'pepper', 'pepperoni', 'percent', 'percentage', 'perception', 'perch', 'perennial', 'perfection', 'performance', 'perfume', 'period', 'periodical', 'peripheral', 'permafrost', 'permission', 'permit', 'persimmon', 'person', 'personal', 'personality', 'personnel', 'perspective', 'pest', 'pet', 'petal', 'petition', 'petitioner', 'petticoat', 'pew', 'pharmacist', 'phase', 'pheasant', 'phenomenon', 'phenotype', 'pheromone', 'philanthropy', 'philosopher', 'philosophy', 'phone', 'phosphate', 'photo', 'photograph', 'photographer', 'photography', 'phrase', 'phrasing', 'physical', 'physics', 'physiology', 'pianist', 'piano', 'piccolo', 'pick', 'pickax', 'pickaxe', 'picket', 'pickle', 'pickup', 'picnic', 'picture', 'picturesque', 'pie', 'piece', 'pier', 'piety', 'pig', 'pigeon', 'piglet', 'pigpen', 'pigsty', 'pike', 'pilaf', 'pile', 'pilgrim', 'pilgrimage', 'pill', 'pillar', 'pillbox', 'pillow', 'pilot', 'pimple', 'pin', 'pinafore', 'pine', 'pineapple', 'pinecone', 'ping', 'pink', 'pinkie', 'pinot', 'pinstripe', 'pint', 'pinto', 'pinworm', 'pioneer', 'pipe', 'pipeline', 'piracy', 'pirate', 'pistol', 'pit', 'pita', 'pitch', 'pitcher', 'pitching', 'pith', 'pizza', 'place', 'placebo', 'placement', 'placode', 'plagiarism', 'plain', 'plaintiff', 'plan', 'plane', 'planet', 'planning', 'plant', 'plantation', 'planter', 'planula', 'plaster', 'plasterboard', 'plastic', 'plate', 'platelet', 'platform', 'platinum', 'platter', 'platypus', 'play', 'player', 'playground', 'playroom', 'playwright', 'plea', 'pleasure', 'pleat', 'pledge', 'plenty', 'plier', 'pliers', 'plight', 'plot', 'plough', 'plover', 'plow', 'plowman', 'plug', 'plugin', 'plum', 'plumber', 'plume', 'plunger', 'plywood', 'pneumonia', 'pocket', 'pocketbook', 'pod', 'podcast', 'poem', 'poet', 'poetry', 'poignance', 'point', 'poison', 'poisoning', 'poker', 'pole', 'polenta', 'police', 'policeman', 'policy', 'polish', 'politician', 'politics', 'poll', 'polliwog', 'pollutant', 'pollution', 'polo', 'polyester', 'polyp', 'pomegranate', 'pomelo', 'pompom', 'poncho', 'pond', 'pony', 'pool', 'poor', 'pop', 'popcorn', 'poppy', 'popsicle', 'popularity', 'population', 'populist', 'porcelain', 'porch', 'porcupine', 'pork', 'porpoise', 'port', 'porter', 'portfolio', 'porthole', 'portion', 'portrait', 'position', 'possession', 'possibility', 'possible', 'post', 'postage', 'postbox', 'poster', 'postfix', 'pot', 'potato', 'potential', 'pottery', 'pouch', 'poultry', 'pound', 'pounding', 'poverty', 'powder', 'power', 'practice', 'practitioner', 'prairie', 'praise', 'precedence', 'precedent', 'precipitation', 'precision', 'predecessor', 'preface', 'preference', 'prefix', 'prejudice', 'prelude', 'premeditation', 'premier', 'premise', 'premium', 'preoccupation', 'preparation', 'prescription', 'presence', 'present', 'presentation', 'preservation', 'preserves', 'presidency', 'president', 'press', 'pressroom', 'pressure', 'prestige', 'presume', 'pretzel', 'prevalence', 'prevention', 'prey', 'price', 'pricing', 'pride', 'primary', 'primate', 'prince', 'princess', 'principal', 'principle', 'print', 'printer', 'printing', 'prior', 'priority', 'prison', 'prisoner', 'privacy', 'private', 'privilege', 'prize', 'prizefight', 'probability', 'probation', 'probe', 'problem', 'procedure', 'proceedings', 'process', 'processing', 'processor', 'proctor', 'procurement', 'produce', 'producer', 'product', 'production', 'productivity', 'profession', 'professional', 'professor', 'profile', 'profit', 'progenitor', 'program', 'programme', 'programming', 'progress', 'progression', 'prohibition', 'project', 'promenade', 'promise', 'promotion', 'prompt', 'pronoun', 'proof', 'propaganda', 'propane', 'property', 'prophet', 'proponent', 'proportion', 'proposal', 'proposition', 'proprietor', 'prose', 'prosecution', 'prosecutor', 'prospect', 'prosperity', 'prostanoid', 'prostrate', 'protection', 'protein', 'protest', 'protocol', 'providence', 'provider', 'province', 'provision', 'prow', 'proximal', 'proximity', 'prune', 'pruner', 'psychology', 'pub', 'public', 'publication', 'publicity', 'publisher', 'publishing', 'pudding', 'puddle', 'puffin', 'pug', 'puggle', 'pulley', 'pulse', 'puma', 'pump', 'pumpernickel', 'pumpkin', 'pumpkinseed', 'pun', 'punch', 'punctuation', 'punishment', 'pup', 'pupa', 'pupil', 'puppet', 'puppy', 'purchase', 'purity', 'purple', 'purpose', 'purr', 'purse', 'pursuit', 'push', 'put', 'puzzle', 'pyramid', 'quadrant', 'quail', 'qualification', 'quality', 'quantity', 'quart', 'quarter', 'quartet', 'quartz', 'queen', 'query', 'quest', 'question', 'questioner', 'questionnaire', 'quiche', 'quicksand', 'quiet', 'quill', 'quilt', 'quince', 'quinoa', 'quit', 'quiver', 'quota', 'quotation', 'quote', 'rabbit', 'raccoon', 'race', 'racer', 'racing', 'rack', 'radar', 'radiator', 'radio', 'radish', 'raffle', 'raft', 'rag', 'rage', 'raid', 'rail', 'railing', 'railroad', 'railway', 'raiment', 'rain', 'rainbow', 'raincoat', 'rainmaker', 'rainstorm', 'rainy', 'raise', 'raisin', 'rake', 'rally', 'ram', 'rambler', 'ramen', 'ramie', 'ranch', 'rancher', 'range', 'ranger', 'rank', 'rap', 'raspberry', 'rat', 'rate', 'ratepayer', 'rating', 'ratio', 'rationale', 'rations', 'raven', 'ravioli', 'rawhide', 'ray', 'rayon', 'razor', 'reach', 'reactant', 'reaction', 'read', 'reader', 'readiness', 'reading', 'real', 'reality', 'realization', 'realm', 'reamer', 'rear', 'reason', 'reasoning', 'rebel', 'rebellion', 'reboot', 'recall', 'receipt', 'receiver', 'reception', 'receptor', 'recess', 'recession', 'recipe', 'recipient', 'reciprocity', 'reclamation', 'recliner', 'recognition', 'recollection', 'record', 'recorder', 'recording', 'recovery', 'recreation', 'recruit', 'rectangle', 'red', 'redesign', 'redirect', 'rediscovery', 'reduction', 'reef', 'refectory', 'reference', 'referendum', 'reflection', 'reform', 'refreshments', 'refrigerator', 'refuge', 'refund', 'refusal', 'refuse', 'regard', 'regime', 'region', 'regionalism', 'register', 'registration', 'registry', 'regret', 'regulation', 'regulator', 'reindeer', 'reject', 'relation', 'relationship', 'relative', 'relaxation', 'relay', 'release', 'reliability', 'relief', 'religion', 'relish', 'reluctance', 'remains', 'remark', 'reminder', 'remnant', 'remote', 'removal', 'renaissance', 'rent', 'reorganisation', 'reorganization', 'repair', 'reparation', 'repayment', 'repeat', 'replacement', 'replica', 'replication', 'reply', 'report', 'reporter', 'reporting', 'repository', 'representation', 'representative', 'reprocessing', 'republic', 'republican', 'reputation', 'request', 'requirement', 'resale', 'rescue', 'research', 'researcher', 'resemblance', 'reservation', 'reserve', 'reservoir', 'reset', 'residence', 'resident', 'residue', 'resist', 'resistance', 'resolution', 'resolve', 'resort', 'resource', 'respect', 'respite', 'response', 'responsibility', 'rest', 'restaurant', 'restoration', 'restriction', 'restroom', 'restructuring', 'result', 'resume', 'retailer', 'retention', 'rethinking', 'retina', 'retirement', 'retouching', 'retreat', 'retrospect', 'retrospective', 'return', 'reunion', 'reveal', 'revelation', 'revenant', 'revenge', 'revenue', 'reversal', 'reverse', 'review', 'revival', 'revolution', 'reward', 'rhetoric', 'rhinoceros', 'rhubarb', 'rhyme', 'rhythm', 'rib', 'ribbon', 'rice', 'riddle', 'ride', 'rider', 'ridge', 'riding', 'rifle', 'right', 'rim', 'ring', 'riot', 'rip', 'ripple', 'rise', 'riser', 'risk', 'rite', 'ritual', 'river', 'riverbed', 'rivulet', 'road', 'roadway', 'roar', 'roast', 'robe', 'robin', 'robot', 'robotics', 'rock', 'rocker', 'rocket', 'rod', 'role', 'roll', 'roller', 'romaine', 'romance', 'roof', 'room', 'roommate', 'rooster', 'root', 'rope', 'rose', 'rosemary', 'roster', 'rostrum', 'rotation', 'round', 'roundabout', 'route', 'router', 'routine', 'row', 'rowboat', 'rowing', 'rubbish', 'rubric', 'ruby', 'ruckus', 'rudiment', 'ruffle', 'rug', 'rugby', 'ruin', 'rule', 'ruler', 'ruling', 'rum', 'rumor', 'run', 'runaway', 'runner', 'running', 'runway', 'rush', 'rust', 'rutabaga', 'rye', 'sabre', 'sac', 'sack', 'saddle', 'sadness', 'safari', 'safe', 'safeguard', 'safety', 'saffron', 'sage', 'sail', 'sailboat', 'sailing', 'sailor', 'saint', 'sake', 'salad', 'salami', 'salary', 'sale', 'salesman', 'salmon', 'salon', 'saloon', 'salsa', 'salt', 'salute', 'sample', 'samurai', 'sanction', 'sanctity', 'sanctuary', 'sand', 'sandal', 'sandbar', 'sandpaper', 'sandwich', 'sanity', 'sardine', 'sari', 'sarong', 'sash', 'satellite', 'satin', 'satire', 'satisfaction', 'sauce', 'saucer', 'sauerkraut', 'sausage', 'savage', 'savannah', 'saving', 'savings', 'savior', 'saviour', 'savory', 'saw', 'saxophone', 'scaffold', 'scale', 'scallion', 'scallops', 'scalp', 'scam', 'scanner', 'scarecrow', 'scarf', 'scenario', 'scene', 'scenery', 'scent', 'schedule', 'scheduling', 'schema', 'scheme', 'scholar', 'scholarship', 'school', 'schoolhouse', 'schooner', 'science', 'scientist', 'scimitar', 'scissors', 'scooter', 'scope', 'score', 'scorn', 'scorpion', 'scotch', 'scout', 'scow', 'scrambled', 'scrap', 'scraper', 'scratch', 'screamer', 'screen', 'screening', 'screenwriting', 'screwdriver', 'scrim', 'scrip', 'script', 'scrutiny', 'sculpting', 'sculptural', 'sculpture', 'sea', 'seabass', 'seafood', 'seagull', 'seal', 'seaplane', 'search', 'seashore', 'seaside', 'season', 'seat', 'seaweed', 'second', 'secrecy', 'secret', 'secretariat', 'secretary', 'section', 'sectional', 'sector', 'security', 'sediment', 'seed', 'seeder', 'seeker', 'seep', 'segment', 'seizure', 'selection', 'self', 'seller', 'selling', 'semantics', 'semester', 'semicircle', 'semicolon', 'seminar', 'senate', 'senator', 'sender', 'senior', 'sense', 'sensibility', 'sensitive', 'sensitivity', 'sensor', 'sentence', 'sentencing', 'sentiment', 'sepal', 'separation', 'sequel', 'sequence', 'serial', 'series', 'serum', 'serval', 'servant', 'server', 'service', 'servitude', 'sesame', 'session', 'set', 'setback', 'setting', 'settlement', 'settler', 'severity', 'sewer', 'shack', 'shackle', 'shade', 'shadow', 'shadowbox', 'shakedown', 'shaker', 'shallot', 'shallows', 'shame', 'shampoo', 'shanty', 'shape', 'share', 'shareholder', 'shark', 'shaw', 'shawl', 'shear', 'shearling', 'sheath', 'shed', 'sheep', 'sheet', 'shelf', 'shell', 'shelter', 'sherbet', 'sherry', 'shield', 'shift', 'shin', 'shine', 'shingle', 'ship', 'shipper', 'shipping', 'shipyard', 'shirt', 'shirtdress', 'shoat', 'shock', 'shoe', 'shoehorn', 'shoelace', 'shoemaker', 'shoes', 'shoestring', 'shofar', 'shoot', 'shootdown', 'shop', 'shopper', 'shopping', 'shore', 'shoreline', 'short', 'shortage', 'shorts', 'shortwave', 'shot', 'shoulder', 'shout', 'shovel', 'show', 'shower', 'shred', 'shrimp', 'shrine', 'shutdown', 'sibling', 'sick', 'sickness', 'side', 'sideboard', 'sideburns', 'sidecar', 'sidestream', 'sidewalk', 'siding', 'siege', 'sigh', 'sight', 'sightseeing', 'sign', 'signal', 'signature', 'signet', 'significance', 'signify', 'signup', 'silence', 'silica', 'silicon', 'silk', 'silkworm', 'sill', 'silly', 'silo', 'silver', 'similarity', 'simple', 'simplicity', 'singer', 'singing', 'singular', 'sink', 'sinuosity', 'sip', 'sir', 'sister', 'sitar', 'site', 'situation', 'size', 'skate', 'skating', 'skean', 'skeleton', 'ski', 'skiing', 'skill', 'skin', 'skirt', 'skull', 'skullcap', 'skunk', 'sky', 'skylight', 'skyline', 'skyscraper', 'skywalk', 'slang', 'slapstick', 'slash', 'slate', 'slaw', 'sled', 'sledge', 'sleep', 'sleepiness', 'sleeping', 'sleet', 'sleuth', 'slice', 'slide', 'slider', 'slime', 'slip', 'slipper', 'slippers', 'slope', 'slot', 'sloth', 'slump', 'smell', 'smelting', 'smile', 'smith', 'smock', 'smog', 'smoke', 'smoking', 'smolt', 'smuggling', 'snack', 'snail', 'snake', 'snakebite', 'snap', 'snarl', 'sneaker', 'sneakers', 'sneeze', 'sniffle', 'snob', 'snorer', 'snow', 'snowboarding', 'snowflake', 'snowman', 'snowmobiling', 'snowplow', 'snowstorm', 'snowsuit', 'snuck', 'snug', 'snuggle', 'soap', 'soccer', 'socialism', 'socialist', 'society', 'sociology', 'sock', 'socks', 'soda', 'sofa', 'softball', 'softdrink', 'softening', 'software', 'soil', 'soldier', 'sole', 'solicitation', 'solicitor', 'solidarity', 'solidity', 'soliloquy', 'solitaire', 'solution', 'solvency', 'sombrero', 'somebody', 'someone', 'someplace', 'somersault', 'something', 'somewhere', 'son', 'sonar', 'sonata', 'song', 'songbird', 'sonnet', 'soot', 'sophomore', 'soprano', 'sorbet', 'sorghum', 'sorrel', 'sorrow', 'sort', 'soul', 'soulmate', 'sound', 'soundness', 'soup', 'source', 'sourwood', 'sousaphone', 'south', 'southeast', 'souvenir', 'sow', 'soy', 'soybean', 'space', 'spacing', 'spade', 'spaghetti', 'span', 'spandex', 'sparerib', 'spark', 'sparrow', 'spasm', 'spat', 'spatula', 'spawn', 'speaker', 'speakerphone', 'speaking', 'spear', 'spec', 'special', 'specialist', 'specialty', 'species', 'specification', 'spectacle', 'spectacles', 'spectrum', 'speculation', 'speech', 'speed', 'speedboat', 'spell', 'spelling', 'spelt', 'spending', 'sphere', 'sphynx', 'spice', 'spider', 'spiderling', 'spike', 'spill', 'spinach', 'spine', 'spiral', 'spirit', 'spit', 'spite', 'spleen', 'splendor', 'split', 'spokesman', 'spokeswoman', 'sponge', 'sponsor', 'sponsorship', 'spool', 'spoon', 'spork', 'sport', 'sportsman', 'spot', 'spotlight', 'spouse', 'sprag', 'sprat', 'spray', 'spread', 'spreadsheet', 'spree', 'spring', 'sprinkles', 'sprinter', 'sprout', 'spruce', 'spud', 'spume', 'spur', 'spy', 'spyglass', 'square', 'squash', 'squatter', 'squeegee', 'squid', 'squirrel', 'stab', 'stability', 'stable', 'stack', 'stacking', 'stadium', 'staff', 'stag', 'stage', 'stain', 'stair', 'staircase', 'stake', 'stalk', 'stall', 'stallion', 'stamen', 'stamina', 'stamp', 'stance', 'stand', 'standard', 'standing', 'standoff', 'standpoint', 'star', 'starboard', 'start', 'starter', 'state', 'statement', 'statin', 'station', 'statistic', 'statistics', 'statue', 'status', 'statute', 'stay', 'steak', 'stealth', 'steam', 'steamroller', 'steel', 'steeple', 'stem', 'stench', 'stencil', 'step', 'stepdaughter', 'stepmother', 'stepson', 'stereo', 'stew', 'steward', 'stick', 'sticker', 'stiletto', 'still', 'stimulation', 'stimulus', 'sting', 'stinger', 'stitch', 'stitcher', 'stock', 'stockings', 'stole', 'stomach', 'stone', 'stonework', 'stool', 'stop', 'stopsign', 'stopwatch', 'storage', 'store', 'storey', 'storm', 'story', 'storyboard', 'stot', 'stove', 'strait', 'strand', 'stranger', 'strap', 'strategy', 'straw', 'strawberry', 'strawman', 'stream', 'street', 'streetcar', 'strength', 'stress', 'stretch', 'strife', 'strike', 'string', 'strip', 'stripe', 'strobe', 'stroke', 'structure', 'strudel', 'struggle', 'stucco', 'student', 'studio', 'study', 'stuff', 'stumbling', 'stump', 'stupidity', 'sturgeon', 'sty', 'style', 'styling', 'stylus', 'sub', 'subcomponent', 'subconscious', 'subcontractor', 'subgroup', 'subject', 'submarine', 'submitter', 'subprime', 'subroutine', 'subscription', 'subsection', 'subset', 'subsidence', 'subsidiary', 'subsidy', 'substance', 'substitution', 'subtitle', 'suburb', 'subway', 'success', 'succotash', 'suede', 'suet', 'sugar', 'suggestion', 'suit', 'suitcase', 'suite', 'sulfur', 'sultan', 'sum', 'summary', 'summer', 'summit', 'sun', 'sunbeam', 'sunbonnet', 'sundae', 'sunday', 'sundial', 'sunflower', 'sunglasses', 'sunlamp', 'sunlight', 'sunrise', 'sunroom', 'sunset', 'sunshine', 'superiority', 'supermarket', 'supernatural', 'supervision', 'supervisor', 'supper', 'supplement', 'supplier', 'supply', 'support', 'supporter', 'suppression', 'supreme', 'surface', 'surfboard', 'surge', 'surgeon', 'surgery', 'surname', 'surplus', 'surprise', 'surround', 'surroundings', 'surrounds', 'survey', 'survival', 'survivor', 'sushi', 'suspect', 'suspenders', 'suspension', 'sustainment', 'sustenance', 'swallow', 'swamp', 'swan', 'swanling', 'swath', 'sweat', 'sweater', 'sweatshirt', 'sweatshop', 'sweatsuit', 'sweets', 'swell', 'swim', 'swimming', 'swimsuit', 'swine', 'swing', 'switch', 'switchboard', 'switching', 'swivel', 'sword', 'swordfight', 'swordfish', 'sycamore', 'symbol', 'symmetry', 'sympathy', 'symptom', 'syndicate', 'syndrome', 'synergy', 'synonym', 'synthesis', 'syrup', 'system', 'tab', 'tabby', 'tabernacle', 'table', 'tablecloth', 'tablet', 'tabletop', 'tachometer', 'tackle', 'taco', 'tactics', 'tactile', 'tadpole', 'tag', 'tail', 'tailbud', 'tailor', 'tailspin', 'takeover', 'tale', 'talent', 'talk', 'talking', 'tamale', 'tambour', 'tambourine', 'tan', 'tandem', 'tangerine', 'tank', 'tanker', 'tankful', 'tap', 'tape', 'tapioca', 'target', 'taro', 'tarragon', 'tart', 'task', 'tassel', 'taste', 'tatami', 'tattler', 'tattoo', 'tavern', 'tax', 'taxi', 'taxicab', 'taxpayer', 'tea', 'teacher', 'teaching', 'team', 'teammate', 'teapot', 'tear', 'tech', 'technician', 'technique', 'technology', 'tectonics', 'teen', 'teenager', 'teepee', 'telephone', 'telescreen', 'teletype', 'television', 'tell', 'teller', 'temp', 'temper', 'temperature', 'tempo', 'temporary', 'temptation', 'temptress', 'tenant', 'tendency', 'tender', 'tenement', 'tenet', 'tennis', 'tenor', 'tension', 'tensor', 'tent', 'tentacle', 'tenth', 'tepee', 'teriyaki', 'term', 'terminal', 'termination', 'terminology', 'termite', 'terrace', 'terracotta', 'terrapin', 'terrarium', 'territory', 'test', 'testament', 'testimonial', 'testimony', 'testing', 'text', 'textbook', 'textual', 'texture', 'thanks', 'thaw', 'theater', 'theft', 'theme', 'theory', 'therapist', 'therapy', 'thermals', 'thermometer', 'thermostat', 'thesis', 'thickness', 'thief', 'thigh', 'thing', 'thinking', 'thirst', 'thistle', 'thorn', 'thought', 'thousand', 'thread', 'threat', 'threshold', 'thrift', 'thrill', 'throat', 'throne', 'thrust', 'thug', 'thumb', 'thump', 'thunder', 'thunderbolt', 'thunderhead', 'thunderstorm', 'thyme', 'tiara', 'tic', 'tick', 'ticket', 'tide', 'tie', 'tiger', 'tights', 'tile', 'till', 'tilt', 'timbale', 'timber', 'time', 'timeline', 'timeout', 'timer', 'timetable', 'timing', 'timpani', 'tin', 'tinderbox', 'tinkle', 'tintype', 'tip', 'tire', 'tissue', 'titanium', 'title', 'toad', 'toast', 'toaster', 'today', 'toe', 'toffee', 'tofu', 'tog', 'toga', 'toilet', 'tolerance', 'tolerant', 'toll', 'tomatillo', 'tomato', 'tomb', 'tomography', 'tomorrow', 'ton', 'tonality', 'tone', 'tongue', 'tonic', 'tonight', 'tool', 'toot', 'tooth', 'toothbrush', 'toothpaste', 'toothpick', 'top', 'topic', 'topsail', 'toque', 'toreador', 'tornado', 'torso', 'torte', 'tortellini', 'tortilla', 'tortoise', 'total', 'tote', 'touch', 'tour', 'tourism', 'tourist', 'tournament', 'towel', 'tower', 'town', 'townhouse', 'township', 'toy', 'trace', 'track', 'tracking', 'tracksuit', 'tract', 'tractor', 'trade', 'trader', 'trading', 'tradition', 'traffic', 'trafficker', 'tragedy', 'trail', 'trailer', 'trailpatrol', 'train', 'trainer', 'training', 'trait', 'tram', 'trance', 'transaction', 'transcript', 'transfer', 'transit', 'transition', 'translation', 'transmission', 'transom', 'transparency', 'transport', 'trap', 'trapdoor', 'trash', 'travel', 'traveler', 'tray', 'treasure', 'treasury', 'treat', 'treatment', 'treaty', 'tree', 'trek', 'trellis', 'tremor', 'trench', 'trend', 'triad', 'trial', 'triangle', 'tribe', 'tributary', 'trick', 'trigger', 'trigonometry', 'trillion', 'trim', 'trinket', 'trip', 'tripod', 'tritone', 'triumph', 'trolley', 'trombone', 'troop', 'trooper', 'trophy', 'trouble', 'trousers', 'trout', 'trove', 'trowel', 'truck', 'trumpet', 'trunk', 'trust', 'trustee', 'truth', 'try', 'tsunami', 'tub', 'tuba', 'tube', 'tuber', 'tug', 'tugboat', 'tuition', 'tulip', 'tumbler', 'tummy', 'tuna', 'tune', 'tunic', 'tunnel', 'turban', 'turf', 'turkey', 'turmeric', 'turn', 'turning', 'turnip', 'turnover', 'turnstile', 'turret', 'turtle', 'tusk', 'tussle', 'tutu', 'tuxedo', 'tweet', 'tweezers', 'twig', 'twilight', 'twine', 'twins', 'twist', 'twister', 'twitter', 'type', 'typeface', 'typewriter', 'typhoon', 'ukulele', 'ultimatum', 'umbrella', 'unblinking', 'uncertainty', 'uncle', 'underestimate', 'underground', 'underneath', 'underpass', 'understanding', 'understatement', 'undertaker', 'underwear', 'underweight', 'underwire', 'underwriting', 'unemployment', 'unibody', 'uniform', 'uniformity', 'union', 'unique', 'unit', 'unity', 'universe', 'university', 'update', 'upgrade', 'uplift', 'upper', 'upstairs', 'upward', 'urge', 'urgency', 'urn', 'usage', 'use', 'user', 'usher', 'usual', 'utensil', 'utilisation', 'utility', 'utilization', 'vacation', 'vacuum', 'vagrant', 'valance', 'valentine', 'validate', 'validity', 'valley', 'valuable', 'value', 'vampire', 'van', 'vane', 'vanilla', 'vanity', 'variability', 'variable', 'variant', 'variation', 'variety', 'vascular', 'vase', 'vault', 'vaulting', 'veal', 'vector', 'vegetable', 'vegetarian', 'vegetation', 'vehicle', 'veil', 'vein', 'veldt', 'vellum', 'velocity', 'velodrome', 'velvet', 'vendor', 'veneer', 'vengeance', 'venison', 'venom', 'venti', 'venture', 'venue', 'veranda', 'verb', 'verdict', 'verification', 'vermicelli', 'vernacular', 'verse', 'version', 'vertigo', 'verve', 'vessel', 'vest', 'vestment', 'vet', 'veteran', 'veterinarian', 'veto', 'viability', 'vibe', 'vibraphone', 'vibration', 'vibrissae', 'vice', 'vicinity', 'victim', 'victory', 'video', 'view', 'viewer', 'vignette', 'villa', 'village', 'vine', 'vinegar', 'vineyard', 'vintage', 'vintner', 'vinyl', 'viola', 'violet', 'violin', 'virtue', 'virus', 'visa', 'viscose', 'vise', 'vision', 'visit', 'visitor', 'visor', 'vista', 'visual', 'vitality', 'vitamin', 'vitro', 'vivo', 'vixen', 'vodka', 'vogue', 'voice', 'void', 'vol', 'volatility', 'volcano', 'volleyball', 'volume', 'volunteer', 'vote', 'voter', 'voting', 'voyage', 'vulture', 'wad', 'wafer', 'waffle', 'wage', 'wagon', 'waist', 'waistband', 'wait', 'waiter', 'waiting', 'waitress', 'waiver', 'wake', 'walk', 'walker', 'walking', 'walkway', 'wall', 'wallaby', 'wallet', 'walnut', 'walrus', 'wannabe', 'want', 'war', 'warden', 'wardrobe', 'warlock', 'warlord', 'warming', 'warmth', 'warning', 'warrant', 'warren', 'warrior', 'wasabi', 'wash', 'washbasin', 'washcloth', 'washer', 'washtub', 'wasp', 'waste', 'wastebasket', 'wasting', 'watch', 'watcher', 'watchmaker', 'water', 'watercress', 'waterfall', 'waterfront', 'watermelon', 'waterskiing', 'waterspout', 'waterwheel', 'wave', 'waveform', 'wax', 'way', 'weakness', 'wealth', 'weapon', 'wear', 'weasel', 'weather', 'web', 'webinar', 'webmail', 'webpage', 'website', 'wedding', 'wedge', 'weeder', 'weedkiller', 'week', 'weekend', 'weekender', 'weight', 'weird', 'welcome', 'welfare', 'well', 'west', 'western', 'wetland', 'wetsuit', 'whack', 'whale', 'wharf', 'wheat', 'wheel', 'whey', 'whip', 'whirlpool', 'whirlwind', 'whisker', 'whiskey', 'whisper', 'whistle', 'white', 'whole', 'wholesale', 'wholesaler', 'whorl', 'wick', 'widget', 'widow', 'width', 'wife', 'wifi', 'wild', 'wildebeest', 'wilderness', 'wildlife', 'will', 'willow', 'win', 'wind', 'windage', 'window', 'windscreen', 'windshield', 'wine', 'winery', 'wing', 'wingman', 'wingtip', 'wink', 'winner', 'winter', 'wire', 'wiretap', 'wiring', 'wisdom', 'wiseguy', 'wish', 'wisteria', 'wit', 'witch', 'withdrawal', 'witness', 'wok', 'wolf', 'woman', 'wombat', 'wonder', 'wont', 'wood', 'woodchuck', 'woodland', 'woodshed', 'woodwind', 'wool', 'woolens', 'word', 'wording', 'work', 'workbench', 'worker', 'workforce', 'workhorse', 'working', 'workout', 'workplace', 'workshop', 'world', 'worm', 'worry', 'worth', 'wound', 'wrap', 'wraparound', 'wrapper', 'wrapping', 'wreck', 'wrecker', 'wren', 'wrench', 'wrestler', 'wriggler', 'wrinkle', 'wrist', 'writer', 'writing', 'wrong', 'xylophone', 'yacht', 'yahoo', 'yak', 'yam', 'yang', 'yard', 'yarn', 'yawl', 'year', 'yeast', 'yellow', 'yesterday', 'yew', 'yin', 'yoga', 'yogurt', 'yoke', 'yolk', 'young', 'youngster', 'yourself', 'youth', 'yoyo', 'yurt', 'zebra', 'zebrafish', 'zen', 'zephyr', 'zero', 'ziggurat', 'zinc', 'zipper', 'zither', 'zombie', 'zone', 'zoo', 'zoologist', 'zoology', 'zucchini'];

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var DEFAULT_SEPERATOR = '-';
    var tracker_hash_to_words = function (tracker_hash, seperator) {
    	if (typeof seperator == 'undefined' || (seperator != null && seperator.hasOwnProperty ("__kwargtrans__"))) {		var seperator = DEFAULT_SEPERATOR;
    	}	var segments = tracker_hash.to_bytes ();
    	var words = [];
    	for (var i of range (0, len (segments), 4)) {
    		var first = segments [i];
    		var second = segments [i + 1];
    		var third = segments [i + 2];
    		var fourth = segments [i + 3];
    		var word_part = get_word (first * 16 + (second >> 4));
    		var hex_part = [format ((second & 15) >> 0, '1X'), format ((third & 240) >> 4, '1X'), format ((third & 15) >> 0, '1X'), format ((fourth & 240) >> 4, '1X'), format ((fourth & 15) >> 0, '1X')];
    		if (word_part === null) {
    			return null;
    		}
    		words.append (word_part);
    		words.append (''.join (hex_part));
    	}
    	return seperator.join (words);
    };

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var __dlog_cache = dict ([[ONE_MOD_P, 0]]);
    var __dlog_max_elem = ONE_MOD_P;
    var __dlog_max_exp = 0;
    var discrete_log = function (e) {
    	if (__in__ (e, __dlog_cache)) {
    		return __dlog_cache [e];
    	}
    	else {
    		return __discrete_log_internal (e);
    	}
    };
    var __discrete_log_internal = async function (e) {
    	var g = int_to_p_unchecked (G);
    	while (e != __dlog_max_elem) {
    		__dlog_max_exp = __dlog_max_exp + 1;
    		__dlog_max_elem = mult_p (g, __dlog_max_elem);
    		__dlog_cache [__dlog_max_elem] = __dlog_max_exp;
    	}
    	return __dlog_cache [__dlog_max_elem];
    };

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var __name__$a = 'elgamal';
    var ElGamalKeyPair =  __class__ ('ElGamalKeyPair', [object], {
    	__module__: __name__$a,
    });
    var ElGamalCiphertext =  __class__ ('ElGamalCiphertext', [object], {
    	__module__: __name__$a,
    	get decrypt_known_product () {return __get__ (this, function (self, product) {
    		return discrete_log (mult_p (self.data, mult_inv_p (product)));
    	});},
    	get decrypt () {return __get__ (this, function (self, secret_key) {
    		return self.decrypt_known_product (pow_p (self.pad, secret_key));
    	});},
    	get decrypt_known_nonce () {return __get__ (this, function (self, public_key, nonce) {
    		return self.decrypt_known_product (pow_p (public_key, nonce));
    	});},
    	get partial_decrypt () {return __get__ (this, function (self, secret_key) {
    		return pow_p (self.pad, secret_key);
    	});},
    	get crypto_hash () {return __get__ (this, function (self) {
    		return hash_elems (self.pad, self.data);
    	});}
    });
    var elgamal_add = function () {
    	var ciphertexts = tuple ([].slice.apply (arguments).slice (0));
    	var result = ciphertexts [0];
    	for (var c of ciphertexts.__getslice__ (1, null, 1)) {
    		var result = ElGamalCiphertext (mult_p (result.pad, c.pad), mult_p (result.data, c.data));
    	}
    	return result;
    };

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var __name__$b = 'enum';
    var Enum =  __class__ ('Enum', [object], {
    	__module__: __name__$b,
    });
    var unique = function (func) {
    	return func;
    };

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var __name__$c = 'proof';
    var ProofUsage =  __class__ ('ProofUsage', [Enum], {
    	__module__: __name__$c,
    	Unknown: 'Unknown',
    	SecretValue: 'Prove knowledge of secret value',
    	SelectionLimit: "Prove value within selection's limit",
    	SelectionValue: "Prove selection's value (0 or 1)"
    });
    var Proof =  __class__ ('Proof', [Serializable], {
    	__module__: __name__$c,
    	py_name: 'Proof',
    	usage: ProofUsage.Unknown,
    	get __init__ () {return __get__ (this, function (self) {
    		object.__setattr__ (self, 'name', space_between_capitals (self.__class__.__name__));
    	});}
    });

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var __name__$d = 'nonces';
    var Nonces =  __class__ ('Nonces', [object], {
    	__module__: __name__$d,
    	get __init__ () {return __get__ (this, function (self, seed) {
    		var headers = tuple ([].slice.apply (arguments).slice (2));
    		if (len (headers) > 0) {
    			self.__seed = hash_elems (seed, ...headers);
    		}
    		else {
    			self.__seed = seed;
    		}
    	});},
    	get __getitem__ () {return __get__ (this, function (self, index) {
    		// pass;
    	});},
    	get __getitem__ () {return __get__ (this, function (self, index) {
    		// pass;
    	});},
    	get __getitem__ () {return __get__ (this, function (self, index) {
    		if (isinstance (index, int)) {
    			return self.get_with_headers (index);
    		}
    		else if (isinstance (index.stop, int)) {
    			var indices = range (index.start || 0, index.stop, index.step || 1);
    			return (function () {
    				var __accu0__ = [];
    				for (var i of indices) {
    					__accu0__.append (self [i]);
    				}
    				return __accu0__;
    			}) ();
    		}
    		else {
    			var __except0__ = py_TypeError ('Cannot take unbounded slice of Nonces');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    	});},
    	get __len__ () {return __get__ (this, function (self) {
    		var __except0__ = py_TypeError ('Nonces does not have finite length');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get get_with_headers () {return __get__ (this, function (self, item) {
    		var headers = tuple ([].slice.apply (arguments).slice (2));
    		if (item < 0) {
    			var __except0__ = py_TypeError ('Nonces do not support negative indices.');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		return hash_elems (self.__seed, item, ...headers);
    	});}
    });

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var __name__$e = 'chaum_pedersen';
    var DisjunctiveChaumPedersenProof =  __class__ ('DisjunctiveChaumPedersenProof', [Proof], {
    	__module__: __name__$e,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	usage: ProofUsage.SelectionValue,
    	get __post_init__ () {return __get__ (this, function (self) {
    		__super__ (DisjunctiveChaumPedersenProof, '__init__') (self);
    	});},
    	get is_valid () {return __get__ (this, function (self, message, k, q) {
    		var __left0__ = message;
    		var alpha = __left0__ [0];
    		var beta = __left0__ [1];
    		var a0 = self.proof_zero_pad;
    		var b0 = self.proof_zero_data;
    		var a1 = self.proof_one_pad;
    		var b1 = self.proof_one_data;
    		var c0 = self.proof_zero_challenge;
    		var c1 = self.proof_one_challenge;
    		var c = self.challenge;
    		var v0 = self.proof_zero_response;
    		var v1 = self.proof_one_response;
    		var in_bounds_alpha = alpha.is_valid_residue ();
    		var in_bounds_beta = beta.is_valid_residue ();
    		var in_bounds_a0 = a0.is_valid_residue ();
    		var in_bounds_b0 = b0.is_valid_residue ();
    		var in_bounds_a1 = a1.is_valid_residue ();
    		var in_bounds_b1 = b1.is_valid_residue ();
    		var in_bounds_c0 = c0.is_in_bounds ();
    		var in_bounds_c1 = c1.is_in_bounds ();
    		var in_bounds_v0 = v0.is_in_bounds ();
    		var in_bounds_v1 = v1.is_in_bounds ();
    		var consistent_c = (add_q (c0, c1) == c && c == hash_elems (q, alpha, beta, a0, b0, a1, b1));
    		var consistent_gv0 = g_pow_p (v0) == mult_p (a0, pow_p (alpha, c0));
    		var consistent_gv1 = g_pow_p (v1) == mult_p (a1, pow_p (alpha, c1));
    		var consistent_kv0 = pow_p (k, v0) == mult_p (b0, pow_p (beta, c0));
    		var consistent_gc1kv1 = mult_p (g_pow_p (c1), pow_p (k, v1)) == mult_p (b1, pow_p (beta, c1));
    		var success = in_bounds_alpha && in_bounds_beta && in_bounds_a0 && in_bounds_b0 && in_bounds_a1 && in_bounds_b1 && in_bounds_c0 && in_bounds_c1 && in_bounds_v0 && in_bounds_v1 && consistent_c && consistent_gv0 && consistent_gv1 && consistent_kv0 && consistent_gc1kv1;
    		if (!(success)) {
    			log_warning ('found an invalid Disjunctive Chaum-Pedersen proof: ' + str (dict ([['in_bounds_alpha', in_bounds_alpha], ['in_bounds_beta', in_bounds_beta], ['in_bounds_a0', in_bounds_a0], ['in_bounds_b0', in_bounds_b0], ['in_bounds_a1', in_bounds_a1], ['in_bounds_b1', in_bounds_b1], ['in_bounds_c0', in_bounds_c0], ['in_bounds_c1', in_bounds_c1], ['in_bounds_v0', in_bounds_v0], ['in_bounds_v1', in_bounds_v1], ['consistent_c', consistent_c], ['consistent_gv0', consistent_gv0], ['consistent_gv1', consistent_gv1], ['consistent_kv0', consistent_kv0], ['consistent_gc1kv1', consistent_gc1kv1], ['k', k], ['proof', self]])));
    		}
    		return success;
    	});}
    });
    for (let aClass of DisjunctiveChaumPedersenProof.__bases__) {
    	__mergefields__ (DisjunctiveChaumPedersenProof, aClass);
    }__mergefields__ (DisjunctiveChaumPedersenProof, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var ChaumPedersenProof =  __class__ ('ChaumPedersenProof', [Proof], {
    	__module__: __name__$e,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	usage: ProofUsage.SecretValue,
    	get __post_init__ () {return __get__ (this, function (self) {
    		__super__ (ChaumPedersenProof, '__init__') (self);
    	});},
    	get is_valid () {return __get__ (this, function (self, message, k, m, q) {
    		var __left0__ = message;
    		var alpha = __left0__ [0];
    		var beta = __left0__ [1];
    		var a = self.pad;
    		var b = self.data;
    		var c = self.challenge;
    		var v = self.response;
    		var in_bounds_alpha = alpha.is_valid_residue ();
    		var in_bounds_beta = beta.is_valid_residue ();
    		var in_bounds_k = k.is_valid_residue ();
    		var in_bounds_m = m.is_valid_residue ();
    		var in_bounds_a = a.is_valid_residue ();
    		var in_bounds_b = b.is_valid_residue ();
    		var in_bounds_c = c.is_in_bounds ();
    		var in_bounds_v = v.is_in_bounds ();
    		var in_bounds_q = q.is_in_bounds ();
    		var same_c = c == hash_elems (q, alpha, beta, a, b, m);
    		var consistent_gv = in_bounds_v && in_bounds_a && in_bounds_c && in_bounds_v && g_pow_p (v) == mult_p (a, pow_p (k, c));
    		var consistent_av = in_bounds_alpha && in_bounds_b && in_bounds_c && in_bounds_v && pow_p (alpha, v) == mult_p (b, pow_p (m, c));
    		var success = in_bounds_alpha && in_bounds_beta && in_bounds_k && in_bounds_m && in_bounds_a && in_bounds_b && in_bounds_c && in_bounds_v && in_bounds_q && same_c && consistent_gv && consistent_av;
    		if (!(success)) {
    			log_warning ('found an invalid Chaum-Pedersen proof: ' + str (dict ([['in_bounds_alpha', in_bounds_alpha], ['in_bounds_beta', in_bounds_beta], ['in_bounds_k', in_bounds_k], ['in_bounds_m', in_bounds_m], ['in_bounds_a', in_bounds_a], ['in_bounds_b', in_bounds_b], ['in_bounds_c', in_bounds_c], ['in_bounds_v', in_bounds_v], ['in_bounds_q', in_bounds_q], ['same_c', same_c], ['consistent_gv', consistent_gv], ['consistent_av', consistent_av], ['k', k], ['q', q], ['proof', self]])));
    		}
    		return success;
    	});}
    });
    for (let aClass of ChaumPedersenProof.__bases__) {
    	__mergefields__ (ChaumPedersenProof, aClass);
    }__mergefields__ (ChaumPedersenProof, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var ConstantChaumPedersenProof =  __class__ ('ConstantChaumPedersenProof', [Proof], {
    	__module__: __name__$e,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	usage: ProofUsage.SelectionLimit,
    	get __post_init__ () {return __get__ (this, function (self) {
    		__super__ (ConstantChaumPedersenProof, '__init__') (self);
    	});},
    	get is_valid () {return __get__ (this, function (self, message, k, q) {
    		var __left0__ = message;
    		var alpha = __left0__ [0];
    		var beta = __left0__ [1];
    		var a = self.pad;
    		var b = self.data;
    		var c = self.challenge;
    		var v = self.response;
    		var constant = self.constant;
    		var in_bounds_alpha = alpha.is_valid_residue ();
    		var in_bounds_beta = beta.is_valid_residue ();
    		var in_bounds_a = a.is_valid_residue ();
    		var in_bounds_b = b.is_valid_residue ();
    		var in_bounds_c = c.is_in_bounds ();
    		var in_bounds_v = v.is_in_bounds ();
    		var tmp = int_to_q (constant);
    		if (tmp === null) {
    			var constant_q = ZERO_MOD_Q;
    			var in_bounds_constant = false;
    		}
    		else {
    			var constant_q = tmp;
    			var in_bounds_constant = true;
    		}
    		var sane_constant = (0 <= constant && constant < 1000000000);
    		var same_c = c == hash_elems (q, alpha, beta, a, b);
    		var consistent_gv = in_bounds_v && in_bounds_a && in_bounds_alpha && in_bounds_c && g_pow_p (v) == mult_p (a, pow_p (alpha, c));
    		var consistent_kv = in_bounds_constant && mult_p (g_pow_p (mult_p (c, constant_q)), pow_p (k, v)) == mult_p (b, pow_p (beta, c));
    		var success = in_bounds_alpha && in_bounds_beta && in_bounds_a && in_bounds_b && in_bounds_c && in_bounds_v && same_c && in_bounds_constant && sane_constant && consistent_gv && consistent_kv;
    		if (!(success)) {
    			log_warning ('found an invalid Constant Chaum-Pedersen proof: ' + str (dict ([['in_bounds_alpha', in_bounds_alpha], ['in_bounds_beta', in_bounds_beta], ['in_bounds_a', in_bounds_a], ['in_bounds_b', in_bounds_b], ['in_bounds_c', in_bounds_c], ['in_bounds_v', in_bounds_v], ['in_bounds_constant', in_bounds_constant], ['sane_constant', sane_constant], ['same_c', same_c], ['consistent_gv', consistent_gv], ['consistent_kv', consistent_kv], ['k', k], ['proof', self]])));
    		}
    		return success;
    	});}
    });
    for (let aClass of ConstantChaumPedersenProof.__bases__) {
    	__mergefields__ (ConstantChaumPedersenProof, aClass);
    }__mergefields__ (ConstantChaumPedersenProof, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});

    // Transcrypt'ed from Python, 2020-10-23 21:39:45
    var __name__$f = 'distutils';
    var Util =  __class__ ('Util', [object], {
    	__module__: __name__$f,
    	get strtobool () {return __get__ (this, function (str) {
    		return int (str) == 1;
    	});}
    });
    var util = Util ();

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var __name__$g = 'ballot';
    var _list_eq = function (list1, list2) {
    	return sorted (list1, __kwargtrans__ ({key: (function __lambda__ (x) {
    		return x.object_id;
    	})})) == sorted (list2, __kwargtrans__ ({key: (function __lambda__ (x) {
    		return x.object_id;
    	})}));
    };
    var ExtendedData =  __class__ ('ExtendedData', [object], {
    	__module__: __name__$g,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    });
    for (let aClass of ExtendedData.__bases__) {
    	__mergefields__ (ExtendedData, aClass);
    }__mergefields__ (ExtendedData, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var PlaintextBallotSelection =  __class__ ('PlaintextBallotSelection', [ElectionObjectBase], {
    	__module__: __name__$g,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	is_placeholder_selection: field (__kwargtrans__ ({py_default: false})),
    	extended_data: field (__kwargtrans__ ({py_default: null})),
    	get is_valid () {return __get__ (this, function (self, expected_object_id) {
    		if (self.object_id != expected_object_id) {
    			log_warning ('{}{}{}{}{}'.format (expected_object_id, self.object_id));
    			return false;
    		}
    		var choice = self.to_int ();
    		if (choice < 0 || choice > 1) {
    			log_warning ('{}{}'.format (str (self)));
    			return false;
    		}
    		return true;
    	});},
    	get to_int () {return __get__ (this, function (self) {
    		var as_bool = false;
    		try {
    			var as_bool = util.strtobool (self.vote.lower ());
    		}
    		catch (__except0__) {
    			if (isinstance (__except0__, ValueError)) {
    				log_warning ('{}{}{}'.format (self.vote.lower ()));
    			}
    			else {
    				throw __except0__;
    			}
    		}
    		var as_int = int (as_bool);
    		return as_int;
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		return isinstance (other, PlaintextBallotSelection) && self.object_id == other.object_id && self.vote == other.vote && self.is_placeholder_selection == other.is_placeholder_selection && self.extended_data == other.extended_data;
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		return !(self.__eq__ (other));
    	});}
    });
    for (let aClass of PlaintextBallotSelection.__bases__) {
    	__mergefields__ (PlaintextBallotSelection, aClass);
    }__mergefields__ (PlaintextBallotSelection, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var CiphertextSelection =  __class__ ('CiphertextSelection', [object], {
    	__module__: __name__$g,
    });
    var CiphertextBallotSelection =  __class__ ('CiphertextBallotSelection', [ElectionObjectBase, CiphertextSelection, CryptoHashCheckable], {
    	__module__: __name__$g,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	is_placeholder_selection: field (__kwargtrans__ ({py_default: false})),
    	nonce: field (__kwargtrans__ ({py_default: null})),
    	proof: field (__kwargtrans__ ({py_default: null})),
    	extended_data: field (__kwargtrans__ ({py_default: null})),
    	get is_valid_encryption () {return __get__ (this, function (self, seed_hash, elgamal_public_key, crypto_extended_base_hash) {
    		if (seed_hash != self.description_hash) {
    			log_warning ('{}{}{}{}{}{}{}'.format (self.object_id, str (seed_hash), str (self.description_hash)));
    			return false;
    		}
    		var recalculated_crypto_hash = self.crypto_hash_with (seed_hash);
    		if (self.crypto_hash != recalculated_crypto_hash) {
    			log_warning ('{}{}{}{}{}{}{}'.format (self.object_id, str (recalculated_crypto_hash), str (self.crypto_hash)));
    			return false;
    		}
    		if (self.proof === null) {
    			log_warning ('{}{}'.format (self.object_id));
    			return false;
    		}
    		return self.proof.is_valid (self.ciphertext, elgamal_public_key, crypto_extended_base_hash);
    	});},
    	get crypto_hash_with () {return __get__ (this, function (self, seed_hash) {
    		return _ciphertext_ballot_selection_crypto_hash_with (self.object_id, seed_hash, self.ciphertext);
    	});}
    });
    for (let aClass of CiphertextBallotSelection.__bases__) {
    	__mergefields__ (CiphertextBallotSelection, aClass);
    }__mergefields__ (CiphertextBallotSelection, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var _ciphertext_ballot_selection_crypto_hash_with = function (object_id, seed_hash, ciphertext) {
    	return hash_elems (object_id, seed_hash, ciphertext.crypto_hash ());
    };
    var PlaintextBallotContest =  __class__ ('PlaintextBallotContest', [ElectionObjectBase], {
    	__module__: __name__$g,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	ballot_selections: field (__kwargtrans__ ({default_factory: (function __lambda__ () {
    		return [];
    	})})),
    	get is_valid () {return __get__ (this, function (self, expected_object_id, expected_number_selections, expected_number_elected, votes_allowed) {
    		if (typeof votes_allowed == 'undefined' || (votes_allowed != null && votes_allowed.hasOwnProperty ("__kwargtrans__"))) {			var votes_allowed = null;
    		}		if (self.object_id != expected_object_id) {
    			log_warning ('{}{}{}{}{}'.format (expected_object_id, self.object_id));
    			return false;
    		}
    		if (len (self.ballot_selections) > expected_number_selections) {
    			log_warning ('{}{}{}{}{}'.format (expected_number_selections, len (self.ballot_selections)));
    			return false;
    		}
    		var number_elected = 0;
    		var votes = 0;
    		for (var selection of self.ballot_selections) {
    			var selection_count = selection.to_int ();
    			votes += selection_count;
    			if (selection_count >= 1) {
    				number_elected += 1;
    			}
    		}
    		if (number_elected > expected_number_elected) {
    			log_warning ('{}{}{}{}{}'.format (expected_number_elected, number_elected));
    			return false;
    		}
    		if (votes_allowed !== null && votes > votes_allowed) {
    			log_warning ('{}{}{}{}{}'.format (votes_allowed, votes));
    			return false;
    		}
    		return true;
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		return isinstance (other, PlaintextBallotContest) && _list_eq (self.ballot_selections, other.ballot_selections);
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		return !(self.__eq__ (other));
    	});}
    });
    for (let aClass of PlaintextBallotContest.__bases__) {
    	__mergefields__ (PlaintextBallotContest, aClass);
    }__mergefields__ (PlaintextBallotContest, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var CiphertextBallotContest =  __class__ ('CiphertextBallotContest', [ElectionObjectBase, CryptoHashCheckable], {
    	__module__: __name__$g,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	nonce: null,
    	proof: null,
    	get __eq__ () {return __get__ (this, function (self, other) {
    		return isinstance (other, CiphertextBallotContest) && self.object_id == other.object_id && _list_eq (self.ballot_selections, other.ballot_selections) && self.description_hash == other.description_hash && self.crypto_hash == other.crypto_hash && self.nonce == other.nonce && self.proof == other.proof;
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		return !(self.__eq__ (other));
    	});},
    	get aggregate_nonce () {return __get__ (this, function (self) {
    		return _ciphertext_ballot_contest_aggregate_nonce (self.object_id, self.ballot_selections);
    	});},
    	get crypto_hash_with () {return __get__ (this, function (self, seed_hash) {
    		return _ciphertext_ballot_context_crypto_hash (self.object_id, self.ballot_selections, seed_hash);
    	});},
    	get elgamal_accumulate () {return __get__ (this, function (self) {
    		return _ciphertext_ballot_elgamal_accumulate (self.ballot_selections);
    	});},
    	get is_valid_encryption () {return __get__ (this, function (self, seed_hash, elgamal_public_key, crypto_extended_base_hash) {
    		if (seed_hash != self.description_hash) {
    			log_warning ('{}{}{}{}{}{}{}'.format (self.object_id, str (seed_hash), str (self.description_hash)));
    			return false;
    		}
    		var recalculated_crypto_hash = self.crypto_hash_with (seed_hash);
    		if (self.crypto_hash != recalculated_crypto_hash) {
    			log_warning ('{}{}{}{}{}{}{}'.format (self.object_id, str (recalculated_crypto_hash), str (self.crypto_hash)));
    			return false;
    		}
    		if (self.proof === null) {
    			log_warning ('{}{}'.format (self.object_id));
    			return false;
    		}
    		var elgamal_accumulation = self.elgamal_accumulate ();
    		return self.proof.is_valid (elgamal_accumulation, elgamal_public_key, crypto_extended_base_hash);
    	});}
    });
    for (let aClass of CiphertextBallotContest.__bases__) {
    	__mergefields__ (CiphertextBallotContest, aClass);
    }__mergefields__ (CiphertextBallotContest, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var _ciphertext_ballot_elgamal_accumulate = function (ballot_selections) {
    	return elgamal_add (...(function () {
    		var __accu0__ = [];
    		for (var selection of ballot_selections) {
    			__accu0__.append (selection.ciphertext);
    		}
    		return __accu0__;
    	}) ());
    };
    var _ciphertext_ballot_context_crypto_hash = function (object_id, ballot_selections, seed_hash) {
    	if (len (ballot_selections) == 0) {
    		log_warning ('{}{}{}'.format (object_id));
    		return ZERO_MOD_Q;
    	}
    	var selection_hashes = (function () {
    		var __accu0__ = [];
    		for (var selection of ballot_selections) {
    			__accu0__.append (selection.crypto_hash);
    		}
    		return __accu0__;
    	}) ();
    	return hash_elems (object_id, seed_hash, ...selection_hashes);
    };
    var _ciphertext_ballot_contest_aggregate_nonce = function (object_id, ballot_selections) {
    	var selection_nonces = list ();
    	for (var selection of ballot_selections) {
    		if (selection.nonce === null) {
    			log_warning ('{}{}{}'.format (object_id));
    			return null;
    		}
    		else {
    			selection_nonces.append (selection.nonce);
    		}
    	}
    	return add_q (...selection_nonces);
    };
    var PlaintextBallot =  __class__ ('PlaintextBallot', [ElectionObjectBase], {
    	__module__: __name__$g,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	get is_valid () {return __get__ (this, function (self, expected_ballot_style_id) {
    		if (self.ballot_style != expected_ballot_style_id) {
    			log_warning ('{}{}{}{}{}{}{}'.format (self.object_id, expected_ballot_style_id, self.ballot_style));
    			return false;
    		}
    		return true;
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		return isinstance (other, PlaintextBallot) && self.ballot_style == other.ballot_style && _list_eq (self.contests, other.contests);
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		return !(self.__eq__ (other));
    	});}
    });
    for (let aClass of PlaintextBallot.__bases__) {
    	__mergefields__ (PlaintextBallot, aClass);
    }__mergefields__ (PlaintextBallot, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var CiphertextBallot =  __class__ ('CiphertextBallot', [ElectionObjectBase, CryptoHashCheckable], {
    	__module__: __name__$g,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		return isinstance (other, CiphertextBallot) && self.object_id == other.object_id && self.ballot_style == other.ballot_style && self.description_hash == other.description_hash && self.previous_tracking_hash == other.previous_tracking_hash && _list_eq (self.contests, other.contests) && self.tracking_hash == other.tracking_hash && self.timestamp == other.timestamp && self.crypto_hash == other.crypto_hash && self.nonce == other.nonce;
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		return !(self.__eq__ (other));
    	});},
    	get nonce_seed () {return function (description_hash, object_id, nonce) {
    		return hash_elems (description_hash, object_id, nonce);
    	};},
    	get hashed_ballot_nonce () {return __get__ (this, function (self) {
    		if (self.nonce === null) {
    			log_warning ('{}{}{}'.format (self.object_id));
    			return null;
    		}
    		return self.nonce_seed (self.description_hash, self.object_id, self.nonce);
    	});},
    	get get_tracker_code () {return __get__ (this, function (self) {
    		if (!(self.tracking_hash)) {
    			return null;
    		}
    		return tracker_hash_to_words (self.tracking_hash);
    	});},
    	get crypto_hash_with () {return __get__ (this, function (self, seed_hash) {
    		if (len (self.contests) == 0) {
    			log_warning ('{}{}{}'.format (self.object_id));
    			return ZERO_MOD_Q;
    		}
    		var contest_hashes = (function () {
    			var __accu0__ = [];
    			for (var contest of self.contests) {
    				__accu0__.append (contest.crypto_hash);
    			}
    			return __accu0__;
    		}) ();
    		return hash_elems (self.object_id, seed_hash, ...contest_hashes);
    	});},
    	get is_valid_encryption () {return __get__ (this, function (self, seed_hash, elgamal_public_key, crypto_extended_base_hash) {
    		if (seed_hash != self.description_hash) {
    			log_warning ('{}{}{}{}{}{}{}'.format (self.object_id, str (seed_hash), str (self.description_hash)));
    			return false;
    		}
    		var recalculated_crypto_hash = self.crypto_hash_with (seed_hash);
    		if (self.crypto_hash != recalculated_crypto_hash) {
    			log_warning ('{}{}{}{}{}{}{}'.format (self.object_id, str (recalculated_crypto_hash), str (self.crypto_hash)));
    			return false;
    		}
    		var valid_proofs = list ();
    		for (var contest of self.contests) {
    			for (var selection of contest.ballot_selections) {
    				valid_proofs.append (selection.is_valid_encryption (selection.description_hash, elgamal_public_key, crypto_extended_base_hash));
    			}
    			valid_proofs.append (contest.is_valid_encryption (contest.description_hash, elgamal_public_key, crypto_extended_base_hash));
    		}
    		return all (valid_proofs);
    	});}
    });
    for (let aClass of CiphertextBallot.__bases__) {
    	__mergefields__ (CiphertextBallot, aClass);
    }__mergefields__ (CiphertextBallot, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var BallotBoxState =  __class__ ('BallotBoxState', [Enum], {
    	__module__: __name__$g,
    	CAST: 1,
    	SPOILED: 2,
    	UNKNOWN: 999
    });
    var CiphertextAcceptedBallot =  __class__ ('CiphertextAcceptedBallot', [CiphertextBallot], {
    	__module__: __name__$g,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		return isinstance (other, CiphertextAcceptedBallot) && __super__ (CiphertextAcceptedBallot, '__eq__') (self, self, other) && self.state == other.state;
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		return !(self.__eq__ (other));
    	});}
    });
    for (let aClass of CiphertextAcceptedBallot.__bases__) {
    	__mergefields__ (CiphertextAcceptedBallot, aClass);
    }__mergefields__ (CiphertextAcceptedBallot, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});

    // Transcrypt'ed from Python, 2020-10-23 21:39:44
    var __name__$h = 'election';
    var ElectionType =  unique ( __class__ ('ElectionType', [Enum], {
    	__module__: __name__$h,
    	unknown: 0,
    	general: 1,
    	partisan_primary_closed: 2,
    	partisan_primary_open: 3,
    	primary: 4,
    	runoff: 5,
    	special: 6,
    	other: 7
    }));
    var ReportingUnitType =  unique ( __class__ ('ReportingUnitType', [Enum], {
    	__module__: __name__$h,
    	unknown: 0,
    	ballot_batch: 1,
    	ballot_style_area: 2,
    	borough: 3,
    	city: 4,
    	city_council: 5,
    	combined_precinct: 6,
    	congressional: 7,
    	country: 8,
    	county: 9,
    	county_council: 10,
    	drop_box: 11,
    	judicial: 12,
    	municipality: 13,
    	polling_place: 14,
    	precinct: 15,
    	school: 16,
    	special: 17,
    	split_precinct: 18,
    	state: 19,
    	state_house: 20,
    	state_senate: 21,
    	township: 22,
    	utility: 23,
    	village: 24,
    	vote_center: 25,
    	ward: 26,
    	water: 27,
    	other: 28
    }));
    var VoteVariationType =  unique ( __class__ ('VoteVariationType', [Enum], {
    	__module__: __name__$h,
    	unknown: 0,
    	one_of_m: 1,
    	approval: 2,
    	borda: 3,
    	cumulative: 4,
    	majority: 5,
    	n_of_m: 6,
    	plurality: 7,
    	proportional: 8,
    	range: 9,
    	rcv: 10,
    	super_majority: 11,
    	other: 12
    }));
    var AnnotatedString =  __class__ ('AnnotatedString', [Serializable, CryptoHashable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	annotation: field (__kwargtrans__ ({py_default: ''})),
    	value: field (__kwargtrans__ ({py_default: ''})),
    	get crypto_hash () {return __get__ (this, function (self) {
    		return hash_elems (self.annotation, self.value);
    	});}
    });
    for (let aClass of AnnotatedString.__bases__) {
    	__mergefields__ (AnnotatedString, aClass);
    }__mergefields__ (AnnotatedString, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var Language =  __class__ ('Language', [Serializable, CryptoHashable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	language: field (__kwargtrans__ ({py_default: 'en'})),
    	get crypto_hash () {return __get__ (this, function (self) {
    		return hash_elems (self.value, self.language);
    	});}
    });
    for (let aClass of Language.__bases__) {
    	__mergefields__ (Language, aClass);
    }__mergefields__ (Language, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var InternationalizedText =  __class__ ('InternationalizedText', [Serializable, CryptoHashable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	text: field (__kwargtrans__ ({default_factory: (function __lambda__ () {
    		return [];
    	})})),
    	get crypto_hash () {return __get__ (this, function (self) {
    		return hash_elems (self.text);
    	});}
    });
    for (let aClass of InternationalizedText.__bases__) {
    	__mergefields__ (InternationalizedText, aClass);
    }__mergefields__ (InternationalizedText, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var ContactInformation =  __class__ ('ContactInformation', [Serializable, CryptoHashable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	address_line: field (__kwargtrans__ ({py_default: null})),
    	email: field (__kwargtrans__ ({py_default: null})),
    	phone: field (__kwargtrans__ ({py_default: null})),
    	py_name: field (__kwargtrans__ ({py_default: null})),
    	get crypto_hash () {return __get__ (this, function (self) {
    		return hash_elems (self.py_name, self.address_line, self.email, self.phone);
    	});}
    });
    for (let aClass of ContactInformation.__bases__) {
    	__mergefields__ (ContactInformation, aClass);
    }__mergefields__ (ContactInformation, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var GeopoliticalUnit =  __class__ ('GeopoliticalUnit', [ElectionObjectBase, CryptoHashable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	contact_information: field (__kwargtrans__ ({py_default: null})),
    	get crypto_hash () {return __get__ (this, function (self) {
    		return hash_elems (self.object_id, self.py_name, str (self.py_metatype.py_name), self.contact_information);
    	});}
    });
    for (let aClass of GeopoliticalUnit.__bases__) {
    	__mergefields__ (GeopoliticalUnit, aClass);
    }__mergefields__ (GeopoliticalUnit, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var BallotStyle =  __class__ ('BallotStyle', [ElectionObjectBase, CryptoHashable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	geopolitical_unit_ids: field (__kwargtrans__ ({py_default: null})),
    	party_ids: field (__kwargtrans__ ({py_default: null})),
    	image_uri: field (__kwargtrans__ ({py_default: null})),
    	get crypto_hash () {return __get__ (this, function (self) {
    		return hash_elems (self.object_id, self.geopolitical_unit_ids, self.party_ids, self.image_uri);
    	});}
    });
    for (let aClass of BallotStyle.__bases__) {
    	__mergefields__ (BallotStyle, aClass);
    }__mergefields__ (BallotStyle, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var Party =  __class__ ('Party', [ElectionObjectBase, CryptoHashable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	ballot_name: field (__kwargtrans__ ({py_default: InternationalizedText ()})),
    	abbreviation: field (__kwargtrans__ ({py_default: null})),
    	color: field (__kwargtrans__ ({py_default: null})),
    	logo_uri: field (__kwargtrans__ ({py_default: null})),
    	get get_party_id () {return __get__ (this, function (self) {
    		return self.object_id;
    	});},
    	get crypto_hash () {return __get__ (this, function (self) {
    		return hash_elems (self.object_id, self.ballot_name, self.abbreviation, self.color, self.logo_uri);
    	});}
    });
    for (let aClass of Party.__bases__) {
    	__mergefields__ (Party, aClass);
    }__mergefields__ (Party, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var Candidate =  __class__ ('Candidate', [ElectionObjectBase, CryptoHashable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	ballot_name: field (__kwargtrans__ ({py_default: InternationalizedText ()})),
    	party_id: field (__kwargtrans__ ({py_default: null})),
    	image_uri: field (__kwargtrans__ ({py_default: null})),
    	is_write_in: field (__kwargtrans__ ({py_default: null})),
    	get get_candidate_id () {return __get__ (this, function (self) {
    		return self.object_id;
    	});},
    	get crypto_hash () {return __get__ (this, function (self) {
    		return hash_elems (self.object_id, self.ballot_name, self.party_id, self.image_uri);
    	});}
    });
    for (let aClass of Candidate.__bases__) {
    	__mergefields__ (Candidate, aClass);
    }__mergefields__ (Candidate, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var SelectionDescription =  __class__ ('SelectionDescription', [ElectionObjectBase, CryptoHashable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	get crypto_hash () {return __get__ (this, function (self) {
    		return hash_elems (self.object_id, self.sequence_order, self.candidate_id);
    	});}
    });
    for (let aClass of SelectionDescription.__bases__) {
    	__mergefields__ (SelectionDescription, aClass);
    }__mergefields__ (SelectionDescription, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var ContestDescription =  __class__ ('ContestDescription', [ElectionObjectBase, CryptoHashable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	ballot_selections: field (__kwargtrans__ ({default_factory: (function __lambda__ () {
    		return [];
    	})})),
    	ballot_title: field (__kwargtrans__ ({py_default: null})),
    	ballot_subtitle: field (__kwargtrans__ ({py_default: null})),
    	get __eq__ () {return __get__ (this, function (self, other) {
    		return isinstance (other, ContestDescription) && self.electoral_district_id == other.electoral_district_id && self.sequence_order == other.sequence_order && self.votes_allowed == other.votes_allowed && self.number_elected == other.number_elected && self.votes_allowed == other.votes_allowed && self.py_name == other.py_name && _list_eq (self.ballot_selections, other.ballot_selections) && self.ballot_title == other.ballot_title && self.ballot_subtitle == other.ballot_subtitle;
    	});},
    	get crypto_hash () {return __get__ (this, function (self) {
    		return hash_elems (self.object_id, self.sequence_order, self.electoral_district_id, str (self.vote_variation.py_name), self.ballot_title, self.ballot_subtitle, self.py_name, self.number_elected, self.votes_allowed, self.ballot_selections);
    	});},
    	get is_valid () {return __get__ (this, function (self) {
    		var contest_has_valid_number_elected = self.number_elected <= len (self.ballot_selections);
    		var contest_has_valid_votes_allowed = self.votes_allowed === null || self.number_elected <= self.votes_allowed;
    		var candidate_ids = set ();
    		var selection_ids = set ();
    		var sequence_ids = set ();
    		var expected_selection_count = len (self.ballot_selections);
    		for (var selection of self.ballot_selections) {
    			if (!__in__ (selection.object_id, selection_ids)) {
    				selection_ids.add (selection.object_id);
    			}
    			if (!__in__ (selection.sequence_order, sequence_ids)) {
    				sequence_ids.add (selection.sequence_order);
    			}
    			if (!__in__ (selection.candidate_id, candidate_ids)) {
    				candidate_ids.add (selection.candidate_id);
    			}
    		}
    		var selections_have_valid_candidate_ids = len (candidate_ids) == expected_selection_count;
    		var selections_have_valid_selection_ids = len (selection_ids) == expected_selection_count;
    		var selections_have_valid_sequence_ids = len (sequence_ids) == expected_selection_count;
    		var success = contest_has_valid_number_elected && contest_has_valid_votes_allowed && selections_have_valid_candidate_ids && selections_have_valid_selection_ids && selections_have_valid_sequence_ids;
    		if (!(success)) {
    			log_warning ('Contest %s failed validation check: %s', self.object_id, str (dict ([['contest_has_valid_number_elected', contest_has_valid_number_elected], ['contest_has_valid_votes_allowed', contest_has_valid_votes_allowed], ['selections_have_valid_candidate_ids', selections_have_valid_candidate_ids], ['selections_have_valid_selection_ids', selections_have_valid_selection_ids], ['selections_have_valid_sequence_ids', selections_have_valid_sequence_ids]])));
    		}
    		return success;
    	});}
    });
    for (let aClass of ContestDescription.__bases__) {
    	__mergefields__ (ContestDescription, aClass);
    }__mergefields__ (ContestDescription, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var CandidateContestDescription =  __class__ ('CandidateContestDescription', [ContestDescription], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	primary_party_ids: field (__kwargtrans__ ({default_factory: (function __lambda__ () {
    		return [];
    	})}))
    });
    for (let aClass of CandidateContestDescription.__bases__) {
    	__mergefields__ (CandidateContestDescription, aClass);
    }__mergefields__ (CandidateContestDescription, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var ReferendumContestDescription =  __class__ ('ReferendumContestDescription', [ContestDescription], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    });
    for (let aClass of ReferendumContestDescription.__bases__) {
    	__mergefields__ (ReferendumContestDescription, aClass);
    }__mergefields__ (ReferendumContestDescription, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var ContestDescriptionWithPlaceholders =  __class__ ('ContestDescriptionWithPlaceholders', [ContestDescription], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	placeholder_selections: field (__kwargtrans__ ({default_factory: (function __lambda__ () {
    		return [];
    	})})),
    	get is_valid () {return __get__ (this, function (self) {
    		var contest_description_validates = __super__ (ContestDescriptionWithPlaceholders, 'is_valid') (self);
    		return contest_description_validates && len (self.placeholder_selections) == self.number_elected;
    	});},
    	get is_placeholder () {return __get__ (this, function (self, selection) {
    		return __in__ (selection, self.placeholder_selections);
    	});},
    	get selection_for () {return __get__ (this, function (self, selection_id) {
    		var matching_selections = list (filter ((function __lambda__ (i) {
    			return i.object_id == selection_id;
    		}), self.ballot_selections));
    		if (any (matching_selections)) {
    			return matching_selections [0];
    		}
    		var matching_placeholders = list (filter ((function __lambda__ (i) {
    			return i.object_id == selection_id;
    		}), self.placeholder_selections));
    		if (any (matching_placeholders)) {
    			return matching_placeholders [0];
    		}
    		else {
    			return null;
    		}
    	});}
    });
    for (let aClass of ContestDescriptionWithPlaceholders.__bases__) {
    	__mergefields__ (ContestDescriptionWithPlaceholders, aClass);
    }__mergefields__ (ContestDescriptionWithPlaceholders, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var ElectionDescription =  __class__ ('ElectionDescription', [Serializable, CryptoHashable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	py_name: field (__kwargtrans__ ({py_default: null})),
    	contact_information: field (__kwargtrans__ ({py_default: null})),
    	get __eq__ () {return __get__ (this, function (self, other) {
    		return isinstance (other, ElectionDescription) && self.election_scope_id == other.election_scope_id && self.py_metatype == other.py_metatype && self.start_date == other.start_date && self.end_date == other.end_date && _list_eq (self.geopolitical_units, other.geopolitical_units) && _list_eq (self.parties, other.parties) && _list_eq (self.candidates, other.candidates) && _list_eq (self.contests, other.contests) && _list_eq (self.ballot_styles, other.ballot_styles) && self.py_name == other.py_name && self.contact_information == other.contact_information;
    	});},
    	get crypto_hash () {return __get__ (this, function (self) {
    		return hash_elems (self.election_scope_id, str (self.py_metatype.py_name), to_ticks (self.start_date), to_ticks (self.end_date), self.py_name, self.contact_information, self.geopolitical_units, self.parties, self.contests, self.ballot_styles);
    	});},
    	get is_valid () {return __get__ (this, function (self) {
    		var gp_unit_ids = set ();
    		var ballot_style_ids = set ();
    		var party_ids = set ();
    		var candidate_ids = set ();
    		var contest_ids = set ();
    		var selection_ids = set ();
    		for (var gp_unit of self.geopolitical_units) {
    			if (!__in__ (gp_unit.object_id, gp_unit_ids)) {
    				gp_unit_ids.add (gp_unit.object_id);
    			}
    		}
    		var geopolitical_units_valid = len (gp_unit_ids) == len (self.geopolitical_units);
    		var ballot_styles_have_valid_gp_unit_ids = true;
    		for (var style of self.ballot_styles) {
    			if (!__in__ (style.object_id, ballot_style_ids)) {
    				ballot_style_ids.add (style.object_id);
    			}
    			if (style.geopolitical_unit_ids === null) {
    				var ballot_styles_have_valid_gp_unit_ids = false;
    				break;
    			}
    			for (var gp_unit_id of style.geopolitical_unit_ids) {
    				var ballot_styles_have_valid_gp_unit_ids = ballot_styles_have_valid_gp_unit_ids && __in__ (gp_unit_id, gp_unit_ids);
    			}
    		}
    		var ballot_styles_valid = len (ballot_style_ids) == len (self.ballot_styles) && ballot_styles_have_valid_gp_unit_ids;
    		for (var party of self.parties) {
    			if (!__in__ (party.object_id, party_ids)) {
    				party_ids.add (party.object_id);
    			}
    		}
    		var parties_valid = len (party_ids) == len (self.parties);
    		var candidates_have_valid_party_ids = true;
    		for (var candidate of self.candidates) {
    			if (!__in__ (candidate.object_id, candidate_ids)) {
    				candidate_ids.add (candidate.object_id);
    			}
    			var candidates_have_valid_party_ids = candidates_have_valid_party_ids && (candidate.party_id === null || __in__ (candidate.party_id, party_ids));
    		}
    		var candidates_have_valid_length = len (candidate_ids) == len (self.candidates);
    		var candidates_valid = candidates_have_valid_length && candidates_have_valid_party_ids;
    		var contests_validate_their_properties = true;
    		var contests_have_valid_electoral_district_id = true;
    		var candidate_contests_have_valid_party_ids = true;
    		var contest_sequence_ids = set ();
    		for (var contest of self.contests) {
    			var contests_validate_their_properties = contests_validate_their_properties && contest.is_valid ();
    			if (!__in__ (contest.object_id, contest_ids)) {
    				contest_ids.add (contest.object_id);
    			}
    			if (!__in__ (contest.sequence_order, contest_sequence_ids)) {
    				contest_sequence_ids.add (contest.sequence_order);
    			}
    			var contests_have_valid_electoral_district_id = contests_have_valid_electoral_district_id && __in__ (contest.electoral_district_id, gp_unit_ids);
    			if (isinstance (contest, CandidateContestDescription)) {
    				var candidate_contest = cast (CandidateContestDescription, contest);
    				if (candidate_contest.primary_party_ids !== null) {
    					for (var primary_party_id of candidate_contest.primary_party_ids) {
    						var candidate_contests_have_valid_party_ids = candidate_contests_have_valid_party_ids && __in__ (primary_party_id, party_ids);
    					}
    				}
    			}
    		}
    		var contests_have_valid_object_ids = len (contest_ids) == len (self.contests);
    		var contests_have_valid_sequence_ids = len (contest_sequence_ids) == len (self.contests);
    		var contests_valid = contests_have_valid_object_ids && contests_have_valid_sequence_ids && contests_validate_their_properties && contests_have_valid_electoral_district_id && candidate_contests_have_valid_party_ids;
    		var success = geopolitical_units_valid && ballot_styles_valid && parties_valid && candidates_valid && contests_valid;
    		if (!(success)) {
    			log_warning ('Election failed validation check: is_valid: %s', str (dict ([['geopolitical_units_valid', geopolitical_units_valid], ['ballot_styles_valid', ballot_styles_valid], ['ballot_styles_have_valid_gp_unit_ids', ballot_styles_have_valid_gp_unit_ids], ['parties_valid', parties_valid], ['candidates_valid', candidates_valid], ['candidates_have_valid_length', candidates_have_valid_length], ['candidates_have_valid_party_ids', candidates_have_valid_party_ids], ['contests_valid', contests_valid], ['contests_have_valid_object_ids', contests_have_valid_object_ids], ['contests_have_valid_sequence_ids', contests_have_valid_sequence_ids], ['contests_validate_their_properties', contests_validate_their_properties], ['contests_have_valid_electoral_district_id', contests_have_valid_electoral_district_id], ['candidate_contests_have_valid_party_ids', candidate_contests_have_valid_party_ids]])));
    		}
    		return success;
    	});}
    });
    for (let aClass of ElectionDescription.__bases__) {
    	__mergefields__ (ElectionDescription, aClass);
    }__mergefields__ (ElectionDescription, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var InternalElectionDescription =  __class__ ('InternalElectionDescription', [object], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	description: null,
    	geopolitical_units: field (__kwargtrans__ ({init: false})),
    	contests: field (__kwargtrans__ ({init: false})),
    	ballot_styles: field (__kwargtrans__ ({init: false})),
    	description_hash: field (__kwargtrans__ ({init: false})),
    	get __post_init__ () {return __get__ (this, function (self, description) {
    		object.__setattr__ (self, 'description_hash', description.crypto_hash ());
    		object.__setattr__ (self, 'geopolitical_units', description.geopolitical_units);
    		object.__setattr__ (self, 'ballot_styles', description.ballot_styles);
    		object.__setattr__ (self, 'contests', self._generate_contests_with_placeholders (description));
    	});},
    	get contest_for () {return __get__ (this, function (self, contest_id) {
    		var matching_contests = list (filter ((function __lambda__ (i) {
    			return i.object_id == contest_id;
    		}), self.contests));
    		if (any (matching_contests)) {
    			return matching_contests [0];
    		}
    		else {
    			return null;
    		}
    	});},
    	get get_ballot_style () {return __get__ (this, function (self, ballot_style_id) {
    		var style = list (filter ((function __lambda__ (i) {
    			return i.object_id == ballot_style_id;
    		}), self.ballot_styles)) [0];
    		return style;
    	});},
    	get get_contests_for () {return __get__ (this, function (self, ballot_style_id) {
    		var style = self.get_ballot_style (ballot_style_id);
    		if (style.geopolitical_unit_ids === null) {
    			return list ();
    		}
    		var gp_unit_ids = (function () {
    			var __accu0__ = [];
    			for (var gp_unit_id of style.geopolitical_unit_ids) {
    				__accu0__.append (gp_unit_id);
    			}
    			return __accu0__;
    		}) ();
    		var contests = list (filter ((function __lambda__ (i) {
    			return __in__ (i.electoral_district_id, gp_unit_ids);
    		}), self.contests));
    		return contests;
    	});},
    	get _generate_contests_with_placeholders () {return __get__ (this, function (self, description) {
    		var contests = list ();
    		for (var contest of description.contests) {
    			var placeholder_selections = generate_placeholder_selections_from (contest, contest.number_elected);
    			contests.append (contest_description_with_placeholders_from (contest, placeholder_selections));
    		}
    		return contests;
    	});}
    });
    for (let aClass of InternalElectionDescription.__bases__) {
    	__mergefields__ (InternalElectionDescription, aClass);
    }__mergefields__ (InternalElectionDescription, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var ElectionConstants =  __class__ ('ElectionConstants', [Serializable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	large_prime: P,
    	small_prime: Q,
    	cofactor: R,
    	generator: G
    });
    for (let aClass of ElectionConstants.__bases__) {
    	__mergefields__ (ElectionConstants, aClass);
    }__mergefields__ (ElectionConstants, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var CiphertextElectionContext =  __class__ ('CiphertextElectionContext', [Serializable], {
    	__module__: __name__$h,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    });
    for (let aClass of CiphertextElectionContext.__bases__) {
    	__mergefields__ (CiphertextElectionContext, aClass);
    }__mergefields__ (CiphertextElectionContext, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});
    var make_ciphertext_election_context = function (number_of_guardians, quorum, elgamal_public_key, description_hash) {
    	var crypto_base_hash = hash_elems (P, Q, G, number_of_guardians, quorum, description_hash);
    	var crypto_extended_base_hash = hash_elems (crypto_base_hash, elgamal_public_key);
    	return CiphertextElectionContext (__kwargtrans__ ({number_of_guardians: number_of_guardians, quorum: quorum, elgamal_public_key: elgamal_public_key, description_hash: description_hash, crypto_base_hash: crypto_base_hash, crypto_extended_base_hash: crypto_extended_base_hash}));
    };
    var contest_description_with_placeholders_from = function (description, placeholders) {
    	return ContestDescriptionWithPlaceholders (__kwargtrans__ ({object_id: description.object_id, electoral_district_id: description.electoral_district_id, sequence_order: description.sequence_order, vote_variation: description.vote_variation, number_elected: description.number_elected, votes_allowed: description.votes_allowed, py_name: description.py_name, ballot_selections: description.ballot_selections, ballot_title: description.ballot_title, ballot_subtitle: description.ballot_subtitle, placeholder_selections: placeholders}));
    };
    var generate_placeholder_selection_from = function (contest, use_sequence_id) {
    	if (typeof use_sequence_id == 'undefined' || (use_sequence_id != null && use_sequence_id.hasOwnProperty ("__kwargtrans__"))) {		var use_sequence_id = null;
    	}	var sequence_ids = (function () {
    		var __accu0__ = [];
    		for (var selection of contest.ballot_selections) {
    			__accu0__.append (selection.sequence_order);
    		}
    		return __accu0__;
    	}) ();
    	if (use_sequence_id === null) {
    		var use_sequence_id = max (...sequence_ids) + 1;
    	}
    	else if (__in__ (use_sequence_id, sequence_ids)) {
    		log_warning ('{}{}{}'.format (use_sequence_id));
    		return null;
    	}
    	var placeholder_object_id = '{}{}{}'.format (contest.object_id, use_sequence_id);
    	return SelectionDescription ('{}{}'.format (placeholder_object_id), '{}{}'.format (placeholder_object_id), use_sequence_id);
    };
    var generate_placeholder_selections_from = function (contest, count) {
    	var max_sequence_order = max ((function () {
    		var __accu0__ = [];
    		for (var selection of contest.ballot_selections) {
    			__accu0__.append (selection.sequence_order);
    		}
    		return __accu0__;
    	}) ());
    	var selections = list ();
    	for (var i = 0; i < count; i++) {
    		var sequence_order = (max_sequence_order + 1) + i;
    		selections.append (get_optional (generate_placeholder_selection_from (contest, sequence_order)));
    	}
    	return selections;
    };

    var __module_election__ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ElectionType: ElectionType,
        ReportingUnitType: ReportingUnitType,
        VoteVariationType: VoteVariationType,
        AnnotatedString: AnnotatedString,
        Language: Language,
        InternationalizedText: InternationalizedText,
        ContactInformation: ContactInformation,
        GeopoliticalUnit: GeopoliticalUnit,
        BallotStyle: BallotStyle,
        Party: Party,
        Candidate: Candidate,
        SelectionDescription: SelectionDescription,
        ContestDescription: ContestDescription,
        CandidateContestDescription: CandidateContestDescription,
        ReferendumContestDescription: ReferendumContestDescription,
        ContestDescriptionWithPlaceholders: ContestDescriptionWithPlaceholders,
        ElectionDescription: ElectionDescription,
        InternalElectionDescription: InternalElectionDescription,
        ElectionConstants: ElectionConstants,
        CiphertextElectionContext: CiphertextElectionContext,
        make_ciphertext_election_context: make_ciphertext_election_context,
        contest_description_with_placeholders_from: contest_description_with_placeholders_from,
        generate_placeholder_selection_from: generate_placeholder_selection_from,
        generate_placeholder_selections_from: generate_placeholder_selections_from
    });

    // Transcrypt'ed from Python, 2020-10-23 21:39:43
    var __name__$i = 'election_builder';
    var ElectionBuilder =  __class__ ('ElectionBuilder', [object], {
    	__module__: __name__$i,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		let names = self.__initfields__.values ();
    		for (let arg of args) {
    		    self [names.next () .value] = arg;
    		}
    		for (let name of kwargs.py_keys ()) {
    		    self [name] = kwargs [name];
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		let names = self.__reprfields__.values ();
    		let fields = [];
    		for (let name of names) {{
    		    fields.push (name + '=' + repr (self [name]));
    		}}
    		return  self.__name__ + '(' + ', '.join (fields) + ')'
    	});},
    	get __eq__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__eq__(list (otherFields));
    	});},
    	get __ne__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ne__(list (otherFields));
    	});},
    	get __lt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__lt__(list (otherFields));
    	});},
    	get __le__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__le__(list (otherFields));
    	});},
    	get __gt__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__gt__(list (otherFields));
    	});},
    	get __ge__ () {return __get__ (this, function (self, other) {
    		let names = self.__comparefields__.values ();
    		let selfFields = [];
    		let otherFields = [];
    		for (let name of names) {
    		    selfFields.push (self [name]);
    		    otherFields.push (other [name]);
    		}
    		return list (selfFields).__ge__(list (otherFields));
    	});},
    	internal_description: field (__kwargtrans__ ({init: false})),
    	elgamal_public_key: field (__kwargtrans__ ({py_default: null})),
    	get __post_init__ () {return __get__ (this, function (self) {
    		self.internal_description = InternalElectionDescription (self.description);
    	});},
    	get set_public_key () {return __get__ (this, function (self, elgamal_public_key) {
    		self.elgamal_public_key = elgamal_public_key;
    		return self;
    	});},
    	get build () {return __get__ (this, function (self) {
    		if (!(self.description.is_valid ())) {
    			return null;
    		}
    		if (self.elgamal_public_key === null) {
    			return null;
    		}
    		return tuple ([self.internal_description, make_ciphertext_election_context (self.number_of_guardians, self.quorum, get_optional (self.elgamal_public_key), self.description.crypto_hash ())]);
    	});}
    });
    for (let aClass of ElectionBuilder.__bases__) {
    	__mergefields__ (ElectionBuilder, aClass);
    }__mergefields__ (ElectionBuilder, {__reprfields__: new Set ([]), __comparefields__: new Set ([]), __initfields__: new Set ([])});

    var __module_election_builder__ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ElectionBuilder: ElectionBuilder
    });

    // Transcrypt'ed from Python, 2020-10-23 21:39:42
    var election = {};
    var election_builder = {};
    __nest__ (election_builder, '', __module_election_builder__);
    __nest__ (election, '', __module_election__);

    exports.ElementModQ = ElementModQ;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
