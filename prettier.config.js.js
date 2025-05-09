/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  endOfLine: 'auto',
  // 行宽度
  printWidth: 100,
  // 缩进宽度 =》editorconfig
  tabWidth: 2,
  useTabs: false,
  // 单个参数取消空格
  arrowParens: 'avoid',
  bracketSpacing: true,
  // 配置 html 格式化
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html'
      }
    }
  ]
}

export default config
