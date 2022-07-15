import type { PluginOption } from 'vite'

export default function vitePluginTemplate(): PluginOption {
  return {
    // 插件名称
    name: 'vite-plugin-template',
    // 在 vite 核心插件执行之前执行
    enforce: 'pre',
    // 指定在什么模式下使用该插件
    apply: 'build',

    // 1. vite 独有的钩子：可以在 vite 被解析之前修改 vite 的相关配置
    //    钩子接收原始用户配置 config 和一个描述配置环境的变量 env
    config(config, { command }) {
      console.log('hook: config')
    },

    // 2. vite 独有的钩子：在解析 vite 配置后调用。使用这个钩子读取和存储最终解析的配置。
    //    当插件需要根据运行的命令做一些不同的事情时，它很有用。
    configResolved(resolvedConfig) {
      console.log('hook: configResolved')
    },

    // 4. vite 独有的钩子：主要用来配置开发服务器，为 dev-server (connect 应用程序) 添加自定义的中间件
    configureServer(server) {
      console.log('hook: configureServer')
    },

    // 5. vite 独有的钩子：转换 index.html 的专用钩子。钩子接收当前的 HTML 字符串和转换上下文
    transformIndexHtml(html) {
      console.log('hook: transformIndexHtml')
    },

    // 6. vite 独有的钩子: 执行自定义 HMR 更新，可以通过 ws 往客户端发送自定义的事件
    handleHotUpdate({ file, server }) {
      console.log('hook: handleHotUpdate')
    },

    // 7. 构建阶段的通用钩子：在服务器启动时被调用：获取、操纵 Rollup 选项
    options(options) {
      console.log('hook: options')
    },

    // 8. 构建阶段的通用钩子：在服务器启动时被调用：每次开始构建时调用
    buildStart(options) {
      console.log('hook: buildStart')
    },

    // 9. 构建阶段的通用钩子：在每个传入模块请求时被调用：创建自定义确认函数，可以用来定位第三方依赖
    resolveId(source, importer, options) {
      console.log('hook: resolveId')
    },

    // 10. 构建阶段的通用钩子：在每个传入模块请求时被调用：可以自定义加载器，可用来返回自定义的内容
    load(id) {
      console.log('hook: load')
    },

    // 11. 构建阶段的通用钩子：在每个传入模块请求时被调用：在每个传入模块请求时被调用，主要是用来转换单个模块
    transform(code, id) {
      console.log('hook: transform')
    },

    // 12. 构建阶段的通用钩子：在构建结束后被调用，此处构建只是代表所有模块转义完成
    buildEnd() {
      console.log('hook: buildEnd')
    },

    // 13. 输出阶段钩子通用钩子：接受输出参数
    outputOptions(options) {
      console.log('hook: outputOptions')
    },

    // 14. 输出阶段钩子通用钩子：每次bundle.generate 和 bundle.write调用时都会被触发。
    renderStart(outputOptions, inputOptions) {
      console.log('hook: renderStart')
    },

    // 15. 输出阶段钩子通用钩子：用来给chunk增加hash
    augmentChunkHash(chunkInfo) {
      console.log('hook: augmentChunkHash')
    },

    // 16. 输出阶段钩子通用钩子：转译单个的chunk时触发。rollup输出每一个chunk文件的时候都会调用。
    renderChunk(code, chunk, options) {
      console.log('hook: renderChunk')
      return null
    },

    // 17. 输出阶段钩子通用钩子：在调用 bundle.write 之前立即触发这个hook
    generateBundle(options, bundle, isWrite) {
      console.log('hook: generateBundle')
    },

    // 18. 输出阶段钩子通用钩子：在调用 bundle.write后，所有的chunk都写入文件后，最后会调用一次 writeBundle
    writeBundle(options, bundle) {
      console.log('hook: writeBundle')
    },

    // 19. 通用钩子：在服务器关闭时被调用
    closeBundle() {
      console.log('hook: closeBundle')
    },
  }
}
