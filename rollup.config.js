const TRANSPILE_DIR = process.env.TRANSPILE_DIR;
const DIST_DIR = process.env.DIST_DIR;

const config = {
    input: `${TRANSPILE_DIR}/__init__.js`,
    output: [{
        file: `${DIST_DIR}/voter.js`,
        format: 'umd',
        sourcemap: 'inline',
        name: 'voter'
    }]
}

export default config;