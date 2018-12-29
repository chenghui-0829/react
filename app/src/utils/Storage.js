import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

const storage = new Storage({
    // maximum capacity, default 1000
    size: 1000,

    storageBackend: AsyncStorage,

    // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: null,

    // cache data in the memory. default is true.
    enableCache: true,
});


// for react native
global.storage = storage;

