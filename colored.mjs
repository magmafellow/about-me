import { Chalk } from 'chalk'

const chalk = new Chalk({level: 1})

export function info(s){
  console.log( chalk.white(s) )
}

export function err(s){
  console.log( chalk.red(s) )
}

export function warn(s){
  console.log( chalk.yellow(s) )
}

export function success(s){
  console.log( chalk.green(s) )
}

// info('Hello World')
// err('Hello World')
// warn('Hello world')
// success('Done')
