module.exports = {
  default: {
    paths: ['src/features/**/*.feature'],
    requireModule: ['ts-node/register'],
    require: ['src/_configs/hooks.ts','src/features/**/*.step.ts', 'src/steps/*.step.ts'],
    language: 'pt',
    tags: '@smoke',
    format: ['json:reports/reports.json', 'html:reports/report.html']
  }
};