import React from 'react';
import { Link } from 'react-router-dom';
import LoginImage from '@components/LoginImage';

export default function Login() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <LoginImage />
      <section className="flex w-400">
        <form className="flex flex-col px-12" onSubmit={handleSubmit}>
          <input
            type="text"
            name="price"
            placeholder="아이디"
            // value={product.price ?? ''}
            // onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="패스워드"
            // placeholder="비밀번호"
            // value={product.title ?? ''}
            // onChange={handleChange}
            required
          />
          <Link to="/main">
            <button>로그인</button>
          </Link>
          <button>비밀번호 변경</button>
          <button>사용자 신청</button>
        </form>
      </section>
    </>
  );
}
