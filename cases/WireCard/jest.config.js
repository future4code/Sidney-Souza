módulo . exportações  =  {
    raízes : [ "<rootDir> / tests" ] ,
    transformar : {
       "^. + \\. tsx? $" : "ts-jest" ,
    } ,
    testRegex : "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$" ,
    moduleFileExtensions : [ "ts" ,  "tsx" ,  "js" ,  "jsx" ,  "json" ,  "node" ] ,
 } ;