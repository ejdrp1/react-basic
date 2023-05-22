// @컴포넌트의 기본 형태@
// 태그를 그리기위한 컴포넌트 (클래스 이름 앞글자 대문자 시작)

import React from "react";

// 컴포넌트
// 함수의 이름은 클래스 이름과 동일하게 작성
function SayHello() {
    return (
        <div>
            <p>안녕</p>
            <span>메롱</span>
        </div>
    );
}

// 내보내기
export default SayHello;


