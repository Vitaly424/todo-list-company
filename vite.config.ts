import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData:
    //                 "@import './src/app/assets/styles/abstracts/mixins.scss';", // Путь к вашему файлу с миксинами
    //         },
    //     },
    // },
});
