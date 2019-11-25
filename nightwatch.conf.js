require('babel-core/register')
const chromedriver = require('chromedriver')
require('geckodriver')

module.exports = {

  src_folders: ['tests'],

  page_objects_path: './pages',
  globals_path: './hooks/globals.js',
  
      webdriver: {
        start_process: true,
      },

      // test_workers: {
      //   enabled: true,
      //   workers: 4
      // },
      
      test_settings: {
        default: {
          globals: {
            waitForConditionTimeout: 15000
          },
          webdriver: {
            server_path: chromedriver.path,
            port: 9515
          },
          desiredCapabilities: {
            browserName: "chrome"
          }
        },

        test_settings: {
          firefox: {
            globals: {
              waitForConditionTimeout: 15000
            },
            webdriver: {
              server_path: '.\\node_modules\\.bin\\geckodriver.cmd',
              port: 4444
            },
            desiredCapabilities: {
              browserName: "firefox"
            }
          }
        }
      }
    }