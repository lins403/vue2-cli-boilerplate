module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order', 'stylelint-prettier/recommended'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global', 'export']
          }
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep']
          }
        ]
      }
    }
  ]
}
