import React from 'react';
import Gönderi from './Gönderi';
import './Gönderiler.css';

const Gönderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { postLikeFnCb, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map((post) => (
        <Gönderi key={post.id} gönderi ={post} gonderiyiBegen = {postLikeFnCb}/>
      ))}
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gönderiler;
