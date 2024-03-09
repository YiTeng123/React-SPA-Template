import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, "src"),
      },
    ]
  },
  css: {
    postcss: {
      plugins: [],

    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/main.scss";' // 加载全局样式，使用scss特性
      }
    },

  },
  // 开发服务器配置
  server: {
    host: '0.0.0.0',
    // open: true,
    port: 4000,
    // proxy: {
    //     '/api': {
    //         // target: 'http://120.78.83.29/api',
    //         target: 'http://192.168.31.17/api',
    //         changeOrigin: true,
    //         rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //     '/upload': {
    //         target: 'http://192.168.31.17/api',
    //         changeOrigin: true,
    //         rewrite: (path) => path.replace(/^\/upload/, ''),
    //     },
    // },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    target: 'modules', //设置最终构建的浏览器兼容目标  //es2015(编译成es5) | modules
    outDir: 'dist', // 构建得包名  默认：dist
    assetsDir: 'assets', // 静态资源得存放路径文件名  assets
    sourcemap: false, //构建后是否生成 source map 文件
    chunkSizeWarningLimit: 1000, //chunk 大小警告的限制（以 kbs 为单位）默认：500
    cssTarget: 'chrome61' //防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
  },
  plugins: [react(), TanStackRouterVite(), AutoImport({
    imports: ['react', 'react-router-dom',], dts: './src/auto-imports.d.ts', eslintrc: {
      enabled: true,
    },
    defaultExportByFilename: true,
  })],
})
