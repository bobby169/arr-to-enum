import babel from '@rollup/plugin-babel';
// import {uglify} from "rollup-plugin-uglify";

export default {
    input: 'src/index.js',
    plugins: [
        babel({babelHelpers: 'bundled'})
    ],
    output: [
        {
            file: 'dist/arrToEnum.umd.js',
            format: 'umd',
            name: 'arrToEnum'
        },
        {
            file: 'dist/arrToEnum.esm.js',
            format: 'esm',
            name: 'arrToEnum',
            // plugins: [uglify()]
        }
    ]
}
