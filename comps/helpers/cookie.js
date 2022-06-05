import cookieCutter from 'cookie-cutter';

const cookie = {
    get: (key) => cookieCutter.get(key),
    set: (key, value, options) => cookieCutter.set(key, value, { path: '/', ...options })
}

export { cookie };
