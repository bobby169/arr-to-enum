import babel from '@rollup/plugin-babel';
import {uglify} from "rollup-plugin-uglify";

export default {
    input: 'src/index.js',
    plugins: [
        babel({babelHelpers: 'bundled'})
    ],
    output: [
        {
            file: 'dist/arrToEnum.js',
            format: 'umd',
            name: 'arrToEnum'
        },
        {
            file: 'dist/arrToEnum.min.js',
            format: 'umd',
            name: 'arrToEnum',
            plugins: [uglify()]
        }
    ]
}
