import './App.css';
import Sayhello from './SayHello';

// JSX : 닫는 태그 필수 ( < /> )
// <input type='text' />

// class가 아니라 className으로 작성 (camelCase 사용)
// <h1 className='abc'>ddddd</h1>

// for가 아니라 htmlFor로 작성
// <label htmlFor='zzz'></label>

// 태그가 여러개일때 부모태그로 감싸면 에러 발생안함 
// 감싸는 부모태그는 1개여야함
// <> : 이름없는 태그 / 불필요한 태그 사용안해도됨


import SayHello from './SayHello';


function App() {

  const looping = () => {
    const helloList = [];
    for (let i = 0; i < 5; i++) {
      helloList.push(<SayHello />);
    }
    return helloList;
  };

  // jsx문법에서는 스크립트를 코드를 직접 사용 불가능
  // {} 안에서 함수호출문이나 변수참조를 할 수 있음.
  return (
    <>
      { looping() }
    </>
  );
}

export default App;
