module.exports = {

    default: {

        require: [

            'step-definitions/**/*.ts',

            'hooks/**/*.ts'
        ],

        requireModule: [

            'ts-node/register'
        ],

        paths: [

            'features/**/*.feature'
        ],

        format: [
            'progress-bar',
             'allure-cucumberjs/reporter'           
        ],

        formatOptions: {

            snippetInterface: 'async-await',
            resultsDir: 'reports/allure-results'
        },

        publishQuiet: true,

        parallel: 1,

        retry: 0
    }
};