type ClassNameProps = (string|[string,boolean])[];

const classNames = (...args: ClassNameProps) => {
  let classList: string[] = []
  
  args.forEach(className => {
    if(typeof className === 'string'){
      classList.push(className)
    } else {
      if(className[1]){
        classList.push(className[0])
      }
    }
  })

  return classList
}

export default classNames