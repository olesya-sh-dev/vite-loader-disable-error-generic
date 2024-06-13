type MyComponentProps<T> = {
  items: Array<T>,
  defaultItem: T
}

//<T,> с запятой в стрелочной функции, т.к. TS воспринимает <T> как компонент. В function declaration - все ок
const MyComponent = <T,>(props: MyComponentProps<T>) =>{
  console.log(props)
  return <p>some content</p>
}

const App = () => {
  const users: User[] = [
    { name: 'Bilbo', age: 111 },
    { name: 'Frodo', age: 33 },
  ]

  return (
    <>
      <MyComponent items={['react', 'typescript']} defaultItem={"h"} />
      <MyComponent items={users} defaultItem= {{ name: 'Sam', age: 40 }}/>
    </>
  )
}

type User = {
  name: string
  age: number
}
