const exec = require('child_process').exec

function isBuild(url){
  return (url.indexOf("Resources") != -1) 
}

function start () {
    const path = require('path')
    console.log("load--server---");
    let _path = path.join(__dirname,"./")
    console.log("server _path::",_path);
    if (isBuild(_path)){
      _path = path.join(__dirname, '../../www/server/mac');//打包的
    }else{
      _path = path.join(__dirname, '../www/server/mac');//dev
    }
    console.log("server path::",_path);
    // 任何你期望执行的cmd命令，ls都可以
    let cmdStr1 = 'chmod a+x ./main && ./main '//'./main' //'ls'
    let cmdPath = _path //'./'
    // 子进程名称
    let workerProcess 
    runExec(cmdStr1) 

  function runExec (cmdStr) {
    console.log("run--server---");
    workerProcess = exec(cmdStr, { cwd: cmdPath })
    // 打印正常的后台可执行程序输出
    workerProcess.stdout.on('data', function (data) {
      console.log('stdout: ' + data)
    })
    // 打印错误的后台可执行程序输出
    workerProcess.stderr.on('data', function (data) {
      console.log('stderr: ' + data)
    })
    // 退出之后的输出
    workerProcess.on('close', function (code) {
      console.log('out code：' + code)
    })
  }
}



start();

