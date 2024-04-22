/** @format */

export default function Header() {
  return (
    <section
      className="flex items-center justify-end h-[40px] pr-4 bg-gray-800 text-white "
      style={{
        borderBottom: "1px solid #ccc", // 오른쪽 테두리 적용
        backgroundColor: "#1f2e3d", // 배경색
      }}
    >
      <p className="font-medium text-base">남은 시간: 09:11</p>
    </section>
  );
}
