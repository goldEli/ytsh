import Link from "next/link";

interface ILogo {
  cn?: "";
}
const Logo = (props: ILogo) => {
  return (
    <div className={props.cn ? props.cn : "w-60"}>
      <Link href="/">
        <a>
          {" "}
          <img
            src="http://cdn.mepos.cn/skin/images/logo.png"
            alt="pos机排行榜"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
