/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, {useState} from 'react';

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import './App.css';
import BeğenBölümü from './bileşenler/Gönderiler/BeğenBölümü';
import Gönderiler from './bileşenler/Gönderiler/Gönderiler'
import Gönderi from './bileşenler/Gönderiler/Gönderi'
import GönderiBaşlığı from './bileşenler/Gönderiler/GönderiBaşlığı';
import AramaÇubuğu from './bileşenler/AramaÇubuğu/AramaÇubuğu'
import sahteVeri from './sahte-veri';

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [gonderiler,setGonderiler] = useState(sahteVeri);
  

	
  const searchAction = (seachTerms) => {
  
    let newPostArray = [];
    gonderiler.map((item) => {
      if(item.username.includes(seachTerms)){
        newPostArray.push(item)
        
      }
    });
    return newPostArray;
  };
	
  const gonderiyiBegen = gonderiID => {
  
    let newPostArray = [];
    gonderiler.map((item) => {
      if(item.id === gonderiID){
        item.likes++;
      }
      newPostArray.push(item)
    });
    setGonderiler(newPostArray);
  };

  return (
    <div className='App'>
      <AramaÇubuğu />
      <Gönderiler postLikeFnCb ={gonderiyiBegen} posts = {gonderiler} /> 
      
      
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */        
      }
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
    </div>
  );
};

export default App;
