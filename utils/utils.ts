const glob = require('glob');
import { globalVars } from './globalvar';
export function generateHtmlReport() {
    // wait(5);
    // console.log(globalVars.appRootDir + globalVars.mochaReportFolder + '/*.json');
    // let files = glob.sync(globalVars.appRootDir + globalVars.mochaReportFolder + '/*.json');
    // console.log('Files');
    // console.log(files);
    // let browKeys = {};
    // let options = [];
    // for(let file of files) {
        

        
    // }

}

export function wait(seconds: number) {
    const start = new Date().getTime();
    let end = start;
    while(end < start + seconds*1000) {
        end = new Date().getTime();
    }
}