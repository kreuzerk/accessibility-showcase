const GUIDELINES = {
  FORM_CONTAINS_SUBMIT_BUTTON: 'WCAG2AA.Principle3.Guideline3_2.3_2_2.H32.2'
};

const checkAndIgnoreGuideline = (url, ignore) => ({ url, ignore });

const ignoreSubmit = url =>
  checkAndIgnoreGuideline(url, [GUIDELINES.FORM_CONTAINS_SUBMIT_BUTTON]);

module.exports = {
  defaults: {
    "timeout": 5000
  },
  urls: [
    ignoreSubmit("http://localhost:4200/forms")
  ]
}
