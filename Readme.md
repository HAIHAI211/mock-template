安装 npm install supervisor -g 当我们用node app.js来执行app.js的时候,我们可以supervisor app.js来执行,这样,当我们修改了代码就能马上看到结果而不用重启.
注意: 当我们在执行npm start的时候,背地里其实是执行了node app.js,所以当我们在编写接口的时候,也可以不使用npm start只需执行node app.js就好了,如果我们需要修改接口使用supervisor app.js会很方便.
