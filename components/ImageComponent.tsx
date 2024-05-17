import Image from 'next/image';

const ImageComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/public/or9an!ze.png" // 画像ファイルのパス
        alt="Logo"
        width={500} // 画像の幅
        height={300} // 画像の高さ
        className="rounded-lg shadow-lg" // Tailwind CSSのクラス
      />
    </div>
  );
};

export default ImageComponent;