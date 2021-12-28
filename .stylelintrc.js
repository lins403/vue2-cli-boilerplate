module.exports = {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order', 'stylelint-prettier/recommended'],
  rules: {
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'export'], ignorePseudoElements: ['v-deep'] }]
  }
}
