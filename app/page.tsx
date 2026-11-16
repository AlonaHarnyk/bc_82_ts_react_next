import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>Home page</p>
      <Image src="/image.jpg" alt="nature" width={400} height={400} />
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg"
        alt="nature"
        width={600}
        height={400}
      />
    </div>
  );
}
