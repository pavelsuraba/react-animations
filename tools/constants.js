import path from 'path';

export const ABSOLUTE_BASE = path.normalize(path.join(__dirname, '..'));

const constants = Object.freeze({
    ABSOLUTE_BASE,
    DIST: path.join(ABSOLUTE_BASE, '/'),
    SRC: path.join(ABSOLUTE_BASE, 'src/'),
    PORT: 8080
});

export const DIST = constants.DIST;
export const SRC = constants.SRC;
export const PORT = constants.PORT;

export default constants;
